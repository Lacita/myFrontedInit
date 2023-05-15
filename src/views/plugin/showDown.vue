<template>
  <div class="page">
    <div class="content">
      <div class="left">
        <el-input
          v-model="textarea"
          type="textarea"
          placeholder="输入你的代码"
          resize="none"
          :rows="30"
        />
      </div>
      <div class="right">
        <div class="output" v-html="mdHtml" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref, watch } from "@vue/runtime-core";

const { proxy } = getCurrentInstance();
const showdown = proxy.$showdown;

let mdHtml = ref("");
let textarea = ref(""); // 输入的值

let converter = new showdown.Converter();

watch(textarea, val => {
  console.log(textarea.value);
  mdHtml.value = converter.makeHtml(textarea.value);
});

textarea.value = `
### showdown：
### 一个将字符串转换为macktdown样式HTML的插件
1. 下载
\`\`\`js
     npm install showdown -S
\`\`\`
2. 引入挂载到vue实例上（main.ts）
\`\`\`js
     app.config.globalProperties.$showdown = showdown;
\`\`\`
3. 在页面里将该实例获取到
\`\`\`js
     const { proxy } = getCurrentInstance();
     let converter = new showdown.Converter();
\`\`\`
4. 使用方法将text转成对应的html
\`\`\`js
     mdHtml.value = converter.makeHtml(textarea.value);
\`\`\`
5. 使用v-html将数据显示出来
\`\`\`html
     <div class="output" v-html="mdHtml" />
\`\`\`

# 点击此处可编辑哦
`;
</script>

<style lang="less" scoped>
div {
  padding: 16px;
}

/deep/ textarea {
  border: none;
}

.page {
  height: 100%;
}
.content {
  display: flex;
  height: 100%;
  .left {
    flex: 1;
    border-right: 1px dotted #ccc;
  }
  .right {
    flex: 1;
  }
}

// 代码颜色
/deep/ code {
  color: #d34b62;
  background: #f6f6f6;
}
</style>
