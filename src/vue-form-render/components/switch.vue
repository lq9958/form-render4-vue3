<template>
  <el-switch v-model="value" v-bind="schema.props||{}"></el-switch>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  schema: Object
})

const emit = defineEmits()

const { schema } = props
const value = ref(schema.value)
watch(value, () => {
  emit('on-change', { field: schema.field, value: value.value })
})
</script>
