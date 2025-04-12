import { defineStore } from "pinia";
import { computed, reactive } from "vue";
const useDataStore = defineStore("data", () => {
  const alldata = reactive({ a: 1, v: 2, c: 4 });
  const getData = computed(() => {
    return alldata;
  });
  function addData(key, val) {
    if (!alldata[key]) {
      alldata[key] = val;
    }
  }
  return { alldata, getData, addData };
});
export default useDataStore;
