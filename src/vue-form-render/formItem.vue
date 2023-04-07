<template>
  <el-form-item
    :label="schema.title"
    :prop="schema.field"
    :label-width="schema.labelWidth || ''"
  >
    <component
      :is="ElementTypeMapping[schema.type]"
      :schema="schema"
      :formData="formData"
      @on-change="handleChange"
    ></component>
  </el-form-item>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElementTypeMapping } from './utils/index'

export default defineComponent({
  name: 'FormItem',
  props: {
    schema: Object,
    formData: Object
  },
  setup(props, { emit }) {
    const schema = props.schema
    const formData = props.schema
    const value = ref(schema.value)
    const handleChange = data => {
      emit('on-change', data)
    }
    return {
      schema,
      formData,
      ElementTypeMapping,
      value,
      handleChange
    }
  }
})
</script>

<style></style>
