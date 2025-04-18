import useDataStore from "@/store/useDataStore";
import regions from "@/utils/region";
import { storeToRefs } from "pinia";
export default function useFilterDistrict() {
  const res = {};
  const { getData, getKey } = useDataStore();
  regions.forEach((item) => (item.isCheck = false));
  const copy = getData;
  for (const reg in copy) {
    if (getKey === "Все") {
      res[reg] = getData[reg];
    } else if (getData[reg].federalDistr === getKey) {
      res[reg] = { ...getData[reg], isCheck: true };
      const regionItem = regions.find((item) => item.name === reg);
      if (regionItem) {
        regionItem.isCheck = true;
      }
    }
  }
  return res;
}
