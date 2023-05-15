
<template>
  <div>
    <el-header style="text-align: right; font-size: 12px">
      <h1>金满屋家政后台</h1>
      <div class="flex--1" />
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goLogin">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>管理员</span>
    </el-header>
    <el-container>
      <el-aside width="200px" class="_el-aside">
        <SideBar />
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";
import SideBar from "./components/sideBar.vue";

const router = useRouter();

function goLogin() {
  router.push("/login");
}
</script>

<style lang='less' scoped>
._el-aside {
  background-color: #fff;
}
</style>
