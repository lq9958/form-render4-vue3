import { createApp } from 'vue'
import App from './App.vue'
import ElementPLus from 'element-plus'
import 'element-plus/dist/index.css'
import FormRender4Vue3 from '../package/form-render4-vue3/index.js'
// import 'form-render4-vue3/form-render4-vue3/style.css'
import 'normalize.css/normalize.css'


const app = createApp(App)
app.use(FormRender4Vue3)
app.use(ElementPLus).mount('#app')
