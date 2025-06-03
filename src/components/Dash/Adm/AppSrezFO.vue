<template>
  <h3>Федеральный округ</h3>

  <Menu
    :model="items"
    :activeItem="activeItem"
    :style="{
      background: '#1e88e5',
      maxHeight: '200px',
      overflowY: 'auto',
    }"
  />
</template>

<script setup>
import { Menu } from "primevue";
import { computed, ref } from "vue";
import useSrezFoStore from "@/store/useSrezFoStore";
import { storeToRefs } from "pinia";
const storeFO = useSrezFoStore();
const { getFo } = storeToRefs(useSrezFoStore());
const items = ref([
  { label: "Сбросить", command: () => setFO("Сбросить") },
  { label: "СЗФО ", command: () => setFO("СЗФО") },
  { label: "ЮФО ", command: () => setFO("ЮФО") },
  { label: "СФО ", command: () => setFO("СФО") },
  { label: "ЦФО ", command: () => setFO("ЦФО") },
  { label: "ПФО ", command: () => setFO("ПФО") },
  { label: "УФО ", command: () => setFO("УФО") },
  { label: "ДФО ", command: () => setFO("ДФО") },
  { label: "СКФО ", command: () => setFO("СКФО") },
]);
function setFO(value) {
  storeFO.setFo(value);
}
const activeItem = computed(() => {
  return items.value.find((item) => item.label.trim() === getFo.value) || null;
});
</script>

<style>
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
