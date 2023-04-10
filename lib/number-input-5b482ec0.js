import { ref as p, watch as s, resolveComponent as c, openBlock as f, createBlock as d, mergeProps as i, unref as _ } from "vue";
const h = {
  __name: "number-input",
  props: {
    schema: Object,
    formData: Object
  },
  setup(t, { emit: l }) {
    const a = t, { schema: o, formData: r } = a, e = p(r[o.field]);
    return s(e, () => {
      l("onChange", { field: o.field, value: e.value });
    }), (v, n) => {
      const u = c("el-input-number");
      return f(), d(u, i({
        modelValue: e.value,
        "onUpdate:modelValue": n[0] || (n[0] = (m) => e.value = m)
      }, _(o).props), null, 16, ["modelValue"]);
    };
  }
};
export {
  h as default
};
