<template>
  <div class="form-render-input">
    <el-input v-model="value" type="text" v-bind="schema.props"></el-input>
  </div>
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
  emit('on-change', { field: schema.field, value: value.value })
})
</script>

<style scoped>
.form-render-input {
  width: 100%;
}
</style>
