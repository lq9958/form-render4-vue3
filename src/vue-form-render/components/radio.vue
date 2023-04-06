<template>
  <el-radio-group v-model="value" v-bind="schema.props">
    <el-radio
      v-for="(item, index) in schema.data.list"
      :key="index"
      :label="item[schema.data.label]"
      >{{ item[schema.data.label] }}</el-radio
    >
  </el-radio-group>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    schema: Object,
    formData: Object,
  },
  setup(props) {
    const { schema } = props
    const value = ref(schema.value)
    watch(value, () => {
      emit('onChange', { field: schema.field, value: value.value })
    })
    return {
      schema,
      value,
    }
  },
})
</script>
