<template>
  <div>
    <h2>teleport组件接收一个属性 "to",用来指定该组件下的元素挂载到哪个元素下面</h2>
    <el-button @click="showDialog = true">点击打开dialog</el-button>

    <teleport to="body">
      <div class="dialog" v-show="showDialog" @click="showDialog = false">
        <div class="content">我在body下级</div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showDialog = ref < Boolean > (false);
</script>

<style lang="less" scoped>
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
}
</style>
