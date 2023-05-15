<template>
  <div class="log-list-page">
    <h3>console.log：</h3>
    <p v-for="(item,index) in list" :key="index"> {{ item }} </p>
  </div>
</template>

<script setup lang='ts'>
import { defineProps, onMounted } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
console.log("props", props.list);
// const list = props.list
</script>

<style lang="less" scoped>
 .log-list-page {
  display: block;
  padding: 0 20px 20px 20px;
}
p {
  margin: 0;
  padding: 0;
}
p + p {
  margin-top: 10px;
}
</style>