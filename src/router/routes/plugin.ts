import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const showDown = () => import("@/views/plugin/showDown.vue");
const other = () => import("@/views/plugin/other.vue");

const route: Array<RouteRecordRaw> = [
  {
    path: "/plugin",
    redirect: "/plugin/showDown",
    meta: {
      title: "图表",
    },
  },
  {
    path: "/plugin/showDown",
    name: "showDown",
    component: showDown,
    meta: {
      title: "基础图表",
    },
  },
  {
    path: "/plugin/other",
    name: "other",
    component: other,
    meta: {
      title: "其他插件",
    },
  },
];

export default route;
