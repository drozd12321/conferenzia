<template>
  <div class="p-2 bg-blue-500 text-white rounded">
    <div
      v-for="n in items"
      class="p-1 cursor-pointer"
      :class="{ 'active-menu-item': active === n.label }"
      @click="onselect(n.label)"
    >
      <h2>{{ n.label }}</h2>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
  },
});
const emit = defineEmits(["year"]);
const active = ref("Сбросить");
const onselect = (value) => {
  active.value = value;
  emit("year", value);
};
</script>
<style scoped>
.active-menu-item {
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
