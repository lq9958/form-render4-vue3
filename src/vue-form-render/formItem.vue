<template>
  <el-form-item :label="schema.title" :prop="schema.field">
    <component
      :is="ElementTypeMapping[schema.type]"
      :schema="schema"
      :value="value"
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
  },
  setup(props, { emit }) {
    const schema = props.schema
    const value = ref(schema.value)
    const handleChange = (data) => {
      emit('onChange', data)
    }
    return {
      schema,
      ElementTypeMapping,
      value,
      handleChange,
    }
  },
})
</script>

<style></style>
