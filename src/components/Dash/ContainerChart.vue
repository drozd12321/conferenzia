<template>
  <div class="w-fu">
    <AppChartVue
      v-for="n in filteredChartsData"
      :key="n.regionName + n.selectedFactor"
      :regionName="n.regionName"
      :selectedFactor="n.selectedFactor"
      :chartType="n.chartType"
    />
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import AppChartVue from "./Chart/AppChartVue.vue";
import useDataStore from "@/store/useDataStore";
import { computed, ref } from "vue";
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
