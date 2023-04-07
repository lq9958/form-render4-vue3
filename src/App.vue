<script setup>
import FormRender from './vue-form-render/index.vue'
import { reactive, ref } from 'vue'

const state = reactive({
  formData: {
    name: 'name1',
    age: 1,
    color: '#fff',
    slider: 0
  }
})

const schema = reactive({
  fields: [
    {
      type: 'input',
      title: 'name',
      field: 'name',
      value: 'jey'
    },
    {
      type: 'number',
      title: 'age',
      field: 'age',
      value: 1,
      props: {
        min: 1,
        max: 10,
        step: 2
      }
    },
    {
      type: 'color',
      title: 'color',
      field: 'color',
      value: '#fff'
    },
    {
      type: 'slider',
      title: 'slider',
      field: 'slider',
      value: 1
    }
  ]
  // column: 4
})

const handleChange = data => {  
  state.formData = data
}
</script>

<template>
  <FormRender :schema="schema" :form-data="state.formData" @on-change="handleChange" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
