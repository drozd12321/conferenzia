<template>
  <AppDiv title="Состояние протестных настроений в субъектах РФ">
    <ExelImport @handleFileUpload="handleFileUpload" />
    <ErrorMsg v-if="errormsg" :errormsg="errormsg" />
    <div class="inf" v-else>
      <div class="ff">
        <div class="item">
          <h2>Информаци</h2>
          <div class="table">
            <div class="head">
              <span>Cубьект</span>
              <span>Значение</span>
            </div>
            <RowTable
              sub="Великий Новгород"
              znach="10"
              v-model:subValue="activeCity"
              @updateVal="setAct"
            />
            <RowTable sub="Москва" znach="10" v-model:subValue="activeCity" />
            <RowTable
              sub="Санкт-Петербург"
              znach="10"
              v-model:subValue="activeCity"
            />
            <RowTable
              sub="Нижний Новгород"
              znach="10"
              v-model:subValue="activeCity"
            />
          </div>
        </div>
      </div>
      <CardRussia :activeCity="activeCity" v-model:subValue="activeCity" />
    </div>
  </AppDiv>
</template>

<script setup>
import AppDiv from "@/components/AppDiv.vue";
import CardRussia from "@/components/CardRussia.vue";
import ErrorMsg from "@/components/ErrorMsg.vue";
import ExelImport from "@/components/ExelImport.vue";
import RowTable from "@/components/RowTable.vue";
import { ref } from "vue";
const activeCity = ref(null);
import * as XLSX from "xlsx";
const isloading = ref(false);
const errormsg = ref(null);
const headers = ref([]);
const dating = ref([]);
const handleFileUpload = async (file) => {
  isloading.value = true;
  errormsg.value = null;
  try {
    if (!file) {
      throw new Error("Файл не выбран");
    }
    const arrdata = await file.arrayBuffer();
    const workdook = XLSX.read(arrdata, { type: "array" });

    if (workdook.SheetNames.length === 0) {
      throw new Error("Файл не содержит листов");
    }
    const firstSheetName = workdook.SheetNames[0];
    const worksheet = workdook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    if (jsonData.length === 0) {
      throw new Error("Нет данных в файле");
    }
    headers.value = Object.keys(jsonData[0]);
    dating.value = jsonData;
  } catch (error) {
    console.error(error, "Ошибка при загрузке данных");
    errormsg.value = `Ошибка: ${error.message}`;
    dating.value = [];
  } finally {
    isloading.value = false;
  }
};
const setAct = (name) => {
  console.log(name);
  activeCity.value = name;
};
</script>

<style scoped>
.table {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 500px;
  text-align: center;
  font-size: 19px;
  gap: 10px;
  border: 3px solid var(--act);
  border-radius: 3px;
}
.head {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  font-size: 25px;
  font-weight: 600;
  border-bottom: 3px solid var(--act);
}
h2 {
  font-size: 35px;
}

.ff {
  flex: 0.3;
}
.all {
  margin-top: 10px;
  background-color: var(--contentfon);
  padding: 20px;
  border-radius: 5px; /* Добавляет скругленные углы */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
p {
  font-size: 20px;
}

.inf {
  display: flex;
  gap: 10px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
