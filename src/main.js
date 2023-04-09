import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPLus from 'element-plus'
import 'element-plus/dist/index.css'
import VueFormRender from '../vue3-form-render/vue3-form-render'

const app = createApp(App)
app.use(VueFormRender)
app.use(ElementPLus).mount('#app')
