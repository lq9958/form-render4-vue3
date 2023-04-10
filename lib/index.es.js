import { defineAsyncComponent as A, resolveComponent as p, openBlock as c, createBlock as b, unref as t, withCtx as m, Suspense as E, createVNode as d, reactive as O, ref as x, createElementBlock as g, Fragment as F, renderList as M } from "vue";
const j = {
  select: "simple-select",
  radio: "radio",
  checkbox: "checkbox",
  input: "simple-input",
  number: "number-input",
  rate: "rate",
  slider: "slider",
  color: "color-picker",
  switch: "switch"
}, P = {
  fields: [],
  rules: [],
  labelWidth: "auto",
  labelPosition: "right",
  hideRequiredAsterisk: !1,
  requireAsteriskPosition: "left",
  showMessage: !0,
  disabled: !1
}, B = {
  props: {
    labelWidth: "auto"
  }
};
function I(o) {
  return o = Object.assign({}, P, o), o.fields.length && (o.fields = o.fields.map((r) => Object.assign({}, B, r))), o;
}
const D = (o, r) => {
  const n = o[r];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((e, l) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(l.bind(null, new Error("Unknown variable dynamic import: " + r)));
  });
}, R = {
  __name: "formItem",
  props: {
    schema: Object,
    formData: Object
  },
  setup(o, { emit: r }) {
    const n = o, { schema: e, formData: l } = n, f = (u) => {
      r("on-change", u);
    }, _ = A(
      () => D(/* @__PURE__ */ Object.assign({ "./components/checkbox.vue": () => import("./checkbox-0b459b12.js"), "./components/color-picker.vue": () => import("./color-picker-93ad99cb.js"), "./components/number-input.vue": () => import("./number-input-5b482ec0.js"), "./components/radio.vue": () => import("./radio-cb973c5b.js"), "./components/rate.vue": () => import("./rate-00477d90.js"), "./components/simple-input.vue": () => import("./simple-input-e8c046f6.js"), "./components/simple-select.vue": () => import("./simple-select-f7b20bc9.js"), "./components/slider.vue": () => import("./slider-c58d7592.js"), "./components/switch.vue": () => import("./switch-d1d66783.js") }), `./components/${j[e.type]}.vue`)
    );
    return (u, s) => {
      const v = p("el-form-item");
      return c(), b(v, {
        label: t(e).title,
        prop: t(e).field,
        "label-width": t(e).labelWidth
      }, {
        default: m(() => [
          (c(), b(E, null, {
            default: m(() => [
              d(t(_), {
                schema: t(e),
                "form-data": t(l),
                onOnChange: f
              }, null, 8, ["schema", "form-data"])
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["label", "prop", "label-width"]);
    };
  }
};
const V = { class: "vue-form-render" }, k = {
  __name: "vue-form-render",
  props: {
    schema: Object,
    modal: Object,
    onChange: Function
  },
  setup(o, { expose: r }) {
    const n = o, e = n.schema, l = O(I({ ...n.modal })), f = n.onChange, _ = (i) => i ? 24 / i : 24, u = async ({ field: i, value: a }) => {
      l[i] = a, f({ field: i, value: a });
    }, s = x(null);
    return r({
      validate: async (i) => {
        s && await s.value.validate((a, h) => {
          i(a, h);
        });
      },
      resetFields: () => {
        s && s.resetFields();
      },
      clearValidate: () => {
        s && s.clearValidate();
      }
    }), (i, a) => {
      const h = p("el-col"), w = p("el-row"), y = p("el-form");
      return c(), g("div", V, [
        d(y, {
          ref_key: "formInstance",
          ref: s,
          model: l,
          schema: t(e),
          "label-width": t(e).labelWidth,
          rules: t(e).rules,
          "label-position": t(e).labelPosition,
          "hide-required-asterisk": t(e).hideRequiredAsterisk,
          "require-asterisk-position": t(e).requireAsteriskPosition,
          "show-message": t(e).showMessage,
          "scroll-to-error": t(e).scrollToError
        }, {
          default: m(() => [
            d(w, null, {
              default: m(() => [
                (c(!0), g(F, null, M(t(e).fields, (C, q) => (c(), b(h, {
                  span: _(t(e).column),
                  key: q
                }, {
                  default: m(() => [
                    d(R, {
                      schema: C,
                      "form-data": l,
                      onOnChange: u
                    }, null, 8, ["schema", "form-data"])
                  ]),
                  _: 2
                }, 1032, ["span"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "schema", "label-width", "rules", "label-position", "hide-required-asterisk", "require-asterisk-position", "show-message", "scroll-to-error"])
      ]);
    };
  }
};
k.install = function(o) {
  o.component("vue-form-render", k);
};
export {
  k as default
};
