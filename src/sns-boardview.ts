/*******************************************************************************
*                                                                              *
*                BoardView for "Shareable Note Stickers" (SNS)                 *
*                                                                              *
*******************************************************************************/

  import {
    allowBoolean,
    allowInteger, allowOrdinal, allowCardinal,
    allowText, allowTextline,
    allowFunction,
    allowListSatisfying,
    allowOneOf,
  } from 'javascript-interface-library'

  import {
    SNS_Board, SNS_Sticker, SNS_Dialog,
    ValueIsSticker,
    allowBoard,
    CSSStyleOfVisual,
  } from 'shareable-note-stickers'

  import Conversion from 'svelte-coordinate-conversion'
  const { fromDocumentTo } = Conversion

  import { html, Component } from 'htm/preact'

// @ts-ignore TS7016 *C* sometimes, I hate package management
  import { DragRecognizerFor, DragClickRecognizerFor } from 'protoux'

/**** install stylesheet for this BoardView ****/

  const Stylesheet = document.createElement('style')
    Stylesheet.setAttribute('id','SNS Stylesheet')
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

/**** elements of class "SNS Content" cover their whole container ****/

  .SNS.Content {
    display:block; position:absolute;
    left:0px; top:0px; width:100%; height:100%;
  }

/**** "brokenSticker" and Error Indicator ****/

  .SNS.brokenSticker {
    overflow:hidden;
    border:dotted 1px orange; background:rgba(255,0,0,0.1);
  }

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
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;
    user-select:none;

    display:block; position:absolute;
    left:0px; top:0px; width:100%; height:100%; right:auto; bottom:auto;
  }

  .SNS.Cover {
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;
    user-select:none;

    z-index:1000000;
  }

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

/**** custom Dialogs ****/

  .PUX.Dialog > .ContentPane {
    position:absolute; left:0px; top:30px; right:0px; bottom:0px;
  }
  .PUX.ResizableDialog > .ContentPane {
    position:absolute; left:0px; top:30px; right:0px; bottom:10px;
  }
`
  document.head.appendChild(Stylesheet)

/**** make some existing types indexable ****/

  interface Indexable { [Key:string]:any }

//------------------------------------------------------------------------------
//--                             Type Definitions                             --
//------------------------------------------------------------------------------

/**** geometry-related types ****/

  export type SNS_Location  = number         // mainly for illustrative purposes
  export type SNS_Dimension = number                                     // dto.
  export type SNS_Position  = { x:SNS_Location,y:SNS_Location }
  export type SNS_Size      = { Width:SNS_Dimension,Height:SNS_Dimension }
  export type SNS_Geometry  = { x:SNS_Location,y:SNS_Location, Width:SNS_Dimension,Height:SNS_Dimension }

//------------------------------------------------------------------------------
//--                              SNS_BoardView                               --
//------------------------------------------------------------------------------

  export class SNS_BoardView extends Component {
    private _Board:SNS_Board|undefined
    private _Mode:'touch'|'enclose' = 'enclose'

    private _StickerList:SNS_Sticker[] = []
    private _pointedSticker:SNS_Sticker|undefined
    private _selectedStickers:SNS_Sticker[] = []       // for dragging & shaping
    private _SelectionLimit:number = Infinity

    private _LassoStart:SNS_Position|undefined
    private _LassoEnd:SNS_Position|undefined
    private _SelectionBeforeLasso:SNS_Sticker[] = []

    private _ShapeMode:string|undefined
    private _shapedStickers:SNS_Sticker[]|undefined
    private _initialGeometries:SNS_Geometry[]|undefined

    private _SnapToGrid:boolean = false
    private _GridWidth:number   = 1
    private _GridHeight:number  = 1

    private _StickerRecognizerSlot = {}
    private _ShapeHandleRecognizerSlot = {}
    private _LassoRecognizerSlot = {}

    public state:Indexable = { Value:0 }

  /**** _mountBoard ****/

    private _mountBoard (Board:SNS_Board|undefined):void {
      if ((Board != null) && ((this as Component).base != null)) {
        Board['_View'] = (this as Component).base
        if (Board['_onMount'] != null) {
          Board['_onMount']()
        }
      }
      this._Board = Board
    }

  /**** _unmountBoard ****/

    private _unmountBoard ():void {
      const Board = this._Board
      if (Board != null) {
        Board['_View'] = undefined
        if (Board['_onUnmount'] != null) {
          Board['_onUnmount']()
        }
      }
    }

  /**** componentDidMount/WillUnmount ****/

    public componentDidMount    ():void { this._mountBoard(this._Board) }
    public componentWillUnmount ():void { this._unmountBoard() }

  /**** rerender ****/

    public rerender (Sticker?:SNS_Sticker):void {
// @ts-ignore TS2339 "Value" is a valid property
      (this as Component).setState({ Value:(this as Component).state.Value + 1 })
    }

  /**** render ****/

    public render (PropSet:Indexable):any {
      const my = this

      let {
        PUX,
        Classes, Board, StickerList, Placeholder, Mode,
        SelectionLimit, selectedStickers,
        onSelectionChange, onStickerSelected, onStickerDeselected,
        SelectionFrameStyle, SelectionHandleStyle,
        LassoMode, onGeometryChange,
        SnapToGrid, GridWidth, GridHeight,
      } = PropSet

      if (this._Board !== Board) {
        this._unmountBoard()
        this._mountBoard(Board)
      }

    /**** finishDraggingAndShaping ****/

      function finishDraggingAndShaping ():void {
        my._pointedSticker    = undefined
        my._shapedStickers    = undefined
        my._initialGeometries = undefined
      }

    /**** abortDraggingAndShaping ****/

      function abortDraggingAndShaping ():void {
        if (my._shapedStickers != null) {
          changeGeometriesTo(my._shapedStickers,my._initialGeometries as SNS_Geometry[])
        }
        finishDraggingAndShaping()
      }

    /**** validate given properties ****/

      allowTextline      ('board CSS class names',Classes)
      allowBoard                         ('board',Board)
      allowListSatisfying         ('sticker list',StickerList, ValueIsSticker)
      allowTextline           ('placeholder text',Placeholder)
      allowOneOf                    ('board mode',Mode, ['edit','run'])
      allowOrdinal             ('selection limit',SelectionLimit)
      allowListSatisfying('list of selected stickers',selectedStickers, ValueIsSticker)
      allowFunction  ('selection change callback',onSelectionChange)
      allowFunction         ('selection callback',onStickerSelected)
      allowFunction       ('deselection callback',onStickerDeselected)
      allowTextline  ('selection frame CSS style',SelectionFrameStyle)
      allowText     ('selection handle CSS style',SelectionHandleStyle)
      allowOneOf          ('lasso selection mode',LassoMode, ['touch','enclose'])
      allowFunction   ('geometry change callback',onGeometryChange)
      allowBoolean           ('"SnapToGrid" mode',SnapToGrid)
      allowCardinal                 ('grid width',GridWidth)
      allowCardinal                ('grid height',GridHeight)

    /**** provide defaults for missing properties ****/

      if (Classes              == null) { Classes               = '' }
      if (Placeholder          == null) { Placeholder           = '(empty)' }
      if (Mode                 == null) { Mode                  = 'run' }
      if (SelectionLimit       == null) { SelectionLimit        = Infinity }
      if (selectedStickers     == null) { selectedStickers      = [] }
//    if (SelectionFrameStyle  == null) { SelectionFrameStyle   = 'dotted 2px orangered' }
      if (SelectionHandleStyle == null) { SelectionHandleStyle  = 'background:orangered; border:solid 1px darkgray' }
      if (LassoMode            == null) { LassoMode             = 'enclose' }
      if (SnapToGrid           == null) { SnapToGrid            = false }
      if (GridWidth            == null) { GridWidth             = 10 }
      if (GridHeight           == null) { GridHeight            = 10 }

    /**** sanitize Selections ****/

      const selectedStickerSet:Set<SNS_Sticker> = new Set()
        selectedStickers = selectedStickers.filter((selectedSticker:SNS_Sticker) => {
          if (
            ValueIsSticker(selectedSticker) &&
            ! selectedStickerSet.has(selectedSticker)
          ) {
            selectedStickerSet.add(selectedSticker)
            return true
          } else {
            abortDraggingAndShaping()
            return false        // invalid selections don't invoke any callbacks
          }
        })
      if (selectedStickers.length > SelectionLimit) {
        selectStickers(selectedStickers.slice(0,SelectionLimit))
      }

     my._Mode = Mode

      my._StickerList      = StickerList
      my._selectedStickers = selectedStickers   // needed for dragging & shaping
      my._SelectionLimit   = SelectionLimit                              // dto.

      my._SnapToGrid = SnapToGrid                                        // dto.
      my._GridWidth  = GridWidth                                         // dto.
      my._GridHeight = GridHeight                                        // dto.

    /**** Sticker Selection ****/

      function selectStickers (
        SelectionA:SNS_Sticker[], SelectionB:SNS_Sticker[] = []
      ):void {
        const newSelection:SNS_Sticker[] = SelectionA.slice()
        SelectionB.forEach((Sticker:SNS_Sticker) => {
          if (newSelection.indexOf(Sticker) < 0) { newSelection.push(Sticker) }
        })

        if (selectedStickers.length > my._SelectionLimit) {
          newSelection.length = my._SelectionLimit
        }

        const StickersToSelect:SNS_Sticker[]   = []
        const StickersToDeselect:SNS_Sticker[] = []
          newSelection.forEach((Sticker:SNS_Sticker) => {
            if (my._selectedStickers.indexOf(Sticker) < 0) {
              StickersToSelect.push(Sticker)
            }
          })

          my._selectedStickers.forEach((Sticker:SNS_Sticker) => {
            if (newSelection.indexOf(Sticker) < 0) {
              StickersToDeselect.push(Sticker)
            }
          })
        selectedStickers = my._selectedStickers = newSelection

        if ((StickersToSelect.length > 0) || (StickersToDeselect.length > 0)) {
          abortDraggingAndShaping()

          if (onSelectionChange != null) {
            onSelectionChange(selectedStickers)
          }
        }

        if ((StickersToDeselect.length > 0) && (onStickerDeselected != null)) {
          StickersToDeselect.forEach((deselectedSticker:SNS_Sticker) => {
            onStickerDeselected(deselectedSticker)
          })
        }

        if ((StickersToSelect.length > 0) && (onStickerSelected != null)) {
          StickersToSelect.forEach((selectedSticker:SNS_Sticker) => {
            onStickerSelected(selectedSticker)
          })
        }
      }

      function StickerIsSelected (Sticker:SNS_Sticker):boolean {
        return (my._selectedStickers.indexOf(Sticker) >= 0)
      }

    /**** Lasso Selection ****/

      function GeometryOfLasso ():SNS_Geometry {
        const { x:x0,y:y0 } = my._LassoStart as SNS_Position
        const { x:x1,y:y1 } = my._LassoEnd || my._LassoStart as SNS_Position

        let LassoX = (x0 <= x1 ? x0 : x1); let LassoWidth  = (x0 <= x1 ? x1-x0 : x0-x1)
        let LassoY = (y0 <= y1 ? y0 : y1); let LassoHeight = (y0 <= y1 ? y1-y0 : y0-y1)

        return { x:LassoX,y:LassoY, Width:LassoWidth,Height:LassoHeight }
      }

      function CSSGeometryOfLasso ():string {
        const { x,y, Width,Height } = GeometryOfLasso()
        return `left:${x}px; top:${y}px; width:${Width}px; height:${Height}px`
      }

      function StickersCaughtByLasso ():SNS_Sticker[] {
        let { x:LassoX0,y:LassoY0, Width:LassoWidth,Height:LassoHeight } = GeometryOfLasso()
        let LassoX1 = LassoX0+LassoWidth
        let LassoY1 = LassoY0+LassoHeight

        if (LassoMode === 'touch') {
          return my._StickerList.filter((Sticker:SNS_Sticker) => {
            if (! Sticker.isVisible || Sticker.isLocked) { return false }
// @ts-ignore TS2339 strange: why does TS not recognize "isSelectable"?
            if ((my._Mode === 'run') && ! Sticker.isSelectable) { return false }

            const { x,y, Width,Height } = Sticker.Geometry
            return (
              (LassoX0 <= x+Width)  && (x <= LassoX1) &&
              (LassoY0 <= y+Height) && (y <= LassoY1)
            )
          })
        } else { // 'enclose'
          return my._StickerList.filter((Sticker:SNS_Sticker) => {
            if (! Sticker.isVisible || Sticker.isLocked) { return false }
// @ts-ignore TS2339 strange: why does TS not recognize "isSelectable"?
            if ((my._Mode === 'run') && ! Sticker.isSelectable) { return false }

            const { x,y, Width,Height } = Sticker.Geometry
            return (
              (LassoX0 <= x) && (x+Width  <= LassoX1) &&
              (LassoY0 <= y) && (y+Height <= LassoY1)
            )
          })
        }
      }

      function dragLassoTo (
        x:SNS_Location,y:SNS_Location, additiveSelection:boolean
      ):void {
        my._LassoEnd = { x,y }
        selectStickers(
          additiveSelection ? my._SelectionBeforeLasso : [], StickersCaughtByLasso()
        )
      }

      function applyLasso ():void {
        my._LassoStart = my._LassoEnd = undefined
        my._SelectionBeforeLasso = []
      }

      function abortLasso ():void {
        my._LassoStart = my._LassoEnd = undefined
        selectStickers(my._SelectionBeforeLasso)
        my._SelectionBeforeLasso = []
      }

    /**** Lasso Recognizer ****/

      function onBoardClick ():void {
        selectStickers([])
      }

      const LassoRecognizer = DragClickRecognizerFor(my._LassoRecognizerSlot, {
        onlyFrom:     '.SNS.BoardView,.SNS.Sticker,.SNS.Sticker *',
        neverFrom:    '.SNS.Sticker.selectable,.SNS.Sticker.selectable *',
        Threshold:    4,
        onDragStarted:(x:number,y:number, dx:number,dy:number, Event:PointerEvent) => {
          my._SelectionBeforeLasso = my._selectedStickers.slice()

// @ts-ignore TS2345 type casting is ok here
          ;({ left:x,top:y } = fromDocumentTo('local',{ left:x,top:y },(my as Component).base))

          my._LassoStart = { x,y }
          dragLassoTo(x,y, Event.shiftKey || Event.metaKey)
          my.rerender()
        },
        onDragContinued:(x:number,y:number, dx:number,dy:number, Event:PointerEvent) => {
          dragLassoTo(
// @ts-ignore TS2532 my._LassoStart is _not_ undefined
            my._LassoStart.x+dx,my._LassoStart.y+dy,
            Event.shiftKey || Event.metaKey
          )
          my.rerender()
        },
        onDragFinished: (x:number,y:number, dx:number,dy:number, Event:PointerEvent) => {
          dragLassoTo(
// @ts-ignore TS2532 my._LassoStart is _not_ undefined
            my._LassoStart.x+dx,my._LassoStart.y+dy,
            Event.shiftKey || Event.metaKey
          )
          applyLasso()
          my.rerender()
        },
        onDragCancelled:(x:number,y:number, dx:number,dy:number) => {
          abortLasso()
          my.rerender()
        },
        onClicked:onBoardClick
      })

    /**** Geometry Handling ****/

      function changeGeometriesTo (
        StickerList:SNS_Sticker[], GeometryList:SNS_Geometry[]
      ):void {
        if (onGeometryChange != null) {
          onGeometryChange(StickerList,GeometryList)
          my.rerender()
        }
      }

      function changeGeometriesBy (
        StickerList:SNS_Sticker[], Mode:string, dx:number,dy:number,
        initialGeometries?:SNS_Geometry[]
      ):void {
        if (onGeometryChange == null) { return }

        let dX:number = 0, dY:number = 0, dW:number = 0, dH:number = 0
        switch (Mode) {
          case 'nw': dX = dx; dW = -dx; dY = dy; dH = -dy; break
          case 'n':                     dY = dy; dH = -dy; break
          case 'ne':          dW = dx;  dY = dy; dH = -dy; break
          case 'e':           dW = dx;                     break
          case 'se':          dW = dx;           dH = dy;  break
          case 's':                              dH = dy;  break
          case 'sw': dX = dx; dW = -dx;          dH = dy;  break
          case 'w':  dX = dx; dW = -dx;                    break
          case 'c':  dX = dx;           dY = dy;
        }

        if (initialGeometries == null) {
          initialGeometries = my._initialGeometries as SNS_Geometry[]
        }

        const GeometryList = initialGeometries.map(
          (Geometry:SNS_Geometry) => {
            let Width:number  = Math.max(0,Geometry.Width+dW)
            let Height:number = Math.max(0,Geometry.Height+dH)

            let xl:number = Geometry.x+dX, xr = xl + Width
            let yt:number = Geometry.y+dY, yb = yt + Height

            if (my._SnapToGrid) {
              let xl_ = my._GridWidth*Math.round(xl/my._GridWidth)
              let xr_ = my._GridWidth*Math.round(xr/my._GridWidth)
              let yt_ = my._GridHeight*Math.round(yt/my._GridHeight)
              let yb_ = my._GridHeight*Math.round(yb/my._GridHeight)

              switch (Mode) {
                case 'nw': xl = Math.min(xl_,xr); yt = Math.min(yt_,yb); break
                case 'n':                         yt = Math.min(yt_,yb); break
                case 'ne': xr = Math.max(xl,xr_); yt = Math.min(yt_,yb); break
                case 'e':  xr = Math.max(xl,xr_);                        break
                case 'se': xr = Math.max(xl,xr_); yb = Math.max(yt,yb_); break
                case 's':                         yb = Math.max(yt,yb_); break
                case 'sw': xl = Math.min(xl_,xr); yb = Math.max(yt,yb_); break
                case 'w':  xl = Math.min(xl_,xr);                        break
                case 'c':  xl = xl_; xr = xl+Width; yt = yt_; yb = yt+Height
              }
            }
            return { x:xl,y:yt, Width:xr-xl,Height:yb-yt }
          }
        )

        changeGeometriesTo(StickerList,GeometryList)
      }

    /**** Sticker Drag/Select Recognizer ****/

      const onStickerClick = (x:number,y:number, Event:PointerEvent) => {
        if (SelectionLimit === 0) { return }

        const Sticker = my._pointedSticker as SNS_Sticker

        let SelectionChanged:boolean = false
        let StickersToSelect:SNS_Sticker[], StickersToDeselect:SNS_Sticker[]
        if (Event.shiftKey || Event.metaKey) { // additive/subtractive selection
          SelectionChanged = true
          if (StickerIsSelected(Sticker)) {
            StickersToDeselect = [Sticker]
            selectedStickers   = selectedStickers.filter(
              (selectedSticker:SNS_Sticker) => (selectedSticker !== Sticker)
            )
          } else {
            if (selectedStickers.length === SelectionLimit) {
              StickersToDeselect = [selectedStickers.shift()]
            }
            StickersToSelect = [Sticker]
            selectedStickers.push(Sticker)
          }
        } else {                                         // definitive selection
          StickersToDeselect = selectedStickers.filter(
            (selectedSticker:SNS_Sticker) => (selectedSticker !== Sticker)
          )
          SelectionChanged = ! StickerIsSelected(Sticker)
          StickersToSelect  = (SelectionChanged ? [Sticker] : [])
          selectedStickers  = [Sticker]
        }

        if (SelectionChanged && (onSelectionChange != null)) {
          onSelectionChange(selectedStickers)
        }

// @ts-ignore TS2454 let's check IF variables were assigned
        if ((StickersToDeselect != null) && (onStickerDeselected != null)) {
          StickersToDeselect.forEach((deselectedSticker:SNS_Sticker) => {
            onStickerDeselected(deselectedSticker)
          })
        }

// @ts-ignore TS2454 let's check IF variables were assigned
        if ((StickersToSelect != null) && (onStickerSelected != null)) {
          StickersToSelect.forEach((selectedSticker:SNS_Sticker) => {
            onStickerSelected(selectedSticker)
          })
        }

        if (SelectionChanged) { my.rerender() }
      }

    /**** StickerRecognizer ****/

      const StickerRecognizer = DragClickRecognizerFor(my._StickerRecognizerSlot, {
        onlyFrom:     '.SNS.Cover',
        Threshold:    4,
        onDragStarted:(x:number,y:number, dx:number,dy:number, Event:PointerEvent) => {
          if (! StickerIsSelected(my._pointedSticker as SNS_Sticker)) {
            if (Event.shiftKey || Event.metaKey) {  // additive/subtractive sel.
              selectStickers([my._pointedSticker as SNS_Sticker],my._selectedStickers)
            } else {
              selectStickers([my._pointedSticker as SNS_Sticker])
            }
          }

          my._shapedStickers    = my._selectedStickers
          my._initialGeometries = my._selectedStickers.map(
            (Sticker:SNS_Sticker) => Sticker.Geometry
          )
          changeGeometriesBy(my._shapedStickers,'c', dx,dy)
        },
        onDragContinued:(x:number,y:number, dx:number,dy:number) => {
          if (my._shapedStickers == null) { return }
          changeGeometriesBy(my._shapedStickers,'c', dx,dy)
        },
        onDragFinished: (x:number,y:number, dx:number,dy:number) => {
          if (my._shapedStickers == null) { return }

          changeGeometriesBy(my._shapedStickers,'c', dx,dy)
          finishDraggingAndShaping()
        },
        onDragCancelled:(x:number,y:number, dx:number,dy:number) => {
          abortDraggingAndShaping()
        },
        onClicked:onStickerClick
      })

    /**** handleStickerEvent ****/

      function handleStickerEvent (Event:PointerEvent, Sticker:SNS_Sticker):void {
        my._ShapeMode      = 'c'
        my._pointedSticker = Sticker
        StickerRecognizer(Event)
      }

    /**** ShapeHandle Recognizer ****/

      const ShapeHandleRecognizer = DragRecognizerFor(my._ShapeHandleRecognizerSlot, {
        onlyFrom:     '.SNS.ShapeHandle',
        Threshold:    0,
        onDragStarted:(x:number,y:number, dx:number,dy:number) => {
          my._shapedStickers    = my._selectedStickers
          my._initialGeometries = my._selectedStickers.map(
            (Sticker:SNS_Sticker) => Sticker.Geometry
          )
          changeGeometriesBy(my._shapedStickers, my._ShapeMode as string, dx,dy)
        },
        onDragContinued:(x:number,y:number, dx:number,dy:number) => {
          if (my._shapedStickers == null) { return }
          changeGeometriesBy(my._shapedStickers, my._ShapeMode as string, dx,dy)
        },
        onDragFinished: (x:number,y:number, dx:number,dy:number) => {
          if (my._shapedStickers == null) { return }

          changeGeometriesBy(my._shapedStickers, my._ShapeMode as string, dx,dy)
          finishDraggingAndShaping()
        },
        onDragCancelled:(x:number,y:number, dx:number,dy:number) => {
          abortDraggingAndShaping()
        }
      })

      function handleShapeEvent (Event:PointerEvent, Mode:string):void {
        my._ShapeMode = Mode
        ShapeHandleRecognizer(Event)
      }

    /**** builtinSelectionFor ****/

      function builtinSelectionFor (Sticker:SNS_Sticker):Function {
        return function (Event:PointerEvent):void {
          my._pointedSticker = Sticker
          onStickerClick(0,0, Event)
        }
      }

    /**** builtinDraggingFor ****/

      const DragRecognizer:WeakMap<SNS_Sticker,Function> = new WeakMap()

      function builtinDraggingFor (Sticker:SNS_Sticker):Function {
        let Recognizer = DragRecognizer.get(Sticker)
        if (Recognizer == null) {
          DragRecognizer.set(Sticker, Recognizer = DragClickRecognizerFor(Sticker, {
            onlyFrom:     '.builtinDraggable',
            neverFrom:    '.notBuiltinDraggable',
            Threshold:    4,
            onDragStarted:(x:number,y:number, dx:number,dy:number, Event:PointerEvent) => {
              my._pointedSticker = Sticker
              if (! StickerIsSelected(my._pointedSticker as SNS_Sticker)) {
                if (Event.shiftKey || Event.metaKey) {  // additive/subtractive sel.
                  selectStickers([my._pointedSticker as SNS_Sticker],my._selectedStickers)
                } else {
                  selectStickers([my._pointedSticker as SNS_Sticker])
                }
              }

              my._shapedStickers    = my._selectedStickers
              my._initialGeometries = my._selectedStickers.map(
                (Sticker:SNS_Sticker) => Sticker.Geometry
              )
              changeGeometriesBy(my._shapedStickers,'c', dx,dy)
            },
            onDragContinued:(x:number,y:number, dx:number,dy:number) => {
              if (my._shapedStickers == null) { return }
              changeGeometriesBy(my._shapedStickers,'c', dx,dy)
            },
            onDragFinished: (x:number,y:number, dx:number,dy:number) => {
              if (my._shapedStickers == null) { return }

              changeGeometriesBy(my._shapedStickers,'c', dx,dy)
              finishDraggingAndShaping()
            },
            onDragCancelled:(x:number,y:number, dx:number,dy:number) => {
              abortDraggingAndShaping()
            },
            onClicked:(x:number,y:number, Event:PointerEvent) => {
              my._pointedSticker = Sticker
              onStickerClick(0,0, Event)
            }
          }))
        }
        return Recognizer as Function
      }

    /**** horizontal Guides ****/

      function horizontalGuides ():any {
        if (my._shapedStickers == null) { return '' }

        const EdgeSet:Indexable   = {}
        const CenterSet:Indexable = {}
        my._StickerList.filter(
          (Sticker:SNS_Sticker) => ! StickerIsSelected(Sticker)
        ).forEach((Sticker:SNS_Sticker) => {
          const { y,Height } = Sticker.Geometry
            const yt = Math.round(y)
            const ym = Math.round(y+Height/2)
            const yb = Math.round(y+Height)
          EdgeSet[yt] = EdgeSet[yb] = true
          CenterSet[ym] = true
        })

        const horizontalSet:Indexable = {}
        my._shapedStickers.forEach((Sticker:SNS_Sticker) => {
          const { y,Height } = Sticker.Geometry
            const yt = Math.round(y)
            const ym = Math.round(y+Height/2)
            const yb = Math.round(y+Height)
          if (EdgeSet[yt])                                     { horizontalSet[yt] = 'Edge' }
          if (EdgeSet[ym]   && (horizontalSet[ym] !== 'Edge')) { horizontalSet[ym] = 'Center' }
          if (EdgeSet[yb])                                     { horizontalSet[yb] = 'Edge' }
          if (CenterSet[yt] && (horizontalSet[yt] !== 'Edge')) { horizontalSet[yt] = 'Center' }
          if (CenterSet[ym] && (horizontalSet[ym] !== 'Edge')) { horizontalSet[ym] = 'Center' }
          if (CenterSet[yb] && (horizontalSet[yb] !== 'Edge')) { horizontalSet[yb] = 'Center' }
        })

        const horizontalList:string[] = []
          for (let y in horizontalSet) {
            if (horizontalSet[y] != null) { horizontalList.push(y) }
          }

        return html`${horizontalList.map((y:string) => html`
          <div class="SNS horizontalGuide ${horizontalSet[y]}" style="top:${y}px"/>
        `)}`
      }

    /**** vertical Guides ****/

      function verticalGuides ():any {
        if (my._shapedStickers == null) { return '' }

        const EdgeSet:Indexable   = {}
        const CenterSet:Indexable = {}
        my._StickerList.filter(
          (Sticker:SNS_Sticker) => ! StickerIsSelected(Sticker)
        ).forEach((Sticker:SNS_Sticker) => {
          const { x,Width } = Sticker.Geometry
            const xl = Math.round(x)
            const xm = Math.round(x+Width/2)
            const xr = Math.round(x+Width)
          EdgeSet[xl] = EdgeSet[xr] = true
          CenterSet[xm] = true
        })

        const verticalSet:Indexable = {}
        my._shapedStickers.forEach((Sticker:SNS_Sticker) => {
          const { x,Width } = Sticker.Geometry
            const xl = Math.round(x)
            const xm = Math.round(x+Width/2)
            const xr = Math.round(x+Width)
          if (EdgeSet[xl])                                   { verticalSet[xl] = 'Edge' }
          if (EdgeSet[xm]   && (verticalSet[xm] !== 'Edge')) { verticalSet[xm] = 'Center' }
          if (EdgeSet[xr])                                   { verticalSet[xr] = 'Edge' }
          if (CenterSet[xl] && (verticalSet[xl] !== 'Edge')) { verticalSet[xl] = 'Center' }
          if (CenterSet[xm] && (verticalSet[xm] !== 'Edge')) { verticalSet[xm] = 'Center' }
          if (CenterSet[xr] && (verticalSet[xr] !== 'Edge')) { verticalSet[xr] = 'Center' }
        })

        const verticalList:string[] = []
          for (let x in verticalSet) {
            if (verticalSet[x] != null) { verticalList.push(x) }
          }
        return html`${verticalList.map((x:string) => html`
          <div class="SNS verticalGuide ${verticalSet[x]}" style="left:${x}px"/>
        `)}`
      }

    /**** actual rendering ****/

      const BoardStyle = (Board == null ? undefined : CSSStyleOfVisual(Board))

      return html`<div class="SNS BoardView ${Classes}" style=${BoardStyle}
        onPointerDown=${LassoRecognizer} onPointerMove=${LassoRecognizer}
        onPointerUp=${LassoRecognizer} onPointerCancel=${LassoRecognizer}
      >
        ${Board == null
          ? html`<div class="SNS Placeholder"><div>(no Board to show)</div></div>`
          : StickerList == null
            ? html`<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>`
            : StickerList.map((Sticker:SNS_Sticker) => {
                if (! Sticker.isVisible) { return '' }

                const Geometry   = Sticker.Geometry
// @ts-ignore TS2339 strange: TS does not recognize "isSelectable"
                const selectable = Sticker.isSelectable     // Mode-independent!
                const selected   = StickerIsSelected(Sticker)

                return html`<${SNS_StickerView} Sticker=${Sticker} key=${Sticker.Id}
                  selected=${selected && (Mode === 'run')}
                  SelectionFrameStyle=${SelectionFrameStyle}
                  Geometry=${Geometry}
                  selectable=${selectable}
                  builtinDragging=${selectable && builtinDraggingFor(Sticker)}
                  builtinSelection=${selectable &&builtinSelectionFor(Sticker)}
                />`
              })
        }

        ${(StickerList != null) && (Mode === 'edit')
          ? StickerList.map((Sticker:SNS_Sticker) => {
              if (! Sticker.isVisible) { return '' }

              const selected = StickerIsSelected(Sticker)

              return html`
                <${SNS_Cover} Sticker=${Sticker} key=${Sticker.Id+'c'}
                  selected=${selected}
                  onPointerEvent=${(Event:PointerEvent) => handleStickerEvent(Event,Sticker)}
                />
              `
            })
          : ''
        }

        ${(selectedStickers.length > 0)
          ? selectedStickers.filter(
              (Sticker:SNS_Sticker) => Sticker.isVisible
            ).map((Sticker:SNS_Sticker) => {
              const Id       = Sticker.Id
              const Geometry = Sticker.Geometry
              return html`
                <${SNS_ShapeHandle} key=${Id+'nw'} Mode="nw" Geometry=${Geometry}
                  onPointerEvent=${(Event:PointerEvent) => handleShapeEvent(Event,'nw')}/>
                <${SNS_ShapeHandle} key=${Id+'n'}  Mode="n"  Geometry=${Geometry}
                  onPointerEvent=${(Event:PointerEvent) => handleShapeEvent(Event,'n')}/>
                <${SNS_ShapeHandle} key=${Id+'ne'} Mode="ne" Geometry=${Geometry}
                  onPointerEvent=${(Event:PointerEvent) => handleShapeEvent(Event,'ne')}/>
                <${SNS_ShapeHandle} key=${Id+'e'}  Mode="e"  Geometry=${Geometry}
                  onPointerEvent=${(Event:PointerEvent) => handleShapeEvent(Event,'e')}/>
                <${SNS_ShapeHandle} key=${Id+'se'} Mode="se" Geometry=${Geometry}
                  onPointerEvent=${(Event:PointerEvent) => handleShapeEvent(Event,'se')}/>
                <${SNS_ShapeHandle} key=${Id+'s'}  Mode="s"  Geometry=${Geometry}
                  onPointerEvent=${(Event:PointerEvent) => handleShapeEvent(Event,'s')}/>
                <${SNS_ShapeHandle} key=${Id+'sw'} Mode="sw" Geometry=${Geometry}
                  onPointerEvent=${(Event:PointerEvent) => handleShapeEvent(Event,'sw')}/>
                <${SNS_ShapeHandle} key=${Id+'w'}  Mode="w"  Geometry=${Geometry}
                  onPointerEvent=${(Event:PointerEvent) => handleShapeEvent(Event,'w')}/>
              `
            })
          : ''
        }
        ${this._LassoStart == null
          ? ''
          : html`<div class="SNS Lasso" style=${CSSGeometryOfLasso()}></>`
        }
        ${horizontalGuides()}
        ${verticalGuides()}
        ${Board == null
          ? ''
          : Board.DialogList.map((Dialog:SNS_Dialog) =>
              html`<${SNS_DialogView} key=${Dialog.Id} PUX=${PUX} Board=${Board} Dialog=${Dialog}/>`
            )
        }
      </div>`
    }
  }

//------------------------------------------------------------------------------
//--                             SNS_StickerView                              --
//------------------------------------------------------------------------------

  class SNS_StickerView extends Component {
    private _Sticker:SNS_Sticker|undefined

  /**** componentDidMount ****/

    public componentDidMount ():void {
      const Sticker = this._Sticker as SNS_Sticker

      Sticker['_View'] = (this as Component).base
      if (Sticker['_onMount'] != null) {
        Sticker['_onMount']()
      }
    }

  /**** componentWillUnmount ****/

    public componentWillUnmount ():void {
      const Sticker = this._Sticker as SNS_Sticker

      Sticker['_View'] = undefined
      if (Sticker['_onUnmount'] != null) {
        Sticker['_onUnmount']()
      }
    }

  /**** render ****/

    public render (PropSet:Indexable):any {
      let {
        Sticker, selectable, selected, SelectionFrameStyle,
        Geometry, builtinSelection, builtinDragging
      } = PropSet

      this._Sticker = Sticker

      let { x,y, Width,Height } = Geometry
        allowInteger('sticker x position',x)
        allowInteger('sticker y position',y)
        allowOrdinal     ('sticker width',Width)
        allowOrdinal    ('sticker height',Height)
      const CSSGeometry = (
        (x != null) && (Width != null) && (y != null) && (Height != null)
        ? `left:${x}px; top:${y}px; width:${Width}px; height:${Height}px; right:auto; bottom:auto;`
        : ''
      )

      return html`<div class="
        SNS Sticker ${selectable ? 'selectable' : ''} ${selected ? 'selected' : ''}
      " style="
        ${CSSGeometry};
        ${selected && (SelectionFrameStyle != null) ? `outline:${SelectionFrameStyle};` : ''}
        ${CSSStyleOfVisual(Sticker) || ''}
      ">
        ${selectable
          ? Sticker.Rendering({ builtinSelection,builtinDragging })
          : Sticker.Rendering()
        }
      </div>`
    }
  }//------------------------------------------------------------------------------
//--                                SNS_Cover                                 --
//------------------------------------------------------------------------------

  class SNS_Cover extends Component {
    public render (PropSet:Indexable):any {
      let { Sticker, onPointerEvent, ...otherProps } = PropSet

      let { x,y, Width,Height } = Sticker.Geometry

      const CSSGeometry = (
        (x != null) && (Width != null) && (y != null) && (Height != null)
        ? `left:${x}px; top:${y}px; width:${Width}px; height:${Height}px; right:auto; bottom:auto;`
        : ''
      )

      return html`<div class="SNS Cover" style="
        ${CSSGeometry} ${Sticker.isLocked ? 'pointer-events:none' : ''}
      " ...${otherProps}
        onPointerDown=${onPointerEvent} onPointerMove=${onPointerEvent}
        onPointerUp=${onPointerEvent} onPointerCancel=${onPointerEvent}
      />`
    }
  }

//------------------------------------------------------------------------------
//--                              SNS_DialogView                              --
//------------------------------------------------------------------------------

  const DefaultGeometry:SNS_Geometry = {
    x:-Number.MAX_SAFE_INTEGER, Width:320,
    y:-Number.MAX_SAFE_INTEGER, Height:240
  }

  class SNS_DialogView extends Component {
    private _DragRecognizer:Function|undefined = undefined
    private _Geometry:SNS_Geometry = DefaultGeometry // act., constrained dlg geo
    private _DragMode:'drag'|'resize-sw'|'resize-s'|'resize-se'|undefined
    private _DragOffset:SNS_Geometry = DefaultGeometry  // dlg geo at drag start

    public state:Indexable = { Value:0 }

    public rerender () {
      (this as Component).setState({ Value:this.state.Value+1 })
    }

    public render (PropSet:Indexable):any {
      const { PUX, Board, Dialog } = PropSet
      if (Dialog.Visibility == false) { return '' }

      let {
        Id, Name, Title, isResizable, x, y, Width, Height,
        minWidth, maxWidth, minHeight, maxHeight,
        Renderer, onClose
      } = Dialog

      Width = Math.max(minWidth,Width)
      if (maxWidth != null) { Width = Math.min(Width,maxWidth) }

      Height = Math.max(minHeight,Height)
      if (maxHeight != null) { Height = Math.min(Height,maxHeight) }

      if (x == -Number.MAX_SAFE_INTEGER) { x = Math.max(0,(window.innerWidth-Width)/2) }
      if (y == -Number.MAX_SAFE_INTEGER) { y = Math.max(0,(window.innerHeight-Height)/2) }

      x = Math.min(x,window.innerWidth-40)
      y = Math.max(0,Math.min(y,window.innerHeight-30))

      const my = this, me = this; my._Geometry = { x,y, Width,Height }

      const handleDrag = (x:number,y:number, dx:number,dy:number) => {
        if (my._DragMode === 'drag') {
          moveDialog(dx,dy)
        } else {
          resizeDialog(dx,dy)
        }
        Board.bringDialogToFront(Dialog.Name)
        Board.rerender()
      }

      const moveDialog = (dx:number,dy:number) => {
        Board.positionDialogAt(
          Dialog.Name, my._DragOffset.x + dx,my._DragOffset.y + dy
        )
      }

      const resizeDialog = (dx:number,dy:number) => {
        let newWidth:number = my._DragOffset.Width
        switch (my._DragMode) {
          case 'resize-sw':
            newWidth =  Math.max(minWidth,Math.min(my._DragOffset.Width-dx,maxWidth || Infinity))
              dx = newWidth-my._DragOffset.Width
            Board.positionDialogAt(
              Dialog.Name, my._DragOffset.x-dx,my._DragOffset.y
            )
            newWidth = my._DragOffset.Width+dx
            break
          case 'resize-se':
            newWidth = Math.max(minWidth,Math.min(my._DragOffset.Width+dx,maxWidth || Infinity))
        }
        let newHeight = Math.max(minHeight,Math.min(my._DragOffset.Height+dy,maxHeight || Infinity))
        Board.sizeDialogTo(Dialog.Name, newWidth,newHeight)
      }

      let DragRecognizer = my._DragRecognizer
      if (DragRecognizer == null) {
        DragRecognizer = my._DragRecognizer = DragRecognizerFor(me, {
          onlyFrom:       '.Titlebar,.leftResizer,.middleResizer,.rightResizer',
          neverFrom:      '.CloseButton',
          Threshold:      4,
          onDragStarted:  (x:number,y:number, dx:number,dy:number, Event:PointerEvent) => {
            let ClassList = (Event.target as HTMLElement).classList; my._DragMode = undefined
            switch (true) {
              case ClassList.contains('leftResizer'):   my._DragMode = 'resize-sw'; break
              case ClassList.contains('middleResizer'): my._DragMode = 'resize-s';  break
              case ClassList.contains('rightResizer'):  my._DragMode = 'resize-se'; break
              default:                                  my._DragMode = 'drag'
            }

            my._DragOffset = { ...my._Geometry }
            handleDrag(x,y, dx,dy)
          },
          onDragContinued: handleDrag,
          onDragFinished:  handleDrag,
          onDragCancelled: handleDrag,
        })
      }

      function onCloseClick (Event:PointerEvent) {
        Event.stopImmediatePropagation()
        Event.preventDefault()

        Board.closeDialog(Dialog.Name)
        if (onClose != null) { onClose(Name) }
      }



      const CSSGeometry = (
        `left:${x}px; top:${y}px; width:${Width}px; height:${Height}px; right:auto; bottom:auto;`
      )

      let Content
      try {
        Content = Renderer()
      } catch (Signal) {
        console.error('Dialog rendering failed',Signal)
        Content = html`<div>(Dialog rendering failed)</div>`
      }

      return html`<div class="PUX ${isResizable ? 'Resizable' : ''}Dialog" id=${Id} style="
        position:fixed; ${CSSGeometry}
      ">
        <div class="ContentPane">${Content}</div>

        <div class="Titlebar"
          onPointerDown=${DragRecognizer} onPointerUp=${DragRecognizer}
          onPointerMove=${DragRecognizer} onPointerCancel=${DragRecognizer}
        >
          <div class="Title">${Title}</div>
          <img class="CloseButton" src="${PUX._ImageFolder}/xmark.png"
            onClick=${onCloseClick}/>
        </div>

        ${isResizable ? html`
          <div class="leftResizer"
            onPointerDown=${DragRecognizer} onPointerUp=${DragRecognizer}
            onPointerMove=${DragRecognizer} onPointerCancel=${DragRecognizer}
          />
          <div class="middleResizer"
            onPointerDown=${DragRecognizer} onPointerUp=${DragRecognizer}
            onPointerMove=${DragRecognizer} onPointerCancel=${DragRecognizer}
          />
          <div class="rightResizer"
            onPointerDown=${DragRecognizer} onPointerUp=${DragRecognizer}
            onPointerMove=${DragRecognizer} onPointerCancel=${DragRecognizer}
          />
        `: ''}
      </>`
    }
  }

//------------------------------------------------------------------------------
//--                             SNS_ShapeHandle                              --
//------------------------------------------------------------------------------

  class SNS_ShapeHandle extends Component {
    public render (PropSet:Indexable):any {
      let { Mode, Geometry, onPointerEvent, ...otherProps } = PropSet

      let { x,y, Width,Height } = Geometry
      const xl = x-8, xm = Math.round(x+Width/2)-4,  xr = x+Width
      const yt = y-8, ym = Math.round(y+Height/2)-4, yb = y+Height

      let CSSGeometry, Cursor
      switch (Mode) {
        case 'nw': CSSGeometry = `left:${xl}px; top:${yt}px;`; Cursor = 'nwse'; break
        case 'n':  CSSGeometry = `left:${xm}px; top:${yt}px;`; Cursor = 'ns';   break
        case 'ne': CSSGeometry = `left:${xr}px; top:${yt}px;`; Cursor = 'nesw'; break
        case 'e':  CSSGeometry = `left:${xr}px; top:${ym}px;`; Cursor = 'ew';   break
        case 'se': CSSGeometry = `left:${xr}px; top:${yb}px;`; Cursor = 'nwse'; break
        case 's':  CSSGeometry = `left:${xm}px; top:${yb}px;`; Cursor = 'ns';   break
        case 'sw': CSSGeometry = `left:${xl}px; top:${yb}px;`; Cursor = 'nesw'; break
        case 'w':  CSSGeometry = `left:${xl}px; top:${ym}px;`; Cursor = 'ew';   break
      }
      Cursor = 'cursor:' + Cursor + '-resize'

      return html`<div class="SNS ShapeHandle" style="${CSSGeometry} ${Cursor}" ...${otherProps}
        onPointerDown=${onPointerEvent} onPointerMove=${onPointerEvent}
        onPointerUp=${onPointerEvent} onPointerCancel=${onPointerEvent}
      />`
    }
  }

// @ts-ignore TS2339 allow global variable "SNS_BoardView"
  window.SNS_BoardView = SNS_BoardView

  document.dispatchEvent(
// @ts-ignore TS2339 allow global variable "SNS_BoardView"
    new CustomEvent('SNS_BoardView',{ detail:window.SNS_BoardView })
  )
