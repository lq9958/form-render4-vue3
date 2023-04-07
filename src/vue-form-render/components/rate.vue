<template>
  <el-rate v-model="value" v-bind="schema.props||{}"></el-rate>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  //   name: "rate",
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
