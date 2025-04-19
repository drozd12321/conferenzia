<template>
  <div class="div">
    <Bar :data="chartData" :options="chartOptions"></Bar>
  </div>
</template>
<script setup>
import { Bar } from "vue-chartjs";
import { ref } from "vue";
const props = defineProps({
  chartData: Object,
  chartOptions: Object,
});
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
</script>
<style scoped>
.div {
  height: 200px;
  width: 400px;
}
</style>
