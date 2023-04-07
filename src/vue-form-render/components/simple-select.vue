<template>
  <el-select v-model="value" v-bind="schema.props||{}">
    <el-option
      v-for="(item, index) in schema.data.list"
      :key="index"
      :label="item[schema.data.label]"
      :value="item[schema.data.value]"
    ></el-option>
  </el-select>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  // name: "simple-select",
  props: {
    schema: Object,
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
