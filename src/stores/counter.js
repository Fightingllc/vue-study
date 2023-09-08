import { defineStore } from "pinia";
import { ref } from "vue";

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
// ***Option Store
export const useCounterStore = defineStore("counter", {
  // state ==> data(数据)
  state: () => {
    return { count: 0 };
  },
  // getters ==> computed(计算属性)
  getters: {
    double: (state) => state.count * 2,
  },
  // actions ==> methods(方法)
  actions: {
    increment() {
      this.count++;
    },
  },
});

// ***Setup Store
export const useMessageStore = defineStore("message", () => {
  const message = ref("morning");
  function reset() {
    message.value = "nice to meet you";
  }
  return { message, reset };
});
