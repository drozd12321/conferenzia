<template>
  <div
    class="row"
    :class="{ active: subValue === sub }"
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
  subValue: String,
});
const emit = defineEmits(["hover", "update:subValue", "updateVal"]);
</script>
<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  gap: 10px;
  transition: all 0.4s ease;
  border-right: 5px solid transparent;
  cursor: pointer;
}
.row:hover {
  transform: scale(1.1);
  color: var(--act);
}
.row.active {
  transform: scale(1.1);
  color: var(--act);
}
</style>
