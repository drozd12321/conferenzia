<template>
  <div class="federal">
    <div
      v-for="distr in district"
      :class="{ [distr.distr]: true, active: activDistrict === distr.name }"
      @click="handleDistrict(distr.name)"
    >
      {{ distr.name }}
    </div>
  </div>
</template>
<script setup>
import district from "@/utils/district";
import { ref } from "vue";
const props = defineProps({
  activDistrict: String,
});
const emit = defineEmits(["handleDistrict"]);
const handleDistrict = (name) => {
  emit("handleDistrict", name);
};
</script>
<style scoped>
.federal {
  display: grid;
  grid-template-areas: "ZFO CZFO UFO PFO YFO CFO DFO CKFO";
  gap: 10px;
  width: 600px;
  cursor: pointer;
  justify-content: space-around;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
.ZFO {
  grid-area: ZFO;
  padding: 10px;
}
.CZFO {
  padding: 10px;
  grid-area: CZFO;
}
.UFO {
  grid-area: UFO;
  padding: 10px;
}
.PFO {
  grid-area: PFO;
  padding: 10px;
}
.YFO {
  padding: 10px;
  grid-area: YFO;
}
.CFO {
  padding: 10px;
  grid-area: CFO;
}
.DFO {
  padding: 10px;
  grid-area: DFO;
}
.CKFO {
  padding: 10px;
  grid-area: CKFO;
}
.ZFO,
.CFO,
.CKFO,
.CZFO,
.DFO,
.UFO,
.YFO,
.PFO {
  transition: all 0.6s ease;
  border-radius: 3px;
}
.ZFO.active,
.CFO.active,
.CKFO.active,
.CZFO.active,
.DFO.active,
.UFO.active,
.YFO.active,
.PFO.active {
  background-color: var(--act);
}
</style>
