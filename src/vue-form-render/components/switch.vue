<template>
  <el-switch v-model="value" v-bind="schema.props"></el-switch>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  schema: Object,
  formData: Object
})
const emit = defineEmits()

const { schema, formData } = props
const value = ref(formData[schema.field])
watch(value, () => {
  emit('on-change', { field: schema.field, value: value.value })
})
</script>
