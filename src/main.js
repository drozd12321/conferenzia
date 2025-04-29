import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import Ripple from "primevue/ripple";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(PrimeVue, {
  theme: { preset: Aura },
  ripple: true,
  options: {
    cssLayer: {
      name: "primevue",
      order: "theme, base, primevue",
    },
  },
});
app.directive("ripple", Ripple);
app.mount("#app");
