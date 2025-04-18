<template>
  <div class="info">
    <h2 class="h2">{{ nameregion }} {{ data.federalDistr }}</h2>
    <div class="infopokaz">
      <div
        class="pokaz"
        v-for="([value, key], index) in paginatedEntries"
        :key="index"
      >
        <p>{{ value }}</p>
        <p>{{ key }}</p>
      </div>
    </div>
    <div class="pagination">
      <button
        @click="curentPage > 1 && curentPage--"
        :disabled="curentPage === 1"
      >
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
        @click="curentPage = page"
        :class="{ active: curentPage === page }"
      >
        {{ page }}
      </button>
      <button
        @click="curentPage < totalPage && curentPage++"
        :disabled="curentPage === totalPage"
      >
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
  </div>
</template>
<script setup>
import useDataOneRegion from "@/use/UseDataOneRedion";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const nameregion = route.params.name;
const data = computed(() => useDataOneRegion(nameregion));
const itemPerPage = 5;
const curentPage = ref(1);
const entries = computed(() => {
  if (!data.value || !data.value[0]) return [];
  return Object.entries(data.value[0]);
});
const paginatedEntries = computed(() => {
  const start = (curentPage.value - 1) * itemPerPage;
  const end = start + itemPerPage;
  return entries.value.slice(start, end);
});
const totalPage = computed(() => {
  return Math.ceil(entries.value.length / itemPerPage);
});
</script>
<style scoped>
.active {
  color: var(--act);
  font-weight: 700;
}
p {
  padding: 2px;
}
.pokaz {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  padding: 2px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
  border-radius: 8px;
}
.h2 {
  text-align: center;
  grid-area: h2;
  color: var(--act);
}
.infopokaz {
  grid-area: infopokaz;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
}
.info {
  display: grid;
  width: 600px;
  height: 450px;
  grid-template-areas: "h2 h2 h2" "infopokaz infopokaz infopokaz";
  margin: 25px auto;
  background-color: var(--contentfon);
  border-radius: 8px;
  padding: 20px;
  color: var(--content-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
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
  fill: var(--act-dark); /* Можно задать цвет при наведении */
}

.pagination {
  display: flex;
  gap: 10px;
  height: 25px;
  transition: all 0.5s ease;
}
</style>
