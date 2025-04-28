import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
const useApparatStore = defineStore("apparat", () => {
  const nameFilter = ref("");
  const getNameFilter = computed(() => {
    return nameFilter.value;
  });
  function setNameFilter(newData) {
    nameFilter.value = newData;
    console.log(nameFilter);
  }

  return { getNameFilter, setNameFilter, nameFilter };
});
export default useApparatStore;
