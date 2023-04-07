<template>
  <div class="vue-form-render">
    <el-form
      :model="formModal"
      :schema="schema"
      :label-width="schema.labelWidth"
      :rules="schema.rules"
      :label-position="schema.labelPosition"
      :hide-required-asterisk="schema.hideRequiredAsterisk "
      :require-asterisk-position="schema.requireAsteriskPosition"
      :show-message="schema.showMessage"
      :scroll-to-error="schema.scrollToError"
    >
      <el-row>
        <el-col :span="span(schema.column)" v-for="(item, index) in schema.fields" :key="index">
          <form-item :schema="item" :form-data="formData" @on-change="handleChange"></form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import FormItem from './formItem.vue'

export default defineComponent({
  name: 'VueFormRender',
  components: {
    FormItem
  },
  props: {
    formData: Object,
    schema: Object
  },
  setup(props, { emit }) {
    const schema = props.schema
    const formModal = reactive(props.formData)

    const span = column => {
      return column ? 24 / column : 24
    }

    const handleChange = data => {
      formModal[`${data['field']}`] = data['value']
      emit('on-change', formModal)
    }

    return {
      schema,
      formModal,
      span,
      handleChange
    }
  }
})
</script>

<style>
.vue-form-render {
  width: 500px;
}
</style>
