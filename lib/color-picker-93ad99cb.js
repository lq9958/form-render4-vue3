import { ref as s, watch as m, resolveComponent as u, openBlock as f, createBlock as d, mergeProps as i, unref as _ } from "vue";
const h = {
  __name: "color-picker",
  props: {
    schema: Object,
    formData: Object
  },
  setup(r, { emit: a }) {
    const t = r, { schema: o, formData: c } = t, e = s(c[o.field]);
    return m(e, () => {
      a("onChange", { field: o.field, value: e.value });
    }), (v, l) => {
      const n = u("el-color-picker");
      return f(), d(n, i({
        modelValue: e.value,
        "onUpdate:modelValue": l[0] || (l[0] = (p) => e.value = p)
      }, _(o).props), null, 16, ["modelValue"]);
    };
  }
};
export {
  h as default
};
