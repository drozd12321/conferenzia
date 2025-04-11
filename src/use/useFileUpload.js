import { ref } from "vue";
import * as XLSX from "xlsx";
export default function useFileUpload() {
  const isloading = ref(false);
  const errormsg = ref(null);
  const headers = ref([]);
  const firstColumn = ref([]);
  const dating = ref([]);
  const handleFile = async (file) => {
    dating.value = [];
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
      const dataWith = jsonData.map((item) => {
        return Object.values(item);
      });
      firstColumn.value = jsonData.map((item) => item[Object.keys(item)[0]]);
      headers.value = Object.keys(jsonData[0]);
      dating.value.push(firstColumn.value);
      dating.value.push(headers.value);
      dating.value.push(dataWith);
    } catch (error) {
      console.error(error, "Ошибка при загрузке данных");
      errormsg.value = `Ошибка: ${error.message}`;
      dating.value = [];
    } finally {
      isloading.value = false;
    }
  };
  return {
    isloading,
    errormsg,
    headers,
    dating,
    handleFile,
  };
}
