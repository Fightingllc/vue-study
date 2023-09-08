<template>
  <div>Current Count： {{ counter.count }}</div>
  <a-button @click="addCount">add</a-button>
  <span>^_^</span>
  <a-button @click="doubleCount">Double</a-button>
  <hr />
  <div>{{ message }}</div>
  <a-button @click="reset">resetMsg</a-button>
</template>

<script setup>
import { useCounterStore, useMessageStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { onBeforeMount,watch } from "vue";

// ##方式一
const counter = useCounterStore();
const store = useMessageStore();
counter.count++;
// 自动补全！ ✨
// counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
//   counter.increment();
function addCount() {
  counter.increment();
}
function doubleCount() {
  counter.count = counter.double;
}

// ##方式二
// storeToRefs可以让store 中提取属性时保持其响应性
const { message } = storeToRefs(store);
// action可以直接结构
const { reset } = store;
onBeforeMount(() => {
  // 不安全
  //  counter.$state = { count: 34 };
  // 在它内部调用 `$patch()`：
  counter.$patch({ count: 24 });
})
// 订阅state
// 每当状态发生变化时，将整个 state 持久化到本地存储。
// detached: true 此订阅器即便在组件卸载之后仍会被保留
counter.$subscribe((mutation,state) => {
    localStorage.setItem('counter',JSON.stringify(state.count))
},{detached: true})

// 也可以使用watch在pinia实例上监听整个state
watch(
    counter,
    (state) => {
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    localStorage.setItem('counter', JSON.stringify(state.count))
  },
  { deep: true }
)
</script>

<style></style>
