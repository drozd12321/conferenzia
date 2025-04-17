import regions from "@/utils/region";
export default function useAddDistrict(data) {
  const nm = "Москва";
  regions.forEach((item) => {
    if (data.value[item.name]) {
      data.value[item.name] = {
        ...data.value[item.name],
        federalDistr: item.federalDistrict,
      };
    }
  });

  return data.value;
}
