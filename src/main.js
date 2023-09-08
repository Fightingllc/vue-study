import { createApp } from "vue";
import { createPinia } from 'pinia'
import Ant from 'ant-design-vue';
import App from "./App.vue";
import router from "./router";
import "../node_modules/ant-design-vue/dist/reset.css";
import "./style.css";



const app = createApp(App);
const pinia = createPinia()

app.use(router).use(Ant).use(pinia).mount("#app");
