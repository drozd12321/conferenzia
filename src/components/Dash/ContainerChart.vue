<template>
  <div class="w-fu">
    {{ chartsData }}
    <AppChartVue
      regionName="Новгородская область"
      :selectedFactor="'Рост цен на жилье'"
      chartType="line"
    />
    <AppChartVue
      regionName="Москва и Московская область"
      :selectedFactor="'Рост цен на жилье'"
      chartType="line"
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

  for (const regionName in data) {
    const factorsData = data[regionName]["0"];

    // Собираем уникальные названия факторов без года
    const factorNamesSet = new Set();

    for (const key in factorsData) {
      // Извлекаем название фактора без года, например:
      // "Рост цен на жилье за 2022 год" -> "Рост цен на жилье"
      const factorName = key.replace(/\s+за\s+\d{4}\s+год$/, "").trim();
      factorNamesSet.add(factorName);
    }

    // Для каждого уникального фактора формируем данные по годам
    factorNamesSet.forEach((factorName) => {
      // Собираем данные по годам для текущего фактора
      const factorData = Object.entries(factorsData)
        .filter(([key]) => key.startsWith(factorName))
        .map(([key, value]) => ({
          year: key.match(/\d{4}/)?.[0] || key,
          value,
        }));

      chartsArray.push({
        regionName,
        selectedFactor: factorName,
        data: factorData,
      });
    });
  }

  return chartsArray;
}

const chartsData = ref(prepareChartsData(dataAll.value));
</script>
<style scoped>
.w-fu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 100vw;
  max-height: 600px;
  overflow-y: auto;
}
</style>
