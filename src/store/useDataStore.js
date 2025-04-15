import { defineStore } from "pinia";
import regions from "@/utils/region";
import { computed, reactive, ref } from "vue";
import useFilterDistrict from "@/use/UseFilterDistrict";
const useDataStore = defineStore("data", () => {
  const alldata = ref();

  const filterkey = ref("Все");
  const getData = computed(() => {
    return alldata.value;
  });
  function loadData(newData) {
    alldata.value = newData;
  }
  function sentFilterKey(key = "Все") {
    filterkey.value = key;
    console.log(filterkey);
  }
  return { alldata, getData, loadData, sentFilterKey };
});
export default useDataStore;
