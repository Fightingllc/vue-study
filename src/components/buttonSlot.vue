<template>
  <a-button type="primary">
    <slot></slot>
  </a-button>
</template>

<script>
import { Button } from 'ant-design-vue'
export default {
    components: {
        'a-button': Button
    }
}
</script>

<style>

</style>