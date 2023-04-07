<template>
  <el-rate v-model="value" v-bind="schema.props"></el-rate>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

//   name: "rate",
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
