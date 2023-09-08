<script setup>
import { ref, watch } from "vue";

import keepA from "../../components/keepA.vue";
import keepB from "../../components/keepB.vue";

const current = ref("keepA");
// 通过计算属性根据选择的值动态渲染组件
// watch(current,(newValue, oldvalue) => {

//         if(newValue === 'keepA') {
//             current.value = keepA
//         } else {
//             current.value = keepB
//         }

// });
</script>

<template>
  <h2>KeepAlive</h2>
  <a-radio-group v-model:value="current" name="radioGroup">
    <a-radio :value="keepA">A</a-radio>
    <a-radio :value="keepB">B</a-radio>
  </a-radio-group>
  <KeepAlive>
    <component :is="current"></component>
  </KeepAlive>
</template>

<style></style>
