import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Auth = () => import("@/views/Login.vue");

const route: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    name: "auth",
    redirect: "bar",
    meta: {
      title: "权限",
    },
  },
  {
    path: "/auth/admin",
    name: "admin",
    component: Auth,
    meta: {
      title: "admin权限",
      auth: "admin",
    },
  },
  {
    path: "/auth/test",
    name: "bar",
    component: Auth,
    meta: {
      title: "通用权限",
    },
  },
];

export default route;
