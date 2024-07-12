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




(work in progress)

## License ##

[MIT License](LICENSE.md)
