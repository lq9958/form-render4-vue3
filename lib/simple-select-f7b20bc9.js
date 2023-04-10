import { ref as _, watch as v, resolveComponent as r, openBlock as o, createBlock as c, mergeProps as i, unref as a, withCtx as b, createElementBlock as h, Fragment as k, renderList as g } from "vue";
const V = {
  __name: "simple-select",
  props: {
    schema: Object,
    formData: Object
  },
  setup(s, { emit: u }) {
    const p = s, { schema: l, formData: d } = p, t = _(d[l.field]);
    return v(t, () => {
      u("on-change", { field: l.field, value: t.value });
    }), (x, n) => {
      const m = r("el-option"), f = r("el-select");
      return o(), c(f, i({
        modelValue: t.value,
        "onUpdate:modelValue": n[0] || (n[0] = (e) => t.value = e)
      }, a(l).props), {
        default: b(() => [
          (o(!0), h(k, null, g(a(l).data.list, (e) => (o(), c(m, {
            key: e[a(l).data.value] || e,
            label: e[a(l).data.label] || e,
            value: e[a(l).data.value] || e
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
};
export {
  V as default
};
