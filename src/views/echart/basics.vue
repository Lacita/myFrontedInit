<template>
  <div class="page">
    <el-form label-position="top">
      <el-form-item label="操作：">
        <div class="btns">
          <el-button @click="randomData">重新生成数据</el-button>
        </div>
      </el-form-item>
      <el-form-item label="图表样式：">
        <el-radio-group v-model="options.echartsType">
          <el-radio label="line">折线图</el-radio>
          <el-radio label="bar">柱状图</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- <el-form-item label="显示轴标线：">
        <el-switch v-model="options.showAxle" />
      </el-form-item> -->
      <el-form-item label="选择线条颜色：">
        <el-color-picker v-model="options.dataColor" />
      </el-form-item>
      <el-form-item label="选择线折线宽度：">
        <el-slider v-model="options.lineWidth" :min="1" :max="20" />
      </el-form-item>
    </el-form>
    <div id="myChart" :style="{ width: '800px', height: '500px' }" />
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity"
import { onMounted, watch } from "@vue/runtime-core";
import * as echarts from "echarts";

const options = reactive({
  userData: {},
  showAxle: true,
  echartsType: "line",
  dataColor: "#1E75B4", // 数据颜色
  lineWidth: 3, // 线条宽度
})

// 监听,每一个数据发生变化时都重新渲染
watch(options, (val, prevCount) => {
  renderEcharts()
})


let myChart;

// 生成随机数据
const randomData = () => {
  options.userData = Array(30).fill().map(() => Math.ceil(Math.random() * 1000));
}

// 重新渲染dom
function renderEcharts () {
  myChart.setOption({
    title: { text: "网站近期访问量" },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        animation: false,
        label: {
          backgroundColor: options.dataColor
        }
      }
    },
    xAxis: {
      data: Array(30).fill().map((it, idx) => `${new Date().getMonth()}-${idx + 1}`),
      name: "日期"
    },
    yAxis: {
      type: "value",
      name: "浏览用户量"
    },
    series: [
      {
        name: "用户量", // 折线名称
        type: options.echartsType, // 数据显示类型
        smooth: true, // 是否开启曲线效果
        data: options.userData,
        color: options.dataColor, // 数据颜色
        lineStyle: {

          width: options.lineWidth

        },
        // 渐变色
        areaStyle: {
          color: echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(93, 233, 214, 0.8)"
            },
            {
              offset: 1,
              color: "rgba(216, 118, 216,0.3)"
            }
          ])
        },
      },
    ],
  });
}

onMounted(() => {
  myChart = echarts.init(document.getElementById("myChart"));

  // 绘制图表
  randomData()
  renderEcharts()
})




</script>

<style scoped lang='less'>
.page {
  display: flex;
  height: 100%;

  .el-form {
    width: 250px;
    max-height: 100%;
    overflow-y: auto;
    /deep/ .el-form-item__label {
      height: 38px;
    }
    .el-slider {
      width: 200px;
      margin-left: 20px;
    }
  }
}
.btns {
  /* margin-bottom: 20px; */
}
.chart {
  height: 400px;
}

.aaa {
  color: rgba(216, 118, 216, 0.8);
}
.mt-20 {
  margin-top: 20px;
}
.mb-20 {
  margin-bottom: 20px;
}
</style>