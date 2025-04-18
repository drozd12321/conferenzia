<template>
  <div
    v-if="!!subValue"
    class="row"
    :class="{ active: active }"
    @click="goToRegion(sub)"
    @mouseover="onHover"
    @mouseleave="onLeave"
  >
    <span>{{ sub }}</span>
    <span>{{ znach }}</span>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goToRegion = (region) => {
  router.push(`region/${region}`);
};
const props = defineProps({
  sub: String,
  znach: String,
  subValue: String,
  active: Boolean,
});

const emit = defineEmits(["hover", "leave"]);
function onHover() {
  emit("hover", props.sub);
}
function onLeave() {
  emit("hover", null);
}
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
  transform: translateY(-2px);
  color: var(--act);
}
.row.active {
  transform: translateY(-2px);
  color: var(--act);
}
</style>
