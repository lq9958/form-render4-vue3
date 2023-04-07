<script setup>
import FormRender from './vue-form-render/index.vue'
import { reactive, ref, watch, defineAsyncComponent } from 'vue'
import { mergeSchema } from './vue-form-render/utils'

const form = reactive({
  formData: {
    name: 'jey',
    age: 1,
    color: '#fff',
    slider: 0
  }
})

watch(form.formData, () => {
  console.log('formData has changed')
})

const userschema = {
  fields: [
    {
      type: 'number',
      title: 'age',
      field: 'age',
      value: 1,
      props: {
        min: 1,
        max: 10,
        step: 2
      },
      labelWidth: 0
    },
    {
      type: 'input',
      title: 'name',
      field: 'name',
      value: ''
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
    },
    {
      type: 'select',
      title: 'select',
      field: 'like',
      value: '',
      data: {
        list: [
          {
            label: '唱',
            value: 'song'
          },
          {
            label: '跳',
            value: 'dance'
          },
          {
            label: 'rap',
            value: 'rap'
          },
          {
            label: '篮球',
            value: 'basketball'
          }
        ],
        label: 'label',
        value: 'value'
      }
    }
  ],
  rules: {
    name: [{ required: true, message: '名字必填' }]
  }
}
const schema = reactive(mergeSchema(userschema))

const handleChange = data => {
  form.formData = data
}

</script>

<template>
  <div class="form-render">
    <FormRender :schema="schema" :form-data="form.formData" @on-change="handleChange" />
  </div>
</template>

<style scoped>
.form-render {
  width: 500px;
  border: 1px solid #ccc;
}
</style>
