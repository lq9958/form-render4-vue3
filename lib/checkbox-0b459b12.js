import { ref as h, watch as i, resolveComponent as r, openBlock as a, createBlock as n, mergeProps as k, unref as l, withCtx as u, createElementBlock as x, Fragment as g, renderList as v, createTextVNode as V, toDisplayString as B } from "vue";
const j = {
  __name: "checkbox",
  props: {
    schema: Object,
    formData: Object
  },
  setup(s, { emit: p }) {
    const m = s, { schema: e, formData: d } = m, o = h(d[e.field]);
    return i(o, () => {
      p("onChange", { field: e.field, value: o.value });
    }), (C, c) => {
      const _ = r("el-checkbox"), f = r("el-checkbox-group");
      return a(), n(f, k({
        modelValue: o.value,
        "onUpdate:modelValue": c[0] || (c[0] = (t) => o.value = t)
      }, l(e).props), {
        default: u(() => [
          (a(!0), x(g, null, v(l(e).data.list, (t, b) => (a(), n(_, {
            key: b,
            label: t[l(e).data.label]
          }, {
            default: u(() => [
              V(B(t[l(e).data.label]), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
};
export {
  j as default
};
