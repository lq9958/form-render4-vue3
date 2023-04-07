import {
  defineAsyncComponent
} from 'vue'

export const ElementTypeMapping = {
  select: defineAsyncComponent(() => import('../components/simple-select.vue')),
  radio: defineAsyncComponent(() => import('../components/rate.vue')),
  checkbox: defineAsyncComponent(() => import('../components/checkbox.vue')),
  input: defineAsyncComponent(() => import('../components/simple-input.vue')),
  number: defineAsyncComponent(() => import('../components/number-input.vue')),
  rate: defineAsyncComponent(() => import('../components/rate.vue')),
  slider: defineAsyncComponent(() => import('../components/slider.vue')),
  color: defineAsyncComponent(() => import('../components/color-picker.vue')),
  switch: defineAsyncComponent(() => import('../components/switch.vue')),
}
