<template>
  <AppDiv title="Состояние протестных настроений в субъектах РФ">
    <ExelImport @handleFileUpload="handleFileChange" />
    <ErrorMsg v-if="errormsg" :errormsg="errormsg" />
    <div v-if="isloading">Загрузка ...</div>
    <InfoHome :data="dating" />
  </AppDiv>
</template>
<script setup>
import AppDiv from "@/components/AppDiv.vue";
import ErrorMsg from "@/components/ErrorMsg.vue";
import ExelImport from "@/components/ExelImport.vue";
import InfoHome from "@/components/InfoHome.vue";
import useFileUpload from "@/use/useFileUpload";
const { dating, errormsg, handleFile, isloading } = useFileUpload();
const handleFileChange = async (file) => {
  await handleFile(file);
  console.log(dating);
};
</script>
<style scoped></style>
