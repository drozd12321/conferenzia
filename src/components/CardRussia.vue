<template>
  <div class="map-wrap">
    <img class="map-image" src="../../public/2.jpg" />
    <div
      class="point"
      :class="{ active: activeCity == 'Великий Новгород' }"
      style="left: 20%; top: 50%"
      @mouseleave="resetActivCity()"
      @mouseenter="setActivCity('Великий Новгород')"
    ></div>
    <div
      class="point"
      :class="{ active: activeCity == 'Москва' }"
      style="left: 50%; top: 56%"
      @mouseleave="resetActivCity()"
      @mouseenter="setActivCity('Москва')"
    ></div>
    <div
      class="point"
      :class="{ active: activeCity == 'Санкт-Петербург' }"
      style="left: 70%; top: 80%"
      @mouseleave="resetActivCity()"
      @mouseenter="setActivCity('Санкт-Петербург')"
    ></div>
    <div
      class="point"
      :class="{ active: activeCity == 'Нижний Новгород' }"
      style="left: 40%; top: 75%"
      @mouseleave="resetActivCity()"
      @mouseenter="setActivCity('Нижний Новгород')"
    ></div>
  </div>
</template>
<script setup>
const props = defineProps({
  activeCity: String,
});
const emit = defineEmits(["hover", "update:subValue"]);
const setActivCity = (city) => {
  emit("update:subValue", city);
};
const resetActivCity = () => {
  emit("update:subValue", null);
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
