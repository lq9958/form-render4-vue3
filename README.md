# Form-Render4-Vue3

> form-render4-vue3 是基于 vue3 + element-plus的表单生成组件，组件包含了日常使用的表单组件，设计源于x-render，意在解决项目日常开发中表单代码的重复书写，提高开发效率。目前该项目还在增加更多的特性。


[Playground](https://lq9958.github.io/)

## 拟新增特性
- ✅ 支持渲染自定义组件
- ✅ 支持form-item中的嵌套
- ✅ 支持表单内的数据联动

## 如何使用

### 安装

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
	<!-- 你的自定义组件 -->
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

## Schema 字段描述

| 字段名称              | 类型   | Description                                                  | 是否必须 |
| ----------------------- | ------ | ------------------------------------------------------------ | -------- |
| fields                  | Array  | 生成表单项的数组                                                | Yes      |
| rules                   | Object | 参考 https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| labelWidth              | -      | 参考 https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| labelPosition           | -      | 参考 https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| hideRequiredAsterisk    | -      | 参考 https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| requireAsteriskPosition | -      | 参考 https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |
| showMessage             | -      | 参考 https://element-plus.org/zh-CN/component/form.html#form-attributes | No       |

### fields 字段描述

| 字段名称 | 类型   | Description                                                  | 是否必须 |
| ---------- | ------ | ------------------------------------------------------------ | -------- |
| type       | String | 指定生成对应element-plus的组件，对应关系见下表 type                                     | Yes      |
| title      | String | 表单项的名称                                              | Yes      |
| field      | String | 表单项字段                                              | Yes      |
| value      | any    | 该表表单项的值                                              | No       |
| props      | Object | 生成最终组件的props项，对应element-plus组件的props              | No       |
| data       | Object | 如果是生成下拉组件、多选框、单选时，该字段是必须指定的，用于生成选项数据 | No       |

## 当前支持的组件

| type       | 对应的element-plus组件名 |
| ---------- | ---------------------- |
| input      | el-input               |
| number     | el-input-number        |
| checkbox   | el-checkbox            |
| radio      | el-radio               |
| switch     | el-switch              |
| slider     | el-slider              |
| color      | el-color-picker        |
| 拼命开发中  | ...                    |

