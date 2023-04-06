<template>
  <el-slider v-model="value" v-bind="schema.props"></el-slider>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  //   name: "slider",
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
