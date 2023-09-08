<script>
import { Button } from 'ant-design-vue';
export default {
  components: {
    'a-button': Button, // 注册Button组件并使用别名'a-button'
    
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    
  },

}
</script>

<template>
  <h2>Home</h2>

  <a-button type="primary">你干哈呀</a-button>
 
</template>
