<template>
  <div>
    <el-form label-width="120px">
      <el-form-item v-for="item in infoList" :key="item.name" :label="item.name">
        <div class="value">{{ item.value }}</div>
        <div class="tip">{{ item.tip }}</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { debounce } from "lodash"

import { reactive } from "@vue/reactivity";

import { getExplore } from "@/common/utils";
import { onMounted, onUnmounted } from "@vue/runtime-core";

const infoList = reactive([
  {
    name: "浏览器及版本号",
    value: getExplore(),
    tip: "navigator.userAgent 或者 navigator.userAgent.toLowerCase()",
  },
  {
    name: "屏幕分辨率",
    value: "",
    tip: "window.screen.availHeight   availWidth",
  },
]);

// 获取屏幕宽度和高度
infoList[1].value = `${window.screen.availWidth} x ${window.screen.availHeight}`

</script>

<style lang="less" scoped>
.value {
  font-size: 20px;
}
.tip {
  line-height: 20px;
  color: rgb(180, 180, 180);
}
</style>