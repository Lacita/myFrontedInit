import { reactive } from "@vue/reactivity";

export default () => {
  type logListType = Array<string>;
  const list = reactive<logListType>([]);
  return list;
};
