<script>
export default {
    data() {

    },
    methods: {
        // 编程式
        goHelloWord() {
            this.$router.push('/home')
        },
        // 命名路由
        pushMethods() {
            this.$router.push({name:'home'});
            // 携参路由
            // this.$router.push({ name: 'user', params: { id: 123 } });
        },
        // replace()不会在浏览器的历史记录中留下历史记录
        replaceMethods() {
            this.$router.replace()
        },
        // 可以在浏览器的历史记录中向前或向后导航。可以传递一个整数作为参数，负数表示后退，正数表示前进。
        goMethods() {
            this.$router.go(-1)
        },
    }
}
</script>

<template>
    <!-- 路由跳转方式 -->
    <h2>router-Study</h2>
    <!-- 编程式的路由跳转 -->
    <Button type="primary" @click="goHelloWord">啊哈</Button>  
    <!-- 命名路由：增加刻度想和维护性 -->
    <router-link :to="{name:'/'}">HelloWorld</router-link>
    <span>***</span>
    <router-link to="/components">components</router-link>
  </template>

<style>

</style>