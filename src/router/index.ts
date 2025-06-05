import Home from "@/views/home.vue";
import layout from "@/layout/index.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login.vue";
import Register from "@/views/register.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "login",
          component: Login,
        },
        {
          path: "register",
          component: Register,
        },
      ],
    },
  ],
});
