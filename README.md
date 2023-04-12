# Form-Render4-Vue3

> form-render4-vue3 is a form generation component based on vue3+element-plus. The component includes commonly used form components and is designed based on x-render. Its purpose is to solve the problem of repetitive code writing in form development during daily project development, and to improve development efficiency. Currently, the project is still adding more features.

English | [中文](./README.zh-CN.md)

[Playground](https://lq9958.github.io/)
## How To Use

### install

```
npm install form-render4-vue3 --save
```



```javascript
// main.js
import { createApp } from 'vue'
import FormRender4Vue3 from 'form-render4-vue3'
import App from './App.vue'

const app = createApp(App)
app.use(FormRender4Vue3)
app.mount('#app')


```


```vue
<template>
	<!-- Your component -->
	<div>
		<form-render4-vue3 :schema="schema" :modal="formData" :on-change="handleFormDataChange"/>        
    </div>
</template>

<script setup>
import { reactive } from 'vue'

 const formData = reactive({})
 const schema = reactive({
  fields: [{
      type: 'input',
      title: '姓名',
      field: 'name',
      value: '',
      props: {
        placeholder: '输入姓名'
      }
    },
    {
      type: 'input',
      title: '年龄',
      field: 'age',
      value: '',
      props: {
        type: 'number',
        placeholder: '输入年龄'
      }
    },
    {
      type: 'number',
      title: '工作时长(年)',
      field: 'experience',
      value: '',
      props: {
        step: 0.5
      },
    },
    {
      type: 'select',
      title: '现居地',
      field: 'address',
      value: '',
      props: {
        placeholder: '选择现居地'
      },
      data: {
        list: [{
            label: '北京',
            value: 'beijing'
          },
          {
            label: '上海',
            value: 'shanghai'
          }, {
            label: '深圳',
            value: 'shenzhen'
          }, {
            label: '成都',
            value: 'chengdu'
          }
        ],
        label: 'label',
        value: 'value'
      }
    },
    {
      type: 'radio',
      title: '性别',
      field: 'gender',
      value: '',
      data: {
        list: [{
            label: '男',
            value: 'man'
          },
          {
            label: '女',
            value: 'woman'
          }, {
            label: '男女',
            value: 'woman&man'
          }
        ],
        label: 'label',
        value: 'value'
      }
    },
    {
      type: 'checkbox',
      title: '爱好',
      field: 'likes',
      value: '',
      data: {
        list: [{
            label: '唱',
            value: 'song'
          },
          {
            label: '跳',
            value: 'dance'
          }, {
            label: 'rap',
            value: 'rap'
          }, {
            label: '篮球',
            value: 'basketball'
          }
        ],
        label: 'label',
        value: 'value'
      }
    }, {
      type: 'slider',
      title: '身高',
      field: 'height',
      value: '',
      props: {
        min: 100,
        max: 200
      }
    },
    {
      type: 'switch',
      title: '信息公开',
      field: 'public',
      value: ''
    }
  ],
  labelWidth: 'auto',
  labelPosition: 'right',
  hideRequiredAsterisk: false,
  requireAsteriskPosition: 'left',
  showMessage: true
})
   
 const handleFormDataChange = ({ field,value }) => {
     formData[field] = value
 }
 
</script>


```

## Schema field description

| Field Name              | Type   | Description                                                  | Required |
| ----------------------- | ------ | ------------------------------------------------------------ | -------- |
| fields                  | Array  | you form item                                                | Yes      |
| rules                   | Object | reference https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| labelWidth              | -      | reference https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| labelPosition           | -      | reference https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| hideRequiredAsterisk    | -      | reference https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| requireAsteriskPosition | -      | reference https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| showMessage             | -      | reference https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |

### fields description

| Field Name | Type   | Description                                                  | Required |
| ---------- | ------ | ------------------------------------------------------------ | -------- |
| type       | String | form item component type                                     | Yes      |
| title      | String | form data title                                              | Yes      |
| field      | String | form data field                                              | Yes      |
| value      | any    | form data value                                              | No       |
| props      | Object | corresponding to element-plus compoinent props               | No       |
| data       | Object | if you use select or checkbox component , you must add this field | No       |

## Supported Components (field type)

| type       | element-plus component |
| ---------- | ---------------------- |
| input      | el-input               |
| number     | el-input-number        |
| checkbox   | el-checkbox            |
| radio      | el-radio               |
| switch     | el-switch              |
| slider     | el-slider              |
| color      | el-color-picker        |
| developing | ...                    |

