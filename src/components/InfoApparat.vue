<template>
  {{ apparat }}
  <div>
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
  data.value = apparat.filter();
}
</script>
<style scoped></style>
