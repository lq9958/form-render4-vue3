import { ref as m, watch as p, resolveComponent as u, openBlock as f, createBlock as d, mergeProps as i, unref as _ } from "vue";
const w = {
  __name: "switch",
  props: {
    schema: Object,
    formData: Object
  },
  setup(l, { emit: a }) {
    const n = l, { schema: o, formData: c } = n, e = m(c[o.field]);
    return p(e, () => {
      a("on-change", { field: o.field, value: e.value });
    }), (h, t) => {
      const r = u("el-switch");
      return f(), d(r, i({
        modelValue: e.value,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => e.value = s)
      }, _(o).props), null, 16, ["modelValue"]);
    };
  }
};
export {
  w as default
};
