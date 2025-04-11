<template>
  <div class="inf">
    <div class="ff">
      <div class="item">
        <h2>Информаци</h2>
        <div class="table">
          <div class="head">
            <span>Cубьект</span>
            <span>Значение</span>
          </div>
          <RowTable
            sub="Великий Новгород"
            znach="10"
            v-model:subValue="activeCity"
          />
          <RowTable sub="Москва" znach="10" v-model:subValue="activeCity" />
          <RowTable
            sub="Санкт-Петербург"
            znach="10"
            v-model:subValue="activeCity"
          />
          <RowTable
            sub="Нижний Новгород"
            znach="10"
            v-model:subValue="activeCity"
          />
        </div>
      </div>
    </div>
    <CardRussia :activeCity="activeCity" v-model:subValue="activeCity" />
  </div>
  {{ data }}
</template>
<script setup>
import { ref } from "vue";
import CardRussia from "./CardRussia.vue";
import RowTable from "./RowTable.vue";
const activeCity = ref(null);
const props = defineProps({
  data: Object,
});
</script>
<style scoped>
.table {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 500px;
  text-align: center;
  font-size: 19px;
  gap: 10px;
  border: 3px solid var(--act);
  border-radius: 3px;
}
.head {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  font-size: 25px;
  font-weight: 600;
  border-bottom: 3px solid var(--act);
}
h2 {
  font-size: 35px;
}

.ff {
  flex: 0.3;
}
.all {
  margin-top: 10px;
  background-color: var(--contentfon);
  padding: 20px;
  border-radius: 5px; /* Добавляет скругленные углы */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
p {
  font-size: 20px;
}

.inf {
  display: flex;
  gap: 10px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
