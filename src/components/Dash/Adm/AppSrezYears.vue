<template>
  <h3>Год</h3>
  <Srex :items="items" @year="setYear" />
</template>

<script setup>
import { Menu } from "primevue";
import { computed, ref } from "vue";
import useSrezYearStore from "@/store/useSrezYearsStore";
import { storeToRefs } from "pinia";
import Srex from "./Srex.vue";
const storeyear = useSrezYearStore();
const { getYear } = storeToRefs(useSrezYearStore());
const items = ref([
  { label: "Сбросить" },
  { label: "2022 " },
  { label: "2023 " },
  { label: "2024 " },
]);
function setYear(value) {
  storeyear.setYear(value);
}
</script>
<style>
.active-menu-item > .p-menuitem-link {
  background-color: #1565c0 !important;
  color: white !important;
}
</style>
