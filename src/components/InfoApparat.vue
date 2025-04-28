<template>
  {{ apparat }}
  <div class="inf">
    <h2 v-if="nameGroup">Группа факторов: {{ nameGroup }}</h2>
    <h3 v-if="nameKey">Фактор: {{ nameKey }}</h3>
    <div>
      <div>Показатель:</div>
      <div>Индикатор:</div>
      <div>Критерий:</div>
    </div>
  </div>
</template>
<script setup>
import apparat from "@/data/apparat";
const props = defineProps({
  nameKey: String,
  nameGroup: String,
});
function getDiscrApp(name) {
  const data = ref("");
  data.value = apparat.filter(item);
}
</script>
<style scoped>
.inf {
  width: 300px;
}
</style>
