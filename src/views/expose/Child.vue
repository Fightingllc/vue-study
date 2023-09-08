<template>
  <!-- <h2>child</h2> -->
  {{count}}
</template>

<script>
import { ref } from 'vue'
export default {
    setup(props,{expose}) {
        const count = ref(0)
        const increment = () => ++count.value

        expose({
            increment
        })

        return {
            count
        }
    }
}
</script>

<style>

</style>