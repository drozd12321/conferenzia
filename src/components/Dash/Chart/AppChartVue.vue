<template>
  <div class="card">
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
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
}
const borderColor = stringToColor(props.selectedFactor);

const transformedData = computed(() => {
  if (!dataAll.value || !dataAll.value[props.regionName]) return {};
  return transformRegionData(dataAll.value[props.regionName]);
});
const COLORS = ["#3366CC", "#DC3912", "#FF9900"];

const chartData = computed(() => {
  const factorData = transformedData.value[props.selectedFactor];
  if (!factorData) return { labels: [], datasets: [] };
  const labels = Object.keys(factorData).sort();
  const data = labels.map((year) => factorData[year]);
  if (props.chartType === "pie" || props.chartType === "bar") {
    // Используем три цвета по порядку
    const backgroundColors = labels.map(
      (_, i) => COLORS[i % COLORS.length] + "80"
    );
    return {
      labels,
      datasets: [
        {
          label: props.selectedFactor,
          data,
          backgroundColor: backgroundColors,
          borderColor: backgroundColors.map((color) =>
            color.replace("80", "FF")
          ),
          borderWidth: 1,
        },
      ],
    };
  } else {
    // Для line/bar — если нужно три цвета для трёх разных серий:
    return {
      labels,
      datasets: [
        {
          label: props.selectedFactor,
          data,
          borderColor: COLORS[0],
          backgroundColor: COLORS[0] + "80",
          fill: true,
          tension: 0.4,
        },
      ],
    };
  }
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
  scales:
    props.chartType === "pie"
      ? {}
      : {
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
