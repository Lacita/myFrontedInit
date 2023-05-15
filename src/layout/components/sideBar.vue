<template>
  <el-menu router unique-opened>
    <el-submenu :index="first.route" v-for="first in menusList" :key="first.route">
      <template #title>{{ first.title }}</template>
      <el-menu-item :index="second.route" v-for="second in first.children" :key="second.route">
        {{ second.title }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";

const menusList = [
  {
    title: "网站评论",
    route: "/comment",
    children: [{ title: "评论列表", route: "/comment/list" }],
  },
  {
    title: "权限",
    route: "/auth",
    children: [
      { title: "admin", route: "/auth/admin" },
      { title: "test", route: "/auth/test" },
    ],
  },
  {
    title: "表单",
    route: "/form",
    children: [{ title: "表单验证", route: "/form/rule" }],
  },
  {
    title: "图表",
    route: "/echarts",
    children: [{ title: "柱状体和折线图", route: "/echarts/basics" }],
  },
  {
    title: "插件使用",
    route: "/plugin",
    children: [
      { title: "showdown", route: "/plugin/showDown" },
      { title: "其他插件", route: "/plugin/other" }
    ],
  },
  {
    title: "vue3知识点",
    route: "/v3_study",
    children: [
      { title: "tsx", route: "/v3_study/tsx" },
      { title: "watch和watchEffect", route: "/v3_study/watch" },
      { title: "teleport", route: "/v3_study/teleport" },
      { title: "v-model语法糖", route: "/v3_study/v-model" },
    ],
  },
];
</script>
