<template>
  <div class="pagination">
    <button @click="$emit('prev')" :disabled="curentPage === 1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="var(--act)"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
      </svg>
    </button>
    <button
      v-for="page in totalPage"
      :key="page"
      @click="$emit('go', page)"
      :class="{ active: curentPage === page }"
    >
      {{ page }}
    </button>
    <button @click="$emit('next')" :disabled="curentPage === totalPage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="var(--act)"
      >
        <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
        <g>
          <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
        </g>
      </svg>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  totalPage: Number,
  curentPage: Number,
});
const emit = defineEmits(["prev", "next", "go"]);
</script>
<style scoped>
button {
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--content-color);
  font-size: 16px;
}
svg {
  transition: all 0.5s ease;
}
button:disabled svg {
  fill: var(--content-color);
  transform: scale(0.7);
}
button:not(:disabled):hover svg {
  transform: translateX(3px);
  fill: var(--act-dark);
}

.pagination {
  display: flex;
  gap: 10px;
  height: 25px;
  transition: all 0.5s ease;
}
.active {
  color: var(--act);
  font-weight: 700;
}
</style>
