<template>
  <div class="form-render">
    <el-button type="primary" ref="button" @click="checkForm(formRender)">校验</el-button>
    <vue-form-render
      ref="formRender"
      :schema="schema"
      :modal="formData"
      :on-change="handleChildChange"
    />
  </div>
</template>

<script setup>
import { mergeSchema } from './package/vue-form-render/src/utils'
import { reactive, ref, watch } from 'vue'

let formData = reactive({
  name: 'jey',
  age: 20,
  color: '#ccc',
  select: '',
  slider: 88,
})

watch(formData, () => {
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
        max: 100,
        step: 2,
      },
      labelWidth: 0,
    },
    {
      type: 'input',
      title: 'name',
      field: 'name',
      value: '',
    },
    {
      type: 'color',
      title: 'color',
      field: 'color',
      value: '#ccc',
    },
    {
      type: 'slider',
      title: 'slider',
      field: 'slider',
      value: 1,
    },
    {
      type: 'select',
      title: 'select',
      field: 'select',
      value: '',
      props: {
        placeholder: '选择爱好',
        clearable: true
      },
      data: {
        list: [
          {
            label: '唱',
            value: 'song',
          },
          {
            label: '唱2',
            value: 'song2',
          },
          {
            label: '跳',
            value: 'dance',
          },
          {
            label: 'rap',
            value: 'rap',
          },
          {
            label: '篮球',
            value: 'basketball',
          },
        ],
        label: 'label',
        value: 'value',
      },
    },
  ],
  rules: {
    name: [
      { required: true, message: '名字必填' }
    ],
    select: [
      { required: true, message: '至少选一个爱好' }
    ],
  },
}
const schema = reactive(mergeSchema(userschema))

const formRender = ref()
const button = ref()

const checkForm =  () => {
  formRender.value.validate((isValid,errorField) => {
    console.log(isValid,errorField)
  })
}

const handleChildChange = ({ field, value }) => {
  formData[field] = value
}

const message = ref('')
</script>

<style scoped>
.form-render {
  width: 500px;
  border: 1px solid #ccc;
}
</style>
