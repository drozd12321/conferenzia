<template>
  <div class="all">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
});
</script>
<style scoped>
.all {
  margin-top: 10px;
  background-color: var(--contentfon);
  padding: 20px;
  border-radius: 5px; /* Добавляет скругленные углы */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
h1 {
  text-align: center;
}
</style>
