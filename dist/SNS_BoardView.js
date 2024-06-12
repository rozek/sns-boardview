var _a = Object.defineProperty;
var Sa = (n, e, t) => e in n ? _a(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ie = (n, e, t) => (Sa(n, typeof e != "symbol" ? e + "" : e, t), t);
function Ne(n) {
  var e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(n);
  if (e == null)
    throw new Error(n);
  var t = new Error(e[2]);
  throw t.name = e[1], t;
}
function ya(n) {
  return typeof n == "boolean" || n instanceof Boolean;
}
function xa(n) {
  return typeof n != "number" && !(n instanceof Number) ? !1 : (n = n.valueOf(), isFinite(n) && Math.round(n) === n);
}
function ba(n) {
  return typeof n != "number" && !(n instanceof Number) ? !1 : (n = n.valueOf(), isFinite(n) && Math.round(n) === n && n >= 0);
}
function $a(n) {
  return typeof n != "number" && !(n instanceof Number) ? !1 : (n = n.valueOf(), isFinite(n) && Math.round(n) === n && n >= 1);
}
function fs(n, e) {
  return (typeof n == "string" || n instanceof String) && e.test(n.valueOf());
}
var va = /^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function wa(n) {
  return fs(n, va);
}
var ka = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function Va(n) {
  return fs(n, ka);
}
function Ia(n) {
  return typeof n == "function";
}
var Wa = Array.isArray;
function Pa(n, e, t, i) {
  if (Wa(n))
    try {
      for (var o = 0, r = n.length; o < r; o++)
        if (e(n[o]) == !1)
          return !1;
      return !(t != null && n.length < t || i != null && n.length > i);
    } catch {
    }
  return !1;
}
function Ca(n, e) {
  return e.indexOf(n) >= 0;
}
var rt = !0;
function Da(n, e, t, i, o) {
  if (e == null) {
    if (i)
      return e;
    Ne("MissingArgument: no ".concat(Ge(n), " given"));
  } else if (t(e))
    switch (!0) {
      case e instanceof Boolean:
      case e instanceof Number:
      case e instanceof String:
        return e.valueOf();
      default:
        return e;
    }
  else
    Ne("InvalidArgument: the given ".concat(Ge(n), " is no valid ").concat(Ge(o)));
}
function ot(n, e, t) {
  var i = function(a, u) {
    return Da(a, u, n, e, t);
  }, o = n.name;
  if (o != null && /^ValueIs/.test(o)) {
    var r = o.replace(
      // derive name from validator
      /^ValueIs/,
      e ? "allow" : "expect"
    );
    return Fa(i, r);
  } else
    return i;
}
function Fa(n, e) {
  if (n == null && Ne("MissingArgument: no function given"), typeof n != "function" && Ne("InvalidArgument: the given 1st Argument is not a JavaScript function"), e == null && Ne("MissingArgument: no desired name given"), typeof e != "string" && !(e instanceof String) && Ne("InvalidArgument: the given desired name is not a string"), n.name === e)
    return n;
  try {
    if (Object.defineProperty(n, "name", { value: e }), n.name === e)
      return n;
  } catch {
  }
  var t = new Function("originalFunction", "return function " + e + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}");
  return t(n);
}
var Na = /* @__PURE__ */ ot(ya, rt, "boolean value"), vi = /* @__PURE__ */ ot(xa, rt, "integral numeric value"), Fn = /* @__PURE__ */ ot(ba, rt, "ordinal number"), wi = /* @__PURE__ */ ot($a, rt, "cardinal number"), La = /* @__PURE__ */ ot(wa, rt, "literal text"), xn = /* @__PURE__ */ ot(Va, rt, "single line of text"), Wt = /* @__PURE__ */ ot(Ia, rt, "JavaScript function");
function ki(n, e, t, i, o, r) {
  return e == null ? e : Ba(n, e, t, i, o, r);
}
function Ta(n, e, t, i, o, r) {
  if (e == null && Ne("MissingArgument: no ".concat(Ge(n), " given")), Pa(e, t, o, r))
    return e;
  Ne("InvalidArgument: the given ".concat(Ge(n), " is ") + (i == null ? "either not a list or contains invalid elements" : "no " + Ge(i)));
}
var Ba = Ta;
function Vi(n, e, t) {
  return e == null ? e : Ha(n, e, t);
}
function Aa(n, e, t) {
  if (e == null && Ne("MissingArgument: no ".concat(Ge(n), " given")), Ca(e, t))
    return (
      // unboxes any primitives
      e == null || typeof e.valueOf != "function" ? e : e.valueOf()
    );
  Ne("InvalidArgument: the given ".concat(Ge(n), " is not among the supported values"));
}
var Ha = Aa;
function Ge(n) {
  var e = /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g, t = /[\x00-\x1f\x7f-\x9f]/g;
  return n.replace(e, function(i) {
    return i === "\\" ? "\\\\" : i;
  }).replace(t, function(i) {
    switch (i) {
      case "\0":
        return "\\0";
      case "\b":
        return "\\b";
      case "\f":
        return "\\f";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
      case "	":
        return "\\t";
      case "\v":
        return "\\v";
      default: {
        var o = i.charCodeAt(0).toString(16);
        return "\\x" + "00".slice(o.length) + o;
      }
    }
  });
}
var Ea = Object.defineProperty, Ma = (n, e, t) => e in n ? Ea(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, O = (n, e, t) => (Ma(n, typeof e != "symbol" ? e + "" : e, t), t);
function we(n) {
  var e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(n);
  if (e == null)
    throw new Error(n);
  var t = new Error(e[2]);
  throw t.name = e[1], t;
}
function sn(n) {
  return typeof n == "boolean" || n instanceof Boolean;
}
function ht(n) {
  return typeof n == "number" || n instanceof Number;
}
function gt(n) {
  return (typeof n == "number" || n instanceof Number) && isFinite(n.valueOf());
}
function Ua(n, e, t, i, o) {
  if (i === void 0 && (i = !0), o === void 0 && (o = !0), !ht(n) || isNaN(n))
    return !1;
  if (gt(e)) {
    if (gt(t)) {
      if (n < e || !i && n === e || n > t || !o && n === t)
        return !1;
    } else if (n < e || !i && n === e)
      return !1;
  } else if (gt(t) && (n > t || !o && n === t))
    return !1;
  return !0;
}
function an(n) {
  return typeof n != "number" && !(n instanceof Number) ? !1 : (n = n.valueOf(), isFinite(n) && Math.round(n) === n);
}
function Jn(n) {
  return typeof n != "number" && !(n instanceof Number) ? !1 : (n = n.valueOf(), isFinite(n) && Math.round(n) === n && n >= 0);
}
function Xa(n) {
  return typeof n != "number" && !(n instanceof Number) ? !1 : (n = n.valueOf(), isFinite(n) && Math.round(n) === n && n >= 1);
}
function xt(n) {
  return typeof n == "string" || n instanceof String;
}
function Ie(n, e) {
  return (typeof n == "string" || n instanceof String) && e.test(n.valueOf());
}
var Ga = /^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function Kn(n) {
  return Ie(n, Ga);
}
var za = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function Ce(n) {
  return Ie(n, za);
}
function ms(n) {
  return typeof n == "function";
}
function Qn(n) {
  return n != null && typeof n == "object";
}
function bt(n) {
  return n != null && typeof n == "object" && Object.getPrototypeOf(n) === Object.prototype;
}
var _s = Array.isArray;
function Ii(n, e, t) {
  if (_s(n)) {
    for (var i = 0, o = n.length; i < o; i++)
      if (n[i] === void 0)
        return !1;
    return !0;
  }
  return !1;
}
function $t(n, e, t, i) {
  if (_s(n))
    try {
      for (var o = 0, r = n.length; o < r; o++)
        if (e(n[o]) == !1)
          return !1;
      return !(t != null && n.length < t || i != null && n.length > i);
    } catch {
    }
  return !1;
}
function Ss(n, e) {
  return e.indexOf(n) >= 0;
}
function ln(n) {
  return xt(n) && (ol.hasOwnProperty(n) || /^#[a-fA-F0-9]{6}$/.test(n) || /^#[a-fA-F0-9]{8}$/.test(n) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(n) || // not perfect
  /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(n));
}
var Oa = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
function ys(n) {
  return Ie(n, Oa);
}
var Ra = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function ei(n) {
  if (!Ie(n, Ra) || n === "")
    return !1;
  try {
    return new URL(n, "file://"), !0;
  } catch {
    return !1;
  }
}
var oe = !1, K = !0;
function ja(n, e, t, i, o) {
  if (e == null) {
    if (i)
      return e;
    we("MissingArgument: no ".concat(ke(n), " given"));
  } else if (t(e))
    switch (!0) {
      case e instanceof Boolean:
      case e instanceof Number:
      case e instanceof String:
        return e.valueOf();
      default:
        return e;
    }
  else
    we("InvalidArgument: the given ".concat(ke(n), " is no valid ").concat(ke(o)));
}
function U(n, e, t) {
  var i = function(a, u) {
    return ja(a, u, n, e, t);
  }, o = n.name;
  if (o != null && /^ValueIs/.test(o)) {
    var r = o.replace(
      // derive name from validator
      /^ValueIs/,
      e ? "allow" : "expect"
    );
    return Za(i, r);
  } else
    return i;
}
function Za(n, e) {
  if (n == null && we("MissingArgument: no function given"), typeof n != "function" && we("InvalidArgument: the given 1st Argument is not a JavaScript function"), e == null && we("MissingArgument: no desired name given"), typeof e != "string" && !(e instanceof String) && we("InvalidArgument: the given desired name is not a string"), n.name === e)
    return n;
  try {
    if (Object.defineProperty(n, "name", { value: e }), n.name === e)
      return n;
  } catch {
  }
  var t = new Function("originalFunction", "return function " + e + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}");
  return t(n);
}
function xs(n, e) {
  if (e == null)
    we("MissingArgument: no ".concat(ke(n), " given"));
  else
    return e.valueOf();
}
var Ya = /* @__PURE__ */ U(sn, K, "boolean value"), bn = /* @__PURE__ */ U(sn, oe, "boolean value"), Tt = /* @__PURE__ */ U(an, K, "integral numeric value"), et = /* @__PURE__ */ U(an, oe, "integral numeric value");
function qa(n, e, t, i) {
  return e == null ? e : Ja(n, e, t, i);
}
function _t(n, e, t, i) {
  if (et(n, e), isNaN(e) && we("InvalidArgument: the given ".concat(ke(n), " is not-a-number")), t != null && isFinite(t)) {
    if (i != null && isFinite(i)) {
      if (e < t || e > i)
        throw new RangeError("the given ".concat(ke(n), " (").concat(e, ") is outside ") + "the allowed range (".concat(t, "...").concat(i, ")"));
    } else if (e < t)
      throw new RangeError("the given ".concat(ke(n), " is below the allowed ") + "minimum (".concat(e, " < ").concat(t, ")"));
  } else if (i != null && isFinite(i) && e > i)
    throw new RangeError("the given ".concat(ke(n), " exceeds the allowed ") + "maximum (".concat(e, " > ").concat(i, ")"));
  return e.valueOf();
}
var Ja = _t, Wi = /* @__PURE__ */ U(Jn, K, "ordinal number"), Pi = /* @__PURE__ */ U(Xa, K, "cardinal number"), Ci = /* @__PURE__ */ U(Kn, K, "literal text"), Ka = /* @__PURE__ */ U(Ce, K, "single line of text"), Nn = /* @__PURE__ */ U(Ce, oe, "single line of text"), Bt = /* @__PURE__ */ U(ms, K, "JavaScript function"), ft = /* @__PURE__ */ U(ms, oe, "JavaScript function"), Qa = /* @__PURE__ */ U(bt, K, '"plain" JavaScript object');
function el(n, e, t, i, o, r) {
  if (e == null && we("MissingArgument: no ".concat(ke(n), " given")), $t(e, t, o, r))
    return e;
  we("InvalidArgument: the given ".concat(ke(n), " is ") + "either not a list or contains invalid elements");
}
function tl(n, e, t) {
  return e == null ? e : il(n, e, t);
}
function nl(n, e, t) {
  if (e == null && we("MissingArgument: no ".concat(ke(n), " given")), Ss(e, t))
    return (
      // unboxes any primitives
      e == null || typeof e.valueOf != "function" ? e : e.valueOf()
    );
  we("InvalidArgument: the given ".concat(ke(n), " is not among the supported values"));
}
var il = nl, Di = /* @__PURE__ */ U(ln, K, "CSS color specification"), bs = /* @__PURE__ */ U(ei, K, "URL");
function ke(n) {
  var e = /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g, t = /[\x00-\x1f\x7f-\x9f]/g;
  return n.replace(e, function(i) {
    return i === "\\" ? "\\\\" : i;
  }).replace(t, function(i) {
    switch (i) {
      case "\0":
        return "\\0";
      case "\b":
        return "\\b";
      case "\f":
        return "\\f";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
      case "	":
        return "\\t";
      case "\v":
        return "\\v";
      default: {
        var o = i.charCodeAt(0).toString(16);
        return "\\x" + "00".slice(o.length) + o;
      }
    }
  });
}
function rl(n, e) {
  e === void 0 && (e = '"');
  var t = /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g, i = /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g, o = /[\x00-\x1f\x7f-\x9f]/g;
  return n.replace(e === "'" ? t : i, function(r) {
    switch (r) {
      case "'":
        return "\\'";
      case '"':
        return '\\"';
      case "\\":
        return "\\\\";
      default:
        return r;
    }
  }).replace(o, function(r) {
    switch (r) {
      case "\0":
        return "\\0";
      case "\b":
        return "\\b";
      case "\f":
        return "\\f";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
      case "	":
        return "\\t";
      case "\v":
        return "\\v";
      default: {
        var a = r.charCodeAt(0).toString(16);
        return "\\x" + "00".slice(a.length) + a;
      }
    }
  });
}
function st(n, e) {
  return e === void 0 && (e = '"'), e + rl(n, e) + e;
}
function mt(n, e, t) {
  if (n === e)
    return !1;
  var i = typeof n;
  if (i !== typeof e)
    return !0;
  function o(a, u, d) {
    if (!Array.isArray(u) || a.length !== u.length)
      return !0;
    for (var s = 0, c = a.length; s < c; s++)
      if (mt(a[s], u[s]))
        return !0;
    return !1;
  }
  function r(a, u, d) {
    if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(u))
      return !0;
    for (var s in a)
      if (!(s in u))
        return !0;
    for (var s in u)
      if (!(s in a) || mt(a[s], u[s]))
        return !0;
    return !1;
  }
  switch (i) {
    case "undefined":
    case "boolean":
    case "string":
    case "function":
      return !0;
    case "number":
      return isNaN(n) !== isNaN(e) || Math.abs(n - e) > Number.EPSILON;
    case "object":
      return n == null || e == null ? !0 : Array.isArray(n) ? o(n, e) : r(n, e);
    default:
      return !0;
  }
  return !0;
}
var ol = {
  transparent: "rgba(0,0,0,0,0.0)",
  aliceblue: "rgba(240,248,255,1.0)",
  lightpink: "rgba(255,182,193,1.0)",
  antiquewhite: "rgba(250,235,215,1.0)",
  lightsalmon: "rgba(255,160,122,1.0)",
  aqua: "rgba(0,255,255,1.0)",
  lightseagreen: "rgba(32,178,170,1.0)",
  aquamarine: "rgba(127,255,212,1.0)",
  lightskyblue: "rgba(135,206,250,1.0)",
  azure: "rgba(240,255,255,1.0)",
  lightslategray: "rgba(119,136,153,1.0)",
  beige: "rgba(245,245,220,1.0)",
  lightslategrey: "rgba(119,136,153,1.0)",
  bisque: "rgba(255,228,196,1.0)",
  lightsteelblue: "rgba(176,196,222,1.0)",
  black: "rgba(0,0,0,1.0)",
  lightyellow: "rgba(255,255,224,1.0)",
  blanchedalmond: "rgba(255,235,205,1.0)",
  lime: "rgba(0,255,0,1.0)",
  blue: "rgba(0,0,255,1.0)",
  limegreen: "rgba(50,205,50,1.0)",
  blueviolet: "rgba(138,43,226,1.0)",
  linen: "rgba(250,240,230,1.0)",
  brown: "rgba(165,42,42,1.0)",
  magenta: "rgba(255,0,255,1.0)",
  burlywood: "rgba(222,184,135,1.0)",
  maroon: "rgba(128,0,0,1.0)",
  cadetblue: "rgba(95,158,160,1.0)",
  mediumaquamarine: "rgba(102,205,170,1.0)",
  chartreuse: "rgba(127,255,0,1.0)",
  mediumblue: "rgba(0,0,205,1.0)",
  chocolate: "rgba(210,105,30,1.0)",
  mediumorchid: "rgba(186,85,211,1.0)",
  coral: "rgba(255,127,80,1.0)",
  mediumpurple: "rgba(147,112,219,1.0)",
  cornflowerblue: "rgba(100,149,237,1.0)",
  mediumseagreen: "rgba(60,179,113,1.0)",
  cornsilk: "rgba(255,248,220,1.0)",
  mediumslateblue: "rgba(123,104,238,1.0)",
  crimson: "rgba(220,20,60,1.0)",
  mediumspringgreen: "rgba(0,250,154,1.0)",
  cyan: "rgba(0,255,255,1.0)",
  mediumturquoise: "rgba(72,209,204,1.0)",
  darkblue: "rgba(0,0,139,1.0)",
  mediumvioletred: "rgba(199,21,133,1.0)",
  darkcyan: "rgba(0,139,139,1.0)",
  midnightblue: "rgba(25,25,112,1.0)",
  darkgoldenrod: "rgba(184,134,11,1.0)",
  mintcream: "rgba(245,255,250,1.0)",
  darkgray: "rgba(169,169,169,1.0)",
  mistyrose: "rgba(255,228,225,1.0)",
  darkgreen: "rgba(0,100,0,1.0)",
  moccasin: "rgba(255,228,181,1.0)",
  darkgrey: "rgba(169,169,169,1.0)",
  navajowhite: "rgba(255,222,173,1.0)",
  darkkhaki: "rgba(189,183,107,1.0)",
  navy: "rgba(0,0,128,1.0)",
  darkmagenta: "rgba(139,0,139,1.0)",
  oldlace: "rgba(253,245,230,1.0)",
  darkolivegreen: "rgba(85,107,47,1.0)",
  olive: "rgba(128,128,0,1.0)",
  darkorange: "rgba(255,140,0,1.0)",
  olivedrab: "rgba(107,142,35,1.0)",
  darkorchid: "rgba(153,50,204,1.0)",
  orange: "rgba(255,165,0,1.0)",
  darkred: "rgba(139,0,0,1.0)",
  orangered: "rgba(255,69,0,1.0)",
  darksalmon: "rgba(233,150,122,1.0)",
  orchid: "rgba(218,112,214,1.0)",
  darkseagreen: "rgba(143,188,143,1.0)",
  palegoldenrod: "rgba(238,232,170,1.0)",
  darkslateblue: "rgba(72,61,139,1.0)",
  palegreen: "rgba(152,251,152,1.0)",
  darkslategray: "rgba(47,79,79,1.0)",
  paleturquoise: "rgba(175,238,238,1.0)",
  darkslategrey: "rgba(47,79,79,1.0)",
  palevioletred: "rgba(219,112,147,1.0)",
  darkturquoise: "rgba(0,206,209,1.0)",
  papayawhip: "rgba(255,239,213,1.0)",
  darkviolet: "rgba(148,0,211,1.0)",
  peachpuff: "rgba(255,218,185,1.0)",
  deeppink: "rgba(255,20,147,1.0)",
  peru: "rgba(205,133,63,1.0)",
  deepskyblue: "rgba(0,191,255,1.0)",
  pink: "rgba(255,192,203,1.0)",
  dimgray: "rgba(105,105,105,1.0)",
  plum: "rgba(221,160,221,1.0)",
  dimgrey: "rgba(105,105,105,1.0)",
  powderblue: "rgba(176,224,230,1.0)",
  dodgerblue: "rgba(30,144,255,1.0)",
  purple: "rgba(128,0,128,1.0)",
  firebrick: "rgba(178,34,34,1.0)",
  red: "rgba(255,0,0,1.0)",
  floralwhite: "rgba(255,250,240,1.0)",
  rosybrown: "rgba(188,143,143,1.0)",
  forestgreen: "rgba(34,139,34,1.0)",
  royalblue: "rgba(65,105,225,1.0)",
  fuchsia: "rgba(255,0,255,1.0)",
  saddlebrown: "rgba(139,69,19,1.0)",
  gainsboro: "rgba(220,220,220,1.0)",
  salmon: "rgba(250,128,114,1.0)",
  ghostwhite: "rgba(248,248,255,1.0)",
  sandybrown: "rgba(244,164,96,1.0)",
  gold: "rgba(255,215,0,1.0)",
  seagreen: "rgba(46,139,87,1.0)",
  goldenrod: "rgba(218,165,32,1.0)",
  seashell: "rgba(255,245,238,1.0)",
  gray: "rgba(128,128,128,1.0)",
  sienna: "rgba(160,82,45,1.0)",
  green: "rgba(0,128,0,1.0)",
  silver: "rgba(192,192,192,1.0)",
  greenyellow: "rgba(173,255,47,1.0)",
  skyblue: "rgba(135,206,235,1.0)",
  grey: "rgba(128,128,128,1.0)",
  slateblue: "rgba(106,90,205,1.0)",
  honeydew: "rgba(240,255,240,1.0)",
  slategray: "rgba(112,128,144,1.0)",
  hotpink: "rgba(255,105,180,1.0)",
  slategrey: "rgba(112,128,144,1.0)",
  indianred: "rgba(205,92,92,1.0)",
  snow: "rgba(255,250,250,1.0)",
  indigo: "rgba(75,0,130,1.0)",
  springgreen: "rgba(0,255,127,1.0)",
  ivory: "rgba(255,255,240,1.0)",
  steelblue: "rgba(70,130,180,1.0)",
  khaki: "rgba(240,230,140,1.0)",
  tan: "rgba(210,180,140,1.0)",
  lavender: "rgba(230,230,250,1.0)",
  teal: "rgba(0,128,128,1.0)",
  lavenderblush: "rgba(255,240,245,1.0)",
  thistle: "rgba(216,191,216,1.0)",
  lawngreen: "rgba(124,252,0,1.0)",
  tomato: "rgba(255,99,71,1.0)",
  lemonchiffon: "rgba(255,250,205,1.0)",
  turquoise: "rgba(64,224,208,1.0)",
  lightblue: "rgba(173,216,230,1.0)",
  violet: "rgba(238,130,238,1.0)",
  lightcoral: "rgba(240,128,128,1.0)",
  wheat: "rgba(245,222,179,1.0)",
  lightcyan: "rgba(224,255,255,1.0)",
  white: "rgba(255,255,255,1.0)",
  lightgoldenrodyellow: "rgba(250,250,210,1.0)",
  whitesmoke: "rgba(245,245,245,1.0)",
  lightgray: "rgba(211,211,211,1.0)",
  yellow: "rgba(255,255,0,1.0)",
  lightgreen: "rgba(144,238,144,1.0)",
  yellowgreen: "rgba(154,205,50,1.0)",
  lightgrey: "rgba(211,211,211,1.0)"
}, $s, Ln, vs, sl = [];
function al(n, e, t) {
  var i, o, r, a = {};
  for (r in e)
    r == "key" ? i = e[r] : r == "ref" ? o = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? $s.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return ll(n, a, i, o);
}
function ll(n, e, t, i, o) {
  var r = { type: n, props: e, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: ++vs, __i: -1, __u: 0 };
  return Ln.vnode != null && Ln.vnode(r), r;
}
$s = sl.slice, Ln = { __e: function(n, e, t, i) {
  for (var o, r, a; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(n)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, i || {}), a = o.__d), a)
          return o.__E = o;
      } catch (u) {
        n = u;
      }
  throw n;
} }, vs = 0, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var ws = function(n, e, t, i) {
  var o;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var a = e[r++], u = e[r] ? (e[0] |= a ? 1 : 2, t[e[r++]]) : e[++r];
    a === 3 ? i[0] = u : a === 4 ? i[1] = Object.assign(i[1] || {}, u) : a === 5 ? (i[1] = i[1] || {})[e[++r]] = u : a === 6 ? i[1][e[++r]] += u + "" : a ? (o = n.apply(u, ws(n, u, t, ["", null])), i.push(o), u[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = o)) : i.push(u);
  }
  return i;
}, Fi = /* @__PURE__ */ new Map();
function ul(n) {
  var e = Fi.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Fi.set(this, e)), (e = ws(this, e.get(n) || (e.set(n, e = function(t) {
    for (var i, o, r = 1, a = "", u = "", d = [0], s = function(p) {
      r === 1 && (p || (a = a.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? d.push(0, p, a) : r === 3 && (p || a) ? (d.push(3, p, a), r = 2) : r === 2 && a === "..." && p ? d.push(4, p, 0) : r === 2 && a && !p ? d.push(5, 0, !0, a) : r >= 5 && ((a || !p && r === 5) && (d.push(r, 0, a, o), r = 6), p && (d.push(r, p, 0, o), r = 6)), a = "";
    }, c = 0; c < t.length; c++) {
      c && (r === 1 && s(), s(c));
      for (var l = 0; l < t[c].length; l++)
        i = t[c][l], r === 1 ? i === "<" ? (s(), d = [d], r = 3) : a += i : r === 4 ? a === "--" && i === ">" ? (r = 1, a = "") : a = i + a[0] : u ? i === u ? u = "" : a += i : i === '"' || i === "'" ? u = i : i === ">" ? (s(), r = 1) : r && (i === "=" ? (r = 5, o = a, a = "") : i === "/" && (r < 5 || t[c][l + 1] === ">") ? (s(), r === 3 && (d = d[0]), r = d, (d = d[0]).push(2, 0, r), r = 0) : i === " " || i === "	" || i === `
` || i === "\r" ? (s(), r = 2) : a += i), r === 3 && a === "!--" && (r = 4, d = d[0]);
    }
    return s(), d;
  }(n)), e), arguments, [])).length > 1 ? e : e[0];
}
var un = ul.bind(al);
let dl = (n) => crypto.getRandomValues(new Uint8Array(n)), cl = (n, e, t) => {
  let i = (2 << Math.log(n.length - 1) / Math.LN2) - 1, o = -~(1.6 * i * e / n.length);
  return (r = e) => {
    let a = "";
    for (; ; ) {
      let u = t(o), d = o;
      for (; d--; )
        if (a += n[u[d] & i] || "", a.length === r)
          return a;
    }
  };
}, hl = (n, e = 21) => cl(n, e, dl);
var ks = "abcdefghijklmnopqrstuvwxyz", Vs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", Is = "0123456789", pl = "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz", gl = "6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz";
const fl = Is, ml = ks, _l = Vs;
var Sl = fl + ml + _l, yl = {
  lowercase: ks,
  uppercase: Vs,
  numbers: Is,
  nolookalikes: pl,
  nolookalikesSafe: gl,
  alphanumeric: Sl
};
const xl = [
  "String",
  "Number",
  "Object",
  "Array",
  "Boolean",
  "Date"
];
function $n(n) {
  return n && typeof n == "object";
}
function Tn(n, e, t) {
  Object.defineProperty(n, e, { value: t, enumerable: !1, configurable: !0 });
}
function Ni(n, e, t) {
  Tn(n, "__key", e), Tn(n, "__parent", t);
}
function bl(n) {
  return Object.getOwnPropertyNames(n).concat(
    Object.getPrototypeOf(n) && xl.indexOf(Object.getPrototypeOf(n).constructor.name) < 0 ? Object.getOwnPropertyNames(Object.getPrototypeOf(n)) : []
  ).filter((e) => e !== "constructor" && typeof n[e] == "function");
}
const ti = {
  computedStack: [],
  trackerSymbol: Symbol("tracker")
};
let dt = null;
const Rt = Symbol();
function Bn() {
  if (dt) {
    for (const n of dt)
      n(), n[Rt] = !1;
    dt = null;
  }
}
function Li(n, e) {
  n[Rt] || (dt === null && (dt = [], e === !0 ? queueMicrotask(Bn) : setTimeout(Bn, e)), dt.push(n));
}
const { computedStack: Pt, trackerSymbol: vn } = ti, wn = Symbol("__observed"), Ae = Symbol("modifiedProperty");
function At(n, e = {}) {
  const {
    props: t,
    ignore: i,
    batch: o,
    deep: r = !0,
    bubble: a,
    bind: u
  } = e;
  if (n[wn])
    return n;
  const d = (p) => p !== wn && (t == null || t instanceof Array && t.includes(p)) && (i == null || i instanceof Array && !i.includes(p));
  r && Object.entries(n).forEach(function([p, h]) {
    $n(h) && d(p) && (n[p] = At(h, e), a && Ni(n[p], p, n));
  });
  function s(p, h, g) {
    if (h === "__handler")
      Tn(p, "__handler", g);
    else if (!d(h))
      p[h] = g;
    else if (Array.isArray(p) && h === "length" || $l(p[h], g)) {
      const f = h !== Ae && r && $n(g), m = p[h];
      p[h] = f ? At(g, e) : g, f && a && Ni(p[h], h, p);
      const _ = [h];
      let w = p;
      for (; w && !(w.__handler && w.__handler(_, g, m, l) === !1); )
        w.__key && w.__parent ? (_.unshift(w.__key), w = w.__parent) : w = null;
      const k = c.get(h);
      if (k)
        for (const b of k) {
          const I = b[vn], C = I && I.get(p), D = C && C.has(h);
          b.__disposed || I && !D ? k.delete(b) : b !== Pt[0] && (typeof o < "u" && o !== !1 ? (Li(b, o), b[Rt] = !0) : b());
        }
      if (h !== Ae) {
        p[Ae] = h;
        const b = c.get(Ae);
        if (b)
          for (const I of b) {
            const C = I[vn], D = C && C.get(p), L = D && D.has(Ae);
            I.__disposed || C && !L ? b.delete(I) : I !== Pt[0] && (typeof o < "u" && o !== !1 ? (Li(I, o), I[Rt] = !0) : I());
          }
      }
    }
  }
  const c = /* @__PURE__ */ new Map(), l = new Proxy(n, {
    get(p, h) {
      if (h === wn)
        return !0;
      if (d(h) && Pt.length) {
        const g = Pt[0], f = g[vn];
        if (f) {
          let _ = f.get(n);
          _ || (_ = /* @__PURE__ */ new Set(), f.set(n, _)), _.add(h);
        }
        let m = c.get(h);
        m || (m = /* @__PURE__ */ new Set(), c.set(h, m)), m.add(g);
      }
      return n[h];
    },
    set(p, h, g) {
      return s(n, h, g), !0;
    },
    defineProperty(p, h, g) {
      if (h === "__handler")
        throw new Error("Don't track bubble handlers");
      if (d(h)) {
        if (!Array.isArray(n) || h === "length") {
          "value" in g && r && $n(g.value) && (g = { ...g }, g.value = At(g.value, e));
          const f = Reflect.defineProperty(n, h, g);
          return h !== Ae && (n[Ae] = h), f;
        }
      } else
        return Reflect.defineProperty(n, h, g);
      return !1;
    },
    deleteProperty(p, h) {
      if (h === Ae)
        throw new Error(
          'internal property Symbol("modifiedProperty") must not be deleted'
        );
      return h in n && s(n, h, void 0), Reflect.deleteProperty(p, h);
    }
  });
  return u && bl(n).forEach((p) => n[p] = n[p].bind(l)), l;
}
function $l(n, e, t) {
  const i = /* @__PURE__ */ new Map();
  function o(r, a, u) {
    if (r === a)
      return !1;
    let d = typeof r;
    if (d !== typeof a)
      return !0;
    function s(l, p, h) {
      if (!Array.isArray(p) || l.length !== p.length)
        return !0;
      if (i.has(l) || i.has(p)) {
        if (i.has(l) && i.get(l).has(p) || i.has(p) && i.get(p).has(l))
          return !1;
        i.has(l) || i.set(l, /* @__PURE__ */ new Set()), i.get(l).add(p);
      }
      for (let g = 0, f = l.length; g < f; g++)
        if (o(l[g], p[g], h))
          return !0;
      return !1;
    }
    function c(l, p, h = "by-value") {
      if (Object.getPrototypeOf(l) !== Object.getPrototypeOf(p))
        return !0;
      for (let g in l)
        if (!(g in p))
          return !0;
      for (let g in p)
        if (!(g in l))
          return !0;
      if (i.has(l) || i.has(p)) {
        if (i.has(l) && i.get(l).has(p) || i.has(p) && i.get(p).has(l))
          return !1;
        i.has(l) || i.set(l, /* @__PURE__ */ new Set()), i.get(l).add(p);
      }
      for (let g in l)
        if (o(l[g], p[g], h))
          return !0;
      return !1;
    }
    switch (d) {
      case "undefined":
      case "boolean":
      case "string":
      case "function":
        return !0;
      case "number":
        return isNaN(r) !== isNaN(a) || Math.abs(r - a) > Number.EPSILON;
      case "object":
        return r == null || a == null ? !0 : u === "by-value" && (r instanceof Boolean || r instanceof Number || r instanceof String) ? r.valueOf() !== a.valueOf() : Array.isArray(r) ? s(r, a, u) : u === "by-reference" ? !0 : c(r, a, u);
      default:
        return !0;
    }
    return !0;
  }
  return o(n, e, t);
}
const { computedStack: Ti, trackerSymbol: vl } = ti;
function wl(n, { autoRun: e = !0, callback: t, bind: i, disableTracking: o = !1 } = {}) {
  function r(d, s = []) {
    const c = t || u;
    o || (c[vl] = /* @__PURE__ */ new WeakMap()), Ti.unshift(c), s.length > 0 ? s = [...s, a] : s = [a];
    const l = d ? d() : i ? n.apply(i, s) : n(...s);
    return Ti.shift(), l;
  }
  const a = { computeAsync: r }, u = (...d) => r(null, d);
  return e && u(), u;
}
function kl(n) {
  return n[ti.trackerSymbol] = null, n.__disposed = !0;
}
const Vl = {
  observe: At,
  modifiedProperty: Ae,
  computed: wl,
  dispose: kl,
  batch: Bn
}, Ws = Ce, { observe: Il, computed: Ps, dispose: Wl } = Vl, jt = document.createElement("style");
jt.innerHTML = `
/**** DefaultSticker ****/

  .SNS.DefaultSticker {
    left:0px; top:0px; right:0px; bottom:0px;
  }
`;
document.head.appendChild(jt);
const Pl = ["normal", "italic"], Cl = [
  "missing Behaviour",
  "Behaviour Execution Failure",
  "Script Compilation Failure",
  "Script Execution Failure",
  "Rendering Failure",
  "Event Handling Failure",
  '"onMount" Callback Failure',
  '"onUnmount" Callback Failure'
];
function Se(n) {
  let e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(n);
  if (e == null)
    throw new Error(n);
  {
    let t = new Error(e[2]);
    throw t.name = e[1], t;
  }
}
function Z(n) {
  Se(
    "ReadOnlyProperty: property " + st(n) + " must not be set"
  );
}
function Cs(n) {
  return n instanceof si;
}
U(
  Cs,
  K,
  "SNS visual"
);
const Dl = U(
  Cs,
  oe,
  "SNS visual"
);
function St(n) {
  return n instanceof ai;
}
U(
  St,
  K,
  "SNS folder"
);
const Fl = U(
  St,
  oe,
  "SNS folder"
);
function dn(n) {
  return n instanceof zs;
}
U(
  dn,
  K,
  "SNS project"
);
U(
  dn,
  oe,
  "SNS project"
);
function Zt(n) {
  return n instanceof js;
}
const Nl = U(
  Zt,
  K,
  "SNS board"
);
U(
  Zt,
  oe,
  "SNS board"
);
function tt(n) {
  return n instanceof Zs;
}
U(
  tt,
  K,
  "SNS sticker"
);
const Ds = U(
  tt,
  oe,
  "SNS sticker"
);
function Fs(n) {
  return Ce(n);
}
const Ll = U(
  Fs,
  K,
  "unique SNS id"
), Ns = Ll, Bi = U(
  Fs,
  oe,
  "unique SNS id"
), Tl = /^[a-z$_][a-z$_0-9]*$/i;
function Ls(n) {
  return Ie(n, Tl);
}
U(
  Ls,
  K,
  "note stickers identifier"
);
const Ts = U(
  Ls,
  oe,
  "note stickers identifier"
);
function cn(n) {
  return Ce(n);
}
const Bl = U(
  cn,
  K,
  "SNS name"
), Yt = U(
  cn,
  oe,
  "SNS name"
);
function Oe(n) {
  return gt(n);
}
U(
  Oe,
  K,
  "sticker coordinate"
);
const Ai = U(
  Oe,
  oe,
  "sticker coordinate"
);
function Re(n) {
  return gt(n) && n >= 0;
}
const Ct = U(
  Re,
  K,
  "sticker dimension"
), Hi = U(
  Re,
  oe,
  "sticker dimension"
);
function Bs(n) {
  return Qn(n) && Oe(n.x) && Oe(n.y);
}
U(
  Bs,
  K,
  "sticker position"
);
const Al = U(
  Bs,
  oe,
  "sticker position"
);
function As(n) {
  return Qn(n) && Re(n.Width) && Re(n.Height);
}
U(
  As,
  K,
  "sticker size"
);
const Hl = U(
  As,
  oe,
  "sticker size"
);
function Hs(n) {
  return Qn(n) && Oe(n.x) && Re(n.Width) && Oe(n.y) && Re(n.Height);
}
U(
  Hs,
  K,
  "sticker geometry"
);
const El = U(
  Hs,
  oe,
  "sticker geometry"
);
function Es(n) {
  return bt(n) && Ss(n.Type, Cl) && Kn(n.Message);
}
const Ei = U(
  Es,
  K,
  "error descriptor"
);
U(
  Es,
  oe,
  "error descriptor"
);
function Ms(n) {
  return bt(n);
}
U(
  Ms,
  K,
  "serializable object"
);
const ni = U(
  Ms,
  oe,
  "serializable object"
), ut = { x: 20, y: 20, Width: 80, Height: 60 }, Ml = 10, Ul = void 0, Xl = 10, Gl = void 0, zl = 10, Ol = 10;
function Rl(n, e) {
  return sn(n) ? n : e;
}
function te(n, e) {
  return n == null ? void 0 : sn(n) ? n : e;
}
function hn(n, e) {
  return ht(n) ? n : e;
}
function Fe(n, e) {
  return ht(n) ? n : e;
}
function at(n, e, t = -1 / 0, i = 1 / 0, o = !1, r = !1) {
  return Ua(n, t, i, o, r) ? n : e;
}
function ge(n, e) {
  return Jn(n) ? n : e;
}
function ce(n, e, t) {
  return Ie(n, t) ? n : e;
}
function vt(n, e) {
  return Kn(n) ? n : e;
}
function he(n, e) {
  return (Ce(n) ? n : e).replace(
    /[\f\r\n\v\u0085\u2028\u2029].*$/,
    "..."
  );
}
function se(n, e) {
  const t = Ce(n) ? n : e;
  return t == null ? void 0 : t.replace(/[\f\r\n\v\u0085\u2028\u2029].*$/, "...");
}
function Us(n, e, t) {
  return $t(n, t) ? n : e;
}
function ye(n, e, t) {
  return $t(n, t) ? n : e;
}
function ii(n, e) {
  return ln(n) ? n : e;
}
function jl(n, e) {
  return ln(n) ? n : e;
}
function Zl(n, e) {
  return ys(n) ? n : e;
}
function Yl(n, e) {
  return Ws(n) ? n : e;
}
function pt(n, e) {
  return ei(n) ? n : e;
}
function Xs() {
  return un`<div class="SNS DefaultSticker" style=${pn(this)}/>`;
}
function qt() {
  const n = this.Error;
  return n == null ? Xs.call(this) : un`<div class="SNS DefaultSticker">
      <div class="SNS ErrorIndicator" onClick=${() => this.Project.showError(this, n)}/>
    </div>`;
}
const ql = hl(yl.nolookalikesSafe, 21), Jt = /* @__PURE__ */ new WeakMap();
function Jl(n, e) {
  let t = Jt.get(n);
  t == null && Jt.set(n, t = /* @__PURE__ */ Object.create(null));
  const i = e.Id;
  i in t && Se(
    "NonUniqueId: the id of the given folder (" + st(i) + ") has already been registered"
  ), t[i] = e;
}
function Kl(n) {
  const e = n.Project;
  let t = Jt.get(e);
  t != null && delete t[n.Id];
}
function Mi(n, e) {
  let t = Jt.get(n);
  if (t != null)
    return t[e];
}
const Kt = /* @__PURE__ */ new WeakMap();
function Ql(n, e) {
  let t = Kt.get(n);
  t == null && Kt.set(n, t = /* @__PURE__ */ Object.create(null));
  const i = e.Id;
  i in t && Se(
    "NonUniqueId: the id of the given sticker (" + st(i) + ") has already been registered"
  ), t[i] = e;
}
function eu(n) {
  const e = n.Project;
  let t = Kt.get(e);
  t != null && delete t[n.Id];
}
function tu(n, e) {
  let t = Kt.get(n);
  if (t != null)
    return t[e];
}
function Qt(n) {
  ni("serialization", n), delete n.Id, Ii(n.BoardList) && n.BoardList.forEach(
    (e) => Qt(e)
  ), Ii(n.StickerList) && n.StickerList.forEach(
    (e) => Qt(e)
  );
}
const An = /* @__PURE__ */ new WeakMap();
function Gs(n, e) {
  let t = An.get(n);
  t == null && An.set(n, t = []), t.push(e);
}
function ri(n) {
  let e = An.get(n);
  e != null && e.forEach((t) => {
    Wl(t);
  });
}
const Ui = /* @__PURE__ */ Object.create(null), Hn = /* @__PURE__ */ Object.create(null), nu = /* @__PURE__ */ Object.create(null);
function P(n, e, t, i, o, r) {
  Nn("behavior group label", n), Nn("behavior label", e), Ts("behavior name", t), Qa("sticker template", i), Bt("behavior function", o);
  const a = n.toLowerCase().replace(/\s/g, ""), u = t.toLowerCase(), d = { ...i };
  d.activeScript == null ? d.activeScript = `useBehavior('${t}')
` : d.activeScript = d.activeScript.replace(/^\s*\n/, "").replace(/\n\s*$/, `
`), u in Hn && Se(
    "BehaviorExists: behavior " + st(t) + " was already registered"
  );
  let s = Ui[a];
  s == null && (Ui[a] = s = {
    GroupLabel: n,
    BehaviorSet: /* @__PURE__ */ Object.create(null)
  }), s.BehaviorSet[t] = {
    Label: e,
    Executable: o,
    Template: d
  }, o != null && (nu[u] = d, Hn[u] = o), r != null && jt.innerHTML.indexOf(r.trim()) < 0 && (jt.innerHTML += r);
}
function iu(n) {
  Ds("visual", this), Ts("behavior name", n);
  const e = Hn[n.toLowerCase()];
  e == null && Se(
    "NoSuchBehavior: no behavior called " + st(n) + " found"
  );
  const t = (a) => {
    ft("reactive function", a), Gs(this, Ps(a));
  }, i = this.onRender.bind(this), o = this.onMount.bind(this), r = this.onUnmount.bind(this);
  e.call(this, this, this, un, t, i, o, r);
}
P("basic Views", "plain Sticker", "plainSticker", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 80 },
  activeScript: 'onRender(() => html`<div class="SNS Placeholder"></div>`)'
}, (n, e, t, i, o, r, a) => {
  o(() => t`<div class="SNS plainSticker"></div>`);
}, `
/**** plain Stickers ****/

  .SNS.plainSticker {
    border:dotted 1px gray;
  }
  `);
P("basic Views", "sticky Note", "stickyNote", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 80 },
  minWidth: 20,
  minHeight: 10
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function(u) {
    const { builtinSelection: d, builtinDragging: s } = u, c = vt(e.Value, ""), l = (h) => {
      if (h.key === "Tab") {
        h.stopPropagation(), h.preventDefault();
        const g = h.target, { value: f, selectionStart: m, selectionEnd: _ } = g;
        return g.value = f.slice(0, m) + "	" + f.slice(_), g.selectionStart = g.selectionEnd = m + 1, !1;
      }
    }, p = (h) => {
      e.Value = h.target.value;
    };
    return t`<div class="SNS NoteSticker" style=${pn(n)}
        onPointerDown=${d}
      >
        <div class="Header builtinDraggable"
          onPointerDown=${s} onPointerMove=${s}
          onPointerUp=${s} onPointerCancel=${s}
        />
        <textarea class="Editor" value=${c} tabindex=-1
          onKeyDown=${l} onInput=${p}
        ></textarea>
      </div>`;
  };
}, `
/**** "classical" Note Stickers ****/

  .SNS.NoteSticker {
    background:ivory;
    border:solid 1px darkgray;
    outline:none;
    font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size:14px; font-weight:normal; line-height:1.4; color:black;
  }

  .SNS.NoteSticker > .Header {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; height:10px;
    margin:0px; padding:0px;
    background:#000000; opacity:0.3;
  }

  .SNS.NoteSticker > .Editor {
    display:block; position:absolute;
    left:0px; top:10px; right:0px; bottom:0px;
    margin:0px; padding:2px;
    background:none; border:none;

    background-color:inherit; background-image:inherit;
    font-family:inherit; font-size:inherit; font-weight:inherit;
    line-height:inherit; color:inherit;

    tab-size:10px; resize:none;
  }
  `);
P("basic Views", "Placeholder", "Placeholder", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 80 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function(u) {
    const { builtinDragging: d } = u, { Width: s, Height: c } = e.Geometry;
    return t`<div class="SNS Placeholder builtinDraggable" style="
        line-height:${c}px;
      "
        onPointerDown=${d} onPointerMove=${d}
        onPointerUp=${d} onPointerCancel=${d}
      >${s}x${c}</div>`;
  };
}, `
/**** simple Placeholders ****/

  .SNS.Placeholder {
    border:dotted 1px gray;
    text-align:center;
  }
  `);
P("basic Views", "Title", "Title", {
  Geometry: { x: 20, y: 20, Width: 80, Height: 30 },
  Value: "Title"
}, (n, e, t, i, o, r, a) => {
  o(() => {
    const u = he(e.Value, "");
    return t`<div class="SNS Title">${u}</div>`;
  });
}, `
/**** Title Views ****/

  .SNS.Sticker > .SNS.Title {
    font-size:22px; font-weight:bold; line-height:32px;
  }
  `);
P("basic Views", "Subtitle", "Subtitle", {
  Geometry: { x: 20, y: 20, Width: 80, Height: 30 },
  Value: "Subtitle"
}, (n, e, t, i, o, r, a) => {
  o(() => {
    const u = he(e.Value, "");
    return t`<div class="SNS Subtitle">${u}</div>`;
  });
}, `
/**** Subtitle Views ****/

  .SNS.Sticker > .SNS.Subtitle {
    font-size:18px; font-weight:bold; line-height:27px;
  }
  `);
P("basic Views", "Label", "Label", {
  Geometry: { x: 20, y: 20, Width: 80, Height: 30 },
  Value: "Label"
}, (n, e, t, i, o, r, a) => {
  o(() => {
    const u = he(e.Value, "");
    return t`<div class="SNS Label">${u}</div>`;
  });
}, `
/**** Label Views ****/

  .SNS.Sticker > .SNS.Label {
    font-size:14px; font-weight:bold; line-height:21px;
  }
  `);
P("basic Views", "Text", "Text", {
  Geometry: { x: 20, y: 20, Width: 80, Height: 30 },
  Value: "Text"
}, (n, e, t, i, o, r, a) => {
  o(() => {
    const u = vt(e.Value, "");
    return t`<div class="SNS Text">${u}</div>`;
  });
}, `
/**** Text Views ****/

  .SNS.Sticker > .SNS.Text {
    font-size:14px; font-weight:normal; line-height:21px;
  }
  `);
P("basic Views", "FinePrint", "FinePrint", {
  Geometry: { x: 20, y: 20, Width: 80, Height: 30 },
  Value: "FinePrint"
}, (n, e, t, i, o, r, a) => {
  o(() => {
    const u = vt(e.Value, "");
    return t`<div class="SNS FinePrint">${u}</div>`;
  });
}, `
/**** FinePrint Views ****/

  .SNS.Sticker > .SNS.FinePrint {
    font-size:12px; font-weight:normal; line-height:18px;
  }
  `);
P("basic Views", "HTML View", "HTMLView", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 80 },
  Value: "<b><u>HTML View</u></b>",
  activeScript: `
  useBehavior('HTMLView')
//my.Value = 'HTML Markup'
`
}, (n, e, t, i, o, r, a) => {
  e.Renderer = () => t`<div class="SNS HTMLView"
      dangerouslySetInnerHTML=${{ __html: vt(e.Value, "") }}
    />`;
});
P("basic Views", "Image View", "ImageView", {
  Geometry: { x: 20, y: 20, Width: 90, Height: 90 },
  Value: "https://www.rozek.de/Bangle.js/Mandelbrot_240x240.png",
  activeScript: `
  useBehavior('ImageView')
//my.Value = 'Image URL'
`
}, (n, e, t, i, o, r, a) => {
  e.Renderer = () => t`<img class="SNS ImageView" src=${pt(e.Value, "")}/>`;
}, `
/**** Image View ****/

  .SNS.Sticker > .SNS.ImageView {
    object-fit:contain; object-position:center;
  }
  `);
P("basic Views", "SVG View", "SVGView", {
  Geometry: { x: 20, y: 20, Width: 90, Height: 90 },
  activeScript: `
  useBehavior('SVGView')
//my.Value = 'SVG Document'
`
}, (n, e, t, i, o, r, a) => {
  e.Renderer = () => {
    const u = "data:image/svg+xml;base64," + btoa(vt(e.Value, ""));
    return t`<div class="SNS SVGView" src=${u}/>`;
  };
}, `
/**** SVG View ****/

  .SNS.Sticker > .SNS.SVGView {
    object-fit:contain; object-position:center;
  }
  `);
P("basic Views", "2D Canvas View", "Canvas2DView");
P("basic Views", "Web View", "WebView", {
  Geometry: { x: 20, y: 20, Width: 640, Height: 480 },
  minWidth: 120,
  minHeight: 80,
  Value: "https://www.rozek.de",
  activeScript: `
  useBehavior('WebView')
//my.Value = 'Document URL'
`
}, (n, e, t, i, o, r, a) => {
  e.Renderer = () => t`<iframe class="SNS WebView"
      src=${pt(e.Value, "")}
    />`;
});
P("basic Views", "Badge", "Badge", {
  Geometry: { x: 20, y: 20, Width: 30, Height: 30 },
  Value: 1,
  ForegroundColor: "red",
  BackgroundColor: "white"
}, (n, e, t, i, o, r, a) => {
  e.Renderer = () => {
    const u = ht(e.Value) ? "" + e.Value : he(e.Value, ""), d = Math.round(Math.min(e.Width, e.Height / 2));
    return t`<div class="SNS Badge" style="
        border-color:${e.ForegroundColor}; border-radius:${d}px;
        line-height:${e.Height - 4}px;
      ">${he(u, "")}</>`;
  };
}, `
/**** Badge ****/

  .SNS.Sticker > .SNS.Badge {
    font-size:18px; font-weight:bold; text-align:center;
    border:solid 2px black;
  }
  `);
P("basic Views", "Icon", "Icon", {
  Geometry: { x: 20, y: 20, Width: 24, Height: 24 },
  Value: null,
  activeScript: `
  useBehavior('Icon')
//my.Value = 'icon image url'
//onClick(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  function u(d) {
    e.Enabling != !1 && (e.Value = d.target.value, typeof e._onClick == "function" && e._onClick(d));
  }
  e.Renderer = () => {
    const d = pt(e.Value, "/img/pencil.png"), s = ii(e.Color, "black");
    return t`<div class="SNS Icon" style="
        -webkit-mask-image:url(${d}); mask-image:url(${d});
        background-color:${s};
      " disabled=${e.Enabling == !1} onClick=${u}
      />`;
  };
}, `
/**** Icon ****/

  .SNS.Sticker > .SNS.Icon {
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);
P("basic Views", "horizontal Separator", "horizontalSeparator", {
  Geometry: { x: 20, y: 20, Width: 80, Height: 10 },
  minWidth: 10
}, (n, e, t, i, o, r, a) => {
  o(() => t`<div class="SNS horizontalSeparator"></div>`);
}, `
/**** horizontal Separator ****/

  .SNS.horizontalSeparator {
    border:none; border-top:solid 1px black;
  }
  `);
P("basic Views", "vertical Separator", "verticalSeparator", {
  Geometry: { x: 20, y: 20, Width: 10, Height: 40 },
  minHeight: 10
}, (n, e, t, i, o, r, a) => {
  o(() => t`<div class="SNS verticalSeparator"></div>`);
}, `
/**** vertical Separator ****/

  .SNS.verticalSeparator {
    border:none; border-left:solid 1px black;
  }
  `);
P("basic Views", "Tab", "Tab");
P("basic Views", "Icon Tab", "IconTab");
P("native Controls", "Button", "Button", {
  Geometry: { x: 20, y: 20, Width: 80, Height: 30 },
  Value: "Button",
  activeScript: `
  useBehavior('Button')
//my.Value = 'Label'
//onClick(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  function u(d) {
    if (e.Enabling == !1)
      return q(d);
    typeof e._onClick == "function" && e._onClick(d);
  }
  e.Renderer = () => {
    const d = he(e.Label || e.Value, "");
    return t`<button class="SNS Button" style="
        line-height:${e.LineHeight || e.Height}px;
      " disabled=${e.Enabling == !1} onClick=${u}
      >${d}</>`;
  };
}, `
/**** Button ****/

  .SNS.Sticker > .SNS.Button {
    border:solid 1px black; border-radius:4px;
    background:white;
    font-weight:bold; color:black;
    text-align.center;
  }
  `);
P("native Controls", "Checkbox", "Checkbox", {
  Geometry: { x: 20, y: 20, Width: 20, Height: 20 },
  Value: null,
  activeScript: `
  useBehavior('Checkbox')
//my.Value = null/true/false
//onClick(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  function u(d) {
    if (e.Enabling == !1)
      return q(d);
    e.Value = d.target.checked, typeof e._onClick == "function" && e._onClick(d);
  }
  e.Renderer = () => {
    const d = te(e.Value), s = d == !0, c = d == null;
    return t`<input type="checkbox" class="SNS Checkbox"
        checked=${s} indeterminate=${c}
        disabled=${e.Enabling == !1} onClick=${u}
      />`;
  };
});
P("native Controls", "Radiobutton", "Radiobutton", {
  Geometry: { x: 20, y: 20, Width: 20, Height: 20 },
  Value: null,
  activeScript: `
  useBehavior('Radiobutton')
//my.Value = true/false
//onClick(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  function u(d) {
    if (e.Enabling == !1)
      return q(d);
    e.Value = d.target.checked, typeof e._onClick == "function" && e._onClick(d);
  }
  e.Renderer = () => {
    const d = Rl(e.Value, !1);
    return t`<input type="radio" class="SNS Radiobutton"
        checked=${d == !0}
        disabled=${e.Enabling == !1} onClick=${u}
      />`;
  };
});
P("native Controls", "Gauge", "Gauge", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 20 },
  Value: 0,
  activeScript: `
  useBehavior('Gauge')
//my.Value      = 0
//my.Minimum    = 0
//my.lowerBound = 0
//my.Optimum    = undefined
//my.upperBound = 1
//my.Maximum    = 1
`
}, (n, e, t, i, o, r, a) => {
  e.Renderer = () => {
    const u = hn(
      xt(e.Value) ? parseFloat(e.Value) : e.Value,
      0
    ), d = Fe(e.Minimum), s = Fe(e.lowerBound), c = Fe(e.Optimum), l = Fe(e.upperBound), p = Fe(e.Maximum);
    return t`<meter class="SNS Gauge" value=${u}
        min=${d} low=${s} opt=${c}
        high=${l} max=${p}
      />`;
  };
});
P("native Controls", "Progressbar", "Progressbar", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 10 },
  Value: 0,
  activeScript: `
  useBehavior('Progressbar')
//my.Value   = 0
//my.Maximum = 1
`
}, (n, e, t, i, o, r, a) => {
  e.Renderer = () => {
    const u = hn(
      xt(e.Value) ? parseFloat(e.Value) : e.Value,
      0
    ), d = Fe(e.Maximum);
    return t`<progress class="SNS Progressbar" value=${u} max=${d}/>`;
  };
});
const ru = /^\s*([+-]?(\d+([.]\d+)?|[.]\d+)([eE][+-]?\d+)?|\d*[.](?:\d*))(?:\s*:\s*([^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]+))?$/;
P("native Controls", "Slider", "Slider", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 20 },
  Value: null,
  activeScript: `
  useBehavior('Slider')
//my.Value     = 0
//my.Minimum   = undefined
//my.Stepping  = undefined
//my.Maximum   = undefined
//my.Hashmarks = [0:'zero',1,2]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = 0;
  function u(c) {
    return Ie(c, ru) || ht(c);
  }
  function d(c) {
    if (e.Enabling == !1)
      return q(c);
    e.Value = parseFloat(c.target.value), typeof e._onInput == "function" && e._onInput(c);
  }
  function s() {
    n.rerender();
  }
  e.Renderer = () => {
    let c = hn(
      xt(e.Value) ? parseFloat(e.Value) : e.Value,
      0
    );
    const l = Fe(e.Minimum), p = at(e.Stepping, void 0, 0), h = Fe(e.Maximum), g = ye(
      e.Hashmarks,
      void 0,
      u
    );
    document.activeElement === e.View ? c = e.ValueToShow : e.ValueToShow = c;
    let f = "", m;
    return g != null && g.length > 0 && (m = e.Id + "-Hashmarks", f = t`\n<datalist id=${m}>
          ${g.map((_) => {
      _ = "" + _;
      const w = _.replace(/:.*$/, "").trim(), k = _.replace(/^[^:]+:/, "").trim();
      return t`<option value=${w}>${k}</option>`;
    })}
        </datalist>`), t`<input type="range" class="SNS Slider"
        value=${c} min=${l} max=${h} step=${p}
        disabled=${e.Enabling == !1} onInput=${d} onBlur=${s}
        list=${m}
      />${f}`;
  };
});
P("native Controls", "Textline Input", "TextlineInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('TextlineInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.SpellChecking = undefined
//my.Suggestions   = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = he(e.Value, "");
    const c = se(e.Placeholder), l = te(e.readonly), p = ge(e.minLength), h = ge(e.maxLength), g = se(e.Pattern), f = te(e.SpellChecking), m = ye(
      e.Suggestions,
      void 0,
      Ce
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let _ = "", w;
    return m != null && m.length > 0 && (w = e.Id + "-Suggestions", _ = t`<datalist id=${w}>
          ${m.map((k) => t`<option value=${k}></option>`)}
        </datalist>`), t`<input type="text" class="SNS TextlineInput"
        value=${s} minlength=${p} maxlength=${h}
        readonly=${l} placeholder=${c}
        pattern=${g} spellcheck=${f}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${w}
      />${_}`;
  };
}, `
/**** TextlineInput ****/

  .SNS.Sticker > .SNS.TextlineInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.TextlineInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
P("native Controls", "Password Input", "PasswordInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('PasswordInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = he(e.Value, "");
    const c = se(e.Placeholder), l = te(e.readonly), p = ge(e.minLength), h = ge(e.maxLength), g = se(e.Pattern);
    return document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s, t`<input type="password" class="SNS PasswordInput"
        value=${s} minlength=${p} maxlength=${h}
        readonly=${l} placeholder=${c}
        pattern=${g}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
      />`;
  };
}, `
/**** PasswordInput ****/

  .SNS.Sticker > .SNS.PasswordInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.PasswordInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
P("native Controls", "Number Input", "NumberInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('NumberInput')
//my.Value       = 0
//my.Placeholder = undefined
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = [0,...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = 0;
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = parseFloat(s.target.value), typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = hn(
      xt(e.Value) ? parseFloat(e.Value) : e.Value,
      0
    );
    const c = se(e.Placeholder), l = te(e.readonly), p = Fe(e.Minimum), h = at(e.Stepping, void 0, 0), g = Fe(e.Maximum), f = ye(
      e.Suggestions,
      void 0,
      ht
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let m = "", _;
    return f != null && f.length > 0 && (_ = e.Id + "-Suggestions", m = t`<datalist id=${_}>
          ${f.map((w) => t`<option value=${w}></option>`)}
        </datalist>`), t`<input type="number" class="SNS NumberInput"
        value=${s} min=${p} max=${g} step=${h}
        readonly=${l} placeholder=${c}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${_}
      />${m}`;
  };
}, `
/**** NumberInput ****/

  .SNS.Sticker > .SNS.NumberInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.NumberInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
P("native Controls", "Phone Number Input", "PhoneNumberInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('PhoneNumberInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = Yl(e.Value, "");
    const c = se(e.Placeholder), l = te(e.readonly), p = ge(e.minLength), h = ge(e.maxLength), g = se(e.Pattern), f = ye(
      e.Suggestions,
      void 0,
      Ws
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let m = "", _;
    return f != null && f.length > 0 && (_ = e.Id + "-Suggestions", m = t`<datalist id=${_}>
          ${f.map((w) => t`<option value=${w}></option>`)}
        </datalist>`), t`<input type="tel" class="SNS PhoneNumberInput"
        value=${s} minlength=${p} maxlength=${h}
        readonly=${l} placeholder=${c}
        pattern=${g}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${_}
      />${m}`;
  };
}, `
/**** PhoneNumberInput ****/

  .SNS.Sticker > .SNS.PhoneNumberInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.PhoneNumberInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
P("native Controls", "EMail Address Input", "EMailAddressInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('EMailAddressInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = Zl(e.Value, "");
    const c = se(e.Placeholder), l = te(e.readonly), p = ge(e.minLength), h = ge(e.maxLength), g = se(e.Pattern), f = ye(
      e.Suggestions,
      void 0,
      ys
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let m = "", _;
    return f != null && f.length > 0 && (_ = e.Id + "-Suggestions", m = t`<datalist id=${_}>
          ${f.map((w) => t`<option value=${w}></option>`)}
        </datalist>`), t`<input type="email" class="SNS EMailAddressInput"
        value=${s} minlength=${p} maxlength=${h}
        readonly=${l} placeholder=${c}
        pattern=${g}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${_}
      />${m}`;
  };
}, `
/**** EMailAddressInput ****/

  .SNS.Sticker > .SNS.EMailAddressInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.EMailAddressInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
P("native Controls", "URL Input", "URLInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('URLInput')
//my.Value       = ''
//my.Placeholder = undefined
//my.readonly    = false
//my.minLength   = 0
//my.maxLength   = undefined
//my.Pattern     = '.*'
//my.Suggestions = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = pt(e.Value, "");
    const c = se(e.Placeholder), l = te(e.readonly), p = ge(e.minLength), h = ge(e.maxLength), g = se(e.Pattern), f = ye(
      e.Suggestions,
      void 0,
      ei
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let m = "", _;
    return f != null && f.length > 0 && (_ = e.Id + "-Suggestions", m = t`<datalist id=${_}>
          ${f.map((w) => t`<option value=${w}></option>`)}
        </datalist>`), t`<input type="url" class="SNS URLInput"
        value=${s} minlength=${p} maxlength=${h}
        readonly=${l} placeholder=${c}
        pattern=${g}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${_}
      />${m}`;
  };
}, `
/**** URLInput ****/

  .SNS.Sticker > .SNS.URLInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.URLInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
const ou = "\\d{2}:\\d{2}", Ht = /\d{2}:\d{2}/;
function su(n) {
  return Ie(n, Ht);
}
P("native Controls", "Time Input", "TimeInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('TimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = ce(
      e.Value,
      void 0,
      Ht
    );
    const c = te(e.readonly), l = ce(e.Minimum, void 0, Ht), p = at(e.Stepping, void 0, 0), h = ce(e.Maximum, void 0, Ht), g = ye(
      e.Suggestions,
      void 0,
      su
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let f = "", m;
    return g != null && g.length > 0 && (m = e.Id + "-Suggestions", f = t`<datalist id=${m}>
          ${g.map((_) => t`<option value=${_}></option>`)}
        </datalist>`), t`<input type="time" class="SNS TimeInput"
        value=${s} min=${l} max=${h} step=${p}
        readonly=${c} pattern=${ou}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${m}
      />${f}`;
  };
}, `
/**** TimeInput ****/

  .SNS.Sticker > .SNS.TimeInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.TimeInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
const au = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", Et = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function lu(n) {
  return Ie(n, Et);
}
P("native Controls", "Date and Time Input", "DateTimeInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('DateTimeInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = ce(
      e.Value,
      void 0,
      Et
    );
    const c = te(e.readonly), l = ce(e.Minimum, void 0, Et), p = at(e.Stepping, void 0, 0), h = ce(e.Maximum, void 0, Et), g = ye(
      e.Suggestions,
      void 0,
      lu
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let f = "", m;
    return g != null && g.length > 0 && (m = e.Id + "-Suggestions", f = t`<datalist id=${m}>
          ${g.map((_) => t`<option value=${_}></option>`)}
        </datalist>`), t`<input type="datetime-local" class="SNS DateTimeInput"
        value=${s} min=${l} max=${h} step=${p}
        readonly=${c} pattern=${au}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${m}
      />${f}`;
  };
}, `
/**** DateTimeInput ****/

  .SNS.Sticker > .SNS.DateTimeInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.DateTimeInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
const uu = "\\d{4}-\\d{2}-\\d{2}", Mt = /\d{4}-\d{2}-\d{2}/;
function du(n) {
  return Ie(n, Mt);
}
P("native Controls", "Date Input", "DateInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('DateInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = ce(
      e.Value,
      void 0,
      Mt
    );
    const c = te(e.readonly), l = ce(e.Minimum, void 0, Mt), p = at(e.Stepping, void 0, 0), h = ce(e.Maximum, void 0, Mt), g = ye(
      e.Suggestions,
      void 0,
      du
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let f = "", m;
    return g != null && g.length > 0 && (m = e.Id + "-Suggestions", f = t`<datalist id=${m}>
          ${g.map((_) => t`<option value=${_}></option>`)}
        </datalist>`), t`<input type="date" class="SNS DateInput"
        value=${s} min=${l} max=${h} step=${p}
        readonly=${c} pattern=${uu}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${m}
      />${f}`;
  };
}, `
/**** DateInput ****/

  .SNS.Sticker > .SNS.DateInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.DateInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
const cu = "\\d{4}-W\\d{2}", Ut = /\d{4}-W\d{2}/;
function hu(n) {
  return Ie(n, Ut);
}
P("native Controls", "Week Input", "WeekInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('WeekInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = ce(
      e.Value,
      void 0,
      Ut
    );
    const c = te(e.readonly), l = ce(e.Minimum, void 0, Ut), p = at(e.Stepping, void 0, 0), h = ce(e.Maximum, void 0, Ut), g = ye(
      e.Suggestions,
      void 0,
      hu
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let f = "", m;
    return g != null && g.length > 0 && (m = e.Id + "-Suggestions", f = t`<datalist id=${m}>
          ${g.map((_) => t`<option value=${_}></option>`)}
        </datalist>`), t`<input type="week" class="SNS WeekInput"
        value=${s} min=${l} max=${h} step=${p}
        readonly=${c} pattern=${cu}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${m}
      />${f}`;
  };
}, `
/**** WeekInput ****/

  .SNS.Sticker > .SNS.WeekInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.WeekInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
const pu = "\\d{4}-\\d{2}", Xt = /\d{4}-\d{2}/;
function gu(n) {
  return Ie(n, Xt);
}
P("native Controls", "Month Input", "MonthInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('MonthInput')
//my.Value       = 0
//my.readonly    = false
//my.Minimum     = undefined
//my.Stepping    = undefined
//my.Maximum     = undefined
//my.Suggestions = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = ce(
      e.Value,
      void 0,
      Xt
    );
    const c = te(e.readonly), l = ce(e.Minimum, void 0, Xt), p = at(e.Stepping, void 0, 0), h = ce(e.Maximum, void 0, Xt), g = ye(
      e.Suggestions,
      void 0,
      gu
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let f = "", m;
    return g != null && g.length > 0 && (m = e.Id + "-Suggestions", f = t`<datalist id=${m}>
          ${g.map((_) => t`<option value=${_}></option>`)}
        </datalist>`), t`<input type="month" class="SNS MonthInput"
        value=${s} min=${l} max=${h} step=${p}
        readonly=${c} pattern=${pu}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${m}
      />${f}`;
  };
}, `
/**** MonthInput ****/

  .SNS.Sticker > .SNS.MonthInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.MonthInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
P("native Controls", "File Input", "FileInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('FileInput')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  function u(l) {
    if (e.Enabling == !1)
      return q(l);
    e.Value = l.target.value, typeof e._onInput == "function" && e._onInput(l, l.files);
  }
  function d(l) {
    return q(l);
  }
  function s(l) {
    return q(l);
  }
  function c(l) {
    oi(l), e.Enabling != !1 && (e.Value = l.target.value, typeof e._onDrop == "function" && e._onDrop(l, l.dataTransfer.files));
  }
  e.Renderer = () => {
    let l = he(e.Value, "").trim();
    l = l.replace("C:\\fakepath\\", "");
    const p = he(e.Placeholder, "").trim(), h = se(e.acceptableTypes), g = te(e.multiple);
    return t`<label class="SNS FileInput"
        onDragEnter=${d} onDragOver=${s} onDrop=${c}
      >
        <input type="file" style="display:none"
          multiple=${g} accept=${h}
          onInput=${u}
        />
        ${l === "" ? p === "" ? "" : t`<span style="line-height:${e.Height}px">${p}</span>` : t`<span style="line-height:${e.Height}px">${l}</span>`}
      </label>`;
  };
}, `
/**** FileInput ****/

  .SNS.Sticker > .SNS.FileInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }
  .SNS.Sticker > .SNS.FileInput > span {
    display:block; position:absolute; overflow:hidden;
    left:0px; top:0px; width:100%; height:100%;
    padding:0px 2px 0px 2px; white-space:pre; text-overflow:ellipsis;
  }
  `);
P("native Controls", "Pseudo File Input", "PseudoFileInput", {
  Geometry: { x: 20, y: 20, Width: 24, Height: 24 },
  Value: null,
  activeScript: `
  useBehavior('PseudoFileInput')
//my.Value           = ''
//my.Icon            = 'icon image url'
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  function u(d) {
    if (e.Enabling == !1)
      return q(d);
    e.Value = d.target.value, typeof e._onInput == "function" && e._onInput(d, d.files);
  }
  e.Renderer = () => {
    const d = pt(e.Icon, "/img/arrow-up-from-bracket.png"), s = ii(e.Color, "black"), c = se(e.acceptableTypes), l = te(e.multiple);
    return t`<label class="SNS PseudoFileInput">
        <div style="
          -webkit-mask-image:url(${d}); mask-image:url(${d});
          background-color:${s};
        "></div>
        <input type="file" style="display:none"
          multiple=${l} accept=${c}
          onInput=${u}
        />
      </label>`;
  };
}, `
/**** PseudoFileInput ****/

  .SNS.Sticker > .SNS.PseudoFileInput > div {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }
  `);
P("native Controls", "File Drop Area", "FileDropArea", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 80 },
  Value: null,
  activeScript: `
  useBehavior('FileDropArea')
//my.Value           = ''
//my.Placeholder     = undefined
//my.acceptableTypes = undefined
//my.multiple        = false
//onInput(() => ...)
//onDrop(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  function u(l) {
    if (e.Enabling == !1)
      return q(l);
    e.Value = l.target.value, typeof e._onInput == "function" && e._onInput(l, l.files);
  }
  function d(l) {
    return q(l);
  }
  function s(l) {
    return q(l);
  }
  function c(l) {
    oi(l), e.Enabling != !1 && (e.Value = l.target.value, typeof e._onDrop == "function" && e._onDrop(l, l.dataTransfer.files));
  }
  e.Renderer = () => {
    const l = he(e.Placeholder, "").trim(), p = se(e.acceptableTypes), h = te(e.multiple);
    return t`<label class="SNS FileDropArea"
        onDragEnter=${d} onDragOver=${s} onDrop=${c}>
        <input type="file"
          multiple=${h} accept=${p}
          onInput=${u}
        />
        <span>${l}</span>
      </label>`;
  };
}, `
/**** FileDropArea ****/

  .SNS.Sticker > .SNS.FileDropArea {
    display:flex; flex-flow:column nowrap;
      justify-content:center; align-items:center;
    border:dashed 4px #DDDDDD; border-radius:4px;
    color:#DDDDDD; background:white;
  }

  .SNS.Sticker > .SNS.FileDropArea * { pointer-events:none }

  .SNS.Sticker > .SNS.FileDropArea > input[type="file"] {
    display:block; position:absolute; appearance:none;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }
  `);
P("native Controls", "Search Input", "SearchInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('SearchInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.Pattern       = '.*'
//my.SpellChecking = undefined
//my.Suggestions   = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = he(e.Value, "");
    const c = se(e.Placeholder), l = te(e.readonly), p = ge(e.minLength), h = ge(e.maxLength), g = se(e.Pattern), f = te(e.SpellChecking), m = ye(
      e.Suggestions,
      void 0,
      Ce
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let _ = "", w;
    return m != null && m.length > 0 && (w = e.Id + "-Suggestions", _ = t`<datalist id=${w}>
          ${m.map((k) => t`<option value=${k}></option>`)}
        </datalist>`), t`<input type="search" class="SNS SearchInput"
        value=${s} minlength=${p} maxlength=${h}
        readonly=${l} placeholder=${c}
        pattern=${g} spellcheck=${f}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${w}
      />${_}`;
  };
}, `
/**** SearchInput ****/

  .SNS.Sticker > .SNS.SearchInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.SearchInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
P("native Controls", "Color Input", "ColorInput", {
  Geometry: { x: 20, y: 20, Width: 40, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('ColorInput')
//my.Value       = ''
//my.Suggestions = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = jl(e.Value);
    const c = ye(
      e.Suggestions,
      void 0,
      ln
    );
    document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s;
    let l = "", p;
    return c != null && c.length > 0 && (p = e.Id + "-Suggestions", l = t`<datalist id=${p}>
          ${c.map((h) => t`<option value=${h}></option>`)}
        </datalist>`), t`<input type="color" class="SNS ColorInput"
        value=${s}
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        list=${p}
      />${l}`;
  };
}, `
/**** ColorInput ****/

  .SNS.Sticker > .SNS.ColorInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }
  `);
P("native Controls", "DropDown", "DropDown", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('DropDown')
//my.Value   = '...'
//my.Options = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = he(e.Value, "");
    const c = Us(
      e.Options,
      [],
      Ce
    );
    return document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s, t`<select class="SNS DropDown"
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
      >${c.map(
      (l) => {
        const p = l.replace(/:.*$/, "").trim(), h = l.replace(/^[^:]+:/, "").trim();
        return t`<option value=${p} selected=${p === s}>
            ${h}
          </option>`;
      }
    )}</select>`;
  };
}, `
/**** DropDown ****/

  .SNS.Sticker > .SNS.DropDown {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.SearchInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
P("native Controls", "Pseudo DropDown", "PseudoDropDown", {
  Geometry: { x: 20, y: 20, Width: 24, Height: 24 },
  Value: null,
  activeScript: `
  useBehavior('PseudoDropDown')
//my.Value   = '...'
//my.Icon    = 'icon image url'
//my.Options = ['...',...]
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = he(e.Value, "");
    const c = pt(e.Icon, "/img/menu.png"), l = ii(e.Color, "black"), p = Us(
      e.Options,
      [],
      Ce
    );
    return document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s, t`<div class="SNS PseudoDropDown">
        <div style="
          -webkit-mask-image:url(${c}); mask-image:url(${c});
          background-color:${l};
        "></div>
        <select disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}>
          ${p.map((h) => {
      const g = h.replace(/:.*\$/, "").trim(), f = h.replace(/^[^:]+:/, "").trim();
      return t`<option value=${g} selected=${g === s}>
              ${f}
            </option>`;
    })}
        </select>
      </div>`;
  };
}, `
/**** PseudoDropDown ****/

  .SNS.Sticker > .SNS.PseudoDropDown > div {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    -webkit-mask-size:contain;           mask-size:contain;
    -webkit-mask-position:center center; mask-position:center center;
  }

  .SNS.Sticker > .SNS.PseudoDropDown > select {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }
  `);
P("native Controls", "Text Input", "TextInput", {
  Geometry: { x: 20, y: 20, Width: 100, Height: 30 },
  Value: null,
  activeScript: `
  useBehavior('TextInput')
//my.Value         = ''
//my.Placeholder   = undefined
//my.readonly      = false
//my.minLength     = 0
//my.maxLength     = undefined
//my.LineWrapping  = false
//my.SpellChecking = undefined
//onInput(() => ...)
`
}, (n, e, t, i, o, r, a) => {
  e.ValueToShow = "";
  function u(s) {
    if (e.Enabling == !1)
      return q(s);
    e.Value = s.target.value, typeof e._onInput == "function" && e._onInput(s);
  }
  function d() {
    n.rerender();
  }
  e.Renderer = () => {
    let s = he(e.Value, "");
    const c = se(e.Placeholder), l = te(e.readonly), p = ge(e.minLength), h = ge(e.maxLength), g = te(e.LineWrapping), f = te(e.SpellChecking);
    return document.activeElement === e.View ? s = e.ValueToShow : e.ValueToShow = s, t`<textarea class="SNS TextInput"
        value=${s} minlength=${p} maxlength=${h}
        readonly=${l} placeholder=${c}
        spellcheck=${f} style="resize:none; ${g == !0 ? "white-space:pre; overflow-wrap:break-word; hyphens:auto" : void 0}"
        disabled=${e.Enabling == !1} onInput=${u} onBlur=${d}
        value=${s}
      />`;
  };
}, `
/**** TextInput ****/

  .SNS.Sticker > .SNS.TextInput {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff;
    padding:0px 2px 0px 2px;
  }

  .SNS.Sticker > .SNS.TextInput:readonly {
    border:solid 1px #DDDDDD; border-radius:2px;
    background:#F0F0F0;
  }
  `);
P("basic Shapes", "Line", "Line");
P("basic Shapes", "Polyline", "Polyline");
P("basic Shapes", "Arc", "Arc");
P("basic Shapes", "quadratic Bezier", "quadraticBezier");
P("basic Shapes", "cubic Bezier", "cubicBezier");
P("basic Shapes", "Box", "Box");
P("basic Shapes", "rounded Box", "roundedBox");
P("basic Shapes", "Oval", "Oval");
P("basic Shapes", "Chord", "Chord");
P("basic Shapes", "Pie", "Pie");
P("basic Shapes", "Polygon", "Polygon");
P("basic Shapes", "regular Polygon", "regularPolygon");
P("straight Arrows", "nw", "straightArrow_nw", {
  Geometry: { x: 20, y: 20, Width: 40, Height: 40 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}"
            d="M ${u},${d}, L 0,0"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);
P("straight Arrows", "n", "straightArrow_n", {
  Geometry: { x: 20, y: 20, Width: 40, Height: 40 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}"
            d="M ${u / 2},${d}, L ${u / 2},0"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);
P("straight Arrows", "ne", "straightArrow_ne", {
  Geometry: { x: 20, y: 20, Width: 40, Height: 40 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}"
            d="M 0,${d}, L ${u},0"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);
P("straight Arrows", "e", "straightArrow_e", {
  Geometry: { x: 20, y: 20, Width: 40, Height: 40 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}"
            d="M 0,${d / 2}, L ${u},${d / 2}"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);
P("straight Arrows", "se", "straightArrow_se", {
  Geometry: { x: 20, y: 20, Width: 40, Height: 40 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}"
            d="M 0,0, L ${u},${d}"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);
P("straight Arrows", "s", "straightArrow_s", {
  Geometry: { x: 20, y: 20, Width: 40, Height: 40 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}"
            d="M ${u / 2},0, L ${u / 2},${d}"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);
P("straight Arrows", "sw", "straightArrow_sw", {
  Geometry: { x: 20, y: 20, Width: 40, Height: 40 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}"
            d="M ${u},0, L 0,${d}"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);
P("straight Arrows", "w", "straightArrow_w", {
  Geometry: { x: 20, y: 20, Width: 40, Height: 40 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="4" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}"
            d="M ${u},${d / 2}, L 0,${d / 2}"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** straight Arrows ****/

  .SNS.straightArrow {
    overflow:visible;
  }
  `);
P("curved Arrows", "cw n", "curvedArrow_cw_n", {
  Geometry: { x: 20, y: 20, Width: 50, Height: 60 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}" fill="none"
            d="M ${u},${d - 6}, A ${u - 6} ${d - 18} 0 0 1 6 12"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);
P("curved Arrows", "cw e", "curvedArrow_cw_e", {
  Geometry: { x: 20, y: 20, Width: 60, Height: 50 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}" fill="none"
            d="M 6,${d}, A ${u - 18} ${d - 6} 0 0 1 ${u - 12} 6"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);
P("curved Arrows", "cw s", "curvedArrow_cw_s", {
  Geometry: { x: 20, y: 20, Width: 50, Height: 60 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}" fill="none"
            d="M 0,6, A ${u - 6} ${d - 18} 0 0 1 ${u - 6} ${d - 12}"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);
P("curved Arrows", "cw w", "curvedArrow_cw_w", {
  Geometry: { x: 20, y: 20, Width: 60, Height: 50 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}" fill="none"
            d="M ${u - 6},0, A ${u - 18} ${d - 6} 0 0 1 12 ${d - 6}"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);
P("curved Arrows", "ccw n", "curvedArrow_ccw_n", {
  Geometry: { x: 20, y: 20, Width: 50, Height: 60 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}" fill="none"
            d="M 0,${d - 6}, A ${u - 6} ${d - 18} 0 0 0 ${u - 6} 12"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);
P("curved Arrows", "ccw e", "curvedArrow_ccw_e", {
  Geometry: { x: 20, y: 20, Width: 60, Height: 50 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}" fill="none"
            d="M 6,0, A ${u - 18} ${d - 6} 0 0 0 ${u - 12} ${d - 6}"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);
P("curved Arrows", "ccw s", "curvedArrow_ccw_s", {
  Geometry: { x: 20, y: 20, Width: 50, Height: 60 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}" fill="none"
            d="M ${u},6, A ${u - 6} ${d - 18} 0 0 0 6 ${d - 12}"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);
P("curved Arrows", "ccw w", "curvedArrow_ccw_w", {
  Geometry: { x: 20, y: 20, Width: 60, Height: 50 }
}, (n, e, t, i, o, r, a) => {
  e.Renderer = function() {
    const { Width: u, Height: d } = e.Geometry, s = e.ForegroundColor || "black", c = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          width="${u}" height="${d}"
        >
          <defs>
            <marker id="arrow-head" orient="auto"
              markerWidth="5" markerHeight="4"
              refX="0" refY="2"
            >
              <path d="M0,0 V4 L5,2 Z" fill="${s}"/>
            </marker>
          </defs>

          <path marker-end="url(#arrow-head)" stroke-width="3" stroke="${s}" fill="none"
            d="M ${u - 6},${d}, A ${u - 18} ${d - 8} 0 0 0 12 6"
          />
        </svg>
      `, l = "data:image/svg+xml;base64," + btoa(c);
    return t`<img class="SNS straightArrow" src=${l}/>`;
  };
}, `
/**** curved Arrows ****/

  .SNS.curvedArrow {
    overflow:visible;
  }
  `);
P("complex Controls", "flat List View", "FlatListView");
P("complex Controls", "nested List View", "NestedListView");
P("complex Controls", "QR-Code View", "QRCodeView");
function pn(n) {
  Dl("visual", n);
  let e = [];
  const {
    BackgroundColor: t,
    BackgroundTexture: i,
    ForegroundColor: o,
    FontFamily: r,
    FontSize: a,
    FontWeight: u,
    FontStyle: d,
    LineHeight: s
  } = n;
  return t != null && e.push(`background-color:${t}`), i != null && e.push(
    `background-image:${i}; background-repeat:repeat`
  ), o != null && e.push(`color:${o}`), r != null && e.push(`font-family:${r}`), a != null && e.push(`font-size:${a}px`), u != null && e.push(`font-weight:${u}`), d != null && e.push(`font-style:${d}`), s != null && e.push(`line-height:${s}px`), e.join(";");
}
function oi(n) {
  n.stopPropagation(), n.preventDefault();
}
const q = oi;
let si = class {
  constructor(e, t) {
    O(this, "_Id"), O(this, "_Name"), O(this, "_Project"), O(this, "_Folder"), O(this, "_BackgroundColor"), O(this, "_BackgroundTexture"), O(this, "_FontFamily"), O(this, "_FontSize"), O(this, "_FontWeight"), O(this, "_FontStyle"), O(this, "_LineHeight"), O(this, "_ForegroundColor"), O(this, "_Value", null), O(this, "_observed"), O(this, "_unobserved"), O(this, "_activeScript"), O(this, "_pendingScript"), O(this, "_ScriptError"), O(this, "_Renderer"), O(this, "_View"), O(this, "_onMount"), O(this, "_onUnmount"), O(this, "_Error"), this._Project = e, this._Id = t || ql();
  }
  get Id() {
    return this._Id;
  }
  set Id(e) {
    Z("Id");
  }
  get Name() {
    return this._Name;
  }
  set Name(e) {
    Bl("visual name", e), e != null && (e = e.trim(), e === "" && (e = void 0)), this._Name !== e && (this._Name = e, this._reportChange("configure", this, "Name", e), this.rerender());
  }
  get Project() {
    return this._Project;
  }
  set Project(e) {
    Z("Project");
  }
  get Folder() {
    return this._Folder;
  }
  set Folder(e) {
    Z("Folder");
  }
  /**** isAttached ****/
  get isAttached() {
    return this._Folder == null ? dn(this) : this._Folder.isAttached;
  }
  set isAttached(e) {
    Z("isAttached");
  }
  get BackgroundColor() {
    return this._BackgroundColor == null ? this._Folder == null ? void 0 : this._Folder.BackgroundColor : this._BackgroundColor;
  }
  set BackgroundColor(e) {
    Di("visual background color", e), this._BackgroundColor !== e && (this._BackgroundColor = e, this._reportChange("configure", this, "BackgroundColor", e), this.rerender());
  }
  get BackgroundTexture() {
    return this._BackgroundTexture == null ? this._Folder == null ? void 0 : this._Folder.BackgroundTexture : this._BackgroundTexture;
  }
  set BackgroundTexture(e) {
    bs("visual background texture", e), this._BackgroundTexture !== e && (this._BackgroundTexture = e, this._reportChange("configure", this, "BackgroundTexture", e), this.rerender());
  }
  get FontFamily() {
    return this._FontFamily == null ? this._Folder == null ? void 0 : this._Folder.FontFamily : this._FontFamily;
  }
  set FontFamily(e) {
    Ka("visual font family", e), this._FontFamily !== e && (this._FontFamily = e, this._reportChange("configure", this, "FontFamily", e), this.rerender());
  }
  get FontSize() {
    return this._FontSize == null ? this._Folder == null ? void 0 : this._Folder.FontSize : this._FontSize;
  }
  set FontSize(e) {
    Wi("visual font size", e), this._FontSize !== e && (this._FontSize = e, this._reportChange("configure", this, "FontSize", e), this.rerender());
  }
  get FontWeight() {
    return this._FontWeight == null ? this._Folder == null ? void 0 : this._Folder.FontWeight : this._FontWeight;
  }
  set FontWeight(e) {
    qa("visual font weight", e, 1, 1e3), this._FontWeight !== e && (this._FontWeight = e, this._reportChange("configure", this, "FontWeight", e), this.rerender());
  }
  get FontStyle() {
    return this._FontStyle == null ? this._Folder == null ? void 0 : this._Folder.FontStyle : this._FontStyle;
  }
  set FontStyle(e) {
    tl("visual font style", e, Pl), this._FontStyle !== e && (this._FontStyle = e, this._reportChange("configure", this, "FontStyle", e), this.rerender());
  }
  get LineHeight() {
    return this._LineHeight == null ? this._Folder == null ? void 0 : this._Folder.LineHeight : this._LineHeight;
  }
  set LineHeight(e) {
    Wi("visual line height", e), this._LineHeight !== e && (this._LineHeight = e, this._reportChange("configure", this, "LineHeight", e), this.rerender());
  }
  get ForegroundColor() {
    return this._ForegroundColor == null ? this._Folder == null ? void 0 : this._Folder.ForegroundColor : this._ForegroundColor;
  }
  set ForegroundColor(e) {
    Di("visual foreground color", e), this._ForegroundColor !== e && (this._ForegroundColor = e, this._reportChange("configure", this, "ForegroundColor", e), this.rerender());
  }
  /**** Color ****/
  get Color() {
    return this.ForegroundColor;
  }
  set Color(e) {
    this.ForegroundColor = e;
  }
  get Value() {
    return this._Value;
  }
  set Value(e) {
    mt(this._Value, e) && (this._Value = e, this._reportChange("configure", this, "Value", e), this.rerender());
  }
  /**** editableValue (may be overwritten) ****/
  get editableValue() {
    return this._Value == null ? "" : "" + this._Value;
  }
  // stringify non-literal values before returning them
  set editableValue(e) {
    this.Value = e;
  }
  get observed() {
    return this._observed == null && (this._observed = Il({})), this._observed;
  }
  set observed(e) {
    Z("observed");
  }
  get unobserved() {
    return this._unobserved == null && (this._unobserved = {}), this._unobserved;
  }
  set unobserved(e) {
    Z("unobserved");
  }
  /**** Script ****/
  get Script() {
    return this._pendingScript == null ? this._activeScript : this._pendingScript;
  }
  set Script(e) {
    Z("Script");
  }
  get activeScript() {
    return this._activeScript;
  }
  set activeScript(e) {
    Ci("visual script", e), e === "" && (e = void 0), this._activeScript !== e && (this._activeScript = e, this._reportChange("configure", this, "activeScript", e), this.rerender());
  }
  get pendingScript() {
    return this._pendingScript;
  }
  set pendingScript(e) {
    Ci("visual script", e), this._pendingScript !== e && (this._pendingScript = e, this._reportChange("configure", this, "pendingScript", e), this.rerender());
  }
  /**** activateScript ****/
  activateScript() {
    let e = (this._activeScript || "").trim();
    if (this.Error = void 0, this._Renderer = void 0, ri(this), e != null) {
      let t;
      try {
        t = new Function(
          "me,my, html,reactively, onRender,onMount,onUnmount, useBehavior",
          e
        );
      } catch (u) {
        console.error("visual script compilation failure", u), this.Error = {
          Type: "Script Compilation Failure",
          Message: "" + u,
          Cause: u
        };
        return;
      }
      const i = (u) => {
        ft("reactive function", u), Gs(this, Ps(u));
      }, o = this.onRender.bind(this), r = this.onMount.bind(this), a = this.onUnmount.bind(this);
      try {
        t.call(
          this,
          this,
          this,
          un,
          i,
          o,
          r,
          a,
          iu.bind(this)
        );
      } catch (u) {
        console.error("visual script execution failure", u), this.Error = {
          Type: "Script Execution Failure",
          Message: "" + u,
          Cause: u
        };
        return;
      }
    }
    this.rerender();
  }
  get ScriptError() {
    return this._ScriptError == null ? void 0 : { ...this._ScriptError };
  }
  set ScriptError(e) {
    Ei("script error setting", e), mt(this._ScriptError, e) && (this._ScriptError = e, this._reportChange("configure", this, "ScriptError", e), this.rerender());
  }
  get Renderer() {
    return this._Renderer;
  }
  set Renderer(e) {
    Bt("visual renderer", e), this._Renderer !== e && (this._Renderer = e, this.rerender());
  }
  /**** onRender ****/
  onRender(e) {
    this.Renderer = e;
  }
  /**** Rendering (to be overwritten) ****/
  // @ts-ignore TS2564 allow "PropSet" to be never read
  Rendering(e) {
    return "";
  }
  /**** rerender (to be overwritten) ****/
  // @ts-ignore TS2564 allow "Board" and "Sticker" to be never read
  rerender(e, t) {
  }
  get View() {
    return this._View;
  }
  set View(e) {
    Z("View");
  }
  /**** isMounted ****/
  get isMounted() {
    return this._View != null;
  }
  set isMounted(e) {
    Z("isMounted");
  }
  onMount(e) {
    Bt('"onMount" callback', e), e == null ? this._onMount = void 0 : this._onMount = () => {
      try {
        e.call(this);
      } catch (t) {
        this.Error = {
          Type: '"onMount" Callback Failure',
          Message: "" + t,
          Cause: t
        }, this.rerender();
      }
    };
  }
  onUnmount(e) {
    Bt('"onUnmount" callback', e), e == null ? this._onUnmount = void 0 : this._onUnmount = () => {
      try {
        e.call(this);
      } catch (t) {
        this.Error = {
          Type: '"onUnmount" Callback Failure',
          Message: "" + t,
          Cause: t
        };
      }
    };
  }
  get Error() {
    return this._Error == null ? void 0 : { ...this._Error };
  }
  set Error(e) {
    Ei("error setting", e), mt(this._Error, e) && (this._Error = e, this._reportChange("configure", this, "Error", e), this.rerender());
  }
  /**** hasError ****/
  get hasError() {
    return this._Error != null;
  }
  set hasError(e) {
    Z("hasError");
  }
  /**** _reportChange ****/
  /* protected */
  _reportChange(e, ...t) {
    this._Project._reportChange(e, ...t);
  }
  /**** _serializeConfigurationInto ****/
  _serializeConfigurationInto(e) {
    e.Id = this.Id;
    const t = (i) => {
      this["_" + i] != null && (e[i] = this[i]);
    };
    [
      "Name",
      "BackgroundColor",
      "BackgroundTexture",
      "FontFamily",
      "FontSize",
      "FontWeight",
      "FontStyle",
      "LineHeight",
      "ForegroundColor",
      "Value",
      "activeScript",
      "pendingScript"
    ].forEach((i) => t(i));
  }
  /**** _deserializeConfigurationFrom ****/
  _deserializeConfigurationFrom(e) {
    const t = (i) => {
      if (e[i] != null)
        try {
          this[i] = e[i];
        } catch {
          console.warn(
            "DeserializationError:invalid value for property " + st(i)
          );
        }
    };
    t("activeScript"), [
      "Name",
      "BackgroundColor",
      "BackgroundTexture",
      "FontFamily",
      "FontSize",
      "FontWeight",
      "FontStyle",
      "LineHeight",
      "ForegroundColor",
      "Value",
      "pendingScript"
    ].forEach((i) => t(i));
  }
  // deserializing "activeScript" also automatically activates that script
}, ai = class extends si {
  constructor(e, t) {
    super(e, t), O(this, "_SnapToGrid"), O(this, "_GridWidth"), O(this, "_GridHeight"), O(this, "_BoardList", []);
  }
  // IMPORTANT: SNS_Project constructor will pass "undefined" as "Project"
  /**** Path ****/
  get Path() {
    const e = this._Folder;
    if (e == null)
      return "|";
    {
      const t = this.Name || "#" + this.Index, i = e.Path;
      return (i === "|" ? "" : i) + "|" + t;
    }
  }
  set Path(e) {
    Z("Path");
  }
  /**** BoardAtPath ****/
  BoardAtPath(e) {
    if (Nn("board path", e), e = e.trim(), e === "")
      return this._Folder == null ? void 0 : this;
    if (e.startsWith("|"))
      return this._Project.BoardAtPath(e.replace(/^(\s*\|)*/, ""));
    e = e.replace(/\|+/g, "|");
    const t = e.split("|").map(
      (o) => o.trim()
      // eliminate leading/trailing ws
    ).map(
      (o) => /^#\d+$/.test(o) ? parseInt(o.slice(1), 10) : o
    );
    let i;
    for (let o = 0, r = t.length; o < r; o++) {
      const a = t[o];
      if (typeof a == "number" ? i = (i || this).BoardAt(a) : i = (i || this).BoardNamed(a), i == null)
        return;
    }
    return i;
  }
  /**** IndexPath ****/
  get IndexPath() {
    const e = this._Folder;
    return e == null ? [] : e.IndexPath.concat(this.Index);
  }
  set IndexPath(e) {
    Z("IndexPath");
  }
  get SnapToGrid() {
    return this._SnapToGrid ? this._SnapToGrid == !0 : this._Folder == null ? !1 : this._Folder.SnapToGrid;
  }
  set SnapToGrid(e) {
    Ya("snap-to-grid setting", e), this._SnapToGrid !== e && (this._SnapToGrid = e, this._reportChange("configure", this, "SnapToGrid", e), this.rerender());
  }
  get GridWidth() {
    return this._GridWidth == null ? this._Folder == null ? zl : this._Folder.GridWidth : this._GridWidth;
  }
  set GridWidth(e) {
    Pi("snap-to-grid width", e), this._GridWidth !== e && (this._GridWidth = e, this._reportChange("configure", this, "GridWidth", e), this.rerender());
  }
  get GridHeight() {
    return this._GridHeight == null ? this._Folder == null ? Ol : this._Folder.GridHeight : this._GridHeight;
  }
  set GridHeight(e) {
    Pi("snap-to-grid height", e), this._GridHeight !== e && (this._GridHeight = e, this._reportChange("configure", this, "GridHeight", e), this.rerender());
  }
  /**** Index ****/
  get Index() {
    return this._Folder == null ? -1 : this._Folder.IndexOfBoard(this);
  }
  set Index(e) {
    Z("Index");
  }
  /**** mayBeShiftedUp ****/
  get mayBeShiftedUp() {
    return this._Folder == null ? !1 : this._Folder.mayShiftBoardUp(this);
  }
  set mayBeShiftedUp(e) {
    Z("mayBeShiftedUp");
  }
  /**** mayBeShiftedDown ****/
  get mayBeShiftedDown() {
    return this._Folder == null ? !1 : this._Folder.mayShiftBoardDown(this);
  }
  set mayBeShiftedDown(e) {
    Z("mayBeShiftedDown");
  }
  /**** mayBeShiftedIn ****/
  get mayBeShiftedIn() {
    return this._Folder == null ? !1 : this._Folder.mayShiftBoardIn(this);
  }
  set mayBeShiftedIn(e) {
    Z("mayBeShiftedIn");
  }
  /**** mayBeShiftedOut ****/
  get mayBeShiftedOut() {
    return this._Folder == null ? !1 : this._Folder.mayShiftBoardOut(this);
  }
  set mayBeShiftedOut(e) {
    Z("mayBeShiftedOut");
  }
  /**** containsFolder ****/
  containsFolder(e) {
    for (Fl("folder", e), e = e.Folder; e != null; ) {
      if (e === this)
        return !0;
      e = e.Folder;
    }
    return !1;
  }
  get BoardList() {
    return this._BoardList.slice();
  }
  set BoardList(e) {
    Z("BoardList");
  }
  /**** BoardCount ****/
  get BoardCount() {
    return this._BoardList.length;
  }
  set BoardCount(e) {
    Z("BoardCount");
  }
  /**** IndexOfBoard ****/
  IndexOfBoard(e) {
    const t = this.Board(e);
    return t == null ? -1 : this._BoardList.indexOf(t);
  }
  /**** Board ****/
  Board(e) {
    switch (xs("board, name or index", e), !0) {
      case Zt(e):
        const t = e;
        return t._Folder === this ? t : void 0;
      case an(e):
        let i = e;
        return i < 0 && (i += this._BoardList.length), this._BoardList[i];
      case cn(e):
        return this.BoardNamed(e);
    }
    Se(
      "InvalidArgument: no valid board, board name or board index given"
    );
  }
  /**** existingBoard ****/
  existingBoard(e) {
    let t = this.Board(e);
    return t == null && Se(
      "BoardNotFound: the desired board could not be found"
    ), t;
  }
  /**** BoardNamed ****/
  BoardNamed(e) {
    Yt("SNS board name", e), e = e.trim().toLowerCase();
    let t;
    return this._BoardList.forEach((i) => {
      t == null && i.Name != null && i.Name.toLowerCase() === e && (t = i);
    }), t;
  }
  /**** BoardAt ****/
  BoardAt(e) {
    return et("SNS board index", e), e < 0 && (e += this._BoardList.length), this._BoardList[e];
  }
  /**** hasBoard ****/
  hasBoard(e) {
    return this.Board(e) != null;
  }
  /**** newBoardAt ****/
  newBoardAt(e, t) {
    return t == null ? this.BoardDeserializedAt({}, e) : this.BoardDeserializedAt({ Id: t }, e);
  }
  /**** BoardDeserializedAt - nota bene: needs explicit script activation! ****/
  BoardDeserializedAt(e, t) {
    ni("board serialization", e), Tt("board insertionindex", t), t == null ? t = this._BoardList.length : (t < 0 && (t += this._BoardList.length), t = Math.max(0, Math.min(t, this._BoardList.length)));
    const i = Ns("board id", e.Id);
    let o = new js(this._Project, i);
    return this._attachBoardAt(o, t), o._deserializeConfigurationFrom(e), o._deserializeStickersFrom(e), o._deserializeBoardsFrom(e), this.rerender(), o;
  }
  /**** DuplicateOfBoardAt ****/
  DuplicateOfBoardAt(e) {
    et("board index", e);
    const t = this.existingBoard(e).Serialization;
    return Qt(t), this.BoardDeserializedAt(t, e + 1);
  }
  /**** mayShiftBoardUp/Down ****/
  mayShiftBoardUp(e) {
    const t = this.existingBoard(e);
    return this._BoardList.indexOf(t) > 0;
  }
  mayShiftBoardDown(e) {
    const t = this.existingBoard(e), i = this._BoardList, o = i.indexOf(t);
    return o >= 0 && o < i.length - 1;
  }
  /**** shiftBoardToTop ****/
  shiftBoardToTop(e) {
    const t = this.existingBoard(e);
    if (this.mayShiftBoardUp(t)) {
      const i = this._BoardList.indexOf(t);
      this._detachBoardAt(i), this._attachBoardAt(t, 0), this.rerender();
    }
  }
  /**** shiftBoardUp ****/
  shiftBoardUp(e) {
    const t = this.existingBoard(e);
    if (this.mayShiftBoardUp(t)) {
      const i = this._BoardList.indexOf(t);
      this._detachBoardAt(i), this._attachBoardAt(t, i - 1), this.rerender();
    }
  }
  /**** shiftBoardDown ****/
  shiftBoardDown(e) {
    const t = this.existingBoard(e);
    if (this.mayShiftBoardDown(t)) {
      const i = this._BoardList.indexOf(t);
      this._detachBoardAt(i), this._attachBoardAt(t, i + 1), this.rerender();
    }
  }
  /**** shiftBoardToBottom ****/
  shiftBoardToBottom(e) {
    const t = this.existingBoard(e);
    if (this.mayShiftBoardDown(t)) {
      const i = this._BoardList.indexOf(t);
      this._detachBoardAt(i), this._attachBoardAt(t, this._BoardList.length), this.rerender();
    }
  }
  /**** shiftBoardTo ****/
  shiftBoardTo(e, t) {
    const i = this.existingBoard(e);
    et("SNS board index", t), t < 0 && (t += this._BoardList.length), t = Math.max(0, Math.min(t, this._BoardList.length));
    const o = this._BoardList.indexOf(i);
    o !== t && (this._detachBoardAt(o), this._attachBoardAt(i, t), this.rerender());
  }
  /**** shiftBoardsByIndex ****/
  shiftBoardsByIndex(e, t, i) {
    const o = this._BoardList.length;
    _t("old index", e, 0, o), _t("new index", t, 0, o);
    const r = this._BoardList.slice(e, e + i);
    r.forEach((a) => this._detachBoardAt(e)), t > e && (t -= i), r.forEach(
      (a, u) => this._attachBoardAt(a, t + u)
    ), this.rerender();
  }
  /**** mayShiftBoardIn/Out ****/
  mayShiftBoardIn(e) {
    const t = this.existingBoard(e);
    return this.mayShiftBoardDown(t);
  }
  mayShiftBoardOut(e) {
    return this._Folder != null;
  }
  /**** shiftBoardIn ****/
  shiftBoardIn(e) {
    const t = this.existingBoard(e);
    if (this.mayShiftBoardIn(t)) {
      const i = this._BoardList.indexOf(t), o = this._BoardList[i + 1];
      this._detachBoardAt(i), o._attachBoardAt(t, 0), this.rerender(), o.rerender();
    }
  }
  /**** shiftBoardOut ****/
  shiftBoardOut(e) {
    const t = this.existingBoard(e);
    if (this.mayShiftBoardOut(t)) {
      const i = this._BoardList.indexOf(t), o = this._Folder;
      this._detachBoardAt(i), o._attachBoardAt(t, o.Index), this.rerender(), o.rerender();
    }
  }
  /**** mayMoveBoardTo ****/
  mayMoveBoardTo(e, t, i) {
    const o = this.existingBoard(e), r = St(t) ? t : this.existingBoard(t);
    return Tt("insertion index", i), r.isAttached && r !== o && !o.containsFolder(r);
  }
  /**** moveBoardTo ****/
  moveBoardTo(e, t, i) {
    const o = this.existingBoard(e), r = St(t) ? t : this.existingBoard(t);
    if (Tt("insertion index", i), r.isAttached && r !== o && !o.containsFolder(r)) {
      const a = this._BoardList.indexOf(o);
      let u = i ?? r.BoardCount;
      u < 0 && (u += r.BoardCount), u = Math.max(0, Math.min(u, r.BoardCount)), this._detachBoardAt(a), r._attachBoardAt(o, u), this.rerender(), r.rerender();
    }
  }
  /**** destroyBoard ****/
  destroyBoard(e) {
    const t = this.Board(e);
    if (t == null) {
      Zt(e) && Se(
        "NoSuchBoard: the given board could not be found"
      );
      return;
    }
    t.clear(), ri(t);
    const i = this._BoardList.indexOf(t);
    this._detachBoardAt(i), Kl(t), t._Project = void 0, this._reportChange("destroyBoard", t), this.rerender();
  }
  /**** clear ****/
  clear() {
    for (let e = 0, t = this._BoardList.length; e < t; e++)
      this.destroyBoard(this._BoardList[0]);
  }
  /**** Rendering ****/
  Rendering(e) {
    if (this.hasError)
      return qt.call(this);
    let t = this._Renderer;
    if (t == null)
      return "";
    try {
      return t.call(this, e);
    } catch (i) {
      return this.Error = {
        Type: "Rendering Failure",
        Message: "" + i,
        Cause: i
      }, qt.call(this);
    }
  }
  /**** _attachBoardAt ****/
  /* protected */
  _attachBoardAt(e, t) {
    e._Folder = this, this._BoardList.splice(t, 0, e), this._reportChange("attachBoard", e, this, t);
  }
  /**** _detachBoardAt ****/
  /* protected */
  _detachBoardAt(e) {
    const t = this._BoardList.splice(e, 1)[0];
    t._Folder = void 0, this._reportChange("detachBoard", t, this, e);
  }
  /**** _serializeConfigurationInto ****/
  _serializeConfigurationInto(e) {
    super._serializeConfigurationInto(e);
    const t = (i) => {
      this["_" + i] != null && (e[i] = this[i]);
    };
    [
      "SnapToGrid",
      "GridWidth",
      "GridHeight"
    ].forEach((i) => t(i));
  }
  /**** _deserializeConfigurationFrom ****/
  _deserializeConfigurationFrom(e) {
    super._deserializeConfigurationFrom(e);
    const t = (i) => {
      if (e[i] != null)
        try {
          this[i] = e[i];
        } catch {
          console.warn(
            "DeserializationError:invalid value for property " + st(i)
          );
        }
    };
    [
      "SnapToGrid",
      "GridWidth",
      "GridHeight"
    ].forEach((i) => t(i));
  }
  /**** _serializeBoardsInto ****/
  _serializeBoardsInto(e) {
    const t = this._BoardList.slice();
    t.length > 0 && (e.BoardList = t.map(
      (i) => i.Serialization
    ));
  }
  /**** _deserializeBoardsFrom ****/
  _deserializeBoardsFrom(e) {
    this._BoardList.length > 0 && this.clear(), $t(e.BoardList, bt) && e.BoardList.length > 0 && e.BoardList.forEach(
      (t, i) => {
        this.BoardDeserializedAt(t, i);
      }
    );
  }
};
const fu = /* @__PURE__ */ Object.create(null);
[
  "Name",
  "BackgroundColor",
  "BackgroundTexture",
  "FontFamily",
  "FontSize",
  "FontWeight",
  "FontStyle",
  "LineHeight",
  "ForegroundColor",
  "Value",
  "activeScript",
  "pendingScript",
  "SnapToGrid",
  "GridWidth",
  "GridHeight"
].forEach((n) => fu[n] = !0);
let zs = class Os extends ai {
  constructor(e) {
    super(void 0, void 0), O(this, "_onChange", []), O(this, "_onRender", []), O(this, "_onError", []), this._Project = this, Yt("project name", e), this._Name = e;
  }
  /**** Name ****/
  get Name() {
    return this._Name;
  }
  set Name(e) {
    Z("Name");
  }
  /**** IndexPath ****/
  get IndexPath() {
    return [];
  }
  set IndexPath(e) {
    Z("IndexPath");
  }
  /**** BoardAtIndexPath ****/
  BoardAtIndexPath(e) {
    if (el("board index path", e, Jn), e.length !== 0) {
      let t;
      for (let i = 0, o = e.length; i < o; i++)
        if (t = (t || this).BoardAt(e[i]), t == null)
          return;
      return t;
    }
  }
  /**** FolderWithId ****/
  FolderWithId(e) {
    return Bi("folder id", e), Mi(this, e);
  }
  /**** BoardWithId ****/
  BoardWithId(e) {
    const t = Mi(this, e);
    return dn(t) && Se(
      "NotABoard: the folder with the given id is not a board, but the project"
    ), t;
  }
  /**** StickerWithId ****/
  StickerWithId(e) {
    return Bi("sticker id", e), tu(this, e);
  }
  /**** recursivelyActivateAllScripts ****/
  recursivelyActivateAllScripts() {
    this.activateScript(), this._BoardList.forEach(
      (e) => e.recursivelyActivateAllScripts()
    );
  }
  onChange(e) {
    ft('"onChange" callback', e), this._onChange.push(e);
  }
  /**** _reportChange ****/
  /* protected */
  _reportChange(e, t, ...i) {
    e === "configure" && (e = St(t) ? "configureFolder" : "configureSticker"), i.unshift(this, e, t), this._onChange.forEach(
      // @ts-ignore TS2345 skip checking of individual "ArgList" elements
      (o) => o.apply(this, i)
    );
  }
  onRender(e) {
    ft('"onRender" callback', e), this._onRender.push(e);
  }
  /**** rerender ****/
  rerender(e, t) {
    this._onRender.forEach(
      (i) => i(this, e, t)
    );
  }
  onError(e) {
    ft('"onError" callback', e), this._onError.push(e);
  }
  /**** showError ****/
  showError(e, t) {
    this._onError.forEach(
      (i) => i(this, e, t)
    );
  }
  /**** Serialization ****/
  get Serialization() {
    const e = {};
    return this._serializeConfigurationInto(e), this._serializeBoardsInto(e), delete e.Id, e;
  }
  set Serialization(e) {
    Z("Serialization");
  }
  /**** deserializedFrom - nota bene: needs explicit script activation! ****/
  static deserializedFrom(e, t) {
    Yt("project name", e);
    const i = new Os(e);
    return delete t.Name, i._Name = e, i._deserializeConfigurationFrom(t), i._deserializeBoardsFrom(t), i;
  }
};
const Rs = /* @__PURE__ */ Object.create(null);
[
  "Name",
  "BackgroundColor",
  "BackgroundTexture",
  "FontFamily",
  "FontSize",
  "FontWeight",
  "FontStyle",
  "LineHeight",
  "ForegroundColor",
  "Value",
  "activeScript",
  "pendingScript",
  "SnapToGrid",
  "GridWidth",
  "GridHeight"
].forEach((n) => Rs[n] = !0);
let js = class extends ai {
  /* protected */
  constructor(e, t) {
    super(e, t), O(this, "_StickerList", []), Jl(e, this), e._reportChange("createBoard", this);
  }
  get StickerList() {
    return this._StickerList.slice();
  }
  set StickerList(e) {
    Z("StickerList");
  }
  /**** StickerCount ****/
  get StickerCount() {
    return this._StickerList.length;
  }
  set StickerCount(e) {
    Z("StickerCount");
  }
  /**** IndexOfSticker ****/
  IndexOfSticker(e) {
    return Ds("SNS sticker to search for", e), this._StickerList.indexOf(e);
  }
  /**** Sticker ****/
  Sticker(e) {
    switch (xs("sticker, name or index", e), !0) {
      case tt(e):
        const t = e;
        return t.Board === this ? t : void 0;
      case an(e):
        const i = e;
        return this._StickerList[i];
      case cn(e):
        return this.StickerNamed(e);
    }
    Se(
      "InvalidArgument: no valid sticker, sticker name or sticker index given"
    );
  }
  /**** existingSticker ****/
  existingSticker(e) {
    let t = this.Sticker(e);
    return t == null && Se(
      "StickerNotFound: the desired sticker could not be found"
    ), t;
  }
  /**** StickerNamed ****/
  StickerNamed(e) {
    Yt("SNS sticker name", e), e = e.trim().toLowerCase();
    let t;
    return this._StickerList.forEach((i) => {
      t == null && i.Name != null && i.Name.toLowerCase() === e && (t = i);
    }), t;
  }
  /**** StickerAt ****/
  StickerAt(e) {
    return et("SNS sticker index", e), e < 0 && (e += this._StickerList.length), this._StickerList[e];
  }
  /**** hasSticker ****/
  hasSticker(e) {
    return this.Sticker(e) != null;
  }
  /**** newStickerAt ****/
  newStickerAt(e, t) {
    return t == null ? this.StickerDeserializedAt({}, e) : this.StickerDeserializedAt({ Id: t }, e);
  }
  /**** StickerDeserializedAt - nota bene: needs explicit script activation! ****/
  StickerDeserializedAt(e, t) {
    ni("sticker serialization", e), Tt("SNS sticker index", t), t == null ? t = this._StickerList.length : (t < 0 && (t += this._StickerList.length), t = Math.max(0, Math.min(t, this._StickerList.length)));
    const i = Ns("sticker id", e.Id);
    let o = new Zs(this.Project, i);
    return this._attachStickerAt(o, t), o._deserializeConfigurationFrom(e), this.rerender(), o;
  }
  /**** DuplicateOfStickerAt ****/
  DuplicateOfStickerAt(e) {
    et("SNS sticker index", e);
    const t = this.existingSticker(e).Serialization;
    return Qt(t), this.StickerDeserializedAt(t, e + 1);
  }
  /**** mayShiftStickerUp/Down ****/
  mayShiftStickerUp(e) {
    const t = this.existingSticker(e);
    return this._StickerList.indexOf(t) > 0;
  }
  mayShiftStickerDown(e) {
    const t = this.existingSticker(e), i = this._StickerList, o = i.indexOf(t);
    return o >= 0 && o < i.length - 1;
  }
  /**** shiftStickerToTop ****/
  shiftStickerToTop(e) {
    const t = this.existingSticker(e);
    if (this.mayShiftStickerUp(t)) {
      const i = this._StickerList.indexOf(t);
      this._detachStickerAt(i), this._attachStickerAt(t, 0), this.rerender();
    }
  }
  /**** shiftStickerUp ****/
  shiftStickerUp(e) {
    const t = this.existingSticker(e);
    if (this.mayShiftStickerUp(t)) {
      const i = this._StickerList.indexOf(t);
      this._detachStickerAt(i), this._attachStickerAt(t, i - 1), this.rerender();
    }
  }
  /**** shiftStickerDown ****/
  shiftStickerDown(e) {
    const t = this.existingSticker(e);
    if (this.mayShiftStickerDown(t)) {
      const i = this._StickerList.indexOf(t);
      this._detachStickerAt(i), this._attachStickerAt(t, i + 1), this.rerender();
    }
  }
  /**** shiftStickerToBottom ****/
  shiftStickerToBottom(e) {
    const t = this.existingSticker(e);
    if (this.mayShiftStickerDown(t)) {
      const i = this._StickerList.indexOf(t);
      this._detachStickerAt(i), this._attachStickerAt(t, this._StickerList.length), this.rerender();
    }
  }
  /**** shiftStickerTo ****/
  shiftStickerTo(e, t) {
    const i = this.existingSticker(e);
    et("SNS sticker index", t), t < 0 && (t += this._StickerList.length), t = Math.max(0, Math.min(t, this._StickerList.length - 1));
    const o = this._StickerList.indexOf(i);
    o !== t && (this._detachStickerAt(o), this._attachStickerAt(i, t), this.rerender());
  }
  /**** shiftStickersByIndex ****/
  shiftStickersByIndex(e, t, i) {
    const o = this._StickerList.length;
    _t("old index", e, 0, o), _t("new index", t, 0, o);
    const r = this._StickerList.slice(e, e + i);
    r.forEach((a) => this._detachStickerAt(e)), t > e && (t -= i), r.forEach(
      (a, u) => this._attachStickerAt(a, t + u)
    ), this.rerender();
  }
  /**** destroySticker ****/
  destroySticker(e) {
    const t = this.Sticker(e);
    if (t == null) {
      tt(e) && Se(
        "NoSuchSticker: the given sticker could not be found"
      );
      return;
    }
    ri(t);
    const i = this._StickerList.indexOf(t);
    this._detachStickerAt(i), eu(t), t._Project = void 0, this._reportChange("destroySticker", t), this.rerender();
  }
  /**** clear ****/
  clear() {
    super.clear();
    for (let e = 0, t = this._StickerList.length; e < t; e++)
      this.destroySticker(this._StickerList[0]);
  }
  /**** recursivelyActivateAllScripts ****/
  recursivelyActivateAllScripts() {
    this.activateScript(), this._BoardList.forEach(
      (e) => e.recursivelyActivateAllScripts()
    ), this._StickerList.forEach(
      (e) => e.activateScript()
    );
  }
  /**** rerender ****/
  rerender() {
    this.Project.rerender(this);
  }
  /**** _attachStickerAt ****/
  /* protected */
  _attachStickerAt(e, t) {
    e._Folder = this, this._StickerList.splice(t, 0, e), this._reportChange("attachSticker", e, this, t);
  }
  /**** _detachStickerAt ****/
  /* protected */
  _detachStickerAt(e) {
    const t = this._StickerList.splice(e, 1)[0];
    t._Folder = void 0, this._reportChange("detachSticker", t, this, e);
  }
  /**** Serialization ****/
  get Serialization() {
    const e = {};
    return this._serializeConfigurationInto(e), this._serializeBoardsInto(e), this._serializeStickersInto(e), e;
  }
  set Serialization(e) {
    Z("Serialization");
  }
  /**** _serializeStickersInto ****/
  _serializeStickersInto(e) {
    const t = this._StickerList.slice();
    t.length > 0 && (e.StickerList = t.map(
      (i) => i.Serialization
    ));
  }
  /**** _deserializeStickersFrom ****/
  _deserializeStickersFrom(e) {
    this._StickerList.length > 0 && this.clear(), $t(e.StickerList, bt) && e.StickerList.length > 0 && e.StickerList.forEach(
      (t, i) => {
        this.StickerDeserializedAt(t, i);
      }
    );
  }
};
[
  "Name",
  "BackgroundColor",
  "BackgroundTexture",
  "FontFamily",
  "FontSize",
  "FontWeight",
  "FontStyle",
  "LineHeight",
  "ForegroundColor",
  "Value",
  "activeScript",
  "pendingScript",
  "SnapToGrid",
  "GridWidth",
  "GridHeight"
].forEach((n) => Rs[n] = !0);
let Zs = class extends si {
  /* protected */
  constructor(e, t) {
    super(e, t), O(this, "_minWidth"), O(this, "_maxWidth", Ul), O(this, "_minHeight"), O(this, "_maxHeight", Gl), O(this, "_Geometry", { ...ut }), O(this, "_Lock", !1), O(this, "_Visibility", !0), O(this, "_Enabling", !0), Ql(e, this), e._reportChange("createSticker", this);
  }
  /**** Board ****/
  get Board() {
    return this._Folder;
  }
  set Board(e) {
    Z("Board");
  }
  /**** BackgroundTexture ****/
  get BackgroundTexture() {
    return this._BackgroundTexture;
  }
  set BackgroundTexture(e) {
    bs("visual background texture", e), this._BackgroundTexture !== e && (this._BackgroundTexture = e, this._reportChange("configure", this, "BackgroundTexture", e), this.rerender());
  }
  /**** Index ****/
  get Index() {
    return this._Folder.IndexOfSticker(this);
  }
  set Index(e) {
    Z("Index");
  }
  /**** mayBeShiftedUp ****/
  get mayBeShiftedUp() {
    return this._Folder.mayShiftStickerUp(this);
  }
  set mayBeShiftedUp(e) {
    Z("mayBeShiftedUp");
  }
  /**** mayBeShiftedDown ****/
  get mayBeShiftedDown() {
    return this._Folder.mayShiftStickerDown(this);
  }
  set mayBeShiftedDown(e) {
    Z("mayBeShiftedDown");
  }
  get minWidth() {
    return this._minWidth == null ? Ml : this._minWidth;
  }
  set minWidth(e) {
    Ct("minimal sticker width", e), this._minWidth !== e && (this._minWidth = e, this._reportChange("configure", this, "minWidth", e), this._minWidth != null && this._maxWidth != null && this._maxWidth < this._minWidth && (this._maxWidth = e, this._reportChange("configure", this, "maxWidth", this._minWidth)), this._minWidth != null && this._Geometry.Width < this._minWidth && (this.Width = this._minWidth), this.rerender());
  }
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(e) {
    Ct("maximal sticker width", e), e != null && this._minWidth != null && (e = Math.max(this._minWidth, e)), this._maxWidth !== e && (this._maxWidth = e, this._reportChange("configure", this, "maxWidth", this._maxWidth), this._maxWidth != null && this._Geometry.Width > this._maxWidth && (this.Width = this._maxWidth), this.rerender());
  }
  get minHeight() {
    return this._minHeight == null ? Xl : this._minHeight;
  }
  set minHeight(e) {
    Ct("minimal sticker height", e), this._minHeight !== e && (this._minHeight = e, this._reportChange("configure", this, "minHeight", e), this._minHeight != null && this._maxHeight != null && this._maxHeight < this._minHeight && (this._maxHeight = e, this._reportChange("configure", this, "maxHeight", this._minHeight)), this._minHeight != null && this._Geometry.Height < this._minHeight && (this.Height = this._minHeight), this.rerender());
  }
  get maxHeight() {
    return this._maxHeight;
  }
  set maxHeight(e) {
    Ct("maximal sticker height", e), e != null && this._minHeight != null && (e = Math.max(this._minHeight, e)), this._maxHeight !== e && (this._maxHeight = e, this._reportChange("configure", this, "maxHeight", this._maxHeight), this._maxHeight != null && this._Geometry.Height > this._maxHeight && (this.Height = this._maxHeight), this.rerender());
  }
  /**** x ****/
  get x() {
    return this._Geometry.x;
  }
  set x(e) {
    Ai("sticker x coordinate", e), this.Geometry = { ...this.Geometry, x: e };
  }
  /**** y ****/
  get y() {
    return this._Geometry.y;
  }
  set y(e) {
    Ai("sticker y coordinate", e), this.Geometry = { ...this.Geometry, y: e };
  }
  /**** Width ****/
  get Width() {
    return this._Geometry.Width;
  }
  set Width(e) {
    Hi("sticker width", e), this.Geometry = { ...this.Geometry, Width: e };
  }
  /**** Height ****/
  get Height() {
    return this._Geometry.Height;
  }
  set Height(e) {
    Hi("sticker height", e), this.Geometry = { ...this.Geometry, Height: e };
  }
  /**** Position ****/
  get Position() {
    return { x: this._Geometry.x, y: this._Geometry.y };
  }
  set Position(e) {
    Al("visual position", e), this.Geometry = { ...this.Geometry, x: e.x, y: e.y };
  }
  /**** Size ****/
  get Size() {
    return { Width: this._Geometry.Width, Height: this._Geometry.Height };
  }
  set Size(e) {
    Hl("visual size", e), this.Geometry = { ...this.Geometry, Width: e.Width, Height: e.Height };
  }
  get Geometry() {
    let { x: e, y: t, Width: i, Height: o } = this._Geometry;
    return this._minWidth != null && (i = Math.max(this._minWidth, i)), this._maxWidth != null && (i = Math.min(i, this._maxWidth)), this._minHeight != null && (o = Math.max(this._minHeight, o)), this._maxHeight != null && (o = Math.min(o, this._maxHeight)), { x: e, y: t, Width: i, Height: o };
  }
  set Geometry(e) {
    El("visual geometry", e);
    let { x: t, y: i, Width: o, Height: r } = this._Geometry;
    (t !== e.x || o !== e.Width || i !== e.y || r !== e.Height) && (this._Geometry = { ...e }, this._reportChange("configure", this, "Geometry", { ...e }), this.rerender());
  }
  get Lock() {
    return this._Lock;
  }
  set Lock(e) {
    bn("sticker lock", e), this._Lock !== e && (this._Lock = e, this._reportChange("configure", this, "Lock", e), this.rerender());
  }
  /**** lock/unlock ****/
  lock() {
    this.Lock = !0;
  }
  unlock() {
    this.Lock = !1;
  }
  /**** isLocked ****/
  get isLocked() {
    return this._Lock;
  }
  set isLocked(e) {
    this.Lock = e;
  }
  get Visibility() {
    return this._Visibility;
  }
  set Visibility(e) {
    bn("sticker visibility", e), this._Visibility !== e && (this._Visibility = e, this._reportChange("configure", this, "Visibility", e), this.rerender());
  }
  /**** show/hide ****/
  show() {
    this.Visibility = !0;
  }
  hide() {
    this.Visibility = !1;
  }
  /**** isVisible ****/
  get isVisible() {
    return this._Visibility;
  }
  set isVisible(e) {
    this.Visibility = e;
  }
  get Enabling() {
    return this._Enabling;
  }
  set Enabling(e) {
    bn("sticker enabling", e), this._Enabling !== e && (this._Enabling = e, this._reportChange("configure", this, "Enabling", e), this.rerender());
  }
  /**** enable/disable ****/
  enable() {
    this.Enabling = !0;
  }
  disable() {
    this.Enabling = !1;
  }
  /**** isEnabled ****/
  get isEnabled() {
    return this._Enabling;
  }
  set isEnabled(e) {
    this.Enabling = e;
  }
  /**** Rendering ****/
  Rendering(e) {
    if (this.hasError)
      return qt.call(this);
    let t = this._Renderer || Xs;
    try {
      return t.call(this, e);
    } catch (i) {
      return this.Error = {
        Type: "Rendering Failure",
        Message: "" + i,
        Cause: i
      }, qt.call(this);
    }
  }
  /**** rerender ****/
  rerender() {
    this._Project.rerender(this._Folder, this);
  }
  /**** Serialization ****/
  get Serialization() {
    const e = {};
    return this._serializeConfigurationInto(e), e;
  }
  set Serialization(e) {
    Z("Serialization");
  }
  /**** _serializeConfigurationInto ****/
  _serializeConfigurationInto(e) {
    super._serializeConfigurationInto(e), e.Geometry = { ...this._Geometry }, this._minWidth != null && (e.minWidth = this._minWidth), this._maxWidth != null && (e.maxWidth = this._maxWidth), this._minHeight != null && (e.minHeight = this._minHeight), this._maxHeight != null && (e.maxHeight = this._maxHeight), this.isLocked && (e.Lock = !0), this.isVisible || (e.Visibility = !1), this.isEnabled || (e.Enabling = !1);
  }
  /**** _deserializeConfigurationFrom ****/
  _deserializeConfigurationFrom(e) {
    super._deserializeConfigurationFrom(e);
    let { x: t, y: i, Width: o, Height: r } = e.Geometry || ut;
    Oe(t) || (t = ut.x), Oe(i) || (i = ut.y), Re(o) || (o = ut.Width), Re(r) || (r = ut.Height), this.Geometry = { x: t, y: i, Width: o, Height: r }, e.Lock != null && (this.Lock = e.Lock), e.Visibility != null && (this.Visibility = e.Visibility), e.Enabling != null && (this.Enabling = e.Enabling);
  }
};
window.SNS = {
  throwError: Se,
  throwReadOnlyError: Z,
  SNS_Project: zs
};
console.log("SNS is globally available now");
document.dispatchEvent(
  // @ts-ignore TS2339 allow global variable "SNS"
  new CustomEvent("SNS", { detail: window.SNS })
);
function mu(n, e, t) {
  switch (!0) {
    case e == null:
      throw new Error('no "Position" given');
    case (typeof e.left != "number" && !(e.left instanceof Number)):
    case (typeof e.top != "number" && !(e.top instanceof Number)):
      throw new Error('invalid "Position" given');
  }
  switch (n) {
    case null:
    case void 0:
      throw new Error("no coordinate system given");
    case "viewport":
      return { left: e.left, top: e.top };
    case "document":
      return {
        left: e.left + window.scrollX,
        top: e.top + window.scrollY
      };
    case "local":
      switch (!0) {
        case t == null:
          throw new Error("no target element given");
        case t instanceof Element:
          var i = window.getComputedStyle(t), o = parseFloat(i.borderLeftWidth), r = parseFloat(i.borderTopWidth), a = t.getBoundingClientRect();
          return {
            left: e.left - a.left - o,
            top: e.top - a.top - r
          };
        default:
          throw new Error("invalid target element given");
      }
    default:
      throw new Error("invalid coordinate system given");
  }
}
function _u(n, e, t) {
  switch (!0) {
    case e == null:
      throw new Error('no "Position" given');
    case (typeof e.left != "number" && !(e.left instanceof Number)):
    case (typeof e.top != "number" && !(e.top instanceof Number)):
      throw new Error('invalid "Position" given');
  }
  switch (n) {
    case null:
    case void 0:
      throw new Error("no coordinate system given");
    case "viewport":
      return {
        left: e.left - window.scrollX,
        top: e.top - window.scrollY
      };
    case "document":
      return { left: e.left, top: e.top };
    case "local":
      switch (!0) {
        case t == null:
          throw new Error("no target element given");
        case t instanceof Element:
          var i = window.getComputedStyle(t), o = parseFloat(i.borderLeftWidth), r = parseFloat(i.borderTopWidth), a = t.getBoundingClientRect();
          return {
            left: e.left + window.scrollX - a.left - o,
            top: e.top + window.scrollY - a.top - r
          };
        default:
          throw new Error("invalid target element given");
      }
    default:
      throw new Error("invalid coordinate system given");
  }
}
function Su(n, e, t) {
  switch (!0) {
    case e == null:
      throw new Error('no "Position" given');
    case (typeof e.left != "number" && !(e.left instanceof Number)):
    case (typeof e.top != "number" && !(e.top instanceof Number)):
      throw new Error('invalid "Position" given');
  }
  var i, o, r;
  switch (!0) {
    case t == null:
      throw new Error("no source element given");
    case t instanceof Element:
      var a = window.getComputedStyle(t), u = parseFloat(a.borderLeftWidth), d = parseFloat(a.borderTopWidth);
      i = t.getBoundingClientRect(), o = i.left + u, r = i.top + d;
      break;
    default:
      throw new Error("invalid source element given");
  }
  switch (n) {
    case null:
    case void 0:
      throw new Error("no coordinate system given");
    case "viewport":
      return {
        left: e.left + o,
        top: e.top + r
      };
    case "document":
      return {
        left: e.left + o + window.scrollX,
        top: e.top + r + window.scrollY
      };
    case "local":
      return { left: e.left, top: e.top };
    default:
      throw new Error("invalid coordinate system given");
  }
}
var yu = {
  fromViewportTo: mu,
  fromDocumentTo: _u,
  fromLocalTo: Su
}, li, re, Ys, Je, Xi, qs, En, ui, Mn, Un, Xn = {}, Js = [], xu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, di = Array.isArray;
function Ue(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function Ks(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function bu(n, e, t) {
  var i, o, r, a = {};
  for (r in e)
    r == "key" ? i = e[r] : r == "ref" ? o = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? li.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return Gt(n, a, i, o, null);
}
function Gt(n, e, t, i, o) {
  var r = { type: n, props: e, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Ys, __i: -1, __u: 0 };
  return o == null && re.vnode != null && re.vnode(r), r;
}
function ci(n) {
  return n.children;
}
function ze(n, e) {
  this.props = n, this.context = e;
}
function nt(n, e) {
  if (e == null)
    return n.__ ? nt(n.__, n.__i + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? nt(n) : null;
}
function Qs(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return Qs(n);
  }
}
function Gi(n) {
  (!n.__d && (n.__d = !0) && Je.push(n) && !en.__r++ || Xi !== re.debounceRendering) && ((Xi = re.debounceRendering) || qs)(en);
}
function en() {
  var n, e, t, i, o, r, a, u;
  for (Je.sort(En); n = Je.shift(); )
    n.__d && (e = Je.length, i = void 0, r = (o = (t = n).__v).__e, a = [], u = [], t.__P && ((i = Ue({}, o)).__v = o.__v + 1, re.vnode && re.vnode(i), na(t.__P, i, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [r] : null, a, r ?? nt(o), !!(32 & o.__u), u), i.__v = o.__v, i.__.__k[i.__i] = i, wu(a, i, u), i.__e != r && Qs(i)), Je.length > e && Je.sort(En));
  en.__r = 0;
}
function ea(n, e, t, i, o, r, a, u, d, s, c) {
  var l, p, h, g, f, m = i && i.__k || Js, _ = e.length;
  for (t.__d = d, $u(t, e, m), d = t.__d, l = 0; l < _; l++)
    (h = t.__k[l]) != null && typeof h != "boolean" && typeof h != "function" && (p = h.__i === -1 ? Xn : m[h.__i] || Xn, h.__i = l, na(n, h, p, o, r, a, u, d, s, c), g = h.__e, h.ref && p.ref != h.ref && (p.ref && hi(p.ref, null, h), c.push(h.ref, h.__c || g, h)), f == null && g != null && (f = g), 65536 & h.__u || p.__k === h.__k ? (d && !d.isConnected && (d = nt(p)), d = ta(h, d, n)) : typeof h.type == "function" && h.__d !== void 0 ? d = h.__d : g && (d = g.nextSibling), h.__d = void 0, h.__u &= -196609);
  t.__d = d, t.__e = f;
}
function $u(n, e, t) {
  var i, o, r, a, u, d = e.length, s = t.length, c = s, l = 0;
  for (n.__k = [], i = 0; i < d; i++)
    a = i + l, (o = n.__k[i] = (o = e[i]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Gt(null, o, null, null, null) : di(o) ? Gt(ci, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Gt(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = n, o.__b = n.__b + 1, u = vu(o, t, a, c), o.__i = u, r = null, u !== -1 && (c--, (r = t[u]) && (r.__u |= 131072)), r == null || r.__v === null ? (u == -1 && l--, typeof o.type != "function" && (o.__u |= 65536)) : u !== a && (u === a + 1 ? l++ : u > a ? c > d - a ? l += u - a : l-- : u < a ? u == a - 1 && (l = u - a) : l = 0, u !== i + l && (o.__u |= 65536))) : (r = t[a]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == n.__d && (n.__d = nt(r)), Gn(r, r, !1), t[a] = null, c--);
  if (c)
    for (i = 0; i < s; i++)
      (r = t[i]) != null && !(131072 & r.__u) && (r.__e == n.__d && (n.__d = nt(r)), Gn(r, r));
}
function ta(n, e, t) {
  var i, o;
  if (typeof n.type == "function") {
    for (i = n.__k, o = 0; i && o < i.length; o++)
      i[o] && (i[o].__ = n, e = ta(i[o], e, t));
    return e;
  }
  n.__e != e && (t.insertBefore(n.__e, e || null), e = n.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function vu(n, e, t, i) {
  var o = n.key, r = n.type, a = t - 1, u = t + 1, d = e[t];
  if (d === null || d && o == d.key && r === d.type && !(131072 & d.__u))
    return t;
  if (i > (d != null && !(131072 & d.__u) ? 1 : 0))
    for (; a >= 0 || u < e.length; ) {
      if (a >= 0) {
        if ((d = e[a]) && !(131072 & d.__u) && o == d.key && r === d.type)
          return a;
        a--;
      }
      if (u < e.length) {
        if ((d = e[u]) && !(131072 & d.__u) && o == d.key && r === d.type)
          return u;
        u++;
      }
    }
  return -1;
}
function zi(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t ?? "") : n[e] = t == null ? "" : typeof t != "number" || xu.test(e) ? t : t + "px";
}
function Dt(n, e, t, i, o) {
  var r;
  e:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof i == "string" && (n.style.cssText = i = ""), i)
          for (e in i)
            t && e in t || zi(n.style, e, "");
        if (t)
          for (e in t)
            i && t[e] === i[e] || zi(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in n || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? i ? t.u = i.u : (t.u = ui, n.addEventListener(e, r ? Un : Mn, r)) : n.removeEventListener(e, r ? Un : Mn, r);
    else {
      if (o == "http://www.w3.org/2000/svg")
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e in n)
        try {
          n[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? n.removeAttribute(e) : n.setAttribute(e, t));
    }
}
function Oi(n) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + n];
      if (e.t == null)
        e.t = ui++;
      else if (e.t < t.u)
        return;
      return t(re.event ? re.event(e) : e);
    }
  };
}
function na(n, e, t, i, o, r, a, u, d, s) {
  var c, l, p, h, g, f, m, _, w, k, b, I, C, D, L, $ = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & t.__u && (d = !!(32 & t.__u), r = [u = e.__e = t.__e]), (c = re.__b) && c(e);
  e:
    if (typeof $ == "function")
      try {
        if (_ = e.props, w = (c = $.contextType) && i[c.__c], k = c ? w ? w.props.value : c.__ : i, t.__c ? m = (l = e.__c = t.__c).__ = l.__E : ("prototype" in $ && $.prototype.render ? e.__c = l = new $(_, k) : (e.__c = l = new ze(_, k), l.constructor = $, l.render = Vu), w && w.sub(l), l.props = _, l.state || (l.state = {}), l.context = k, l.__n = i, p = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), $.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Ue({}, l.__s)), Ue(l.__s, $.getDerivedStateFromProps(_, l.__s))), h = l.props, g = l.state, l.__v = e, p)
          $.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && _ !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(_, k), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(_, l.__s, k) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (l.props = _, l.state = l.__s, l.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(F) {
              F && (F.__ = e);
            }), b = 0; b < l._sb.length; b++)
              l.__h.push(l._sb[b]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, k), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(h, g, f);
          });
        }
        if (l.context = k, l.props = _, l.__P = n, l.__e = !1, I = re.__r, C = 0, "prototype" in $ && $.prototype.render) {
          for (l.state = l.__s, l.__d = !1, I && I(e), c = l.render(l.props, l.state, l.context), D = 0; D < l._sb.length; D++)
            l.__h.push(l._sb[D]);
          l._sb = [];
        } else
          do
            l.__d = !1, I && I(e), c = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++C < 25);
        l.state = l.__s, l.getChildContext != null && (i = Ue(Ue({}, i), l.getChildContext())), p || l.getSnapshotBeforeUpdate == null || (f = l.getSnapshotBeforeUpdate(h, g)), ea(n, di(L = c != null && c.type === ci && c.key == null ? c.props.children : c) ? L : [L], e, t, i, o, r, a, u, d, s), l.base = e.__e, e.__u &= -161, l.__h.length && a.push(l), m && (l.__E = l.__ = null);
      } catch (F) {
        e.__v = null, d || r != null ? (e.__e = u, e.__u |= d ? 160 : 32, r[r.indexOf(u)] = null) : (e.__e = t.__e, e.__k = t.__k), re.__e(F, e, t);
      }
    else
      r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = ku(t.__e, e, t, i, o, r, a, d, s);
  (c = re.diffed) && c(e);
}
function wu(n, e, t) {
  e.__d = void 0;
  for (var i = 0; i < t.length; i++)
    hi(t[i], t[++i], t[++i]);
  re.__c && re.__c(e, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      re.__e(r, o.__v);
    }
  });
}
function ku(n, e, t, i, o, r, a, u, d) {
  var s, c, l, p, h, g, f, m = t.props, _ = e.props, w = e.type;
  if (w === "svg" ? o = "http://www.w3.org/2000/svg" : w === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (s = 0; s < r.length; s++)
      if ((h = r[s]) && "setAttribute" in h == !!w && (w ? h.localName === w : h.nodeType === 3)) {
        n = h, r[s] = null;
        break;
      }
  }
  if (n == null) {
    if (w === null)
      return document.createTextNode(_);
    n = document.createElementNS(o, w, _.is && _), r = null, u = !1;
  }
  if (w === null)
    m === _ || u && n.data === _ || (n.data = _);
  else {
    if (r = r && li.call(n.childNodes), m = t.props || Xn, !u && r != null)
      for (m = {}, s = 0; s < n.attributes.length; s++)
        m[(h = n.attributes[s]).name] = h.value;
    for (s in m)
      if (h = m[s], s != "children") {
        if (s == "dangerouslySetInnerHTML")
          l = h;
        else if (s !== "key" && !(s in _)) {
          if (s == "value" && "defaultValue" in _ || s == "checked" && "defaultChecked" in _)
            continue;
          Dt(n, s, null, h, o);
        }
      }
    for (s in _)
      h = _[s], s == "children" ? p = h : s == "dangerouslySetInnerHTML" ? c = h : s == "value" ? g = h : s == "checked" ? f = h : s === "key" || u && typeof h != "function" || m[s] === h || Dt(n, s, h, m[s], o);
    if (c)
      u || l && (c.__html === l.__html || c.__html === n.innerHTML) || (n.innerHTML = c.__html), e.__k = [];
    else if (l && (n.innerHTML = ""), ea(n, di(p) ? p : [p], e, t, i, w === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, a, r ? r[0] : t.__k && nt(t, 0), u, d), r != null)
      for (s = r.length; s--; )
        r[s] != null && Ks(r[s]);
    u || (s = "value", g !== void 0 && (g !== n[s] || w === "progress" && !g || w === "option" && g !== m[s]) && Dt(n, s, g, m[s], o), s = "checked", f !== void 0 && f !== n[s] && Dt(n, s, f, m[s], o));
  }
  return n;
}
function hi(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (i) {
    re.__e(i, t);
  }
}
function Gn(n, e, t) {
  var i, o;
  if (re.unmount && re.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || hi(i, null, e)), (i = n.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (r) {
        re.__e(r, e);
      }
    i.base = i.__P = null;
  }
  if (i = n.__k)
    for (o = 0; o < i.length; o++)
      i[o] && Gn(i[o], e, t || typeof n.type != "function");
  t || n.__e == null || Ks(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function Vu(n, e, t) {
  return this.constructor(n, t);
}
li = Js.slice, re = { __e: function(n, e, t, i) {
  for (var o, r, a; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(n)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, i || {}), a = o.__d), a)
          return o.__E = o;
      } catch (u) {
        n = u;
      }
  throw n;
} }, Ys = 0, ze.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ue({}, this.state), typeof n == "function" && (n = n(Ue({}, t), this.props)), n && Ue(t, n), n != null && this.__v && (e && this._sb.push(e), Gi(this));
}, ze.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Gi(this));
}, ze.prototype.render = ci, Je = [], qs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, En = function(n, e) {
  return n.__v.__b - e.__v.__b;
}, en.__r = 0, ui = 0, Mn = Oi(!1), Un = Oi(!0);
var ia = function(n, e, t, i) {
  var o;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var a = e[r++], u = e[r] ? (e[0] |= a ? 1 : 2, t[e[r++]]) : e[++r];
    a === 3 ? i[0] = u : a === 4 ? i[1] = Object.assign(i[1] || {}, u) : a === 5 ? (i[1] = i[1] || {})[e[++r]] = u : a === 6 ? i[1][e[++r]] += u + "" : a ? (o = n.apply(u, ia(n, u, t, ["", null])), i.push(o), u[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = o)) : i.push(u);
  }
  return i;
}, Ri = /* @__PURE__ */ new Map();
function Iu(n) {
  var e = Ri.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Ri.set(this, e)), (e = ia(this, e.get(n) || (e.set(n, e = function(t) {
    for (var i, o, r = 1, a = "", u = "", d = [0], s = function(p) {
      r === 1 && (p || (a = a.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? d.push(0, p, a) : r === 3 && (p || a) ? (d.push(3, p, a), r = 2) : r === 2 && a === "..." && p ? d.push(4, p, 0) : r === 2 && a && !p ? d.push(5, 0, !0, a) : r >= 5 && ((a || !p && r === 5) && (d.push(r, 0, a, o), r = 6), p && (d.push(r, p, 0, o), r = 6)), a = "";
    }, c = 0; c < t.length; c++) {
      c && (r === 1 && s(), s(c));
      for (var l = 0; l < t[c].length; l++)
        i = t[c][l], r === 1 ? i === "<" ? (s(), d = [d], r = 3) : a += i : r === 4 ? a === "--" && i === ">" ? (r = 1, a = "") : a = i + a[0] : u ? i === u ? u = "" : a += i : i === '"' || i === "'" ? u = i : i === ">" ? (s(), r = 1) : r && (i === "=" ? (r = 5, o = a, a = "") : i === "/" && (r < 5 || t[c][l + 1] === ">") ? (s(), r === 3 && (d = d[0]), r = d, (d = d[0]).push(2, 0, r), r = 0) : i === " " || i === "	" || i === `
` || i === "\r" ? (s(), r = 2) : a += i), r === 3 && a === "!--" && (r = 4, d = d[0]);
    }
    return s(), d;
  }(n)), e), arguments, [])).length > 1 ? e : e[0];
}
var de = Iu.bind(bu);
function E(n, e) {
  if (n == null)
    return {};
  var t = {};
  for (var i in n)
    if ({}.hasOwnProperty.call(n, i)) {
      if (e.indexOf(i) >= 0)
        continue;
      t[i] = n[i];
    }
  return t;
}
function ve(n) {
  var e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(n);
  if (e == null)
    throw new Error(n);
  var t = new Error(e[2]);
  throw t.name = e[1], t;
}
function zt(n) {
  return (typeof n == "number" || n instanceof Number) && (n = n.valueOf(), isFinite(n) && Math.round(n) === n && n >= 0);
}
function zn(n) {
  return typeof n == "string" || n instanceof String;
}
var Wu = /^\s*$/, Pu = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function Cu(n) {
  return function(e, t) {
    return (typeof e == "string" || e instanceof String) && Pu.test(e.valueOf());
  }(n);
}
function pi(n) {
  return typeof n == "function";
}
function kn(n) {
  return n != null && typeof n == "object" && Object.getPrototypeOf(n) === Object.prototype;
}
var tn = Array.isArray;
function gn(n, e, t, i) {
  if (tn(n))
    try {
      for (var o = 0, r = n.length; o < r; o++)
        if (e(n[o]) == 0)
          return !1;
      return !(t != null && n.length < t || i != null && n.length > i);
    } catch {
    }
  return !1;
}
var gi = !0;
function fn(n, e, t) {
  var i = function(r, a) {
    return function(u, d, s, c, l) {
      if (d == null) {
        if (c)
          return d;
        ve("MissingArgument: no ".concat(He(u), " given"));
      } else if (s(d))
        switch (!0) {
          case d instanceof Boolean:
          case d instanceof Number:
          case d instanceof String:
            return d.valueOf();
          default:
            return d;
        }
      else
        ve("InvalidArgument: the given ".concat(He(u), " is no valid ").concat(He(l)));
    }(r, a, n, e, t);
  }, o = n.name;
  return o != null && /^ValueIs/.test(o) ? function(r, a) {
    if (r == null && ve("MissingArgument: no function given"), typeof r != "function" && ve("InvalidArgument: the given 1st Argument is not a JavaScript function"), a == null && ve("MissingArgument: no desired name given"), typeof a == "string" || a instanceof String || ve("InvalidArgument: the given desired name is not a string"), r.name === a)
      return r;
    try {
      if (Object.defineProperty(r, "name", { value: a }), r.name === a)
        return r;
    } catch {
    }
    return new Function("originalFunction", "return function " + a + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(r);
  }(i, o.replace(/^ValueIs/, e ? "allow" : "expect")) : i;
}
var Qe = /* @__PURE__ */ fn(zt, gi, "ordinal number"), Vn = /* @__PURE__ */ fn(Cu, gi, "single line of text"), _e = /* @__PURE__ */ fn(pi, gi, "JavaScript function"), ji = /* @__PURE__ */ fn(pi, !1, "JavaScript function");
function Zi(n, e) {
  if (e == null && ve("MissingArgument: no ".concat(He(n), " given")), tn(e))
    return e;
  ve("InvalidArgument: the given ".concat(He(n), " is no JavaScript array"));
}
function In(n, e, t, i, o, r) {
  return e == null ? e : Du(n, e, t, i, o, r);
}
var Du = function(n, e, t, i, o, r) {
  if (e == null && ve("MissingArgument: no ".concat(He(n), " given")), gn(e, t, o, r))
    return e;
  ve("InvalidArgument: the given ".concat(He(n), " is ") + "either not a list or contains invalid elements");
};
function He(n) {
  return n.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g, function(e) {
    return e === "\\" ? "\\\\" : e;
  }).replace(/[\x00-\x1f\x7f-\x9f]/g, function(e) {
    switch (e) {
      case "\0":
        return "\\0";
      case "\b":
        return "\\b";
      case "\f":
        return "\\f";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
      case "	":
        return "\\t";
      case "\v":
        return "\\v";
      default:
        var t = e.charCodeAt(0).toString(16);
        return "\\x" + "00".slice(t.length) + t;
    }
  });
}
function $e(n, e) {
  return e === void 0 && (e = '"'), e + function(t, i) {
    return i === void 0 && (i = '"'), t.replace(i === "'" ? /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g : /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g, function(o) {
      switch (o) {
        case "'":
          return "\\'";
        case '"':
          return '\\"';
        case "\\":
          return "\\\\";
        default:
          return o;
      }
    }).replace(/[\x00-\x1f\x7f-\x9f]/g, function(o) {
      switch (o) {
        case "\0":
          return "\\0";
        case "\b":
          return "\\b";
        case "\f":
          return "\\f";
        case `
`:
          return "\\n";
        case "\r":
          return "\\r";
        case "	":
          return "\\t";
        case "\v":
          return "\\v";
        default:
          var r = o.charCodeAt(0).toString(16);
          return "\\x" + "00".slice(r.length) + r;
      }
    });
  }(n, e) + e;
}
var mn, Q, ra, Ke, Yi, oa, On, fi, Rn, jn, yt = {}, sa = [], Fu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, mi = Array.isArray;
function Xe(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function aa(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function la(n, e, t) {
  var i, o, r, a = {};
  for (r in e)
    r == "key" ? i = e[r] : r == "ref" ? o = e[r] : a[r] = e[r];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? mn.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      a[r] === void 0 && (a[r] = n.defaultProps[r]);
  return Ot(n, a, i, o, null);
}
function Ot(n, e, t, i, o) {
  var r = { type: n, props: e, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++ra, __i: -1, __u: 0 };
  return o == null && Q.vnode != null && Q.vnode(r), r;
}
function _n(n) {
  return n.children;
}
function Ve(n, e) {
  this.props = n, this.context = e;
}
function it(n, e) {
  if (e == null)
    return n.__ ? it(n.__, n.__i + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? it(n) : null;
}
function ua(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return ua(n);
  }
}
function qi(n) {
  (!n.__d && (n.__d = !0) && Ke.push(n) && !nn.__r++ || Yi !== Q.debounceRendering) && ((Yi = Q.debounceRendering) || oa)(nn);
}
function nn() {
  var n, e, t, i, o, r, a, u;
  for (Ke.sort(On); n = Ke.shift(); )
    n.__d && (e = Ke.length, i = void 0, r = (o = (t = n).__v).__e, a = [], u = [], t.__P && ((i = Xe({}, o)).__v = o.__v + 1, Q.vnode && Q.vnode(i), _i(t.__P, i, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [r] : null, a, r ?? it(o), !!(32 & o.__u), u), i.__v = o.__v, i.__.__k[i.__i] = i, ha(a, i, u), i.__e != r && ua(i)), Ke.length > e && Ke.sort(On));
  nn.__r = 0;
}
function da(n, e, t, i, o, r, a, u, d, s, c) {
  var l, p, h, g, f, m = i && i.__k || sa, _ = e.length;
  for (t.__d = d, Nu(t, e, m), d = t.__d, l = 0; l < _; l++)
    (h = t.__k[l]) != null && typeof h != "boolean" && typeof h != "function" && (p = h.__i === -1 ? yt : m[h.__i] || yt, h.__i = l, _i(n, h, p, o, r, a, u, d, s, c), g = h.__e, h.ref && p.ref != h.ref && (p.ref && Si(p.ref, null, h), c.push(h.ref, h.__c || g, h)), f == null && g != null && (f = g), 65536 & h.__u || p.__k === h.__k ? (d && !d.isConnected && (d = it(p)), d = ca(h, d, n)) : typeof h.type == "function" && h.__d !== void 0 ? d = h.__d : g && (d = g.nextSibling), h.__d = void 0, h.__u &= -196609);
  t.__d = d, t.__e = f;
}
function Nu(n, e, t) {
  var i, o, r, a, u, d = e.length, s = t.length, c = s, l = 0;
  for (n.__k = [], i = 0; i < d; i++)
    a = i + l, (o = n.__k[i] = (o = e[i]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? Ot(null, o, null, null, null) : mi(o) ? Ot(_n, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? Ot(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = n, o.__b = n.__b + 1, u = Lu(o, t, a, c), o.__i = u, r = null, u !== -1 && (c--, (r = t[u]) && (r.__u |= 131072)), r == null || r.__v === null ? (u == -1 && l--, typeof o.type != "function" && (o.__u |= 65536)) : u !== a && (u === a + 1 ? l++ : u > a ? c > d - a ? l += u - a : l-- : u < a ? u == a - 1 && (l = u - a) : l = 0, u !== i + l && (o.__u |= 65536))) : (r = t[a]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == n.__d && (n.__d = it(r)), Zn(r, r, !1), t[a] = null, c--);
  if (c)
    for (i = 0; i < s; i++)
      (r = t[i]) != null && !(131072 & r.__u) && (r.__e == n.__d && (n.__d = it(r)), Zn(r, r));
}
function ca(n, e, t) {
  var i, o;
  if (typeof n.type == "function") {
    for (i = n.__k, o = 0; i && o < i.length; o++)
      i[o] && (i[o].__ = n, e = ca(i[o], e, t));
    return e;
  }
  n.__e != e && (t.insertBefore(n.__e, e || null), e = n.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function Lu(n, e, t, i) {
  var o = n.key, r = n.type, a = t - 1, u = t + 1, d = e[t];
  if (d === null || d && o == d.key && r === d.type && !(131072 & d.__u))
    return t;
  if (i > (d == null || 131072 & d.__u ? 0 : 1))
    for (; a >= 0 || u < e.length; ) {
      if (a >= 0) {
        if ((d = e[a]) && !(131072 & d.__u) && o == d.key && r === d.type)
          return a;
        a--;
      }
      if (u < e.length) {
        if ((d = e[u]) && !(131072 & d.__u) && o == d.key && r === d.type)
          return u;
        u++;
      }
    }
  return -1;
}
function Ji(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t ?? "") : n[e] = t == null ? "" : typeof t != "number" || Fu.test(e) ? t : t + "px";
}
function Ft(n, e, t, i, o) {
  var r;
  e:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof i == "string" && (n.style.cssText = i = ""), i)
          for (e in i)
            t && e in t || Ji(n.style, e, "");
        if (t)
          for (e in t)
            i && t[e] === i[e] || Ji(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in n || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + r] = t, t ? i ? t.u = i.u : (t.u = fi, n.addEventListener(e, r ? jn : Rn, r)) : n.removeEventListener(e, r ? jn : Rn, r);
    else {
      if (o == "http://www.w3.org/2000/svg")
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e in n)
        try {
          n[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? n.removeAttribute(e) : n.setAttribute(e, t));
    }
}
function Ki(n) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + n];
      if (e.t == null)
        e.t = fi++;
      else if (e.t < t.u)
        return;
      return t(Q.event ? Q.event(e) : e);
    }
  };
}
function _i(n, e, t, i, o, r, a, u, d, s) {
  var c, l, p, h, g, f, m, _, w, k, b, I, C, D, L, $ = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & t.__u && (d = !!(32 & t.__u), r = [u = e.__e = t.__e]), (c = Q.__b) && c(e);
  e:
    if (typeof $ == "function")
      try {
        if (_ = e.props, w = (c = $.contextType) && i[c.__c], k = c ? w ? w.props.value : c.__ : i, t.__c ? m = (l = e.__c = t.__c).__ = l.__E : ("prototype" in $ && $.prototype.render ? e.__c = l = new $(_, k) : (e.__c = l = new Ve(_, k), l.constructor = $, l.render = Bu), w && w.sub(l), l.props = _, l.state || (l.state = {}), l.context = k, l.__n = i, p = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), $.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Xe({}, l.__s)), Xe(l.__s, $.getDerivedStateFromProps(_, l.__s))), h = l.props, g = l.state, l.__v = e, p)
          $.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && _ !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(_, k), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(_, l.__s, k) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (l.props = _, l.state = l.__s, l.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(F) {
              F && (F.__ = e);
            }), b = 0; b < l._sb.length; b++)
              l.__h.push(l._sb[b]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, k), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(h, g, f);
          });
        }
        if (l.context = k, l.props = _, l.__P = n, l.__e = !1, I = Q.__r, C = 0, "prototype" in $ && $.prototype.render) {
          for (l.state = l.__s, l.__d = !1, I && I(e), c = l.render(l.props, l.state, l.context), D = 0; D < l._sb.length; D++)
            l.__h.push(l._sb[D]);
          l._sb = [];
        } else
          do
            l.__d = !1, I && I(e), c = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++C < 25);
        l.state = l.__s, l.getChildContext != null && (i = Xe(Xe({}, i), l.getChildContext())), p || l.getSnapshotBeforeUpdate == null || (f = l.getSnapshotBeforeUpdate(h, g)), da(n, mi(L = c != null && c.type === _n && c.key == null ? c.props.children : c) ? L : [L], e, t, i, o, r, a, u, d, s), l.base = e.__e, e.__u &= -161, l.__h.length && a.push(l), m && (l.__E = l.__ = null);
      } catch (F) {
        e.__v = null, d || r != null ? (e.__e = u, e.__u |= d ? 160 : 32, r[r.indexOf(u)] = null) : (e.__e = t.__e, e.__k = t.__k), Q.__e(F, e, t);
      }
    else
      r == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Tu(t.__e, e, t, i, o, r, a, d, s);
  (c = Q.diffed) && c(e);
}
function ha(n, e, t) {
  e.__d = void 0;
  for (var i = 0; i < t.length; i++)
    Si(t[i], t[++i], t[++i]);
  Q.__c && Q.__c(e, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      Q.__e(r, o.__v);
    }
  });
}
function Tu(n, e, t, i, o, r, a, u, d) {
  var s, c, l, p, h, g, f, m = t.props, _ = e.props, w = e.type;
  if (w === "svg" ? o = "http://www.w3.org/2000/svg" : w === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (s = 0; s < r.length; s++)
      if ((h = r[s]) && "setAttribute" in h == !!w && (w ? h.localName === w : h.nodeType === 3)) {
        n = h, r[s] = null;
        break;
      }
  }
  if (n == null) {
    if (w === null)
      return document.createTextNode(_);
    n = document.createElementNS(o, w, _.is && _), r = null, u = !1;
  }
  if (w === null)
    m === _ || u && n.data === _ || (n.data = _);
  else {
    if (r = r && mn.call(n.childNodes), m = t.props || yt, !u && r != null)
      for (m = {}, s = 0; s < n.attributes.length; s++)
        m[(h = n.attributes[s]).name] = h.value;
    for (s in m)
      if (h = m[s], s != "children") {
        if (s == "dangerouslySetInnerHTML")
          l = h;
        else if (s !== "key" && !(s in _)) {
          if (s == "value" && "defaultValue" in _ || s == "checked" && "defaultChecked" in _)
            continue;
          Ft(n, s, null, h, o);
        }
      }
    for (s in _)
      h = _[s], s == "children" ? p = h : s == "dangerouslySetInnerHTML" ? c = h : s == "value" ? g = h : s == "checked" ? f = h : s === "key" || u && typeof h != "function" || m[s] === h || Ft(n, s, h, m[s], o);
    if (c)
      u || l && (c.__html === l.__html || c.__html === n.innerHTML) || (n.innerHTML = c.__html), e.__k = [];
    else if (l && (n.innerHTML = ""), da(n, mi(p) ? p : [p], e, t, i, w === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, a, r ? r[0] : t.__k && it(t, 0), u, d), r != null)
      for (s = r.length; s--; )
        r[s] != null && aa(r[s]);
    u || (s = "value", g !== void 0 && (g !== n[s] || w === "progress" && !g || w === "option" && g !== m[s]) && Ft(n, s, g, m[s], o), s = "checked", f !== void 0 && f !== n[s] && Ft(n, s, f, m[s], o));
  }
  return n;
}
function Si(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (i) {
    Q.__e(i, t);
  }
}
function Zn(n, e, t) {
  var i, o;
  if (Q.unmount && Q.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || Si(i, null, e)), (i = n.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (r) {
        Q.__e(r, e);
      }
    i.base = i.__P = null;
  }
  if (i = n.__k)
    for (o = 0; o < i.length; o++)
      i[o] && Zn(i[o], e, t || typeof n.type != "function");
  t || n.__e == null || aa(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function Bu(n, e, t) {
  return this.constructor(n, t);
}
mn = sa.slice, Q = { __e: function(n, e, t, i) {
  for (var o, r, a; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(n)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, i || {}), a = o.__d), a)
          return o.__E = o;
      } catch (u) {
        n = u;
      }
  throw n;
} }, ra = 0, Ve.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xe({}, this.state), typeof n == "function" && (n = n(Xe({}, t), this.props)), n && Xe(t, n), n != null && this.__v && (e && this._sb.push(e), qi(this));
}, Ve.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), qi(this));
}, Ve.prototype.render = _n, Ke = [], oa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, On = function(n, e) {
  return n.__v.__b - e.__v.__b;
}, nn.__r = 0, fi = 0, Rn = Ki(!1), jn = Ki(!0);
var pa = function(n, e, t, i) {
  var o;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var a = e[r++], u = e[r] ? (e[0] |= a ? 1 : 2, t[e[r++]]) : e[++r];
    a === 3 ? i[0] = u : a === 4 ? i[1] = Object.assign(i[1] || {}, u) : a === 5 ? (i[1] = i[1] || {})[e[++r]] = u : a === 6 ? i[1][e[++r]] += u + "" : a ? (o = n.apply(u, pa(n, u, t, ["", null])), i.push(o), u[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = o)) : i.push(u);
  }
  return i;
}, Qi = /* @__PURE__ */ new Map(), y = (function(n) {
  var e = Qi.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Qi.set(this, e)), (e = pa(this, e.get(n) || (e.set(n, e = function(t) {
    for (var i, o, r = 1, a = "", u = "", d = [0], s = function(p) {
      r === 1 && (p || (a = a.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? d.push(0, p, a) : r === 3 && (p || a) ? (d.push(3, p, a), r = 2) : r === 2 && a === "..." && p ? d.push(4, p, 0) : r === 2 && a && !p ? d.push(5, 0, !0, a) : r >= 5 && ((a || !p && r === 5) && (d.push(r, 0, a, o), r = 6), p && (d.push(r, p, 0, o), r = 6)), a = "";
    }, c = 0; c < t.length; c++) {
      c && (r === 1 && s(), s(c));
      for (var l = 0; l < t[c].length; l++)
        i = t[c][l], r === 1 ? i === "<" ? (s(), d = [d], r = 3) : a += i : r === 4 ? a === "--" && i === ">" ? (r = 1, a = "") : a = i + a[0] : u ? i === u ? u = "" : a += i : i === '"' || i === "'" ? u = i : i === ">" ? (s(), r = 1) : r && (i === "=" ? (r = 5, o = a, a = "") : i === "/" && (r < 5 || t[c][l + 1] === ">") ? (s(), r === 3 && (d = d[0]), r = d, (d = d[0]).push(2, 0, r), r = 0) : i === " " || i === "	" || i === `
` || i === "\r" ? (s(), r = 2) : a += i), r === 3 && a === "!--" && (r = 4, d = d[0]);
    }
    return s(), d;
  }(n)), e), arguments, [])).length > 1 ? e : e[0];
}).bind(la);
const Au = ["String", "Number", "Object", "Array", "Boolean", "Date"];
function Wn(n) {
  return n && typeof n == "object";
}
function Yn(n, e, t) {
  Object.defineProperty(n, e, { value: t, enumerable: !1, configurable: !0 });
}
function er(n, e, t) {
  Yn(n, "__key", e), Yn(n, "__parent", t);
}
const yi = { computedStack: [], trackerSymbol: Symbol("tracker") };
let ct = null;
const rn = Symbol();
function qn() {
  if (ct) {
    for (const n of ct)
      n(), n[rn] = !1;
    ct = null;
  }
}
function tr(n, e) {
  n[rn] || (ct === null && (ct = [], e === !0 ? queueMicrotask(qn) : setTimeout(qn, e)), ct.push(n));
}
const { computedStack: Nt, trackerSymbol: Pn } = yi, Cn = Symbol("__observed"), Be = Symbol("modifiedProperty"), { computedStack: nr, trackerSymbol: Hu } = yi;
var Eu = { observe: function n(e, t = {}) {
  const { props: i, ignore: o, batch: r, deep: a = !0, bubble: u, bind: d } = t;
  if (e[Cn])
    return e;
  const s = (g) => g !== Cn && (i == null || i instanceof Array && i.includes(g)) && (o == null || o instanceof Array && !o.includes(g));
  function c(g, f, m) {
    if (f === "__handler")
      Yn(g, "__handler", m);
    else if (s(f)) {
      if (Array.isArray(g) && f === "length" || function(_, w, k) {
        const b = /* @__PURE__ */ new Map();
        return function I(C, D, L) {
          if (C === D)
            return !1;
          let $ = typeof C;
          if ($ !== typeof D)
            return !0;
          switch ($) {
            case "undefined":
            case "boolean":
            case "string":
            case "function":
            default:
              return !0;
            case "number":
              return isNaN(C) !== isNaN(D) || Math.abs(C - D) > Number.EPSILON;
            case "object":
              return C == null || D == null || (L === "by-value" && (C instanceof Boolean || C instanceof Number || C instanceof String) ? C.valueOf() !== D.valueOf() : Array.isArray(C) ? function(F, H, J) {
                if (!Array.isArray(H) || F.length !== H.length)
                  return !0;
                if (b.has(F) || b.has(H)) {
                  if (b.has(F) && b.get(F).has(H) || b.has(H) && b.get(H).has(F))
                    return !1;
                  b.has(F) || b.set(F, /* @__PURE__ */ new Set()), b.get(F).add(H);
                }
                for (let Y = 0, We = F.length; Y < We; Y++)
                  if (I(F[Y], H[Y], J))
                    return !0;
                return !1;
              }(C, D, L) : L === "by-reference" || function(F, H, J = "by-value") {
                if (Object.getPrototypeOf(F) !== Object.getPrototypeOf(H))
                  return !0;
                for (let Y in F)
                  if (!(Y in H))
                    return !0;
                for (let Y in H)
                  if (!(Y in F))
                    return !0;
                if (b.has(F) || b.has(H)) {
                  if (b.has(F) && b.get(F).has(H) || b.has(H) && b.get(H).has(F))
                    return !1;
                  b.has(F) || b.set(F, /* @__PURE__ */ new Set()), b.get(F).add(H);
                }
                for (let Y in F)
                  if (I(F[Y], H[Y], J))
                    return !0;
                return !1;
              }(C, D, L));
          }
          return !0;
        }(_, w, void 0);
      }(g[f], m)) {
        const _ = f !== Be && a && Wn(m), w = g[f];
        g[f] = _ ? n(m, t) : m, _ && u && er(g[f], f, g);
        const k = [f];
        let b = g;
        for (; b && (!b.__handler || b.__handler(k, m, w, p) !== !1); )
          b.__key && b.__parent ? (k.unshift(b.__key), b = b.__parent) : b = null;
        const I = l.get(f);
        if (I)
          for (const C of I) {
            const D = C[Pn], L = D && D.get(g), $ = L && L.has(f);
            C.__disposed || D && !$ ? I.delete(C) : C !== Nt[0] && (r !== void 0 && r !== !1 ? (tr(C, r), C[rn] = !0) : C());
          }
        if (f !== Be) {
          g[Be] = f;
          const C = l.get(Be);
          if (C)
            for (const D of C) {
              const L = D[Pn], $ = L && L.get(g), F = $ && $.has(Be);
              D.__disposed || L && !F ? C.delete(D) : D !== Nt[0] && (r !== void 0 && r !== !1 ? (tr(D, r), D[rn] = !0) : D());
            }
        }
      }
    } else
      g[f] = m;
  }
  a && Object.entries(e).forEach(function([g, f]) {
    Wn(f) && s(g) && (e[g] = n(f, t), u && er(e[g], g, e));
  });
  const l = /* @__PURE__ */ new Map(), p = new Proxy(e, { get(g, f) {
    if (f === Cn)
      return !0;
    if (s(f) && Nt.length) {
      const m = Nt[0], _ = m[Pn];
      if (_) {
        let k = _.get(e);
        k || (k = /* @__PURE__ */ new Set(), _.set(e, k)), k.add(f);
      }
      let w = l.get(f);
      w || (w = /* @__PURE__ */ new Set(), l.set(f, w)), w.add(m);
    }
    return e[f];
  }, set: (g, f, m) => (c(e, f, m), !0), defineProperty(g, f, m) {
    if (f === "__handler")
      throw new Error("Don't track bubble handlers");
    if (!s(f))
      return Reflect.defineProperty(e, f, m);
    if (!Array.isArray(e) || f === "length") {
      "value" in m && a && Wn(m.value) && ((m = { ...m }).value = n(m.value, t));
      const _ = Reflect.defineProperty(e, f, m);
      return f !== Be && (e[Be] = f), _;
    }
    return !1;
  }, deleteProperty(g, f) {
    if (f === Be)
      throw new Error('internal property Symbol("modifiedProperty") must not be deleted');
    return f in e && c(e, f, void 0), Reflect.deleteProperty(g, f);
  } });
  var h;
  return d && (h = e, Object.getOwnPropertyNames(h).concat(Object.getPrototypeOf(h) && Au.indexOf(Object.getPrototypeOf(h).constructor.name) < 0 ? Object.getOwnPropertyNames(Object.getPrototypeOf(h)) : []).filter((g) => g !== "constructor" && typeof h[g] == "function")).forEach((g) => e[g] = e[g].bind(p)), p;
}, modifiedProperty: Be, computed: function(n, { autoRun: e = !0, callback: t, bind: i, disableTracking: o = !1 } = {}) {
  function r(d, s = []) {
    const c = t || u;
    o || (c[Hu] = /* @__PURE__ */ new WeakMap()), nr.unshift(c), s = s.length > 0 ? [...s, a] : [a];
    const l = d ? d() : i ? n.apply(i, s) : n(...s);
    return nr.shift(), l;
  }
  const a = { computeAsync: r }, u = (...d) => r(null, d);
  return e && u(), u;
}, dispose: function(n) {
  return n[yi.trackerSymbol] = null, n.__disposed = !0;
}, batch: qn };
const Mu = ["Id", "Classes", "Style", "x", "y", "z", "Width", "Height", "Title", "closeable", "View", "WidgetList"], Uu = ["Id", "Classes", "Style", "x", "y", "z", "Width", "Height", "Title", "closeable", "minWidth", "minHeight", "maxWidth", "maxHeight", "View", "WidgetList"], Xu = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "hidden", "View", "WidgetList"], Gu = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "hidden", "View", "WidgetList"], zu = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], Ou = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], Ru = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], ju = ["Id", "Type", "Classes", "Style", "x", "y", "Width", "Height", "Value", "View", "WidgetList"], Zu = ["Id", "Type", "Classes", "Style", "x", "y", "Width", "Height", "Value", "View", "WidgetList"], Yu = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "ImageScaling", "ImageAlignment", "WidgetList", "View"], qu = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "PermissionsPolicy", "allowsFullscreen", "SandboxPermissions", "ReferrerPolicy", "WidgetList", "View"], Ju = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Color", "disabled", "onClick", "View"], Ku = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Color", "Options", "disabled", "onInput", "View"], Qu = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], ed = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], td = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], nd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], id = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], rd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Hashmarks", "View"], od = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], sd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], ad = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], ld = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], ud = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], dd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], cd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], hd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], pd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], gd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], fd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], md = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], _d = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View", "Placeholder", "onDrop"], Sd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Suggestions", "View"], yd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Options", "Placeholder", "View"], xd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View"], bd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "onDrop", "View", "WidgetList"], $d = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "View", "WidgetList"], vd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "Expansion", "View", "WidgetList"], wd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View", "WidgetList"], kd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View", "WidgetList"], Vd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View", "WidgetList"], Id = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "Value", "View", "WidgetList"], Wd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "List", "ItemRenderer", "Placeholder", "selectedIndices", "SelectionLimit", "onSelectionChange", "onItemSelected", "onItemDeselected", "View", "WidgetList"], Pd = ["Id", "Type", "Classes", "Style", "Anchoring", "x", "y", "Width", "Height", "List", "ItemRenderer", "Placeholder", "LabelOfItem", "ContentListOfItem", "selectedPaths", "SelectionLimit", "SelectionMode", "onSelectionChange", "onItemSelected", "onItemDeselected", "onItemDoubleClicked", "expandedPaths", "Indentation", "onExpansionChange", "onItemExpanded", "onItemCollapsed", "View", "WidgetList"], Cd = ["Id", "Type", "Classes", "Style", "x", "y", "Width", "Height", "Substitute", "Placeholder", "View", "WidgetList"];
let ir, rr, or, sr, ar, lr, ur, dr, cr, hr, pr, gr, fr, mr, _r, Sr, yr, xr, br, $r, vr, wr, kr, Vr, Ir, Wr, Pr, Cr, Dr, Fr, Nr, Lr, Tr, Br, Ar, Hr, Er, Mr, Ur, Xr, Gr, zr, Or, Rr, jr, Zr, Yr, qr, Jr, Kr, Qr, eo, to, no, io, ro, oo, so, ao, lo, uo, co, ho, po, go, fo, mo, _o, So, yo, xo, bo, $o, vo, wo, ko, Vo, Io, Wo, Po, Co, Do, Fo, No, Lo, To, Bo, Ao, Ho, Eo, Mo, Uo, Xo, Go, zo, Oo, Ro, jo, Zo, Yo, qo, Jo, Ko, Qo, es, ts, ns, is, rs, os, ss, as, ls, us, S = (n) => n;
const { observe: Dd, computed: Fd, dispose: jd } = Eu, Dn = document.createElement("style");
function De(n) {
  let e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(n);
  if (e == null)
    throw new Error(n);
  {
    let t = new Error(e[2]);
    throw t.name = e[1], t;
  }
}
function Lt(n) {
  De("ReadOnlyProperty: property " + $e(n) + " must not be set");
}
Dn.setAttribute("id", "ProtoUX"), Dn.innerHTML = `/*******************************************************************************
*                                                                              *
*                                ProtoUX (PUX)                                 *
*                                                                              *
*******************************************************************************/

  .PUX {
    display:block; position:absolute;
    margin:0px;
    background:none;
    border:none; border-radius:0px;
    box-shadow:none;
    padding:0px;
  }

  .PUX.Screen {
    background:white; color:black;
    font-family:'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size:14px; font-weight:normal; line-height:1.4; color:black;
    text-align:left; text-shadow:none;
  }

  .textured { background-image:repeat }

  .vertically-centered {
    display:flex; align-items:center;
  }

  .disabled, [disabled] { opacity:0.3 }
  .readonly             { background:none }
  .no-pointer-events    { pointer-events:none }

  .scrollable   { overflow:scroll }
  .scrollable-x { overflow-x:scroll; overflow-y:hidden }
  .scrollable-y { overflow-x:hidden; overflow-y:scroll }

  .PUX.Box       { background-color:white }
  .PUX.Container {}
  .PUX.Group     {}

  .PUX.Title    { font-size:20px; font-weight:normal; padding:0px 0px 0px 0px; text-align:left }
  .PUX.Subtitle { font-size:16px; font-weight:normal; padding:0px 0px 0px 0px; text-align:left }
  .PUX.Label    { font-size:14px; font-weight:bold;   padding:4px 0px 0px 0px; text-align:left }
  .PUX.Textline { font-size:14px; font-weight:normal; padding:4px 0px 0px 0px; text-align:left }
  .PUX.Hint     { font-size:12px; font-weight:normal; padding:4px 0px 0px 0px; text-align:left }
  .PUX.Text     { font-size:14px; font-weight:normal; padding:2px 0px 0px 0px; text-align:justify }

  .PUX.HTMLView  {}
  .PUX.TextView  {}
  .PUX.ImageView { object-fit:contain; object-position:center center }
  .PUX.WebView   {}

  .PUX.Icon { width:24px; height:24px }

  .PUX.PseudoDropDown { width:24px; height:24px }
  .PUX.PseudoDropDown > select {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }

  .PUX.Button > button, .PUX.Checkbox > input, .PUX.Radiobutton > input,
  .PUX.Gauge > meter, .PUX.Progressbar > progress, .PUX.Slider > input,
  .PUX.TextlineInput > input, .PUX.PasswordInput > input,
  .PUX.NumberInput > input, .PUX.PhoneNumberInput > input,
  .PUX.EMailAddressInput > input, .PUX.URLInput > input,
  .PUX.TimeInput > input, .PUX.DateTimeInput > input, .PUX.DateInput > input,
  .PUX.WeekInput > input, .PUX.MonthInput > input, .PUX.SearchInput > input,
  .PUX.ColorInput > input, .PUX.DropDown > select, .PUX.FileInput > input,
  .PUX.TextInput > textarea {
    left:0px; top:0px; width:100%; height:100%;
    margin:0px; padding:0px;
    background:transparent; color:inherit;
  }

  .PUX.TextlineInput > input, .PUX.PasswordInput > input,
  .PUX.NumberInput > input, .PUX.PhoneNumberInput > input,
  .PUX.EMailAddressInput > input, .PUX.URLInput > input,
  .PUX.TimeInput > input, .PUX.DateTimeInput > input, .PUX.DateInput > input,
  .PUX.WeekInput > input, .PUX.MonthInput > input, .PUX.SearchInput > input,
  .PUX.ColorInput > input, .PUX.DropDown > select, .PUX.FileInput > input,
  .PUX.TextInput > textarea {
    border:solid 1px #888888; border-radius:2px;
    background:#e8f0ff; padding:0px 2px 0px 2px;
  }

  .PUX.TextlineInput > input:read-only, .PUX.PasswordInput > input:read-only,
  .PUX.NumberInput > input:read-only, .PUX.PhoneNumberInput > input:read-only,
  .PUX.EMailAddressInput > input:read-only, .PUX.URLInput > input:read-only,
  .PUX.TimeInput > input:read-only, .PUX.DateTimeInput > input:read-only,
  .PUX.DateInput > input:read-only, .PUX.WeekInput > input:read-only,
  .PUX.MonthInput > input:read-only, .PUX.SearchInput > input:read-only,
  .PUX.ColorInput > input:read-only, .PUX.DropDown > select:read-only,
  .PUX.FileInput > input:read-only, .PUX.TextInput > textarea:read-only {
    background:transparent;
  }

  .PUX.Button > button {
    background:white;
    border:solid 1px black; border-radius:4px;
    background:transparent; color:inherit;
  }

  .PUX.FileInput {
    color:lightgray;
    border:solid 1px black; border-radius:3px;
  }
  .PUX.FileInput > span {
    display:flex; align-items:center; position:absolute; overflow:hidden;
    left:0px; top:0px; width:100%; height:100%;
    padding:0px 2px 0px 2px; text-overflow:ellipsis;
  }

  .PUX.TextInput > textarea { border:none; background:#e8f0ff; padding:2px }
  .PUX.TextInput.no-resize > textarea { resize:none }

  .PUX.horizontalSeparator {
    height:1px; margin:0px; margin-top:7px;
    border:none; border-top:solid 1px black
  }
  .PUX.verticalSeparator {
    width:1px; margin:0px; margin-left:7px;
    border:none; border-left:solid 1px black
  }

  .PUX.FileDropArea {/*
    display:flex; flex-flow:column nowrap;
      justify-content:center; align-items:center;*/
    border:dashed 4px #DDDDDD; border-radius:4px;
    color:#DDDDDD;
  }

  .PUX.FileDropArea * { pointer-events:none }

  .PUX.FileDropArea > input[type="file"] {
    display:block; position:absolute; appearance:none;
    left:0px; top:0px; right:0px; bottom:0px;
    opacity:0.01;
  }

  .PUX.Accordion {
    display:flex; flex-flow:column nowrap; align-items:stretch;
    overflow:auto;
  }

  .PUX.Fold {
    display:block; position:relative;
    left:0px; top:0px; width:100%; bottom:auto;
  }

  .PUX.Fold-Header {
    display:block; position:relative;
    width:100%; height:30px; background:#EEEEEE; border:none;
    border-top:   solid 1px #FFFFFF;
    border-bottom:solid 1px #AAAAAA;
  }

  .PUX.Fold-Expander {
    left:2px; top:2px; width:24px; height:24px;
  }

  .PUX.Fold-Title {
    left:30px; top:0px; bottom:0px; right:0px;
    font-size:14px; font-weight:bold; color:black; line-height:30px;
  }

  .PUX.Fold-Content {
    display:block; position:relative;
    left:0px; top:0px; width:100%; height:auto;
  }
  .PUX.Deck {}

  .PUX.Card {
    left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto;
    border:none;
  }
  .PUX.TabStrip {
    display:flex; flex-flow:row nowrap; align-items:stretch;
  }

  .PUX.Tab {
    display:block; position:relative;
    left:0px; top:0px; height:100%; width:auto;
    border:none; border-width:0px 0px 4px 0px;
  }
  .PUX.Tab.active { border-style:solid; border-color:black }

  .PUX.Tab > * { pointer-events:none }

  .PUX.FlatListView {
    display:flex; flex-flow:column nowrap; align-items:stretch;
    overflow:scroll; overflow-x:auto; overflow-y:scroll;
  }

  .PUX.FlatListView > div {
    display:block; position:relative; overflow:hidden; flex:0 0 auto;
    left:0px; top:0px; width:auto; height:22px; line-height:22px;
    background:none;
    border:none; border-bottom:solid 1px light-gray;
    white-space:nowrap; text-overflow:ellipsis;
    user-select:none;
  }

  .PUX.FlatListView > div:last-child {
    border:none; border-bottom:solid 1px transparent;
  }

  .PUX.FlatListView > div.selected {
    background:dodgerblue; color:white;
  }


  .PUX.NestedListView {
    display:flex; flex-flow:column nowrap; align-items:stretch;
    overflow:scroll; overflow-x:auto; overflow-y:scroll;
  }

  .PUX.NestedListView .ItemView {
    display:flex; flex-flow:column nowrap; align-items:stretch;
      position:relative; overflow:hidden; flex:0 0 auto;
    left:0px; top:0px; width:auto; height:auto;
    background:none; border:none;
    user-select:none;
  }

  .PUX.NestedListView .ItemLine {
    display:flex; flex-flow:row nowrap; align-items:stretch;
      position:relative; flex:0 0 auto;
    height:22px; line-height:22px;
    white-space:nowrap; text-overflow:ellipsis;
  }

  .PUX.NestedListView .ItemIcon {
    display:inline-block; position:relative;
    margin-top:6px; width:14px; height:10px;
    pointer-events:none;
  }

  .PUX.NestedListView .ItemExpander {
    display:inline-block; position:relative;
    margin-top:4px; width:14px; height:14px;
    pointer-events:auto;
  }

  .PUX.NestedListView .ItemLabel {
    display:inline-block; position:relative; flex:1 0 auto;
    pointer-events:none;
  }

  .PUX.NestedListView .ItemLine.selected > .ItemLabel {
    background:dodgerblue; color:white;
  }

  .PUX.ModalLayer {
    display:block; position:absolute;
    background:rgba(0,0,0,0.3); border:none;
  }


  .PUX.Dialog, .PUX.ResizableDialog {
    display:block; position:absolute;
    border:solid 1px #000000; border-radius:4px;
    background:white; color:black;
    box-shadow:0px 0px 10px 0px rgba(0,0,0,0.3);
  }

  .PUX.Dialog > .Titlebar, .PUX.ResizableDialog > .Titlebar {
    display:block; position:absolute; overflow:hidden;
    left:0px; top:0px; right:0px; height:30px;
    background:#EEEEEE; border:none; border-radius:3px 3px 0px 0px;
    user-select:none;
  }

  .PUX.Dialog > .Titlebar > .Title, .PUX.ResizableDialog > .Titlebar > .Title {
    display:block; position:absolute;
    left:6px; top:3px; right:30px; height:18px;
    border:none;
    font-weight:bold; color:black;
    user-select:none; pointer-events:none;
  }

  .PUX.Dialog > .Titlebar > .CloseButton, .PUX.ResizableDialog > .Titlebar > .CloseButton {
    display:block; position:absolute;
    top:0px; right:0px; width:30px; height:30px;
    border:none;
    user-select:none;
  }

  .PUX.ResizableDialog > .ContentPane {
    display:block; position:absolute;
    left:0px; top:0px; right:0px; bottom:9px;
    border:none;
  }

  .PUX.ResizableDialog > .leftResizer {
    display:block; position:absolute;
    left:0px; bottom:0px; width:30px; height:9px;
    border:none; border-top:solid 1px black; border-right:solid 1px black;
    border-radius:0px 0px 0px 3px;
    cursor:nesw-resize;
  }

  .PUX.ResizableDialog > .middleResizer {
    display:block; position:absolute;
    left:30px; bottom:0px; right:30px; height:9px;
    border:none; border-top:solid 1px black;
    border-radius:0px;
    cursor:ns-resize;
  }

  .PUX.ResizableDialog > .rightResizer {
    display:block; position:absolute;
    bottom:0px; right:0px; width:30px; height:9px;
    border:none; border-left:solid 1px black; border-top:solid 1px black;
    border-radius:0px 0px 3px 0px;
    cursor:nwse-resize;
  }



/**** centered ****/

  .centered {
    display:block; position:relative;
    width:100%; height:100%; max-height:240px;
  }

  .centered > * {
    display:block; position:absolute;
    left:50%; top:50%;
    transform:translate(-55%,-50%);
    white-space:nowrap;
  }

`, document.head.appendChild(Dn);
const ds = /* @__PURE__ */ new WeakMap();
function on(n, e) {
  let t, i = ds.get(n);
  if (i != null)
    return i;
  function o() {
  }
  function r(k) {
    k.stopImmediatePropagation(), k.preventDefault();
  }
  let a, u, { onlyFrom: d, neverFrom: s, Threshold: c = 0, consumingEvent: l = !0, onDragStarted: p = o, onDragContinued: h = o, onDragFinished: g = o, onDragCancelled: f = o } = e, m = "idle";
  function _(k) {
    l && r(k), m = "busy";
    let { pageX: b, pageY: I } = k;
    p(Math.round(b), Math.round(I), Math.round(b - a), Math.round(I - u), k);
  }
  function w(k) {
    if (l && r(k), m !== "idle") {
      const b = m === "busy";
      m = "idle", k.target.releasePointerCapture(k.pointerId), b && f(Math.round(a), Math.round(u), 0, 0, k);
    }
    t = void 0;
  }
  return i = function(k) {
    switch (k.type) {
      case "pointerdown":
        return function(b) {
          b.isPrimary && (d != null && (d instanceof HTMLElement && d !== b.target || typeof d == "string" && !b.target.matches(d)) || s != null && (s instanceof HTMLElement && s === b.target || typeof s == "string" && b.target.matches(s)) || (b.button === 0 ? (b.target.setPointerCapture(b.pointerId), t = b.target, m === "idle" && ({ pageX: a, pageY: u } = b, c > 0 ? m = "observing" : _(b))) : w(b)));
        }(k);
      case "pointermove":
        return function(b) {
          if (m !== "idle" && b.target !== t && (b.target.setPointerCapture(b.pointerId), t = b.target, console.log("PointerTarget changed")), m === "observing") {
            let { pageX: I, pageY: C } = b;
            (a - I) ** 2 + (u - C) ** 2 >= c ** 2 && _(b);
          } else
            m === "busy" && function(I) {
              l && r(I);
              let { pageX: C, pageY: D } = I;
              h(Math.round(C), Math.round(D), Math.round(C - a), Math.round(D - u), I);
            }(b);
        }(k);
      case "pointerup":
        return function(b) {
          m === "busy" ? function(I) {
            l && r(I), m = "idle";
            let { pageX: C, pageY: D } = I;
            g(Math.round(C), Math.round(D), Math.round(C - a), Math.round(D - u), I), t = void 0;
          }(b) : w(b);
        }(k);
      case "pointercancel":
        return function(b) {
          w(b);
        }(k);
    }
  }, i.abortDragging = w, ds.set(n, i), i;
}
const cs = /* @__PURE__ */ new WeakMap();
function hs(n, e) {
  let t, i = cs.get(n);
  if (i != null)
    return i;
  function o() {
  }
  function r(L) {
    L.stopImmediatePropagation(), L.preventDefault();
  }
  let a, u, { onlyFrom: d, neverFrom: s, Threshold: c = 0, consumingEvent: l = !0, onDragStarted: p = o, onDragContinued: h = o, onDragFinished: g = o, onDragCancelled: f = o, onClicked: m = o, MultiClickTimeSpan: _ = 300, onMultiClick: w = o } = e, k = "idle", b = 0, I = 0;
  function C(L) {
    l && r(L), k = "busy";
    let { pageX: $, pageY: F } = L;
    p(Math.round($), Math.round(F), Math.round($ - a), Math.round(F - u), L);
  }
  function D(L) {
    if (l && r(L), k !== "idle") {
      const $ = k === "busy";
      k = "idle", L.target.releasePointerCapture(L.pointerId), $ && f(Math.round(a), Math.round(u), 0, 0, L);
    }
    t = void 0;
  }
  return i = function(L) {
    switch (L.type) {
      case "pointerdown":
        return function($) {
          $.isPrimary && (d != null && (d instanceof HTMLElement && d !== $.target || typeof d == "string" && !$.target.matches(d)) || s != null && (s instanceof HTMLElement && s === $.target || typeof s == "string" && $.target.matches(s)) || ($.button === 0 ? ($.target.setPointerCapture($.pointerId), t = $.target, k === "idle" && ({ pageX: a, pageY: u } = $, c > 0 ? k = "observing" : C($))) : D($)));
        }(L);
      case "pointermove":
        return function($) {
          if (k !== "idle" && $.target !== t && ($.target.setPointerCapture($.pointerId), t = $.target, console.log("PointerTarget changed")), k === "busy" && function(F) {
            l && r(F);
            let { pageX: H, pageY: J } = F;
            h(Math.round(H), Math.round(J), Math.round(H - a), Math.round(J - u), F);
          }($), k === "observing") {
            let { pageX: F, pageY: H } = $;
            (a - F) ** 2 + (u - H) ** 2 >= c ** 2 && C($);
          }
        }(L);
      case "pointerup":
        return function($) {
          if (k === "busy" && function(F) {
            l && r(F), k = "idle";
            let { pageX: H, pageY: J } = F;
            g(Math.round(H), Math.round(J), Math.round(H - a), Math.round(J - u), F), t = void 0;
          }($), k === "observing") {
            k = "idle", m(a, u, $);
            let F = Date.now();
            F - b < _ ? (I += 1, I > 1 && w(I, a, u, $)) : I = 1, b = F;
          }
        }(L);
      case "pointercancel":
        return function($) {
          D($);
        }(L);
    }
  }, i.abortDragging = D, cs.set(n, i), i;
}
class A {
  constructor(e = "PUX") {
    this._IdPrefix = void 0, this._ImageFolder = "", this._ScreenSet = {}, this._DialogSet = {}, this._observed = Dd({}, { deep: !1 }), this._UpdaterList = [], this._StartScreen = {}, this._openScreen = {}, this._openDialogs = [], this._View = void 0, this._IdPrefix = e;
  }
  get ImageFolder() {
    return this._ImageFolder;
  }
  set ImageFolder(e) {
    (e = e.trim()) === "" || e.endsWith("/") || (e += "/"), this._ImageFolder = e;
  }
  get Style() {
    const e = document.getElementById(this._IdPrefix + "-Style");
    return e == null ? "" : e.innerHTML;
  }
  set Style(e) {
    const t = this._IdPrefix + "-Style";
    let i = this._ImageFolder;
    i !== "" && (e = e.replace(/url\("\/images\//g, 'url("' + i));
    let o = document.getElementById(t);
    o == null && (o = document.createElement("style"), o.setAttribute("id", t), document.head.appendChild(o)), o.innerHTML = e;
  }
  get ScreenSet() {
    return this._ScreenSet;
  }
  set ScreenSet(e) {
    this._ScreenSet = e;
    for (let t in e) {
      this._StartScreen = e[t];
      break;
    }
    for (let t in e)
      Object.assign(e[t], { dX: 0, dY: 0, dW: 0, dH: 0 });
  }
  get observed() {
    return this._observed;
  }
  set observed(e) {
    Lt("observed");
  }
  ScreenNamed(e) {
    return this._ScreenSet[e];
  }
  existingScreenNamed(e) {
    const t = this._ScreenSet[e];
    return t == null && De("NoSuchScreen: a screen named " + $e(e) + " does not exist"), t;
  }
  packScreen(e, t = 10, i) {
    i == null && (i = t);
    const o = this.existingScreenNamed(e);
    if (o.packedGeometry == null)
      return;
    let { x: r, y: a, Width: u, Height: d } = o.packedGeometry;
    r -= t, u += 2 * t, a -= i, d += 2 * i, o.Width = u, o.Height = d, o.WidgetList.forEach((s) => {
      s.hidden || (s.x -= r, s.y -= a);
    });
  }
  openScreen(e) {
    const t = this.existingScreenNamed(e);
    this._openScreen !== t && (this._openScreen = t, this.rerender());
  }
  closeScreen(e) {
    const t = this.ScreenNamed(e);
    t != null && this._openScreen === t && (this._openScreen = this._StartScreen, this.rerender());
  }
  ScreenIsOpen(e) {
    const t = this.existingScreenNamed(e);
    return this._openScreen === t;
  }
  startWithScreen(e) {
    this._StartScreen = this.existingScreenNamed(e), this.openScreen(e);
  }
  get StartScreen() {
    return this._StartScreen;
  }
  set StartScreen(e) {
    Lt("StartScreen");
  }
  extractAllDialogs() {
    for (let t in this._ScreenSet) {
      const i = this._ScreenSet[t].WidgetList;
      for (let o = i.length - 1; o >= 0; o--) {
        const r = i[o];
        if (r.Type === "Dialog" || r.Type === "ResizableDialog") {
          if (!(typeof (e = r.Name) == "string" || e instanceof String) || Wu.test(e.valueOf())) {
            console.error('Dialog without name in screen "' + t + '"');
            continue;
          }
          if (r.Name in this._DialogSet) {
            console.error('a dialog with name "' + r.Name + '" has already been registered');
            continue;
          }
          this._DialogSet[r.Name] = r, i.splice(o, 1);
        }
      }
    }
    var e;
  }
  DialogNamed(e) {
    return this._DialogSet[e];
  }
  existingDialogNamed(e) {
    const t = this._DialogSet[e];
    return t == null && De("NoSuchDialog: a dialog named " + $e(e) + " does not exist"), t;
  }
  openDialog(e) {
    const t = this.existingDialogNamed(e), i = this._openDialogs.indexOf(t);
    if (i >= 0) {
      if (i === this._openDialogs.length - 1)
        return;
      this._openDialogs.splice(i, 1);
    }
    this._openDialogs.push(t), this.rerender(), typeof t.onOpen == "function" && t.onOpen(t);
  }
  closeDialog(e) {
    let t = this.DialogNamed(e);
    if (t == null)
      return;
    const i = this._openDialogs.indexOf(t);
    i < 0 || (this._openDialogs.splice(i, 1), this.rerender(), typeof t.onClose == "function" && t.onClose(t));
  }
  DialogIsOpen(e) {
    let t = this.existingDialogNamed(e);
    return this._openDialogs.indexOf(t) >= 0;
  }
  get openDialogs() {
    return this._openDialogs.slice();
  }
  set openDialogs(e) {
    Lt("openDialogs");
  }
  closeAllDialogs() {
    this._openDialogs.length = 0, this.rerender();
  }
  DialogIsFrontMost(e) {
    let t = this.existingDialogNamed(e);
    return this._openDialogs.indexOf(t) === this._openDialogs.length - 1;
  }
  bringDialogToFront(e) {
    this.openDialog(e);
  }
  WidgetNamed(e) {
    const t = this._ScreenSet;
    for (let i in t) {
      const o = t[i].WidgetList;
      for (let r = 0, a = o.length; r < a; r++)
        if (o[r].Name === e)
          return o[r];
    }
  }
  existingWidgetNamed(e) {
    const t = this.WidgetNamed(e);
    return t == null && De("NoSuchWidget: a widget named " + $e(e) + " does not exist"), t;
  }
  WidgetOnScreen(e, t) {
    const i = t.WidgetList || [];
    for (let o = 0, r = i.length; o < r; o++)
      if (i[o].Name === e)
        return i[o];
  }
  WidgetOnDialog(e, t) {
    return this.WidgetOnScreen(e, t);
  }
  existingWidgetOnScreen(e, t) {
    const i = this.WidgetOnScreen(e, t);
    return i == null && De("NoSuchWidget: screen " + $e(t.Name) + " does not contain a widget named " + $e(e)), i;
  }
  existingWidgetOnDialog(e, t) {
    const i = this.WidgetOnDialog(e, t);
    return i == null && De("NoSuchWidget: dialog " + $e(t.Name) + " does not contain a widget named " + $e(e)), i;
  }
  WidgetInContainer(e, t) {
    const i = t.WidgetList || [];
    for (let o = 0, r = i.length; o < r; o++)
      if (i[o].Name === e)
        return i[o];
  }
  existingWidgetInContainer(e, t) {
    const i = this.WidgetInContainer(e, t);
    return i == null && De("NoSuchWidget: could not find widget named " + $e(e)), i;
  }
  stuff(e) {
    for (let t in e) {
      const i = this.ScreenNamed(t);
      if (i != null) {
        this.stuffScreen(i, e[t]);
        continue;
      }
      const o = this.DialogNamed(t);
      o == null ? De("NoSuchScreenOrDialog: no screen or dialog named " + $e(t) + " found") : this.stuffDialog(o, e[t]);
    }
  }
  stuffScreen(e, t) {
    for (let i in t) {
      let o = this.existingWidgetOnScreen(i, e);
      this.stuffWidget(o, t[i]);
    }
  }
  stuffDialog(e, t) {
    for (let i in t) {
      let o = this.existingWidgetOnDialog(i, e);
      this.stuffWidget(o, t[i]);
    }
  }
  stuffWidget(e, t) {
    if (this.ValueIsStuff(t)) {
      const i = this.existingScreenNamed(t.from);
      e.WidgetList = (e.WidgetList || []).concat(t.with.map((o) => this.existingWidgetOnScreen(o, i)));
    } else
      for (let i in t) {
        const o = this.existingWidgetInContainer(i, e);
        this.stuffWidget(o, t[i]);
      }
  }
  ValueIsStuff(e) {
    return kn(e) && zn(e.from) && gn(e.with, zn);
  }
  configure(e) {
    for (let t in e) {
      const i = this.ScreenNamed(t);
      if (i != null) {
        this.configureScreen(i, e[t]);
        continue;
      }
      const o = this.DialogNamed(t);
      o == null ? De("NoSuchScreenOrDialog: no screen or dialog named " + $e(t) + " found") : this.configureDialog(o, e[t]);
    }
  }
  configureScreen(e, t) {
    for (let i in t)
      if (i === "self")
        this.configureWidget(e, t.self);
      else {
        const o = this.existingWidgetOnScreen(i, e);
        this.configureWidget(o, t[i]);
      }
  }
  configureDialog(e, t) {
    for (let i in t)
      if (i === "self")
        this.configureWidget(e, t.self);
      else {
        const o = this.existingWidgetOnDialog(i, e);
        this.configureWidget(o, t[i]);
      }
  }
  configureWidget(e, t) {
    for (let i in t) {
      let o = t[i];
      if (kn(o) && pi(o.Updater))
        this._UpdaterList.push(Fd(() => {
          this.updateWidget(e, { [i]: o.Updater() });
        }));
      else {
        if (kn(o) && e.WidgetList != null) {
          const r = this.WidgetInContainer(i, e);
          if (r != null) {
            this.configureWidget(r, o);
            continue;
          }
        }
        e[i] = o;
      }
    }
  }
  update(e) {
    for (let t in e) {
      const i = this.ScreenNamed(t);
      if (i != null) {
        this.updateScreen(i, e[t]);
        continue;
      }
      const o = this.DialogNamed(t);
      o == null ? De("NoSuchScreenOrDialog: no screen or dialog named " + $e(t) + " found") : this.updateDialog(o, e[t]);
    }
  }
  updateScreen(e, t) {
    for (let i in t)
      if (i === "self")
        this.updateWidget(e, t.self);
      else {
        const o = this.existingWidgetOnScreen(i, e);
        this.updateWidget(o, t[i]);
      }
  }
  updateDialog(e, t) {
    for (let i in t)
      if (i === "self")
        this.updateWidget(e, t.self);
      else {
        const o = this.existingWidgetOnDialog(i, e);
        this.updateWidget(o, t[i]);
      }
  }
  updateWidget(e, t) {
    for (let o in t)
      e[o] = t[o];
    const i = e.View;
    i != null && i.rerender();
  }
  updatedFrom(e) {
    return { Updater: e };
  }
  get View() {
    return this._View;
  }
  set View(e) {
    Lt("View");
  }
  renderInto(e) {
    (function(t, i, o) {
      var r, a, u;
      Q.__ && Q.__(t, i), r = i.__k, a = [], u = [], _i(i, t = i.__k = la(_n, null, [t]), r || yt, yt, i.namespaceURI, r ? null : i.firstChild ? mn.call(i.childNodes) : null, a, r ? r.__e : i.firstChild, !1, u), ha(a, t, u);
    })(y(ir || (ir = S`<${0} ProtoUX=${0}/>`), Nd, this), e);
  }
  rerender() {
    this._View != null && this._View.rerender();
  }
  static registerWidgetView(e, t) {
    A._WidgetViewRegistry[e] = t;
  }
  static WidgetViewForType(e) {
    return A._WidgetViewRegistry[e];
  }
}
A._WidgetViewRegistry = /* @__PURE__ */ Object.create(null);
class Nd extends Ve {
  constructor(...e) {
    super(...e), this.state = { Value: 0 };
  }
  rerender() {
    this.setState({ Value: this.state.Value + 1 });
  }
  render(e) {
    let t = e.ProtoUX;
    t._View = this;
    const i = t._openScreen, o = t._openDialogs.slice(), r = o.pop(), a = (r == null ? void 0 : r.isModal) == 1;
    return y(rr || (rr = S`<div style="
        display:block; position:absolute;
        left:0px; top:0px; right:0px; bottom:0px;
      ">
        <${0} ProtoUX=${0} Screen=${0}/>
        ${0}
        ${0}
        ${0}
      </div>`), Ld, t, i, o.map((u) => y(or || (or = S`<${0} ProtoUX=${0} Dialog=${0} key=${0}/>`), ps, t, u, u.Name)), a ? y(sr || (sr = S`<${0}/>`), Td) : "", r == null ? "" : y(ar || (ar = S`<${0} ProtoUX=${0} Dialog=${0} key=${0}/>`), ps, t, r, r.Name));
  }
}
class Ld extends Ve {
  render(e) {
    const t = e.Screen;
    t.View = this;
    const { Id: i, Classes: o, Style: r, Width: a, Height: u, WidgetList: d } = t;
    return y(lr || (lr = S`<div class=${0} id=${0} style="
        width:${0}px; height:${0}px; ${0}
      ">
        ${0}
      </div>`), M("PUX Screen", o), i, a, u, r || "", d.map((s) => y(ur || (ur = S`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`), B, s, e.ProtoUX, s.Name)));
  }
}
class Td extends Ve {
  render(e) {
    const { Style: t } = e;
    return y(dr || (dr = S`<div class="PUX ModalLayer" style="
        ${0};
        display:block; position:absolute;
        left:0px; top:0px; right:0px; bottom:0px;
      " onClick=${0}/>`), t || "", function(i) {
      i.stopImmediatePropagation(), i.preventDefault();
    });
  }
}
class ps extends Ve {
  render(e) {
    const t = e.Dialog;
    return t.Type === "ResizableDialog" ? y(cr || (cr = S`<${0} Dialog=${0} ProtoUX=${0}/>`), Ad, t, e.ProtoUX) : y(hr || (hr = S`<${0}  Dialog=${0} ProtoUX=${0}/>`), Bd, t, e.ProtoUX);
  }
}
class Bd extends Ve {
  constructor(...e) {
    super(...e), this.state = { Value: 0 };
  }
  rerender() {
    this.setState({ Value: this.state.Value + 1 });
  }
  render(e) {
    const t = e.Dialog;
    t.View = this;
    const i = (k, b, I, C) => {
      t.x = t._DragOffset.x + I, t.y = t._DragOffset.y + C, t.z = 20001e3, e.ProtoUX.View.rerender();
    }, o = (k, b, I, C) => {
      i(0, 0, I, C), t.z = 2e6, e.ProtoUX.bringDialogToFront(t.Name);
    }, r = on(t, { neverFrom: ".CloseButton", Threshold: 4, onDragStarted: (k, b, I, C) => {
      t._DragOffset = { x: t.x, y: t.y }, i(0, 0, I, C);
    }, onDragContinued: i, onDragFinished: o, onDragCancelled: o }), { Id: a, Classes: u, Style: d, x: s, y: c, z: l, Width: p, Height: h, Title: g, closeable: f, WidgetList: m } = t, _ = E(t, Mu), w = `left:${s}px; top:${c}px; width:${p}px; height:${h}px; right:auto; bottom:auto;`;
    return y(pr || (pr = S`<div class=${0} id=${0} style="
        ${0}; ${0}; z-index:${0};
      " ...${0}>
        <div class="Titlebar"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        >
          <div class="Title">${0}</div>
          <img class="CloseButton" src="${0}/xmark.png"
            style="visibility:${0}"
            onClick=${0}/>
        </div>

        ${0}
      </>`), M("PUX Dialog", u), a, d || "", w, l || 2e6, _, r, r, r, r, g, e.ProtoUX._ImageFolder, f === !1 ? "hidden" : "visible", function(k) {
      k.stopImmediatePropagation(), k.preventDefault(), f !== !1 && e.ProtoUX.closeDialog(t.Name);
    }, (m || []).map((k) => y(gr || (gr = S`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`), B, k, e.ProtoUX, k.Name)));
  }
}
class Ad extends Ve {
  constructor(...e) {
    super(...e), this.state = { Value: 0 };
  }
  rerender() {
    this.setState({ Value: this.state.Value + 1 });
  }
  render(e) {
    const t = e.Dialog;
    t.View = this;
    let { Id: i, Classes: o, Style: r, x: a, y: u, z: d, Width: s, Height: c, Title: l, closeable: p, minWidth: h, minHeight: g, maxWidth: f, maxHeight: m, WidgetList: _ } = t, w = E(t, Uu);
    Qe("minimal width", h), Qe("maximal width", f), Qe("minimal height", g), Qe("maximal height", m), h == null && (h = 120), f == null && (f = 1 / 0), g == null && (g = 80), m == null && (m = 1 / 0), h = Math.max(0, h), f = Math.max(h, f), g = Math.max(0, g), m = Math.max(g, m);
    const k = ($, F, H, J) => {
      t._DragMode === "drag" ? I(H, J) : C(H, J), t.z = 20001e3, e.ProtoUX.View.rerender();
    }, b = ($, F, H, J) => {
      k(0, 0, H, J), t.z = 2e6, e.ProtoUX.bringDialogToFront(t.Name);
    }, I = ($, F) => {
      t.x = t._DragOffset.x + $, t.y = t._DragOffset.y + F;
    }, C = ($, F) => {
      switch (t._DragMode) {
        case "resize-sw":
          let H = Math.max(h, Math.min(t._DragOffset.Width - $, f));
          t.x = t._DragOffset.x - ($ = H - t._DragOffset.Width), t.Width = t._DragOffset.Width + $;
          break;
        case "resize-se":
          t.Width = Math.max(h, Math.min(t._DragOffset.Width + $, f));
      }
      t.Height = Math.max(g, Math.min(t._DragOffset.Height + F, m));
    }, D = on(t, { onlyFrom: ".Titlebar,.leftResizer,.middleResizer,.rightResizer", neverFrom: ".CloseButton", Threshold: 4, onDragStarted: ($, F, H, J, Y) => {
      let We = Y.target.classList;
      switch (t._DragMode = void 0, !0) {
        case We.contains("leftResizer"):
          t._DragMode = "resize-sw";
          break;
        case We.contains("middleResizer"):
          t._DragMode = "resize-s";
          break;
        case We.contains("rightResizer"):
          t._DragMode = "resize-se";
          break;
        default:
          t._DragMode = "drag";
      }
      t._DragOffset = { x: t.x, Width: t.Width, y: t.y, Height: t.Height }, k(0, 0, H, J);
    }, onDragContinued: k, onDragFinished: b, onDragCancelled: b }), L = `left:${a}px; top:${u}px; width:${s}px; height:${c}px; right:auto; bottom:auto;`;
    return y(fr || (fr = S`<div class=${0} id=${0} style="
        ${0}; ${0}; z-index:${0};
      " ...${0}>
        <div class="ContentPane">
          ${0}
        </div>

        <div class="Titlebar"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        >
          <div class="Title">${0}</div>
          <img class="CloseButton" src="${0}/xmark.png"
            style="visibility:${0}"
            onClick=${0}/>
        </div>

        <div class="leftResizer"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        />
        <div class="middleResizer"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        />
        <div class="rightResizer"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        />
      </>`), M("PUX ResizableDialog", o), i, r || "", L, d || 2e6, w, (_ || []).map(($) => y(mr || (mr = S`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`), B, $, e.ProtoUX, $.Name)), D, D, D, D, l, e.ProtoUX._ImageFolder, p === !1 ? "hidden" : "visible", function($) {
      $.stopImmediatePropagation(), $.preventDefault(), p !== !1 && e.ProtoUX.closeDialog(t.Name);
    }, D, D, D, D, D, D, D, D, D, D, D, D);
  }
}
class B extends Ve {
  constructor(...e) {
    super(...e), this.state = { Value: 0 };
  }
  rerender() {
    this.setState({ Value: this.state.Value + 1 });
  }
  render(e) {
    const t = e.Widget;
    if (t.View = this, e.hidden == 1 || t.hidden == 1)
      return "";
    const { Id: i, Classes: o, Style: r, x: a, y: u, Width: d, Height: s, WidgetList: c } = t, l = E(t, Xu), p = a != null && d != null && u != null && s != null ? `left:${a}px; top:${u}px; width:${d}px; height:${s}px; right:auto; bottom:auto;` : "";
    switch (t.Type) {
      case "Group":
        return y(_r || (_r = S`<div class="PUX Widget ${0}" id=${0} style="${0} ${0}" ...${0}>
            ${0}
          </div>`), o, i, p, r || "", l, (c || []).map((g) => y(Sr || (Sr = S`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`), B, g, e.ProtoUX, g.Name)));
      case "Box":
        return y(yr || (yr = S`<div class="PUX Widget ${0}" id=${0} style="
            ${0} ${0}
          " ...${0} key=${0}/>`), o, i, p, r || "", l, t.Name);
      default:
        const h = A.WidgetViewForType(t.Type);
        if (h == null) {
          const { Id: g, Classes: f, Style: m, Value: _, WidgetList: w } = t, k = E(t, Gu);
          return y(xr || (xr = S`<div class="PUX Widget ${0}" id=${0} style="
              ${0} ${0}
            " ...${0}>
              ${0}
              ${0}
            </div>`), f, g, p, m || "", k, _ || "", (w || []).map((b) => y(br || (br = S`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`), B, b, e.ProtoUX, b.Name)));
        }
        return y($r || ($r = S`<${0} Widget=${0} ProtoUX=${0} key=${0}/>`), h, t, e.ProtoUX, t.Name);
    }
  }
}
A.registerWidgetView("horizontalSeparator", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d } = e, s = E(e, zu), c = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(vr || (vr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}/>`), M("PUX horizontalSeparator Widget", i), t, c, o || "", s);
  }
}), A.registerWidgetView("verticalSeparator", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d } = e, s = E(e, Ou), c = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(wr || (wr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}/>`), M("PUX verticalSeparator Widget", i), t, c, o || "", s);
  }
}), A.registerWidgetView("Badge", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, Ru);
    const l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    switch (s = ("" + (s || "")).trim(), !0) {
      case s === "":
        return "";
      case s.length > 1:
        s = "#";
      default:
        return y(kr || (kr = S`<div class=${0} id=${0} style="
          ${0} ${0}
        " ...${0}>${0}</div>`), M("PUX Badge Widget", i), t, l, o || "", c, s);
    }
  }
}), A.registerWidgetView("HTMLView", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, ju), l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Vr || (Vr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}
        dangerouslySetInnerHTML=${0}
      />`), M("PUX HTMLView Widget", i), t, l, o || "", c, { __html: s });
  }
}), A.registerWidgetView("TextView", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, Zu), l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Ir || (Ir = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>${0}</>`), M("PUX TextView Widget", i), t, l, o || "", c, s);
  }
}), A.registerWidgetView("ImageView", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, ImageScaling: c, ImageAlignment: l } = e, p = E(e, Yu), h = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Wr || (Wr = S`<img class=${0} id=${0} style="
        ${0} ${0};
        object-fit:${0};
        object-position:${0};
      " ...${0} src=${0}/>`), M("PUX ImageView Widget", i), t, h, o || "", c === "stretch" ? "fill " : c, l, p, s);
  }
}), A.registerWidgetView("WebView", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, PermissionsPolicy: c, allowsFullscreen: l, SandboxPermissions: p, ReferrerPolicy: h } = e, g = E(e, qu), f = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Pr || (Pr = S`<iframe class=${0} id=${0} style="
        ${0} ${0}
      " ...${0} src=${0}
        allow=${0} allowfullscreen=${0}
        sandbox=${0}
        referrerpolicy=${0}
      />`), M("PUX WebView Widget", i), t, f, o || "", g, s, c, l, p || "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts", h);
  }
}), A.registerWidgetView("Icon", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Color: c, disabled: l, onClick: p } = e, h = E(e, Ju);
    const g = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let f = n.ProtoUX.ImageFolder;
    return s != null && s.trim() !== "" && (s = s.trim().replace(/url\("\/images\//g, 'url("' + f)), y(Cr || (Cr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " disabled=${0}><div style="
        display:block; position:absolute;
        left:0px; top:0px; width:100%; height:100%;
        -webkit-mask-image:${0};         mask-image:${0};
        -webkit-mask-size:contain;           mask-size:contain;
        -webkit-mask-position:center center; mask-position:center center;
        background-color:${0};
      " onClick=${0} ...${0}/></>`), M("PUX Icon Widget", i), t, g, o || "", l, s, s, c || "black", function(m) {
      l == 1 ? (m.stopPropagation(), m.preventDefault()) : typeof p == "function" && p(m);
    }, h);
  }
}), A.registerWidgetView("PseudoDropDown", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Color: c, Options: l, disabled: p, onInput: h } = e, g = E(e, Ku);
    const f = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let m = n.ProtoUX.ImageFolder;
    return s != null && s.trim() !== "" && (s = s.trim().replace(/url\("\/images\//g, 'url("' + m)), y(Dr || (Dr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      "><div style="
        display:block; position:absolute;
        left:0px; top:0px; width:100%; height:100%;
        -webkit-mask-image:${0};         mask-image:${0};
        -webkit-mask-size:contain;           mask-size:contain;
        -webkit-mask-position:center center; mask-position:center center;
        background-color:${0};
      " ...${0}/>
        <select onInput=${0}>
          ${0}
        </select>
      </div>`), M("PUX PseudoDropDown Widget", i), t, f, o || "", s, s, c || "black", g, function(_) {
      p == 1 ? (_.stopPropagation(), _.preventDefault()) : typeof h == "function" && h(_);
    }, gn(l, zn) ? y(Fr || (Fr = S`
                <option value="" disabled selected>please select</option>
                ${0}
              `), (l || []).map((_) => y(Nr || (Nr = S`<option>${0}</>`), _))) : l);
  }
}), A.registerWidgetView("Button", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, Qu), l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Lr || (Lr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <button ...${0}>${0}</button>
      </div>`), M("PUX Button Widget", i), t, l, o || "", c, s || "");
  }
}), A.registerWidgetView("Checkbox", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, ed), l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let { checked: p, indeterminate: h } = n;
    return p == null && (p = s == 1), h == null && (h = s == null), y(Tr || (Tr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="checkbox" checked=${0} indeterminate=${0} ...${0}/>
      </div>`), M("PUX Checkbox Widget", i), t, l, o || "", p, h, c);
  }
}), A.registerWidgetView("Radiobutton", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, td), l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let { checked: p } = n;
    return p == null && (p = s == 1), y(Br || (Br = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="radio" checked=${0} ...${0}/>
      </div>`), M("PUX Radiobutton Widget", i), t, l, o || "", p, c);
  }
}), A.registerWidgetView("Gauge", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, nd), l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Ar || (Ar = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <meter value=${0} ...${0}/>
      </div>`), M("PUX Gauge Widget", i), t, l, o || "", s || "", c);
  }
}), A.registerWidgetView("Progressbar", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, id), l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Hr || (Hr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <progress value=${0} ...${0}/>
      </div>`), M("PUX Progressbar Widget", i), t, l, o || "", s || "", c);
  }
}), A.registerWidgetView("Slider", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Hashmarks: c } = e, l = E(e, rd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Hashmarks", g = y(Er || (Er = S`\n<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => {
      const m = f.replace(/:.*$/, "").trim(), _ = f.replace(/^[^:]+:/, "").trim();
      return y(Mr || (Mr = S`<option label=${0} value=${0}></option>`), m, _);
    }))), y(Ur || (Ur = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="range" value=${0} ...${0}
          onBlur=${0} list=${0}
        />
      </div>${0}`), M("PUX Slider Widget", i), t, p, o || "", s || "", l, this.rerender.bind(this), h, g);
  }
}), A.registerWidgetView("TextlineInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, od);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(Xr || (Xr = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(Gr || (Gr = S`<option value=${0}></option>`), f)))), y(zr || (zr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="text" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX TextlineInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("PasswordInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, sd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Or || (Or = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <input type="password" value=${0} ...${0}
          onBlur=${0}
        />
      </div>`), M("PUX PasswordInput Widget", i), t, l, o || "", s || "", c, this.rerender.bind(this));
  }
}), A.registerWidgetView("NumberInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, ad);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(Rr || (Rr = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(jr || (jr = S`<option value=${0}></option>`), f)))), y(Zr || (Zr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="number" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX NumberInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("PhoneNumberInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, ld);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(Yr || (Yr = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(qr || (qr = S`<option value=${0}></option>`), f)))), y(Jr || (Jr = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="tel" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX PhoneNumberInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("EMailAddressInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, ud);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(Kr || (Kr = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(Qr || (Qr = S`<option value=${0}></option>`), f)))), y(eo || (eo = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="email" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX EMailAddressInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("URLInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, dd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(to || (to = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(no || (no = S`<option value=${0}></option>`), f)))), y(io || (io = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="url" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX URLInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("TimeInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, cd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(ro || (ro = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(oo || (oo = S`<option value=${0}></option>`), f)))), y(so || (so = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="time" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX TimeInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("DateTimeInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, hd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(ao || (ao = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(lo || (lo = S`<option value=${0}></option>`), f)))), y(uo || (uo = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="datetime-local" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX DateTimeInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("DateInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, pd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(co || (co = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(ho || (ho = S`<option value=${0}></option>`), f)))), y(po || (po = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="date" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX DateInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("WeekInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, gd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(go || (go = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(fo || (fo = S`<option value=${0}></option>`), f)))), y(mo || (mo = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="week" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX WeekInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("MonthInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, fd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(_o || (_o = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(So || (So = S`<option value=${0}></option>`), f)))), y(yo || (yo = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="month" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX MonthInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("SearchInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, md);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(xo || (xo = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(bo || (bo = S`<option value=${0}></option>`), f)))), y($o || ($o = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="search" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX SearchInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("FileInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Placeholder: c, onDrop: l } = e, p = E(e, _d);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const h = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(vo || (vo = S`<label class=${0} id=${0} style="
        ${0} ${0}
      " onDragEnter=${0} onDragOver=${0} onDrop=${0}>
        <input type="file" style="display:none" ...${0}
          onBlur=${0}
        />
        ${0}
        ${0}
      </label>`), M("PUX FileInput Widget", i), t, h, o || "", function(g) {
      g.stopPropagation(), g.preventDefault();
    }, function(g) {
      g.stopPropagation(), g.preventDefault();
    }, function(g) {
      g.stopPropagation(), g.preventDefault(), typeof l == "function" && l(g);
    }, p, this.rerender.bind(this), (s || "") === "" ? "" : y(wo || (wo = S`<span>${0}</span>`), s), (s || "") === "" ? (c || "") === "" ? "" : y(ko || (ko = S`<span>${0}</span>`), c) : "");
  }
}), A.registerWidgetView("ColorInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Suggestions: c } = e, l = E(e, Sd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    let h, g = "";
    return Array.isArray(c) && c.length > 0 && (h = t + "-Suggestions", g = y(Vo || (Vo = S`<datalist id=${0}>
          ${0}
        </datalist>`), h, c.map((f) => y(Io || (Io = S`<option value=${0}></option>`), f)))), y(Wo || (Wo = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " list=${0}>
        <input type="color" value=${0} ...${0}
          onBlur=${0}
        />
      </div>${0}`), M("PUX ColorInput Widget", i), t, p, o || "", h, s || "", l, this.rerender.bind(this), g);
  }
}), A.registerWidgetView("DropDown", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, Options: c, Placeholder: l } = e, p = E(e, yd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const h = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Po || (Po = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <select ...${0} onBlur=${0}>
          ${0}
          ${0}
        </select>
      </div>`), M("PUX DropDown Widget", i), t, h, o || "", p, this.rerender.bind(this), l == null ? "" : y(Co || (Co = S`<option value="" disabled>${0}</option>`), l), (c || []).map((g) => y(Do || (Do = S`<option selected=${0}>${0}</>`), g === s, g)));
  }
}), A.registerWidgetView("TextInput", class extends B {
  constructor(...n) {
    super(...n), this._ValueToShow = void 0;
  }
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s } = e, c = E(e, xd);
    document.activeElement === this.base ? s = this._ValueToShow : this._ValueToShow = s;
    const l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(Fo || (Fo = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        <textarea ...${0} value=${0}
          onBlur=${0}
        ></textarea>
      </div>`), M("PUX TextInput Widget", i), t, l, o || "", c, s || "", this.rerender.bind(this));
  }
}), A.registerWidgetView("FileDropArea", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, onDrop: s, WidgetList: c } = e, l = E(e, bd), p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(No || (No = S`<label class=${0} id=${0} style="
        ${0} ${0}
      " onDragEnter=${0} onDragOver=${0} onDrop=${0}>
        <input type="file" ...${0}/>
        ${0}
      </label>`), M("PUX FileDropArea Widget", i), t, p, o || "", function(h) {
      h.stopPropagation(), h.preventDefault();
    }, function(h) {
      h.stopPropagation(), h.preventDefault();
    }, function(h) {
      h.stopPropagation(), h.preventDefault(), typeof s == "function" && s(h);
    }, l, (c || []).map((h) => y(Lo || (Lo = S`<${0} Widget=${0} ProtoUX=${0}/>`), B, h, n.ProtoUX)));
  }
}), A.registerWidgetView("Accordion", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, WidgetList: s } = e, c = E(e, $d), l = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(To || (To = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`), M("PUX Accordion Widget", i), t, l, o || "", c, (s || []).map((p) => y(Bo || (Bo = S`<${0} Widget=${0} ProtoUX=${0}/>`), ga, p, n.ProtoUX)));
  }
});
class ga extends B {
  render(e) {
    const t = e.Widget;
    t.View = this;
    const { Id: i, Classes: o, Style: r, Height: a, Value: u, Expansion: d, WidgetList: s } = t, c = E(t, vd), l = this;
    return y(Ao || (Ao = S`<div class=${0} id=${0} style="
        ${0}; left:0px; top:0px; width:100%; height:auto;
      " ...${0}>
        <div class="PUX Fold-Header">
          <img class="PUX Fold-Expander" src=${0} onClick=${0}
          />
          <div class="PUX Fold-Title">${0}</>
        </div>

        ${0}
      </>`), M("PUX Fold Widget", o), i, r || "", c, d ? `${e.ProtoUX._ImageFolder}caret-down.png` : `${e.ProtoUX._ImageFolder}caret-right.png`, function() {
      t.Expansion = !t.Expansion, l.rerender();
    }, u, d ? y(Ho || (Ho = S`<div class="PUX Fold-Content" style="
              height:${0}px; border:none;
            ">
              ${0}
            </>`), a, (s || []).map((p) => y(Eo || (Eo = S`<${0} Widget=${0} ProtoUX=${0}/>`), B, p, e.ProtoUX))) : "");
  }
}
A.registerWidgetView("Fold", ga), A.registerWidgetView("Deck", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, WidgetList: c } = e, l = E(e, wd), p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "", h = (c || [])[s == null ? 0 : s < 0 ? c.length + s : s] || (c || [])[0];
    return y(Mo || (Mo = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`), M("PUX Deck Widget", i), t, p, o || "", l, h == null ? y(Uo || (Uo = S`<${0}><span>(no card)</span></>`), Hd) : y(Xo || (Xo = S`<${0} Widget=${0} ProtoUX=${0}/>`), fa, h, n.ProtoUX));
  }
});
class fa extends B {
  render(e) {
    const t = e.Widget;
    t.View = this;
    const { Id: i, Classes: o, Style: r, WidgetList: a } = t, u = E(t, kd);
    return y(Go || (Go = S`<div class=${0} id=${0} style="
        border:none; ${0};
        left:0px; top:0px; right:0px; bottom:0px; width:auto; height:auto
      " ...${0}>
        ${0}
      </>`), M("PUX Card Widget", o), i, r || "", u, (a || []).map((d) => y(zo || (zo = S`<${0} Widget=${0} ProtoUX=${0}/>`), B, d, e.ProtoUX)));
  }
}
A.registerWidgetView("Card", fa), A.registerWidgetView("TabStrip", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    const { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Value: s, WidgetList: c } = e, l = E(e, Vd), p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "", h = (c || [])[s == null ? 0 : s < 0 ? c.length + s : s] || (c || [])[0], g = this;
    return y(Oo || (Oo = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`), M("PUX TabStrip Widget", i), t, p, o || "", l, (c || []).map((f, m) => y(Ro || (Ro = S`
          <${0} Widget=${0} ProtoUX=${0}
            active=${0}
            onClick=${0}
          />
        `), ma, f, n.ProtoUX, f === h, () => function(_) {
      g.base.dispatchEvent(new CustomEvent("ValueChange", { detail: _ }));
    }(m))));
  }
});
class ma extends B {
  render(e) {
    const t = e.Widget;
    t.View = this;
    const { Id: i, Classes: o, Style: r, Width: a, WidgetList: u } = t, d = E(t, Id), { active: s, onClick: c } = e;
    return y(jo || (jo = S`<div class=${0} id=${0} style="
        ${0}; width:${0}px; border:none; border-width:0px 0px 4px 0px;
        border-style:solid; border-bottom-color:${0}
      " ...${0} onClick=${0}>
        ${0}
      </div>`), M('PUX ${active ? "active" : ""} Tab Widget', o), i, r || "", a, s ? "black" : "transparent", d, c, (u || []).map((l) => y(Zo || (Zo = S`<${0} Widget=${0} ProtoUX=${0}/>`), B, l, e.ProtoUX)));
  }
}
function M(n, e) {
  const t = /* @__PURE__ */ Object.create(null);
  return (n + " " + (e || "")).trim().replace(/\s+/g, " ").split(" ").filter((i) => !(i in t) && (t[i] = !0, !0)).join(" ");
}
A.registerWidgetView("Tab", ma), A.registerWidgetView("FlatListView", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, List: s, ItemRenderer: c, Placeholder: l, selectedIndices: p, SelectionLimit: h, onSelectionChange: g, onItemSelected: f, onItemDeselected: m } = e, _ = E(e, Wd);
    const w = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    Zi("item list", s), _e("list item renderer", c), Vn("list placeholder", l), In("list of selected indices", p, zt), Qe("selection limit", h), _e("selection change callback", g), _e("item selection callback", f), _e("item deselection callback", m), c == null && (c = (I) => y(Yo || (Yo = S`${0}`), I + "")), l == null && (l = "(empty)"), p == null && (p = []), h == null && (h = 1);
    const k = /* @__PURE__ */ Object.create(null);
    if (p = p.filter((I) => !(!(zt(I) && I >= 0 && I < s.length) || I in k || (k[I] = !0, 0))), p.length > h) {
      const I = p.slice(h);
      p.length = h, g != null && g(p), m != null && I.forEach((C) => {
        m(s[C], C);
      });
    }
    function b(I) {
      return I in k;
    }
    return y(qo || (qo = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`), M("PUX FlatListView Widget", i), t, w, o || "", _, s.length === 0 ? y(Jo || (Jo = S`<div class="centered"><span>${0}</></>`), l) : s.map((I, C) => y(Ko || (Ko = S`<div
              class=${0}
              dangerouslySetInnerHTML=${0}
              onClick=${0}
            />`), b(C) ? "selected" : void 0, { __html: c(I, C, b(C)) }, (D) => function(L, $) {
      if (L.stopImmediatePropagation(), L.preventDefault(), h === 0)
        return;
      let F, H, J = !1;
      L.shiftKey || L.metaKey ? (J = !0, b($) ? (H = [$], p = p.filter((Y) => Y !== $)) : (p.length === h && (H = [p.shift()]), F = [$], p.push($))) : (H = p.filter((Y) => Y !== $), J = !b($), F = J ? [$] : [], p = [$]), J && g != null && g(p), H != null && m != null && H.forEach((Y) => {
        m(s[Y], Y);
      }), F != null && f != null && F.forEach((Y) => {
        f(s[Y], Y);
      });
    }(D, C))));
  }
}), A.registerWidgetView("NestedListView", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, List: s, ItemRenderer: c, Placeholder: l, LabelOfItem: p, ContentListOfItem: h, selectedPaths: g, SelectionLimit: f, SelectionMode: m, onSelectionChange: _, onItemSelected: w, onItemDeselected: k, onItemDoubleClicked: b, expandedPaths: I, Indentation: C, onExpansionChange: D, onItemExpanded: L, onItemCollapsed: $ } = e, F = E(e, Pd);
    const H = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    function J(X) {
      return gn(X, zt);
    }
    var Y;
    function We(X) {
      let G = s[X[0]];
      for (let le = 1, ae = X.length; le < ae; le++) {
        if (G == null)
          return;
        const Ze = h(G);
        if (!tn(Ze))
          return;
        G = Ze[X[le]];
      }
      return G;
    }
    function wt(X) {
      return We(X) != null;
    }
    function lt(X, G) {
      return X.length === G.length && X.every((le, ae) => le === G[ae]);
    }
    function pe(X, G) {
      for (let le = 0, ae = G.length; le < ae; le++)
        if (lt(X, G[le]))
          return le;
      return -1;
    }
    function je(X, G) {
      return X.length === G.length + 1 && lt(X.slice(0, G.length), G);
    }
    function fe(X) {
      return pe(X, g) >= 0;
    }
    if (Zi("item list", s), _e("list item renderer", c), Vn("list placeholder", l), ji("label extraction function", p), ji("content extraction function", h), In("list of selected paths", g, J), Qe("selection limit", f), (Y = m) == null || function(X, G, le) {
      if (G == null && ve("MissingArgument: no ".concat(He(X), " given")), ["same-container", "any-container"].indexOf(G) >= 0)
        return G == null || typeof G.valueOf != "function" ? G : G.valueOf();
      ve("InvalidArgument: the given ".concat(He(X), " is not among the supported values"));
    }("selection mode", Y), _e("selection change callback", _), _e("item selection callback", w), _e("item deselection callback", k), _e("item double-click callback", b), In("list of expanded paths", I, J), Qe("indentation", C), _e("expansion change callback", D), _e("item expansion callback", L), _e("item collapse callback", $), c == null && (c = function(X, G) {
      return y(Qo || (Qo = S`<div class="ItemLabel">${0}</div>`), p(X));
    }), l == null && (l = "(empty)"), g == null && (g = []), f == null && (f = 1), m == null && (m = "same-container"), I == null && (I = []), C == null && (C = 10), g = g.filter((X) => wt(X)), g = g.filter((X, G) => pe(X, g) === G), g.length > 1 && m === "same-container") {
      const X = g[0].slice(0, g[0].length - 1);
      g = g.filter((G) => je(G, X));
    }
    function kt(X, G) {
      const le = (G.length - 1) * C, ae = fe(G), Ze = function(Pe) {
        return pe(Pe, I) >= 0;
      }(G);
      let Ye = h(X);
      tn(Ye) || (Ye = []);
      const me = Ye.length > 0;
      return y(es || (es = S`<div class="ItemView" style="padding-left:${0}px">
          <div class="ItemLine ${0}"
            onClick=${0} onDblClick=${0}
          >
            ${0} ${0}
          </div>
          ${0}
        </div>`), le, ae ? "selected" : "", function(Pe) {
        (function(ue, qe, ne) {
          if (ue.stopImmediatePropagation(), ue.preventDefault(), f === 0)
            return;
          let x, W, v = !1;
          if (ue.shiftKey || ue.metaKey)
            if (v = !0, fe(ne))
              W = [ne], g = g.filter((V) => !lt(ne, V));
            else {
              const V = ne.slice(0, ne.length - 1);
              W = g.filter((N) => !je(N, V)), g = g.filter((N) => je(N, V)), g.length === f && W.push([g.shift()]), x = [ne], g.push(ne);
            }
          else
            W = g.filter((V) => !lt(ne, V)), v = !fe(ne), x = v ? [ne] : [], g = [ne];
          v && _ != null && _(g), W != null && k != null && W.forEach((V) => {
            k(We(V), V);
          }), x != null && w != null && x.forEach((V) => {
            w(We(V), V);
          });
        })(Pe, 0, G);
      }, function(Pe) {
        (function(ue, qe, ne) {
          b != null && (ue.stopImmediatePropagation(), ue.preventDefault(), b(qe, ne, ue));
        })(Pe, X, G);
      }, me ? y(Ze ? ts || (ts = S`<img class="ItemExpander" src="/svg/icons/caret-down.svg"  onClick=${0}/>`) : ns || (ns = S`<img class="ItemExpander" src="/svg/icons/caret-right.svg" onClick=${0}/>`), function(Pe) {
        (function(ue, qe, ne) {
          ue.stopImmediatePropagation(), ue.preventDefault();
          let x = pe(ne, I);
          x < 0 ? I.push(ne) : I.splice(x, 1), D != null && D(I), x < 0 ? L != null && L(qe, ne) : $ != null && $(qe, ne);
        })(Pe, X, G);
      }) : y(is || (is = S`<img class="ItemIcon" src="/svg/icons/circle.svg"/>`)), c(X, G), me && Ze ? Ye.map((Pe, ue) => kt(Pe, G.concat(ue))) : "");
    }
    return I = I.filter((X) => wt(X)), I = I.filter((X, G) => pe(X, I) === G), y(rs || (rs = S`<div class=${0} id=${0} style="
        ${0} ${0}
      " ...${0}>
        ${0}
      </>`), M("PUX NestedListView Widget", i), t, H, o || "", F, s.length === 0 ? y(os || (os = S`<div class="centered"><span>${0}</></>`), l) : s.map((X, G) => kt(X, [G])));
  }
}), A.registerWidgetView("Placeholder", class extends B {
  render(n) {
    const e = n.Widget;
    e.View = this;
    let { Id: t, Classes: i, Style: o, x: r, y: a, Width: u, Height: d, Substitute: s, Placeholder: c } = e, l = E(e, Cd);
    _e("Substitute", s), Vn("placeholder text", c), c == null && (c = "(empty)");
    const p = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return y(ss || (ss = S`<div class=${0} id=${0} style="
        ${0} ${0}
      ">
        ${0}
      </div>`), M("PUX Placeholder Widget", i), t, p, o || "", s == null ? y(as || (as = S`<div class="centered"><span>${0}</></>`), c) : y(ls || (ls = S`<${0} ...${0}/>`), s, l));
  }
});
class Hd extends Ve {
  render(e) {
    return y(us || (us = S`<div class="centered">
        ${0}
      </div>`), e.children);
  }
}
const { fromDocumentTo: Ed } = yu, xi = document.createElement("style");
xi.setAttribute("id", "SNS Stylesheet");
xi.innerHTML = `/*******************************************************************************
*                                                                              *
*                        Shareable Note Stickers (SNS)                         *
*                                                                              *
*******************************************************************************/

/**** all SNS elements are absolutely positioned ****/

  .SNS {
    display:block; position:absolute;
    margin:0px; padding:0px;
    background:none; border:none; border-radius:0px; outline:none;
  }

/**** Error Indicator ****/

  .SNS.ErrorIndicator {
    overflow:hidden;
    left:0px; top:0px; width:24px; height:24px;
    background:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E");
    pointer-events:auto;
  }


/**** BoardView ****/

  .SNS.BoardView {
    left:0px; top:0px; right:0px; bottom:0px;
  }

/**** Sticker and Contents, Cover ****/

  .SNS.Sticker {}
  .SNS.Sticker > .SNS {
    display:block; position:absolute;
    left:0px; top:0px; width:100%; height:100%; right:auto; bottom:auto;
  }

  .SNS.Cover { user-select:none; z-index:1000000 }

/**** Selection Markers ****/

  .SNS.Sticker.selected, .SNS.Cover[selected] {
    outline:dotted 2px orangered;
  }

  .SNS.ShapeHandle {
    width:8px; height:8px;
    background:orangered; border:solid 1px darkgray;
    z-index:1000001; /* above .SNS.Cover */
  }

/**** Selection Lasso ****/

  .SNS.Lasso {
    background:rgba(255,69,0, 0.1); /* border:dashed 2px orangered; */
  }

/**** Dragging Guides ****/

  .SNS.horizontalGuide.Edge {
    left:0px; right:0px; height:1px;
    border-top:dashed 1px orangered;
  }
  .SNS.verticalGuide.Edge {
    top:0px; bottom:0px; width:1px;
    border-left:dashed 1px orangered;
  }

  .SNS.horizontalGuide.Center {
    left:0px; right:0px; height:1px;
    border-top:dotted 1px orangered;
  }
  .SNS.verticalGuide.Center {
    top:0px; bottom:0px; width:1px;
    border-left:dotted 1px orangered;
  }

/**** Placeholder ****/

  .SNS.Placeholder {
    display:block; position:relative;
    width:100%; height:100%;
  }

  .SNS.Placeholder > * {
    display:block; position:absolute;
    left:50%; top:50%;
    transform:translate(-55%,-50%);
    white-space:nowrap;
  }

`;
document.head.appendChild(xi);
class Md extends ze {
  constructor() {
    super(...arguments);
    ie(this, "_Board");
    ie(this, "_StickerList", []);
    ie(this, "_pointedSticker");
    ie(this, "_selectedStickers", []);
    // for dragging & shaping
    ie(this, "_SelectionLimit", 1 / 0);
    ie(this, "_LassoStart");
    ie(this, "_LassoEnd");
    ie(this, "_SelectionBeforeLasso", []);
    ie(this, "_ShapeMode");
    ie(this, "_shapedStickers");
    ie(this, "_initialGeometries");
    ie(this, "_SnapToGrid", !1);
    ie(this, "_GridWidth", 1);
    ie(this, "_GridHeight", 1);
    ie(this, "_StickerRecognizerSlot", {});
    ie(this, "_ShapeHandleRecognizerSlot", {});
    ie(this, "_LassoRecognizerSlot", {});
    ie(this, "state", { Value: 0 });
  }
  /**** _mountBoard ****/
  _mountBoard(t) {
    t != null && this.base != null && (t._View = this.base, t._onMount != null && t._onMount()), this._Board = t;
  }
  /**** _unmountBoard ****/
  _unmountBoard() {
    const t = this._Board;
    t != null && (t._View = void 0, t._onUnmount != null && t._onUnmount());
  }
  /**** componentDidMount/WillUnmount ****/
  componentDidMount() {
    this._mountBoard(this._Board);
  }
  componentWillUnmount() {
    this._unmountBoard();
  }
  /**** rerender ****/
  rerender() {
    this.setState({ Value: this.state.Value + 1 });
  }
  /**** render ****/
  render(t) {
    const i = this;
    let {
      Classes: o,
      Board: r,
      StickerList: a,
      Placeholder: u,
      Mode: d,
      SelectionLimit: s,
      selectedStickers: c,
      onSelectionChange: l,
      onStickerSelected: p,
      onStickerDeselected: h,
      SelectionFrameStyle: g,
      SelectionHandleStyle: f,
      LassoMode: m,
      onGeometryChange: _,
      SnapToGrid: w,
      GridWidth: k,
      GridHeight: b
    } = t;
    this._Board !== r && (this._unmountBoard(), this._mountBoard(r));
    function I() {
      i._pointedSticker = void 0, i._shapedStickers = void 0, i._initialGeometries = void 0;
    }
    function C() {
      i._shapedStickers != null && je(i._shapedStickers, i._initialGeometries), I();
    }
    xn("board CSS class names", o), Nl("board", r), ki("sticker list", a, tt), xn("placeholder text", u), Vi("board mode", d, ["edit", "run"]), Fn("selection limit", s), ki("list of selected stickers", c, tt), Wt("selection change callback", l), Wt("selection callback", p), Wt("deselection callback", h), xn("selection frame CSS style", g), La("selection handle CSS style", f), Vi("lasso selection mode", m, ["touch", "contain"]), Wt("geometry change callback", _), Na('"SnapToGrid" mode', w), wi("grid width", k), wi("grid height", b), o == null && (o = ""), u == null && (u = "(empty)"), d == null && (d = "run"), s == null && (s = 1 / 0), c == null && (c = []), f == null && (f = "background:orangered; border:solid 1px darkgray"), m == null && (m = "contain"), w == null && (w = !1), k == null && (k = 10), b == null && (b = 10);
    const D = /* @__PURE__ */ new Set();
    c = c.filter((x) => tt(x) && !D.has(x) ? (D.add(x), !0) : (C(), !1)), c.length > s && L(c.slice(0, s)), i._StickerList = a, i._selectedStickers = c, i._SelectionLimit = s, i._SnapToGrid = w, i._GridWidth = k, i._GridHeight = b;
    function L(x, W = []) {
      const v = x.slice();
      W.forEach((T) => {
        v.indexOf(T) < 0 && v.push(T);
      }), c.length > i._SelectionLimit && (v.length = i._SelectionLimit);
      const V = [], N = [];
      v.forEach((T) => {
        i._selectedStickers.indexOf(T) < 0 && V.push(T);
      }), i._selectedStickers.forEach((T) => {
        v.indexOf(T) < 0 && N.push(T);
      }), c = i._selectedStickers = v, (V.length > 0 || N.length > 0) && (C(), l != null && l(c)), N.length > 0 && h != null && N.forEach((T) => {
        h(T);
      }), V.length > 0 && p != null && V.forEach((T) => {
        p(T);
      });
    }
    function $(x) {
      return c.indexOf(x) >= 0;
    }
    function F() {
      const { x, y: W } = i._LassoStart, { x: v, y: V } = i._LassoEnd || i._LassoStart;
      let N = x <= v ? x : v, T = x <= v ? v - x : x - v, R = W <= V ? W : V, z = W <= V ? V - W : W - V;
      return { x: N, y: R, Width: T, Height: z };
    }
    function H() {
      const { x, y: W, Width: v, Height: V } = F();
      return `left:${x}px; top:${W}px; width:${v}px; height:${V}px`;
    }
    function J() {
      let { x, y: W, Width: v, Height: V } = F(), N = x + v, T = W + V;
      return m === "touch" ? i._StickerList.filter((R) => {
        if (!R.isVisible || R.isLocked)
          return !1;
        const { x: z, y: j, Width: ee, Height: Ee } = R.Geometry;
        return x <= z + ee && z <= N && W <= j + Ee && j <= T;
      }) : i._StickerList.filter((R) => {
        if (!R.isVisible || R.isLocked)
          return !1;
        const { x: z, y: j, Width: ee, Height: Ee } = R.Geometry;
        return x <= z && z <= N + ee && W <= j && j <= T + Ee;
      });
    }
    function Y(x, W) {
      i._LassoEnd = { x, y: W }, L(i._SelectionBeforeLasso, J());
    }
    function We() {
      i._LassoStart = i._LassoEnd = void 0, i._SelectionBeforeLasso = [];
    }
    function wt() {
      i._LassoStart = i._LassoEnd = void 0, L(i._SelectionBeforeLasso), i._SelectionBeforeLasso = [];
    }
    function lt() {
      L([]);
    }
    const pe = hs(i._LassoRecognizerSlot, {
      onlyFrom: ".SNS.BoardView",
      Threshold: 4,
      onDragStarted: (x, W, v, V) => {
        i._SelectionBeforeLasso = c.slice(), { left: x, top: W } = Ed("local", { left: x, top: W }, i.base), i._LassoStart = { x, y: W }, Y(x, W), i.rerender();
      },
      onDragContinued: (x, W, v, V) => {
        Y(i._LassoStart.x + v, i._LassoStart.y + V), i.rerender();
      },
      onDragFinished: (x, W, v, V) => {
        Y(i._LassoStart.x + v, i._LassoStart.y + V), We(), i.rerender();
      },
      onDragCancelled: (x, W, v, V) => {
        wt(), i.rerender();
      },
      onClicked: lt
    });
    function je(x, W) {
      _ != null && (_(x, W), i.rerender());
    }
    function fe(x, W, v, V, N) {
      if (_ == null)
        return;
      let T = 0, R = 0, z = 0, j = 0;
      switch (W) {
        case "nw":
          T = v, z = -v, R = V, j = -V;
          break;
        case "n":
          R = V, j = -V;
          break;
        case "ne":
          z = v, R = V, j = -V;
          break;
        case "e":
          z = v;
          break;
        case "se":
          z = v, j = V;
          break;
        case "s":
          j = V;
          break;
        case "sw":
          T = v, z = -v, j = V;
          break;
        case "w":
          T = v, z = -v;
          break;
        case "c":
          T = v, R = V;
      }
      N == null && (N = i._initialGeometries);
      const ee = N.map(
        (Ee) => {
          let bi = Math.max(0, Ee.Width + z), $i = Math.max(0, Ee.Height + j), xe = Ee.x + T, Le = xe + bi, be = Ee.y + R, Te = be + $i;
          if (i._SnapToGrid) {
            let Vt = i._GridWidth * Math.round(xe / i._GridWidth), Sn = i._GridWidth * Math.round(Le / i._GridWidth), It = i._GridHeight * Math.round(be / i._GridHeight), yn = i._GridHeight * Math.round(Te / i._GridHeight);
            switch (W) {
              case "nw":
                xe = Math.min(Vt, Le), be = Math.min(It, Te);
                break;
              case "n":
                be = Math.min(It, Te);
                break;
              case "ne":
                Le = Math.max(xe, Sn), be = Math.min(It, Te);
                break;
              case "e":
                Le = Math.max(xe, Sn);
                break;
              case "se":
                Le = Math.max(xe, Sn), Te = Math.max(be, yn);
                break;
              case "s":
                Te = Math.max(be, yn);
                break;
              case "sw":
                xe = Math.min(Vt, Le), Te = Math.max(be, yn);
                break;
              case "w":
                xe = Math.min(Vt, Le);
                break;
              case "c":
                xe = Vt, Le = xe + bi, be = It, Te = be + $i;
            }
          }
          return { x: xe, y: be, Width: Le - xe, Height: Te - be };
        }
      );
      je(x, ee);
    }
    const kt = (x, W, v) => {
      if (s === 0)
        return;
      const V = i._pointedSticker;
      let N = !1, T, R;
      v.shiftKey || v.metaKey ? (N = !0, $(V) ? (R = [V], c = c.filter(
        (z) => z !== V
      )) : (c.length === s && (R = [c.shift()]), T = [V], c.push(V))) : (R = c.filter(
        (z) => z !== V
      ), N = !$(V), T = N ? [V] : [], c = [V]), N && l != null && l(c), R != null && h != null && R.forEach((z) => {
        h(z);
      }), T != null && p != null && T.forEach((z) => {
        p(z);
      }), N && i.rerender();
    }, X = hs(i._StickerRecognizerSlot, {
      onlyFrom: ".SNS.Cover",
      Threshold: 4,
      onDragStarted: (x, W, v, V, N) => {
        $(i._pointedSticker) || (N.shiftKey || N.metaKey ? L([i._pointedSticker], i._selectedStickers) : L([i._pointedSticker])), i._shapedStickers = i._selectedStickers, i._initialGeometries = i._selectedStickers.map(
          (T) => T.Geometry
        ), fe(i._shapedStickers, "c", v, V);
      },
      onDragContinued: (x, W, v, V) => {
        i._shapedStickers != null && fe(i._shapedStickers, "c", v, V);
      },
      onDragFinished: (x, W, v, V) => {
        i._shapedStickers != null && (fe(i._shapedStickers, "c", v, V), I());
      },
      onDragCancelled: (x, W, v, V) => {
        C();
      },
      onClicked: kt
    }), G = (x, W) => {
      i._ShapeMode = "c", i._pointedSticker = W, X(x);
    }, le = on(i._ShapeHandleRecognizerSlot, {
      onlyFrom: ".SNS.ShapeHandle",
      Threshold: 0,
      onDragStarted: (x, W, v, V) => {
        i._shapedStickers = i._selectedStickers, i._initialGeometries = i._selectedStickers.map(
          (N) => N.Geometry
        ), fe(i._shapedStickers, i._ShapeMode, v, V);
      },
      onDragContinued: (x, W, v, V) => {
        i._shapedStickers != null && fe(i._shapedStickers, i._ShapeMode, v, V);
      },
      onDragFinished: (x, W, v, V) => {
        i._shapedStickers != null && (fe(i._shapedStickers, i._ShapeMode, v, V), I());
      },
      onDragCancelled: (x, W, v, V) => {
        C();
      }
    }), ae = (x, W) => {
      i._ShapeMode = W, le(x);
    };
    function Ze(x) {
      return function(W) {
        W.button === 0 && L([x]);
      };
    }
    const Ye = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap();
    function Pe(x) {
      let W = Ye.get(x);
      return W == null && Ye.set(x, W = on(x, {
        onlyFrom: ".builtinDraggable",
        neverFrom: ".notBuiltinDraggable",
        Threshold: 4,
        onDragStarted: (v, V, N, T, R) => {
          me.set(x, x.Geometry), fe([x], "c", N, T, [me.get(x)]);
        },
        onDragContinued: (v, V, N, T) => {
          me.has(x) && fe([x], "c", N, T, [me.get(x)]);
        },
        onDragFinished: (v, V, N, T) => {
          me.has(x) && (fe([x], "c", N, T, [me.get(x)]), me.delete(x));
        },
        onDragCancelled: (v, V, N, T) => {
          me.has(x) && je([x], [me.get(x)]), me.delete(x);
        }
      })), W;
    }
    function ue() {
      if (i._shapedStickers == null)
        return "";
      const x = {}, W = {};
      i._StickerList.filter(
        (N) => !$(N)
      ).forEach((N) => {
        const { y: T, Height: R } = N.Geometry, z = Math.round(T), j = Math.round(T + R / 2), ee = Math.round(T + R);
        x[z] = x[ee] = !0, W[j] = !0;
      });
      const v = {};
      i._shapedStickers.forEach((N) => {
        const { y: T, Height: R } = N.Geometry, z = Math.round(T), j = Math.round(T + R / 2), ee = Math.round(T + R);
        x[z] && (v[z] = "Edge"), x[j] && v[j] !== "Edge" && (v[j] = "Center"), x[ee] && (v[ee] = "Edge"), W[z] && v[z] !== "Edge" && (v[z] = "Center"), W[j] && v[j] !== "Edge" && (v[j] = "Center"), W[ee] && v[ee] !== "Edge" && (v[ee] = "Center");
      });
      const V = [];
      for (let N in v)
        v[N] != null && V.push(N);
      return de`${V.map((N) => de`
          <div class="SNS horizontalGuide ${v[N]}" style="top:${N}px"/>
        `)}`;
    }
    function qe() {
      if (i._shapedStickers == null)
        return "";
      const x = {}, W = {};
      i._StickerList.filter(
        (N) => !$(N)
      ).forEach((N) => {
        const { x: T, Width: R } = N.Geometry, z = Math.round(T), j = Math.round(T + R / 2), ee = Math.round(T + R);
        x[z] = x[ee] = !0, W[j] = !0;
      });
      const v = {};
      i._shapedStickers.forEach((N) => {
        const { x: T, Width: R } = N.Geometry, z = Math.round(T), j = Math.round(T + R / 2), ee = Math.round(T + R);
        x[z] && (v[z] = "Edge"), x[j] && v[j] !== "Edge" && (v[j] = "Center"), x[ee] && (v[ee] = "Edge"), W[z] && v[z] !== "Edge" && (v[z] = "Center"), W[j] && v[j] !== "Edge" && (v[j] = "Center"), W[ee] && v[ee] !== "Edge" && (v[ee] = "Center");
      });
      const V = [];
      for (let N in v)
        v[N] != null && V.push(N);
      return de`${V.map((N) => de`
          <div class="SNS verticalGuide ${v[N]}" style="left:${N}px"/>
        `)}`;
    }
    const ne = r == null ? void 0 : pn(r);
    return de`<div class="SNS BoardView ${o}" style=${ne}
        onPointerDown=${pe} onPointerMove=${pe}
        onPointerUp=${pe} onPointerCancel=${pe}
      >
        ${r == null ? de`<div class="SNS Placeholder"><div>(no Board to show)</div></div>` : a == null ? de`<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>` : a.map((x) => {
      if (!x.isVisible)
        return "";
      const W = x.Geometry, v = $(x);
      return de`<${Ud} Sticker=${x} key=${x.Id}
                  selected=${v && d === "run"}
                  SelectionFrameStyle=${g}
                  Geometry=${W}
                  builtinDragging=${Pe(x)}
                  builtinSelection=${Ze(x)}
                />`;
    })}

        ${a != null && d === "edit" ? a.map((x) => {
      if (!x.isVisible)
        return "";
      if (x.isLocked)
        return de`
                  <${gs} Sticker=${x} key=${x.Id + "c"}
                    onPointerDown=${pe} onPointerMove=${pe}
                    onPointerUp=${pe} onPointerCancel=${pe}
                  />
                `;
      {
        const W = $(x);
        return de`
                  <${gs} Sticker=${x} key=${x.Id + "c"}
                    selected=${W}
                    onPointerEvent=${(v) => G(v, x)}
                  />
                `;
      }
    }) : ""}

        ${c.length > 0 ? c.filter(
      (x) => x.isVisible && !x.isLocked
    ).map((x) => {
      const W = x.Id, v = x.Geometry;
      return de`
                <${Me} key=${W + "nw"} Mode="nw" Geometry=${v}
                  onPointerEvent=${(V) => ae(V, "nw")}/>
                <${Me} key=${W + "n"}  Mode="n"  Geometry=${v}
                  onPointerEvent=${(V) => ae(V, "n")}/>
                <${Me} key=${W + "ne"} Mode="ne" Geometry=${v}
                  onPointerEvent=${(V) => ae(V, "ne")}/>
                <${Me} key=${W + "e"}  Mode="e"  Geometry=${v}
                  onPointerEvent=${(V) => ae(V, "e")}/>
                <${Me} key=${W + "se"} Mode="se" Geometry=${v}
                  onPointerEvent=${(V) => ae(V, "se")}/>
                <${Me} key=${W + "s"}  Mode="s"  Geometry=${v}
                  onPointerEvent=${(V) => ae(V, "s")}/>
                <${Me} key=${W + "sw"} Mode="sw" Geometry=${v}
                  onPointerEvent=${(V) => ae(V, "sw")}/>
                <${Me} key=${W + "w"}  Mode="w"  Geometry=${v}
                  onPointerEvent=${(V) => ae(V, "w")}/>
              `;
    }) : ""}
        ${this._LassoStart == null ? "" : de`<div class="SNS Lasso" style=${H()}></>`}
        ${ue()}
        ${qe()}
      </div>`;
  }
}
class Ud extends ze {
  constructor() {
    super(...arguments);
    ie(this, "_Sticker");
  }
  /**** componentDidMount ****/
  componentDidMount() {
    const t = this._Sticker;
    t._View = this.base, t._onMount != null && t._onMount();
  }
  /**** componentWillUnmount ****/
  componentWillUnmount() {
    const t = this._Sticker;
    t._View = void 0, t._onUnmount != null && t._onUnmount();
  }
  /**** render ****/
  render(t) {
    let {
      Sticker: i,
      selected: o,
      SelectionFrameStyle: r,
      Geometry: a,
      builtinSelection: u,
      builtinDragging: d
    } = t;
    this._Sticker = i;
    let { x: s, y: c, Width: l, Height: p } = a;
    vi("sticker x position", s), vi("sticker y position", c), Fn("sticker width", l), Fn("sticker height", p);
    const h = s != null && l != null && c != null && p != null ? `left:${s}px; top:${c}px; width:${l}px; height:${p}px; right:auto; bottom:auto;` : "";
    return de`<div class="SNS Sticker ${o ? "selected" : ""}" style="
        ${h};
        ${o && r != null ? `outline:${r};` : ""}
        ${pn(i) || ""}
      ">
        ${i.Rendering({ builtinSelection: u, builtinDragging: d })}
      </div>`;
  }
}
class gs extends ze {
  render(e) {
    let { Sticker: t, onPointerEvent: i, ...o } = e, { x: r, y: a, Width: u, Height: d } = t.Geometry;
    const s = r != null && u != null && a != null && d != null ? `left:${r}px; top:${a}px; width:${u}px; height:${d}px; right:auto; bottom:auto;` : "";
    return de`<div class="SNS Cover" style="${s}" ...${o}
        onPointerDown=${i} onPointerMove=${i}
        onPointerUp=${i} onPointerCancel=${i}
      />`;
  }
}
class Me extends ze {
  render(e) {
    let { Mode: t, Geometry: i, onPointerEvent: o, ...r } = e, { x: a, y: u, Width: d, Height: s } = i;
    const c = a - 8, l = Math.round(a + d / 2) - 4, p = a + d, h = u - 8, g = Math.round(u + s / 2) - 4, f = u + s;
    let m, _;
    switch (t) {
      case "nw":
        m = `left:${c}px; top:${h}px;`, _ = "nwse";
        break;
      case "n":
        m = `left:${l}px; top:${h}px;`, _ = "ns";
        break;
      case "ne":
        m = `left:${p}px; top:${h}px;`, _ = "nesw";
        break;
      case "e":
        m = `left:${p}px; top:${g}px;`, _ = "ew";
        break;
      case "se":
        m = `left:${p}px; top:${f}px;`, _ = "nwse";
        break;
      case "s":
        m = `left:${l}px; top:${f}px;`, _ = "ns";
        break;
      case "sw":
        m = `left:${c}px; top:${f}px;`, _ = "nesw";
        break;
      case "w":
        m = `left:${c}px; top:${g}px;`, _ = "ew";
        break;
    }
    return _ = "cursor:" + _ + "-resize", de`<div class="SNS ShapeHandle" style="${m} ${_}" ...${r}
        onPointerDown=${o} onPointerMove=${o}
        onPointerUp=${o} onPointerCancel=${o}
      />`;
  }
}
window.SNS_BoardView = Md;
document.dispatchEvent(
  // @ts-ignore TS2339 allow global variable "SNS_BoardView"
  new CustomEvent("SNS_BoardView", { detail: window.SNS_BoardView })
);
export {
  Md as SNS_BoardView
};
//# sourceMappingURL=SNS_BoardView.js.map
