<script>
import { ref } from "vue";
import { Button } from 'ant-design-vue';

export default {
  components: {
    'a-button': Button
  },
  // 接收父组件的值
  // 一旦传递给props，它将成为该组件实例上的一个属性，可以在模板和组建的this上下文中访问
  props: ["title"],
  // emits声明需要抛出的事件，当子组件触发这个事件时，会通知父组件
  emits: ['enlarge-text'],
  created() {
    // props的传递是单向数据流，只能通过父组件来修改，在子组件内不允许修改，只能访问
    // this.title = 'morning' // 'set' on proxy: trap returned falsish for property 'title'
  }
};

const count = ref(0);
</script>

<template>
  <h1>{{ title }}</h1>
  <a-button type="primary" @click="$emit('enlarge-text')">放大</a-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
