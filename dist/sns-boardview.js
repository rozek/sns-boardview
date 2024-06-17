var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { allowTextline, allowListSatisfying, allowOneOf, allowOrdinal, allowFunction, allowText, allowBoolean, allowCardinal, allowInteger } from "javascript-interface-library";
import { allowBoard, ValueIsSticker, CSSStyleOfVisual } from "shareable-note-stickers";
import Conversion from "svelte-coordinate-conversion";
import { h, Component } from "preact";
import e from "htm";
import { DragClickRecognizerFor, DragRecognizerFor } from "protoux";
var m = e.bind(h);
const { fromDocumentTo } = Conversion;
const Stylesheet = document.createElement("style");
Stylesheet.setAttribute("id", "SNS Stylesheet");
Stylesheet.innerHTML = `/*******************************************************************************
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
document.head.appendChild(Stylesheet);
class SNS_BoardView extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "_Board");
    __publicField(this, "_StickerList", []);
    __publicField(this, "_pointedSticker");
    __publicField(this, "_selectedStickers", []);
    // for dragging & shaping
    __publicField(this, "_SelectionLimit", Infinity);
    __publicField(this, "_LassoStart");
    __publicField(this, "_LassoEnd");
    __publicField(this, "_SelectionBeforeLasso", []);
    __publicField(this, "_ShapeMode");
    __publicField(this, "_shapedStickers");
    __publicField(this, "_initialGeometries");
    __publicField(this, "_SnapToGrid", false);
    __publicField(this, "_GridWidth", 1);
    __publicField(this, "_GridHeight", 1);
    __publicField(this, "_StickerRecognizerSlot", {});
    __publicField(this, "_ShapeHandleRecognizerSlot", {});
    __publicField(this, "_LassoRecognizerSlot", {});
    __publicField(this, "state", { Value: 0 });
  }
  /**** _mountBoard ****/
  _mountBoard(Board) {
    if (Board != null && this.base != null) {
      Board["_View"] = this.base;
      if (Board["_onMount"] != null) {
        Board["_onMount"]();
      }
    }
    this._Board = Board;
  }
  /**** _unmountBoard ****/
  _unmountBoard() {
    const Board = this._Board;
    if (Board != null) {
      Board["_View"] = void 0;
      if (Board["_onUnmount"] != null) {
        Board["_onUnmount"]();
      }
    }
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
  render(PropSet) {
    const my = this;
    let {
      Classes,
      Board,
      StickerList,
      Placeholder,
      Mode,
      SelectionLimit,
      selectedStickers,
      onSelectionChange,
      onStickerSelected,
      onStickerDeselected,
      SelectionFrameStyle,
      SelectionHandleStyle,
      LassoMode,
      onGeometryChange,
      SnapToGrid,
      GridWidth,
      GridHeight
    } = PropSet;
    if (this._Board !== Board) {
      this._unmountBoard();
      this._mountBoard(Board);
    }
    function finishDraggingAndShaping() {
      my._pointedSticker = void 0;
      my._shapedStickers = void 0;
      my._initialGeometries = void 0;
    }
    function abortDraggingAndShaping() {
      if (my._shapedStickers != null) {
        changeGeometriesTo(my._shapedStickers, my._initialGeometries);
      }
      finishDraggingAndShaping();
    }
    allowTextline("board CSS class names", Classes);
    allowBoard("board", Board);
    allowListSatisfying("sticker list", StickerList, ValueIsSticker);
    allowTextline("placeholder text", Placeholder);
    allowOneOf("board mode", Mode, ["edit", "run"]);
    allowOrdinal("selection limit", SelectionLimit);
    allowListSatisfying("list of selected stickers", selectedStickers, ValueIsSticker);
    allowFunction("selection change callback", onSelectionChange);
    allowFunction("selection callback", onStickerSelected);
    allowFunction("deselection callback", onStickerDeselected);
    allowTextline("selection frame CSS style", SelectionFrameStyle);
    allowText("selection handle CSS style", SelectionHandleStyle);
    allowOneOf("lasso selection mode", LassoMode, ["touch", "contain"]);
    allowFunction("geometry change callback", onGeometryChange);
    allowBoolean('"SnapToGrid" mode', SnapToGrid);
    allowCardinal("grid width", GridWidth);
    allowCardinal("grid height", GridHeight);
    if (Classes == null) {
      Classes = "";
    }
    if (Placeholder == null) {
      Placeholder = "(empty)";
    }
    if (Mode == null) {
      Mode = "run";
    }
    if (SelectionLimit == null) {
      SelectionLimit = Infinity;
    }
    if (selectedStickers == null) {
      selectedStickers = [];
    }
    if (SelectionHandleStyle == null) {
      SelectionHandleStyle = "background:orangered; border:solid 1px darkgray";
    }
    if (LassoMode == null) {
      LassoMode = "contain";
    }
    if (SnapToGrid == null) {
      SnapToGrid = false;
    }
    if (GridWidth == null) {
      GridWidth = 10;
    }
    if (GridHeight == null) {
      GridHeight = 10;
    }
    const selectedStickerSet = /* @__PURE__ */ new Set();
    selectedStickers = selectedStickers.filter((selectedSticker) => {
      if (ValueIsSticker(selectedSticker) && !selectedStickerSet.has(selectedSticker)) {
        selectedStickerSet.add(selectedSticker);
        return true;
      } else {
        abortDraggingAndShaping();
        return false;
      }
    });
    if (selectedStickers.length > SelectionLimit) {
      selectStickers(selectedStickers.slice(0, SelectionLimit));
    }
    my._StickerList = StickerList;
    my._selectedStickers = selectedStickers;
    my._SelectionLimit = SelectionLimit;
    my._SnapToGrid = SnapToGrid;
    my._GridWidth = GridWidth;
    my._GridHeight = GridHeight;
    function selectStickers(SelectionA, SelectionB = []) {
      const newSelection = SelectionA.slice();
      SelectionB.forEach((Sticker) => {
        if (newSelection.indexOf(Sticker) < 0) {
          newSelection.push(Sticker);
        }
      });
      if (selectedStickers.length > my._SelectionLimit) {
        newSelection.length = my._SelectionLimit;
      }
      const StickersToSelect = [];
      const StickersToDeselect = [];
      newSelection.forEach((Sticker) => {
        if (my._selectedStickers.indexOf(Sticker) < 0) {
          StickersToSelect.push(Sticker);
        }
      });
      my._selectedStickers.forEach((Sticker) => {
        if (newSelection.indexOf(Sticker) < 0) {
          StickersToDeselect.push(Sticker);
        }
      });
      selectedStickers = my._selectedStickers = newSelection;
      if (StickersToSelect.length > 0 || StickersToDeselect.length > 0) {
        abortDraggingAndShaping();
        if (onSelectionChange != null) {
          onSelectionChange(selectedStickers);
        }
      }
      if (StickersToDeselect.length > 0 && onStickerDeselected != null) {
        StickersToDeselect.forEach((deselectedSticker) => {
          onStickerDeselected(deselectedSticker);
        });
      }
      if (StickersToSelect.length > 0 && onStickerSelected != null) {
        StickersToSelect.forEach((selectedSticker) => {
          onStickerSelected(selectedSticker);
        });
      }
    }
    function StickerIsSelected(Sticker) {
      return selectedStickers.indexOf(Sticker) >= 0;
    }
    function GeometryOfLasso() {
      const { x: x0, y: y0 } = my._LassoStart;
      const { x: x1, y: y1 } = my._LassoEnd || my._LassoStart;
      let LassoX = x0 <= x1 ? x0 : x1;
      let LassoWidth = x0 <= x1 ? x1 - x0 : x0 - x1;
      let LassoY = y0 <= y1 ? y0 : y1;
      let LassoHeight = y0 <= y1 ? y1 - y0 : y0 - y1;
      return { x: LassoX, y: LassoY, Width: LassoWidth, Height: LassoHeight };
    }
    function CSSGeometryOfLasso() {
      const { x, y, Width, Height } = GeometryOfLasso();
      return `left:${x}px; top:${y}px; width:${Width}px; height:${Height}px`;
    }
    function StickersCaughtByLasso() {
      let { x: LassoX0, y: LassoY0, Width: LassoWidth, Height: LassoHeight } = GeometryOfLasso();
      let LassoX1 = LassoX0 + LassoWidth;
      let LassoY1 = LassoY0 + LassoHeight;
      if (LassoMode === "touch") {
        return my._StickerList.filter((Sticker) => {
          if (!Sticker.isVisible || Sticker.isLocked) {
            return false;
          }
          const { x, y, Width, Height } = Sticker.Geometry;
          return LassoX0 <= x + Width && x <= LassoX1 && LassoY0 <= y + Height && y <= LassoY1;
        });
      } else {
        return my._StickerList.filter((Sticker) => {
          if (!Sticker.isVisible || Sticker.isLocked) {
            return false;
          }
          const { x, y, Width, Height } = Sticker.Geometry;
          return LassoX0 <= x && x + Width <= LassoX1 && LassoY0 <= y && y + Height <= LassoY1;
        });
      }
    }
    function dragLassoTo(x, y) {
      my._LassoEnd = { x, y };
      selectStickers(my._SelectionBeforeLasso, StickersCaughtByLasso());
    }
    function applyLasso() {
      my._LassoStart = my._LassoEnd = void 0;
      my._SelectionBeforeLasso = [];
    }
    function abortLasso() {
      my._LassoStart = my._LassoEnd = void 0;
      selectStickers(my._SelectionBeforeLasso);
      my._SelectionBeforeLasso = [];
    }
    function onBoardClick() {
      selectStickers([]);
    }
    const LassoRecognizer = DragClickRecognizerFor(my._LassoRecognizerSlot, {
      onlyFrom: ".SNS.BoardView",
      Threshold: 4,
      onDragStarted: (x, y, dx, dy) => {
        my._SelectionBeforeLasso = selectedStickers.slice();
        ({ left: x, top: y } = fromDocumentTo("local", { left: x, top: y }, my.base));
        my._LassoStart = { x, y };
        dragLassoTo(x, y);
        my.rerender();
      },
      onDragContinued: (x, y, dx, dy) => {
        dragLassoTo(my._LassoStart.x + dx, my._LassoStart.y + dy);
        my.rerender();
      },
      onDragFinished: (x, y, dx, dy) => {
        dragLassoTo(my._LassoStart.x + dx, my._LassoStart.y + dy);
        applyLasso();
        my.rerender();
      },
      onDragCancelled: (x, y, dx, dy) => {
        abortLasso();
        my.rerender();
      },
      onClicked: onBoardClick
    });
    function changeGeometriesTo(StickerList2, GeometryList) {
      if (onGeometryChange != null) {
        onGeometryChange(StickerList2, GeometryList);
        my.rerender();
      }
    }
    function changeGeometriesBy(StickerList2, Mode2, dx, dy, initialGeometries) {
      if (onGeometryChange == null) {
        return;
      }
      let dX = 0, dY = 0, dW = 0, dH = 0;
      switch (Mode2) {
        case "nw":
          dX = dx;
          dW = -dx;
          dY = dy;
          dH = -dy;
          break;
        case "n":
          dY = dy;
          dH = -dy;
          break;
        case "ne":
          dW = dx;
          dY = dy;
          dH = -dy;
          break;
        case "e":
          dW = dx;
          break;
        case "se":
          dW = dx;
          dH = dy;
          break;
        case "s":
          dH = dy;
          break;
        case "sw":
          dX = dx;
          dW = -dx;
          dH = dy;
          break;
        case "w":
          dX = dx;
          dW = -dx;
          break;
        case "c":
          dX = dx;
          dY = dy;
      }
      if (initialGeometries == null) {
        initialGeometries = my._initialGeometries;
      }
      const GeometryList = initialGeometries.map(
        (Geometry) => {
          let Width = Math.max(0, Geometry.Width + dW);
          let Height = Math.max(0, Geometry.Height + dH);
          let xl = Geometry.x + dX, xr = xl + Width;
          let yt = Geometry.y + dY, yb = yt + Height;
          if (my._SnapToGrid) {
            let xl_ = my._GridWidth * Math.round(xl / my._GridWidth);
            let xr_ = my._GridWidth * Math.round(xr / my._GridWidth);
            let yt_ = my._GridHeight * Math.round(yt / my._GridHeight);
            let yb_ = my._GridHeight * Math.round(yb / my._GridHeight);
            switch (Mode2) {
              case "nw":
                xl = Math.min(xl_, xr);
                yt = Math.min(yt_, yb);
                break;
              case "n":
                yt = Math.min(yt_, yb);
                break;
              case "ne":
                xr = Math.max(xl, xr_);
                yt = Math.min(yt_, yb);
                break;
              case "e":
                xr = Math.max(xl, xr_);
                break;
              case "se":
                xr = Math.max(xl, xr_);
                yb = Math.max(yt, yb_);
                break;
              case "s":
                yb = Math.max(yt, yb_);
                break;
              case "sw":
                xl = Math.min(xl_, xr);
                yb = Math.max(yt, yb_);
                break;
              case "w":
                xl = Math.min(xl_, xr);
                break;
              case "c":
                xl = xl_;
                xr = xl + Width;
                yt = yt_;
                yb = yt + Height;
            }
          }
          return { x: xl, y: yt, Width: xr - xl, Height: yb - yt };
        }
      );
      changeGeometriesTo(StickerList2, GeometryList);
    }
    const onStickerClick = (x, y, Event) => {
      if (SelectionLimit === 0) {
        return;
      }
      const Sticker = my._pointedSticker;
      let SelectionChanged = false;
      let StickersToSelect, StickersToDeselect;
      if (Event.shiftKey || Event.metaKey) {
        SelectionChanged = true;
        if (StickerIsSelected(Sticker)) {
          StickersToDeselect = [Sticker];
          selectedStickers = selectedStickers.filter(
            (selectedSticker) => selectedSticker !== Sticker
          );
        } else {
          if (selectedStickers.length === SelectionLimit) {
            StickersToDeselect = [selectedStickers.shift()];
          }
          StickersToSelect = [Sticker];
          selectedStickers.push(Sticker);
        }
      } else {
        StickersToDeselect = selectedStickers.filter(
          (selectedSticker) => selectedSticker !== Sticker
        );
        SelectionChanged = !StickerIsSelected(Sticker);
        StickersToSelect = SelectionChanged ? [Sticker] : [];
        selectedStickers = [Sticker];
      }
      if (SelectionChanged && onSelectionChange != null) {
        onSelectionChange(selectedStickers);
      }
      if (StickersToDeselect != null && onStickerDeselected != null) {
        StickersToDeselect.forEach((deselectedSticker) => {
          onStickerDeselected(deselectedSticker);
        });
      }
      if (StickersToSelect != null && onStickerSelected != null) {
        StickersToSelect.forEach((selectedSticker) => {
          onStickerSelected(selectedSticker);
        });
      }
      if (SelectionChanged) {
        my.rerender();
      }
    };
    const StickerRecognizer = DragClickRecognizerFor(my._StickerRecognizerSlot, {
      onlyFrom: ".SNS.Cover",
      Threshold: 4,
      onDragStarted: (x, y, dx, dy, Event) => {
        if (!StickerIsSelected(my._pointedSticker)) {
          if (Event.shiftKey || Event.metaKey) {
            selectStickers([my._pointedSticker], my._selectedStickers);
          } else {
            selectStickers([my._pointedSticker]);
          }
        }
        my._shapedStickers = my._selectedStickers;
        my._initialGeometries = my._selectedStickers.map(
          (Sticker) => Sticker.Geometry
        );
        changeGeometriesBy(my._shapedStickers, "c", dx, dy);
      },
      onDragContinued: (x, y, dx, dy) => {
        if (my._shapedStickers == null) {
          return;
        }
        changeGeometriesBy(my._shapedStickers, "c", dx, dy);
      },
      onDragFinished: (x, y, dx, dy) => {
        if (my._shapedStickers == null) {
          return;
        }
        changeGeometriesBy(my._shapedStickers, "c", dx, dy);
        finishDraggingAndShaping();
      },
      onDragCancelled: (x, y, dx, dy) => {
        abortDraggingAndShaping();
      },
      onClicked: onStickerClick
    });
    const handleStickerEvent = (Event, Sticker) => {
      my._ShapeMode = "c";
      my._pointedSticker = Sticker;
      StickerRecognizer(Event);
    };
    const ShapeHandleRecognizer = DragRecognizerFor(my._ShapeHandleRecognizerSlot, {
      onlyFrom: ".SNS.ShapeHandle",
      Threshold: 0,
      onDragStarted: (x, y, dx, dy) => {
        my._shapedStickers = my._selectedStickers;
        my._initialGeometries = my._selectedStickers.map(
          (Sticker) => Sticker.Geometry
        );
        changeGeometriesBy(my._shapedStickers, my._ShapeMode, dx, dy);
      },
      onDragContinued: (x, y, dx, dy) => {
        if (my._shapedStickers == null) {
          return;
        }
        changeGeometriesBy(my._shapedStickers, my._ShapeMode, dx, dy);
      },
      onDragFinished: (x, y, dx, dy) => {
        if (my._shapedStickers == null) {
          return;
        }
        changeGeometriesBy(my._shapedStickers, my._ShapeMode, dx, dy);
        finishDraggingAndShaping();
      },
      onDragCancelled: (x, y, dx, dy) => {
        abortDraggingAndShaping();
      }
    });
    const handleShapeEvent = (Event, Mode2) => {
      my._ShapeMode = Mode2;
      ShapeHandleRecognizer(Event);
    };
    function builtinSelectionFor(Sticker) {
      return function(Event) {
        if (Event.button === 0) {
          selectStickers([Sticker]);
        }
      };
    }
    const DragRecognizer = /* @__PURE__ */ new WeakMap();
    const initialGeometry = /* @__PURE__ */ new WeakMap();
    function builtinDraggingFor(Sticker) {
      let Recognizer = DragRecognizer.get(Sticker);
      if (Recognizer == null) {
        DragRecognizer.set(Sticker, Recognizer = DragRecognizerFor(Sticker, {
          onlyFrom: ".builtinDraggable",
          neverFrom: ".notBuiltinDraggable",
          Threshold: 4,
          onDragStarted: (x, y, dx, dy, Event) => {
            initialGeometry.set(Sticker, Sticker.Geometry);
            changeGeometriesBy([Sticker], "c", dx, dy, [initialGeometry.get(Sticker)]);
          },
          onDragContinued: (x, y, dx, dy) => {
            if (!initialGeometry.has(Sticker)) {
              return;
            }
            changeGeometriesBy([Sticker], "c", dx, dy, [initialGeometry.get(Sticker)]);
          },
          onDragFinished: (x, y, dx, dy) => {
            if (!initialGeometry.has(Sticker)) {
              return;
            }
            changeGeometriesBy([Sticker], "c", dx, dy, [initialGeometry.get(Sticker)]);
            initialGeometry.delete(Sticker);
          },
          onDragCancelled: (x, y, dx, dy) => {
            if (initialGeometry.has(Sticker)) {
              changeGeometriesTo([Sticker], [initialGeometry.get(Sticker)]);
            }
            initialGeometry.delete(Sticker);
          }
        }));
      }
      return Recognizer;
    }
    function horizontalGuides() {
      if (my._shapedStickers == null) {
        return "";
      }
      const EdgeSet = {};
      const CenterSet = {};
      my._StickerList.filter(
        (Sticker) => !StickerIsSelected(Sticker)
      ).forEach((Sticker) => {
        const { y, Height } = Sticker.Geometry;
        const yt = Math.round(y);
        const ym = Math.round(y + Height / 2);
        const yb = Math.round(y + Height);
        EdgeSet[yt] = EdgeSet[yb] = true;
        CenterSet[ym] = true;
      });
      const horizontalSet = {};
      my._shapedStickers.forEach((Sticker) => {
        const { y, Height } = Sticker.Geometry;
        const yt = Math.round(y);
        const ym = Math.round(y + Height / 2);
        const yb = Math.round(y + Height);
        if (EdgeSet[yt]) {
          horizontalSet[yt] = "Edge";
        }
        if (EdgeSet[ym] && horizontalSet[ym] !== "Edge") {
          horizontalSet[ym] = "Center";
        }
        if (EdgeSet[yb]) {
          horizontalSet[yb] = "Edge";
        }
        if (CenterSet[yt] && horizontalSet[yt] !== "Edge") {
          horizontalSet[yt] = "Center";
        }
        if (CenterSet[ym] && horizontalSet[ym] !== "Edge") {
          horizontalSet[ym] = "Center";
        }
        if (CenterSet[yb] && horizontalSet[yb] !== "Edge") {
          horizontalSet[yb] = "Center";
        }
      });
      const horizontalList = [];
      for (let y in horizontalSet) {
        if (horizontalSet[y] != null) {
          horizontalList.push(y);
        }
      }
      return m`${horizontalList.map((y) => m`
          <div class="SNS horizontalGuide ${horizontalSet[y]}" style="top:${y}px"/>
        `)}`;
    }
    function verticalGuides() {
      if (my._shapedStickers == null) {
        return "";
      }
      const EdgeSet = {};
      const CenterSet = {};
      my._StickerList.filter(
        (Sticker) => !StickerIsSelected(Sticker)
      ).forEach((Sticker) => {
        const { x, Width } = Sticker.Geometry;
        const xl = Math.round(x);
        const xm = Math.round(x + Width / 2);
        const xr = Math.round(x + Width);
        EdgeSet[xl] = EdgeSet[xr] = true;
        CenterSet[xm] = true;
      });
      const verticalSet = {};
      my._shapedStickers.forEach((Sticker) => {
        const { x, Width } = Sticker.Geometry;
        const xl = Math.round(x);
        const xm = Math.round(x + Width / 2);
        const xr = Math.round(x + Width);
        if (EdgeSet[xl]) {
          verticalSet[xl] = "Edge";
        }
        if (EdgeSet[xm] && verticalSet[xm] !== "Edge") {
          verticalSet[xm] = "Center";
        }
        if (EdgeSet[xr]) {
          verticalSet[xr] = "Edge";
        }
        if (CenterSet[xl] && verticalSet[xl] !== "Edge") {
          verticalSet[xl] = "Center";
        }
        if (CenterSet[xm] && verticalSet[xm] !== "Edge") {
          verticalSet[xm] = "Center";
        }
        if (CenterSet[xr] && verticalSet[xr] !== "Edge") {
          verticalSet[xr] = "Center";
        }
      });
      const verticalList = [];
      for (let x in verticalSet) {
        if (verticalSet[x] != null) {
          verticalList.push(x);
        }
      }
      return m`${verticalList.map((x) => m`
          <div class="SNS verticalGuide ${verticalSet[x]}" style="left:${x}px"/>
        `)}`;
    }
    const BoardStyle = Board == null ? void 0 : CSSStyleOfVisual(Board);
    return m`<div class="SNS BoardView ${Classes}" style=${BoardStyle}
        onPointerDown=${LassoRecognizer} onPointerMove=${LassoRecognizer}
        onPointerUp=${LassoRecognizer} onPointerCancel=${LassoRecognizer}
      >
        ${Board == null ? m`<div class="SNS Placeholder"><div>(no Board to show)</div></div>` : StickerList == null ? m`<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>` : StickerList.map((Sticker) => {
      if (!Sticker.isVisible) {
        return "";
      }
      const Geometry = Sticker.Geometry;
      const selected = StickerIsSelected(Sticker);
      return m`<${SNS_StickerView} Sticker=${Sticker} key=${Sticker.Id}
                  selected=${selected && Mode === "run"}
                  SelectionFrameStyle=${SelectionFrameStyle}
                  Geometry=${Geometry}
                  builtinDragging=${builtinDraggingFor(Sticker)}
                  builtinSelection=${builtinSelectionFor(Sticker)}
                />`;
    })}

        ${StickerList != null && Mode === "edit" ? StickerList.map((Sticker) => {
      if (!Sticker.isVisible) {
        return "";
      }
      if (Sticker.isLocked) {
        return m`
                  <${SNS_Cover} Sticker=${Sticker} key=${Sticker.Id + "c"}
                    onPointerDown=${LassoRecognizer} onPointerMove=${LassoRecognizer}
                    onPointerUp=${LassoRecognizer} onPointerCancel=${LassoRecognizer}
                  />
                `;
      } else {
        const selected = StickerIsSelected(Sticker);
        return m`
                  <${SNS_Cover} Sticker=${Sticker} key=${Sticker.Id + "c"}
                    selected=${selected}
                    onPointerEvent=${(Event) => handleStickerEvent(Event, Sticker)}
                  />
                `;
      }
    }) : ""}

        ${selectedStickers.length > 0 ? selectedStickers.filter(
      (Sticker) => Sticker.isVisible && !Sticker.isLocked
    ).map((Sticker) => {
      const Id = Sticker.Id;
      const Geometry = Sticker.Geometry;
      return m`
                <${SNS_ShapeHandle} key=${Id + "nw"} Mode="nw" Geometry=${Geometry}
                  onPointerEvent=${(Event) => handleShapeEvent(Event, "nw")}/>
                <${SNS_ShapeHandle} key=${Id + "n"}  Mode="n"  Geometry=${Geometry}
                  onPointerEvent=${(Event) => handleShapeEvent(Event, "n")}/>
                <${SNS_ShapeHandle} key=${Id + "ne"} Mode="ne" Geometry=${Geometry}
                  onPointerEvent=${(Event) => handleShapeEvent(Event, "ne")}/>
                <${SNS_ShapeHandle} key=${Id + "e"}  Mode="e"  Geometry=${Geometry}
                  onPointerEvent=${(Event) => handleShapeEvent(Event, "e")}/>
                <${SNS_ShapeHandle} key=${Id + "se"} Mode="se" Geometry=${Geometry}
                  onPointerEvent=${(Event) => handleShapeEvent(Event, "se")}/>
                <${SNS_ShapeHandle} key=${Id + "s"}  Mode="s"  Geometry=${Geometry}
                  onPointerEvent=${(Event) => handleShapeEvent(Event, "s")}/>
                <${SNS_ShapeHandle} key=${Id + "sw"} Mode="sw" Geometry=${Geometry}
                  onPointerEvent=${(Event) => handleShapeEvent(Event, "sw")}/>
                <${SNS_ShapeHandle} key=${Id + "w"}  Mode="w"  Geometry=${Geometry}
                  onPointerEvent=${(Event) => handleShapeEvent(Event, "w")}/>
              `;
    }) : ""}
        ${this._LassoStart == null ? "" : m`<div class="SNS Lasso" style=${CSSGeometryOfLasso()}></>`}
        ${horizontalGuides()}
        ${verticalGuides()}
      </div>`;
  }
}
class SNS_StickerView extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "_Sticker");
  }
  /**** componentDidMount ****/
  componentDidMount() {
    const Sticker = this._Sticker;
    Sticker["_View"] = this.base;
    if (Sticker["_onMount"] != null) {
      Sticker["_onMount"]();
    }
  }
  /**** componentWillUnmount ****/
  componentWillUnmount() {
    const Sticker = this._Sticker;
    Sticker["_View"] = void 0;
    if (Sticker["_onUnmount"] != null) {
      Sticker["_onUnmount"]();
    }
  }
  /**** render ****/
  render(PropSet) {
    let {
      Sticker,
      selected,
      SelectionFrameStyle,
      Geometry,
      builtinSelection,
      builtinDragging
    } = PropSet;
    this._Sticker = Sticker;
    let { x, y, Width, Height } = Geometry;
    allowInteger("sticker x position", x);
    allowInteger("sticker y position", y);
    allowOrdinal("sticker width", Width);
    allowOrdinal("sticker height", Height);
    const CSSGeometry = x != null && Width != null && y != null && Height != null ? `left:${x}px; top:${y}px; width:${Width}px; height:${Height}px; right:auto; bottom:auto;` : "";
    return m`<div class="SNS Sticker ${selected ? "selected" : ""}" style="
        ${CSSGeometry};
        ${selected && SelectionFrameStyle != null ? `outline:${SelectionFrameStyle};` : ""}
        ${CSSStyleOfVisual(Sticker) || ""}
      ">
        ${Sticker.Rendering({ builtinSelection, builtinDragging })}
      </div>`;
  }
}
class SNS_Cover extends Component {
  render(PropSet) {
    let { Sticker, onPointerEvent, ...otherProps } = PropSet;
    let { x, y, Width, Height } = Sticker.Geometry;
    const CSSGeometry = x != null && Width != null && y != null && Height != null ? `left:${x}px; top:${y}px; width:${Width}px; height:${Height}px; right:auto; bottom:auto;` : "";
    return m`<div class="SNS Cover" style="${CSSGeometry}" ...${otherProps}
        onPointerDown=${onPointerEvent} onPointerMove=${onPointerEvent}
        onPointerUp=${onPointerEvent} onPointerCancel=${onPointerEvent}
      />`;
  }
}
class SNS_ShapeHandle extends Component {
  render(PropSet) {
    let { Mode, Geometry, onPointerEvent, ...otherProps } = PropSet;
    let { x, y, Width, Height } = Geometry;
    const xl = x - 8, xm = Math.round(x + Width / 2) - 4, xr = x + Width;
    const yt = y - 8, ym = Math.round(y + Height / 2) - 4, yb = y + Height;
    let CSSGeometry, Cursor;
    switch (Mode) {
      case "nw":
        CSSGeometry = `left:${xl}px; top:${yt}px;`;
        Cursor = "nwse";
        break;
      case "n":
        CSSGeometry = `left:${xm}px; top:${yt}px;`;
        Cursor = "ns";
        break;
      case "ne":
        CSSGeometry = `left:${xr}px; top:${yt}px;`;
        Cursor = "nesw";
        break;
      case "e":
        CSSGeometry = `left:${xr}px; top:${ym}px;`;
        Cursor = "ew";
        break;
      case "se":
        CSSGeometry = `left:${xr}px; top:${yb}px;`;
        Cursor = "nwse";
        break;
      case "s":
        CSSGeometry = `left:${xm}px; top:${yb}px;`;
        Cursor = "ns";
        break;
      case "sw":
        CSSGeometry = `left:${xl}px; top:${yb}px;`;
        Cursor = "nesw";
        break;
      case "w":
        CSSGeometry = `left:${xl}px; top:${ym}px;`;
        Cursor = "ew";
        break;
    }
    Cursor = "cursor:" + Cursor + "-resize";
    return m`<div class="SNS ShapeHandle" style="${CSSGeometry} ${Cursor}" ...${otherProps}
        onPointerDown=${onPointerEvent} onPointerMove=${onPointerEvent}
        onPointerUp=${onPointerEvent} onPointerCancel=${onPointerEvent}
      />`;
  }
}
window.SNS_BoardView = SNS_BoardView;
document.dispatchEvent(
  // @ts-ignore TS2339 allow global variable "SNS_BoardView"
  new CustomEvent("SNS_BoardView", { detail: window.SNS_BoardView })
);
export {
  SNS_BoardView
};
//# sourceMappingURL=sns-boardview.js.map
