import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Layout from "@/layout/index.vue";
import auth from "@/router/routes/auth";
import v3_study from "@/router/routes/v3_study";
import echarts from "@/router/routes/echarts";
import plugin from "@/router/routes/plugin";
import form from "@/router/routes/form";
import comment from "@/router/routes/comment";

const notFound = () => import("@/views/notFound.vue");
const Login = () => import("@/views/Login.vue");
const Welcome = () => import("@/views/welcome.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/welcome",
    component: Layout,
    children: [
      ...auth,
      ...v3_study,
      ...echarts,
      ...plugin,
      ...form,
      ...comment,
      {
        path: "/welcome",
        name: "welcome",
        component: Welcome,
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: notFound, // 引入 组件
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
