import useSrezFoStore from "@/store/useSrezFoStore";
import useSrezRegStore from "@/store/useSrezReg";
import useSrezYearStore from "@/store/useSrezYearsStore";
import { storeToRefs } from "pinia";

export function filterDataByYear(dataArray) {
  const { getYear } = storeToRefs(useSrezYearStore());
  if (!getYear.value || getYear.value === "Сбросить") {
    return dataArray;
  }
  return dataArray.map((item) => {
    const filteredData = item.data.filter((d) => {
      return String(d.year.trim()) === String(getYear.value.trim());
    });

    return {
      ...item,
      data: filteredData,
    };
  });
}
export function filterDataByFO(dataArray) {
  const { getFo } = storeToRefs(useSrezFoStore());
  console.log(dataArray);
  if (!getFo.value || getFo.value === "Сбросить") {
    return dataArray;
  }
  return dataArray.filter((item) => {
    const itemDistrict = item.federalDistrict
      ? item.federalDistrict.trim().toLowerCase()
      : "";
    const selectedDistrict = getFo.value.trim().toLowerCase();
    return itemDistrict === selectedDistrict;
  });
}
export function filterDataByReg(dataArray) {
  const { getReg } = storeToRefs(useSrezRegStore());
  console.log(dataArray);
  if (!getReg.value || getReg.value === "Сбросить") {
    return dataArray;
  }
  return dataArray.filter((item) => {
    const itemDistrict = item.regionName
      ? item.regionName.trim().toLowerCase()
      : "";
    const selectedReg = getReg.value.trim().toLowerCase();
    return itemDistrict === selectedReg;
  });
}
