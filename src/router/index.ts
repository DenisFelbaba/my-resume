import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import CVPage from "../views/CVPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/cv",
      name: "cv",
      component: CVPage,
    },
  ],
});

export default router;
