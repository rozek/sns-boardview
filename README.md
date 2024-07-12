# sns-boardview #

a "preact" editor component for "shareable-note-stickers"

![NoteStickers Screenshot](https://github.com/rozek/note-stickers/blob/main/screenshots/NoteStickers-Screenshot.png)

## Overview ##

While [shareable-note-stickers](https://github.com/rozek/shareable-note-stickers) implements the underlying data model for a shareable hierarchical collection of "boards" containing scriptable widgets (called "stickers"), this module implements a [preact](https://preactjs.com/) component that displays one of these boards of stickers and provides all methods to visually select and edit them.

While the data model is _principally_ shareable, you will have to add a "sharing adapter" such as the [sns-collabs-adapter](https://github.com/rozek/sns-collabs-adapter) to actually provide that feature.

Finally, to get a real application, you'll have to combine both modules and add a proper user interface - similar to [NoteStickers](https://github.com/rozek/note-stickers).

Because of this modularity, it is not too difficult to use a different sharing framework (such as [Y.js](https://github.com/yjs/yjs) or [automerge](https://github.com/automerge/automerge)), modify the user interface according to your personal needs or even develop a headless tool that analyzes and/or changes the shared data without user intervention.

## Usage ##

"sns-boardview" is intended for being used as a module within a "host application". In order to use it, simply import the `SNS_BoardView` class:

```
  import { SNS_BoardView } from '[sns-boardview](https://rozek.github.io/sns-boardview/dist/sns-boardview.modern.js)'
```

Then, as part of your user interface, instantiate the `SNS_BoardView` like any other preact component:

```
  html`<${SNS_BoardView}
    PUX=${...}
    Mode=${...} Board=${...} StickerList=${...}
    LassoMode="..." selectedStickers=${...}
    onSelectionChange=${(selectedStickers:SNS_Sticker[]) => {...}}
    onGeometryChange=${(StickerList:SNS_Sticker[],GeometryList:SNS_Geometry[]) => {...}}
    SnapToGrid=${...} GridWidth=${...} GridHeight=${...}
  />`
```

### Attributes ###

`SNS_BoardView` handles the following attributes:

* `PUX` - specifies a previously created [ProtoUX](https://github.com/rozek/protoux) instance
* `Classes` - specifies an optional string with additional CSS classes that should be used to style this `SNS_BoardView`
* `Board` - specifies the `SNS_Board` that should be shown (and may be `null` if there is no `SNS_Project` or the current `SNS_Project` does not yet contain any boards)
* `StickerList` - specifies the actual list of stickers that should be shown (usually, its just the `Board.StickerList`)
* `Placeholder` - specifies a text that is shown when `Board` is not defined (or `null`)
* `Mode` - in `edit` mode, all stickers can be principally selected and layouted (unless they are `locked` or not `visible`). In 'run' mode, only the those stickers can be selected and layouted that support `builtinSelection` or `builtinDragging`
* `SelectionLimit` - `SNS_BoardView` allows multiple stickers to be selected simultaneously. If you want to limit the number of selected stickers, just provide the limit here
* `selectedStickers` - specifies a callback with the signature `selectedStickers:SNS_Sticker[]` that is invoked (with the new list of selected stickers) whenever the list of selected stickers has changed
* `onSelectionChange` - specifies a callback with the signature `Sticker:SNS_Sticker` that is invoked whenever a sticker was deselected
* `onStickerSelected` - specifies a callback with the signature `Sticker:SNS_Sticker` that is invoked whenever a sticker was selected
* `onStickerDeselected` - specifies a callback with the signature `Sticker:SNS_Sticker` that is invoked whenever a sticker was deselected
* `SelectionFrameStyle` - specifies CSS settings to style selection frames (default is `dotted 2px orangered`)
* `SelectionHandleStyle` - specifies CSS settings to style selection handles (default is `background:orangered; border:solid 1px darkgray`)
* `LassoMode` - when set to `enclose` the selection lasso has to fully enclose a sticker in order to select it, when set to `touch`, the lasso only has to "touch" it
* `onGeometryChange` - specifies a callback with the signature `StickerList:SNS_Sticker[], GeometryList:SNS_Geometry[]` that is invoked whenever the `selectedStickers` where moved or sized by the `SNS_BoardView`
* `SnapToGrid` - when set to `true`, `SNS_BoardView` constrains the position and size of visually layouted stickers to multiples of `GridWidth` in horizontal and multiples of `GridHeight` in vertical direction
* `GridWidth` - specifies the horizontal distance between adjacent grid points while `SnapToGrid` is `true`
* `GridHeight` - specifies the vertical distance between adjacent grid points while `SnapToGrid` is `true`

### Methods ###

Actually, `SNS_BoardView` offers only one meaningful method:

* `rerender ()` - call this method whenever the specified `Board`, its `StickerList` or any of its contents have changed. [preact](https://preactjs.com/) will then take care that only those HTML elements will be rerendered that need to.

## License ##

[MIT License](LICENSE.md)
