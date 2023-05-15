import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const line = () => import("@/views/echart/basics.vue");

const route: Array<RouteRecordRaw> = [
  {
    path: "/echarts",
    name: "echarts",
    redirect: "/echarts/basics",
    meta: {
      title: "图表",
    },
  },
  {
    path: "/echarts/basics",
    name: "echarts",
    component:line,
    meta: {
      title: "基础图表",
    },
  },
];

export default route;
