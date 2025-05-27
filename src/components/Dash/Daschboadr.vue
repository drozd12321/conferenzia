<template>
  <div class="w-full">
    <h1 class="text-center text-3xl mt-1">Дашборд</h1>
    <div class="container">
      <div class="adm"><AppSrez /></div>
      <div class="chart"><ContainerChart /></div>
    </div>
  </div>
</template>
<script setup>
import AppSrez from "./Adm/AppSrez.vue";
import ContainerChart from "./ContainerChart.vue";
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 35% 1fr;
  gap: 5px;
}
</style>
