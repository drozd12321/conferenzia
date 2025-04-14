<template>
  <div class="map-wrap">
    <svg viewBox="0 0 512.483 350" preserveAspectRatio="xMidYMid meet">
      <g transform="scale(0.5176595959595959) translate(0, 41.55999418517301)">
        <path
          v-for="region in regions"
          :data-tooltip="region.name"
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
    <!-- <div
      v-for="(position, cityName) in citiesPositions"
      :key="cityName"
      class="point"
      :class="{ active: activeCity === cityName }"
      :style="{ left: position.left, top: position.top }"
      @mouseover="handleShow(cityName, $event)"
      @mouseout="hideShow()"
    ></div>
    <div
      class="tolp"
      :style="{ left: showRegZnach.x + 'px', top: showRegZnach.y + 'px' }"
    >
      {{ showRegZnach }}
    </div> -->
  </div>
</template>
<script setup>
import { inject, reactive, ref } from "vue";
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
const positionReg = reactive({ x: 0, y: 0 });
const showReg = ref(false);
const showRegZnach = ref("");
const handleShow = (region, event) => {
  console.log(region);
  showReg.value = true;
  showRegZnach.value = region;
  positionReg.x = event.target.clientX + 10;
  positionReg.y = event.target.clientY + 10;
};
const hideShow = () => {
  showReg.value = false;
};
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
svg {
  border-radius: 10px;
  width: 100%;
}

path {
  position: relative; /* Required for tooltip positioning */
}

path:hover {
  fill: #ff0000; /* Change color on hover, example */
  cursor: pointer; /* Change cursor on hover */
}

path::before {
  content: attr(data-tooltip); /* Get tooltip text from attribute */
  position: absolute;
  bottom: 20px; /* Adjust position */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: 1; /* Ensure tooltip is above other elements */
}

path:hover::before {
  opacity: 1; /* Show tooltip on hover */
}
</style>
