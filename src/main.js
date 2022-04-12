import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-plus'
import 'element-plus/dist/index.css' // 引入样式

createApp(App).use(Element).use(store).use(router).mount('#app')
