import { defineComponent, ref, reactive } from "vue";
import { ElMessage } from "element-plus";
export default defineComponent({
  setup() {
    const m_b_20px = {
      marginBottom: "20px",
    };

    interface listItem {
      content: string;
      type: alertType;
    }
    type alertType = "success" | "info" | "warning" | "error";

    const val = ref("");
    const openRule = ref<boolean>(false);
    const list = reactive<listItem[]>([
      {
        content: "jsx不好用",
        type: "success",
      },
      {
        content: "tsx更不好用",
        type: "success",
      },
    ]);

    const randomColor = (): alertType => {
      const color = ["success", "info", "warning", "error"][~~(Math.random() * 4)];
      return color as alertType;
    };

    const addAlert = (): void => {
      if (openRule.value && val.value == "") {
        ElMessage({ type: "error", message: "请填写内容", duration: 2000 });
        return;
      }
      list.push({
        content: val.value || "默认内容",
        type: randomColor(),
      });
      val.value = "";
    };

    function forList() {
      return list.map((item: listItem, i: number) => {
        return <el-alert style={{ ...m_b_20px }} title={item.content} type={item.type}></el-alert>;
      });
    }

    return () => {
      return (
        <div>
          <el-input
            v-model={val.value}
            style={m_b_20px}
            place
            placeholder="请输入alert的内容"
          ></el-input>
          <div>
            <el-button type="success" onClick={addAlert} style={m_b_20px}>
              {" "}
              添加一个随机type的el-alert，内容为上面那个input框里面的内容
            </el-button>
            <el-button
              type={openRule.value ? "danger" : "primary"}
              onClick={() => {
                openRule.value = !openRule.value;
              }}
              style={m_b_20px}
            >
              {openRule.value ? "关闭非空验证" : "开启非空验证"}
            </el-button>
          </div>
          {forList()}
        </div>
      );
    };
  },
});
