<template>
  <AppDiv title="Состояние протестных настроений в субъектах РФ">
    <template #exel>
      <ExelImport @handleFileUpload="handleFileChange" />
    </template>
    <ErrorMsg v-if="errorMsg" :errormsg="errorMsg" />
    <div v-if="isLoading">Загрузка ...</div>
    <InfoHome :data="getData" />
    <template #federal>
      <FederalDistrict
        :activDistrict="activDistrict"
        @handleDistrict="handleDistrict"
      />
    </template>
    {{ activDistrict }}
  </AppDiv>
</template>
<script setup>
import AppDiv from "@/components/AppDiv.vue";
import ErrorMsg from "@/components/ErrorMsg.vue";
import ExelImport from "@/components/ExelImport.vue";
import FederalDistrict from "@/components/FederalDistrict.vue";
import InfoHome from "@/components/InfoHome.vue";
import useFileUpload from "@/use/useFileUpload";
import useDataStore from "@/store/useDataStore";
import { computed, provide, reactive, ref } from "vue";
import { storeToRefs } from "pinia";
const dataStore = useDataStore();
const { data, errorMsg, handleFile, isLoading } = useFileUpload();
const { getData, getKey } = storeToRefs(useDataStore());
const handleFileChange = async (file) => {
  await handleFile(file);
};
const activDistrict = computed(() => getKey.value);
console.log(activDistrict);
const handleDistrict = (name) => {
  activDistrict.value = name;
  console.log(getData.value);
};
const filtdt = computed(() => getData);
provide("data", { data });
</script>
<style scoped></style>
