<template>
  <el-input-number v-model="value" v-bind="schema.props"></el-input-number>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'

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
