import { ref as m, watch as p, resolveComponent as u, openBlock as f, createBlock as d, mergeProps as _, unref as v } from "vue";
const V = {
  __name: "rate",
  props: {
    schema: Object,
    formData: Object
  },
  setup(t, { emit: l }) {
    const r = t, { schema: o, formData: n } = r, e = m(n[o.field]);
    return p(e, () => {
      l("onChange", { field: o.field, value: e.value });
    }), (i, a) => {
      const s = u("el-rate");
      return f(), d(s, _({
        modelValue: e.value,
        "onUpdate:modelValue": a[0] || (a[0] = (c) => e.value = c)
      }, v(o).props), null, 16, ["modelValue"]);
    };
  }
};
export {
  V as default
};
