<template>
  <div class="main">
    <el-form ref="form" label-width="200px" :model="formData" :rules="rules">
      <el-form-item label="必填" prop="req">
        <el-input v-model="formData.req" />
      </el-form-item>
      <el-form-item label="小于666的数字" prop="num">
        <el-input v-model.number="formData.num" />
      </el-form-item>
      <el-form-item label="必须输入‘asdf’" prop="custom">
        <el-input v-model="formData.custom" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">开始验证</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {} from "@vue/reactivity";
import { _assign } from "@/common/utils";
import { onMounted, RendererElement, VNode, reactive, ref, unref } from "@vue/runtime-core";

const form = ref<any>(null);

const formData = reactive({
  req: "",
  num: '',
  custom: "",
});

const vali = (rule: any, val: string, callback: (val?: any) => {}) => {
  if (val === "asdf"||!val) callback();
  else {
    callback(new Error("请输入  asdf"));
  }
};
const rules = {
  req: [{ required: true, trigger: "blur", message: "此项必填" }],
  num: [{ type: 'number', trigger: "blur", message: "请输入小于666的数字",min:0,max:666 }],
  custom: [{ validator: vali, trigger: "blur" }],
};

const submit = async () => {
  form.value.validate((volid: boolean, rule: object) => {
    console.log(volid, rule);
  });
};
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* align-items: center; */
}
</style>
