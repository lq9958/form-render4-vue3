<template>
  <el-radio-group v-model="value" v-bind="schema.props">
    <el-radio
      v-for="(item, index) in schema.data.list"
      :key="index"
      :label="item[schema.data.label]"
      >{{ item[schema.data.label] }}</el-radio
    >
  </el-radio-group>
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
