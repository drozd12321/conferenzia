import { defineStore } from "pinia";
import { computed, reactive } from "vue";
const useDataStore = defineStore("data", () => {
  const alldata = reactive({ a: 1, v: 2, c: 4 });
  const getData = computed(() => {
    return alldata;
  });
  return { alldata, getData };
});
export default useDataStore;
