import apparat from "@/data/apparat"; // ваш файл с критериями

function calcProtestVer(regionData) {
  let totalFactors = 0;
  let triggered = 0;

  apparat.forEach((group) => {
    group.factors.forEach((factor) => {
      totalFactors++;
      const d = regionData[0];

      //   switch (factor.name) {
      //     case "Рост З/П":
      //       if (
      //         d.zarp &&
      //         d.zarp_prev &&
      //         d.infl &&
      //         d.infl_prev &&
      //         ((d.zarp - d.zarp_prev) / d.zarp_prev) * 100 <
      //           ((d.infl - d.infl_prev) / d.infl_prev) * 100
      //       ) {
      //         triggered++;
      //       }
      //       break;
      //     case "Рост цен на жилье":
      //       if (
      //         d.house &&
      //         d.house_prev &&
      //         d.zarp &&
      //         d.zarp_prev &&
      //         ((d.house - d.house_prev) / d.house_prev) * 100 >
      //           ((d.zarp - d.zarp_prev) / d.zarp_prev) * 100
      //       ) {
      //         triggered++;
      //       }
      //       break;
      //     case "Рост цены потребительской корзины":
      //       if (d.basket && d.basket_prev && d.basket > d.basket_prev) {
      //         triggered++;
      //       }
      //       break;
      //     case "Рост рабочих мест":
      //       if (
      //         d.unemployed &&
      //         d.unemployed_prev &&
      //         d.unemployed > d.unemployed_prev
      //       ) {
      //         triggered++;
      //       }
      //       break;
      //     case "Рост преступности":
      //       if (d.crime && d.crime_prev && d.crime > d.crime_prev) {
      //         triggered++;
      //       }
      //       break;
      //     case "Рост качества дорог":
      //       if (d.road && d.road_prev && d.road < d.road_prev) {
      //         triggered++;
      //       }
      //       break;
      //     case "Нарушение законов":
      //       if (d.law_violations) {
      //         // например, булево или число случаев
      //         triggered++;
      //       }
      //       break;
      //     case "Отсутствие открытости действий":
      //       if (d.closed_actions) {
      //         triggered++;
      //       }
      //       break;
      //     case "Противоречивость действий":
      //       if (d.contradictory_actions) {
      //         triggered++;
      //       }
      //       break;
      //     case "Пассивность":
      //       if (d.passivity) {
      //         triggered++;
      //       }
      //       break;
      //   }
    });
  });

  // Вероятность: доля сработавших индикаторов
  return totalFactors ? Math.round((triggered / totalFactors) * 100) : 0;
}

// Добавляем ключ ver ко всем регионам
export default function addProtestVerToAllRegions(regions) {
  Object.keys(regions).forEach((regionName) => {
    const region = regions[regionName];
    region.ver = calcProtestVer(region);
  });
}
