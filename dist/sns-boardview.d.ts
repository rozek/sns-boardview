/*******************************************************************************
*                                                                              *
*                BoardView for "Shareable Note Stickers" (SNS)                 *
*                                                                              *
*******************************************************************************/
import { SNS_Sticker } from 'shareable-note-stickers';
import { Component } from 'htm/preact';
/**** make some existing types indexable ****/
interface Indexable {
    [Key: string]: any;
}
/**** geometry-related types ****/
export type SNS_Location = number;
export type SNS_Dimension = number;
export type SNS_Position = {
    x: SNS_Location;
    y: SNS_Location;
};
export type SNS_Size = {
    Width: SNS_Dimension;
    Height: SNS_Dimension;
};
export type SNS_Geometry = {
    x: SNS_Location;
    y: SNS_Location;
    Width: SNS_Dimension;
    Height: SNS_Dimension;
};
export declare class SNS_BoardView extends Component {
    private _Board;
    private _Mode;
    private _StickerList;
    private _pointedSticker;
    private _selectedStickers;
    private _SelectionLimit;
    private _LassoStart;
    private _LassoEnd;
    private _SelectionBeforeLasso;
    private _ShapeMode;
    private _shapedStickers;
    private _initialGeometries;
    private _SnapToGrid;
    private _GridWidth;
    private _GridHeight;
    private _StickerRecognizerSlot;
    private _ShapeHandleRecognizerSlot;
    private _LassoRecognizerSlot;
    state: Indexable;
    /**** _mountBoard ****/
    private _mountBoard;
    /**** _unmountBoard ****/
    private _unmountBoard;
    /**** componentDidMount/WillUnmount ****/
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**** rerender ****/
    rerender(Sticker?: SNS_Sticker): void;
    /**** render ****/
    render(PropSet: Indexable): any;
}
export {};
