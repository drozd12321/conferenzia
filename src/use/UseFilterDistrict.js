export default function useFilterDistrict(regions, districtName) {
  if (districtName === "Все") {
    return regions;
  }
  return regions.filter((reg) => reg.federalDistrict === districtName);
}
