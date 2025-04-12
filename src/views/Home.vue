<template>
  <AppDiv title="Состояние протестных настроений в субъектах РФ">
    <template #exel>
      <ExelImport @handleFileUpload="handleFileChange" />
    </template>
    <ErrorMsg v-if="errorMsg" :errormsg="errorMsg" />
    <div v-if="isLoading">Загрузка ...</div>
    <InfoHome :data="data" />
  </AppDiv>
</template>
<script setup>
import AppDiv from "@/components/AppDiv.vue";
import ErrorMsg from "@/components/ErrorMsg.vue";
import ExelImport from "@/components/ExelImport.vue";
import InfoHome from "@/components/InfoHome.vue";
import useFileUpload from "@/use/useFileUpload";
import { provide } from "vue";
const { data, errorMsg, handleFile, isLoading } = useFileUpload();
const handleFileChange = async (file) => {
  await handleFile(file);
  console.log(data);
};
provide("data", { data });
</script>
<style scoped></style>
