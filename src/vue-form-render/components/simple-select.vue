<template>
  <el-select v-model="value" v-bind="schema.props">
    <el-option
      v-for="item in schema.data.list"
      :key="item[schema.data.value] || item"
      :label="item[schema.data.label] || item"
      :value="item[schema.data.value] || item"
    ></el-option>
  </el-select>
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
