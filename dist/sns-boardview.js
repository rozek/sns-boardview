import{allowTextline as e,allowListSatisfying as n,allowOneOf as t,allowOrdinal as i,allowFunction as r,allowText as o,allowBoolean as a,allowCardinal as s,allowInteger as l}from"javascript-interface-library";import{allowBoard as c,ValueIsSticker as d,CSSStyleOfVisual as u}from"shareable-note-stickers";import h from"svelte-coordinate-conversion";import{html as p,Component as S}from"htm/preact";import{DragClickRecognizerFor as f,DragRecognizerFor as g}from"protoux";function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_.apply(null,arguments)}function m(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,v(e,n)}function k(e,n){if(null==e)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(n.includes(i))continue;t[i]=e[i]}return t}function v(e,n){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},v(e,n)}function x(e,n){return n||(n=e.slice(0)),e.raw=n,e}var y,b,w,M,D,C,G,E,P,N,L,H,z,W,B,R,O,F,V=["Sticker","onPointerEvent"],T=["Mode","Geometry","onPointerEvent"],U=h.fromDocumentTo,I=document.createElement("style");I.setAttribute("id","SNS Stylesheet"),I.innerHTML="/*******************************************************************************\n*                                                                              *\n*                        Shareable Note Stickers (SNS)                         *\n*                                                                              *\n*******************************************************************************/\n\n/**** all SNS elements are absolutely positioned ****/\n\n  .SNS {\n    display:block; position:absolute;\n    margin:0px; padding:0px;\n    background:none; border:none; border-radius:0px; outline:none;\n  }\n\n/**** elements of class \"SNS Content\" cover their whole container ****/\n\n  .SNS.Content {\n    display:block; position:absolute;\n    left:0px; top:0px; width:100%; height:100%;\n  }\n\n/**** \"brokenSticker\" and Error Indicator ****/\n\n  .SNS.brokenSticker {\n    overflow:hidden;\n    border:dotted 1px orange; background:rgba(255,0,0,0.1);\n  }\n\n  .SNS.ErrorIndicator {\n    overflow:hidden;\n    left:0px; top:0px; width:24px; height:24px;\n    background:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E\");\n    pointer-events:auto;\n  }\n\n\n/**** BoardView ****/\n\n  .SNS.BoardView {\n    left:0px; top:0px; right:0px; bottom:0px;\n  }\n\n/**** Sticker and Contents, Cover ****/\n\n  .SNS.Sticker {}\n  .SNS.Sticker > .SNS {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    display:block; position:absolute;\n    left:0px; top:0px; width:100%; height:100%; right:auto; bottom:auto;\n  }\n\n  .SNS.Cover {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    z-index:1000000;\n  }\n\n/**** Selection Markers ****/\n\n  .SNS.Sticker.selected, .SNS.Cover[selected] {\n    outline:dotted 2px orangered;\n  }\n\n  .SNS.ShapeHandle {\n    width:8px; height:8px;\n    background:orangered; border:solid 1px darkgray;\n    z-index:1000001; /* above .SNS.Cover */\n  }\n\n/**** Selection Lasso ****/\n\n  .SNS.Lasso {\n    background:rgba(255,69,0, 0.1); /* border:dashed 2px orangered; */\n  }\n\n/**** Dragging Guides ****/\n\n  .SNS.horizontalGuide.Edge {\n    left:0px; right:0px; height:1px;\n    border-top:dashed 1px orangered;\n  }\n  .SNS.verticalGuide.Edge {\n    top:0px; bottom:0px; width:1px;\n    border-left:dashed 1px orangered;\n  }\n\n  .SNS.horizontalGuide.Center {\n    left:0px; right:0px; height:1px;\n    border-top:dotted 1px orangered;\n  }\n  .SNS.verticalGuide.Center {\n    top:0px; bottom:0px; width:1px;\n    border-left:dotted 1px orangered;\n  }\n\n/**** Placeholder ****/\n\n  .SNS.Placeholder {\n    display:block; position:relative;\n    width:100%; height:100%;\n  }\n\n  .SNS.Placeholder > * {\n    display:block; position:absolute;\n    left:50%; top:50%;\n    transform:translate(-55%,-50%);\n    white-space:nowrap;\n  }\n\n/**** custom Dialogs ****/\n\n  .PUX.Dialog > .ContentPane {\n    position:absolute; left:0px; top:30px; right:0px; bottom:0px;\n  }\n  .PUX.ResizableDialog > .ContentPane {\n    position:absolute; left:0px; top:30px; right:0px; bottom:10px;\n  }\n",document.head.appendChild(I);var A=/*#__PURE__*/function(l){function h(){for(var e,n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return(e=l.call.apply(l,[this].concat(t))||this)._Board=void 0,e._Mode="enclose",e._StickerList=[],e._pointedSticker=void 0,e._selectedStickers=[],e._SelectionLimit=Infinity,e._LassoStart=void 0,e._LassoEnd=void 0,e._SelectionBeforeLasso=[],e._ShapeMode=void 0,e._shapedStickers=void 0,e._initialGeometries=void 0,e._SnapToGrid=!1,e._GridWidth=1,e._GridHeight=1,e._StickerRecognizerSlot={},e._ShapeHandleRecognizerSlot={},e._LassoRecognizerSlot={},e.state={Value:0},e}m(h,l);var S=h.prototype;return S._mountBoard=function(e){null!=e&&null!=this.base&&(e._View=this.base,null!=e._onMount&&e._onMount()),this._Board=e},S._unmountBoard=function(){var e=this._Board;null!=e&&(e._View=void 0,null!=e._onUnmount&&e._onUnmount())},S.componentDidMount=function(){this._mountBoard(this._Board)},S.componentWillUnmount=function(){this._unmountBoard()},S.rerender=function(e){this.setState({Value:this.state.Value+1})},S.render=function(l){var h=this,S=l.PUX,_=l.Classes,m=l.Board,k=l.StickerList,v=l.Placeholder,z=l.Mode,W=l.SelectionLimit,B=l.selectedStickers,R=l.onSelectionChange,O=l.onStickerSelected,F=l.onStickerDeselected,V=l.SelectionFrameStyle,T=l.SelectionHandleStyle,I=l.LassoMode,A=l.onGeometryChange,j=l.SnapToGrid,J=l.GridWidth,Q=l.GridHeight;function Y(){h._pointedSticker=void 0,h._shapedStickers=void 0,h._initialGeometries=void 0}function $(){null!=h._shapedStickers&&ae(h._shapedStickers,h._initialGeometries),Y()}this._Board!==m&&(this._unmountBoard(),this._mountBoard(m)),e("board CSS class names",_),c("board",m),n("sticker list",k,d),e("placeholder text",v),t("board mode",z,["edit","run"]),i("selection limit",W),n("list of selected stickers",B,d),r("selection change callback",R),r("selection callback",O),r("deselection callback",F),e("selection frame CSS style",V),o("selection handle CSS style",T),t("lasso selection mode",I,["touch","enclose"]),r("geometry change callback",A),a('"SnapToGrid" mode',j),s("grid width",J),s("grid height",Q),null==_&&(_=""),null==v&&(v="(empty)"),null==z&&(z="run"),null==W&&(W=Infinity),null==B&&(B=[]),null==T&&(T="background:orangered; border:solid 1px darkgray"),null==I&&(I="enclose"),null==j&&(j=!1),null==J&&(J=10),null==Q&&(Q=10);var ee=new Set;function ne(e,n){void 0===n&&(n=[]);var t=e.slice();n.forEach(function(e){t.indexOf(e)<0&&t.push(e)}),B.length>h._SelectionLimit&&(t.length=h._SelectionLimit);var i=[],r=[];t.forEach(function(e){h._selectedStickers.indexOf(e)<0&&i.push(e)}),h._selectedStickers.forEach(function(e){t.indexOf(e)<0&&r.push(e)}),B=h._selectedStickers=t,(i.length>0||r.length>0)&&($(),null!=R&&R(B)),r.length>0&&null!=F&&r.forEach(function(e){F(e)}),i.length>0&&null!=O&&i.forEach(function(e){O(e)})}function te(e){return h._selectedStickers.indexOf(e)>=0}function ie(){var e=h._LassoStart,n=e.x,t=e.y,i=h._LassoEnd||h._LassoStart,r=i.x,o=i.y;return{x:n<=r?n:r,y:t<=o?t:o,Width:n<=r?r-n:n-r,Height:t<=o?o-t:t-o}}function re(e,n,t){var i,r,o,a,s;h._LassoEnd={x:e,y:n},ne(t?h._SelectionBeforeLasso:[],(i=ie(),a=(r=i.x)+i.Width,s=(o=i.y)+i.Height,h._StickerList.filter("touch"===I?function(e){if(!e.isVisible||e.isLocked)return!1;if("run"===h._Mode&&!e.isSelectable)return!1;var n=e.Geometry,t=n.x,i=n.y;return r<=t+n.Width&&t<=a&&o<=i+n.Height&&i<=s}:function(e){if(!e.isVisible||e.isLocked)return!1;if("run"===h._Mode&&!e.isSelectable)return!1;var n=e.Geometry,t=n.x,i=n.y;return r<=t&&t+n.Width<=a&&o<=i&&i+n.Height<=s})))}(B=B.filter(function(e){return d(e)&&!ee.has(e)?(ee.add(e),!0):($(),!1)})).length>W&&ne(B.slice(0,W)),h._Mode=z,h._StickerList=k,h._selectedStickers=B,h._SelectionLimit=W,h._SnapToGrid=j,h._GridWidth=J,h._GridHeight=Q;var oe=f(h._LassoRecognizerSlot,{onlyFrom:".SNS.BoardView,.SNS.Sticker,.SNS.Sticker *",neverFrom:".SNS.Sticker.selectable,.SNS.Sticker.selectable *",Threshold:4,onDragStarted:function(e,n,t,i,r){h._SelectionBeforeLasso=h._selectedStickers.slice();var o=U("local",{left:e,top:n},h.base);h._LassoStart={x:e=o.left,y:n=o.top},re(e,n,r.shiftKey||r.metaKey),h.rerender()},onDragContinued:function(e,n,t,i,r){re(h._LassoStart.x+t,h._LassoStart.y+i,r.shiftKey||r.metaKey),h.rerender()},onDragFinished:function(e,n,t,i,r){re(h._LassoStart.x+t,h._LassoStart.y+i,r.shiftKey||r.metaKey),h._LassoStart=h._LassoEnd=void 0,h._SelectionBeforeLasso=[],h.rerender()},onDragCancelled:function(e,n,t,i){h._LassoStart=h._LassoEnd=void 0,ne(h._SelectionBeforeLasso),h._SelectionBeforeLasso=[],h.rerender()},onClicked:function(){ne([])}});function ae(e,n){null!=A&&(A(e,n),h.rerender())}function se(e,n,t,i,r){if(null!=A){var o=0,a=0,s=0,l=0;switch(n){case"nw":o=t,s=-t,a=i,l=-i;break;case"n":a=i,l=-i;break;case"ne":s=t,a=i,l=-i;break;case"e":s=t;break;case"se":s=t,l=i;break;case"s":l=i;break;case"sw":o=t,s=-t,l=i;break;case"w":o=t,s=-t;break;case"c":o=t,a=i}null==r&&(r=h._initialGeometries),ae(e,r.map(function(e){var t=Math.max(0,e.Width+s),i=Math.max(0,e.Height+l),r=e.x+o,c=r+t,d=e.y+a,u=d+i;if(h._SnapToGrid){var p=h._GridWidth*Math.round(r/h._GridWidth),S=h._GridWidth*Math.round(c/h._GridWidth),f=h._GridHeight*Math.round(d/h._GridHeight),g=h._GridHeight*Math.round(u/h._GridHeight);switch(n){case"nw":r=Math.min(p,c),d=Math.min(f,u);break;case"n":d=Math.min(f,u);break;case"ne":c=Math.max(r,S),d=Math.min(f,u);break;case"e":c=Math.max(r,S);break;case"se":c=Math.max(r,S),u=Math.max(d,g);break;case"s":u=Math.max(d,g);break;case"sw":r=Math.min(p,c),u=Math.max(d,g);break;case"w":r=Math.min(p,c);break;case"c":c=(r=p)+t,u=(d=f)+i}}return{x:r,y:d,Width:c-r,Height:u-d}}))}}var le=function(e,n,t){if(0!==W){var i,r,o=h._pointedSticker,a=!1;t.shiftKey||t.metaKey?(a=!0,te(o)?(r=[o],B=B.filter(function(e){return e!==o})):(B.length===W&&(r=[B.shift()]),i=[o],B.push(o))):(r=B.filter(function(e){return e!==o}),i=(a=!te(o))?[o]:[],B=[o]),a&&null!=R&&R(B),null!=r&&null!=F&&r.forEach(function(e){F(e)}),null!=i&&null!=O&&i.forEach(function(e){O(e)}),a&&h.rerender()}},ce=f(h._StickerRecognizerSlot,{onlyFrom:".SNS.Cover",Threshold:4,onDragStarted:function(e,n,t,i,r){te(h._pointedSticker)||(r.shiftKey||r.metaKey?ne([h._pointedSticker],h._selectedStickers):ne([h._pointedSticker])),h._shapedStickers=h._selectedStickers,h._initialGeometries=h._selectedStickers.map(function(e){return e.Geometry}),se(h._shapedStickers,"c",t,i)},onDragContinued:function(e,n,t,i){null!=h._shapedStickers&&se(h._shapedStickers,"c",t,i)},onDragFinished:function(e,n,t,i){null!=h._shapedStickers&&(se(h._shapedStickers,"c",t,i),Y())},onDragCancelled:function(e,n,t,i){$()},onClicked:le}),de=g(h._ShapeHandleRecognizerSlot,{onlyFrom:".SNS.ShapeHandle",Threshold:0,onDragStarted:function(e,n,t,i){h._shapedStickers=h._selectedStickers,h._initialGeometries=h._selectedStickers.map(function(e){return e.Geometry}),se(h._shapedStickers,h._ShapeMode,t,i)},onDragContinued:function(e,n,t,i){null!=h._shapedStickers&&se(h._shapedStickers,h._ShapeMode,t,i)},onDragFinished:function(e,n,t,i){null!=h._shapedStickers&&(se(h._shapedStickers,h._ShapeMode,t,i),Y())},onDragCancelled:function(e,n,t,i){$()}});function ue(e,n){h._ShapeMode=n,de(e)}var he,pe=new WeakMap,Se=null==m?void 0:u(m);return p(D||(D=x(['<div class="SNS BoardView ','" style=',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      >\n        ","\n\n        ","\n\n        ","\n        ","\n        ","\n        ","\n        ","\n      </div>"])),_,Se,oe,oe,oe,oe,null==m?p(C||(C=x(['<div class="SNS Placeholder"><div>(no Board to show)</div></div>']))):null==k?p(G||(G=x(['<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>']))):k.map(function(e){if(!e.isVisible)return"";var n=e.Geometry,t=e.isSelectable,i=te(e);return p(E||(E=x(["<"," Sticker="," key=","\n                  selected=","\n                  SelectionFrameStyle=","\n                  Geometry=","\n                  selectable=","\n                  builtinDragging=","\n                  builtinSelection=","\n                />"])),K,e,e.Id,i&&"run"===z,V,n,t,t&&function(e){var n=pe.get(e);return null==n&&pe.set(e,n=f(e,{onlyFrom:".builtinDraggable",neverFrom:".notBuiltinDraggable",Threshold:4,onDragStarted:function(n,t,i,r,o){h._pointedSticker=e,te(h._pointedSticker)||(o.shiftKey||o.metaKey?ne([h._pointedSticker],h._selectedStickers):ne([h._pointedSticker])),h._shapedStickers=h._selectedStickers,h._initialGeometries=h._selectedStickers.map(function(e){return e.Geometry}),se(h._shapedStickers,"c",i,r)},onDragContinued:function(e,n,t,i){null!=h._shapedStickers&&se(h._shapedStickers,"c",t,i)},onDragFinished:function(e,n,t,i){null!=h._shapedStickers&&(se(h._shapedStickers,"c",t,i),Y())},onDragCancelled:function(e,n,t,i){$()},onClicked:function(n,t,i){h._pointedSticker=e,le(0,0,i)}})),n}(e),t&&function(e){return function(n){h._pointedSticker=e,le(0,0,n)}}(e))}),null!=k&&"edit"===z?k.map(function(e){if(!e.isVisible)return"";var n=te(e);return p(P||(P=x(["\n                <"," Sticker="," key=","\n                  selected=","\n                  onPointerEvent=","\n                />\n              "])),X,e,e.Id+"c",n,function(n){return function(e,n){h._ShapeMode="c",h._pointedSticker=n,ce(e)}(n,e)})}):"",B.length>0?B.filter(function(e){return e.isVisible}).map(function(e){var n=e.Id,t=e.Geometry;return p(N||(N=x(["\n                <"," key=",' Mode="nw" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="n"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="ne" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="e"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="se" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="s"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="sw" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="w"  Geometry=',"\n                  onPointerEvent=","/>\n              "])),q,n+"nw",t,function(e){return ue(e,"nw")},q,n+"n",t,function(e){return ue(e,"n")},q,n+"ne",t,function(e){return ue(e,"ne")},q,n+"e",t,function(e){return ue(e,"e")},q,n+"se",t,function(e){return ue(e,"se")},q,n+"s",t,function(e){return ue(e,"s")},q,n+"sw",t,function(e){return ue(e,"sw")},q,n+"w",t,function(e){return ue(e,"w")})}):"",null==this._LassoStart?"":p(L||(L=x(['<div class="SNS Lasso" style=',"></>"])),"left:"+(he=ie()).x+"px; top:"+he.y+"px; width:"+he.Width+"px; height:"+he.Height+"px"),function(){if(null==h._shapedStickers)return"";var e={},n={};h._StickerList.filter(function(e){return!te(e)}).forEach(function(t){var i=t.Geometry,r=i.y,o=i.Height,a=Math.round(r),s=Math.round(r+o/2),l=Math.round(r+o);e[a]=e[l]=!0,n[s]=!0});var t={};h._shapedStickers.forEach(function(i){var r=i.Geometry,o=r.y,a=r.Height,s=Math.round(o),l=Math.round(o+a/2),c=Math.round(o+a);e[s]&&(t[s]="Edge"),e[l]&&"Edge"!==t[l]&&(t[l]="Center"),e[c]&&(t[c]="Edge"),n[s]&&"Edge"!==t[s]&&(t[s]="Center"),n[l]&&"Edge"!==t[l]&&(t[l]="Center"),n[c]&&"Edge"!==t[c]&&(t[c]="Center")});var i=[];for(var r in t)null!=t[r]&&i.push(r);return p(y||(y=x(["",""])),i.map(function(e){return p(b||(b=x(['\n          <div class="SNS horizontalGuide ','" style="top:','px"/>\n        '])),t[e],e)}))}(),function(){if(null==h._shapedStickers)return"";var e={},n={};h._StickerList.filter(function(e){return!te(e)}).forEach(function(t){var i=t.Geometry,r=i.x,o=i.Width,a=Math.round(r),s=Math.round(r+o/2),l=Math.round(r+o);e[a]=e[l]=!0,n[s]=!0});var t={};h._shapedStickers.forEach(function(i){var r=i.Geometry,o=r.x,a=r.Width,s=Math.round(o),l=Math.round(o+a/2),c=Math.round(o+a);e[s]&&(t[s]="Edge"),e[l]&&"Edge"!==t[l]&&(t[l]="Center"),e[c]&&(t[c]="Edge"),n[s]&&"Edge"!==t[s]&&(t[s]="Center"),n[l]&&"Edge"!==t[l]&&(t[l]="Center"),n[c]&&"Edge"!==t[c]&&(t[c]="Center")});var i=[];for(var r in t)null!=t[r]&&i.push(r);return p(w||(w=x(["",""])),i.map(function(e){return p(M||(M=x(['\n          <div class="SNS verticalGuide ','" style="left:','px"/>\n        '])),t[e],e)}))}(),null==m?"":m.DialogList.map(function(e){return p(H||(H=x(["<"," key="," PUX="," Board="," Dialog=","/>"])),Z,e.Id,S,m,e)}))},h}(S),K=/*#__PURE__*/function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))||this)._Sticker=void 0,n}m(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this._Sticker;e._View=this.base,null!=e._onMount&&e._onMount()},t.componentWillUnmount=function(){var e=this._Sticker;e._View=void 0,null!=e._onUnmount&&e._onUnmount()},t.render=function(e){var n=e.Sticker,t=e.selectable,r=e.selected,o=e.SelectionFrameStyle,a=e.Geometry,s=e.builtinSelection,c=e.builtinDragging;this._Sticker=n;var d=a.x,h=a.y,S=a.Width,f=a.Height;l("sticker x position",d),l("sticker y position",h),i("sticker width",S),i("sticker height",f);var g=null!=d&&null!=S&&null!=h&&null!=f?"left:"+d+"px; top:"+h+"px; width:"+S+"px; height:"+f+"px; right:auto; bottom:auto;":"";return p(z||(z=x(['<div class="\n        SNS Sticker '," ",'\n      " style="\n        ',";\n        ","\n        ",'\n      ">\n        ',"\n      </div>"])),t?"selectable":"",r?"selected":"",g,r&&null!=o?"outline:"+o+";":"",u(n)||"",t?n.Rendering({builtinSelection:s,builtinDragging:c}):n.Rendering())},n}(S),X=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}return m(n,e),n.prototype.render=function(e){var n=e.Sticker,t=e.onPointerEvent,i=k(e,V),r=n.Geometry,o=r.x,a=r.y,s=r.Width,l=r.Height,c=null!=o&&null!=s&&null!=a&&null!=l?"left:"+o+"px; top:"+a+"px; width:"+s+"px; height:"+l+"px; right:auto; bottom:auto;":"";return p(W||(W=x(['<div class="SNS Cover" style="\n        '," ",'\n      " ...',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      />"])),c,n.isLocked?"pointer-events:none":"",i,t,t,t,t)},n}(S),j={x:-Number.MAX_SAFE_INTEGER,Width:320,y:-Number.MAX_SAFE_INTEGER,Height:240},Z=/*#__PURE__*/function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))||this)._DragRecognizer=void 0,n._Geometry=j,n._DragMode=void 0,n._DragOffset=j,n.state={Value:0},n}m(n,e);var t=n.prototype;return t.rerender=function(){this.setState({Value:this.state.Value+1})},t.render=function(e){var n=e.PUX,t=e.Board,i=e.Dialog;if(0==i.Visibility)return"";var r=i.Id,o=i.Name,a=i.Title,s=i.isResizable,l=i.x,c=i.y,d=i.Width,u=i.Height,h=i.minWidth,S=i.maxWidth,f=i.minHeight,m=i.maxHeight,k=i.Renderer,v=i.onClose;d=Math.max(h,d),null!=S&&(d=Math.min(d,S)),u=Math.max(f,u),null!=m&&(u=Math.min(u,m)),l==-Number.MAX_SAFE_INTEGER&&(l=Math.max(0,(window.innerWidth-d)/2)),c==-Number.MAX_SAFE_INTEGER&&(c=Math.max(0,(window.innerHeight-u)/2)),l=Math.min(l,window.innerWidth-40),c=Math.max(0,Math.min(c,window.innerHeight-30));var y=this;y._Geometry={x:l,y:c,Width:d,Height:u};var b=function(e,n,r,o){"drag"===y._DragMode?w(r,o):M(r,o),t.bringDialogToFront(i.Name),t.rerender()},w=function(e,n){t.positionDialogAt(i.Name,y._DragOffset.x+e,y._DragOffset.y+n)},M=function(e,n){var r=y._DragOffset.Width;switch(y._DragMode){case"resize-sw":r=Math.max(h,Math.min(y._DragOffset.Width-e,S||Infinity)),t.positionDialogAt(i.Name,y._DragOffset.x-(e=r-y._DragOffset.Width),y._DragOffset.y),r=y._DragOffset.Width+e;break;case"resize-se":r=Math.max(h,Math.min(y._DragOffset.Width+e,S||Infinity))}var o=Math.max(f,Math.min(y._DragOffset.Height+n,m||Infinity));t.sizeDialogTo(i.Name,r,o)},D=y._DragRecognizer;null==D&&(D=y._DragRecognizer=g(this,{onlyFrom:".Titlebar,.leftResizer,.middleResizer,.rightResizer",neverFrom:".CloseButton",Threshold:4,onDragStarted:function(e,n,t,i,r){var o=r.target.classList;switch(y._DragMode=void 0,!0){case o.contains("leftResizer"):y._DragMode="resize-sw";break;case o.contains("middleResizer"):y._DragMode="resize-s";break;case o.contains("rightResizer"):y._DragMode="resize-se";break;default:y._DragMode="drag"}y._DragOffset=_({},y._Geometry),b(0,0,t,i)},onDragContinued:b,onDragFinished:b,onDragCancelled:b}));var C,G="left:"+l+"px; top:"+c+"px; width:"+d+"px; height:"+u+"px; right:auto; bottom:auto;";try{C=k()}catch(e){console.error("Dialog rendering failed",e),C=p(B||(B=x(["<div>(Dialog rendering failed)</div>"])))}return p(R||(R=x(['<div class="PUX ','Dialog" id=',' style="\n        position:fixed; ','\n      ">\n        <div class="ContentPane">','</div>\n\n        <div class="Titlebar"\n          onPointerDown='," onPointerUp=","\n          onPointerMove="," onPointerCancel=",'\n        >\n          <div class="Title">','</div>\n          <img class="CloseButton" src="','/xmark.png"\n            onClick=',"/>\n        </div>\n\n        ","\n      </>"])),s?"Resizable":"",r,G,C,D,D,D,D,a,n._ImageFolder,function(e){e.stopImmediatePropagation(),e.preventDefault(),t.closeDialog(i.Name),null!=v&&v(o)},s?p(O||(O=x(['\n          <div class="leftResizer"\n            onPointerDown='," onPointerUp=","\n            onPointerMove="," onPointerCancel=",'\n          />\n          <div class="middleResizer"\n            onPointerDown='," onPointerUp=","\n            onPointerMove="," onPointerCancel=",'\n          />\n          <div class="rightResizer"\n            onPointerDown='," onPointerUp=","\n            onPointerMove="," onPointerCancel=","\n          />\n        "])),D,D,D,D,D,D,D,D,D,D,D,D):"")},n}(S),q=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}return m(n,e),n.prototype.render=function(e){var n,t,i=e.Mode,r=e.Geometry,o=e.onPointerEvent,a=k(e,T),s=r.x,l=r.y,c=r.Width,d=r.Height,u=s-8,h=Math.round(s+c/2)-4,S=s+c,f=l-8,g=Math.round(l+d/2)-4,_=l+d;switch(i){case"nw":n="left:"+u+"px; top:"+f+"px;",t="nwse";break;case"n":n="left:"+h+"px; top:"+f+"px;",t="ns";break;case"ne":n="left:"+S+"px; top:"+f+"px;",t="nesw";break;case"e":n="left:"+S+"px; top:"+g+"px;",t="ew";break;case"se":n="left:"+S+"px; top:"+_+"px;",t="nwse";break;case"s":n="left:"+h+"px; top:"+_+"px;",t="ns";break;case"sw":n="left:"+u+"px; top:"+_+"px;",t="nesw";break;case"w":n="left:"+u+"px; top:"+g+"px;",t="ew"}return t="cursor:"+t+"-resize",p(F||(F=x(['<div class="SNS ShapeHandle" style="'," ",'" ...',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      />"])),n,t,a,o,o,o,o)},n}(S);window.SNS_BoardView=A,document.dispatchEvent(new CustomEvent("SNS_BoardView",{detail:window.SNS_BoardView}));export{A as SNS_BoardView};
//# sourceMappingURL=sns-boardview.js.map
