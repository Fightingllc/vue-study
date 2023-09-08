<template>
  <h3>插槽</h3>
  <ButtonSlot>Click me!</ButtonSlot>
</template>

<script>
import buttonSlot from '../../components/buttonSlot.vue';
export default {
    components: {
        'ButtonSlot':buttonSlot
    }
}
</script>

<style>

</style>