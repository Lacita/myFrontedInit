<script setup lang='ts'>
import CountTo from "@/components/CountTo/CountTo";
</script>

<template>
  <div>
    <p>vue-count-to</p>
    <CountTo :start-val="0" :end-val="999999" />
  </div>
</template>

