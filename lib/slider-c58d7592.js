import { ref as m, watch as p, resolveComponent as u, openBlock as d, createBlock as f, mergeProps as i, unref as _ } from "vue";
const V = {
  __name: "slider",
  props: {
    schema: Object,
    formData: Object
  },
  setup(a, { emit: r }) {
    const t = a, { schema: o, formData: n } = t, e = m(n[o.field]);
    return p(e, () => {
      r("on-change", { field: o.field, value: e.value });
    }), (v, l) => {
      const s = u("el-slider");
      return d(), f(s, i({
        modelValue: e.value,
        "onUpdate:modelValue": l[0] || (l[0] = (c) => e.value = c)
      }, _(o).props), null, 16, ["modelValue"]);
    };
  }
};
export {
  V as default
};
