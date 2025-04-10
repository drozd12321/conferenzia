<template>
  <AppDiv title="Состояние протестных настроений в субъектах РФ">
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
      <div class="map-wrap">
        <img class="map-image" src="../../public/2.jpg" />
        <div
          class="point"
          :class="{ active: activeCity == 'Великий Новгород' }"
          style="left: 20%; top: 50%"
        ></div>
        <div
          class="point"
          :class="{ active: activeCity == 'Москва' }"
          style="left: 50%; top: 56%"
        ></div>
        <div
          class="point"
          :class="{ active: activeCity == 'Санкт-Петербург' }"
          style="left: 70%; top: 80%"
        ></div>
        <div
          class="point"
          :class="{ active: activeCity == 'Нижний Новгород' }"
          style="left: 40%; top: 75%"
        ></div>
      </div>
    </div>
  </AppDiv>
</template>

<script setup>
import AppDiv from "@/components/AppDiv.vue";
import RowTable from "@/components/RowTable.vue";
import { ref } from "vue";
const activeCity = ref(null);
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
.point:hover {
  transform: scale(2.3);
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
img {
  border-radius: 10px;
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

.map-wrap {
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  flex: 0.7;
}

.map-wrap .map-image {
  width: 100%;
  height: 100%;
}

.point {
  transition: all 0.4s ease;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgb(255, 2, 2);
  border-radius: 50%;
}
.point.active {
  transform: scale(2.5);
}
</style>
