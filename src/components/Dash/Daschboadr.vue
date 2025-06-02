<template>
  <div class="w-full">
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
  grid-template-columns: 15% 1fr;
  gap: 5px;
  text-align: center;
}
</style>
