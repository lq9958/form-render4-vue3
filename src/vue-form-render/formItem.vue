<template>
  <el-form-item :label="schema.title" :prop="schema.field" :label-width="schema.labelWidth">
    <Suspense>
      <template #default>
        <AsyncField :schema="schema" :formData="formData" @on-change="handleChange" />
      </template>
    </Suspense>
  </el-form-item>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { ElementTypeMapping } from './utils/index'

const props = defineProps({
  schema: Object,
  formData: Object
})

const emit = defineEmits()
const schema = props.schema
const formData = props.schema 
const value = ref(schema.value)
const handleChange = data => {
  emit('on-change', data)
}
const AsyncField = defineAsyncComponent(() =>
  import(`./components/${ElementTypeMapping[schema.type]}.vue`)
)
</script>

<style></style>
