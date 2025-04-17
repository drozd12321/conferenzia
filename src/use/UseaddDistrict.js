import regions from "@/utils/region";
export default function useAddDistrict(data) {
  regions.forEach((item) => {
    if (data.value[item.name]) {
      data.value[item.name] = {
        ...data.value[item.name],
        federalDistr: item.federalDistrict,
        isCheck: false,
      };
    }
  });

  return data.value;
}
