<template>
  <div class="vue-form-render">
    <el-form
      ref="formInstance"
      :model="formModal"
      :schema="schema"
      :label-width="schema.labelWidth"
      :rules="schema.rules"
      :label-position="schema.labelPosition"
      :hide-required-asterisk="schema.hideRequiredAsterisk"
      :require-asterisk-position="schema.requireAsteriskPosition"
      :show-message="schema.showMessage"
      :scroll-to-error="schema.scrollToError"
    >
      <el-row>
        <el-col :span="span(schema.column)" v-for="(item, index) in schema.fields" :key="index">
          <form-item :schema="item" :form-data="formModal" @on-change="handleChange"></form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup>
import { nextTick, reactive, ref, watch } from 'vue'
import * as Utils from './utils'
import FormItem from './formItem.vue'

const props = defineProps({
  schema: Object,
  modal: Object,
  onChange: Function
})

const schema = props.schema
const formModal = reactive(Utils.mergeSchema({ ...props.modal }))
const change = props.onChange
const span = column => {
  return column ? 24 / column : 24
}

const handleChange = async ({ field, value }) => {
  formModal[field] = value
  change({ field, value })
}

const formInstance = ref(null)
const validate = async callback => {
  if (!formInstance) return
  await formInstance.value.validate((isValid, errorField) => {
    callback(isValid, errorField)
  })
}

const resetFields = () => {
  if (!formInstance) return
  formInstance.resetFields()
}

const clearValidate = () => {
  if (!formInstance) return
  formInstance.clearValidate()
}

defineExpose({
  validate,
  resetFields,
  clearValidate
})
</script>

<style>
.vue-form-render {
  width: 100%;
}
</style>
