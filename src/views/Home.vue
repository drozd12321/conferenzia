<template>
  <VCard class="card" title="Card title" subtitle="Subtitle" text="...">
    <v-progress-linear :indeterminate="activatorProps"></v-progress-linear>

    <VCardActions
      ><VBtn @click="activatorProps = !activatorProps"
        >Click me1</VBtn
      ></VCardActions
    >
    <VBottomSheet inset="">
      <template v-slot:activator="{ props: activ }">
        <v-btn v-bind="activ" text="Click Me"></v-btn>
      </template>

      <VCard
        title="Bottom Sheet"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
      ></VCard>
    </VBottomSheet>
  </VCard>
</template>
<script setup>
// <AppDiv title="Состояние протестных настроений в субъектах РФ">
//   <template #exel>
//     <ExelImport @handleFileUpload="handleFileChange" />
//   </template>
//   <ErrorMsg v-if="errorMsg" :errormsg="errorMsg" />
//   <div v-if="isLoading">Загрузка ...</div>
//   <InfoHome :data="dataFiltered" />
//   <template #federal>
//     <FederalDistrict
//       :activDistrict="activDistrict"
//       @handleDistrict="handleDistrict"
//     />
//   </template>
// </AppDiv>
import AppDiv from "@/components/AppDiv.vue";
import ErrorMsg from "@/components/ErrorMsg.vue";
import ExelImport from "@/components/ExelImport.vue";
import FederalDistrict from "@/components/FederalDistrict.vue";
import InfoHome from "@/components/InfoHome.vue";
import useFileUpload from "@/use/useFileUpload";
import useDataStore from "@/store/useDataStore";
import { computed, provide, reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import useFilterDistrict from "@/use/useFilterDistrict";
import { VBottomSheet } from "vuetify/components/VBottomSheet";
import { VCard, VCardActions } from "vuetify/components/VCard";
import { VBtn } from "vuetify/components/VBtn";

const dataStore = useDataStore();
const { data, errorMsg, handleFile, isLoading } = useFileUpload();
const { getData, getKey } = storeToRefs(useDataStore());
const handleFileChange = async (file) => {
  await handleFile(file);
};
const activDistrict = computed(() => getKey.value);
const dataFiltered = computed(() => useFilterDistrict());
const handleDistrict = async (name) => {
  await dataStore.sentFilterKey(name);
  useFilterDistrict();
};
const filtdt = computed(() => getData);
const activatorProps = ref(false);
</script>
<style scoped>
.card {
  margin-top: 10px;
}
</style>
