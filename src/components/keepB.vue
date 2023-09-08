<template>
  <h3>keepB</h3>
  <a-button @click="count++" type="primary">{{ count }}</a-button>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0)

</script>

<style>

</style>