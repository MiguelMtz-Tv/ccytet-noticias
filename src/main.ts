import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routing.ts'
import './style.css'
import Antd from 'ant-design-vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue'


const router = createRouter({
    history: createWebHistory(),
    routes
})
const app = createApp(App)

app.use(CKEditor)
app.use(router)
app.use(Antd)

app.mount('#app')
