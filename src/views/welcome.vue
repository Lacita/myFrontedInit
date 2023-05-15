<template>
  <div>
    <el-form label-width="120px">
      <el-button @click="selectIpInfo" type="success">查询ip信息</el-button>
      <el-form-item v-for="item in infoList" :key="item.name" :label="item.name">
        <div class="value">{{ item.value||'点击上方查询按钮进行查询' }}</div>
        <div class="tip">{{ item.tip }}</div>
      </el-form-item>
      {{infoList.length}}
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { commentApi, featuresApi } from "@/services/api";
import { debounce } from "lodash";

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
  {
    name: "IP地址",
    value: "",
    tip: "",
  },
  {
    name: "地址",
    value: "",
    tip: "",
  },
  {
    name: "网络",
    value: "",
    tip: "",
  },
]);

const selectIpInfo = async () => {
  const res: any = await featuresApi.ipconfig();
  interface IpInfo {
    ip: string; //ip
    address: string; //地址
    inter: string; //网络
  }
  const ipInfo = reactive<IpInfo>({
    ip: res.ip,
    address: res.data.slice(0, 4).join(""),
    inter: res.data[4],
  });
  infoList[2].value = ipInfo.ip;
  infoList[3].value = ipInfo.address;
  infoList[4].value = ipInfo.inter;
};

// 获取屏幕宽度和高度
infoList[1].value = `${window.screen.availWidth} x ${window.screen.availHeight}`;
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
