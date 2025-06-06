<template>
  <h3>Субьект РФ</h3>
  <Srex :items="items" @year="setYear" />
</template>

<script setup>
import { Menu } from "primevue";
import { computed, ref } from "vue";
import useSrezYearStore from "@/store/useSrezYearsStore";
import Srex from "./Srex.vue";
import { items } from "../../../utils/region";
const storeyear = useSrezYearStore();

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
