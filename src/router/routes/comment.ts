import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const CommentList = () => import("@/views/comment/list.vue");

const route: Array<RouteRecordRaw> = [
  {
    path: "/comment",
    name: "Comment",
    redirect: "/comment/list",
    meta: {
      title: "评论",
    },
  },
  {
    path: "/comment/list",
    name: "CommentList",
    component: CommentList,
    meta: {
      title: "评论列表",
    },
  },
];

export default route;
