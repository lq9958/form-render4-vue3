<template>
  <div class="simple-form">
    <div class="form-container">
      <!-- <vue-form-render :schema="schema" :form-data="fromData" :on-change="handleFormDataChange"></vue-form-render> -->
      1
    </div>
    <div class="editor-container">
    </div>
  </div>
</template>


<script setup>
import { reactive, ref, onMounted } from 'vue'

const code = ref(`{}`)


</script>

<style lang="scss">
.simple-form {
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  .form-container {
    flex: 1;
    height: 100%;
  }
  .editor-container {
    flex: 1;
  }
}
</style>
