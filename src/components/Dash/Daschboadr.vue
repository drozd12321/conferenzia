<template>
  <div class="w-full">
    <div class="adm"><AppSrez /></div>
    <div class="chart"><ContainerChart /></div>
  </div>
</template>
<script setup>
import AppSrez from "./Adm/AppSrez.vue";
import ContainerChart from "./ContainerChart.vue";
</script>
<style scoped>
.w-full {
  width: 95%;
  display: flex;
  gap: 1rem;
}
.adm {
  flex: 0.15;
}
.chart {
  flex: 1;
  background-color: var(--contentfon);
  margin-top: 10px;
}
</style>
