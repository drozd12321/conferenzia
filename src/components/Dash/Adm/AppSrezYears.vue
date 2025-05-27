<template>
  <Menu :model="items" />
</template>

<script setup>
import { Menu } from "primevue";
import { ref } from "vue";

const items = ref([
  { label: "New", icon: "pi pi-plus" },
  { label: "Search", icon: "pi pi-search" },
]);
</script>
