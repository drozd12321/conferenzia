<template>
  <div>
    <div class="info">
      <div class="accord">
        <AppAccordion />
      </div>
      <div>
        <h2 class="h2">{{ nameregion }} {{ data.federalDistr }}d</h2>
        <transition name="fade" mode="out-in">
          <div class="infopokaz" :key="curentPage">
            <div
              class="pokaz"
              v-for="[value, key] in paginatedEntries"
              :key="key"
            >
              <p>{{ value }}</p>
              <p>{{ key }}</p>
            </div>
          </div>
        </transition>
        <ThePagination
          :curentPage="curentPage"
          :totalPage="totalPage"
          @prev="curentPage > 1 && curentPage--"
          @next="curentPage < totalPage && curentPage++"
          @go="(page) => (curentPage = page)"
        />
      </div>
      <div class="infApp">
        <InfoApparat :nameKey="nameMenu" :nameGroup="nameGroup" />
      </div>
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
import useDataKeys from "@/use/useRataKeys";
import AppAccordion from "./AppAccordion.vue";
import useApparatStore from "@/store/useApparatStore";
import { storeToRefs } from "pinia";
import InfoApparat from "./InfoApparat.vue";

import apparat from "@/data/apparat";
const route = useRoute();
const { getNameFilter, getnameGroup } = storeToRefs(useApparatStore());
const nameregion = route.params.name;
const data = computed(() => useDataOneRegion(nameregion));
const itemPerPage = 3;
const curentPage = ref(1);
const entries = computed(() => {
  if (!data.value || !data.value[0]) return [];
  return Object.entries(data.value[0]);
});
const nameMenu = computed(() => {
  return getNameFilter.value;
});
const nameGroup = computed(() => {
  return getnameGroup.value;
});
const paginatedEntries = computed(() => {
  const start = (curentPage.value - 1) * itemPerPage;
  const end = start + itemPerPage;
  return entries.value.slice(start, end);
});
const totalPage = computed(() => {
  return Math.ceil(entries.value.length / itemPerPage);
});
const { keys: infl, values: inflVak } = useDataKeys(data.value[0], "Инфляция");
const chartData = ref({
  labels: infl.map((it) => it),
  datasets: [
    {
      label: "Инфляция",
      data: inflVak.map((it) => it),
      backgroundColor: ["white", "blue", "red"],
      borderRadius: 4,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
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
.infApp {
  width: 300px;
}
p {
  padding: 2px;
}
.accord {
  flex: 1, 3;
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
  height: 200px;
}
.info {
  display: flex;
  justify-content: space-between;
  width: 98%;
  height: auto;
  grid-template-areas: "h2 h2 h2" "infopokaz infopokaz infopokaz";
  margin: 25px auto;
  background-color: var(--contentfon);
  border-radius: 8px;
  padding: 20px;
  color: var(--content-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
