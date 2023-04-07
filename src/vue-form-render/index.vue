<template>
  <div class="vue-form-render">
    <el-form :model="formData" :schema="schema">
      <el-row>
        <el-col
          :span="span(schema.column)"
          v-for="(item, index) in schema.fields"
          :key="index"
        >
          <form-item
            :schema="item"
            :form-data="formData"
            @on-change="handleChange"
          ></form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import FormItem from './formItem.vue'

export default defineComponent({
  name: 'VueFormRender',
  components: {
    FormItem,
  },
  props: {
    formData: Object,
    schema: Object,
    onChange: Function,
  },
  emits: ['onChange'],
  setup(props, { emit }) {
    const {schema,formData} = props
    const span = (column) => {
      return column ? 24 / column : 24
    }

    const handleChange = (data) => {
      console.log(data)
      formData[data['field']] = data['value']
      emit('onChange', formData)
    }

    return {
      schema,
      formData,
      span,
      handleChange,
    }
  },
})
</script>

<style>
.vue-form-render {
  width: 500px;
}
</style>
