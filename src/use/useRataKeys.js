export default function useDataKeys(obj, nameKey) {
  const entries = Object.entries(obj).filter(([key]) => key.includes(nameKey));
  console.log(entries[0][1], "ent");
  return {
    keys: entries.map((key) => key[0]),
    values: entries.map((key) => key[1]),
  };
}
