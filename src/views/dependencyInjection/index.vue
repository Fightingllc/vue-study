<template>
  <h2>依赖注入</h2>
  <p>目的：将父组件的变量和方法派发传递到低级组件</p>
  <h3>provider & inject</h3>
  <a-input v-model="location" @blur="onChange"  allowClear showCount/>
  <Child />
</template>

<script setup>
import { ref, provide } from "vue";
import Child from "./Child.vue";
const location = ref("morning");

function updateLocation() {
  location.value = "nice to meet you";
}

const onChange = (e) => {
    location.value = e.target.value
}
provide("location", {
  location,
  updateLocation,
});
</script>

<style></style>
