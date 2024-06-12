var De = Object.defineProperty;
var Pe = (E, $, d) => $ in E ? De(E, $, { enumerable: !0, configurable: !0, writable: !0, value: d }) : E[$] = d;
var S = (E, $, d) => (Pe(E, typeof $ != "symbol" ? $ + "" : $, d), d);
import { allowTextline as te, allowListSatisfying as ce, allowOneOf as he, allowOrdinal as ne, allowFunction as A, allowText as He, allowBoolean as Be, allowCardinal as ue, allowInteger as Se } from "javascript-interface-library";
import { allowBoard as We, ValueIsSticker as oe, CSSStyleOfVisual as _e } from "shareable-note-stickers";
import Ve from "svelte-coordinate-conversion";
import { h as ze, Component as j } from "preact";
import Fe from "htm";
import { DragClickRecognizerFor as pe, DragRecognizerFor as fe } from "protoux";
var _ = Fe.bind(ze);
const { fromDocumentTo: Te } = Ve, ie = document.createElement("style");
ie.setAttribute("id", "SNS Stylesheet");
ie.innerHTML = `/*******************************************************************************
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
document.head.appendChild(ie);
class Re extends j {
  constructor() {
    super(...arguments);
    S(this, "_Board");
    S(this, "_StickerList", []);
    S(this, "_pointedSticker");
    S(this, "_selectedStickers", []);
    // for dragging & shaping
    S(this, "_SelectionLimit", 1 / 0);
    S(this, "_LassoStart");
    S(this, "_LassoEnd");
    S(this, "_SelectionBeforeLasso", []);
    S(this, "_ShapeMode");
    S(this, "_shapedStickers");
    S(this, "_initialGeometries");
    S(this, "_SnapToGrid", !1);
    S(this, "_GridWidth", 1);
    S(this, "_GridHeight", 1);
    S(this, "_StickerRecognizerSlot", {});
    S(this, "_ShapeHandleRecognizerSlot", {});
    S(this, "_LassoRecognizerSlot", {});
    S(this, "state", { Value: 0 });
  }
  /**** _mountBoard ****/
  _mountBoard(d) {
    d != null && this.base != null && (d._View = this.base, d._onMount != null && d._onMount()), this._Board = d;
  }
  /**** _unmountBoard ****/
  _unmountBoard() {
    const d = this._Board;
    d != null && (d._View = void 0, d._onUnmount != null && d._onUnmount());
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
  render(d) {
    const e = this;
    let {
      Classes: m,
      Board: x,
      StickerList: g,
      Placeholder: w,
      Mode: k,
      SelectionLimit: p,
      selectedStickers: c,
      onSelectionChange: v,
      onStickerSelected: b,
      onStickerDeselected: M,
      SelectionFrameStyle: R,
      SelectionHandleStyle: z,
      LassoMode: y,
      onGeometryChange: f,
      SnapToGrid: I,
      GridWidth: O,
      GridHeight: U
    } = d;
    this._Board !== x && (this._unmountBoard(), this._mountBoard(x));
    function Z() {
      e._pointedSticker = void 0, e._shapedStickers = void 0, e._initialGeometries = void 0;
    }
    function K() {
      e._shapedStickers != null && J(e._shapedStickers, e._initialGeometries), Z();
    }
    te("board CSS class names", m), We("board", x), ce("sticker list", g, oe), te("placeholder text", w), he("board mode", k, ["edit", "run"]), ne("selection limit", p), ce("list of selected stickers", c, oe), A("selection change callback", v), A("selection callback", b), A("deselection callback", M), te("selection frame CSS style", R), He("selection handle CSS style", z), he("lasso selection mode", y, ["touch", "contain"]), A("geometry change callback", f), Be('"SnapToGrid" mode', I), ue("grid width", O), ue("grid height", U), m == null && (m = ""), w == null && (w = "(empty)"), k == null && (k = "run"), p == null && (p = 1 / 0), c == null && (c = []), z == null && (z = "background:orangered; border:solid 1px darkgray"), y == null && (y = "contain"), I == null && (I = !1), O == null && (O = 10), U == null && (U = 10);
    const re = /* @__PURE__ */ new Set();
    c = c.filter((t) => oe(t) && !re.has(t) ? (re.add(t), !0) : (K(), !1)), c.length > p && F(c.slice(0, p)), e._StickerList = g, e._selectedStickers = c, e._SelectionLimit = p, e._SnapToGrid = I, e._GridWidth = O, e._GridHeight = U;
    function F(t, i = []) {
      const o = t.slice();
      i.forEach((s) => {
        o.indexOf(s) < 0 && o.push(s);
      }), c.length > e._SelectionLimit && (o.length = e._SelectionLimit);
      const n = [], r = [];
      o.forEach((s) => {
        e._selectedStickers.indexOf(s) < 0 && n.push(s);
      }), e._selectedStickers.forEach((s) => {
        o.indexOf(s) < 0 && r.push(s);
      }), c = e._selectedStickers = o, (n.length > 0 || r.length > 0) && (K(), v != null && v(c)), r.length > 0 && M != null && r.forEach((s) => {
        M(s);
      }), n.length > 0 && b != null && n.forEach((s) => {
        b(s);
      });
    }
    function T(t) {
      return c.indexOf(t) >= 0;
    }
    function se() {
      const { x: t, y: i } = e._LassoStart, { x: o, y: n } = e._LassoEnd || e._LassoStart;
      let r = t <= o ? t : o, s = t <= o ? o - t : t - o, l = i <= n ? i : n, a = i <= n ? n - i : i - n;
      return { x: r, y: l, Width: s, Height: a };
    }
    function me() {
      const { x: t, y: i, Width: o, Height: n } = se();
      return `left:${t}px; top:${i}px; width:${o}px; height:${n}px`;
    }
    function xe() {
      let { x: t, y: i, Width: o, Height: n } = se(), r = t + o, s = i + n;
      return y === "touch" ? e._StickerList.filter((l) => {
        if (!l.isVisible || l.isLocked)
          return !1;
        const { x: a, y: h, Width: u, Height: W } = l.Geometry;
        return t <= a + u && a <= r && i <= h + W && h <= s;
      }) : e._StickerList.filter((l) => {
        if (!l.isVisible || l.isLocked)
          return !1;
        const { x: a, y: h, Width: u, Height: W } = l.Geometry;
        return t <= a && a <= r + u && i <= h && h <= s + W;
      });
    }
    function q(t, i) {
      e._LassoEnd = { x: t, y: i }, F(e._SelectionBeforeLasso, xe());
    }
    function ye() {
      e._LassoStart = e._LassoEnd = void 0, e._SelectionBeforeLasso = [];
    }
    function $e() {
      e._LassoStart = e._LassoEnd = void 0, F(e._SelectionBeforeLasso), e._SelectionBeforeLasso = [];
    }
    function ke() {
      F([]);
    }
    const H = pe(e._LassoRecognizerSlot, {
      onlyFrom: ".SNS.BoardView",
      Threshold: 4,
      onDragStarted: (t, i, o, n) => {
        e._SelectionBeforeLasso = c.slice(), { left: t, top: i } = Te("local", { left: t, top: i }, e.base), e._LassoStart = { x: t, y: i }, q(t, i), e.rerender();
      },
      onDragContinued: (t, i, o, n) => {
        q(e._LassoStart.x + o, e._LassoStart.y + n), e.rerender();
      },
      onDragFinished: (t, i, o, n) => {
        q(e._LassoStart.x + o, e._LassoStart.y + n), ye(), e.rerender();
      },
      onDragCancelled: (t, i, o, n) => {
        $e(), e.rerender();
      },
      onClicked: ke
    });
    function J(t, i) {
      f != null && (f(t, i), e.rerender());
    }
    function N(t, i, o, n, r) {
      if (f == null)
        return;
      let s = 0, l = 0, a = 0, h = 0;
      switch (i) {
        case "nw":
          s = o, a = -o, l = n, h = -n;
          break;
        case "n":
          l = n, h = -n;
          break;
        case "ne":
          a = o, l = n, h = -n;
          break;
        case "e":
          a = o;
          break;
        case "se":
          a = o, h = n;
          break;
        case "s":
          h = n;
          break;
        case "sw":
          s = o, a = -o, h = n;
          break;
        case "w":
          s = o, a = -o;
          break;
        case "c":
          s = o, l = n;
      }
      r == null && (r = e._initialGeometries);
      const u = r.map(
        (W) => {
          let le = Math.max(0, W.Width + a), de = Math.max(0, W.Height + h), C = W.x + s, D = C + le, L = W.y + l, P = L + de;
          if (e._SnapToGrid) {
            let X = e._GridWidth * Math.round(C / e._GridWidth), Q = e._GridWidth * Math.round(D / e._GridWidth), Y = e._GridHeight * Math.round(L / e._GridHeight), ee = e._GridHeight * Math.round(P / e._GridHeight);
            switch (i) {
              case "nw":
                C = Math.min(X, D), L = Math.min(Y, P);
                break;
              case "n":
                L = Math.min(Y, P);
                break;
              case "ne":
                D = Math.max(C, Q), L = Math.min(Y, P);
                break;
              case "e":
                D = Math.max(C, Q);
                break;
              case "se":
                D = Math.max(C, Q), P = Math.max(L, ee);
                break;
              case "s":
                P = Math.max(L, ee);
                break;
              case "sw":
                C = Math.min(X, D), P = Math.max(L, ee);
                break;
              case "w":
                C = Math.min(X, D);
                break;
              case "c":
                C = X, D = C + le, L = Y, P = L + de;
            }
          }
          return { x: C, y: L, Width: D - C, Height: P - L };
        }
      );
      J(t, u);
    }
    const be = (t, i, o) => {
      if (p === 0)
        return;
      const n = e._pointedSticker;
      let r = !1, s, l;
      o.shiftKey || o.metaKey ? (r = !0, T(n) ? (l = [n], c = c.filter(
        (a) => a !== n
      )) : (c.length === p && (l = [c.shift()]), s = [n], c.push(n))) : (l = c.filter(
        (a) => a !== n
      ), r = !T(n), s = r ? [n] : [], c = [n]), r && v != null && v(c), l != null && M != null && l.forEach((a) => {
        M(a);
      }), s != null && b != null && s.forEach((a) => {
        b(a);
      }), r && e.rerender();
    }, we = pe(e._StickerRecognizerSlot, {
      onlyFrom: ".SNS.Cover",
      Threshold: 4,
      onDragStarted: (t, i, o, n, r) => {
        T(e._pointedSticker) || (r.shiftKey || r.metaKey ? F([e._pointedSticker], e._selectedStickers) : F([e._pointedSticker])), e._shapedStickers = e._selectedStickers, e._initialGeometries = e._selectedStickers.map(
          (s) => s.Geometry
        ), N(e._shapedStickers, "c", o, n);
      },
      onDragContinued: (t, i, o, n) => {
        e._shapedStickers != null && N(e._shapedStickers, "c", o, n);
      },
      onDragFinished: (t, i, o, n) => {
        e._shapedStickers != null && (N(e._shapedStickers, "c", o, n), Z());
      },
      onDragCancelled: (t, i, o, n) => {
        K();
      },
      onClicked: be
    }), ve = (t, i) => {
      e._ShapeMode = "c", e._pointedSticker = i, we(t);
    }, Ce = fe(e._ShapeHandleRecognizerSlot, {
      onlyFrom: ".SNS.ShapeHandle",
      Threshold: 0,
      onDragStarted: (t, i, o, n) => {
        e._shapedStickers = e._selectedStickers, e._initialGeometries = e._selectedStickers.map(
          (r) => r.Geometry
        ), N(e._shapedStickers, e._ShapeMode, o, n);
      },
      onDragContinued: (t, i, o, n) => {
        e._shapedStickers != null && N(e._shapedStickers, e._ShapeMode, o, n);
      },
      onDragFinished: (t, i, o, n) => {
        e._shapedStickers != null && (N(e._shapedStickers, e._ShapeMode, o, n), Z());
      },
      onDragCancelled: (t, i, o, n) => {
        K();
      }
    }), B = (t, i) => {
      e._ShapeMode = i, Ce(t);
    };
    function Le(t) {
      return function(i) {
        i.button === 0 && F([t]);
      };
    }
    const ae = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap();
    function Me(t) {
      let i = ae.get(t);
      return i == null && ae.set(t, i = fe(t, {
        onlyFrom: ".builtinDraggable",
        neverFrom: ".notBuiltinDraggable",
        Threshold: 4,
        onDragStarted: (o, n, r, s, l) => {
          G.set(t, t.Geometry), N([t], "c", r, s, [G.get(t)]);
        },
        onDragContinued: (o, n, r, s) => {
          G.has(t) && N([t], "c", r, s, [G.get(t)]);
        },
        onDragFinished: (o, n, r, s) => {
          G.has(t) && (N([t], "c", r, s, [G.get(t)]), G.delete(t));
        },
        onDragCancelled: (o, n, r, s) => {
          G.has(t) && J([t], [G.get(t)]), G.delete(t);
        }
      })), i;
    }
    function Ge() {
      if (e._shapedStickers == null)
        return "";
      const t = {}, i = {};
      e._StickerList.filter(
        (r) => !T(r)
      ).forEach((r) => {
        const { y: s, Height: l } = r.Geometry, a = Math.round(s), h = Math.round(s + l / 2), u = Math.round(s + l);
        t[a] = t[u] = !0, i[h] = !0;
      });
      const o = {};
      e._shapedStickers.forEach((r) => {
        const { y: s, Height: l } = r.Geometry, a = Math.round(s), h = Math.round(s + l / 2), u = Math.round(s + l);
        t[a] && (o[a] = "Edge"), t[h] && o[h] !== "Edge" && (o[h] = "Center"), t[u] && (o[u] = "Edge"), i[a] && o[a] !== "Edge" && (o[a] = "Center"), i[h] && o[h] !== "Edge" && (o[h] = "Center"), i[u] && o[u] !== "Edge" && (o[u] = "Center");
      });
      const n = [];
      for (let r in o)
        o[r] != null && n.push(r);
      return _`${n.map((r) => _`
          <div class="SNS horizontalGuide ${o[r]}" style="top:${r}px"/>
        `)}`;
    }
    function Ee() {
      if (e._shapedStickers == null)
        return "";
      const t = {}, i = {};
      e._StickerList.filter(
        (r) => !T(r)
      ).forEach((r) => {
        const { x: s, Width: l } = r.Geometry, a = Math.round(s), h = Math.round(s + l / 2), u = Math.round(s + l);
        t[a] = t[u] = !0, i[h] = !0;
      });
      const o = {};
      e._shapedStickers.forEach((r) => {
        const { x: s, Width: l } = r.Geometry, a = Math.round(s), h = Math.round(s + l / 2), u = Math.round(s + l);
        t[a] && (o[a] = "Edge"), t[h] && o[h] !== "Edge" && (o[h] = "Center"), t[u] && (o[u] = "Edge"), i[a] && o[a] !== "Edge" && (o[a] = "Center"), i[h] && o[h] !== "Edge" && (o[h] = "Center"), i[u] && o[u] !== "Edge" && (o[u] = "Center");
      });
      const n = [];
      for (let r in o)
        o[r] != null && n.push(r);
      return _`${n.map((r) => _`
          <div class="SNS verticalGuide ${o[r]}" style="left:${r}px"/>
        `)}`;
    }
    const Ne = x == null ? void 0 : _e(x);
    return _`<div class="SNS BoardView ${m}" style=${Ne}
        onPointerDown=${H} onPointerMove=${H}
        onPointerUp=${H} onPointerCancel=${H}
      >
        ${x == null ? _`<div class="SNS Placeholder"><div>(no Board to show)</div></div>` : g == null ? _`<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>` : g.map((t) => {
      if (!t.isVisible)
        return "";
      const i = t.Geometry, o = T(t);
      return _`<${Ie} Sticker=${t} key=${t.Id}
                  selected=${o && k === "run"}
                  SelectionFrameStyle=${R}
                  Geometry=${i}
                  builtinDragging=${Me(t)}
                  builtinSelection=${Le(t)}
                />`;
    })}

        ${g != null && k === "edit" ? g.map((t) => {
      if (!t.isVisible)
        return "";
      if (t.isLocked)
        return _`
                  <${ge} Sticker=${t} key=${t.Id + "c"}
                    onPointerDown=${H} onPointerMove=${H}
                    onPointerUp=${H} onPointerCancel=${H}
                  />
                `;
      {
        const i = T(t);
        return _`
                  <${ge} Sticker=${t} key=${t.Id + "c"}
                    selected=${i}
                    onPointerEvent=${(o) => ve(o, t)}
                  />
                `;
      }
    }) : ""}

        ${c.length > 0 ? c.filter(
      (t) => t.isVisible && !t.isLocked
    ).map((t) => {
      const i = t.Id, o = t.Geometry;
      return _`
                <${V} key=${i + "nw"} Mode="nw" Geometry=${o}
                  onPointerEvent=${(n) => B(n, "nw")}/>
                <${V} key=${i + "n"}  Mode="n"  Geometry=${o}
                  onPointerEvent=${(n) => B(n, "n")}/>
                <${V} key=${i + "ne"} Mode="ne" Geometry=${o}
                  onPointerEvent=${(n) => B(n, "ne")}/>
                <${V} key=${i + "e"}  Mode="e"  Geometry=${o}
                  onPointerEvent=${(n) => B(n, "e")}/>
                <${V} key=${i + "se"} Mode="se" Geometry=${o}
                  onPointerEvent=${(n) => B(n, "se")}/>
                <${V} key=${i + "s"}  Mode="s"  Geometry=${o}
                  onPointerEvent=${(n) => B(n, "s")}/>
                <${V} key=${i + "sw"} Mode="sw" Geometry=${o}
                  onPointerEvent=${(n) => B(n, "sw")}/>
                <${V} key=${i + "w"}  Mode="w"  Geometry=${o}
                  onPointerEvent=${(n) => B(n, "w")}/>
              `;
    }) : ""}
        ${this._LassoStart == null ? "" : _`<div class="SNS Lasso" style=${me()}></>`}
        ${Ge()}
        ${Ee()}
      </div>`;
  }
}
class Ie extends j {
  constructor() {
    super(...arguments);
    S(this, "_Sticker");
  }
  /**** componentDidMount ****/
  componentDidMount() {
    const d = this._Sticker;
    d._View = this.base, d._onMount != null && d._onMount();
  }
  /**** componentWillUnmount ****/
  componentWillUnmount() {
    const d = this._Sticker;
    d._View = void 0, d._onUnmount != null && d._onUnmount();
  }
  /**** render ****/
  render(d) {
    let {
      Sticker: e,
      selected: m,
      SelectionFrameStyle: x,
      Geometry: g,
      builtinSelection: w,
      builtinDragging: k
    } = d;
    this._Sticker = e;
    let { x: p, y: c, Width: v, Height: b } = g;
    Se("sticker x position", p), Se("sticker y position", c), ne("sticker width", v), ne("sticker height", b);
    const M = p != null && v != null && c != null && b != null ? `left:${p}px; top:${c}px; width:${v}px; height:${b}px; right:auto; bottom:auto;` : "";
    return _`<div class="SNS Sticker ${m ? "selected" : ""}" style="
        ${M};
        ${m && x != null ? `outline:${x};` : ""}
        ${_e(e) || ""}
      ">
        ${e.Rendering({ builtinSelection: w, builtinDragging: k })}
      </div>`;
  }
}
class ge extends j {
  render($) {
    let { Sticker: d, onPointerEvent: e, ...m } = $, { x, y: g, Width: w, Height: k } = d.Geometry;
    const p = x != null && w != null && g != null && k != null ? `left:${x}px; top:${g}px; width:${w}px; height:${k}px; right:auto; bottom:auto;` : "";
    return _`<div class="SNS Cover" style="${p}" ...${m}
        onPointerDown=${e} onPointerMove=${e}
        onPointerUp=${e} onPointerCancel=${e}
      />`;
  }
}
class V extends j {
  render($) {
    let { Mode: d, Geometry: e, onPointerEvent: m, ...x } = $, { x: g, y: w, Width: k, Height: p } = e;
    const c = g - 8, v = Math.round(g + k / 2) - 4, b = g + k, M = w - 8, R = Math.round(w + p / 2) - 4, z = w + p;
    let y, f;
    switch (d) {
      case "nw":
        y = `left:${c}px; top:${M}px;`, f = "nwse";
        break;
      case "n":
        y = `left:${v}px; top:${M}px;`, f = "ns";
        break;
      case "ne":
        y = `left:${b}px; top:${M}px;`, f = "nesw";
        break;
      case "e":
        y = `left:${b}px; top:${R}px;`, f = "ew";
        break;
      case "se":
        y = `left:${b}px; top:${z}px;`, f = "nwse";
        break;
      case "s":
        y = `left:${v}px; top:${z}px;`, f = "ns";
        break;
      case "sw":
        y = `left:${c}px; top:${z}px;`, f = "nesw";
        break;
      case "w":
        y = `left:${c}px; top:${R}px;`, f = "ew";
        break;
    }
    return f = "cursor:" + f + "-resize", _`<div class="SNS ShapeHandle" style="${y} ${f}" ...${x}
        onPointerDown=${m} onPointerMove=${m}
        onPointerUp=${m} onPointerCancel=${m}
      />`;
  }
}
window.SNS_BoardView = Re;
document.dispatchEvent(
  // @ts-ignore TS2339 allow global variable "SNS_BoardView"
  new CustomEvent("SNS_BoardView", { detail: window.SNS_BoardView })
);
export {
  Re as SNS_BoardView
};
//# sourceMappingURL=SNS_BoardView.js.map
