import { ref as b, watch as g, resolveComponent as n, openBlock as l, createBlock as d, mergeProps as v, unref as t, withCtx as u, createElementBlock as h, Fragment as k, renderList as x, createTextVNode as V, toDisplayString as B } from "vue";
const j = {
  __name: "radio",
  props: {
    schema: Object,
    formData: Object
  },
  setup(c, { emit: s }) {
    const p = c, { schema: e, formData: m } = p, a = b(m[e.field]);
    return g(a, () => {
      s("onChange", { field: e.field, value: a.value });
    }), (C, r) => {
      const i = n("el-radio"), _ = n("el-radio-group");
      return l(), d(_, v({
        modelValue: a.value,
        "onUpdate:modelValue": r[0] || (r[0] = (o) => a.value = o)
      }, t(e).props), {
        default: u(() => [
          (l(!0), h(k, null, x(t(e).data.list, (o, f) => (l(), d(i, {
            key: f,
            label: o[t(e).data.label]
          }, {
            default: u(() => [
              V(B(o[t(e).data.label]), 1)
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
