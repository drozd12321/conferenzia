import apparat from "@/data/apparat";

const CURRENT_YEAR = 2024;
const PREV_YEAR = CURRENT_YEAR - 1;
function calcProtestVer(regionData) {
  let totalFactors = 0;
  let triggered = 0;
  apparat.forEach((group) => {
    group.factors.forEach((factor) => {
      totalFactors++;
      const currentKey = `${factor.name} за ${CURRENT_YEAR} год`;
      const prevKey = `${factor.name} за ${PREV_YEAR} год`;
      const currentValue = regionData[0][currentKey];
      const prevValue = regionData[0][prevKey];
      if (currentValue === undefined || prevValue === undefined) return;
      switch (factor.name) {
        case "Рост З/П": {
          const inflCurrent = regionData[`Инфляция за ${CURRENT_YEAR} год`];
          if (inflCurrent === undefined) break;
          if (currentValue < inflCurrent) triggered++;
          break;
        }
        case "Рост цен на жилье": {
          const zpCurrent = regionData[`Рост З/П за ${CURRENT_YEAR} год`];
          if (zpCurrent === undefined) break;
          if (currentValue > zpCurrent) triggered++;
          break;
        }
        case "Рост цены потребительской корзины":
          if (currentValue > prevValue) triggered++;
          break;
        case "Рост рабочих мест":
          // В вашем описании: увеличение безработных - значит если показатель растёт, индикатор сработал
          if (currentValue > prevValue) triggered++;
          break;
        case "Рост преступности":
          if (currentValue > prevValue) triggered++;
          break;
        case "Рост качества дорог":
          // Падение качества - если показатель снизился, индикатор сработал
          if (currentValue < prevValue) triggered++;
          break;
        case "Нарушение законов":
          if (currentValue > 0) triggered++;
          break;
        case "Отсутствие открытости действий":
        case "Противоречивость действий":
        case "Пассивность":
          // Предполагаем, что значения от 1 до 10, срабатывает при >=5
          if (currentValue >= 5) triggered++;
          break;
      }
    });
  });

  return totalFactors ? Math.round((triggered / totalFactors) * 100) : 0;
}

function addProtestVerToAllRegions(regionsData) {
  Object.entries(regionsData).forEach(([regionName, regionProxy]) => {
    const ver = calcProtestVer(regionProxy);
    regionProxy.ver = ver;
  });
  return regionsData;
}

export default addProtestVerToAllRegions;
