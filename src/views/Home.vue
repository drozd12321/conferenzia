<template>
  <AppDiv title="Состояние протестных настроений в субъектах РФ">
    <template #exel>
      <ExelImport @handleFileUpload="handleFileChange" />
    </template>
    <ErrorMsg v-if="errorMsg" :errormsg="errorMsg" />
    <div v-if="isLoading">Загрузка ...</div>
    <InfoHome :data="data" />
    <template #federal>
      <FederalDistrict
        :activDistrict="activDistrict"
        @handleDistrict="handleDistrict"
      />
    </template>
  </AppDiv>
</template>
<script setup>
import AppDiv from "@/components/AppDiv.vue";
import ErrorMsg from "@/components/ErrorMsg.vue";
import ExelImport from "@/components/ExelImport.vue";
import FederalDistrict from "@/components/FederalDistrict.vue";
import InfoHome from "@/components/InfoHome.vue";
import useFileUpload from "@/use/useFileUpload";
import { provide, ref } from "vue";
const { data, errorMsg, handleFile, isLoading } = useFileUpload();
const handleFileChange = async (file) => {
  await handleFile(file);
  console.log(data);
};
const activDistrict = ref("");
const handleDistrict = (name) => {
  activDistrict.value = name;
};
provide("data", { data });
</script>
<style scoped></style>
