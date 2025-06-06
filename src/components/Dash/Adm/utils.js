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
