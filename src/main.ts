import { createApp, h, defineComponent } from "vue";
import App from "./App";
import ElementPlus from "element-plus";
import router from "./router";
import store from "./store";
import "element-plus/lib/theme-chalk/index.css";
import "./style/index.less";

import dayjs from "dayjs";

// import * as echarts from "echarts";

const app = createApp(App);

// app.config.globalProperties.$echarts = echarts;

import showdown from "showdown"; //将数据转换为mackdown样式的插件
// 将showdown插件挂载到vue实例上
app.config.globalProperties.$showdown = showdown;

// 过滤器
app.config.globalProperties.$filters = {
  timeFormat(value: Date) {
    return dayjs(value).format("YYYY-MM-DD HH:mm:ss"); // '25/01/2019';
  },
};

app.use(ElementPlus);

app.use(store).use(router).mount("#app");
