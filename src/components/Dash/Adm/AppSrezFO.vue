<template>
  <h3>Федеральный округ</h3>
  <div class="menu-container">
    <Menu :model="items" />
  </div>
</template>

<script setup>
import { Menu } from "primevue";
import { ref } from "vue";

const items = ref([
  { label: "Сбросить" },
  { label: "СЗФО " },
  { label: "ЮФО " },
  { label: "СФО " },
  { label: "ЦФО " },
  { label: "ПФО " },
  { label: "УФО " },
  { label: "ДФО " },
  { label: "СКФО " },
  // можно добавить больше элементов для проверки скролла
]);
</script>

<style scoped>
.menu-container {
  max-height: 200px; /* фиксированная высота меню */
  overflow-y: auto; /* вертикальная прокрутка при переполнении */
  margin-top: 10px; /* отступ сверху, как у вас был */
  border: 1px solid #ccc; /* по желанию, чтобы было видно границы */
  border-radius: 4px;
}
</style>
