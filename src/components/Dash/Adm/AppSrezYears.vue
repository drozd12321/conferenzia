<template>
  <h3>Субьект РФ</h3>
  <Srex :items="filteredItems" @year="setYear" />
</template>

<script setup>
import { Menu } from "primevue";
import { computed, ref } from "vue";
import useSrezYearStore from "@/store/useSrezYearsStore";
import Srex from "./Srex.vue";
import { items } from "../../../utils/region";
import useSrezRegStore from "@/store/useSrezReg";
import { storeToRefs } from "pinia";
import useSrezFoStore from "@/store/useSrezFoStore";
const { getFo } = storeToRefs(useSrezFoStore());
const storeReg = useSrezRegStore();
function setYear(value) {
  storeReg.setReg(value);
}
const filteredItems = computed(() => {
  if (!getFo.value || getFo.value === "Сбросить") {
    return items.value; // показываем все, если не выбран округ
  }
  return items.value.filter((item) => {
    console.log(item[0]);
    return (
      item.fo &&
      item.fo.trim().toLowerCase() === getFo.value.trim().toLowerCase()
    );
  });
});
</script>
<style>
.active-menu-item > .p-menuitem-link {
  background-color: #1565c0 !important;
  color: white !important;
}
</style>
