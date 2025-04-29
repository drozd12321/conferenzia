<template>
  <div>
    Аппарат1
    <PanelMenu :model="items" @item-click="onItemSelect"></PanelMenu>
  </div>
</template>
<script setup>
import PanelMenu from "primevue/panelmenu";
import useApparatStore from "@/store/useApparatStore";
import { ref } from "vue";
const storeApp = useApparatStore();
function onItemSelect(event) {
  console.log(event.item.label);
  storeApp.setNameFilter(event.item.label);
}
function onItemSelectGroup(event) {
  storeApp.setNameFilter("");
  console.log(event.item.label);
  storeApp.setnameGroup(event.item.label);
}
const items = ref([
  {
    label: "Экономическая детерминация",
    command: onItemSelectGroup,
    items: [
      {
        label: "Рост З/П",
        icon: "pi pi-file",
        command: onItemSelect,
      },
      {
        label: "Рост цен на жилье",
        icon: "pi pi-image",
        command: onItemSelect,
      },
      {
        label: "Рост цены потребительской корзины",
        icon: "pi pi-image",
        command: onItemSelect,
      },
      {
        label: "Рост рабочих мест",
        icon: "pi pi-image",
        command: onItemSelect,
      },
    ],
  },
  {
    label: "Ацентрические настроения",
    command: onItemSelectGroup,
    items: [
      {
        label: "Рост преступности",
        command: onItemSelect,
      },
      {
        label: "Рост качества дорог",
        command: onItemSelect,
      },
    ],
  },
  {
    label: "Действия властей подрывающие авторитет",
    command: onItemSelectGroup,
    items: [
      {
        label: "Нарушение законов",
        command: onItemSelect,
      },
    ],
  },
  {
    label: "Невнятность действий",
    command: onItemSelectGroup,
    items: [
      {
        label: "Отсутствие открытости действий",
        command: onItemSelect,
      },
      {
        label: "Противоречивость действий",
        command: onItemSelect,
      },
      {
        label: "Пассивность",
        command: onItemSelect,
      },
    ],
  },
]);
</script>
<style scoped></style>
