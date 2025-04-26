<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import autoAnimate from "@formkit/auto-animate";
import { VMain } from "vuetify/components/VMain";
import { VApp } from "vuetify/components/VApp";
import { VAppBar, VAppBarTitle } from "vuetify/components/VAppBar";
</script>
<template>
  <VApp>
    <TheHeader />
    <VMain class="mt-2.5">
      <RouterView></RouterView>
    </VMain>
  </VApp>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
