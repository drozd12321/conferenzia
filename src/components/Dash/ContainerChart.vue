<template>
  <div class="w-fu">
    <AppChartVue
      :selectedFactor="dataDonePriceHome.selectedFactor"
      :dataArray="dataDonePriceHome.data"
      chartType="line"
    />
    <AppChartVue
      :selectedFactor="dataDonePriceKorz.selectedFactor"
      :dataArray="dataDonePriceKorz.data"
    />
    <AppChartVue
      :selectedFactor="dataDoneJob.selectedFactor"
      :dataArray="dataDoneJob.data"
    />
    <AppChartVue
      :selectedFactor="dataDoneMany.selectedFactor"
      :dataArray="dataDoneMany.data"
    />
    <AppChartVue
      :selectedFactor="dataDonePrest.selectedFactor"
      :dataArray="dataDonePrest.data"
      chartType="bar"
    />
    <AppChartVue
      :selectedFactor="dataDoneRow.selectedFactor"
      :dataArray="dataDoneRow.data"
      chartType="bar"
    />
    <AppChartVue
      :selectedFactor="dataDoneZak.selectedFactor"
      :dataArray="dataDoneZak.data"
      chartType="pie"
    />
    <AppChartVue
      :selectedFactor="dataDoneOpen.selectedFactor"
      :dataArray="dataDoneOpen.data"
      chartType="pie"
    />
    <AppChartVue
      :selectedFactor="dataDoneVlast.selectedFactor"
      :dataArray="dataDoneVlast.data"
      chartType="pie"
    />
    <AppChartVue
      :selectedFactor="dataDonePaccive.selectedFactor"
      :dataArray="dataDonePaccive.data"
      chartType="pie"
    />
    <AppChartVue
      :selectedFactor="dataDoneInfl.selectedFactor"
      :dataArray="dataDoneInfl.data"
    />
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import AppChartVue from "./Chart/AppChartVue.vue";
import useDataStore from "@/store/useDataStore";
import { computed, ref } from "vue";
import { aggregatePercentGrowth, filterDataAgr } from "./Chart/helper";
const { getData } = storeToRefs(useDataStore());
const dataAll = computed(() => getData.value);
function prepareChartsData(data) {
  const chartsArray = [];
  const chartTypes = ["line", "bar", "pie"];

  let chartTypeIndex = 0;

  for (const regionName in data) {
    const factorsData = data[regionName]["0"];
    const factorNamesSet = new Set();

    for (const key in factorsData) {
      const factorName = key.replace(/\s+за\s+\d{4}\s+год$/, "").trim();
      factorNamesSet.add(factorName);
    }

    factorNamesSet.forEach((factorName) => {
      const factorData = Object.entries(factorsData)
        .filter(([key]) => key.startsWith(factorName))
        .map(([key, value]) => {
          const year = key.match(/\d{4}/)?.[0];
          return year && value !== undefined ? { year, value } : null;
        })
        .filter((item) => item !== null);

      chartsArray.push({
        regionName,
        selectedFactor: factorName,
        data: factorData,
        chartType: chartTypes[chartTypeIndex % chartTypes.length], // Циклически выбираем тип
      });

      chartTypeIndex++;
    });
  }

  return chartsArray;
}

const chartsData = ref(prepareChartsData(dataAll.value));
const filteredChartsData = computed(() => {
  return chartsData.value.filter((n) => n && n.selectedFactor !== "undefined");
});
const agrData = aggregatePercentGrowth(filteredChartsData.value);
const dataDonePriceHome = filterDataAgr(agrData, "Рост цен на жилье");
const dataDonePriceKorz = filterDataAgr(
  agrData,
  "Рост цены потребительской корзины"
);
const dataDoneJob = filterDataAgr(agrData, "Рост рабочих мест");
const dataDoneMany = filterDataAgr(agrData, "Рост З/П");
const dataDonePrest = filterDataAgr(agrData, "Рост преступности");
const dataDoneRow = filterDataAgr(agrData, "Рост качества дорог");
const dataDoneZak = filterDataAgr(agrData, "Нарушение законов");
const dataDoneOpen = filterDataAgr(agrData, "Отсутствие открытости действий");
const dataDoneVlast = filterDataAgr(
  agrData,
  "Противоречивость действий властей"
);
const dataDonePaccive = filterDataAgr(agrData, "Пассивность властей");
const dataDoneInfl = filterDataAgr(agrData, "Инфляция");
</script>
<style scoped>
.w-fu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  width: 80vw;

  height: 600px;
  overflow-y: auto;
  padding: 1rem;
  scrollbar-width: thin;
  scrollbar-color: #4a90e2 #333232;
}
.w-fu::-webkit-scrollbar {
  width: 8px;
}

.w-fu::-webkit-scrollbar-track {
  background: #e0e0e0;
  border-radius: 4px;
}

.w-fu::-webkit-scrollbar-thumb {
  background-color: #4a90e2;
  border-radius: 4px;
  border: 2px solid #e0e0e0; /* отступы вокруг ползунка */
}

.w-fu::-webkit-scrollbar-thumb:hover {
  background-color: #357abd;
}
</style>
