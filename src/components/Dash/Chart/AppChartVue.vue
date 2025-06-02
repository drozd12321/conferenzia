<template>
  <div class="card">
    <h3>{{ regionName }}</h3>
    <Chart
      :type="chartType"
      :data="chartData"
      :options="chartOptions"
      class="h-[20rem] w-[20rem]"
    />
  </div>
</template>

<script setup>
import { computed, toRef } from "vue";
import Chart from "primevue/chart";
import transformRegionData from "@/utils/dash/transformDataRegion";
import useDataStore from "@/store/useDataStore";
import { storeToRefs } from "pinia";
const props = defineProps({
  regionName: {
    type: String,
    required: true,
  },
  chartType: {
    type: String,
    default: "line",
  },
  selectedFactor: {
    type: String,
    required: true,
  },
});

const { getData } = storeToRefs(useDataStore());
const dataAll = toRef(getData);

// Трансформация данных выбранного региона
const transformedData = computed(() => {
  if (!dataAll.value || !dataAll.value[props.regionName]) return {};
  return transformRegionData(dataAll.value[props.regionName]);
});

const chartData = computed(() => {
  const factorData = transformedData.value[props.selectedFactor];
  if (!factorData) return { labels: [], datasets: [] };

  const labels = Object.keys(factorData).sort();
  const data = labels.map((year) => factorData[year]);

  return {
    labels,
    datasets: [
      {
        label: props.selectedFactor,
        data,
        borderColor: "white",
        backgroundColor: "rgba(255,255,255,0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };
});

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "bottom", display: true },
    title: {
      display: true,
      text: `${props.regionName} — ${props.selectedFactor}`,
    },
  },
  scales: {
    y: {
      title: { display: true, text: "%" },
      grid: { color: "gray" },
    },
  },
}));
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}
</style>
