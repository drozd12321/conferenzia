import useDataStore from "@/store/useDataStore";
import { computed, ref } from "vue";

export default function () {
  const res = ref();
  const { getData, getKey } = useDataStore();
  const data = computed(() => getData.value);
  const key = computed(() => getKey.value);
  return res;
}
