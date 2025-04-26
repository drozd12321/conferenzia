<template>
  <v-app-bar color="#1d1d1d" class="d-flex">
    <v-row no-gutters align="center" class="w-100">
      <v-col cols="2">
        <RouterLink to="/">Главная</RouterLink>
      </v-col>
      <v-spacer color="red lighten-5"></v-spacer>
    </v-row>
    <v-btn
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      variant="text"
      color="white"
      >{{ item.title }}</v-btn
    >
  </v-app-bar>
</template>
<script setup>
import { useRoute } from "vue-router";
import { VAppBar, VAppBarTitle } from "vuetify/components/VAppBar";
const route = useRoute();
const navItems = [
  { to: "/punctone", title: "Пункт1" },
  { to: "/puncttwo", title: "Пункт2" },
  { to: "/punctthree", title: "Пункт3" },
];
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
