import { RouteRecordRaw } from "vue-router";

const tsx = () => import("@/views/v3_study/tsx");
const userInfo = () => import("@/views/v3_study/userInfo.vue");
const watch = () => import("@/views/v3_study/watch.vue");
const vModel = () => import("@/views/v3_study/v-model/index.vue");
const telport = () => import("@/views/v3_study/teleport.vue");

const route: Array<RouteRecordRaw> = [
  {
    path: "/v3_study",
    name: "v3_study",
    redirect: "/v3_study/userInfo",
    meta: {
      title: "其他",
    },
  },
  {
    path: "/v3_study/userInfo",
    name: "userInfo",
    component: userInfo,
    meta: {
      title: "userInfo",
    },
  },
  {
    path: "/v3_study/tsx",
    name: "tsx",
    component: tsx,
    meta: {
      title: "tsx",
    },
  },
  {
    path: "/v3_study/watch",
    name: "watch",
    component: watch,
    meta: {
      title: "watch和watchEffect",
    },
  },
  {
    path: "/v3_study/teleport",
    name: "telport",
    component: telport,
    meta: {
      title: "teleport",
    },
  },
  {
    path: "/v3_study/v-model",
    name: "vModel",
    component: vModel,
    meta: {
      title: "vue3的v-model",
    },
  },
];

export default route;
