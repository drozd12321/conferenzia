<template>
  <h3>Год</h3>
  <Menu
    :model="computedItems"
    :style="{ marginTop: '10px', background: '#1e88e5' }"
  />
</template>

<script setup>
import { Menu } from "primevue";
import { computed, ref } from "vue";
import useSrezYearStore from "@/store/useSrezYearsStore";
import { storeToRefs } from "pinia";
const storeyear = useSrezYearStore();
const { getYear } = storeToRefs(useSrezYearStore());
const items = ref([
  { label: "Сбросить", command: () => setYear("Сбросить") },
  { label: "2022 ", command: () => setYear("2022") },
  { label: "2023 ", command: () => setYear("2023") },
  { label: "2024 ", command: () => setYear("2024") },
]);
function setYear(value) {
  storeyear.setYear(value);
}
const computedItems = computed(() =>
  items.value.map((item) => ({
    ...item,
    class: item.label.trim() === getYear.value.trim() ? "active-menu-item" : "",
  }))
);
</script>
<style>
.active-menu-item > .p-menuitem-link {
  background-color: #1565c0 !important;
  color: white !important;
}
</style>
