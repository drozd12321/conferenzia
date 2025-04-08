<template>
  <header>
    <div class="glavn">
      <router-link to="/"><span>Главная</span></router-link>
    </div>
    <div class="one">
      <router-link to="/punctone"><span>Пункт1</span></router-link>
    </div>
    <div class="two">
      <router-link to="/puncttwo"><span>Пункт2</span></router-link>
    </div>
    <div class="three">
      <router-link to="/punctthree"><span>Пункт3</span></router-link>
    </div>
  </header>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<style scoped>
header {
  background-color: rgb(48, 83, 240);
  font-size: 20px;
  padding: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  display: grid;
  grid-template-areas: "glavn . . . . one two three";
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
div {
  transition: all 0.4s ease;
  cursor: pointer;
  height: 100%;
}
.one {
  grid-area: one;
}
.two {
  grid-area: two;
}
.three {
  grid-area: three;
}
.glavn {
  grid-area: glavn;
}

div:hover {
  transform: translateY(-10px);
}
a {
  text-decoration: none;
  color: white;
  padding: 3px;
}
.active {
  border-bottom: 2px solid rgb(156, 153, 153);
  color: rgb(156, 153, 153);
}
</style>
