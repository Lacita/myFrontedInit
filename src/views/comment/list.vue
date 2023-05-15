<template>
  <h1>head</h1>
  <el-table :data="commentList" style="width: 100%">
    <el-table-column prop="id" label="ID" width="50px" />
    <el-table-column prop="userName" label="用户名称" width="200px" />
    <el-table-column prop="userImg" label="用户头像" width="150px">
      <template v-slot='{row}'>
        <img :src="row.userImg" class="user-img">
      </template>
    </el-table-column>
    <el-table-column prop="content" label="评论内容">
    </el-table-column>
    <el-table-column prop="createdAt" label="评论时间" width="200px">
      <template v-slot='{row}'>
        {{ $filters.timeFormat(row.createdAt)}}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="150px">
      <template v-slot='{row}'>
        <el-button type="danger" @click="deleteComment(row.id)" size="small">
          删除
        </el-button>
      </template>

    </el-table-column>
  </el-table>

</template>


<script setup lang='ts'>
import { commentApi } from "@/services/api";
import { ElMessageBox, ElMessage } from "element-plus";
import { reactive, ref } from "@vue/reactivity";

// 评论列表;
let commentList = ref<any>([
  {
    content: "333333333333333333",
    createdAt: "2022-01-25T01:51:38.000Z",
    id: 40,
    updatedAt: "2022-01-25T01:51:38.000Z",
    userImg:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3c%2F12%2F4c%2F3c124c5277386c897dad2977bb964ea1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644047640&t=18b34b7201b820631afcd51035a2dacf",
    userName: "匿名用户",
  },
]);

const getCommentList = async () => {
  const res: any = await commentApi.list();
  commentList.value = res.dataList;
};

getCommentList();

// 删除
const deleteComment = async (id: number) => {
  ElMessageBox.confirm(`确定删除id为${id}的评论吗`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await commentApi.remove({ id });
      ElMessage({
        type: "success",
        message: "删除成功",
      });
      getCommentList();
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消删除",
      });
    });
};
</script>

<style scoped>
.user-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>