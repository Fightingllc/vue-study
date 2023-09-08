<template>
  <!-- <h3>provider</h3> -->
  <p>{{ location }}</p>

  <a-button @click="updateLocation">{{ location }}</a-button>
</template>

<script setup>
  import { inject } from "vue";

  const {location, updateLocation} = inject('location')
</script>

<style>

</style>