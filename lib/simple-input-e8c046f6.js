import { ref as r, watch as _, resolveComponent as u, openBlock as m, createElementBlock as d, createVNode as i, mergeProps as f, unref as v } from "vue";
const b = (t, s) => {
  const o = t.__vccOpts || t;
  for (const [e, l] of s)
    o[e] = l;
  return o;
}, x = { class: "form-render-input" }, g = {
  __name: "simple-input",
  props: {
    schema: Object,
    formData: Object
  },
  setup(t, { emit: s }) {
    const o = t, { schema: e, formData: l } = o, n = r(l[e.field]);
    return _(n, () => {
      s("on-change", { field: e.field, value: n.value });
    }), (h, p) => {
      const a = u("el-input");
      return m(), d("div", x, [
        i(a, f({
          modelValue: n.value,
          "onUpdate:modelValue": p[0] || (p[0] = (c) => n.value = c),
          type: "text"
        }, v(e).props), null, 16, ["modelValue"])
      ]);
    };
  }
}, V = /* @__PURE__ */ b(g, [["__scopeId", "data-v-b5e9e1b9"]]);
export {
  V as default
};
