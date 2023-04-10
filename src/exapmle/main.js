import { createApp } from 'vue'
import App from './App.vue'
import ElementPLus from 'element-plus'
import 'element-plus/dist/index.css'
import VueFormRender from 'form-render4-vue3'
import 'form-render4-vue3/vue3-form-render/style.css'
import 'normalize.css/normalize.css'


const app = createApp(App)
app.use(VueFormRender)
app.use(ElementPLus).mount('#app')
