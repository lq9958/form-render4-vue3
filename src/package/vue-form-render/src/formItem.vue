<template>
  <el-form-item
    :label="schema.title"
    :prop="schema.field"
    :label-width="schema.labelWidth"
  >
    <Suspense>
      <template #default>
        <AsyncField :schema="schema" :form-data="formData" @on-change="handleChange" />
      </template>
    </Suspense>
    <!-- <component
      :is="AsyncField"
      :schema="schema"
      :form-data="formData"
      @on-change="handleChange"
    ></component> -->
  </el-form-item>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { ElementTypeMapping } from './utils'

const props = defineProps({
  schema: Object,
  formData: Object,
})

const emit = defineEmits()
const { schema, formData } = props
const handleChange = (data) => {
  emit('on-change', data)
}
const AsyncField = defineAsyncComponent(() =>
  import(`./components/${ElementTypeMapping[schema.type]}.vue`)
)
</script>

<style></style>
