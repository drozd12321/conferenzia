import useSrezYearStore from "@/store/useSrezYearsStore";
import { storeToRefs } from "pinia";

export function filterDataByYear(dataArray) {
  console.log(dataArray);
  const { getYear } = storeToRefs(useSrezYearStore());
  if (!getYear.value || getYear.value === "Сбросить") {
    return dataArray;
  }

  return dataArray.map((item) => {
    const filteredData = item.data.filter((d) => d.year === getYear.value);
    return {
      ...item,
      data: filteredData,
    };
  });
}
