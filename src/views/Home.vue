<template>
  <AppDiv title="Home">
    <div class="inf">
      <div class="ff">
        <div class="item">
          <h2>Информаци</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            assumenda nesciunt doloribus reprehenderit eos adipisci esse ea
            voluptate? Odio similique commodi distinctio quis, neque rem eaque
            quod ea ratione fugiat.
          </p>
        </div>
      </div>
      <div class="map-wrap">
        <img class="map-image" src="../../public/2.jpg" />
        <div class="point" style="left: 20%; top: 50%"></div>
        <div class="point" style="left: 50%; top: 56%"></div>
        <div class="point" style="left: 70%; top: 80%"></div>
      </div>
    </div>
  </AppDiv>
</template>

<script setup>
import AppDiv from "@/components/AppDiv.vue";
</script>

<style scoped>
.point:hover {
  transform: scale(2.3);
}
.all {
  margin-top: 10px;
  background-color: var(--contentfon);
  padding: 20px;
  border-radius: 5px; /* Добавляет скругленные углы */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
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
  background-color: red;
  border-radius: 50%;
}
</style>
