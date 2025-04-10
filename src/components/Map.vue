<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import maplibregl from "maplibre-gl";
const mapContainer = ref(null);
onMounted(() => {});
</script>
<style scoped></style>
