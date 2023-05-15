<template>
  <div class="page">
    <div class="content">
      <h3>
        num:{{num}}
      </h3>

      <el-button :type='isWatchNum ? "danger" : "primary"' @click="openWatch">
        {{isWatchNum ? "关闭watch" : "开启watch"}}
      </el-button>
      <el-button @click="num++">num++</el-button>
    </div>
    <LogList :list="list" />
  </div>
</template>




<script setup lang='ts'>
import LogList from "@/components/logList.vue";

import { reactive, ref } from "@vue/reactivity";

import createList from "@/hooks/logListHooks";
import { watch } from "@vue/runtime-core";
const log = (val: any) => {
  list.push(val);
};
// 监听单个源
const num = ref(0);

let isWatchNum = ref<boolean>(false);
let watchNum: any;

const list = createList();
const openWatch = () => {
  if (isWatchNum.value) {
    isWatchNum.value = false;
    watchNum();
    return;
  }
  watchNum = watch(num, (val, oldVal) => {
    log(`num发生了改变，新值为${val}，旧值为${oldVal}`);
  });
  isWatchNum.value = true;
};


</script>

<style lang='less' scoped>
.page {
  display: flex;
  height: 100%;
  .content {
    border-right: 1px solid #ccc;
  }
  & > div {
    flex: 1;
  }
}
</style>