<template>
  <div class="page">
    <b> 这是父组件</b>
    <p>
      val: {{ val }}
    </p>
    <div class="child">
      <Child v-model="val" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "@vue/reactivity";
import Child from "./components/firstChild.vue";

const val = ref("父组件的值");

</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 500px;
  background-color: rgb(70, 70, 70);
  color: white;
  padding: 20px;
  .child {
    margin-top: 100px;
    width: 50%;
    margin-bottom: 0;
    height: 250px;
    background-color: pink;
    padding: 20px;
    color: black;
  }
}
</style>
