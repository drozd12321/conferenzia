<template>
  <h3>Федеральный округ</h3>
  <Srex :items="items" @year="setFO" />
</template>

<script setup>
import { Menu } from "primevue";
import { computed, ref } from "vue";
import useSrezFoStore from "@/store/useSrezFoStore";
import { storeToRefs } from "pinia";
import Srex from "./Srex.vue";
const storeFO = useSrezFoStore();
const { getFo } = storeToRefs(useSrezFoStore());
const items = ref([
  { label: "Сбросить" },
  { label: "СЗФО " },
  { label: "ЮФО " },
  { label: "СФО " },
  { label: "ЦФО " },
  { label: "ПФО " },
  { label: "УФО " },
  { label: "ДФО " },
  { label: "СКФО " },
]);
function setFO(value) {
  storeFO.setFo(value);
}
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
