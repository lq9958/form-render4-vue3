<template>
  <div class="simple-form">
    <div class="form-container">
      <form-render4-vue3
        v-if="showForm"
        :schema="schema"
        :modal="formData"
        :on-change="handleFormDataChange"
      ></form-render4-vue3>
      <el-text v-else class="mx-1" type="danger">JSON 格式有误</el-text>
      <div class="form-data">表单数据：{{ formData }}</div>
    </div>
    <div class="editor-container">
      <el-scrollbar>
        <codemirror
          ref="view"
          v-model="code"
          @update:modelValue="handleEditorChange"
          class="json-editor"
          :autofocus="true"
          :indent-with-tab="true"
          :tab-size="4"
          :extensions="extensions"
        />
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { json } from '@codemirror/lang-json'
import { oneDark } from '@codemirror/theme-one-dark'
import { SIMPLEFORM, SIMPLEFORMDATA } from '../data/form-schema'

const code = ref(JSON.stringify(SIMPLEFORM, null, 4))
const extensions = [json(), oneDark]

const showForm = ref(true)
let formData = reactive(SIMPLEFORMDATA)
let schema = reactive(SIMPLEFORM)

const handleEditorChange = (value) => {
  try {
    schema = JSON.parse(value)
    showForm.value = true
  } catch (e) {
    console.log(e)
    showForm.value = false
  }
}
const handleFormDataChange = ({ field, value }) => {
  formData[field] = value
}
</script>

<style lang="scss">
.simple-form {
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  .form-container {
    flex: 1;
    height: 100%;
    margin: 10px;
    padding: 5px;
    border: 1px solid #ccc;
  }
  .editor-container {
    flex: 1;
    height: 100%;
    background-color: #282c34;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 1rem;
    line-height: 1.5;
  }
}

.json-editor {
  height: 100%;
}
</style>
