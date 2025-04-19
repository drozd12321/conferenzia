<template>
  <div>
    <div class="info">
      <h2 class="h2">{{ nameregion }} {{ data.federalDistr }}</h2>
      <div class="infopokaz">
        <div
          class="pokaz"
          v-for="([value, key], index) in paginatedEntries"
          :key="index"
        >
          <p>{{ value }}</p>
          <p>{{ key }}</p>
        </div>
      </div>
      <ThePagination
        :curentPage="curentPage"
        :totalPage="totalPage"
        @prev="curentPage > 1 && curentPage--"
        @next="curentPage < totalPage && curentPage++"
        @go="(page) => (curentPage = page)"
      />
    </div>
    <BarChart :chartData="chartData" :chartOptions="chartOptions" />
  </div>
</template>
<script setup>
import useDataOneRegion from "@/use/UseDataOneRedion";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import ThePagination from "./ThePagination.vue";
import BarChart from "./BarChart.vue";
import { scales } from "chart.js";
const route = useRoute();
const nameregion = route.params.name;
const data = computed(() => useDataOneRegion(nameregion));
const itemPerPage = 5;
const curentPage = ref(1);
const entries = computed(() => {
  if (!data.value || !data.value[0]) return [];
  return Object.entries(data.value[0]);
});
const paginatedEntries = computed(() => {
  const start = (curentPage.value - 1) * itemPerPage;
  const end = start + itemPerPage;
  return entries.value.slice(start, end);
});
const totalPage = computed(() => {
  return Math.ceil(entries.value.length / itemPerPage);
});
const chartData = ref({
  labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
  datasets: [
    {
      label: "Продажи",
      data: [40, 39, 10, 40, 39, 80],
      backgroundColor: "blue",
      borderRadius: 4,
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Инфляция",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "%",
      },
    },
    y: {
      title: {
        display: true,
        text: "Года",
      },
      grid: {
        color: "gray",
      },
    },
  },
});
</script>
<style scoped>
p {
  padding: 2px;
}
.pokaz {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  padding: 2px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
  border-radius: 8px;
}
.h2 {
  text-align: center;
  grid-area: h2;
  color: var(--act);
}
.infopokaz {
  grid-area: infopokaz;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
}
.info {
  display: grid;
  width: 600px;
  height: 450px;
  grid-template-areas: "h2 h2 h2" "infopokaz infopokaz infopokaz";
  margin: 25px auto;
  background-color: var(--contentfon);
  border-radius: 8px;
  padding: 20px;
  color: var(--content-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
