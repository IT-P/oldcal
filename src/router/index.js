import { createRouter, createWebHistory } from "vue-router";
import OldCalMenu from "../components/OldCalMenu.vue";
import Calendar from "../components/Calendar.vue";
import Translator from "../components/Translator.vue";

const routes = [
  {
    path: "/",
    name: "OldCalMenu",
    component: OldCalMenu,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/translator",
    name: "Translator",
    component: Translator,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
