<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <h2>组件基础</h2>
    <HelloWorld
      v-for="item in fruits"
      :title="item.title"
      :key="item.id"
      @enlarge-text="postFontSize += 0.1"
    />
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld.vue";

export default {
  // 局部注册
  components: {
    HelloWorld,

  },
  data() {
    return {
      fruits: [
        { id: 1, title: "apple" },
        { id: 2, title: "watermelon" },
        { id: 3, title: "banana" },
      ],
      postFontSize: 1
    };
  },
};
</script>

<style></style>
