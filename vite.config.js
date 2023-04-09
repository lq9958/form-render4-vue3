import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'vue3-form-render',
    lib: {
      entry: path.resolve(__dirname, './src/package/vue-form-render/index.js'),
      name: 'vue3-form-render',
      fileName: 'index.js'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        dir:'./vue3-form-render',
        globals: {
          vue: 'vue'
        }
      }
    }
  },
  plugins: [vue()],
})
