<template>
  <el-input v-model="value" v-bind="schema.props"></el-input>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    schema: Object,
    formData: Object,
    onChange: Function,
  },
  setup(props, { emit }) {
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
