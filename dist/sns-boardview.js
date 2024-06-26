import{allowTextline as e,allowListSatisfying as n,allowOneOf as t,allowOrdinal as o,allowFunction as r,allowText as i,allowBoolean as a,allowCardinal as s,allowInteger as l}from"javascript-interface-library";import{allowBoard as c,ValueIsSticker as d,CSSStyleOfVisual as u}from"shareable-note-stickers";import h from"svelte-coordinate-conversion";import{html as p,Component as S}from"htm/preact";import{DragClickRecognizerFor as f,DragRecognizerFor as g}from"protoux";function k(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,m(e,n)}function _(e,n){if(null==e)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;t[o]=e[o]}return t}function m(e,n){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},m(e,n)}function v(e,n){return n||(n=e.slice(0)),e.raw=n,e}var x,y,b,w,M,G,C,E,L,N,P,D,B,H,W,V=["Sticker","onPointerEvent"],z=["Mode","Geometry","onPointerEvent"],F=h.fromDocumentTo,O=document.createElement("style");O.setAttribute("id","SNS Stylesheet"),O.innerHTML="/*******************************************************************************\n*                                                                              *\n*                        Shareable Note Stickers (SNS)                         *\n*                                                                              *\n*******************************************************************************/\n\n/**** all SNS elements are absolutely positioned ****/\n\n  .SNS {\n    display:block; position:absolute;\n    margin:0px; padding:0px;\n    background:none; border:none; border-radius:0px; outline:none;\n  }\n\n/**** Error Indicator ****/\n\n  .SNS.ErrorIndicator {\n    overflow:hidden;\n    left:0px; top:0px; width:24px; height:24px;\n    background:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E\");\n    pointer-events:auto;\n  }\n\n\n/**** BoardView ****/\n\n  .SNS.BoardView {\n    left:0px; top:0px; right:0px; bottom:0px;\n  }\n\n/**** Sticker and Contents, Cover ****/\n\n  .SNS.Sticker {}\n  .SNS.Sticker > .SNS {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    display:block; position:absolute;\n    left:0px; top:0px; width:100%; height:100%; right:auto; bottom:auto;\n  }\n\n  .SNS.Cover {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    z-index:1000000;\n  }\n\n/**** Selection Markers ****/\n\n  .SNS.Sticker.selected, .SNS.Cover[selected] {\n    outline:dotted 2px orangered;\n  }\n\n  .SNS.ShapeHandle {\n    width:8px; height:8px;\n    background:orangered; border:solid 1px darkgray;\n    z-index:1000001; /* above .SNS.Cover */\n  }\n\n/**** Selection Lasso ****/\n\n  .SNS.Lasso {\n    background:rgba(255,69,0, 0.1); /* border:dashed 2px orangered; */\n  }\n\n/**** Dragging Guides ****/\n\n  .SNS.horizontalGuide.Edge {\n    left:0px; right:0px; height:1px;\n    border-top:dashed 1px orangered;\n  }\n  .SNS.verticalGuide.Edge {\n    top:0px; bottom:0px; width:1px;\n    border-left:dashed 1px orangered;\n  }\n\n  .SNS.horizontalGuide.Center {\n    left:0px; right:0px; height:1px;\n    border-top:dotted 1px orangered;\n  }\n  .SNS.verticalGuide.Center {\n    top:0px; bottom:0px; width:1px;\n    border-left:dotted 1px orangered;\n  }\n\n/**** Placeholder ****/\n\n  .SNS.Placeholder {\n    display:block; position:relative;\n    width:100%; height:100%;\n  }\n\n  .SNS.Placeholder > * {\n    display:block; position:absolute;\n    left:50%; top:50%;\n    transform:translate(-55%,-50%);\n    white-space:nowrap;\n  }\n\n",document.head.appendChild(O);var T=/*#__PURE__*/function(l){function h(){for(var e,n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return(e=l.call.apply(l,[this].concat(t))||this)._Board=void 0,e._StickerList=[],e._pointedSticker=void 0,e._selectedStickers=[],e._SelectionLimit=Infinity,e._LassoStart=void 0,e._LassoEnd=void 0,e._SelectionBeforeLasso=[],e._ShapeMode=void 0,e._shapedStickers=void 0,e._initialGeometries=void 0,e._SnapToGrid=!1,e._GridWidth=1,e._GridHeight=1,e._StickerRecognizerSlot={},e._ShapeHandleRecognizerSlot={},e._LassoRecognizerSlot={},e.state={Value:0},e}k(h,l);var S=h.prototype;return S._mountBoard=function(e){null!=e&&null!=this.base&&(e._View=this.base,null!=e._onMount&&e._onMount()),this._Board=e},S._unmountBoard=function(){var e=this._Board;null!=e&&(e._View=void 0,null!=e._onUnmount&&e._onUnmount())},S.componentDidMount=function(){this._mountBoard(this._Board)},S.componentWillUnmount=function(){this._unmountBoard()},S.rerender=function(){this.setState({Value:this.state.Value+1})},S.render=function(l){var h=this,S=l.Classes,k=l.Board,_=l.StickerList,m=l.Placeholder,B=l.Mode,H=l.SelectionLimit,W=l.selectedStickers,V=l.onSelectionChange,z=l.onStickerSelected,O=l.onStickerDeselected,T=l.SelectionFrameStyle,j=l.SelectionHandleStyle,K=l.LassoMode,A=l.onGeometryChange,Z=l.SnapToGrid,q=l.GridWidth,J=l.GridHeight;function Q(){h._pointedSticker=void 0,h._shapedStickers=void 0,h._initialGeometries=void 0}function X(){null!=h._shapedStickers&&re(h._shapedStickers,h._initialGeometries),Q()}this._Board!==k&&(this._unmountBoard(),this._mountBoard(k)),console.log("SNS_BoardView render, selectedStickers",W),e("board CSS class names",S),c("board",k),n("sticker list",_,d),e("placeholder text",m),t("board mode",B,["edit","run"]),o("selection limit",H),n("list of selected stickers",W,d),r("selection change callback",V),r("selection callback",z),r("deselection callback",O),e("selection frame CSS style",T),i("selection handle CSS style",j),t("lasso selection mode",K,["touch","contain"]),r("geometry change callback",A),a('"SnapToGrid" mode',Z),s("grid width",q),s("grid height",J),null==S&&(S=""),null==m&&(m="(empty)"),null==B&&(B="run"),null==H&&(H=Infinity),null==W&&(W=[]),null==j&&(j="background:orangered; border:solid 1px darkgray"),null==K&&(K="contain"),null==Z&&(Z=!1),null==q&&(q=10),null==J&&(J=10);var Y=new Set;function $(e,n){void 0===n&&(n=[]);var t=e.slice();n.forEach(function(e){t.indexOf(e)<0&&t.push(e)}),W.length>h._SelectionLimit&&(t.length=h._SelectionLimit);var o=[],r=[];t.forEach(function(e){h._selectedStickers.indexOf(e)<0&&o.push(e)}),h._selectedStickers.forEach(function(e){t.indexOf(e)<0&&r.push(e)}),W=h._selectedStickers=t,(o.length>0||r.length>0)&&(X(),null!=V&&V(W)),r.length>0&&null!=O&&r.forEach(function(e){O(e)}),o.length>0&&null!=z&&o.forEach(function(e){z(e)})}function ee(e){return W.indexOf(e)>=0}function ne(){var e=h._LassoStart,n=e.x,t=e.y,o=h._LassoEnd||h._LassoStart,r=o.x,i=o.y;return{x:n<=r?n:r,y:t<=i?t:i,Width:n<=r?r-n:n-r,Height:t<=i?i-t:t-i}}function te(e,n){var t,o,r,i,a;h._LassoEnd={x:e,y:n},$(h._SelectionBeforeLasso,(t=ne(),i=(o=t.x)+t.Width,a=(r=t.y)+t.Height,h._StickerList.filter("touch"===K?function(e){if(!e.isVisible||e.isLocked)return!1;var n=e.Geometry,t=n.x,s=n.y;return o<=t+n.Width&&t<=i&&r<=s+n.Height&&s<=a}:function(e){if(!e.isVisible||e.isLocked)return!1;var n=e.Geometry,t=n.x,s=n.y;return o<=t&&t+n.Width<=i&&r<=s&&s+n.Height<=a})))}(W=W.filter(function(e){return d(e)&&!Y.has(e)?(Y.add(e),!0):(X(),!1)})).length>H&&$(W.slice(0,H)),h._StickerList=_,h._selectedStickers=W,h._SelectionLimit=H,h._SnapToGrid=Z,h._GridWidth=q,h._GridHeight=J;var oe=f(h._LassoRecognizerSlot,{onlyFrom:".SNS.BoardView",Threshold:4,onDragStarted:function(e,n,t,o){h._SelectionBeforeLasso=W.slice();var r=F("local",{left:e,top:n},h.base);h._LassoStart={x:e=r.left,y:n=r.top},te(e,n),h.rerender()},onDragContinued:function(e,n,t,o){te(h._LassoStart.x+t,h._LassoStart.y+o),h.rerender()},onDragFinished:function(e,n,t,o){te(h._LassoStart.x+t,h._LassoStart.y+o),h._LassoStart=h._LassoEnd=void 0,h._SelectionBeforeLasso=[],h.rerender()},onDragCancelled:function(e,n,t,o){h._LassoStart=h._LassoEnd=void 0,$(h._SelectionBeforeLasso),h._SelectionBeforeLasso=[],h.rerender()},onClicked:function(){$([])}});function re(e,n){null!=A&&(A(e,n),h.rerender())}function ie(e,n,t,o,r){if(null!=A){var i=0,a=0,s=0,l=0;switch(n){case"nw":i=t,s=-t,a=o,l=-o;break;case"n":a=o,l=-o;break;case"ne":s=t,a=o,l=-o;break;case"e":s=t;break;case"se":s=t,l=o;break;case"s":l=o;break;case"sw":i=t,s=-t,l=o;break;case"w":i=t,s=-t;break;case"c":i=t,a=o}null==r&&(r=h._initialGeometries),re(e,r.map(function(e){var t=Math.max(0,e.Width+s),o=Math.max(0,e.Height+l),r=e.x+i,c=r+t,d=e.y+a,u=d+o;if(h._SnapToGrid){var p=h._GridWidth*Math.round(r/h._GridWidth),S=h._GridWidth*Math.round(c/h._GridWidth),f=h._GridHeight*Math.round(d/h._GridHeight),g=h._GridHeight*Math.round(u/h._GridHeight);switch(n){case"nw":r=Math.min(p,c),d=Math.min(f,u);break;case"n":d=Math.min(f,u);break;case"ne":c=Math.max(r,S),d=Math.min(f,u);break;case"e":c=Math.max(r,S);break;case"se":c=Math.max(r,S),u=Math.max(d,g);break;case"s":u=Math.max(d,g);break;case"sw":r=Math.min(p,c),u=Math.max(d,g);break;case"w":r=Math.min(p,c);break;case"c":c=(r=p)+t,u=(d=f)+o}}return{x:r,y:d,Width:c-r,Height:u-d}}))}}var ae,se=f(h._StickerRecognizerSlot,{onlyFrom:".SNS.Cover",Threshold:4,onDragStarted:function(e,n,t,o,r){ee(h._pointedSticker)||(r.shiftKey||r.metaKey?$([h._pointedSticker],h._selectedStickers):$([h._pointedSticker])),h._shapedStickers=h._selectedStickers,h._initialGeometries=h._selectedStickers.map(function(e){return e.Geometry}),ie(h._shapedStickers,"c",t,o)},onDragContinued:function(e,n,t,o){null!=h._shapedStickers&&ie(h._shapedStickers,"c",t,o)},onDragFinished:function(e,n,t,o){null!=h._shapedStickers&&(ie(h._shapedStickers,"c",t,o),Q())},onDragCancelled:function(e,n,t,o){X()},onClicked:function(e,n,t){if(0!==H){var o,r,i=h._pointedSticker,a=!1;t.shiftKey||t.metaKey?(a=!0,ee(i)?(r=[i],W=W.filter(function(e){return e!==i})):(W.length===H&&(r=[W.shift()]),o=[i],W.push(i))):(r=W.filter(function(e){return e!==i}),o=(a=!ee(i))?[i]:[],W=[i]),a&&null!=V&&V(W),null!=r&&null!=O&&r.forEach(function(e){O(e)}),null!=o&&null!=z&&o.forEach(function(e){z(e)}),a&&h.rerender()}}}),le=g(h._ShapeHandleRecognizerSlot,{onlyFrom:".SNS.ShapeHandle",Threshold:0,onDragStarted:function(e,n,t,o){h._shapedStickers=h._selectedStickers,h._initialGeometries=h._selectedStickers.map(function(e){return e.Geometry}),ie(h._shapedStickers,h._ShapeMode,t,o)},onDragContinued:function(e,n,t,o){null!=h._shapedStickers&&ie(h._shapedStickers,h._ShapeMode,t,o)},onDragFinished:function(e,n,t,o){null!=h._shapedStickers&&(ie(h._shapedStickers,h._ShapeMode,t,o),Q())},onDragCancelled:function(e,n,t,o){X()}}),ce=function(e,n){h._ShapeMode=n,le(e)},de=new WeakMap,ue=new WeakMap,he=null==k?void 0:u(k);return p(M||(M=v(['<div class="SNS BoardView ','" style=',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      >\n        ","\n\n        ","\n\n        ","\n        ","\n        ","\n        ","\n      </div>"])),S,he,oe,oe,oe,oe,null==k?p(G||(G=v(['<div class="SNS Placeholder"><div>(no Board to show)</div></div>']))):null==_?p(C||(C=v(['<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>']))):_.map(function(e){if(!e.isVisible)return"";var n=e.Geometry,t=ee(e);return p(E||(E=v(["<"," Sticker="," key=","\n                  selected=","\n                  SelectionFrameStyle=","\n                  Geometry=","\n                  builtinDragging=","\n                  builtinSelection=","\n                />"])),U,e,e.Id,t&&"run"===B,T,n,function(e){var n=de.get(e);return null==n&&de.set(e,n=g(e,{onlyFrom:".builtinDraggable",neverFrom:".notBuiltinDraggable",Threshold:4,onDragStarted:function(n,t,o,r,i){ue.set(e,e.Geometry),ie([e],"c",o,r,[ue.get(e)])},onDragContinued:function(n,t,o,r){ue.has(e)&&ie([e],"c",o,r,[ue.get(e)])},onDragFinished:function(n,t,o,r){ue.has(e)&&(ie([e],"c",o,r,[ue.get(e)]),ue.delete(e))},onDragCancelled:function(n,t,o,r){ue.has(e)&&re([e],[ue.get(e)]),ue.delete(e)}})),n}(e),function(e){return function(n){0===n.button&&$([e])}}(e))}),null!=_&&"edit"===B?_.map(function(e){if(!e.isVisible)return"";if(e.isLocked)return p(L||(L=v(["\n                  <"," Sticker="," key=","\n                    onPointerDown="," onPointerMove=","\n                    onPointerUp="," onPointerCancel=","\n                  />\n                "])),I,e,e.Id+"c",oe,oe,oe,oe);var n=ee(e);return p(N||(N=v(["\n                  <"," Sticker="," key=","\n                    selected=","\n                    onPointerEvent=","\n                  />\n                "])),I,e,e.Id+"c",n,function(n){return function(e,n){h._ShapeMode="c",h._pointedSticker=n,se(e)}(n,e)})}):"",W.length>0?W.filter(function(e){return e.isVisible&&!e.isLocked}).map(function(e){var n=e.Id,t=e.Geometry;return p(P||(P=v(["\n                <"," key=",' Mode="nw" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="n"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="ne" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="e"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="se" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="s"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="sw" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="w"  Geometry=',"\n                  onPointerEvent=","/>\n              "])),R,n+"nw",t,function(e){return ce(e,"nw")},R,n+"n",t,function(e){return ce(e,"n")},R,n+"ne",t,function(e){return ce(e,"ne")},R,n+"e",t,function(e){return ce(e,"e")},R,n+"se",t,function(e){return ce(e,"se")},R,n+"s",t,function(e){return ce(e,"s")},R,n+"sw",t,function(e){return ce(e,"sw")},R,n+"w",t,function(e){return ce(e,"w")})}):"",null==this._LassoStart?"":p(D||(D=v(['<div class="SNS Lasso" style=',"></>"])),"left:"+(ae=ne()).x+"px; top:"+ae.y+"px; width:"+ae.Width+"px; height:"+ae.Height+"px"),function(){if(null==h._shapedStickers)return"";var e={},n={};h._StickerList.filter(function(e){return!ee(e)}).forEach(function(t){var o=t.Geometry,r=o.y,i=o.Height,a=Math.round(r),s=Math.round(r+i/2),l=Math.round(r+i);e[a]=e[l]=!0,n[s]=!0});var t={};h._shapedStickers.forEach(function(o){var r=o.Geometry,i=r.y,a=r.Height,s=Math.round(i),l=Math.round(i+a/2),c=Math.round(i+a);e[s]&&(t[s]="Edge"),e[l]&&"Edge"!==t[l]&&(t[l]="Center"),e[c]&&(t[c]="Edge"),n[s]&&"Edge"!==t[s]&&(t[s]="Center"),n[l]&&"Edge"!==t[l]&&(t[l]="Center"),n[c]&&"Edge"!==t[c]&&(t[c]="Center")});var o=[];for(var r in t)null!=t[r]&&o.push(r);return p(x||(x=v(["",""])),o.map(function(e){return p(y||(y=v(['\n          <div class="SNS horizontalGuide ','" style="top:','px"/>\n        '])),t[e],e)}))}(),function(){if(null==h._shapedStickers)return"";var e={},n={};h._StickerList.filter(function(e){return!ee(e)}).forEach(function(t){var o=t.Geometry,r=o.x,i=o.Width,a=Math.round(r),s=Math.round(r+i/2),l=Math.round(r+i);e[a]=e[l]=!0,n[s]=!0});var t={};h._shapedStickers.forEach(function(o){var r=o.Geometry,i=r.x,a=r.Width,s=Math.round(i),l=Math.round(i+a/2),c=Math.round(i+a);e[s]&&(t[s]="Edge"),e[l]&&"Edge"!==t[l]&&(t[l]="Center"),e[c]&&(t[c]="Edge"),n[s]&&"Edge"!==t[s]&&(t[s]="Center"),n[l]&&"Edge"!==t[l]&&(t[l]="Center"),n[c]&&"Edge"!==t[c]&&(t[c]="Center")});var o=[];for(var r in t)null!=t[r]&&o.push(r);return p(b||(b=v(["",""])),o.map(function(e){return p(w||(w=v(['\n          <div class="SNS verticalGuide ','" style="left:','px"/>\n        '])),t[e],e)}))}())},h}(S),U=/*#__PURE__*/function(e){function n(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this)._Sticker=void 0,n}k(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this._Sticker;e._View=this.base,null!=e._onMount&&e._onMount()},t.componentWillUnmount=function(){var e=this._Sticker;e._View=void 0,null!=e._onUnmount&&e._onUnmount()},t.render=function(e){var n=e.Sticker,t=e.selected,r=e.SelectionFrameStyle,i=e.Geometry,a=e.builtinSelection,s=e.builtinDragging;this._Sticker=n;var c=i.x,d=i.y,h=i.Width,S=i.Height;l("sticker x position",c),l("sticker y position",d),o("sticker width",h),o("sticker height",S);var f=null!=c&&null!=h&&null!=d&&null!=S?"left:"+c+"px; top:"+d+"px; width:"+h+"px; height:"+S+"px; right:auto; bottom:auto;":"";return p(B||(B=v(['<div class="SNS Sticker ','" style="\n        ',";\n        ","\n        ",'\n      ">\n        ',"\n      </div>"])),t?"selected":"",f,t&&null!=r?"outline:"+r+";":"",u(n)||"",n.Rendering({builtinSelection:a,builtinDragging:s}))},n}(S),I=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}return k(n,e),n.prototype.render=function(e){var n=e.Sticker,t=e.onPointerEvent,o=_(e,V),r=n.Geometry,i=r.x,a=r.y,s=r.Width,l=r.Height,c=null!=i&&null!=s&&null!=a&&null!=l?"left:"+i+"px; top:"+a+"px; width:"+s+"px; height:"+l+"px; right:auto; bottom:auto;":"";return p(H||(H=v(['<div class="SNS Cover" style="','" ...',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      />"])),c,o,t,t,t,t)},n}(S),R=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}return k(n,e),n.prototype.render=function(e){var n,t,o=e.Mode,r=e.Geometry,i=e.onPointerEvent,a=_(e,z),s=r.x,l=r.y,c=r.Width,d=r.Height,u=s-8,h=Math.round(s+c/2)-4,S=s+c,f=l-8,g=Math.round(l+d/2)-4,k=l+d;switch(o){case"nw":n="left:"+u+"px; top:"+f+"px;",t="nwse";break;case"n":n="left:"+h+"px; top:"+f+"px;",t="ns";break;case"ne":n="left:"+S+"px; top:"+f+"px;",t="nesw";break;case"e":n="left:"+S+"px; top:"+g+"px;",t="ew";break;case"se":n="left:"+S+"px; top:"+k+"px;",t="nwse";break;case"s":n="left:"+h+"px; top:"+k+"px;",t="ns";break;case"sw":n="left:"+u+"px; top:"+k+"px;",t="nesw";break;case"w":n="left:"+u+"px; top:"+g+"px;",t="ew"}return t="cursor:"+t+"-resize",p(W||(W=v(['<div class="SNS ShapeHandle" style="'," ",'" ...',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      />"])),n,t,a,i,i,i,i)},n}(S);window.SNS_BoardView=T,document.dispatchEvent(new CustomEvent("SNS_BoardView",{detail:window.SNS_BoardView}));export{T as SNS_BoardView};
//# sourceMappingURL=sns-boardview.js.map
