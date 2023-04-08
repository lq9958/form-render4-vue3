<template>
  <el-input-number v-model="value" v-bind="schema.props"></el-input-number>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  schema: Object,
  formData: Object,
})
const emit = defineEmits()

const { schema, formData } = props
const value = ref(formData[schema.field])
watch(value, () => {
  emit('onChange', { field: schema.field, value: value.value })
})
</script>
