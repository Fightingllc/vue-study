<template>
  <div>
    <h3>expose</h3>
    <p>子组件通过expose暴露出变量和方法，父组件可以通过ref来访问</p>
    <Child ref="childRef" />
    <span>---</span>
    <a-button type="primary" @click="incrementChild">Increment Child</a-button>
  </div>
</template>

<!-- <script>
import Child from './Child.vue';
import {ref} from 'vue'
export default {
    components: {
        ChildComponent: Child
    },
    setup() {
        const childRef = ref(null)

        const incrementChild = () => {
            if (childRef.value) {{
                childRef.value.increment()
            }}
        }

        return {
            childRef,
            incrementChild
        }
    }

}
</script> -->
<script setup>
import Child from "./Child.vue";
import { ref } from "vue";

const childRef = ref(null);

const incrementChild = () => {
  if (childRef.value) {
    {
      childRef.value.increment();
    }
  }
};
</script>

<style></style>
