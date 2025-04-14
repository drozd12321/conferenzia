<template>
  <header>
    <h1 class="h1">Моя система</h1>
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
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<style scoped>
header {
  background-color: var(--fonHeadr);
  font-size: 20px;
  padding: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: grid;
  color: var(--act);
  grid-template-areas: "h1. . glavn  . . one two three";
  align-items: center;
  position: sticky;
  top: 0;
}

div {
  transition: all 0.4s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}
.h1 {
  grid-area: h1;
  color: var(--act);
  font-size: 27px;
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
  transform: translateY(-5px);
  color: var(--act-dark);
}
a {
  text-decoration: none;
  color: var(--act);
  padding: 3px;
}
a.active {
  border-bottom: 3px solid var(--act);
  color: var(--content-color);
}
</style>
