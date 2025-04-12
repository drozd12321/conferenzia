<template>
  <div class="map-wrap">
    <img class="map-image" src="../../public/2.jpg" />
    <div
      v-for="(position, cityName) in citiesPositions"
      :key="cityName"
      class="point"
      :class="{ active: activeCity === cityName }"
      :style="{ left: position.left, top: position.top }"
      @mouseleave="resetActivCity()"
      @mouseenter="setActivCity(cityName)"
    ></div>
  </div>
</template>
<script setup>
import { inject } from "vue";

const props = defineProps({
  activeCity: String,
});
const emit = defineEmits(["hover", "update:subValue"]);
const setActivCity = (city) => {
  emit("hover", city);
};
const resetActivCity = () => {
  emit("hover", null);
};
const { data } = inject("data");
const citiesPositions = {
  "Великий Новгород": { left: "20%", top: "50%" },
  Москва: { left: "50%", top: "56%" },
  "Санкт-Петербург": { left: "70%", top: "80%" },
  "Нижний Новгород": { left: "40%", top: "75%" },
};
</script>
<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  flex: 0.7;
}
.map-wrap .map-image {
  width: 100%;
  height: 100%;
}
.point {
  transition: all 0.4s ease;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgb(255, 2, 2);
  border-radius: 50%;
}
.point.active {
  transform: scale(2.5);
}
img {
  border-radius: 10px;
}
.point:hover {
  transform: scale(2.3);
}
</style>
