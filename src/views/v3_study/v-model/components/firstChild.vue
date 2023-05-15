<template>
  <div>
    <b>我是子组件</b>
    <p>
      子组件接收到的val: {{ props }}
    </p>
    <p>
      {{ val }}
    </p>
    <!-- <el-input v-model="val" /> -->
  </div>
</template>

<script setup lang='ts'>
import { computed, getCurrentInstance } from "@vue/runtime-core";

const props = defineProps({
  val: {
    type: String,
    default: "",
  },
});

console.log(props);
</script>

<style lang="less" scoped>
</style>