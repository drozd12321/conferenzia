<template>
  <h3>Год</h3>
  <Menu
    :model="items"
    :activeItem="activeItem"
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
const activeItem = computed(() => {
  return (
    items.value.find((item) => item.label.trim() === getYear.value) || null
  );
});
</script>
<style scoped>
.p-menu.p-component::-webkit-scrollbar {
  width: 8px;
}

.p-menu.p-component::-webkit-scrollbar-track {
  background: #1565c0;
  border-radius: 4px;
}

.p-menu.p-component::-webkit-scrollbar-thumb {
  background-color: #90caf9;
  border-radius: 4px;
  border: 2px solid #1565c0;
}

.p-menu.p-component {
  scrollbar-width: thin;
  scrollbar-color: #90caf9 #1565c0;
}
</style>
