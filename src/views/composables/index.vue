<template>
    <h2>组合式函数</h2>
  Mouse position is at: {{ x }}, {{ y }}
</template>

<script setup>
import {useMouse} from '@/utils/mouse.js'
    const {x, y} = useMouse()
</script>

<style>

</style>