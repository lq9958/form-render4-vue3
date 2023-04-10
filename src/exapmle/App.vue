<template>
  <div id="app">
    <div class="app-title">Vue3-Form-Render</div>
    <el-tabs v-model="activeName" class="app-tabs" >
      <el-tab-pane label="普通表单" name="simple">
        <simple-form></simple-form>
      </el-tab-pane>
      <el-tab-pane label="带检验规则的表单" name="validate">
        <validate-form></validate-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SimpleForm from './views/simple.vue'
import ValidateForm from './views/validate.vue'

const activeName = ref('simple')
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100vh;
  .app-title {
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: 700;
  }
  .el-tabs >.el-tab-pane{
    width: 100%;
    height: calc(100vh - 100px);
  }
}
</style>
