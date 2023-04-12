import { defineAsyncComponent as E, resolveComponent as p, openBlock as c, createBlock as b, unref as o, withCtx as m, Suspense as O, createVNode as d, reactive as w, watch as x, ref as M, createElementBlock as y, Fragment as j, renderList as F } from "vue";
const P = {
  select: "simple-select",
  radio: "radio",
  checkbox: "checkbox",
  input: "simple-input",
  number: "number-input",
  rate: "rate",
  slider: "slider",
  color: "color-picker",
  switch: "switch"
}, B = {
  fields: [],
  rules: [],
  labelWidth: "auto",
  labelPosition: "right",
  hideRequiredAsterisk: !1,
  requireAsteriskPosition: "left",
  showMessage: !0,
  disabled: !1
}, I = {
  value: "",
  props: {
    labelWidth: "auto"
  }
};
function C(t) {
  return t = Object.assign({}, B, t), t.fields.length && (t.fields = t.fields.map((s) => Object.assign({}, I, s))), t;
}
const V = (t, s) => {
  const n = t[s];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((e, l) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(l.bind(null, new Error("Unknown variable dynamic import: " + s)));
  });
}, D = {
  __name: "formItem",
  props: {
    schema: Object,
    formData: Object
  },
  setup(t, { emit: s }) {
    const n = t, { schema: e, formData: l } = n, f = (u) => {
      s("on-change", u);
    }, h = E(
      () => V(/* @__PURE__ */ Object.assign({ "./components/checkbox.vue": () => import("./checkbox-0b459b12.js"), "./components/color-picker.vue": () => import("./color-picker-93ad99cb.js"), "./components/number-input.vue": () => import("./number-input-5b482ec0.js"), "./components/radio.vue": () => import("./radio-cb973c5b.js"), "./components/rate.vue": () => import("./rate-00477d90.js"), "./components/simple-input.vue": () => import("./simple-input-7c359982.js"), "./components/simple-select.vue": () => import("./simple-select-f7b20bc9.js"), "./components/slider.vue": () => import("./slider-c58d7592.js"), "./components/switch.vue": () => import("./switch-d1d66783.js") }), `./components/${P[e.type]}.vue`)
    );
    return (u, i) => {
      const g = p("el-form-item");
      return c(), b(g, {
        label: o(e).title,
        prop: o(e).field,
        "label-width": o(e).labelWidth
      }, {
        default: m(() => [
          (c(), b(O, null, {
            default: m(() => [
              d(o(h), {
                schema: o(e),
                "form-data": o(l),
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
const R = { class: "vue-form-render" }, v = {
  __name: "form-render4-vue3",
  props: {
    schema: Object,
    modal: Object,
    onChange: Function
  },
  setup(t, { expose: s }) {
    const n = t;
    let e = w(C({ ...n.schema }));
    x(
      () => n.schema,
      (r) => {
        e = C({ ...r });
      }
    );
    const l = w(n.modal), f = n.onChange, h = (r) => r ? 24 / r : 24, u = async ({ field: r, value: a }) => {
      l[r] = a, f({ field: r, value: a });
    }, i = M(null);
    return s({
      validate: async (r) => {
        i && await i.value.validate((a, _) => {
          r(a, _);
        });
      },
      resetFields: () => {
        i && i.resetFields();
      },
      clearValidate: () => {
        i && i.clearValidate();
      }
      // forceUpdate
    }), (r, a) => {
      const _ = p("el-col"), q = p("el-row"), A = p("el-form");
      return c(), y("div", R, [
        d(A, {
          ref_key: "formInstance",
          ref: i,
          model: l,
          schema: o(e),
          "label-width": o(e).labelWidth,
          rules: o(e).rules,
          "label-position": o(e).labelPosition,
          "hide-required-asterisk": o(e).hideRequiredAsterisk,
          "require-asterisk-position": o(e).requireAsteriskPosition,
          "show-message": o(e).showMessage,
          "scroll-to-error": o(e).scrollToError
        }, {
          default: m(() => [
            d(q, null, {
              default: m(() => [
                (c(!0), y(j, null, F(n.schema.fields, (k) => (c(), b(_, {
                  span: h(n.schema.column),
                  key: k.field
                }, {
                  default: m(() => [
                    d(D, {
                      schema: k,
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
v.install = function(t) {
  t.component("form-render4-vue3", v);
};
v.version = "v0.0.3";
export {
  v as default
};
