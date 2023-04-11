import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/example')
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, './package/form-render4-vue3/index.js'),
      name: 'form-render4-vue3',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [vue()],
})
