import{allowTextline as e,allowListSatisfying as n,allowOneOf as t,allowOrdinal as o,allowFunction as r,allowText as i,allowBoolean as a,allowCardinal as s,allowInteger as l}from"javascript-interface-library";import{allowBoard as d,ValueIsSticker as c,CSSStyleOfVisual as u}from"shareable-note-stickers";import h from"svelte-coordinate-conversion";import{html as p,Component as S}from"htm/preact";import{DragClickRecognizerFor as f,DragRecognizerFor as g}from"protoux";function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_.apply(null,arguments)}function m(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,k(e,n)}function v(e,n){if(null==e)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;t[o]=e[o]}return t}function k(e,n){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},k(e,n)}function x(e,n){return n||(n=e.slice(0)),e.raw=n,e}var b,y,w,M,D,C,E,G,P,N,L,H,z,W,B,R,O,F,V=["Sticker","onPointerEvent"],T=["Mode","Geometry","onPointerEvent"],U=h.fromDocumentTo,I=document.createElement("style");I.setAttribute("id","SNS Stylesheet"),I.innerHTML="/*******************************************************************************\n*                                                                              *\n*                        Shareable Note Stickers (SNS)                         *\n*                                                                              *\n*******************************************************************************/\n\n/**** all SNS elements are absolutely positioned ****/\n\n  .SNS {\n    display:block; position:absolute;\n    margin:0px; padding:0px;\n    background:none; border:none; border-radius:0px; outline:none;\n  }\n\n/**** elements of class \"SNS Content\" cover their whole container ****/\n\n  .SNS.Content {\n    display:block; position:absolute;\n    left:0px; top:0px; width:100%; height:100%;\n  }\n\n/**** \"brokenSticker\" and Error Indicator ****/\n\n  .SNS.brokenSticker {\n    overflow:hidden;\n    border:dotted 1px orange; background:rgba(255,0,0,0.1);\n  }\n\n  .SNS.ErrorIndicator {\n    overflow:hidden;\n    left:0px; top:0px; width:24px; height:24px;\n    background:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E\");\n    pointer-events:auto;\n  }\n\n\n/**** BoardView ****/\n\n  .SNS.BoardView {\n    left:0px; top:0px; right:0px; bottom:0px;\n  }\n\n/**** Sticker and Contents, Cover ****/\n\n  .SNS.Sticker {}\n  .SNS.Sticker > .SNS {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    display:block; position:absolute;\n    left:0px; top:0px; width:100%; height:100%; right:auto; bottom:auto;\n  }\n\n  .SNS.Cover {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    z-index:1000000;\n  }\n\n/**** Selection Markers ****/\n\n  .SNS.Sticker.selected, .SNS.Cover[selected] {\n    outline:dotted 2px orangered;\n  }\n\n  .SNS.ShapeHandle {\n    width:8px; height:8px;\n    background:orangered; border:solid 1px darkgray;\n    z-index:1000001; /* above .SNS.Cover */\n  }\n\n/**** Selection Lasso ****/\n\n  .SNS.Lasso {\n    background:rgba(255,69,0, 0.1); /* border:dashed 2px orangered; */\n  }\n\n/**** Dragging Guides ****/\n\n  .SNS.horizontalGuide.Edge {\n    left:0px; right:0px; height:1px;\n    border-top:dashed 1px orangered;\n  }\n  .SNS.verticalGuide.Edge {\n    top:0px; bottom:0px; width:1px;\n    border-left:dashed 1px orangered;\n  }\n\n  .SNS.horizontalGuide.Center {\n    left:0px; right:0px; height:1px;\n    border-top:dotted 1px orangered;\n  }\n  .SNS.verticalGuide.Center {\n    top:0px; bottom:0px; width:1px;\n    border-left:dotted 1px orangered;\n  }\n\n/**** Placeholder ****/\n\n  .SNS.Placeholder {\n    display:block; position:relative;\n    width:100%; height:100%;\n  }\n\n  .SNS.Placeholder > * {\n    display:block; position:absolute;\n    left:50%; top:50%;\n    transform:translate(-55%,-50%);\n    white-space:nowrap;\n  }\n\n/**** custom Dialogs ****/\n\n  .PUX.Dialog > .ContentPane {\n    position:absolute; left:0px; top:30px; right:0px; bottom:0px;\n  }\n  .PUX.ResizableDialog > .ContentPane {\n    position:absolute; left:0px; top:30px; right:0px; bottom:10px;\n  }\n",document.head.appendChild(I);var A=/*#__PURE__*/function(l){function h(){for(var e,n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return(e=l.call.apply(l,[this].concat(t))||this)._Board=void 0,e._Mode="enclose",e._StickerList=[],e._pointedSticker=void 0,e._selectedStickers=[],e._SelectionLimit=Infinity,e._LassoStart=void 0,e._LassoEnd=void 0,e._SelectionBeforeLasso=[],e._ShapeMode=void 0,e._shapedStickers=void 0,e._initialGeometries=void 0,e._SnapToGrid=!1,e._GridWidth=1,e._GridHeight=1,e._StickerRecognizerSlot={},e._ShapeHandleRecognizerSlot={},e._LassoRecognizerSlot={},e.state={Value:0},e}m(h,l);var S=h.prototype;return S._mountBoard=function(e){null!=e&&null!=this.base&&(e._View=this.base,null!=e._onMount&&e._onMount()),this._Board=e},S._unmountBoard=function(){var e=this._Board;null!=e&&(e._View=void 0,null!=e._onUnmount&&e._onUnmount())},S.componentDidMount=function(){this._mountBoard(this._Board)},S.componentWillUnmount=function(){this._unmountBoard()},S.rerender=function(e){this.setState({Value:this.state.Value+1})},S.render=function(l){var h=this,S=l.PUX,_=l.Classes,m=l.Board,v=l.StickerList,k=l.Placeholder,z=l.Mode,W=l.SelectionLimit,B=l.selectedStickers,R=l.onSelectionChange,O=l.onStickerSelected,F=l.onStickerDeselected,V=l.SelectionFrameStyle,T=l.SelectionHandleStyle,I=l.LassoMode,A=l.onGeometryChange,K=l.SnapToGrid,J=l.GridWidth,Q=l.GridHeight;function Y(){h._pointedSticker=void 0,h._shapedStickers=void 0,h._initialGeometries=void 0}function $(){null!=h._shapedStickers&&ae(h._shapedStickers,h._initialGeometries),Y()}this._Board!==m&&(this._unmountBoard(),this._mountBoard(m)),e("board CSS class names",_),d("board",m),n("sticker list",v,c),e("placeholder text",k),t("board mode",z,["edit","run"]),o("selection limit",W),n("list of selected stickers",B,c),r("selection change callback",R),r("selection callback",O),r("deselection callback",F),e("selection frame CSS style",V),i("selection handle CSS style",T),t("lasso selection mode",I,["touch","enclose"]),r("geometry change callback",A),a('"SnapToGrid" mode',K),s("grid width",J),s("grid height",Q),null==_&&(_=""),null==k&&(k="(empty)"),null==z&&(z="run"),null==W&&(W=Infinity),null==B&&(B=[]),null==T&&(T="background:orangered; border:solid 1px darkgray"),null==I&&(I="enclose"),null==K&&(K=!1),null==J&&(J=10),null==Q&&(Q=10);var ee=new Set;function ne(e,n){void 0===n&&(n=[]);var t=e.slice();n.forEach(function(e){t.indexOf(e)<0&&t.push(e)}),B.length>h._SelectionLimit&&(t.length=h._SelectionLimit);var o=[],r=[];t.forEach(function(e){h._selectedStickers.indexOf(e)<0&&o.push(e)}),h._selectedStickers.forEach(function(e){t.indexOf(e)<0&&r.push(e)}),B=h._selectedStickers=t,(o.length>0||r.length>0)&&($(),null!=R&&R(B)),r.length>0&&null!=F&&r.forEach(function(e){F(e)}),o.length>0&&null!=O&&o.forEach(function(e){O(e)})}function te(e){return h._selectedStickers.indexOf(e)>=0}function oe(){var e=h._LassoStart,n=e.x,t=e.y,o=h._LassoEnd||h._LassoStart,r=o.x,i=o.y;return{x:n<=r?n:r,y:t<=i?t:i,Width:n<=r?r-n:n-r,Height:t<=i?i-t:t-i}}function re(e,n){var t,o,r,i,a;h._LassoEnd={x:e,y:n},ne(h._SelectionBeforeLasso,(t=oe(),i=(o=t.x)+t.Width,a=(r=t.y)+t.Height,h._StickerList.filter("touch"===I?function(e){if(!e.isVisible||e.isLocked)return!1;if("run"===h._Mode&&!e.isSelectable)return!1;var n=e.Geometry,t=n.x,s=n.y;return o<=t+n.Width&&t<=i&&r<=s+n.Height&&s<=a}:function(e){if(!e.isVisible||e.isLocked)return!1;if("run"===h._Mode&&!e.isSelectable)return!1;var n=e.Geometry,t=n.x,s=n.y;return o<=t&&t+n.Width<=i&&r<=s&&s+n.Height<=a})))}(B=B.filter(function(e){return c(e)&&!ee.has(e)?(ee.add(e),!0):($(),!1)})).length>W&&ne(B.slice(0,W)),h._Mode=z,h._StickerList=v,h._selectedStickers=B,h._SelectionLimit=W,h._SnapToGrid=K,h._GridWidth=J,h._GridHeight=Q;var ie=f(h._LassoRecognizerSlot,{onlyFrom:".SNS.BoardView,.SNS.Sticker,.SNS.Sticker *",neverFrom:".SNS.Sticker.selectable,.SNS.Sticker.selectable *",Threshold:4,onDragStarted:function(e,n,t,o){h._SelectionBeforeLasso=h._selectedStickers.slice();var r=U("local",{left:e,top:n},h.base);h._LassoStart={x:e=r.left,y:n=r.top},re(e,n),h.rerender()},onDragContinued:function(e,n,t,o){re(h._LassoStart.x+t,h._LassoStart.y+o),h.rerender()},onDragFinished:function(e,n,t,o){re(h._LassoStart.x+t,h._LassoStart.y+o),h._LassoStart=h._LassoEnd=void 0,h._SelectionBeforeLasso=[],h.rerender()},onDragCancelled:function(e,n,t,o){h._LassoStart=h._LassoEnd=void 0,ne(h._SelectionBeforeLasso),h._SelectionBeforeLasso=[],h.rerender()},onClicked:function(){ne([])}});function ae(e,n){null!=A&&(A(e,n),h.rerender())}function se(e,n,t,o,r){if(null!=A){var i=0,a=0,s=0,l=0;switch(n){case"nw":i=t,s=-t,a=o,l=-o;break;case"n":a=o,l=-o;break;case"ne":s=t,a=o,l=-o;break;case"e":s=t;break;case"se":s=t,l=o;break;case"s":l=o;break;case"sw":i=t,s=-t,l=o;break;case"w":i=t,s=-t;break;case"c":i=t,a=o}null==r&&(r=h._initialGeometries),ae(e,r.map(function(e){var t=Math.max(0,e.Width+s),o=Math.max(0,e.Height+l),r=e.x+i,d=r+t,c=e.y+a,u=c+o;if(h._SnapToGrid){var p=h._GridWidth*Math.round(r/h._GridWidth),S=h._GridWidth*Math.round(d/h._GridWidth),f=h._GridHeight*Math.round(c/h._GridHeight),g=h._GridHeight*Math.round(u/h._GridHeight);switch(n){case"nw":r=Math.min(p,d),c=Math.min(f,u);break;case"n":c=Math.min(f,u);break;case"ne":d=Math.max(r,S),c=Math.min(f,u);break;case"e":d=Math.max(r,S);break;case"se":d=Math.max(r,S),u=Math.max(c,g);break;case"s":u=Math.max(c,g);break;case"sw":r=Math.min(p,d),u=Math.max(c,g);break;case"w":r=Math.min(p,d);break;case"c":d=(r=p)+t,u=(c=f)+o}}return{x:r,y:c,Width:d-r,Height:u-c}}))}}var le=f(h._StickerRecognizerSlot,{onlyFrom:".SNS.Cover",Threshold:4,onDragStarted:function(e,n,t,o,r){te(h._pointedSticker)||(r.shiftKey||r.metaKey?ne([h._pointedSticker],h._selectedStickers):ne([h._pointedSticker])),h._shapedStickers=h._selectedStickers,h._initialGeometries=h._selectedStickers.map(function(e){return e.Geometry}),se(h._shapedStickers,"c",t,o)},onDragContinued:function(e,n,t,o){null!=h._shapedStickers&&se(h._shapedStickers,"c",t,o)},onDragFinished:function(e,n,t,o){null!=h._shapedStickers&&(se(h._shapedStickers,"c",t,o),Y())},onDragCancelled:function(e,n,t,o){$()},onClicked:function(e,n,t){if(0!==W){var o,r,i=h._pointedSticker,a=!1;t.shiftKey||t.metaKey?(a=!0,te(i)?(r=[i],B=B.filter(function(e){return e!==i})):(B.length===W&&(r=[B.shift()]),o=[i],B.push(i))):(r=B.filter(function(e){return e!==i}),o=(a=!te(i))?[i]:[],B=[i]),a&&null!=R&&R(B),null!=r&&null!=F&&r.forEach(function(e){F(e)}),null!=o&&null!=O&&o.forEach(function(e){O(e)}),a&&h.rerender()}}}),de=g(h._ShapeHandleRecognizerSlot,{onlyFrom:".SNS.ShapeHandle",Threshold:0,onDragStarted:function(e,n,t,o){h._shapedStickers=h._selectedStickers,h._initialGeometries=h._selectedStickers.map(function(e){return e.Geometry}),se(h._shapedStickers,h._ShapeMode,t,o)},onDragContinued:function(e,n,t,o){null!=h._shapedStickers&&se(h._shapedStickers,h._ShapeMode,t,o)},onDragFinished:function(e,n,t,o){null!=h._shapedStickers&&(se(h._shapedStickers,h._ShapeMode,t,o),Y())},onDragCancelled:function(e,n,t,o){$()}});function ce(e,n){h._ShapeMode=n,de(e)}var ue,he=new WeakMap,pe=new WeakMap,Se=null==m?void 0:u(m);return p(D||(D=x(['<div class="SNS BoardView ','" style=',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      >\n        ","\n\n        ","\n\n        ","\n        ","\n        ","\n        ","\n        ","\n      </div>"])),_,Se,ie,ie,ie,ie,null==m?p(C||(C=x(['<div class="SNS Placeholder"><div>(no Board to show)</div></div>']))):null==v?p(E||(E=x(['<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>']))):v.map(function(e){if(!e.isVisible)return"";var n=e.Geometry,t=e.isSelectable,o=te(e);return p(G||(G=x(["<"," Sticker="," key=","\n                  selected=","\n                  SelectionFrameStyle=","\n                  Geometry=","\n                  selectable=","\n                  builtinDragging=","\n                  builtinSelection=","\n                />"])),X,e,e.Id,o&&"run"===z,V,n,t,t&&function(e){var n=he.get(e);return null==n&&he.set(e,n=f(e,{onlyFrom:".builtinDraggable",neverFrom:".notBuiltinDraggable",Threshold:4,onDragStarted:function(n,t,o,r,i){ne([e]),h._shapedStickers=[e],pe.set(e,e.Geometry),se([e],"c",o,r,[pe.get(e)])},onDragContinued:function(n,t,o,r){pe.has(e)&&se([e],"c",o,r,[pe.get(e)])},onDragFinished:function(n,t,o,r){pe.has(e)&&(se([e],"c",o,r,[pe.get(e)]),pe.delete(e),h._shapedStickers=void 0)},onDragCancelled:function(n,t,o,r){pe.has(e)&&ae([e],[pe.get(e)]),pe.delete(e),h._shapedStickers=void 0},onClicked:function(n,t,o){h._shapedStickers=void 0,0===o.button&&ne([e])}})),n}(e),t&&function(e){return function(n){0===n.button&&ne([e])}}(e))}),null!=v&&"edit"===z?v.map(function(e){if(!e.isVisible)return"";var n=te(e);return p(P||(P=x(["\n                <"," Sticker="," key=","\n                  selected=","\n                  onPointerEvent=","\n                />\n              "])),j,e,e.Id+"c",n,function(n){return function(e,n){h._ShapeMode="c",h._pointedSticker=n,le(e)}(n,e)})}):"",B.length>0?B.filter(function(e){return e.isVisible}).map(function(e){var n=e.Id,t=e.Geometry;return p(N||(N=x(["\n                <"," key=",' Mode="nw" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="n"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="ne" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="e"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="se" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="s"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="sw" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="w"  Geometry=',"\n                  onPointerEvent=","/>\n              "])),q,n+"nw",t,function(e){return ce(e,"nw")},q,n+"n",t,function(e){return ce(e,"n")},q,n+"ne",t,function(e){return ce(e,"ne")},q,n+"e",t,function(e){return ce(e,"e")},q,n+"se",t,function(e){return ce(e,"se")},q,n+"s",t,function(e){return ce(e,"s")},q,n+"sw",t,function(e){return ce(e,"sw")},q,n+"w",t,function(e){return ce(e,"w")})}):"",null==this._LassoStart?"":p(L||(L=x(['<div class="SNS Lasso" style=',"></>"])),"left:"+(ue=oe()).x+"px; top:"+ue.y+"px; width:"+ue.Width+"px; height:"+ue.Height+"px"),function(){if(null==h._shapedStickers)return"";var e={},n={};h._StickerList.filter(function(e){return!te(e)}).forEach(function(t){var o=t.Geometry,r=o.y,i=o.Height,a=Math.round(r),s=Math.round(r+i/2),l=Math.round(r+i);e[a]=e[l]=!0,n[s]=!0});var t={};h._shapedStickers.forEach(function(o){var r=o.Geometry,i=r.y,a=r.Height,s=Math.round(i),l=Math.round(i+a/2),d=Math.round(i+a);e[s]&&(t[s]="Edge"),e[l]&&"Edge"!==t[l]&&(t[l]="Center"),e[d]&&(t[d]="Edge"),n[s]&&"Edge"!==t[s]&&(t[s]="Center"),n[l]&&"Edge"!==t[l]&&(t[l]="Center"),n[d]&&"Edge"!==t[d]&&(t[d]="Center")});var o=[];for(var r in t)null!=t[r]&&o.push(r);return p(b||(b=x(["",""])),o.map(function(e){return p(y||(y=x(['\n          <div class="SNS horizontalGuide ','" style="top:','px"/>\n        '])),t[e],e)}))}(),function(){if(null==h._shapedStickers)return"";var e={},n={};h._StickerList.filter(function(e){return!te(e)}).forEach(function(t){var o=t.Geometry,r=o.x,i=o.Width,a=Math.round(r),s=Math.round(r+i/2),l=Math.round(r+i);e[a]=e[l]=!0,n[s]=!0});var t={};h._shapedStickers.forEach(function(o){var r=o.Geometry,i=r.x,a=r.Width,s=Math.round(i),l=Math.round(i+a/2),d=Math.round(i+a);e[s]&&(t[s]="Edge"),e[l]&&"Edge"!==t[l]&&(t[l]="Center"),e[d]&&(t[d]="Edge"),n[s]&&"Edge"!==t[s]&&(t[s]="Center"),n[l]&&"Edge"!==t[l]&&(t[l]="Center"),n[d]&&"Edge"!==t[d]&&(t[d]="Center")});var o=[];for(var r in t)null!=t[r]&&o.push(r);return p(w||(w=x(["",""])),o.map(function(e){return p(M||(M=x(['\n          <div class="SNS verticalGuide ','" style="left:','px"/>\n        '])),t[e],e)}))}(),null==m?"":m.DialogList.map(function(e){return p(H||(H=x(["<"," key="," PUX="," Board="," Dialog=","/>"])),Z,e.Id,S,m,e)}))},h}(S),X=/*#__PURE__*/function(e){function n(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this)._Sticker=void 0,n}m(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this._Sticker;e._View=this.base,null!=e._onMount&&e._onMount()},t.componentWillUnmount=function(){var e=this._Sticker;e._View=void 0,null!=e._onUnmount&&e._onUnmount()},t.render=function(e){var n=e.Sticker,t=e.selectable,r=e.selected,i=e.SelectionFrameStyle,a=e.Geometry,s=e.builtinSelection,d=e.builtinDragging;this._Sticker=n;var c=a.x,h=a.y,S=a.Width,f=a.Height;l("sticker x position",c),l("sticker y position",h),o("sticker width",S),o("sticker height",f);var g=null!=c&&null!=S&&null!=h&&null!=f?"left:"+c+"px; top:"+h+"px; width:"+S+"px; height:"+f+"px; right:auto; bottom:auto;":"";return p(z||(z=x(['<div class="\n        SNS Sticker '," ",'\n      " style="\n        ',";\n        ","\n        ",'\n      ">\n        ',"\n      </div>"])),t?"selectable":"",r?"selected":"",g,r&&null!=i?"outline:"+i+";":"",u(n)||"",t?n.Rendering({builtinSelection:s,builtinDragging:d}):n.Rendering())},n}(S),j=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}return m(n,e),n.prototype.render=function(e){var n=e.Sticker,t=e.onPointerEvent,o=v(e,V),r=n.Geometry,i=r.x,a=r.y,s=r.Width,l=r.Height,d=null!=i&&null!=s&&null!=a&&null!=l?"left:"+i+"px; top:"+a+"px; width:"+s+"px; height:"+l+"px; right:auto; bottom:auto;":"";return p(W||(W=x(['<div class="SNS Cover" style="\n        '," ",'\n      " ...',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      />"])),d,n.isLocked?"pointer-events:none":"",o,t,t,t,t)},n}(S),K={x:-Number.MAX_SAFE_INTEGER,Width:320,y:-Number.MAX_SAFE_INTEGER,Height:240},Z=/*#__PURE__*/function(e){function n(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this)._DragRecognizer=void 0,n._Geometry=K,n._DragMode=void 0,n._DragOffset=K,n.state={Value:0},n}m(n,e);var t=n.prototype;return t.rerender=function(){this.setState({Value:this.state.Value+1})},t.render=function(e){var n=e.PUX,t=e.Board,o=e.Dialog,r=o.Id,i=o.Name,a=o.Title,s=o.isResizable,l=o.x,d=o.y,c=o.Width,u=o.Height,h=o.minWidth,S=o.maxWidth,f=o.minHeight,m=o.maxHeight,v=o.Renderer,k=o.onClose;c=Math.max(h,c),null!=S&&(c=Math.min(c,S)),u=Math.max(f,u),null!=m&&(u=Math.min(u,m)),l==-Number.MAX_SAFE_INTEGER&&(l=Math.max(0,(window.innerWidth-c)/2)),d==-Number.MAX_SAFE_INTEGER&&(d=Math.max(0,(window.innerHeight-u)/2)),l=Math.min(l,window.innerWidth-40),d=Math.max(0,Math.min(d,window.innerHeight-30));var b=this;b._Geometry={x:l,y:d,Width:c,Height:u};var y=function(e,n,r,i){"drag"===b._DragMode?w(r,i):M(r,i),t.bringDialogToFront(o.Name),t.rerender()},w=function(e,n){t.positionDialogAt(o.Name,b._DragOffset.x+e,b._DragOffset.y+n)},M=function(e,n){var r=b._DragOffset.Width;switch(b._DragMode){case"resize-sw":r=Math.max(h,Math.min(b._DragOffset.Width-e,S||Infinity)),t.positionDialogAt(o.Name,b._DragOffset.x-(e=r-b._DragOffset.Width),b._DragOffset.y),r=b._DragOffset.Width+e;break;case"resize-se":r=Math.max(h,Math.min(b._DragOffset.Width+e,S||Infinity))}var i=Math.max(f,Math.min(b._DragOffset.Height+n,m||Infinity));t.sizeDialogTo(o.Name,r,i)},D=b._DragRecognizer;null==D&&(D=b._DragRecognizer=g(this,{onlyFrom:".Titlebar,.leftResizer,.middleResizer,.rightResizer",neverFrom:".CloseButton",Threshold:4,onDragStarted:function(e,n,t,o,r){var i=r.target.classList;switch(b._DragMode=void 0,!0){case i.contains("leftResizer"):b._DragMode="resize-sw";break;case i.contains("middleResizer"):b._DragMode="resize-s";break;case i.contains("rightResizer"):b._DragMode="resize-se";break;default:b._DragMode="drag"}b._DragOffset=_({},b._Geometry),y(0,0,t,o)},onDragContinued:y,onDragFinished:y,onDragCancelled:y}));var C,E="left:"+l+"px; top:"+d+"px; width:"+c+"px; height:"+u+"px; right:auto; bottom:auto;";try{C=v()}catch(e){console.error("Dialog rendering failed",e),C=p(B||(B=x(["<div>(Dialog rendering failed)</div>"])))}return p(R||(R=x(['<div class="PUX ','Dialog" id=',' style="\n        position:fixed; ','\n      ">\n        <div class="ContentPane">','</div>\n\n        <div class="Titlebar"\n          onPointerDown='," onPointerUp=","\n          onPointerMove="," onPointerCancel=",'\n        >\n          <div class="Title">','</div>\n          <img class="CloseButton" src="','/xmark.png"\n            onClick=',"/>\n        </div>\n\n        ","\n      </>"])),s?"Resizable":"",r,E,C,D,D,D,D,a,n._ImageFolder,function(e){e.stopImmediatePropagation(),e.preventDefault(),t.closeDialog(o.Name),null!=k&&k(i)},s?p(O||(O=x(['\n          <div class="leftResizer"\n            onPointerDown='," onPointerUp=","\n            onPointerMove="," onPointerCancel=",'\n          />\n          <div class="middleResizer"\n            onPointerDown='," onPointerUp=","\n            onPointerMove="," onPointerCancel=",'\n          />\n          <div class="rightResizer"\n            onPointerDown='," onPointerUp=","\n            onPointerMove="," onPointerCancel=","\n          />\n        "])),D,D,D,D,D,D,D,D,D,D,D,D):"")},n}(S),q=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}return m(n,e),n.prototype.render=function(e){var n,t,o=e.Mode,r=e.Geometry,i=e.onPointerEvent,a=v(e,T),s=r.x,l=r.y,d=r.Width,c=r.Height,u=s-8,h=Math.round(s+d/2)-4,S=s+d,f=l-8,g=Math.round(l+c/2)-4,_=l+c;switch(o){case"nw":n="left:"+u+"px; top:"+f+"px;",t="nwse";break;case"n":n="left:"+h+"px; top:"+f+"px;",t="ns";break;case"ne":n="left:"+S+"px; top:"+f+"px;",t="nesw";break;case"e":n="left:"+S+"px; top:"+g+"px;",t="ew";break;case"se":n="left:"+S+"px; top:"+_+"px;",t="nwse";break;case"s":n="left:"+h+"px; top:"+_+"px;",t="ns";break;case"sw":n="left:"+u+"px; top:"+_+"px;",t="nesw";break;case"w":n="left:"+u+"px; top:"+g+"px;",t="ew"}return t="cursor:"+t+"-resize",p(F||(F=x(['<div class="SNS ShapeHandle" style="'," ",'" ...',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      />"])),n,t,a,i,i,i,i)},n}(S);window.SNS_BoardView=A,document.dispatchEvent(new CustomEvent("SNS_BoardView",{detail:window.SNS_BoardView}));export{A as SNS_BoardView};
//# sourceMappingURL=sns-boardview.js.map
