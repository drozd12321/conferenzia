<template>
  <h3>Год</h3>
  <Menu :model="items" :style="{ marginTop: '10px' }" />
</template>

<script setup>
import { Menu } from "primevue";
import { ref } from "vue";

const items = ref([
  { label: "Сбросить" },
  { label: "2022 " },
  { label: "2023 " },
  { label: "2024 " },
]);
</script>
