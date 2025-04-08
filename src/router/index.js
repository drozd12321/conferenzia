import Home from "@/views/Home.vue";
import PuctThree from "@/views/PuctThree.vue";
import PunctOne from "@/views/PunctOne.vue";
import PunctTwo from "@/views/PunctTwo.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/punctone",
      name: "punctone",
      component: PunctOne,
    },
    {
      path: "/puncttwo",
      name: "puncttwo",
      component: PunctTwo,
    },
    {
      path: "/punctthree",
      name: "punctthree",
      component: PuctThree,
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
