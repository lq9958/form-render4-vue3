<template>
  <el-color-picker v-model="value" v-bind="schema.props"></el-color-picker>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  schema: Object,
  formData: Object
})

const emit = defineEmits()
const { schema } = props
const value = ref(schema.value)
watch(value, () => {
  emit('onChange', { field: schema.field, value: value.value })
})
</script>
