import VueFormRender from './src/form-render4-vue3.vue'

VueFormRender.install = function (app) {
  app.component('form-render4-vue3', VueFormRender)
}

VueFormRender.version = 'v0.0.3'
export default VueFormRender

