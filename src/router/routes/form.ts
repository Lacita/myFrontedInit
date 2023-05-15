import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const FormRule = () => import("@/views/form/rule.vue");

const route: Array<RouteRecordRaw> = [
  {
    path: "/form",
    name: "Form",
    redirect: "/form/rule",
    meta: {
      title: "表单",
    },
  },
  {
    path: "/form/rule",
    name: "FormRule",
    component: FormRule,
    meta: {
      title: "表单验证",
    },
  },
];

export default route;
