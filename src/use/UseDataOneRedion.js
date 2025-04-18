import useDataStore from "@/store/useDataStore";
export default function useDataOneRegion(name) {
  const { getData } = useDataStore();
  return getData[name];
}
