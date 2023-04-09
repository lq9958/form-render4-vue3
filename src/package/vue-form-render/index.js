import VueFormRender from './src/vue-form-render.vue'

VueFormRender.install = function (app) {
  app.component('vue-form-render', VueFormRender)
}

export default VueFormRender

