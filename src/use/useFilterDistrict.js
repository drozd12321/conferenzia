import useDataStore from "@/store/useDataStore";
import regions from "@/utils/region";
export default function useFilterDistrict() {
  const res = {};
  const { getData, getKey } = useDataStore();
  const copy = getData;
  for (const reg in copy) {
    if (getData[reg].federalDistr === getKey) {
      res[reg] = { ...getData[reg], isCheck: true };
      if (res[reg].isCheck) {
        regions.forEach((item) => {
          if (item.name === reg) {
            item.fill = "red";
          }
        });
      }
    } else if (getKey === "Все") {
      res[reg] = getData[reg];
    }
  }
  return res;
}
