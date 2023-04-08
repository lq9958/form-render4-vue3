<template>
  <el-slider v-model="value" v-bind="schema.props"></el-slider>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

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
