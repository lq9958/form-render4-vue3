import { createApp } from 'vue'
import App from './App.vue'
import ElementPLus from 'element-plus'
import 'element-plus/dist/index.css'
import FormRender4Vue3 from 'form-render4-vue3'
import 'form-render4-vue3/lib/style.css'
import 'normalize.css/normalize.css'


const app = createApp(App)
app.use(FormRender4Vue3)
app.use(ElementPLus).mount('#app')
