<template>
  <div class="map-wrap">
    <svg viewBox="0 0 512.483 350" preserveAspectRatio="xMidYMid meet">
      <g transform="scale(0.5176595959595959) translate(0, 41.55999418517301)">
        <path
          v-for="region in regions"
          :key="region.id"
          :d="region.d"
          :stroke-width="region.strokewidth"
          :stroke-linecap="region.strokelinecap"
          :stroke-linejoin="region.strokelinejoin"
          :stroke-opacity="region.strokeopacity"
          :fill="region.fill"
          original="#3175b5"
          :id="region.id"
          class="jvectormap-region"
          @mouseover="hoverRegion = region.name"
          @mouseleave="hoverRegion = null"
          :class="{ hovered: hoverRegion === region.name }"
        ></path>
      </g>
    </svg>
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
import { inject, ref } from "vue";
import citiesPositions from "@/data/citiesposition";
import regions from "@/utils/region";
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
const hoverRegion = ref(null);
</script>
<style scoped>
.jvectormap-region {
  cursor: pointer;
  transition: all 0.3s ease;
}
.jvectormap-region:hover,
.hovered {
  fill: #bec7cf;
}
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
.map-wrap svg {
  width: 100%;
  height: auto;
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
svg {
  border-radius: 10px;
  width: 100%;
}
.point:hover {
  transform: scale(2.3);
}
</style>
