<template>
  <div class="form-render-input">
    <el-input v-model="name" type="text" v-bind="schema.props||{}"></el-input>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  schema: Object,
  formData: Object
})

const emit = defineEmits()

const schema = props.schema
const formData = props.formData
const value = ref(formData[schema.field])
watch(value, () => {
  emit('on-change', { field: schema.field, value: formData[schema.field] })
})
</script>


<style scoped>
.form-render-input {
  width: 100%;
}
</style>
