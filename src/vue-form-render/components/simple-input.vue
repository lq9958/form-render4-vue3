<template>
  <div class="form-render-input">
    <el-input v-model="value"  v-bind="schema.props||{}"></el-input>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    schema: Object,
    formData: Object
  },
  setup(props, { emit }) {
    const schema = props.schema
    const formData = props.formData
    const value = ref(formData[schema.field])
    watch(value, () => {
      emit('on-change', { field: schema.field, value: value.value })
    })

    return {
      schema,
      formData,
      value
    }
  }
})
</script>


<style scoped>
.form-render-input {
  width: 100%;
}
</style>
