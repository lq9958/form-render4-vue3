<template>
  <el-checkbox-group v-model="value" v-bind="schema.prop||{}">
    <el-checkbox
      v-for="(item, index) in schema.data.list"
      :key="index"
      :label="item[schema.data.label]"
    >{{ item[schema.data.label] }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    schema: Object,
    formData: Object
  },
  setup(props, { emit }) {
    const { schema } = props
    const value = ref(schema.value)
    watch(value, () => {
      emit('on-change', { field: schema.field, value: value.value })
    })
    return {
      schema,
      value
    }
  }
})
</script>
