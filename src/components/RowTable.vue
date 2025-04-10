<template>
  <div
    class="row"
    @mouseleave="$emit('update:subValue', null)"
    @mouseenter="$emit('update:subValue', sub)"
  >
    <span>{{ sub }}</span>
    <span>{{ znach }}</span>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  sub: String,
  znach: String,
});
const emit = defineEmits(["hover", "update:subValue"]);
</script>
<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  gap: 10px;
  transition: all 0.4s ease;
  border-right: 5px soliв transparent;
}
.row:hover {
  transform: scale(1.1);
  color: var(--act);
}
</style>
