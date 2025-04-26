<template>
  <v-card class="text-white h-full" color="var(--contentfon)">
    <div class="flex justify-around">
      <v-card-title color="red">
        {{ title }}
      </v-card-title>
      <slot name="exel" />
    </div>
    <slot name="federal" />
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
import { VCard, VCardActions, VCardText } from "vuetify/components/VCard";
const props = defineProps({
  title: String,
});
</script>
<style scoped></style>
