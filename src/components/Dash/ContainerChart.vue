<template>
  <div class="w-fu">
    <div class="PriceHome">
      <AppChartVue
        :selectedFactor="dataDonePriceHome.selectedFactor"
        :dataArray="dataDonePriceHome.data"
        chartType="line"
      />
    </div>
    <div class="PriceKorz">
      <AppChartVue
        :selectedFactor="dataDonePriceKorz.selectedFactor"
        :dataArray="dataDonePriceKorz.data"
      />
    </div>
    <div class="Job">
      <AppChartVue
        :selectedFactor="dataDoneJob.selectedFactor"
        :dataArray="dataDoneJob.data"
      />
    </div>
    <div class="Many">
      <AppChartVue
        :selectedFactor="dataDoneMany.selectedFactor"
        :dataArray="dataDoneMany.data"
      />
    </div>
    <div class="Prest">
      <AppChartVue
        :selectedFactor="dataDonePrest.selectedFactor"
        :dataArray="dataDonePrest.data"
        chartType="bar"
      />
    </div>
    <div class="Row">
      <AppChartVue
        :selectedFactor="dataDoneRow.selectedFactor"
        :dataArray="dataDoneRow.data"
        chartType="bar"
      />
    </div>
    <div class="Zak">
      <AppChartVue
        :selectedFactor="dataDoneZak.selectedFactor"
        :dataArray="dataDoneZak.data"
        chartType="doughnut"
      />
    </div>
    <div class="Open">
      <AppChartVue
        :selectedFactor="dataDoneOpen.selectedFactor"
        :dataArray="dataDoneOpen.data"
        chartType="pie"
      />
    </div>
    <div class="Vlast">
      <AppChartVue
        :selectedFactor="dataDoneVlast.selectedFactor"
        :dataArray="dataDoneVlast.data"
        chartType="pie"
      />
    </div>
    <div class="Paccive">
      <AppChartVue
        :selectedFactor="dataDonePaccive.selectedFactor"
        :dataArray="dataDonePaccive.data"
        chartType="pie"
      />
    </div>
    <div class="Infl">
      <AppChartVue
        :selectedFactor="dataDoneInfl.selectedFactor"
        :dataArray="dataDoneInfl.data"
        chartType="bar"
      />
    </div>
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
  grid-auto-rows: 400px;
  gap: 1.5rem 1rem;
  height: 80vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #4a90e2 #f0f0f0;

  grid-template-areas:
    "Many Many Many Many Many Many  Row Row Row Zak Zak Zak"
    "PriceKorz PriceKorz PriceKorz Paccive Paccive Paccive PriceHome PriceHome PriceHome PriceHome PriceHome PriceHome"
    "Infl Infl Infl Infl Infl Infl Open Open Open Job Job Job"
    "Vlast Vlast Vlast Vlast Vlast Vlast Prest Prest Prest Prest Prest Prest";
}

.PriceHome {
  grid-area: PriceHome;
}
.PriceKorz {
  grid-area: PriceKorz;
}
.Job {
  grid-area: Job;
}
.Many {
  grid-area: Many;
}
.Prest {
  grid-area: Prest;
}
.Row {
  grid-area: Row;
}
.Zak {
  grid-area: Zak;
}
.Open {
  grid-area: Open;
}
.Vlast {
  grid-area: Vlast;
}
.Paccive {
  grid-area: Paccive;
}
.Infl {
  grid-area: Infl;
}

/* Стиль скроллбара для WebKit (Chrome, Safari) */
.w-fu::-webkit-scrollbar {
  width: 8px;
}

.w-fu::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.w-fu::-webkit-scrollbar-thumb {
  background-color: #4a90e2;
  border-radius: 4px;
  border: 2px solid #f0f0f0;
}

.w-fu::-webkit-scrollbar-thumb:hover {
  background-color: #357abd;
}
</style>
