<template>
  <el-select v-model="value" v-bind="schema.props||{}">
    <el-option
      v-for="(item, index) in schema.data.list"
      :key="index"
      :label="item[schema.data.label]"
      :value="item[schema.data.value]"
    ></el-option>
  </el-select>
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
