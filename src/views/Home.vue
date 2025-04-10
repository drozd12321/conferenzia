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
      <div class="ff">
        <img src="../../public/2.jpg" />
      </div>
    </div>
  </AppDiv>
</template>
<script setup>
import AppDiv from "@/components/AppDiv.vue";
</script>
<style scoped>
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
.ff {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 600px;
}
.ff img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
}
</style>
