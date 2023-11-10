var bf = (e, t, n) => {
  if (!t.has(e)) throw TypeError("Cannot " + n);
};
var Pa = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
};
var Ra = (e, t, n) => (bf(e, t, "access private method"), n);
function ep(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ec = { exports: {} },
  yi = {},
  tc = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ll = Symbol.for("react.element"),
  tp = Symbol.for("react.portal"),
  np = Symbol.for("react.fragment"),
  rp = Symbol.for("react.strict_mode"),
  lp = Symbol.for("react.profiler"),
  ip = Symbol.for("react.provider"),
  op = Symbol.for("react.context"),
  up = Symbol.for("react.forward_ref"),
  ap = Symbol.for("react.suspense"),
  sp = Symbol.for("react.memo"),
  cp = Symbol.for("react.lazy"),
  _a = Symbol.iterator;
function dp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_a && e[_a]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var nc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rc = Object.assign,
  lc = {};
function tr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = lc),
    (this.updater = n || nc);
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ic() {}
ic.prototype = tr.prototype;
function mu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = lc),
    (this.updater = n || nc);
}
var vu = (mu.prototype = new ic());
vu.constructor = mu;
rc(vu, tr.prototype);
vu.isPureReactComponent = !0;
var Na = Array.isArray,
  oc = Object.prototype.hasOwnProperty,
  yu = { current: null },
  uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      oc.call(t, r) && !uc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ll,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: yu.current,
  };
}
function fp(e, t) {
  return {
    $$typeof: ll,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ll;
}
function pp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ta = /\/+/g;
function Vi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? pp("" + e.key)
    : t.toString(36);
}
function jl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ll:
          case tp:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Vi(o, 0) : r),
      Na(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ta, "$&/") + "/"),
          jl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (gu(l) &&
            (l = fp(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ta, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Na(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + Vi(i, u);
      o += jl(i, t, n, a, l);
    }
  else if (((a = dp(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Vi(i, u++)), (o += jl(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function hl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    jl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function hp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  Dl = { transition: null },
  mp = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: Dl,
    ReactCurrentOwner: yu,
  };
H.Children = {
  map: hl,
  forEach: function (e, t, n) {
    hl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      hl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = tr;
H.Fragment = np;
H.Profiler = lp;
H.PureComponent = mu;
H.StrictMode = rp;
H.Suspense = ap;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = rc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = yu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      oc.call(t, a) &&
        !uc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: ll, type: e.type, key: l, ref: i, props: r, _owner: o };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: op,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ip, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = ac;
H.createFactory = function (e) {
  var t = ac.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: up, render: e };
};
H.isValidElement = gu;
H.lazy = function (e) {
  return { $$typeof: cp, _payload: { _status: -1, _result: e }, _init: hp };
};
H.memo = function (e, t) {
  return { $$typeof: sp, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Dl.transition;
  Dl.transition = {};
  try {
    e();
  } finally {
    Dl.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
H.useContext = function (e) {
  return Me.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
H.useId = function () {
  return Me.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return Me.current.useRef(e);
};
H.useState = function (e) {
  return Me.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return Me.current.useTransition();
};
H.version = "18.2.0";
tc.exports = H;
var _ = tc.exports;
const sc = bs(_),
  vp = ep({ __proto__: null, default: sc }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yp = _,
  gp = Symbol.for("react.element"),
  wp = Symbol.for("react.fragment"),
  Sp = Object.prototype.hasOwnProperty,
  xp = yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Sp.call(t, r) && !Ep.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: gp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: xp.current,
  };
}
yi.Fragment = wp;
yi.jsx = cc;
yi.jsxs = cc;
ec.exports = yi;
var x = ec.exports,
  go = {},
  dc = { exports: {} },
  He = {},
  fc = { exports: {} },
  pc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, F) {
    var $ = j.length;
    j.push(F);
    e: for (; 0 < $; ) {
      var G = ($ - 1) >>> 1,
        Z = j[G];
      if (0 < l(Z, F)) (j[G] = F), (j[$] = Z), ($ = G);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var F = j[0],
      $ = j.pop();
    if ($ !== F) {
      j[0] = $;
      e: for (var G = 0, Z = j.length, Ke = Z >>> 1; G < Ke; ) {
        var Le = 2 * (G + 1) - 1,
          on = j[Le],
          gt = Le + 1,
          Rn = j[gt];
        if (0 > l(on, $))
          gt < Z && 0 > l(Rn, on)
            ? ((j[G] = Rn), (j[gt] = $), (G = gt))
            : ((j[G] = on), (j[Le] = $), (G = Le));
        else if (gt < Z && 0 > l(Rn, $)) (j[G] = Rn), (j[gt] = $), (G = gt);
        else break e;
      }
    }
    return F;
  }
  function l(j, F) {
    var $ = j.sortIndex - F.sortIndex;
    return $ !== 0 ? $ : j.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    s = [],
    f = 1,
    v = null,
    m = 3,
    E = !1,
    g = !1,
    S = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(j) {
    for (var F = n(s); F !== null; ) {
      if (F.callback === null) r(s);
      else if (F.startTime <= j)
        r(s), (F.sortIndex = F.expirationTime), t(a, F);
      else break;
      F = n(s);
    }
  }
  function c(j) {
    if (((S = !1), h(j), !g))
      if (n(a) !== null) (g = !0), Dt(C);
      else {
        var F = n(s);
        F !== null && yt(c, F.startTime - j);
      }
  }
  function C(j, F) {
    (g = !1), S && ((S = !1), p(L), (L = -1)), (E = !0);
    var $ = m;
    try {
      for (
        h(F), v = n(a);
        v !== null && (!(v.expirationTime > F) || (j && !re()));

      ) {
        var G = v.callback;
        if (typeof G == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var Z = G(v.expirationTime <= F);
          (F = e.unstable_now()),
            typeof Z == "function" ? (v.callback = Z) : v === n(a) && r(a),
            h(F);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var Ke = !0;
      else {
        var Le = n(s);
        Le !== null && yt(c, Le.startTime - F), (Ke = !1);
      }
      return Ke;
    } finally {
      (v = null), (m = $), (E = !1);
    }
  }
  var T = !1,
    P = null,
    L = -1,
    B = 5,
    O = -1;
  function re() {
    return !(e.unstable_now() - O < B);
  }
  function Te() {
    if (P !== null) {
      var j = e.unstable_now();
      O = j;
      var F = !0;
      try {
        F = P(!0, j);
      } finally {
        F ? ct() : ((T = !1), (P = null));
      }
    } else T = !1;
  }
  var ct;
  if (typeof d == "function")
    ct = function () {
      d(Te);
    };
  else if (typeof MessageChannel < "u") {
    var ln = new MessageChannel(),
      ae = ln.port2;
    (ln.port1.onmessage = Te),
      (ct = function () {
        ae.postMessage(null);
      });
  } else
    ct = function () {
      N(Te, 0);
    };
  function Dt(j) {
    (P = j), T || ((T = !0), ct());
  }
  function yt(j, F) {
    L = N(function () {
      j(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || E || ((g = !0), Dt(C));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = m;
      }
      var $ = m;
      m = F;
      try {
        return j();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, F) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var $ = m;
      m = j;
      try {
        return F();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (j, F, $) {
      var G = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? G + $ : G))
          : ($ = G),
        j)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = $ + Z),
        (j = {
          id: f++,
          callback: F,
          priorityLevel: j,
          startTime: $,
          expirationTime: Z,
          sortIndex: -1,
        }),
        $ > G
          ? ((j.sortIndex = $),
            t(s, j),
            n(a) === null &&
              j === n(s) &&
              (S ? (p(L), (L = -1)) : (S = !0), yt(c, $ - G)))
          : ((j.sortIndex = Z), t(a, j), g || E || ((g = !0), Dt(C))),
        j
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (j) {
      var F = m;
      return function () {
        var $ = m;
        m = F;
        try {
          return j.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(pc);
fc.exports = pc;
var kp = fc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hc = _,
  We = kp;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var mc = new Set(),
  Ar = {};
function Cn(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) mc.add(t[e]);
}
var Rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wo = Object.prototype.hasOwnProperty,
  Cp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  La = {},
  ja = {};
function Pp(e) {
  return wo.call(ja, e)
    ? !0
    : wo.call(La, e)
    ? !1
    : Cp.test(e)
    ? (ja[e] = !0)
    : ((La[e] = !0), !1);
}
function Rp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _p(e, t, n, r) {
  if (t === null || typeof t > "u" || Rp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wu = /[\-:]([a-z])/g;
function Su(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wu, Su);
    Ce[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wu, Su);
    Ce[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(wu, Su);
  Ce[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xu(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_p(t, n, l, r) && (n = null),
    r || l === null
      ? Pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ml = Symbol.for("react.element"),
  Nn = Symbol.for("react.portal"),
  Tn = Symbol.for("react.fragment"),
  Eu = Symbol.for("react.strict_mode"),
  So = Symbol.for("react.profiler"),
  vc = Symbol.for("react.provider"),
  yc = Symbol.for("react.context"),
  ku = Symbol.for("react.forward_ref"),
  xo = Symbol.for("react.suspense"),
  Eo = Symbol.for("react.suspense_list"),
  Cu = Symbol.for("react.memo"),
  Ut = Symbol.for("react.lazy"),
  gc = Symbol.for("react.offscreen"),
  Da = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Da && e[Da]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Wi;
function Cr(e) {
  if (Wi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wi = (t && t[1]) || "";
    }
  return (
    `
` +
    Wi +
    e
  );
}
var Hi = !1;
function Qi(e, t) {
  if (!e || Hi) return "";
  Hi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Hi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function Np(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qi(e.type, !1)), e;
    case 11:
      return (e = Qi(e.type.render, !1)), e;
    case 1:
      return (e = Qi(e.type, !0)), e;
    default:
      return "";
  }
}
function ko(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Nn:
      return "Portal";
    case So:
      return "Profiler";
    case Eu:
      return "StrictMode";
    case xo:
      return "Suspense";
    case Eo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case yc:
        return (e.displayName || "Context") + ".Consumer";
      case vc:
        return (e._context.displayName || "Context") + ".Provider";
      case ku:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Cu:
        return (
          (t = e.displayName || null), t !== null ? t : ko(e.type) || "Memo"
        );
      case Ut:
        (t = e._payload), (e = e._init);
        try {
          return ko(e(t));
        } catch {}
    }
  return null;
}
function Tp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ko(t);
    case 8:
      return t === Eu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function wc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Lp(e) {
  var t = wc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vl(e) {
  e._valueTracker || (e._valueTracker = Lp(e));
}
function Sc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = wc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Co(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xc(e, t) {
  (t = t.checked), t != null && xu(e, "checked", t, !1);
}
function Po(e, t) {
  xc(e, t);
  var n = Zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ro(e, t.type, Zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function za(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ro(e, t, n) {
  (t !== "number" || Wl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ia(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Pr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function Ec(e, t) {
  var n = Zt(t.value),
    r = Zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Oa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function No(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? kc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var yl,
  Cc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        yl = yl || document.createElement("div"),
          yl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nr).forEach(function (e) {
  jp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nr[t] = Nr[e]);
  });
});
function Pc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Nr.hasOwnProperty(e) && Nr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Rc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Pc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Dp = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function To(e, t) {
  if (t) {
    if (Dp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Lo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var jo = null;
function Pu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Do = null,
  Vn = null,
  Wn = null;
function Fa(e) {
  if ((e = ul(e))) {
    if (typeof Do != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Ei(t)), Do(e.stateNode, e.type, t));
  }
}
function _c(e) {
  Vn ? (Wn ? Wn.push(e) : (Wn = [e])) : (Vn = e);
}
function Nc() {
  if (Vn) {
    var e = Vn,
      t = Wn;
    if (((Wn = Vn = null), Fa(e), t)) for (e = 0; e < t.length; e++) Fa(t[e]);
  }
}
function Tc(e, t) {
  return e(t);
}
function Lc() {}
var Ki = !1;
function jc(e, t, n) {
  if (Ki) return e(t, n);
  Ki = !0;
  try {
    return Tc(e, t, n);
  } finally {
    (Ki = !1), (Vn !== null || Wn !== null) && (Lc(), Nc());
  }
}
function Br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ei(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Mo = !1;
if (Rt)
  try {
    var pr = {};
    Object.defineProperty(pr, "passive", {
      get: function () {
        Mo = !0;
      },
    }),
      window.addEventListener("test", pr, pr),
      window.removeEventListener("test", pr, pr);
  } catch {
    Mo = !1;
  }
function Mp(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Tr = !1,
  Hl = null,
  Ql = !1,
  zo = null,
  zp = {
    onError: function (e) {
      (Tr = !0), (Hl = e);
    },
  };
function Ip(e, t, n, r, l, i, o, u, a) {
  (Tr = !1), (Hl = null), Mp.apply(zp, arguments);
}
function Op(e, t, n, r, l, i, o, u, a) {
  if ((Ip.apply(this, arguments), Tr)) {
    if (Tr) {
      var s = Hl;
      (Tr = !1), (Hl = null);
    } else throw Error(R(198));
    Ql || ((Ql = !0), (zo = s));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Dc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ua(e) {
  if (Pn(e) !== e) throw Error(R(188));
}
function Fp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ua(l), e;
        if (i === r) return Ua(l), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Mc(e) {
  return (e = Fp(e)), e !== null ? zc(e) : null;
}
function zc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ic = We.unstable_scheduleCallback,
  Aa = We.unstable_cancelCallback,
  Up = We.unstable_shouldYield,
  Ap = We.unstable_requestPaint,
  he = We.unstable_now,
  $p = We.unstable_getCurrentPriorityLevel,
  Ru = We.unstable_ImmediatePriority,
  Oc = We.unstable_UserBlockingPriority,
  Kl = We.unstable_NormalPriority,
  Bp = We.unstable_LowPriority,
  Fc = We.unstable_IdlePriority,
  gi = null,
  ht = null;
function Vp(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(gi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : Qp,
  Wp = Math.log,
  Hp = Math.LN2;
function Qp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wp(e) / Hp) | 0)) | 0;
}
var gl = 64,
  wl = 4194304;
function Rr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Rr(u)) : ((i &= o), i !== 0 && (r = Rr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Rr(o)) : i !== 0 && (r = Rr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ut(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Kp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Yp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - ut(i),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = Kp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Io(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Uc() {
  var e = gl;
  return (gl <<= 1), !(gl & 4194240) && (gl = 64), e;
}
function Yi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function il(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function Xp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ut(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function _u(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Y = 0;
function Ac(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var $c,
  Nu,
  Bc,
  Vc,
  Wc,
  Oo = !1,
  Sl = [],
  Ht = null,
  Qt = null,
  Kt = null,
  Vr = new Map(),
  Wr = new Map(),
  $t = [],
  Gp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $a(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      Vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wr.delete(t.pointerId);
  }
}
function hr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ul(t)), t !== null && Nu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Jp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Ht = hr(Ht, e, t, n, r, l)), !0;
    case "dragenter":
      return (Qt = hr(Qt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Kt = hr(Kt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Vr.set(i, hr(Vr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Wr.set(i, hr(Wr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Hc(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Dc(n)), t !== null)) {
          (e.blockedOn = t),
            Wc(e.priority, function () {
              Bc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (jo = r), n.target.dispatchEvent(r), (jo = null);
    } else return (t = ul(n)), t !== null && Nu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ba(e, t, n) {
  Ml(e) && n.delete(t);
}
function qp() {
  (Oo = !1),
    Ht !== null && Ml(Ht) && (Ht = null),
    Qt !== null && Ml(Qt) && (Qt = null),
    Kt !== null && Ml(Kt) && (Kt = null),
    Vr.forEach(Ba),
    Wr.forEach(Ba);
}
function mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oo ||
      ((Oo = !0),
      We.unstable_scheduleCallback(We.unstable_NormalPriority, qp)));
}
function Hr(e) {
  function t(l) {
    return mr(l, e);
  }
  if (0 < Sl.length) {
    mr(Sl[0], e);
    for (var n = 1; n < Sl.length; n++) {
      var r = Sl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ht !== null && mr(Ht, e),
      Qt !== null && mr(Qt, e),
      Kt !== null && mr(Kt, e),
      Vr.forEach(t),
      Wr.forEach(t),
      n = 0;
    n < $t.length;
    n++
  )
    (r = $t[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $t.length && ((n = $t[0]), n.blockedOn === null); )
    Hc(n), n.blockedOn === null && $t.shift();
}
var Hn = Lt.ReactCurrentBatchConfig,
  Xl = !0;
function Zp(e, t, n, r) {
  var l = Y,
    i = Hn.transition;
  Hn.transition = null;
  try {
    (Y = 1), Tu(e, t, n, r);
  } finally {
    (Y = l), (Hn.transition = i);
  }
}
function bp(e, t, n, r) {
  var l = Y,
    i = Hn.transition;
  Hn.transition = null;
  try {
    (Y = 4), Tu(e, t, n, r);
  } finally {
    (Y = l), (Hn.transition = i);
  }
}
function Tu(e, t, n, r) {
  if (Xl) {
    var l = Fo(e, t, n, r);
    if (l === null) ro(e, t, r, Gl, n), $a(e, r);
    else if (Jp(l, e, t, n, r)) r.stopPropagation();
    else if (($a(e, r), t & 4 && -1 < Gp.indexOf(e))) {
      for (; l !== null; ) {
        var i = ul(l);
        if (
          (i !== null && $c(i),
          (i = Fo(e, t, n, r)),
          i === null && ro(e, t, r, Gl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ro(e, t, r, null, n);
  }
}
var Gl = null;
function Fo(e, t, n, r) {
  if (((Gl = null), (e = Pu(r)), (e = fn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Dc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Gl = e), null;
}
function Qc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($p()) {
        case Ru:
          return 1;
        case Oc:
          return 4;
        case Kl:
        case Bp:
          return 16;
        case Fc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null,
  Lu = null,
  zl = null;
function Kc() {
  if (zl) return zl;
  var e,
    t = Lu,
    n = t.length,
    r,
    l = "value" in Vt ? Vt.value : Vt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (zl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Il(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xl() {
  return !0;
}
function Va() {
  return !1;
}
function Qe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? xl
        : Va),
      (this.isPropagationStopped = Va),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xl));
      },
      persist: function () {},
      isPersistent: xl,
    }),
    t
  );
}
var nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ju = Qe(nr),
  ol = ue({}, nr, { view: 0, detail: 0 }),
  eh = Qe(ol),
  Xi,
  Gi,
  vr,
  wi = ue({}, ol, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Du,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vr &&
            (vr && e.type === "mousemove"
              ? ((Xi = e.screenX - vr.screenX), (Gi = e.screenY - vr.screenY))
              : (Gi = Xi = 0),
            (vr = e)),
          Xi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gi;
    },
  }),
  Wa = Qe(wi),
  th = ue({}, wi, { dataTransfer: 0 }),
  nh = Qe(th),
  rh = ue({}, ol, { relatedTarget: 0 }),
  Ji = Qe(rh),
  lh = ue({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ih = Qe(lh),
  oh = ue({}, nr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  uh = Qe(oh),
  ah = ue({}, nr, { data: 0 }),
  Ha = Qe(ah),
  sh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ch = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dh[e]) ? !!t[e] : !1;
}
function Du() {
  return fh;
}
var ph = ue({}, ol, {
    key: function (e) {
      if (e.key) {
        var t = sh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Il(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ch[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Du,
    charCode: function (e) {
      return e.type === "keypress" ? Il(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Il(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  hh = Qe(ph),
  mh = ue({}, wi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qa = Qe(mh),
  vh = ue({}, ol, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Du,
  }),
  yh = Qe(vh),
  gh = ue({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wh = Qe(gh),
  Sh = ue({}, wi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xh = Qe(Sh),
  Eh = [9, 13, 27, 32],
  Mu = Rt && "CompositionEvent" in window,
  Lr = null;
Rt && "documentMode" in document && (Lr = document.documentMode);
var kh = Rt && "TextEvent" in window && !Lr,
  Yc = Rt && (!Mu || (Lr && 8 < Lr && 11 >= Lr)),
  Ka = String.fromCharCode(32),
  Ya = !1;
function Xc(e, t) {
  switch (e) {
    case "keyup":
      return Eh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Gc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function Ch(e, t) {
  switch (e) {
    case "compositionend":
      return Gc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ya = !0), Ka);
    case "textInput":
      return (e = t.data), e === Ka && Ya ? null : e;
    default:
      return null;
  }
}
function Ph(e, t) {
  if (Ln)
    return e === "compositionend" || (!Mu && Xc(e, t))
      ? ((e = Kc()), (zl = Lu = Vt = null), (Ln = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Yc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rh[e.type] : t === "textarea";
}
function Jc(e, t, n, r) {
  _c(r),
    (t = Jl(t, "onChange")),
    0 < t.length &&
      ((n = new ju("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jr = null,
  Qr = null;
function _h(e) {
  ud(e, 0);
}
function Si(e) {
  var t = Mn(e);
  if (Sc(t)) return e;
}
function Nh(e, t) {
  if (e === "change") return t;
}
var qc = !1;
if (Rt) {
  var qi;
  if (Rt) {
    var Zi = "oninput" in document;
    if (!Zi) {
      var Ga = document.createElement("div");
      Ga.setAttribute("oninput", "return;"),
        (Zi = typeof Ga.oninput == "function");
    }
    qi = Zi;
  } else qi = !1;
  qc = qi && (!document.documentMode || 9 < document.documentMode);
}
function Ja() {
  jr && (jr.detachEvent("onpropertychange", Zc), (Qr = jr = null));
}
function Zc(e) {
  if (e.propertyName === "value" && Si(Qr)) {
    var t = [];
    Jc(t, Qr, e, Pu(e)), jc(_h, t);
  }
}
function Th(e, t, n) {
  e === "focusin"
    ? (Ja(), (jr = t), (Qr = n), jr.attachEvent("onpropertychange", Zc))
    : e === "focusout" && Ja();
}
function Lh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Si(Qr);
}
function jh(e, t) {
  if (e === "click") return Si(t);
}
function Dh(e, t) {
  if (e === "input" || e === "change") return Si(t);
}
function Mh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : Mh;
function Kr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!wo.call(t, l) || !st(e[l], t[l])) return !1;
  }
  return !0;
}
function qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Za(e, t) {
  var n = qa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qa(n);
  }
}
function bc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ed() {
  for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wl(e.document);
  }
  return t;
}
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zh(e) {
  var t = ed(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Za(n, i));
        var o = Za(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ih = Rt && "documentMode" in document && 11 >= document.documentMode,
  jn = null,
  Uo = null,
  Dr = null,
  Ao = !1;
function ba(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ao ||
    jn == null ||
    jn !== Wl(r) ||
    ((r = jn),
    "selectionStart" in r && zu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dr && Kr(Dr, r)) ||
      ((Dr = r),
      (r = Jl(Uo, "onSelect")),
      0 < r.length &&
        ((t = new ju("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jn))));
}
function El(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dn = {
    animationend: El("Animation", "AnimationEnd"),
    animationiteration: El("Animation", "AnimationIteration"),
    animationstart: El("Animation", "AnimationStart"),
    transitionend: El("Transition", "TransitionEnd"),
  },
  bi = {},
  td = {};
Rt &&
  ((td = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dn.animationend.animation,
    delete Dn.animationiteration.animation,
    delete Dn.animationstart.animation),
  "TransitionEvent" in window || delete Dn.transitionend.transition);
function xi(e) {
  if (bi[e]) return bi[e];
  if (!Dn[e]) return e;
  var t = Dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in td) return (bi[e] = t[n]);
  return e;
}
var nd = xi("animationend"),
  rd = xi("animationiteration"),
  ld = xi("animationstart"),
  id = xi("transitionend"),
  od = new Map(),
  es =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function tn(e, t) {
  od.set(e, t), Cn(t, [e]);
}
for (var eo = 0; eo < es.length; eo++) {
  var to = es[eo],
    Oh = to.toLowerCase(),
    Fh = to[0].toUpperCase() + to.slice(1);
  tn(Oh, "on" + Fh);
}
tn(nd, "onAnimationEnd");
tn(rd, "onAnimationIteration");
tn(ld, "onAnimationStart");
tn("dblclick", "onDoubleClick");
tn("focusin", "onFocus");
tn("focusout", "onBlur");
tn(id, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
Cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var _r =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Uh = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
function ts(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Op(r, t, void 0, e), (e.currentTarget = null);
}
function ud(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          ts(l, u, s), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          ts(l, u, s), (i = a);
        }
    }
  }
  if (Ql) throw ((e = zo), (Ql = !1), (zo = null), e);
}
function ee(e, t) {
  var n = t[Ho];
  n === void 0 && (n = t[Ho] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ad(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
  var r = 0;
  t && (r |= 4), ad(n, e, r, t);
}
var kl = "_reactListening" + Math.random().toString(36).slice(2);
function Yr(e) {
  if (!e[kl]) {
    (e[kl] = !0),
      mc.forEach(function (n) {
        n !== "selectionchange" && (Uh.has(n) || no(n, !1, e), no(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kl] || ((t[kl] = !0), no("selectionchange", !1, t));
  }
}
function ad(e, t, n, r) {
  switch (Qc(t)) {
    case 1:
      var l = Zp;
      break;
    case 4:
      l = bp;
      break;
    default:
      l = Tu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Mo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ro(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = fn(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  jc(function () {
    var s = i,
      f = Pu(n),
      v = [];
    e: {
      var m = od.get(e);
      if (m !== void 0) {
        var E = ju,
          g = e;
        switch (e) {
          case "keypress":
            if (Il(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = hh;
            break;
          case "focusin":
            (g = "focus"), (E = Ji);
            break;
          case "focusout":
            (g = "blur"), (E = Ji);
            break;
          case "beforeblur":
          case "afterblur":
            E = Ji;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Wa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = nh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = yh;
            break;
          case nd:
          case rd:
          case ld:
            E = ih;
            break;
          case id:
            E = wh;
            break;
          case "scroll":
            E = eh;
            break;
          case "wheel":
            E = xh;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = uh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Qa;
        }
        var S = (t & 4) !== 0,
          N = !S && e === "scroll",
          p = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var d = s, h; d !== null; ) {
          h = d;
          var c = h.stateNode;
          if (
            (h.tag === 5 &&
              c !== null &&
              ((h = c),
              p !== null && ((c = Br(d, p)), c != null && S.push(Xr(d, c, h)))),
            N)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((m = new E(m, g, null, n, f)), v.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          m &&
            n !== jo &&
            (g = n.relatedTarget || n.fromElement) &&
            (fn(g) || g[_t]))
        )
          break e;
        if (
          (E || m) &&
          ((m =
            f.window === f
              ? f
              : (m = f.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          E
            ? ((g = n.relatedTarget || n.toElement),
              (E = s),
              (g = g ? fn(g) : null),
              g !== null &&
                ((N = Pn(g)), g !== N || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((E = null), (g = s)),
          E !== g)
        ) {
          if (
            ((S = Wa),
            (c = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Qa),
              (c = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (N = E == null ? m : Mn(E)),
            (h = g == null ? m : Mn(g)),
            (m = new S(c, d + "leave", E, n, f)),
            (m.target = N),
            (m.relatedTarget = h),
            (c = null),
            fn(f) === s &&
              ((S = new S(p, d + "enter", g, n, f)),
              (S.target = h),
              (S.relatedTarget = N),
              (c = S)),
            (N = c),
            E && g)
          )
            t: {
              for (S = E, p = g, d = 0, h = S; h; h = _n(h)) d++;
              for (h = 0, c = p; c; c = _n(c)) h++;
              for (; 0 < d - h; ) (S = _n(S)), d--;
              for (; 0 < h - d; ) (p = _n(p)), h--;
              for (; d--; ) {
                if (S === p || (p !== null && S === p.alternate)) break t;
                (S = _n(S)), (p = _n(p));
              }
              S = null;
            }
          else S = null;
          E !== null && ns(v, m, E, S, !1),
            g !== null && N !== null && ns(v, N, g, S, !0);
        }
      }
      e: {
        if (
          ((m = s ? Mn(s) : window),
          (E = m.nodeName && m.nodeName.toLowerCase()),
          E === "select" || (E === "input" && m.type === "file"))
        )
          var C = Nh;
        else if (Xa(m))
          if (qc) C = Dh;
          else {
            C = Lh;
            var T = Th;
          }
        else
          (E = m.nodeName) &&
            E.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = jh);
        if (C && (C = C(e, s))) {
          Jc(v, C, n, f);
          break e;
        }
        T && T(e, m, s),
          e === "focusout" &&
            (T = m._wrapperState) &&
            T.controlled &&
            m.type === "number" &&
            Ro(m, "number", m.value);
      }
      switch (((T = s ? Mn(s) : window), e)) {
        case "focusin":
          (Xa(T) || T.contentEditable === "true") &&
            ((jn = T), (Uo = s), (Dr = null));
          break;
        case "focusout":
          Dr = Uo = jn = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ao = !1), ba(v, n, f);
          break;
        case "selectionchange":
          if (Ih) break;
        case "keydown":
        case "keyup":
          ba(v, n, f);
      }
      var P;
      if (Mu)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Ln
          ? Xc(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Yc &&
          n.locale !== "ko" &&
          (Ln || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Ln && (P = Kc())
            : ((Vt = f),
              (Lu = "value" in Vt ? Vt.value : Vt.textContent),
              (Ln = !0))),
        (T = Jl(s, L)),
        0 < T.length &&
          ((L = new Ha(L, e, null, n, f)),
          v.push({ event: L, listeners: T }),
          P ? (L.data = P) : ((P = Gc(n)), P !== null && (L.data = P)))),
        (P = kh ? Ch(e, n) : Ph(e, n)) &&
          ((s = Jl(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new Ha("onBeforeInput", "beforeinput", null, n, f)),
            v.push({ event: f, listeners: s }),
            (f.data = P)));
    }
    ud(v, t);
  });
}
function Xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Br(e, n)),
      i != null && r.unshift(Xr(e, i, l)),
      (i = Br(e, t)),
      i != null && r.push(Xr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ns(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Br(n, i)), a != null && o.unshift(Xr(n, a, u)))
        : l || ((a = Br(n, i)), a != null && o.push(Xr(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ah = /\r\n?/g,
  $h = /\u0000|\uFFFD/g;
function rs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ah,
      `
`
    )
    .replace($h, "");
}
function Cl(e, t, n) {
  if (((t = rs(t)), rs(e) !== t && n)) throw Error(R(425));
}
function ql() {}
var $o = null,
  Bo = null;
function Vo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wo = typeof setTimeout == "function" ? setTimeout : void 0,
  Bh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ls = typeof Promise == "function" ? Promise : void 0,
  Vh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ls < "u"
      ? function (e) {
          return ls.resolve(null).then(e).catch(Wh);
        }
      : Wo;
function Wh(e) {
  setTimeout(function () {
    throw e;
  });
}
function lo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hr(t);
}
function Yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function is(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rr = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + rr,
  Gr = "__reactProps$" + rr,
  _t = "__reactContainer$" + rr,
  Ho = "__reactEvents$" + rr,
  Hh = "__reactListeners$" + rr,
  Qh = "__reactHandles$" + rr;
function fn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = is(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = is(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ul(e) {
  return (
    (e = e[pt] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Ei(e) {
  return e[Gr] || null;
}
var Qo = [],
  zn = -1;
function nn(e) {
  return { current: e };
}
function te(e) {
  0 > zn || ((e.current = Qo[zn]), (Qo[zn] = null), zn--);
}
function b(e, t) {
  zn++, (Qo[zn] = e.current), (e.current = t);
}
var bt = {},
  Ne = nn(bt),
  Fe = nn(!1),
  gn = bt;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function Zl() {
  te(Fe), te(Ne);
}
function os(e, t, n) {
  if (Ne.current !== bt) throw Error(R(168));
  b(Ne, t), b(Fe, n);
}
function sd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, Tp(e) || "Unknown", l));
  return ue({}, n, r);
}
function bl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bt),
    (gn = Ne.current),
    b(Ne, e),
    b(Fe, Fe.current),
    !0
  );
}
function us(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = sd(e, t, gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Fe),
      te(Ne),
      b(Ne, e))
    : te(Fe),
    b(Fe, n);
}
var xt = null,
  ki = !1,
  io = !1;
function cd(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Kh(e) {
  (ki = !0), cd(e);
}
function rn() {
  if (!io && xt !== null) {
    io = !0;
    var e = 0,
      t = Y;
    try {
      var n = xt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xt = null), (ki = !1);
    } catch (l) {
      throw (xt !== null && (xt = xt.slice(e + 1)), Ic(Ru, rn), l);
    } finally {
      (Y = t), (io = !1);
    }
  }
  return null;
}
var In = [],
  On = 0,
  ei = null,
  ti = 0,
  Xe = [],
  Ge = 0,
  wn = null,
  Et = 1,
  kt = "";
function cn(e, t) {
  (In[On++] = ti), (In[On++] = ei), (ei = e), (ti = t);
}
function dd(e, t, n) {
  (Xe[Ge++] = Et), (Xe[Ge++] = kt), (Xe[Ge++] = wn), (wn = e);
  var r = Et;
  e = kt;
  var l = 32 - ut(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - ut(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Et = (1 << (32 - ut(t) + l)) | (n << l) | r),
      (kt = i + e);
  } else (Et = (1 << i) | (n << l) | r), (kt = e);
}
function Iu(e) {
  e.return !== null && (cn(e, 1), dd(e, 1, 0));
}
function Ou(e) {
  for (; e === ei; )
    (ei = In[--On]), (In[On] = null), (ti = In[--On]), (In[On] = null);
  for (; e === wn; )
    (wn = Xe[--Ge]),
      (Xe[Ge] = null),
      (kt = Xe[--Ge]),
      (Xe[Ge] = null),
      (Et = Xe[--Ge]),
      (Xe[Ge] = null);
}
var Ve = null,
  Be = null,
  ne = !1,
  it = null;
function fd(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function as(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (Be = Yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: Et, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yo(e) {
  if (ne) {
    var t = Be;
    if (t) {
      var n = t;
      if (!as(e, t)) {
        if (Ko(e)) throw Error(R(418));
        t = Yt(n.nextSibling);
        var r = Ve;
        t && as(e, t)
          ? fd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (Ve = e));
      }
    } else {
      if (Ko(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (Ve = e);
    }
  }
}
function ss(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function Pl(e) {
  if (e !== Ve) return !1;
  if (!ne) return ss(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Ko(e)) throw (pd(), Error(R(418)));
    for (; t; ) fd(e, t), (t = Yt(t.nextSibling));
  }
  if ((ss(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Ve ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function pd() {
  for (var e = Be; e; ) e = Yt(e.nextSibling);
}
function Jn() {
  (Be = Ve = null), (ne = !1);
}
function Fu(e) {
  it === null ? (it = [e]) : it.push(e);
}
var Yh = Lt.ReactCurrentBatchConfig;
function nt(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ni = nn(null),
  ri = null,
  Fn = null,
  Uu = null;
function Au() {
  Uu = Fn = ri = null;
}
function $u(e) {
  var t = ni.current;
  te(ni), (e._currentValue = t);
}
function Xo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Qn(e, t) {
  (ri = e),
    (Uu = Fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Oe = !0), (e.firstContext = null));
}
function Ze(e) {
  var t = e._currentValue;
  if (Uu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
      if (ri === null) throw Error(R(308));
      (Fn = e), (ri.dependencies = { lanes: 0, firstContext: e });
    } else Fn = Fn.next = e;
  return t;
}
var pn = null;
function Bu(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function hd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Bu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Nt(e, r)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Vu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function md(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Nt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Bu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Nt(e, n)
  );
}
function Ol(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n);
  }
}
function cs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function li(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), o === null ? (i = s) : (o.next = s), (o = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== o &&
        (u === null ? (f.firstBaseUpdate = s) : (u.next = s),
        (f.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var v = l.baseState;
    (o = 0), (f = s = a = null), (u = i);
    do {
      var m = u.lane,
        E = u.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next =
            {
              eventTime: E,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            S = u;
          switch (((m = t), (E = n), S.tag)) {
            case 1:
              if (((g = S.payload), typeof g == "function")) {
                v = g.call(E, v, m);
                break e;
              }
              v = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = S.payload),
                (m = typeof g == "function" ? g.call(E, v, m) : g),
                m == null)
              )
                break e;
              v = ue({}, v, m);
              break e;
            case 2:
              At = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (E = {
          eventTime: E,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          f === null ? ((s = f = E), (a = v)) : (f = f.next = E),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (a = v),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (xn |= o), (e.lanes = o), (e.memoizedState = v);
  }
}
function ds(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(R(191, l));
        l.call(r);
      }
    }
}
var vd = new hc.Component().refs;
function Go(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ci = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = Jt(e),
      i = Ct(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Xt(e, i, l)),
      t !== null && (at(t, e, l, r), Ol(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = Jt(e),
      i = Ct(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Xt(e, i, l)),
      t !== null && (at(t, e, l, r), Ol(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = Jt(e),
      l = Ct(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Xt(e, l, r)),
      t !== null && (at(t, e, r, n), Ol(t, e, r));
  },
};
function fs(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kr(n, r) || !Kr(l, i)
      : !0
  );
}
function yd(e, t, n) {
  var r = !1,
    l = bt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ze(i))
      : ((l = Ue(t) ? gn : Ne.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Gn(e, l) : bt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ci),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ps(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ci.enqueueReplaceState(t, t.state, null);
}
function Jo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = vd), Vu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ze(i))
    : ((i = Ue(t) ? gn : Ne.current), (l.context = Gn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Go(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ci.enqueueReplaceState(l, l.state, null),
      li(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === vd && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Rl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function hs(e) {
  var t = e._init;
  return t(e._payload);
}
function gd(e) {
  function t(p, d) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [d]), (p.flags |= 16)) : h.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function l(p, d) {
    return (p = qt(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, d, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((p.flags |= 2), d) : h)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, d, h, c) {
    return d === null || d.tag !== 6
      ? ((d = po(h, p.mode, c)), (d.return = p), d)
      : ((d = l(d, h)), (d.return = p), d);
  }
  function a(p, d, h, c) {
    var C = h.type;
    return C === Tn
      ? f(p, d, h.props.children, c, h.key)
      : d !== null &&
        (d.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Ut &&
            hs(C) === d.type))
      ? ((c = l(d, h.props)), (c.ref = yr(p, d, h)), (c.return = p), c)
      : ((c = Vl(h.type, h.key, h.props, null, p.mode, c)),
        (c.ref = yr(p, d, h)),
        (c.return = p),
        c);
  }
  function s(p, d, h, c) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = ho(h, p.mode, c)), (d.return = p), d)
      : ((d = l(d, h.children || [])), (d.return = p), d);
  }
  function f(p, d, h, c, C) {
    return d === null || d.tag !== 7
      ? ((d = yn(h, p.mode, c, C)), (d.return = p), d)
      : ((d = l(d, h)), (d.return = p), d);
  }
  function v(p, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = po("" + d, p.mode, h)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ml:
          return (
            (h = Vl(d.type, d.key, d.props, null, p.mode, h)),
            (h.ref = yr(p, null, d)),
            (h.return = p),
            h
          );
        case Nn:
          return (d = ho(d, p.mode, h)), (d.return = p), d;
        case Ut:
          var c = d._init;
          return v(p, c(d._payload), h);
      }
      if (Pr(d) || fr(d))
        return (d = yn(d, p.mode, h, null)), (d.return = p), d;
      Rl(p, d);
    }
    return null;
  }
  function m(p, d, h, c) {
    var C = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : u(p, d, "" + h, c);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ml:
          return h.key === C ? a(p, d, h, c) : null;
        case Nn:
          return h.key === C ? s(p, d, h, c) : null;
        case Ut:
          return (C = h._init), m(p, d, C(h._payload), c);
      }
      if (Pr(h) || fr(h)) return C !== null ? null : f(p, d, h, c, null);
      Rl(p, h);
    }
    return null;
  }
  function E(p, d, h, c, C) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (p = p.get(h) || null), u(d, p, "" + c, C);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ml:
          return (p = p.get(c.key === null ? h : c.key) || null), a(d, p, c, C);
        case Nn:
          return (p = p.get(c.key === null ? h : c.key) || null), s(d, p, c, C);
        case Ut:
          var T = c._init;
          return E(p, d, h, T(c._payload), C);
      }
      if (Pr(c) || fr(c)) return (p = p.get(h) || null), f(d, p, c, C, null);
      Rl(d, c);
    }
    return null;
  }
  function g(p, d, h, c) {
    for (
      var C = null, T = null, P = d, L = (d = 0), B = null;
      P !== null && L < h.length;
      L++
    ) {
      P.index > L ? ((B = P), (P = null)) : (B = P.sibling);
      var O = m(p, P, h[L], c);
      if (O === null) {
        P === null && (P = B);
        break;
      }
      e && P && O.alternate === null && t(p, P),
        (d = i(O, d, L)),
        T === null ? (C = O) : (T.sibling = O),
        (T = O),
        (P = B);
    }
    if (L === h.length) return n(p, P), ne && cn(p, L), C;
    if (P === null) {
      for (; L < h.length; L++)
        (P = v(p, h[L], c)),
          P !== null &&
            ((d = i(P, d, L)), T === null ? (C = P) : (T.sibling = P), (T = P));
      return ne && cn(p, L), C;
    }
    for (P = r(p, P); L < h.length; L++)
      (B = E(P, p, L, h[L], c)),
        B !== null &&
          (e && B.alternate !== null && P.delete(B.key === null ? L : B.key),
          (d = i(B, d, L)),
          T === null ? (C = B) : (T.sibling = B),
          (T = B));
    return (
      e &&
        P.forEach(function (re) {
          return t(p, re);
        }),
      ne && cn(p, L),
      C
    );
  }
  function S(p, d, h, c) {
    var C = fr(h);
    if (typeof C != "function") throw Error(R(150));
    if (((h = C.call(h)), h == null)) throw Error(R(151));
    for (
      var T = (C = null), P = d, L = (d = 0), B = null, O = h.next();
      P !== null && !O.done;
      L++, O = h.next()
    ) {
      P.index > L ? ((B = P), (P = null)) : (B = P.sibling);
      var re = m(p, P, O.value, c);
      if (re === null) {
        P === null && (P = B);
        break;
      }
      e && P && re.alternate === null && t(p, P),
        (d = i(re, d, L)),
        T === null ? (C = re) : (T.sibling = re),
        (T = re),
        (P = B);
    }
    if (O.done) return n(p, P), ne && cn(p, L), C;
    if (P === null) {
      for (; !O.done; L++, O = h.next())
        (O = v(p, O.value, c)),
          O !== null &&
            ((d = i(O, d, L)), T === null ? (C = O) : (T.sibling = O), (T = O));
      return ne && cn(p, L), C;
    }
    for (P = r(p, P); !O.done; L++, O = h.next())
      (O = E(P, p, L, O.value, c)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? L : O.key),
          (d = i(O, d, L)),
          T === null ? (C = O) : (T.sibling = O),
          (T = O));
    return (
      e &&
        P.forEach(function (Te) {
          return t(p, Te);
        }),
      ne && cn(p, L),
      C
    );
  }
  function N(p, d, h, c) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Tn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case ml:
          e: {
            for (var C = h.key, T = d; T !== null; ) {
              if (T.key === C) {
                if (((C = h.type), C === Tn)) {
                  if (T.tag === 7) {
                    n(p, T.sibling),
                      (d = l(T, h.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Ut &&
                    hs(C) === T.type)
                ) {
                  n(p, T.sibling),
                    (d = l(T, h.props)),
                    (d.ref = yr(p, T, h)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            h.type === Tn
              ? ((d = yn(h.props.children, p.mode, c, h.key)),
                (d.return = p),
                (p = d))
              : ((c = Vl(h.type, h.key, h.props, null, p.mode, c)),
                (c.ref = yr(p, d, h)),
                (c.return = p),
                (p = c));
          }
          return o(p);
        case Nn:
          e: {
            for (T = h.key; d !== null; ) {
              if (d.key === T)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(p, d.sibling),
                    (d = l(d, h.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = ho(h, p.mode, c)), (d.return = p), (p = d);
          }
          return o(p);
        case Ut:
          return (T = h._init), N(p, d, T(h._payload), c);
      }
      if (Pr(h)) return g(p, d, h, c);
      if (fr(h)) return S(p, d, h, c);
      Rl(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = l(d, h)), (d.return = p), (p = d))
          : (n(p, d), (d = po(h, p.mode, c)), (d.return = p), (p = d)),
        o(p))
      : n(p, d);
  }
  return N;
}
var qn = gd(!0),
  wd = gd(!1),
  al = {},
  mt = nn(al),
  Jr = nn(al),
  qr = nn(al);
function hn(e) {
  if (e === al) throw Error(R(174));
  return e;
}
function Wu(e, t) {
  switch ((b(qr, t), b(Jr, e), b(mt, al), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : No(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = No(t, e));
  }
  te(mt), b(mt, t);
}
function Zn() {
  te(mt), te(Jr), te(qr);
}
function Sd(e) {
  hn(qr.current);
  var t = hn(mt.current),
    n = No(t, e.type);
  t !== n && (b(Jr, e), b(mt, n));
}
function Hu(e) {
  Jr.current === e && (te(mt), te(Jr));
}
var ie = nn(0);
function ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var oo = [];
function Qu() {
  for (var e = 0; e < oo.length; e++)
    oo[e]._workInProgressVersionPrimary = null;
  oo.length = 0;
}
var Fl = Lt.ReactCurrentDispatcher,
  uo = Lt.ReactCurrentBatchConfig,
  Sn = 0,
  oe = null,
  ge = null,
  Se = null,
  oi = !1,
  Mr = !1,
  Zr = 0,
  Xh = 0;
function Pe() {
  throw Error(R(321));
}
function Ku(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function Yu(e, t, n, r, l, i) {
  if (
    ((Sn = i),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fl.current = e === null || e.memoizedState === null ? Zh : bh),
    (e = n(r, l)),
    Mr)
  ) {
    i = 0;
    do {
      if (((Mr = !1), (Zr = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (Se = ge = null),
        (t.updateQueue = null),
        (Fl.current = em),
        (e = n(r, l));
    } while (Mr);
  }
  if (
    ((Fl.current = ui),
    (t = ge !== null && ge.next !== null),
    (Sn = 0),
    (Se = ge = oe = null),
    (oi = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Xu() {
  var e = Zr !== 0;
  return (Zr = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (oe.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function be() {
  if (ge === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = Se === null ? oe.memoizedState : Se.next;
  if (t !== null) (Se = t), (ge = e);
  else {
    if (e === null) throw Error(R(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      Se === null ? (oe.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ao(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      s = i;
    do {
      var f = s.lane;
      if ((Sn & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var v = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = v), (o = r)) : (a = a.next = v),
          (oe.lanes |= f),
          (xn |= f);
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? (o = r) : (a.next = u),
      st(r, t.memoizedState) || (Oe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (oe.lanes |= i), (xn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function so(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    st(i, t.memoizedState) || (Oe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function xd() {}
function Ed(e, t) {
  var n = oe,
    r = be(),
    l = t(),
    i = !st(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Oe = !0)),
    (r = r.queue),
    Gu(Pd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      el(9, Cd.bind(null, n, r, l, t), void 0, null),
      xe === null)
    )
      throw Error(R(349));
    Sn & 30 || kd(n, t, l);
  }
  return l;
}
function kd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Cd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rd(t) && _d(e);
}
function Pd(e, t, n) {
  return n(function () {
    Rd(t) && _d(e);
  });
}
function Rd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function _d(e) {
  var t = Nt(e, 1);
  t !== null && at(t, e, 1, -1);
}
function ms(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: br,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qh.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function el(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Nd() {
  return be().memoizedState;
}
function Ul(e, t, n, r) {
  var l = ft();
  (oe.flags |= e),
    (l.memoizedState = el(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pi(e, t, n, r) {
  var l = be();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var o = ge.memoizedState;
    if (((i = o.destroy), r !== null && Ku(r, o.deps))) {
      l.memoizedState = el(t, n, i, r);
      return;
    }
  }
  (oe.flags |= e), (l.memoizedState = el(1 | t, n, i, r));
}
function vs(e, t) {
  return Ul(8390656, 8, e, t);
}
function Gu(e, t) {
  return Pi(2048, 8, e, t);
}
function Td(e, t) {
  return Pi(4, 2, e, t);
}
function Ld(e, t) {
  return Pi(4, 4, e, t);
}
function jd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Dd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pi(4, 4, jd.bind(null, t, e), n)
  );
}
function Ju() {}
function Md(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ku(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function zd(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ku(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Id(e, t, n) {
  return Sn & 21
    ? (st(n, t) || ((n = Uc()), (oe.lanes |= n), (xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
}
function Gh(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = uo.transition;
  uo.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (uo.transition = r);
  }
}
function Od() {
  return be().memoizedState;
}
function Jh(e, t, n) {
  var r = Jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Fd(e))
  )
    Ud(t, n);
  else if (((n = hd(e, t, n, r)), n !== null)) {
    var l = De();
    at(n, e, r, l), Ad(n, t, r);
  }
}
function qh(e, t, n) {
  var r = Jt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fd(e)) Ud(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), st(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Bu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = hd(e, t, l, r)),
      n !== null && ((l = De()), at(n, e, r, l), Ad(n, t, r));
  }
}
function Fd(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function Ud(e, t) {
  Mr = oi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ad(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n);
  }
}
var ui = {
    readContext: Ze,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ze,
    useEffect: vs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ul(4194308, 4, jd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ul(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ul(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Jh.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ms,
    useDebugValue: Ju,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = ms(!1),
        t = e[0];
      return (e = Gh.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        l = ft();
      if (ne) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(R(349));
        Sn & 30 || kd(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        vs(Pd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        el(9, Cd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = xe.identifierPrefix;
      if (ne) {
        var n = kt,
          r = Et;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Zr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Xh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  bh = {
    readContext: Ze,
    useCallback: Md,
    useContext: Ze,
    useEffect: Gu,
    useImperativeHandle: Dd,
    useInsertionEffect: Td,
    useLayoutEffect: Ld,
    useMemo: zd,
    useReducer: ao,
    useRef: Nd,
    useState: function () {
      return ao(br);
    },
    useDebugValue: Ju,
    useDeferredValue: function (e) {
      var t = be();
      return Id(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(br)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: xd,
    useSyncExternalStore: Ed,
    useId: Od,
    unstable_isNewReconciler: !1,
  },
  em = {
    readContext: Ze,
    useCallback: Md,
    useContext: Ze,
    useEffect: Gu,
    useImperativeHandle: Dd,
    useInsertionEffect: Td,
    useLayoutEffect: Ld,
    useMemo: zd,
    useReducer: so,
    useRef: Nd,
    useState: function () {
      return so(br);
    },
    useDebugValue: Ju,
    useDeferredValue: function (e) {
      var t = be();
      return ge === null ? (t.memoizedState = e) : Id(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = so(br)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: xd,
    useSyncExternalStore: Ed,
    useId: Od,
    unstable_isNewReconciler: !1,
  };
function bn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Np(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tm = typeof WeakMap == "function" ? WeakMap : Map;
function $d(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      si || ((si = !0), (uu = r)), qo(e, t);
    }),
    n
  );
}
function Bd(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        qo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        qo(e, t),
          typeof r != "function" &&
            (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ys(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = mm.bind(null, e, t, n)), t.then(e, e));
}
function gs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ws(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var nm = Lt.ReactCurrentOwner,
  Oe = !1;
function je(e, t, n, r) {
  t.child = e === null ? wd(t, null, n, r) : qn(t, e.child, n, r);
}
function Ss(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Qn(t, l),
    (r = Yu(e, t, n, r, i, l)),
    (n = Xu()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Tt(e, t, l))
      : (ne && n && Iu(t), (t.flags |= 1), je(e, t, r, l), t.child)
  );
}
function xs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !la(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Vd(e, t, i, r, l))
      : ((e = Vl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kr), n(o, r) && e.ref === t.ref)
    )
      return Tt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = qt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kr(i, r) && e.ref === t.ref)
      if (((Oe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Oe = !0);
      else return (t.lanes = e.lanes), Tt(e, t, l);
  }
  return Zo(e, t, n, r, l);
}
function Wd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(An, $e),
        ($e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(An, $e),
          ($e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(An, $e),
        ($e |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(An, $e),
      ($e |= r);
  return je(e, t, l, n), t.child;
}
function Hd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zo(e, t, n, r, l) {
  var i = Ue(n) ? gn : Ne.current;
  return (
    (i = Gn(t, i)),
    Qn(t, l),
    (n = Yu(e, t, n, r, i, l)),
    (r = Xu()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Tt(e, t, l))
      : (ne && r && Iu(t), (t.flags |= 1), je(e, t, n, l), t.child)
  );
}
function Es(e, t, n, r, l) {
  if (Ue(n)) {
    var i = !0;
    bl(t);
  } else i = !1;
  if ((Qn(t, l), t.stateNode === null))
    Al(e, t), yd(t, n, r), Jo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Ze(s))
      : ((s = Ue(n) ? gn : Ne.current), (s = Gn(t, s)));
    var f = n.getDerivedStateFromProps,
      v =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && ps(t, o, r, s)),
      (At = !1);
    var m = t.memoizedState;
    (o.state = m),
      li(t, r, o, l),
      (a = t.memoizedState),
      u !== r || m !== a || Fe.current || At
        ? (typeof f == "function" && (Go(t, n, f, r), (a = t.memoizedState)),
          (u = At || fs(t, n, u, r, m, a, s))
            ? (v ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = s),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      md(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : nt(t.type, u)),
      (o.props = s),
      (v = t.pendingProps),
      (m = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ze(a))
        : ((a = Ue(n) ? gn : Ne.current), (a = Gn(t, a)));
    var E = n.getDerivedStateFromProps;
    (f =
      typeof E == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== v || m !== a) && ps(t, o, r, a)),
      (At = !1),
      (m = t.memoizedState),
      (o.state = m),
      li(t, r, o, l);
    var g = t.memoizedState;
    u !== v || m !== g || Fe.current || At
      ? (typeof E == "function" && (Go(t, n, E, r), (g = t.memoizedState)),
        (s = At || fs(t, n, s, r, m, g, a) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = a),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bo(e, t, n, r, i, l);
}
function bo(e, t, n, r, l, i) {
  Hd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && us(t, n, !1), Tt(e, t, i);
  (r = t.stateNode), (nm.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = qn(t, e.child, null, i)), (t.child = qn(t, null, u, i)))
      : je(e, t, u, i),
    (t.memoizedState = r.state),
    l && us(t, n, !0),
    t.child
  );
}
function Qd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? os(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && os(e, t.context, !1),
    Wu(e, t.containerInfo);
}
function ks(e, t, n, r, l) {
  return Jn(), Fu(l), (t.flags |= 256), je(e, t, n, r), t.child;
}
var eu = { dehydrated: null, treeContext: null, retryLane: 0 };
function tu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kd(e, t, n) {
  var r = t.pendingProps,
    l = ie.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(ie, l & 1),
    e === null)
  )
    return (
      Yo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ni(o, r, 0, null)),
              (e = yn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = tu(n)),
              (t.memoizedState = eu),
              e)
            : qu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return rm(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = qt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = qt(u, i)) : ((i = yn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? tu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = eu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = qt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qu(e, t) {
  return (
    (t = Ni({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function _l(e, t, n, r) {
  return (
    r !== null && Fu(r),
    qn(t, e.child, null, n),
    (e = qu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rm(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = co(Error(R(422)))), _l(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Ni({ mode: "visible", children: r.children }, l, 0, null)),
        (i = yn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && qn(t, e.child, null, o),
        (t.child.memoizedState = tu(o)),
        (t.memoizedState = eu),
        i);
  if (!(t.mode & 1)) return _l(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(R(419))), (r = co(i, r, void 0)), _l(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), Oe || u)) {
    if (((r = xe), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Nt(e, l), at(r, e, l, -1));
    }
    return ra(), (r = co(Error(R(421)))), _l(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Be = Yt(l.nextSibling)),
      (Ve = t),
      (ne = !0),
      (it = null),
      e !== null &&
        ((Xe[Ge++] = Et),
        (Xe[Ge++] = kt),
        (Xe[Ge++] = wn),
        (Et = e.id),
        (kt = e.overflow),
        (wn = t)),
      (t = qu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xo(e.return, t, n);
}
function fo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Yd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((je(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cs(e, n, t);
        else if (e.tag === 19) Cs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ii(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          fo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ii(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        fo(t, !0, n, null, i);
        break;
      case "together":
        fo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Al(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (xn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lm(e, t, n) {
  switch (t.tag) {
    case 3:
      Qd(t), Jn();
      break;
    case 5:
      Sd(t);
      break;
    case 1:
      Ue(t.type) && bl(t);
      break;
    case 4:
      Wu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(ni, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Kd(e, t, n)
          : (b(ie, ie.current & 1),
            (e = Tt(e, t, n)),
            e !== null ? e.sibling : null);
      b(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Yd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Wd(e, t, n);
  }
  return Tt(e, t, n);
}
var Xd, nu, Gd, Jd;
Xd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
nu = function () {};
Gd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), hn(mt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Co(e, l)), (r = Co(e, r)), (i = []);
        break;
      case "select":
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = _o(e, l)), (r = _o(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ql);
    }
    To(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Ar.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Ar.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && ee("scroll", e),
                  i || u === a || (i = []))
                : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Jd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gr(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function im(e, t, n) {
  var r = t.pendingProps;
  switch ((Ou(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return Ue(t.type) && Zl(), Re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        te(Fe),
        te(Ne),
        Qu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), it !== null && (cu(it), (it = null)))),
        nu(e, t),
        Re(t),
        null
      );
    case 5:
      Hu(t);
      var l = hn(qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Re(t), null;
        }
        if (((e = hn(mt.current)), Pl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[pt] = t), (r[Gr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < _r.length; l++) ee(_r[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Ma(r, i), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Ia(r, i), ee("invalid", r);
          }
          To(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Ar.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              vl(r), za(r, i, !0);
              break;
            case "textarea":
              vl(r), Oa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ql);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = kc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[pt] = t),
            (e[Gr] = r),
            Xd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Lo(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < _r.length; l++) ee(_r[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r);
                break;
              case "details":
                ee("toggle", e), (l = r);
                break;
              case "input":
                Ma(e, r), (l = Co(e, r)), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ue({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Ia(e, r), (l = _o(e, r)), ee("invalid", e);
                break;
              default:
                l = r;
            }
            To(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? Rc(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Cc(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && $r(e, a)
                    : typeof a == "number" && $r(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ar.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && ee("scroll", e)
                      : a != null && xu(e, i, a, o));
              }
            switch (n) {
              case "input":
                vl(e), za(e, r, !1);
                break;
              case "textarea":
                vl(e), Oa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Bn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ql);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) Jd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = hn(qr.current)), hn(mt.current), Pl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (i = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return Re(t), null;
    case 13:
      if (
        (te(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Be !== null && t.mode & 1 && !(t.flags & 128))
          pd(), Jn(), (t.flags |= 98560), (i = !1);
        else if (((i = Pl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[pt] = t;
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Re(t), (i = !1);
        } else it !== null && (cu(it), (it = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1 ? we === 0 && (we = 3) : ra())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null);
    case 4:
      return (
        Zn(), nu(e, t), e === null && Yr(t.stateNode.containerInfo), Re(t), null
      );
    case 10:
      return $u(t.type._context), Re(t), null;
    case 17:
      return Ue(t.type) && Zl(), Re(t), null;
    case 19:
      if ((te(ie), (i = t.memoizedState), i === null)) return Re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) gr(i, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ii(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    gr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            he() > er &&
            ((t.flags |= 128), (r = !0), gr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ii(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ne)
            )
              return Re(t), null;
          } else
            2 * he() - i.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = he()),
          (t.sibling = null),
          (n = ie.current),
          b(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null);
    case 22:
    case 23:
      return (
        na(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function om(e, t) {
  switch ((Ou(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && Zl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zn(),
        te(Fe),
        te(Ne),
        Qu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Hu(t), null;
    case 13:
      if (
        (te(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ie), null;
    case 4:
      return Zn(), null;
    case 10:
      return $u(t.type._context), null;
    case 22:
    case 23:
      return na(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nl = !1,
  _e = !1,
  um = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function ru(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Ps = !1;
function am(e, t) {
  if ((($o = Xl), (e = ed()), zu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            s = 0,
            f = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var E;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = o + l),
                v !== i || (r !== 0 && v.nodeType !== 3) || (a = o + r),
                v.nodeType === 3 && (o += v.nodeValue.length),
                (E = v.firstChild) !== null;

            )
              (m = v), (v = E);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++s === l && (u = o),
                m === i && ++f === r && (a = o),
                (E = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = E;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bo = { focusedElem: e, selectionRange: n }, Xl = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var S = g.memoizedProps,
                    N = g.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : nt(t.type, S),
                      N
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (c) {
          se(t, t.return, c);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (g = Ps), (Ps = !1), g;
}
function zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ru(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ri(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function lu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function qd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[Gr], delete t[Ho], delete t[Hh], delete t[Qh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Zd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ql));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (iu(e, t, n), e = e.sibling; e !== null; ) iu(e, t, n), (e = e.sibling);
}
function ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ou(e, t, n), e = e.sibling; e !== null; ) ou(e, t, n), (e = e.sibling);
}
var Ee = null,
  rt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) bd(e, t, n), (n = n.sibling);
}
function bd(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(gi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || Un(n, t);
    case 6:
      var r = Ee,
        l = rt;
      (Ee = null),
        Ot(e, t, n),
        (Ee = r),
        (rt = l),
        Ee !== null &&
          (rt
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null &&
        (rt
          ? ((e = Ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? lo(e.parentNode, n)
              : e.nodeType === 1 && lo(e, n),
            Hr(e))
          : lo(Ee, n.stateNode));
      break;
    case 4:
      (r = Ee),
        (l = rt),
        (Ee = n.stateNode.containerInfo),
        (rt = !0),
        Ot(e, t, n),
        (Ee = r),
        (rt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ru(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (Un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          se(n, t, u);
        }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), Ot(e, t, n), (_e = r))
        : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function _s(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new um()),
      t.forEach(function (r) {
        var l = ym.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Ee = u.stateNode), (rt = !1);
              break e;
            case 3:
              (Ee = u.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (Ee = u.stateNode.containerInfo), (rt = !0);
              break e;
          }
          u = u.return;
        }
        if (Ee === null) throw Error(R(160));
        bd(i, o, l), (Ee = null), (rt = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        se(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ef(t, e), (t = t.sibling);
}
function ef(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((tt(t, e), dt(e), r & 4)) {
        try {
          zr(3, e, e.return), Ri(3, e);
        } catch (S) {
          se(e, e.return, S);
        }
        try {
          zr(5, e, e.return);
        } catch (S) {
          se(e, e.return, S);
        }
      }
      break;
    case 1:
      tt(t, e), dt(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (
        (tt(t, e),
        dt(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          $r(l, "");
        } catch (S) {
          se(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && xc(l, i),
              Lo(u, o);
            var s = Lo(u, i);
            for (o = 0; o < a.length; o += 2) {
              var f = a[o],
                v = a[o + 1];
              f === "style"
                ? Rc(l, v)
                : f === "dangerouslySetInnerHTML"
                ? Cc(l, v)
                : f === "children"
                ? $r(l, v)
                : xu(l, f, v, s);
            }
            switch (u) {
              case "input":
                Po(l, i);
                break;
              case "textarea":
                Ec(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var E = i.value;
                E != null
                  ? Bn(l, !!i.multiple, E, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Bn(l, !!i.multiple, i.defaultValue, !0)
                      : Bn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Gr] = i;
          } catch (S) {
            se(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((tt(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          se(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (tt(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hr(t.containerInfo);
        } catch (S) {
          se(e, e.return, S);
        }
      break;
    case 4:
      tt(t, e), dt(e);
      break;
    case 13:
      tt(t, e),
        dt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ea = he())),
        r & 4 && _s(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (s = _e) || f), tt(t, e), (_e = s)) : tt(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (M = e, f = e.child; f !== null; ) {
            for (v = M = f; M !== null; ) {
              switch (((m = M), (E = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zr(4, m, m.return);
                  break;
                case 1:
                  Un(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (S) {
                      se(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Un(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ts(v);
                    continue;
                  }
              }
              E !== null ? ((E.return = m), (M = E)) : Ts(v);
            }
            f = f.sibling;
          }
        e: for (f = null, v = e; ; ) {
          if (v.tag === 5) {
            if (f === null) {
              f = v;
              try {
                (l = v.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = v.stateNode),
                      (a = v.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = Pc("display", o)));
              } catch (S) {
                se(e, e.return, S);
              }
            }
          } else if (v.tag === 6) {
            if (f === null)
              try {
                v.stateNode.nodeValue = s ? "" : v.memoizedProps;
              } catch (S) {
                se(e, e.return, S);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            f === v && (f = null), (v = v.return);
          }
          f === v && (f = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      tt(t, e), dt(e), r & 4 && _s(e);
      break;
    case 21:
      break;
    default:
      tt(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($r(l, ""), (r.flags &= -33));
          var i = Rs(e);
          ou(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Rs(e);
          iu(e, u, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      se(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sm(e, t, n) {
  (M = e), tf(e);
}
function tf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Nl;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || _e;
        u = Nl;
        var s = _e;
        if (((Nl = o), (_e = a) && !s))
          for (M = l; M !== null; )
            (o = M),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ls(l)
                : a !== null
                ? ((a.return = o), (M = a))
                : Ls(l);
        for (; i !== null; ) (M = i), tf(i), (i = i.sibling);
        (M = l), (Nl = u), (_e = s);
      }
      Ns(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (M = i)) : Ns(e);
  }
}
function Ns(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || Ri(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ds(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ds(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var v = f.dehydrated;
                    v !== null && Hr(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        _e || (t.flags & 512 && lu(t));
      } catch (m) {
        se(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Ts(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Ls(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ri(4, t);
          } catch (a) {
            se(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              se(t, l, a);
            }
          }
          var i = t.return;
          try {
            lu(t);
          } catch (a) {
            se(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            lu(t);
          } catch (a) {
            se(t, o, a);
          }
      }
    } catch (a) {
      se(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (M = u);
      break;
    }
    M = t.return;
  }
}
var cm = Math.ceil,
  ai = Lt.ReactCurrentDispatcher,
  Zu = Lt.ReactCurrentOwner,
  qe = Lt.ReactCurrentBatchConfig,
  K = 0,
  xe = null,
  ve = null,
  ke = 0,
  $e = 0,
  An = nn(0),
  we = 0,
  tl = null,
  xn = 0,
  _i = 0,
  bu = 0,
  Ir = null,
  Ie = null,
  ea = 0,
  er = 1 / 0,
  St = null,
  si = !1,
  uu = null,
  Gt = null,
  Tl = !1,
  Wt = null,
  ci = 0,
  Or = 0,
  au = null,
  $l = -1,
  Bl = 0;
function De() {
  return K & 6 ? he() : $l !== -1 ? $l : ($l = he());
}
function Jt(e) {
  return e.mode & 1
    ? K & 2 && ke !== 0
      ? ke & -ke
      : Yh.transition !== null
      ? (Bl === 0 && (Bl = Uc()), Bl)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qc(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (au = null), Error(R(185)));
  il(e, n, r),
    (!(K & 2) || e !== xe) &&
      (e === xe && (!(K & 2) && (_i |= n), we === 4 && Bt(e, ke)),
      Ae(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((er = he() + 500), ki && rn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  Yp(e, t);
  var r = Yl(e, e === xe ? ke : 0);
  if (r === 0)
    n !== null && Aa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Aa(n), t === 1))
      e.tag === 0 ? Kh(js.bind(null, e)) : cd(js.bind(null, e)),
        Vh(function () {
          !(K & 6) && rn();
        }),
        (n = null);
    else {
      switch (Ac(r)) {
        case 1:
          n = Ru;
          break;
        case 4:
          n = Oc;
          break;
        case 16:
          n = Kl;
          break;
        case 536870912:
          n = Fc;
          break;
        default:
          n = Kl;
      }
      n = cf(n, nf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function nf(e, t) {
  if ((($l = -1), (Bl = 0), K & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = Yl(e, e === xe ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = di(e, r);
  else {
    t = r;
    var l = K;
    K |= 2;
    var i = lf();
    (xe !== e || ke !== t) && ((St = null), (er = he() + 500), vn(e, t));
    do
      try {
        pm();
        break;
      } catch (u) {
        rf(e, u);
      }
    while (1);
    Au(),
      (ai.current = i),
      (K = l),
      ve !== null ? (t = 0) : ((xe = null), (ke = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Io(e)), l !== 0 && ((r = l), (t = su(e, l)))), t === 1)
    )
      throw ((n = tl), vn(e, 0), Bt(e, r), Ae(e, he()), n);
    if (t === 6) Bt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !dm(l) &&
          ((t = di(e, r)),
          t === 2 && ((i = Io(e)), i !== 0 && ((r = i), (t = su(e, i)))),
          t === 1))
      )
        throw ((n = tl), vn(e, 0), Bt(e, r), Ae(e, he()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          dn(e, Ie, St);
          break;
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = ea + 500 - he()), 10 < t))
          ) {
            if (Yl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Wo(dn.bind(null, e, Ie, St), t);
            break;
          }
          dn(e, Ie, St);
          break;
        case 4:
          if ((Bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - ut(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * cm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wo(dn.bind(null, e, Ie, St), r);
            break;
          }
          dn(e, Ie, St);
          break;
        case 5:
          dn(e, Ie, St);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ae(e, he()), e.callbackNode === n ? nf.bind(null, e) : null;
}
function su(e, t) {
  var n = Ir;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = di(e, t)),
    e !== 2 && ((t = Ie), (Ie = n), t !== null && cu(t)),
    e
  );
}
function cu(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function dm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!st(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Bt(e, t) {
  for (
    t &= ~bu,
      t &= ~_i,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function js(e) {
  if (K & 6) throw Error(R(327));
  Kn();
  var t = Yl(e, 0);
  if (!(t & 1)) return Ae(e, he()), null;
  var n = di(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Io(e);
    r !== 0 && ((t = r), (n = su(e, r)));
  }
  if (n === 1) throw ((n = tl), vn(e, 0), Bt(e, t), Ae(e, he()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    dn(e, Ie, St),
    Ae(e, he()),
    null
  );
}
function ta(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((er = he() + 500), ki && rn());
  }
}
function En(e) {
  Wt !== null && Wt.tag === 0 && !(K & 6) && Kn();
  var t = K;
  K |= 1;
  var n = qe.transition,
    r = Y;
  try {
    if (((qe.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (qe.transition = n), (K = t), !(K & 6) && rn();
  }
}
function na() {
  ($e = An.current), te(An);
}
function vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bh(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Ou(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zl();
          break;
        case 3:
          Zn(), te(Fe), te(Ne), Qu();
          break;
        case 5:
          Hu(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          te(ie);
          break;
        case 19:
          te(ie);
          break;
        case 10:
          $u(r.type._context);
          break;
        case 22:
        case 23:
          na();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (ve = e = qt(e.current, null)),
    (ke = $e = t),
    (we = 0),
    (tl = null),
    (bu = _i = xn = 0),
    (Ie = Ir = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function rf(e, t) {
  do {
    var n = ve;
    try {
      if ((Au(), (Fl.current = ui), oi)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        oi = !1;
      }
      if (
        ((Sn = 0),
        (Se = ge = oe = null),
        (Mr = !1),
        (Zr = 0),
        (Zu.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (tl = t), (ve = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = ke),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            f = u,
            v = f.tag;
          if (!(f.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue),
                (f.memoizedState = m.memoizedState),
                (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var E = gs(o);
          if (E !== null) {
            (E.flags &= -257),
              ws(E, o, u, i, t),
              E.mode & 1 && ys(i, s, t),
              (t = E),
              (a = s);
            var g = t.updateQueue;
            if (g === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ys(i, s, t), ra();
              break e;
            }
            a = Error(R(426));
          }
        } else if (ne && u.mode & 1) {
          var N = gs(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              ws(N, o, u, i, t),
              Fu(bn(a, u));
            break e;
          }
        }
        (i = a = bn(a, u)),
          we !== 4 && (we = 2),
          Ir === null ? (Ir = [i]) : Ir.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = $d(i, a, t);
              cs(i, p);
              break e;
            case 1:
              u = a;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Gt === null || !Gt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var c = Bd(i, u, t);
                cs(i, c);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      uf(n);
    } catch (C) {
      (t = C), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function lf() {
  var e = ai.current;
  return (ai.current = ui), e === null ? ui : e;
}
function ra() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    xe === null || (!(xn & 268435455) && !(_i & 268435455)) || Bt(xe, ke);
}
function di(e, t) {
  var n = K;
  K |= 2;
  var r = lf();
  (xe !== e || ke !== t) && ((St = null), vn(e, t));
  do
    try {
      fm();
      break;
    } catch (l) {
      rf(e, l);
    }
  while (1);
  if ((Au(), (K = n), (ai.current = r), ve !== null)) throw Error(R(261));
  return (xe = null), (ke = 0), we;
}
function fm() {
  for (; ve !== null; ) of(ve);
}
function pm() {
  for (; ve !== null && !Up(); ) of(ve);
}
function of(e) {
  var t = sf(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? uf(e) : (ve = t),
    (Zu.current = null);
}
function uf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = om(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ve = null);
        return;
      }
    } else if (((n = im(n, t, $e)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function dn(e, t, n) {
  var r = Y,
    l = qe.transition;
  try {
    (qe.transition = null), (Y = 1), hm(e, t, n, r);
  } finally {
    (qe.transition = l), (Y = r);
  }
  return null;
}
function hm(e, t, n, r) {
  do Kn();
  while (Wt !== null);
  if (K & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Xp(e, i),
    e === xe && ((ve = xe = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Tl ||
      ((Tl = !0),
      cf(Kl, function () {
        return Kn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = qe.transition), (qe.transition = null);
    var o = Y;
    Y = 1;
    var u = K;
    (K |= 4),
      (Zu.current = null),
      am(e, n),
      ef(n, e),
      zh(Bo),
      (Xl = !!$o),
      (Bo = $o = null),
      (e.current = n),
      sm(n),
      Ap(),
      (K = u),
      (Y = o),
      (qe.transition = i);
  } else e.current = n;
  if (
    (Tl && ((Tl = !1), (Wt = e), (ci = l)),
    (i = e.pendingLanes),
    i === 0 && (Gt = null),
    Vp(n.stateNode),
    Ae(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (si) throw ((si = !1), (e = uu), (uu = null), e);
  return (
    ci & 1 && e.tag !== 0 && Kn(),
    (i = e.pendingLanes),
    i & 1 ? (e === au ? Or++ : ((Or = 0), (au = e))) : (Or = 0),
    rn(),
    null
  );
}
function Kn() {
  if (Wt !== null) {
    var e = Ac(ci),
      t = qe.transition,
      n = Y;
    try {
      if (((qe.transition = null), (Y = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (ci = 0), K & 6)) throw Error(R(331));
        var l = K;
        for (K |= 4, M = e.current; M !== null; ) {
          var i = M,
            o = i.child;
          if (M.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (M = s; M !== null; ) {
                  var f = M;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zr(8, f, i);
                  }
                  var v = f.child;
                  if (v !== null) (v.return = f), (M = v);
                  else
                    for (; M !== null; ) {
                      f = M;
                      var m = f.sibling,
                        E = f.return;
                      if ((qd(f), f === s)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = E), (M = m);
                        break;
                      }
                      M = E;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var N = S.sibling;
                    (S.sibling = null), (S = N);
                  } while (S !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (M = o);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (M = p);
                break e;
              }
              M = i.return;
            }
        }
        var d = e.current;
        for (M = d; M !== null; ) {
          o = M;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (M = h);
          else
            e: for (o = d; M !== null; ) {
              if (((u = M), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ri(9, u);
                  }
                } catch (C) {
                  se(u, u.return, C);
                }
              if (u === o) {
                M = null;
                break e;
              }
              var c = u.sibling;
              if (c !== null) {
                (c.return = u.return), (M = c);
                break e;
              }
              M = u.return;
            }
        }
        if (
          ((K = l), rn(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(gi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (qe.transition = t);
    }
  }
  return !1;
}
function Ds(e, t, n) {
  (t = bn(n, t)),
    (t = $d(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = De()),
    e !== null && (il(e, 1, t), Ae(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Ds(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ds(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gt === null || !Gt.has(r)))
        ) {
          (e = bn(n, e)),
            (e = Bd(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = De()),
            t !== null && (il(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (ke & n) === n &&
      (we === 4 || (we === 3 && (ke & 130023424) === ke && 500 > he() - ea)
        ? vn(e, 0)
        : (bu |= n)),
    Ae(e, t);
}
function af(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wl), (wl <<= 1), !(wl & 130023424) && (wl = 4194304))
      : (t = 1));
  var n = De();
  (e = Nt(e, t)), e !== null && (il(e, t, n), Ae(e, n));
}
function vm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), af(e, n);
}
function ym(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), af(e, n);
}
var sf;
sf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Oe = !1), lm(e, t, n);
      Oe = !!(e.flags & 131072);
    }
  else (Oe = !1), ne && t.flags & 1048576 && dd(t, ti, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Al(e, t), (e = t.pendingProps);
      var l = Gn(t, Ne.current);
      Qn(t, n), (l = Yu(null, t, r, e, l, n));
      var i = Xu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((i = !0), bl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Vu(t),
            (l.updater = Ci),
            (t.stateNode = l),
            (l._reactInternals = t),
            Jo(t, r, e, n),
            (t = bo(null, t, r, !0, i, n)))
          : ((t.tag = 0), ne && i && Iu(t), je(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Al(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = wm(r)),
          (e = nt(r, e)),
          l)
        ) {
          case 0:
            t = Zo(null, t, r, e, n);
            break e;
          case 1:
            t = Es(null, t, r, e, n);
            break e;
          case 11:
            t = Ss(null, t, r, e, n);
            break e;
          case 14:
            t = xs(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : nt(r, l)),
        Zo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : nt(r, l)),
        Es(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Qd(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          md(e, t),
          li(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = bn(Error(R(423)), t)), (t = ks(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = bn(Error(R(424)), t)), (t = ks(e, t, r, n, l));
            break e;
          } else
            for (
              Be = Yt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                ne = !0,
                it = null,
                n = wd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === l)) {
            t = Tt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sd(t),
        e === null && Yo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Vo(r, l) ? (o = null) : i !== null && Vo(r, i) && (t.flags |= 32),
        Hd(e, t),
        je(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Yo(t), null;
    case 13:
      return Kd(e, t, n);
    case 4:
      return (
        Wu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = qn(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : nt(r, l)),
        Ss(e, t, r, l, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          b(ni, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (st(i.value, o)) {
            if (i.children === l.children && !Fe.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Ct(-1, n & -n)), (a.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (s.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Xo(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(R(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Xo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        je(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (l = Ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = nt(r, t.pendingProps)),
        (l = nt(r.type, l)),
        xs(e, t, r, l, n)
      );
    case 15:
      return Vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : nt(r, l)),
        Al(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), bl(t)) : (e = !1),
        Qn(t, n),
        yd(t, r, l),
        Jo(t, r, l, n),
        bo(null, t, r, !0, e, n)
      );
    case 19:
      return Yd(e, t, n);
    case 22:
      return Wd(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function cf(e, t) {
  return Ic(e, t);
}
function gm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Je(e, t, n, r) {
  return new gm(e, t, n, r);
}
function la(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wm(e) {
  if (typeof e == "function") return la(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ku)) return 11;
    if (e === Cu) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) la(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Tn:
        return yn(n.children, l, i, t);
      case Eu:
        (o = 8), (l |= 8);
        break;
      case So:
        return (
          (e = Je(12, n, t, l | 2)), (e.elementType = So), (e.lanes = i), e
        );
      case xo:
        return (e = Je(13, n, t, l)), (e.elementType = xo), (e.lanes = i), e;
      case Eo:
        return (e = Je(19, n, t, l)), (e.elementType = Eo), (e.lanes = i), e;
      case gc:
        return Ni(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case vc:
              o = 10;
              break e;
            case yc:
              o = 9;
              break e;
            case ku:
              o = 11;
              break e;
            case Cu:
              o = 14;
              break e;
            case Ut:
              (o = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function yn(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function Ni(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = gc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function po(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function ho(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yi(0)),
    (this.expirationTimes = Yi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ia(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new Sm(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vu(i),
    e
  );
}
function xm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function df(e) {
  if (!e) return bt;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return sd(e, n, t);
  }
  return t;
}
function ff(e, t, n, r, l, i, o, u, a) {
  return (
    (e = ia(n, r, !0, e, l, i, o, u, a)),
    (e.context = df(null)),
    (n = e.current),
    (r = De()),
    (l = Jt(n)),
    (i = Ct(r, l)),
    (i.callback = t ?? null),
    Xt(n, i, l),
    (e.current.lanes = l),
    il(e, l, r),
    Ae(e, r),
    e
  );
}
function Ti(e, t, n, r) {
  var l = t.current,
    i = De(),
    o = Jt(l);
  return (
    (n = df(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(l, t, o)),
    e !== null && (at(e, l, o, i), Ol(e, l, o)),
    o
  );
}
function fi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ms(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oa(e, t) {
  Ms(e, t), (e = e.alternate) && Ms(e, t);
}
function Em() {
  return null;
}
var pf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ua(e) {
  this._internalRoot = e;
}
Li.prototype.render = ua.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Ti(e, t, null, null);
};
Li.prototype.unmount = ua.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function () {
      Ti(null, e, null, null);
    }),
      (t[_t] = null);
  }
};
function Li(e) {
  this._internalRoot = e;
}
Li.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Vc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++);
    $t.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ji(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zs() {}
function km(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = fi(o);
        i.call(s);
      };
    }
    var o = ff(t, r, e, 0, null, !1, !1, "", zs);
    return (
      (e._reactRootContainer = o),
      (e[_t] = o.current),
      Yr(e.nodeType === 8 ? e.parentNode : e),
      En(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = fi(a);
      u.call(s);
    };
  }
  var a = ia(e, 0, !1, null, null, !1, !1, "", zs);
  return (
    (e._reactRootContainer = a),
    (e[_t] = a.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      Ti(t, a, n, r);
    }),
    a
  );
}
function Di(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = fi(o);
        u.call(a);
      };
    }
    Ti(t, o, e, l);
  } else o = km(n, t, e, l, r);
  return fi(o);
}
$c = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 &&
          (_u(t, n | 1), Ae(t, he()), !(K & 6) && ((er = he() + 500), rn()));
      }
      break;
    case 13:
      En(function () {
        var r = Nt(e, 1);
        if (r !== null) {
          var l = De();
          at(r, e, 1, l);
        }
      }),
        oa(e, 1);
  }
};
Nu = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = De();
      at(t, e, 134217728, n);
    }
    oa(e, 134217728);
  }
};
Bc = function (e) {
  if (e.tag === 13) {
    var t = Jt(e),
      n = Nt(e, t);
    if (n !== null) {
      var r = De();
      at(n, e, t, r);
    }
    oa(e, t);
  }
};
Vc = function () {
  return Y;
};
Wc = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
Do = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Po(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ei(r);
            if (!l) throw Error(R(90));
            Sc(r), Po(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ec(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
Tc = ta;
Lc = En;
var Cm = { usingClientEntryPoint: !1, Events: [ul, Mn, Ei, _c, Nc, ta] },
  wr = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Pm = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || Em,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ll.isDisabled && Ll.supportsFiber)
    try {
      (gi = Ll.inject(Pm)), (ht = Ll);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cm;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!aa(t)) throw Error(R(200));
  return xm(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!aa(e)) throw Error(R(299));
  var n = !1,
    r = "",
    l = pf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ia(e, 1, !1, null, null, n, !1, r, l)),
    (e[_t] = t.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    new ua(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Mc(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return En(e);
};
He.hydrate = function (e, t, n) {
  if (!ji(t)) throw Error(R(200));
  return Di(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!aa(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = pf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ff(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[_t] = t.current),
    Yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Li(t);
};
He.render = function (e, t, n) {
  if (!ji(t)) throw Error(R(200));
  return Di(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!ji(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (En(function () {
        Di(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[_t] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = ta;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ji(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Di(e, t, n, !1, r);
};
He.version = "18.2.0-next-9e3b772b8-20220608";
function hf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf);
    } catch (e) {
      console.error(e);
    }
}
hf(), (dc.exports = He);
var Rm = dc.exports,
  Is = Rm;
(go.createRoot = Is.createRoot), (go.hydrateRoot = Is.hydrateRoot);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var fe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(fe || (fe = {}));
const Os = "popstate";
function _m(e) {
  e === void 0 && (e = {});
  function t(l, i) {
    let {
      pathname: o = "/",
      search: u = "",
      hash: a = "",
    } = vt(l.location.hash.substr(1));
    return (
      !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o),
      nl(
        "",
        { pathname: o, search: u, hash: a },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(l, i) {
    let o = l.document.querySelector("base"),
      u = "";
    if (o && o.getAttribute("href")) {
      let a = l.location.href,
        s = a.indexOf("#");
      u = s === -1 ? a : a.slice(0, s);
    }
    return u + "#" + (typeof i == "string" ? i : kn(i));
  }
  function r(l, i) {
    en(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return Tm(t, n, r, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function en(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Nm() {
  return Math.random().toString(36).substr(2, 8);
}
function Fs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function nl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? vt(t) : t,
      { state: n, key: (t && t.key) || r || Nm() }
    )
  );
}
function kn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function vt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Tm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = fe.Pop,
    a = null,
    s = f();
  s == null && ((s = 0), o.replaceState(ce({}, o.state, { idx: s }), ""));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function v() {
    u = fe.Pop;
    let N = f(),
      p = N == null ? null : N - s;
    (s = N), a && a({ action: u, location: S.location, delta: p });
  }
  function m(N, p) {
    u = fe.Push;
    let d = nl(S.location, N, p);
    n && n(d, N), (s = f() + 1);
    let h = Fs(d, s),
      c = S.createHref(d);
    try {
      o.pushState(h, "", c);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(c);
    }
    i && a && a({ action: u, location: S.location, delta: 1 });
  }
  function E(N, p) {
    u = fe.Replace;
    let d = nl(S.location, N, p);
    n && n(d, N), (s = f());
    let h = Fs(d, s),
      c = S.createHref(d);
    o.replaceState(h, "", c),
      i && a && a({ action: u, location: S.location, delta: 0 });
  }
  function g(N) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof N == "string" ? N : kn(N);
    return (
      W(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, p)
    );
  }
  let S = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(N) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Os, v),
        (a = N),
        () => {
          l.removeEventListener(Os, v), (a = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: g,
    encodeLocation(N) {
      let p = g(N);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: E,
    go(N) {
      return o.go(N);
    },
  };
  return S;
}
var pe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(pe || (pe = {}));
const Lm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function jm(e) {
  return e.index === !0;
}
function du(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, i],
        u = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (W(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        W(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        jm(l))
      ) {
        let a = ce({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = ce({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = du(l.children, t, o, r)), a
        );
      }
    })
  );
}
function $n(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? vt(t) : t,
    l = lr(r.pathname || "/", n);
  if (l == null) return null;
  let i = mf(e);
  Mm(i);
  let o = null;
  for (let u = 0; o == null && u < i.length; ++u) o = Vm(i[u], Qm(l));
  return o;
}
function Dm(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function mf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, u) => {
    let a = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (W(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Pt([r, a.relativePath]),
      f = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (W(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      mf(i.children, t, f, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: $m(s, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let a of vf(i.path)) l(i, o, a);
    }),
    t
  );
}
function vf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = vf(r.join("/")),
    u = [];
  return (
    u.push(...o.map((a) => (a === "" ? i : [i, a].join("/")))),
    l && u.push(...o),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Mm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Bm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const zm = /^:\w+$/,
  Im = 3,
  Om = 2,
  Fm = 1,
  Um = 10,
  Am = -2,
  Us = (e) => e === "*";
function $m(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Us) && (r += Am),
    t && (r += Om),
    n
      .filter((l) => !Us(l))
      .reduce((l, i) => l + (zm.test(i) ? Im : i === "" ? Fm : Um), r)
  );
}
function Bm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Vm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let u = n[o],
      a = o === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      f = Wm(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let v = u.route;
    i.push({
      params: r,
      pathname: Pt([l, f.pathname]),
      pathnameBase: Gm(Pt([l, f.pathnameBase])),
      route: v,
    }),
      f.pathnameBase !== "/" && (l = Pt([l, f.pathnameBase]));
  }
  return i;
}
function Wm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Hm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, f, v) => {
      let { paramName: m, isOptional: E } = f;
      if (m === "*") {
        let S = u[v] || "";
        o = i.slice(0, i.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const g = u[v];
      return E && !g ? (s[m] = void 0) : (s[m] = Km(g || "", m)), s;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Hm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    en(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (o, u, a) => (
            r.push({ paramName: u, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Qm(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      en(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Km(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      en(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function lr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ym(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? vt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Xm(n, t)) : t,
    search: Jm(r),
    hash: qm(l),
  };
}
function Xm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function mo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Mi(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function sa(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = vt(e))
    : ((l = ce({}, e)),
      W(
        !l.pathname || !l.pathname.includes("?"),
        mo("?", "pathname", "search", l)
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        mo("#", "pathname", "hash", l)
      ),
      W(!l.search || !l.search.includes("#"), mo("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (r || o == null) u = n;
  else {
    let v = t.length - 1;
    if (o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (v -= 1);
      l.pathname = m.join("/");
    }
    u = v >= 0 ? t[v] : "/";
  }
  let a = Ym(l, u),
    s = o && o !== "/" && o.endsWith("/"),
    f = (i || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || f) && (a.pathname += "/"), a;
}
const Pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Gm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Jm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  qm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ca {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function yf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const gf = ["post", "put", "patch", "delete"],
  Zm = new Set(gf),
  bm = ["get", ...gf],
  ev = new Set(bm),
  tv = new Set([301, 302, 303, 307, 308]),
  nv = new Set([307, 308]),
  vo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  rv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Sr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  wf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Sf = "remix-router-transitions";
function iv(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (w) => ({ hasErrorBoundary: y(w) });
  } else l = lv;
  let i = {},
    o = du(e.routes, l, void 0, i),
    u,
    a = e.basename || "/",
    s = ce(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    f = null,
    v = new Set(),
    m = null,
    E = null,
    g = null,
    S = e.hydrationData != null,
    N = $n(o, e.history.location, a),
    p = null;
  if (N == null) {
    let y = Ye(404, { pathname: e.history.location.pathname }),
      { matches: w, route: k } = Ks(o);
    (N = w), (p = { [k.id]: y });
  }
  let d =
      !N.some((y) => y.route.lazy) &&
      (!N.some((y) => y.route.loader) || e.hydrationData != null),
    h,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: N,
      initialized: d,
      navigation: vo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = fe.Pop,
    T = !1,
    P,
    L = !1,
    B = new Map(),
    O = null,
    re = !1,
    Te = !1,
    ct = [],
    ln = [],
    ae = new Map(),
    Dt = 0,
    yt = -1,
    j = new Map(),
    F = new Set(),
    $ = new Map(),
    G = new Map(),
    Z = new Set(),
    Ke = new Map(),
    Le = new Map(),
    on = !1;
  function gt() {
    if (
      ((f = e.history.listen((y) => {
        let { action: w, location: k, delta: D } = y;
        if (on) {
          on = !1;
          return;
        }
        en(
          Le.size === 0 || D != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let I = xa({
          currentLocation: c.location,
          nextLocation: k,
          historyAction: w,
        });
        if (I && D != null) {
          (on = !0),
            e.history.go(D * -1),
            fl(I, {
              state: "blocked",
              location: k,
              proceed() {
                fl(I, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(D);
              },
              reset() {
                let U = new Map(c.blockers);
                U.set(I, Sr), me({ blockers: U });
              },
            });
          return;
        }
        return un(w, k);
      })),
      n)
    ) {
      vv(t, B);
      let y = () => yv(t, B);
      t.addEventListener("pagehide", y),
        (O = () => t.removeEventListener("pagehide", y));
    }
    return c.initialized || un(fe.Pop, c.location), h;
  }
  function Rn() {
    f && f(),
      O && O(),
      v.clear(),
      P && P.abort(),
      c.fetchers.forEach((y, w) => dl(w)),
      c.blockers.forEach((y, w) => Sa(w));
  }
  function $f(y) {
    return v.add(y), () => v.delete(y);
  }
  function me(y, w) {
    c = ce({}, c, y);
    let k = [],
      D = [];
    s.v7_fetcherPersist &&
      c.fetchers.forEach((I, U) => {
        I.state === "idle" && (Z.has(U) ? D.push(U) : k.push(U));
      }),
      v.forEach((I) =>
        I(c, { deletedFetchers: D, unstable_viewTransitionOpts: w })
      ),
      s.v7_fetcherPersist &&
        (k.forEach((I) => c.fetchers.delete(I)), D.forEach((I) => dl(I)));
  }
  function ur(y, w) {
    var k, D;
    let I =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        lt(c.navigation.formMethod) &&
        c.navigation.state === "loading" &&
        ((k = y.state) == null ? void 0 : k._isRedirect) !== !0,
      U;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (U = w.actionData)
        : (U = null)
      : I
      ? (U = c.actionData)
      : (U = null);
    let V = w.loaderData
        ? Qs(c.loaderData, w.loaderData, w.matches || [], w.errors)
        : c.loaderData,
      A = c.blockers;
    A.size > 0 && ((A = new Map(A)), A.forEach((le, Q) => A.set(Q, Sr)));
    let z =
      T === !0 ||
      (c.navigation.formMethod != null &&
        lt(c.navigation.formMethod) &&
        ((D = y.state) == null ? void 0 : D._isRedirect) !== !0);
    u && ((o = u), (u = void 0)),
      re ||
        C === fe.Pop ||
        (C === fe.Push
          ? e.history.push(y, y.state)
          : C === fe.Replace && e.history.replace(y, y.state));
    let J;
    if (C === fe.Pop) {
      let le = B.get(c.location.pathname);
      le && le.has(y.pathname)
        ? (J = { currentLocation: c.location, nextLocation: y })
        : B.has(y.pathname) &&
          (J = { currentLocation: y, nextLocation: c.location });
    } else if (L) {
      let le = B.get(c.location.pathname);
      le
        ? le.add(y.pathname)
        : ((le = new Set([y.pathname])), B.set(c.location.pathname, le)),
        (J = { currentLocation: c.location, nextLocation: y });
    }
    me(
      ce({}, w, {
        actionData: U,
        loaderData: V,
        historyAction: C,
        location: y,
        initialized: !0,
        navigation: vo,
        revalidation: "idle",
        restoreScrollPosition: ka(y, w.matches || c.matches),
        preventScrollReset: z,
        blockers: A,
      }),
      J
    ),
      (C = fe.Pop),
      (T = !1),
      (L = !1),
      (re = !1),
      (Te = !1),
      (ct = []),
      (ln = []);
  }
  async function ha(y, w) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let k = fu(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        y,
        w == null ? void 0 : w.fromRouteId,
        w == null ? void 0 : w.relative
      ),
      {
        path: D,
        submission: I,
        error: U,
      } = As(s.v7_normalizeFormMethod, !1, k, w),
      V = c.location,
      A = nl(c.location, D, w && w.state);
    A = ce({}, A, e.history.encodeLocation(A));
    let z = w && w.replace != null ? w.replace : void 0,
      J = fe.Push;
    z === !0
      ? (J = fe.Replace)
      : z === !1 ||
        (I != null &&
          lt(I.formMethod) &&
          I.formAction === c.location.pathname + c.location.search &&
          (J = fe.Replace));
    let le =
        w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
      Q = xa({ currentLocation: V, nextLocation: A, historyAction: J });
    if (Q) {
      fl(Q, {
        state: "blocked",
        location: A,
        proceed() {
          fl(Q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: A,
          }),
            ha(y, w);
        },
        reset() {
          let q = new Map(c.blockers);
          q.set(Q, Sr), me({ blockers: q });
        },
      });
      return;
    }
    return await un(J, A, {
      submission: I,
      pendingError: U,
      preventScrollReset: le,
      replace: w && w.replace,
      enableViewTransition: w && w.unstable_viewTransition,
    });
  }
  function Bf() {
    if (
      (Oi(),
      me({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        un(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      un(C || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function un(y, w, k) {
    P && P.abort(),
      (P = null),
      (C = y),
      (re = (k && k.startUninterruptedRevalidation) === !0),
      Jf(c.location, c.matches),
      (T = (k && k.preventScrollReset) === !0),
      (L = (k && k.enableViewTransition) === !0);
    let D = u || o,
      I = k && k.overrideNavigation,
      U = $n(D, w, a);
    if (!U) {
      let q = Ye(404, { pathname: w.pathname }),
        { matches: ye, route: an } = Ks(D);
      Fi(), ur(w, { matches: ye, loaderData: {}, errors: { [an.id]: q } });
      return;
    }
    if (
      c.initialized &&
      !Te &&
      cv(c.location, w) &&
      !(k && k.submission && lt(k.submission.formMethod))
    ) {
      ur(w, { matches: U });
      return;
    }
    P = new AbortController();
    let V = Er(e.history, w, P.signal, k && k.submission),
      A,
      z;
    if (k && k.pendingError) z = { [Fr(U).route.id]: k.pendingError };
    else if (k && k.submission && lt(k.submission.formMethod)) {
      let q = await Vf(V, w, k.submission, U, { replace: k.replace });
      if (q.shortCircuited) return;
      (A = q.pendingActionData),
        (z = q.pendingActionError),
        (I = yo(w, k.submission)),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: J,
      loaderData: le,
      errors: Q,
    } = await Wf(
      V,
      w,
      U,
      I,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      A,
      z
    );
    J ||
      ((P = null),
      ur(
        w,
        ce({ matches: U }, A ? { actionData: A } : {}, {
          loaderData: le,
          errors: Q,
        })
      ));
  }
  async function Vf(y, w, k, D, I) {
    I === void 0 && (I = {}), Oi();
    let U = hv(w, k);
    me({ navigation: U });
    let V,
      A = hu(D, w);
    if (!A.route.action && !A.route.lazy)
      V = {
        type: pe.error,
        error: Ye(405, {
          method: y.method,
          pathname: w.pathname,
          routeId: A.route.id,
        }),
      };
    else if (((V = await xr("action", y, A, D, i, l, a)), y.signal.aborted))
      return { shortCircuited: !0 };
    if (Yn(V)) {
      let z;
      return (
        I && I.replace != null
          ? (z = I.replace)
          : (z = V.location === c.location.pathname + c.location.search),
        await ar(c, V, { submission: k, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (Ur(V)) {
      let z = Fr(D, A.route.id);
      return (
        (I && I.replace) !== !0 && (C = fe.Push),
        { pendingActionData: {}, pendingActionError: { [z.route.id]: V.error } }
      );
    }
    if (mn(V)) throw Ye(400, { type: "defer-action" });
    return { pendingActionData: { [A.route.id]: V.data } };
  }
  async function Wf(y, w, k, D, I, U, V, A, z) {
    let J = D || yo(w, I),
      le = I || U || Gs(J),
      Q = u || o,
      [q, ye] = $s(e.history, c, k, le, w, Te, ct, ln, $, F, Q, a, A, z);
    if (
      (Fi(
        (X) =>
          !(k && k.some((et) => et.route.id === X)) ||
          (q && q.some((et) => et.route.id === X))
      ),
      (yt = ++Dt),
      q.length === 0 && ye.length === 0)
    ) {
      let X = ga();
      return (
        ur(
          w,
          ce(
            { matches: k, loaderData: {}, errors: z || null },
            A ? { actionData: A } : {},
            X ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!re) {
      ye.forEach((et) => {
        let It = c.fetchers.get(et.key),
          de = kr(void 0, It ? It.data : void 0);
        c.fetchers.set(et.key, de);
      });
      let X = A || c.actionData;
      me(
        ce(
          { navigation: J },
          X
            ? Object.keys(X).length === 0
              ? { actionData: null }
              : { actionData: X }
            : {},
          ye.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    ye.forEach((X) => {
      ae.has(X.key) && Mt(X.key), X.controller && ae.set(X.key, X.controller);
    });
    let an = () => ye.forEach((X) => Mt(X.key));
    P && P.signal.addEventListener("abort", an);
    let {
      results: sn,
      loaderResults: cr,
      fetcherResults: Ui,
    } = await va(c.matches, k, q, ye, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    P && P.signal.removeEventListener("abort", an),
      ye.forEach((X) => ae.delete(X.key));
    let wt = Ys(sn);
    if (wt) {
      if (wt.idx >= q.length) {
        let X = ye[wt.idx - q.length].key;
        F.add(X);
      }
      return await ar(c, wt.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: zt, errors: pl } = Hs(c, k, q, cr, z, ye, Ui, Ke);
    Ke.forEach((X, et) => {
      X.subscribe((It) => {
        (It || X.done) && Ke.delete(et);
      });
    });
    let Ai = ga(),
      $i = wa(yt),
      Bi = Ai || $i || ye.length > 0;
    return ce(
      { loaderData: zt, errors: pl },
      Bi ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function ma(y) {
    return (
      s.v7_fetcherPersist &&
        (G.set(y, (G.get(y) || 0) + 1), Z.has(y) && Z.delete(y)),
      c.fetchers.get(y) || rv
    );
  }
  function Hf(y, w, k, D) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ae.has(y) && Mt(y);
    let I = u || o,
      U = fu(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        k,
        w,
        D == null ? void 0 : D.relative
      ),
      V = $n(I, U, a);
    if (!V) {
      sr(y, w, Ye(404, { pathname: U }));
      return;
    }
    let {
      path: A,
      submission: z,
      error: J,
    } = As(s.v7_normalizeFormMethod, !0, U, D);
    if (J) {
      sr(y, w, J);
      return;
    }
    let le = hu(V, A);
    if (((T = (D && D.preventScrollReset) === !0), z && lt(z.formMethod))) {
      Qf(y, w, A, le, V, z);
      return;
    }
    $.set(y, { routeId: w, path: A }), Kf(y, w, A, le, V, z);
  }
  async function Qf(y, w, k, D, I, U) {
    if ((Oi(), $.delete(y), !D.route.action && !D.route.lazy)) {
      let de = Ye(405, { method: U.formMethod, pathname: k, routeId: w });
      sr(y, w, de);
      return;
    }
    let V = c.fetchers.get(y),
      A = mv(U, V);
    c.fetchers.set(y, A), me({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      J = Er(e.history, k, z.signal, U);
    ae.set(y, z);
    let le = Dt,
      Q = await xr("action", J, D, I, i, l, a);
    if (J.signal.aborted) {
      ae.get(y) === z && ae.delete(y);
      return;
    }
    if (Z.has(y)) {
      c.fetchers.set(y, Ft(void 0)), me({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (Yn(Q))
      if ((ae.delete(y), yt > le)) {
        let de = Ft(void 0);
        c.fetchers.set(y, de), me({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        F.add(y);
        let de = kr(U);
        return (
          c.fetchers.set(y, de),
          me({ fetchers: new Map(c.fetchers) }),
          ar(c, Q, { fetcherSubmission: U })
        );
      }
    if (Ur(Q)) {
      sr(y, w, Q.error);
      return;
    }
    if (mn(Q)) throw Ye(400, { type: "defer-action" });
    let q = c.navigation.location || c.location,
      ye = Er(e.history, q, z.signal),
      an = u || o,
      sn =
        c.navigation.state !== "idle"
          ? $n(an, c.navigation.location, a)
          : c.matches;
    W(sn, "Didn't find any matches after fetcher action");
    let cr = ++Dt;
    j.set(y, cr);
    let Ui = kr(U, Q.data);
    c.fetchers.set(y, Ui);
    let [wt, zt] = $s(
      e.history,
      c,
      sn,
      U,
      q,
      Te,
      ct,
      ln,
      $,
      F,
      an,
      a,
      { [D.route.id]: Q.data },
      void 0
    );
    zt
      .filter((de) => de.key !== y)
      .forEach((de) => {
        let dr = de.key,
          Ca = c.fetchers.get(dr),
          Zf = kr(void 0, Ca ? Ca.data : void 0);
        c.fetchers.set(dr, Zf),
          ae.has(dr) && Mt(dr),
          de.controller && ae.set(dr, de.controller);
      }),
      me({ fetchers: new Map(c.fetchers) });
    let pl = () => zt.forEach((de) => Mt(de.key));
    z.signal.addEventListener("abort", pl);
    let {
      results: Ai,
      loaderResults: $i,
      fetcherResults: Bi,
    } = await va(c.matches, sn, wt, zt, ye);
    if (z.signal.aborted) return;
    z.signal.removeEventListener("abort", pl),
      j.delete(y),
      ae.delete(y),
      zt.forEach((de) => ae.delete(de.key));
    let X = Ys(Ai);
    if (X) {
      if (X.idx >= wt.length) {
        let de = zt[X.idx - wt.length].key;
        F.add(de);
      }
      return ar(c, X.result);
    }
    let { loaderData: et, errors: It } = Hs(
      c,
      c.matches,
      wt,
      $i,
      void 0,
      zt,
      Bi,
      Ke
    );
    if (c.fetchers.has(y)) {
      let de = Ft(Q.data);
      c.fetchers.set(y, de);
    }
    wa(cr),
      c.navigation.state === "loading" && cr > yt
        ? (W(C, "Expected pending action"),
          P && P.abort(),
          ur(c.navigation.location, {
            matches: sn,
            loaderData: et,
            errors: It,
            fetchers: new Map(c.fetchers),
          }))
        : (me({
            errors: It,
            loaderData: Qs(c.loaderData, et, sn, It),
            fetchers: new Map(c.fetchers),
          }),
          (Te = !1));
  }
  async function Kf(y, w, k, D, I, U) {
    let V = c.fetchers.get(y),
      A = kr(U, V ? V.data : void 0);
    c.fetchers.set(y, A), me({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      J = Er(e.history, k, z.signal);
    ae.set(y, z);
    let le = Dt,
      Q = await xr("loader", J, D, I, i, l, a);
    if (
      (mn(Q) && (Q = (await kf(Q, J.signal, !0)) || Q),
      ae.get(y) === z && ae.delete(y),
      J.signal.aborted)
    )
      return;
    if (Z.has(y)) {
      c.fetchers.set(y, Ft(void 0)), me({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (Yn(Q))
      if (yt > le) {
        let ye = Ft(void 0);
        c.fetchers.set(y, ye), me({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        F.add(y), await ar(c, Q);
        return;
      }
    if (Ur(Q)) {
      sr(y, w, Q.error);
      return;
    }
    W(!mn(Q), "Unhandled fetcher deferred data");
    let q = Ft(Q.data);
    c.fetchers.set(y, q), me({ fetchers: new Map(c.fetchers) });
  }
  async function ar(y, w, k) {
    let {
      submission: D,
      fetcherSubmission: I,
      replace: U,
    } = k === void 0 ? {} : k;
    w.revalidate && (Te = !0);
    let V = nl(y.location, w.location, { _isRedirect: !0 });
    if ((W(V, "Expected a location on the redirect navigation"), n)) {
      let q = !1;
      if (w.reloadDocument) q = !0;
      else if (wf.test(w.location)) {
        const ye = e.history.createURL(w.location);
        q = ye.origin !== t.location.origin || lr(ye.pathname, a) == null;
      }
      if (q) {
        U ? t.location.replace(w.location) : t.location.assign(w.location);
        return;
      }
    }
    P = null;
    let A = U === !0 ? fe.Replace : fe.Push,
      { formMethod: z, formAction: J, formEncType: le } = y.navigation;
    !D && !I && z && J && le && (D = Gs(y.navigation));
    let Q = D || I;
    if (nv.has(w.status) && Q && lt(Q.formMethod))
      await un(A, V, {
        submission: ce({}, Q, { formAction: w.location }),
        preventScrollReset: T,
      });
    else {
      let q = yo(V, D);
      await un(A, V, {
        overrideNavigation: q,
        fetcherSubmission: I,
        preventScrollReset: T,
      });
    }
  }
  async function va(y, w, k, D, I) {
    let U = await Promise.all([
        ...k.map((z) => xr("loader", I, z, w, i, l, a)),
        ...D.map((z) =>
          z.matches && z.match && z.controller
            ? xr(
                "loader",
                Er(e.history, z.path, z.controller.signal),
                z.match,
                z.matches,
                i,
                l,
                a
              )
            : { type: pe.error, error: Ye(404, { pathname: z.path }) }
        ),
      ]),
      V = U.slice(0, k.length),
      A = U.slice(k.length);
    return (
      await Promise.all([
        Xs(
          y,
          k,
          V,
          V.map(() => I.signal),
          !1,
          c.loaderData
        ),
        Xs(
          y,
          D.map((z) => z.match),
          A,
          D.map((z) => (z.controller ? z.controller.signal : null)),
          !0
        ),
      ]),
      { results: U, loaderResults: V, fetcherResults: A }
    );
  }
  function Oi() {
    (Te = !0),
      ct.push(...Fi()),
      $.forEach((y, w) => {
        ae.has(w) && (ln.push(w), Mt(w));
      });
  }
  function sr(y, w, k) {
    let D = Fr(c.matches, w);
    dl(y), me({ errors: { [D.route.id]: k }, fetchers: new Map(c.fetchers) });
  }
  function dl(y) {
    let w = c.fetchers.get(y);
    ae.has(y) && !(w && w.state === "loading" && j.has(y)) && Mt(y),
      $.delete(y),
      j.delete(y),
      F.delete(y),
      Z.delete(y),
      c.fetchers.delete(y);
  }
  function Yf(y) {
    if (s.v7_fetcherPersist) {
      let w = (G.get(y) || 0) - 1;
      w <= 0 ? (G.delete(y), Z.add(y)) : G.set(y, w);
    } else dl(y);
    me({ fetchers: new Map(c.fetchers) });
  }
  function Mt(y) {
    let w = ae.get(y);
    W(w, "Expected fetch controller: " + y), w.abort(), ae.delete(y);
  }
  function ya(y) {
    for (let w of y) {
      let k = ma(w),
        D = Ft(k.data);
      c.fetchers.set(w, D);
    }
  }
  function ga() {
    let y = [],
      w = !1;
    for (let k of F) {
      let D = c.fetchers.get(k);
      W(D, "Expected fetcher: " + k),
        D.state === "loading" && (F.delete(k), y.push(k), (w = !0));
    }
    return ya(y), w;
  }
  function wa(y) {
    let w = [];
    for (let [k, D] of j)
      if (D < y) {
        let I = c.fetchers.get(k);
        W(I, "Expected fetcher: " + k),
          I.state === "loading" && (Mt(k), j.delete(k), w.push(k));
      }
    return ya(w), w.length > 0;
  }
  function Xf(y, w) {
    let k = c.blockers.get(y) || Sr;
    return Le.get(y) !== w && Le.set(y, w), k;
  }
  function Sa(y) {
    c.blockers.delete(y), Le.delete(y);
  }
  function fl(y, w) {
    let k = c.blockers.get(y) || Sr;
    W(
      (k.state === "unblocked" && w.state === "blocked") ||
        (k.state === "blocked" && w.state === "blocked") ||
        (k.state === "blocked" && w.state === "proceeding") ||
        (k.state === "blocked" && w.state === "unblocked") ||
        (k.state === "proceeding" && w.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + w.state
    );
    let D = new Map(c.blockers);
    D.set(y, w), me({ blockers: D });
  }
  function xa(y) {
    let { currentLocation: w, nextLocation: k, historyAction: D } = y;
    if (Le.size === 0) return;
    Le.size > 1 && en(!1, "A router only supports one blocker at a time");
    let I = Array.from(Le.entries()),
      [U, V] = I[I.length - 1],
      A = c.blockers.get(U);
    if (
      !(A && A.state === "proceeding") &&
      V({ currentLocation: w, nextLocation: k, historyAction: D })
    )
      return U;
  }
  function Fi(y) {
    let w = [];
    return (
      Ke.forEach((k, D) => {
        (!y || y(D)) && (k.cancel(), w.push(D), Ke.delete(D));
      }),
      w
    );
  }
  function Gf(y, w, k) {
    if (((m = y), (g = w), (E = k || null), !S && c.navigation === vo)) {
      S = !0;
      let D = ka(c.location, c.matches);
      D != null && me({ restoreScrollPosition: D });
    }
    return () => {
      (m = null), (g = null), (E = null);
    };
  }
  function Ea(y, w) {
    return (
      (E &&
        E(
          y,
          w.map((D) => Dm(D, c.loaderData))
        )) ||
      y.key
    );
  }
  function Jf(y, w) {
    if (m && g) {
      let k = Ea(y, w);
      m[k] = g();
    }
  }
  function ka(y, w) {
    if (m) {
      let k = Ea(y, w),
        D = m[k];
      if (typeof D == "number") return D;
    }
    return null;
  }
  function qf(y) {
    (i = {}), (u = du(y, l, void 0, i));
  }
  return (
    (h = {
      get basename() {
        return a;
      },
      get state() {
        return c;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: gt,
      subscribe: $f,
      enableScrollRestoration: Gf,
      navigate: ha,
      fetch: Hf,
      revalidate: Bf,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: ma,
      deleteFetcher: Yf,
      dispose: Rn,
      getBlocker: Xf,
      deleteBlocker: Sa,
      _internalFetchControllers: ae,
      _internalActiveDeferreds: Ke,
      _internalSetRoutes: qf,
    }),
    h
  );
}
function ov(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function fu(e, t, n, r, l, i, o) {
  let u, a;
  if (i != null && o !== "path") {
    u = [];
    for (let f of t)
      if ((u.push(f), f.route.id === i)) {
        a = f;
        break;
      }
  } else (u = t), (a = t[t.length - 1]);
  let s = sa(
    l || ".",
    Mi(u).map((f) => f.pathnameBase),
    lr(e.pathname, n) || e.pathname,
    o === "path"
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      a &&
      a.route.index &&
      !da(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : Pt([n, s.pathname])),
    kn(s)
  );
}
function As(e, t, n, r) {
  if (!r || !ov(r)) return { path: n };
  if (r.formMethod && !pv(r.formMethod))
    return { path: n, error: Ye(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ye(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    u = Ef(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!lt(o)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((E, g) => {
              let [S, N] = g;
              return (
                "" +
                E +
                S +
                "=" +
                N +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!lt(o)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, s;
  if (r.formData) (a = pu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = pu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = Ws(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = Ws(a));
    } catch {
      return l();
    }
  let f = {
    formMethod: o,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (lt(f.formMethod)) return { path: n, submission: f };
  let v = vt(n);
  return (
    t && v.search && da(v.search) && a.append("index", ""),
    (v.search = "?" + a),
    { path: kn(v), submission: f }
  );
}
function uv(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function $s(e, t, n, r, l, i, o, u, a, s, f, v, m, E) {
  let g = E ? Object.values(E)[0] : m ? Object.values(m)[0] : void 0,
    S = e.createURL(t.location),
    N = e.createURL(l),
    p = E ? Object.keys(E)[0] : void 0,
    h = uv(n, p).filter((C, T) => {
      if (C.route.lazy) return !0;
      if (C.route.loader == null) return !1;
      if (av(t.loaderData, t.matches[T], C) || o.some((B) => B === C.route.id))
        return !0;
      let P = t.matches[T],
        L = C;
      return Bs(
        C,
        ce(
          {
            currentUrl: S,
            currentParams: P.params,
            nextUrl: N,
            nextParams: L.params,
          },
          r,
          {
            actionResult: g,
            defaultShouldRevalidate:
              i ||
              S.pathname + S.search === N.pathname + N.search ||
              S.search !== N.search ||
              xf(P, L),
          }
        )
      );
    }),
    c = [];
  return (
    a.forEach((C, T) => {
      if (!n.some((re) => re.route.id === C.routeId)) return;
      let P = $n(f, C.path, v);
      if (!P) {
        c.push({
          key: T,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let L = t.fetchers.get(T),
        B = hu(P, C.path),
        O = !1;
      s.has(T)
        ? (O = !1)
        : u.includes(T)
        ? (O = !0)
        : L && L.state !== "idle" && L.data === void 0
        ? (O = i)
        : (O = Bs(
            B,
            ce(
              {
                currentUrl: S,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: N,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: g, defaultShouldRevalidate: i }
            )
          )),
        O &&
          c.push({
            key: T,
            routeId: C.routeId,
            path: C.path,
            matches: P,
            match: B,
            controller: new AbortController(),
          });
    }),
    [h, c]
  );
}
function av(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function xf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Bs(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Vs(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let a = l[o] !== void 0 && o !== "hasErrorBoundary";
    en(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !a && !Lm.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, ce({}, t(l), { lazy: void 0 }));
}
async function xr(e, t, n, r, l, i, o, u) {
  u === void 0 && (u = {});
  let a,
    s,
    f,
    v = (g) => {
      let S,
        N = new Promise((p, d) => (S = d));
      return (
        (f = () => S()),
        t.signal.addEventListener("abort", f),
        Promise.race([
          g({ request: t, params: n.params, context: u.requestContext }),
          N,
        ])
      );
    };
  try {
    let g = n.route[e];
    if (n.route.lazy)
      if (g) {
        let S,
          N = await Promise.all([
            v(g).catch((p) => {
              S = p;
            }),
            Vs(n.route, i, l),
          ]);
        if (S) throw S;
        s = N[0];
      } else if ((await Vs(n.route, i, l), (g = n.route[e]), g)) s = await v(g);
      else if (e === "action") {
        let S = new URL(t.url),
          N = S.pathname + S.search;
        throw Ye(405, { method: t.method, pathname: N, routeId: n.route.id });
      } else return { type: pe.data, data: void 0 };
    else if (g) s = await v(g);
    else {
      let S = new URL(t.url),
        N = S.pathname + S.search;
      throw Ye(404, { pathname: N });
    }
    W(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (g) {
    (a = pe.error), (s = g);
  } finally {
    f && t.signal.removeEventListener("abort", f);
  }
  if (fv(s)) {
    let g = s.status;
    if (tv.has(g)) {
      let p = s.headers.get("Location");
      if (
        (W(
          p,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !wf.test(p))
      )
        p = fu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, p);
      else if (!u.isStaticRequest) {
        let d = new URL(t.url),
          h = p.startsWith("//") ? new URL(d.protocol + p) : new URL(p),
          c = lr(h.pathname, o) != null;
        h.origin === d.origin && c && (p = h.pathname + h.search + h.hash);
      }
      if (u.isStaticRequest) throw (s.headers.set("Location", p), s);
      return {
        type: pe.redirect,
        status: g,
        location: p,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: a === pe.error ? pe.error : pe.data, response: s };
    let S,
      N = s.headers.get("Content-Type");
    return (
      N && /\bapplication\/json\b/.test(N)
        ? (S = await s.json())
        : (S = await s.text()),
      a === pe.error
        ? { type: a, error: new ca(g, s.statusText, S), headers: s.headers }
        : { type: pe.data, data: S, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === pe.error) return { type: a, error: s };
  if (dv(s)) {
    var m, E;
    return {
      type: pe.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((E = s.init) == null ? void 0 : E.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: pe.data, data: s };
}
function Er(e, t, n, r) {
  let l = e.createURL(Ef(t)).toString(),
    i = { signal: n };
  if (r && lt(r.formMethod)) {
    let { formMethod: o, formEncType: u } = r;
    (i.method = o.toUpperCase()),
      u === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": u })),
          (i.body = JSON.stringify(r.json)))
        : u === "text/plain"
        ? (i.body = r.text)
        : u === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = pu(r.formData))
        : (i.body = r.formData);
  }
  return new Request(l, i);
}
function pu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ws(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function sv(e, t, n, r, l) {
  let i = {},
    o = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((f, v) => {
      let m = t[v].route.id;
      if (
        (W(!Yn(f), "Cannot handle redirect results in processLoaderData"),
        Ur(f))
      ) {
        let E = Fr(e, m),
          g = f.error;
        r && ((g = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[E.route.id] == null && (o[E.route.id] = g),
          (i[m] = void 0),
          a || ((a = !0), (u = yf(f.error) ? f.error.status : 500)),
          f.headers && (s[m] = f.headers);
      } else
        mn(f)
          ? (l.set(m, f.deferredData), (i[m] = f.deferredData.data))
          : (i[m] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !a &&
            (u = f.statusCode),
          f.headers && (s[m] = f.headers);
    }),
    r && ((o = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: u || 200, loaderHeaders: s }
  );
}
function Hs(e, t, n, r, l, i, o, u) {
  let { loaderData: a, errors: s } = sv(t, n, r, l, u);
  for (let f = 0; f < i.length; f++) {
    let { key: v, match: m, controller: E } = i[f];
    W(
      o !== void 0 && o[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let g = o[f];
    if (!(E && E.signal.aborted))
      if (Ur(g)) {
        let S = Fr(e.matches, m == null ? void 0 : m.route.id);
        (s && s[S.route.id]) || (s = ce({}, s, { [S.route.id]: g.error })),
          e.fetchers.delete(v);
      } else if (Yn(g)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (mn(g)) W(!1, "Unhandled fetcher deferred data");
      else {
        let S = Ft(g.data);
        e.fetchers.set(v, S);
      }
  }
  return { loaderData: a, errors: s };
}
function Qs(e, t, n, r) {
  let l = ce({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function Fr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Ks(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Ye(e, t) {
  let { pathname: n, routeId: r, method: l, type: i } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (u = "defer() is not supported in actions")
          : i === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        l && n && r
          ? (u =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new ca(e || 500, o, new Error(u), !0)
  );
}
function Ys(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Yn(n)) return { result: n, idx: t };
  }
}
function Ef(e) {
  let t = typeof e == "string" ? vt(e) : e;
  return kn(ce({}, t, { hash: "" }));
}
function cv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function mn(e) {
  return e.type === pe.deferred;
}
function Ur(e) {
  return e.type === pe.error;
}
function Yn(e) {
  return (e && e.type) === pe.redirect;
}
function dv(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function fv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function pv(e) {
  return ev.has(e.toLowerCase());
}
function lt(e) {
  return Zm.has(e.toLowerCase());
}
async function Xs(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let u = n[o],
      a = t[o];
    if (!a) continue;
    let s = e.find((v) => v.route.id === a.route.id),
      f = s != null && !xf(s, a) && (i && i[a.route.id]) !== void 0;
    if (mn(u) && (l || f)) {
      let v = r[o];
      W(v, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await kf(u, v, l).then((m) => {
          m && (n[o] = m || n[o]);
        });
    }
  }
}
async function kf(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: pe.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: pe.error, error: l };
      }
    return { type: pe.data, data: e.deferredData.data };
  }
}
function da(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function hu(e, t) {
  let n = typeof t == "string" ? vt(t).search : t.search;
  if (e[e.length - 1].route.index && da(n || "")) return e[e.length - 1];
  let r = Mi(e);
  return r[r.length - 1];
}
function Gs(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function yo(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function hv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function kr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function mv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Ft(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function vv(e, t) {
  try {
    let n = e.sessionStorage.getItem(Sf);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function yv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Sf, JSON.stringify(n));
    } catch (r) {
      en(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
  return (
    (pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pi.apply(this, arguments)
  );
}
const zi = _.createContext(null),
  Cf = _.createContext(null),
  ir = _.createContext(null),
  Ii = _.createContext(null),
  jt = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Pf = _.createContext(null);
function gv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  sl() || W(!1);
  let { basename: r, navigator: l } = _.useContext(ir),
    { hash: i, pathname: o, search: u } = Tf(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : Pt([r, o])),
    l.createHref({ pathname: a, search: u, hash: i })
  );
}
function sl() {
  return _.useContext(Ii) != null;
}
function cl() {
  return sl() || W(!1), _.useContext(Ii).location;
}
function Rf(e) {
  _.useContext(ir).static || _.useLayoutEffect(e);
}
function _f() {
  let { isDataRoute: e } = _.useContext(jt);
  return e ? Dv() : wv();
}
function wv() {
  sl() || W(!1);
  let e = _.useContext(zi),
    { basename: t, navigator: n } = _.useContext(ir),
    { matches: r } = _.useContext(jt),
    { pathname: l } = cl(),
    i = JSON.stringify(Mi(r).map((a) => a.pathnameBase)),
    o = _.useRef(!1);
  return (
    Rf(() => {
      o.current = !0;
    }),
    _.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !o.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let f = sa(a, JSON.parse(i), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Pt([t, f.pathname])),
          (s.replace ? n.replace : n.push)(f, s.state, s);
      },
      [t, n, i, l, e]
    )
  );
}
const Sv = _.createContext(null);
function xv(e) {
  let t = _.useContext(jt).outlet;
  return t && _.createElement(Sv.Provider, { value: e }, t);
}
function Nf() {
  let { matches: e } = _.useContext(jt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Tf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = _.useContext(jt),
    { pathname: l } = cl(),
    i = JSON.stringify(Mi(r).map((o) => o.pathnameBase));
  return _.useMemo(() => sa(e, JSON.parse(i), l, n === "path"), [e, i, l, n]);
}
function Ev(e, t, n) {
  sl() || W(!1);
  let { navigator: r } = _.useContext(ir),
    { matches: l } = _.useContext(jt),
    i = l[l.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let a = cl(),
    s;
  if (t) {
    var f;
    let S = typeof t == "string" ? vt(t) : t;
    u === "/" || ((f = S.pathname) != null && f.startsWith(u)) || W(!1),
      (s = S);
  } else s = a;
  let v = s.pathname || "/",
    m = u === "/" ? v : v.slice(u.length) || "/",
    E = $n(e, { pathname: m }),
    g = _v(
      E &&
        E.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, o, S.params),
            pathname: Pt([
              u,
              r.encodeLocation
                ? r.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? u
                : Pt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && g
    ? _.createElement(
        Ii.Provider,
        {
          value: {
            location: pi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: fe.Pop,
          },
        },
        g
      )
    : g;
}
function kv() {
  let e = jv(),
    t = yf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: l }, n) : null,
    i
  );
}
const Cv = _.createElement(kv, null);
class Pv extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? _.createElement(
          jt.Provider,
          { value: this.props.routeContext },
          _.createElement(Pf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Rv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = _.useContext(zi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(jt.Provider, { value: t }, r)
  );
}
function _v(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let i = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let u = i.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id])
    );
    u >= 0 || W(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  return i.reduceRight((u, a, s) => {
    let f = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      v = null;
    n && (v = a.route.errorElement || Cv);
    let m = t.concat(i.slice(0, s + 1)),
      E = () => {
        let g;
        return (
          f
            ? (g = v)
            : a.route.Component
            ? (g = _.createElement(a.route.Component, null))
            : a.route.element
            ? (g = a.route.element)
            : (g = u),
          _.createElement(Rv, {
            match: a,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? _.createElement(Pv, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: f,
          children: E(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : E();
  }, null);
}
var Lf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Lf || {}),
  hi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(hi || {});
function Nv(e) {
  let t = _.useContext(zi);
  return t || W(!1), t;
}
function Tv(e) {
  let t = _.useContext(Cf);
  return t || W(!1), t;
}
function Lv(e) {
  let t = _.useContext(jt);
  return t || W(!1), t;
}
function jf(e) {
  let t = Lv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function jv() {
  var e;
  let t = _.useContext(Pf),
    n = Tv(hi.UseRouteError),
    r = jf(hi.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Dv() {
  let { router: e } = Nv(Lf.UseNavigateStable),
    t = jf(hi.UseNavigateStable),
    n = _.useRef(!1);
  return (
    Rf(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, pi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Df(e) {
  return xv(e.context);
}
function Mv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = fe.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  sl() && W(!1);
  let u = t.replace(/^\/*/, "/"),
    a = _.useMemo(() => ({ basename: u, navigator: i, static: o }), [u, i, o]);
  typeof r == "string" && (r = vt(r));
  let {
      pathname: s = "/",
      search: f = "",
      hash: v = "",
      state: m = null,
      key: E = "default",
    } = r,
    g = _.useMemo(() => {
      let S = lr(s, u);
      return S == null
        ? null
        : {
            location: { pathname: S, search: f, hash: v, state: m, key: E },
            navigationType: l,
          };
    }, [u, s, f, v, m, E, l]);
  return g == null
    ? null
    : _.createElement(
        ir.Provider,
        { value: a },
        _.createElement(Ii.Provider, { children: n, value: g })
      );
}
new Promise(() => {});
function zv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rl() {
  return (
    (rl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rl.apply(this, arguments)
  );
}
function Iv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Ov(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Fv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ov(e);
}
const Uv = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
  "unstable_viewTransition",
];
function Av(e, t) {
  return iv({
    basename: t == null ? void 0 : t.basename,
    future: rl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: _m({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || $v(),
    routes: e,
    mapRouteProperties: zv,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function $v() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = rl({}, t, { errors: Bv(t.errors) })), t;
}
function Bv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new ca(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const Vv = _.createContext({ isTransitioning: !1 }),
  Wv = _.createContext(new Map()),
  Hv = "startTransition",
  Js = vp[Hv];
function Qv(e) {
  Js ? Js(e) : e();
}
class Kv {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function Yv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = _.useState(n.state),
    [o, u] = _.useState(),
    [a, s] = _.useState({ isTransitioning: !1 }),
    [f, v] = _.useState(),
    [m, E] = _.useState(),
    [g, S] = _.useState(),
    N = _.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    d = _.useCallback(
      (P) => {
        p ? Qv(P) : P();
      },
      [p]
    ),
    h = _.useCallback(
      (P, L) => {
        let { deletedFetchers: B, unstable_viewTransitionOpts: O } = L;
        B.forEach((re) => N.current.delete(re)),
          P.fetchers.forEach((re, Te) => {
            re.data !== void 0 && N.current.set(Te, re.data);
          }),
          !O ||
          n.window == null ||
          typeof n.window.document.startViewTransition != "function"
            ? d(() => i(P))
            : m && f
            ? (f.resolve(),
              m.skipTransition(),
              S({
                state: P,
                currentLocation: O.currentLocation,
                nextLocation: O.nextLocation,
              }))
            : (u(P),
              s({
                isTransitioning: !0,
                currentLocation: O.currentLocation,
                nextLocation: O.nextLocation,
              }));
      },
      [n.window, m, f, N, d]
    );
  _.useLayoutEffect(() => n.subscribe(h), [n, h]),
    _.useEffect(() => {
      a.isTransitioning && v(new Kv());
    }, [a.isTransitioning]),
    _.useEffect(() => {
      if (f && o && n.window) {
        let P = o,
          L = f.promise,
          B = n.window.document.startViewTransition(async () => {
            d(() => i(P)), await L;
          });
        B.finished.finally(() => {
          v(void 0), E(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          E(B);
      }
    }, [d, o, f, n.window]),
    _.useEffect(() => {
      f && o && l.location.key === o.location.key && f.resolve();
    }, [f, m, l.location, o]),
    _.useEffect(() => {
      !a.isTransitioning &&
        g &&
        (u(g.state),
        s({
          isTransitioning: !0,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        S(void 0));
    }, [a.isTransitioning, g]);
  let c = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (P) => n.navigate(P),
        push: (P, L, B) =>
          n.navigate(P, {
            state: L,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset,
          }),
        replace: (P, L, B) =>
          n.navigate(P, {
            replace: !0,
            state: L,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset,
          }),
      }),
      [n]
    ),
    C = n.basename || "/",
    T = _.useMemo(
      () => ({ router: n, navigator: c, static: !1, basename: C }),
      [n, c, C]
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      zi.Provider,
      { value: T },
      _.createElement(
        Cf.Provider,
        { value: l },
        _.createElement(
          Wv.Provider,
          { value: N.current },
          _.createElement(
            Vv.Provider,
            { value: a },
            _.createElement(
              Mv,
              {
                basename: C,
                location: l.location,
                navigationType: l.historyAction,
                navigator: c,
              },
              l.initialized
                ? _.createElement(Xv, { routes: n.routes, state: l })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function Xv(e) {
  let { routes: t, state: n } = e;
  return Ev(t, void 0, n);
}
const Gv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Jv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ot = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: a,
        to: s,
        preventScrollReset: f,
        unstable_viewTransition: v,
      } = t,
      m = Iv(t, Uv),
      { basename: E } = _.useContext(ir),
      g,
      S = !1;
    if (typeof s == "string" && Jv.test(s) && ((g = s), Gv))
      try {
        let h = new URL(window.location.href),
          c = s.startsWith("//") ? new URL(h.protocol + s) : new URL(s),
          C = lr(c.pathname, E);
        c.origin === h.origin && C != null
          ? (s = C + c.search + c.hash)
          : (S = !0);
      } catch {}
    let N = gv(s, { relative: l }),
      p = qv(s, {
        replace: o,
        state: u,
        target: a,
        preventScrollReset: f,
        relative: l,
        unstable_viewTransition: v,
      });
    function d(h) {
      r && r(h), h.defaultPrevented || p(h);
    }
    return _.createElement(
      "a",
      rl({}, m, { href: g || N, onClick: S || i ? r : d, ref: n, target: a })
    );
  });
var qs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(qs || (qs = {}));
var Zs;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Zs || (Zs = {}));
function qv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    a = _f(),
    s = cl(),
    f = Tf(e, { relative: o });
  return _.useCallback(
    (v) => {
      if (Fv(v, n)) {
        v.preventDefault();
        let m = r !== void 0 ? r : kn(s) === kn(f);
        a(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: u,
        });
      }
    },
    [s, a, f, r, l, n, e, i, o, u]
  );
}
var Mf = { exports: {} },
  Zv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  bv = Zv,
  ey = bv;
function zf() {}
function If() {}
If.resetWarningCache = zf;
var ty = function () {
  function e(r, l, i, o, u, a) {
    if (a !== ey) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: If,
    resetWarningCache: zf,
  };
  return (n.PropTypes = n), n;
};
Mf.exports = ty();
var ny = Mf.exports;
const mi = bs(ny),
  Of = _.createContext({});
Ff.propTypes = { children: mi.node };
function Ff({ children: e }) {
  const [t, n] = _.useState(() => {
      const a = localStorage.getItem("obc-react-stock");
      if (!a) return [];
      const s = JSON.parse(a);
      return (
        s.forEach((f) => {
          (f.createdAt = new Date(f.createdAt)),
            (f.updatedAt = new Date(f.updatedAt));
        }),
        s
      );
    }),
    u = {
      items: t,
      addItem: (a) => {
        n((s) => {
          const f = [a, ...s];
          return localStorage.setItem("obc-react-stock", JSON.stringify(f)), f;
        });
      },
      deleteItem: (a) => {
        n((s) => {
          const f = s.filter((v) => v.id !== a);
          return localStorage.setItem("obc-react-stock", JSON.stringify(f)), f;
        });
      },
      getItem: (a) => t.find((s) => s.id === +a),
      updateItem: (a, s) => {
        n((f) => {
          const v = f.findIndex((E) => E.id === +a),
            m = [...f];
          return (
            Object.assign(m[v], s, { updatedAt: new Date() }),
            localStorage.setItem("obc-react-stock", JSON.stringify(m)),
            m
          );
        });
      },
    };
  return x.jsx(Of.Provider, { value: u, children: e });
}
function or() {
  return _.useContext(Of);
}
function ry() {
  const { items: e } = or(),
    t = e.length,
    n = e.reduce((s, f) => +s + +f.quantity, 0),
    r = new Date(),
    l = new Date();
  l.setDate(l.getDate() - 10);
  const i = e.filter((s) => s.createdAt >= l && s.createdAt <= r),
    o = i.length,
    u = e.filter((s) => s.quantity < 10),
    a = u.length;
  return x.jsxs("main", {
    children: [
      x.jsx("h1", { children: "Resumo" }),
      x.jsxs("div", {
        className: "row",
        children: [
          x.jsxs("div", {
            className: "dashboard-card",
            children: ["Diversidade de itens", x.jsx("span", { children: t })],
          }),
          x.jsxs("div", {
            className: "dashboard-card",
            children: ["Inventário total", x.jsx("span", { children: n })],
          }),
          x.jsxs("div", {
            className: "dashboard-card",
            children: ["Itens recentes", x.jsx("span", { children: o })],
          }),
          x.jsxs("div", {
            className: "dashboard-card",
            children: ["Itens acabando", x.jsx("span", { children: a })],
          }),
        ],
      }),
      x.jsxs("div", {
        className: "row",
        children: [
          x.jsx("div", {
            className: "recent",
            children: x.jsxs("table", {
              children: [
                x.jsx("thead", {
                  children: x.jsxs("tr", {
                    children: [
                      x.jsx("th", { children: "Itens Recentes" }),
                      x.jsx("th", { children: "Ações" }),
                    ],
                  }),
                }),
                x.jsx("tbody", {
                  children: i.map((s) =>
                    x.jsxs(
                      "tr",
                      {
                        children: [
                          x.jsx("td", { children: s.name }),
                          x.jsx("td", {
                            children: x.jsx(ot, {
                              to: `/items/${s.id}`,
                              className: "button is-small",
                              children: "Ver",
                            }),
                          }),
                        ],
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          }),
          x.jsx("div", {
            className: "low",
            children: x.jsxs("table", {
              children: [
                x.jsx("thead", {
                  children: x.jsxs("tr", {
                    children: [
                      x.jsx("th", { children: "Itens acabando" }),
                      x.jsx("th", { children: "Qtd." }),
                      x.jsx("th", { children: "Ações" }),
                    ],
                  }),
                }),
                x.jsx("tbody", {
                  children: u.map((s) =>
                    x.jsxs(
                      "tr",
                      {
                        children: [
                          x.jsx("td", { children: s.name }),
                          x.jsx("td", { children: s.quantity }),
                          x.jsx("td", {
                            children: x.jsx(ot, {
                              to: `/items/${s.id}`,
                              className: "button is-small",
                              children: "Ver",
                            }),
                          }),
                        ],
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const ly = "./assets/compassslogo-8fd1934d.png";
function iy() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsxs("header", {
        children: [
          x.jsx(ot, {
            to: "/",
            className: "logo",
            children: "Gerenciamento de estoque - CompaSSS",
          }),
          x.jsxs("nav", {
            children: [
              x.jsx(ot, { to: "/", children: "Início" }),
              x.jsx(ot, { to: "/items", children: "Itens" }),
            ],
          }),
        ],
      }),
      x.jsx("div", { children: x.jsx(Df, {}) }),
      x.jsx("footer", {
        children: x.jsx(ot, { to: "/", children: x.jsx("img", { src: ly }) }),
      }),
    ],
  });
}
fa.propTypes = { itemId: mi.number.isRequired, itemName: mi.string.isRequired };
function fa({ itemId: e, itemName: t }) {
  const { deleteItem: n } = or(),
    r = _f(),
    l = () => {
      confirm(`Tem certeza que deseja excluir ${t}?`) && (n(e), r("/items"));
    };
  return x.jsx("button", {
    className: "button is-danger is-small",
    onClick: l,
    children: "Excluir",
  });
}
function oy() {
  const { items: e } = or();
  return x.jsxs("table", {
    children: [
      x.jsx("thead", {
        children: x.jsxs("tr", {
          children: [
            x.jsx("th", { children: "Contrato" }),
            x.jsx("th", { children: "Nome" }),
            x.jsx("th", { children: "Em Estoque" }),
            x.jsx("th", { children: "Categoria" }),
            x.jsx("th", { children: "Ações" }),
          ],
        }),
      }),
      x.jsx("tbody", {
        children: e.map((t) =>
          x.jsxs(
            "tr",
            {
              children: [
                x.jsx("td", { children: t.contract }),
                x.jsx("td", { children: t.name }),
                x.jsxs("td", { children: [t.quantity, " unid."] }),
                x.jsx("td", { children: t.category }),
                x.jsxs("td", {
                  children: [
                    x.jsx(ot, {
                      to: `/items/${t.id}`,
                      className: "button is-primary is-small",
                      children: "Ver",
                    }),
                    x.jsx(ot, {
                      to: `/items/${t.id}/update`,
                      className: "button is-small",
                      children: "Atualizar",
                    }),
                    x.jsx(fa, { itemId: t.id, itemName: t.name }),
                  ],
                }),
              ],
            },
            t.id
          )
        ),
      }),
    ],
  });
}
function uy() {
  return x.jsx(oy, {});
}
const Uf = ["BMS", "SDAI", "SCA", "CFTV"];
var vi, Af;
class ay {
  constructor({
    name: t,
    description: n,
    quantity: r,
    contract: l,
    category: i,
  }) {
    Pa(this, vi);
    (this.id = Math.floor(Math.random() * 1e7)),
      (this.name = t),
      (this.description = n),
      (this.quantity = +r),
      (this.contract = l),
      (this.category = i),
      (this.createdAt = new Date()),
      (this.updatedAt = new Date()),
      Ra(this, vi, Af).call(this);
  }
}
(vi = new WeakSet()),
  (Af = function () {
    const t = typeof this.name == "string",
      n = typeof this.description == "string",
      r = typeof this.quantity == "number" && Number.isInteger(this.quantity),
      l = typeof this.contract == "string",
      i = Uf.includes(this.category);
    if (!(t && n && r && l && i)) throw new Error("Invalid item!");
  });
pa.propTypes = { itemToUpdate: mi.object };
function pa({ itemToUpdate: e }) {
  const t = {
      name: "",
      description: "",
      quantity: 0,
      contract: "",
      category: "",
    },
    [n, r] = _.useState(e || t),
    { addItem: l, updateItem: i } = or(),
    o = _.useRef(null),
    u = (s) => {
      r((f) => ({ ...f, [s.target.name]: s.target.value }));
    },
    a = (s) => {
      s.preventDefault();
      try {
        if (e) i(e.id, n), alert("Item atualizado com sucesso!");
        else {
          const f = new ay(n);
          l(f), r(t), alert("Item cadastrado com sucesso!");
        }
      } catch (f) {
        console.log(f.message), alert("Ocorreu um erro.");
      } finally {
        o.current.focus();
      }
    };
  return x.jsxs("form", {
    onSubmit: a,
    children: [
      x.jsxs("div", {
        className: "row",
        children: [
          x.jsxs("div", {
            children: [
              x.jsx("label", { htmlFor: "name", children: "Nome" }),
              x.jsx("input", {
                type: "text",
                name: "name",
                id: "name",
                required: !0,
                ref: o,
                value: n.name,
                onChange: u,
              }),
            ],
          }),
          x.jsxs("div", {
            children: [
              x.jsx("label", { htmlFor: "quantity", children: "Quantidade" }),
              x.jsx("input", {
                type: "number",
                name: "quantity",
                id: "quantity",
                required: !0,
                min: 0,
                step: 1,
                value: n.quantity,
                onChange: u,
              }),
            ],
          }),
          x.jsxs("div", {
            children: [
              x.jsx("label", { htmlFor: "contract", children: "Contrato" }),
              x.jsx("input", {
                type: "string",
                name: "contract",
                id: "contract",
                required: !0,
                min: 0,
                step: 0.01,
                value: n.contract,
                onChange: u,
              }),
            ],
          }),
          x.jsxs("div", {
            children: [
              x.jsx("label", { htmlFor: "category", children: "Categoria" }),
              x.jsxs("select", {
                name: "category",
                id: "category",
                required: !0,
                value: n.category,
                onChange: u,
                children: [
                  x.jsx("option", {
                    disabled: !0,
                    value: "",
                    children: "Selecione uma categoria...",
                  }),
                  Uf.map((s) =>
                    x.jsx(
                      "option",
                      {
                        value: s,
                        defaultChecked: n.category === s,
                        children: s,
                      },
                      s
                    )
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
      x.jsxs("div", {
        className: "form-control",
        children: [
          x.jsx("label", { htmlFor: "description", children: "Descrição" }),
          x.jsx("textarea", {
            name: "description",
            id: "description",
            required: !0,
            rows: 6,
            value: n.description,
            onChange: u,
          }),
        ],
      }),
      x.jsx("button", {
        className: "button is-primary is-large",
        children: "Salvar",
      }),
    ],
  });
}
function sy() {
  return x.jsx(pa, {});
}
function cy() {
  const { getItem: e } = or(),
    { id: t } = Nf(),
    n = e(t);
  return x.jsxs("div", {
    className: "item",
    children: [
      x.jsx("h2", { children: n.name }),
      x.jsx(ot, {
        to: `/items/${n.id}/update`,
        className: "button is-small",
        children: "Atualizar",
      }),
      x.jsx(fa, { itemId: n.id, itemName: n.name }),
      x.jsxs("div", {
        className: "row",
        children: [
          x.jsxs("span", { children: ["Categoria: ", n.category] }),
          x.jsxs("span", { children: ["Quantidade em estoque: ", n.quantity] }),
          x.jsxs("span", { children: ["Contrato: ", n.contract] }),
        ],
      }),
      x.jsx("p", { children: n.description }),
      x.jsxs("div", {
        className: "row",
        children: [
          x.jsxs("p", {
            children: ["Cadastrado em: ", n.createdAt.toDateString()],
          }),
          x.jsxs("p", {
            children: ["Atualizado em: ", n.updatedAt.toDateString()],
          }),
        ],
      }),
    ],
  });
}
function dy() {
  const { getItem: e } = or(),
    { id: t } = Nf(),
    n = e(t);
  return x.jsxs(x.Fragment, {
    children: [
      x.jsxs("h2", { children: ["Atualizar Item - ", n.name] }),
      x.jsx(pa, { itemToUpdate: n }),
    ],
  });
}
function fy() {
  const { pathname: e } = cl();
  return x.jsxs("main", {
    children: [
      x.jsx("h1", { children: "Lista de equipamentos" }),
      x.jsxs("div", {
        className: "tabs",
        children: [
          x.jsx(ot, {
            to: "/items",
            className: `tab ${e === "/items" ? "active" : ""}`,
            children: "Todos os itens",
          }),
          x.jsx(ot, {
            to: "/items/new",
            className: `tab ${e === "/items/new" ? "active" : ""}`,
            children: "Novo item",
          }),
        ],
      }),
      x.jsx(Df, {}),
    ],
  });
}
const py = Av([
  {
    path: "/",
    element: x.jsx(iy, {}),
    children: [
      { index: !0, element: x.jsx(ry, {}) },
      {
        path: "items",
        element: x.jsx(fy, {}),
        children: [
          { index: !0, element: x.jsx(uy, {}) },
          { path: "new", element: x.jsx(sy, {}) },
          { path: ":id", element: x.jsx(cy, {}) },
          { path: ":id/update", element: x.jsx(dy, {}) },
        ],
      },
    ],
  },
]);
function hy() {
  return x.jsx(Ff, { children: x.jsx(Yv, { router: py }) });
}
go.createRoot(document.getElementById("root")).render(
  x.jsx(sc.StrictMode, { children: x.jsx(hy, {}) })
);
