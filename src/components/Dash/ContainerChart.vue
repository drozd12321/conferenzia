<template>
  <div class="w-fu">
    <AppChartVue
      regionName="Новгородская область"
      :selectedFactor="'Рост цен на жилье'"
      chartType="line"
    />
  </div>
</template>
<script setup>
import AppChartVue from "./Chart/AppChartVue.vue";
</script>
<style scoped>
.w-fu {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 100vw;
  max-height: 600px;
  overflow-y: auto;
}
</style>
