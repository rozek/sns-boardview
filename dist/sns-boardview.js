import{allowTextline as e,allowListSatisfying as n,allowOneOf as t,allowOrdinal as o,allowFunction as r,allowText as i,allowBoolean as a,allowCardinal as s,allowInteger as l}from"javascript-interface-library";import{allowBoard as c,ValueIsSticker as d,CSSStyleOfVisual as u}from"shareable-note-stickers";import h from"svelte-coordinate-conversion";import{html as S,Component as p}from"htm/preact";import{DragClickRecognizerFor as f,DragRecognizerFor as g}from"protoux";function k(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,m(e,n)}function _(e,n){if(null==e)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;t[o]=e[o]}return t}function m(e,n){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},m(e,n)}function v(e,n){return n||(n=e.slice(0)),e.raw=n,e}var x,y,b,w,M,G,E,C,L,N,P,D,B,H,W=["Sticker","onPointerEvent"],V=["Mode","Geometry","onPointerEvent"],F=h.fromDocumentTo,z=document.createElement("style");z.setAttribute("id","SNS Stylesheet"),z.innerHTML="/*******************************************************************************\n*                                                                              *\n*                        Shareable Note Stickers (SNS)                         *\n*                                                                              *\n*******************************************************************************/\n\n/**** all SNS elements are absolutely positioned ****/\n\n  .SNS {\n    display:block; position:absolute;\n    margin:0px; padding:0px;\n    background:none; border:none; border-radius:0px; outline:none;\n  }\n\n/**** Error Indicator ****/\n\n  .SNS.ErrorIndicator {\n    overflow:hidden;\n    left:0px; top:0px; width:24px; height:24px;\n    background:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E\");\n    pointer-events:auto;\n  }\n\n\n/**** BoardView ****/\n\n  .SNS.BoardView {\n    left:0px; top:0px; right:0px; bottom:0px;\n  }\n\n/**** Sticker and Contents, Cover ****/\n\n  .SNS.Sticker {}\n  .SNS.Sticker > .SNS {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    display:block; position:absolute;\n    left:0px; top:0px; width:100%; height:100%; right:auto; bottom:auto;\n  }\n\n  .SNS.Cover {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    z-index:1000000;\n  }\n\n/**** Selection Markers ****/\n\n  .SNS.Sticker.selected, .SNS.Cover[selected] {\n    outline:dotted 2px orangered;\n  }\n\n  .SNS.ShapeHandle {\n    width:8px; height:8px;\n    background:orangered; border:solid 1px darkgray;\n    z-index:1000001; /* above .SNS.Cover */\n  }\n\n/**** Selection Lasso ****/\n\n  .SNS.Lasso {\n    background:rgba(255,69,0, 0.1); /* border:dashed 2px orangered; */\n  }\n\n/**** Dragging Guides ****/\n\n  .SNS.horizontalGuide.Edge {\n    left:0px; right:0px; height:1px;\n    border-top:dashed 1px orangered;\n  }\n  .SNS.verticalGuide.Edge {\n    top:0px; bottom:0px; width:1px;\n    border-left:dashed 1px orangered;\n  }\n\n  .SNS.horizontalGuide.Center {\n    left:0px; right:0px; height:1px;\n    border-top:dotted 1px orangered;\n  }\n  .SNS.verticalGuide.Center {\n    top:0px; bottom:0px; width:1px;\n    border-left:dotted 1px orangered;\n  }\n\n/**** Placeholder ****/\n\n  .SNS.Placeholder {\n    display:block; position:relative;\n    width:100%; height:100%;\n  }\n\n  .SNS.Placeholder > * {\n    display:block; position:absolute;\n    left:50%; top:50%;\n    transform:translate(-55%,-50%);\n    white-space:nowrap;\n  }\n\n",document.head.appendChild(z);var O=/*#__PURE__*/function(l){function h(){for(var e,n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return(e=l.call.apply(l,[this].concat(t))||this)._Board=void 0,e._StickerList=[],e._pointedSticker=void 0,e._selectedStickers=[],e._SelectionLimit=Infinity,e._LassoStart=void 0,e._LassoEnd=void 0,e._SelectionBeforeLasso=[],e._ShapeMode=void 0,e._shapedStickers=void 0,e._initialGeometries=void 0,e._SnapToGrid=!1,e._GridWidth=1,e._GridHeight=1,e._StickerRecognizerSlot={},e._ShapeHandleRecognizerSlot={},e._LassoRecognizerSlot={},e.state={Value:0},e}k(h,l);var p=h.prototype;return p._mountBoard=function(e){null!=e&&null!=this.base&&(e._View=this.base,null!=e._onMount&&e._onMount()),this._Board=e},p._unmountBoard=function(){var e=this._Board;null!=e&&(e._View=void 0,null!=e._onUnmount&&e._onUnmount())},p.componentDidMount=function(){this._mountBoard(this._Board)},p.componentWillUnmount=function(){this._unmountBoard()},p.rerender=function(){this.setState({Value:this.state.Value+1})},p.render=function(l){var h=this,p=l.Classes,k=l.Board,_=l.StickerList,m=l.Placeholder,D=l.Mode,B=l.SelectionLimit,H=l.selectedStickers,W=l.onSelectionChange,V=l.onStickerSelected,z=l.onStickerDeselected,O=l.SelectionFrameStyle,I=l.SelectionHandleStyle,j=l.LassoMode,K=l.onGeometryChange,A=l.SnapToGrid,Z=l.GridWidth,q=l.GridHeight;function J(){h._pointedSticker=void 0,h._shapedStickers=void 0,h._initialGeometries=void 0}function Q(){null!=h._shapedStickers&&oe(h._shapedStickers,h._initialGeometries),J()}this._Board!==k&&(this._unmountBoard(),this._mountBoard(k)),e("board CSS class names",p),c("board",k),n("sticker list",_,d),e("placeholder text",m),t("board mode",D,["edit","run"]),o("selection limit",B),n("list of selected stickers",H,d),r("selection change callback",W),r("selection callback",V),r("deselection callback",z),e("selection frame CSS style",O),i("selection handle CSS style",I),t("lasso selection mode",j,["touch","contain"]),r("geometry change callback",K),a('"SnapToGrid" mode',A),s("grid width",Z),s("grid height",q),null==p&&(p=""),null==m&&(m="(empty)"),null==D&&(D="run"),null==B&&(B=Infinity),null==H&&(H=[]),null==I&&(I="background:orangered; border:solid 1px darkgray"),null==j&&(j="contain"),null==A&&(A=!1),null==Z&&(Z=10),null==q&&(q=10);var X=new Set;function Y(e,n){void 0===n&&(n=[]);var t=e.slice();n.forEach(function(e){t.indexOf(e)<0&&t.push(e)}),H.length>h._SelectionLimit&&(t.length=h._SelectionLimit);var o=[],r=[];t.forEach(function(e){h._selectedStickers.indexOf(e)<0&&o.push(e)}),h._selectedStickers.forEach(function(e){t.indexOf(e)<0&&r.push(e)}),H=h._selectedStickers=t,(o.length>0||r.length>0)&&(Q(),null!=W&&W(H)),r.length>0&&null!=z&&r.forEach(function(e){z(e)}),o.length>0&&null!=V&&o.forEach(function(e){V(e)})}function $(e){return H.indexOf(e)>=0}function ee(){var e=h._LassoStart,n=e.x,t=e.y,o=h._LassoEnd||h._LassoStart,r=o.x,i=o.y;return{x:n<=r?n:r,y:t<=i?t:i,Width:n<=r?r-n:n-r,Height:t<=i?i-t:t-i}}function ne(e,n){var t,o,r,i,a;h._LassoEnd={x:e,y:n},Y(h._SelectionBeforeLasso,(t=ee(),i=(o=t.x)+t.Width,a=(r=t.y)+t.Height,h._StickerList.filter("touch"===j?function(e){if(!e.isVisible||e.isLocked)return!1;var n=e.Geometry,t=n.x,s=n.y;return o<=t+n.Width&&t<=i&&r<=s+n.Height&&s<=a}:function(e){if(!e.isVisible||e.isLocked)return!1;var n=e.Geometry,t=n.x,s=n.y;return o<=t&&t+n.Width<=i&&r<=s&&s+n.Height<=a})))}(H=H.filter(function(e){return d(e)&&!X.has(e)?(X.add(e),!0):(Q(),!1)})).length>B&&Y(H.slice(0,B)),h._StickerList=_,h._selectedStickers=H,h._SelectionLimit=B,h._SnapToGrid=A,h._GridWidth=Z,h._GridHeight=q;var te=f(h._LassoRecognizerSlot,{onlyFrom:".SNS.BoardView,.SNS.Sticker,.SNS.Sticker *",neverFrom:".SNS.Sticker.selectable,.SNS.Sticker.selectable *",Threshold:4,onDragStarted:function(e,n,t,o){h._SelectionBeforeLasso=H.slice();var r=F("local",{left:e,top:n},h.base);h._LassoStart={x:e=r.left,y:n=r.top},ne(e,n),h.rerender()},onDragContinued:function(e,n,t,o){ne(h._LassoStart.x+t,h._LassoStart.y+o),h.rerender()},onDragFinished:function(e,n,t,o){ne(h._LassoStart.x+t,h._LassoStart.y+o),h._LassoStart=h._LassoEnd=void 0,h._SelectionBeforeLasso=[],h.rerender()},onDragCancelled:function(e,n,t,o){h._LassoStart=h._LassoEnd=void 0,Y(h._SelectionBeforeLasso),h._SelectionBeforeLasso=[],h.rerender()},onClicked:function(){Y([])}});function oe(e,n){null!=K&&(K(e,n),h.rerender())}function re(e,n,t,o,r){if(null!=K){var i=0,a=0,s=0,l=0;switch(n){case"nw":i=t,s=-t,a=o,l=-o;break;case"n":a=o,l=-o;break;case"ne":s=t,a=o,l=-o;break;case"e":s=t;break;case"se":s=t,l=o;break;case"s":l=o;break;case"sw":i=t,s=-t,l=o;break;case"w":i=t,s=-t;break;case"c":i=t,a=o}null==r&&(r=h._initialGeometries),oe(e,r.map(function(e){var t=Math.max(0,e.Width+s),o=Math.max(0,e.Height+l),r=e.x+i,c=r+t,d=e.y+a,u=d+o;if(h._SnapToGrid){var S=h._GridWidth*Math.round(r/h._GridWidth),p=h._GridWidth*Math.round(c/h._GridWidth),f=h._GridHeight*Math.round(d/h._GridHeight),g=h._GridHeight*Math.round(u/h._GridHeight);switch(n){case"nw":r=Math.min(S,c),d=Math.min(f,u);break;case"n":d=Math.min(f,u);break;case"ne":c=Math.max(r,p),d=Math.min(f,u);break;case"e":c=Math.max(r,p);break;case"se":c=Math.max(r,p),u=Math.max(d,g);break;case"s":u=Math.max(d,g);break;case"sw":r=Math.min(S,c),u=Math.max(d,g);break;case"w":r=Math.min(S,c);break;case"c":c=(r=S)+t,u=(d=f)+o}}return{x:r,y:d,Width:c-r,Height:u-d}}))}}var ie,ae=f(h._StickerRecognizerSlot,{onlyFrom:".SNS.Cover",Threshold:4,onDragStarted:function(e,n,t,o,r){$(h._pointedSticker)||(r.shiftKey||r.metaKey?Y([h._pointedSticker],h._selectedStickers):Y([h._pointedSticker])),h._shapedStickers=h._selectedStickers,h._initialGeometries=h._selectedStickers.map(function(e){return e.Geometry}),re(h._shapedStickers,"c",t,o)},onDragContinued:function(e,n,t,o){null!=h._shapedStickers&&re(h._shapedStickers,"c",t,o)},onDragFinished:function(e,n,t,o){null!=h._shapedStickers&&(re(h._shapedStickers,"c",t,o),J())},onDragCancelled:function(e,n,t,o){Q()},onClicked:function(e,n,t){if(0!==B){var o,r,i=h._pointedSticker,a=!1;t.shiftKey||t.metaKey?(a=!0,$(i)?(r=[i],H=H.filter(function(e){return e!==i})):(H.length===B&&(r=[H.shift()]),o=[i],H.push(i))):(r=H.filter(function(e){return e!==i}),o=(a=!$(i))?[i]:[],H=[i]),a&&null!=W&&W(H),null!=r&&null!=z&&r.forEach(function(e){z(e)}),null!=o&&null!=V&&o.forEach(function(e){V(e)}),a&&h.rerender()}}}),se=g(h._ShapeHandleRecognizerSlot,{onlyFrom:".SNS.ShapeHandle",Threshold:0,onDragStarted:function(e,n,t,o){h._shapedStickers=h._selectedStickers,h._initialGeometries=h._selectedStickers.map(function(e){return e.Geometry}),re(h._shapedStickers,h._ShapeMode,t,o)},onDragContinued:function(e,n,t,o){null!=h._shapedStickers&&re(h._shapedStickers,h._ShapeMode,t,o)},onDragFinished:function(e,n,t,o){null!=h._shapedStickers&&(re(h._shapedStickers,h._ShapeMode,t,o),J())},onDragCancelled:function(e,n,t,o){Q()}}),le=function(e,n){h._ShapeMode=n,se(e)},ce=new WeakMap,de=new WeakMap,ue=null==k?void 0:u(k);return S(M||(M=v(['<div class="SNS BoardView ','" style=',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      >\n        ","\n\n        ","\n\n        ","\n        ","\n        ","\n        ","\n      </div>"])),p,ue,te,te,te,te,null==k?S(G||(G=v(['<div class="SNS Placeholder"><div>(no Board to show)</div></div>']))):null==_?S(E||(E=v(['<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>']))):_.map(function(e){if(!e.isVisible)return"";var n=e.Geometry,t=e.isSelectable,o=$(e);return S(C||(C=v(["<"," Sticker="," key=","\n                  selectable=","\n                  selected=","\n                  SelectionFrameStyle=","\n                  Geometry=","\n                  builtinDragging=","\n                  builtinSelection=","\n                />"])),T,e,e.Id,t,o&&"run"===D,O,n,function(e){var n=ce.get(e);return null==n&&ce.set(e,n=g(e,{onlyFrom:".builtinDraggable",neverFrom:".notBuiltinDraggable",Threshold:4,onDragStarted:function(n,t,o,r,i){de.set(e,e.Geometry),re([e],"c",o,r,[de.get(e)])},onDragContinued:function(n,t,o,r){de.has(e)&&re([e],"c",o,r,[de.get(e)])},onDragFinished:function(n,t,o,r){de.has(e)&&(re([e],"c",o,r,[de.get(e)]),de.delete(e))},onDragCancelled:function(n,t,o,r){de.has(e)&&oe([e],[de.get(e)]),de.delete(e)}})),n}(e),function(e){return function(n){0===n.button&&Y([e])}}(e))}),null!=_&&"edit"===D?_.map(function(e){if(!e.isVisible)return"";var n=$(e);return S(L||(L=v(["\n                <"," Sticker="," key=",'\n                  style="','"\n                  selected=',"\n                  onPointerEvent=","\n                />\n              "])),U,e,e.Id+"c",e.isLocked?"pointer-events:none":"",n,function(n){return function(e,n){h._ShapeMode="c",h._pointedSticker=n,ae(e)}(n,e)})}):"",H.length>0?H.filter(function(e){return e.isVisible&&!e.isLocked}).map(function(e){var n=e.Id,t=e.Geometry;return S(N||(N=v(["\n                <"," key=",' Mode="nw" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="n"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="ne" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="e"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="se" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="s"  Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",' Mode="sw" Geometry=',"\n                  onPointerEvent=","/>\n                <"," key=",'  Mode="w"  Geometry=',"\n                  onPointerEvent=","/>\n              "])),R,n+"nw",t,function(e){return le(e,"nw")},R,n+"n",t,function(e){return le(e,"n")},R,n+"ne",t,function(e){return le(e,"ne")},R,n+"e",t,function(e){return le(e,"e")},R,n+"se",t,function(e){return le(e,"se")},R,n+"s",t,function(e){return le(e,"s")},R,n+"sw",t,function(e){return le(e,"sw")},R,n+"w",t,function(e){return le(e,"w")})}):"",null==this._LassoStart?"":S(P||(P=v(['<div class="SNS Lasso" style=',"></>"])),"left:"+(ie=ee()).x+"px; top:"+ie.y+"px; width:"+ie.Width+"px; height:"+ie.Height+"px"),function(){if(null==h._shapedStickers)return"";var e={},n={};h._StickerList.filter(function(e){return!$(e)}).forEach(function(t){var o=t.Geometry,r=o.y,i=o.Height,a=Math.round(r),s=Math.round(r+i/2),l=Math.round(r+i);e[a]=e[l]=!0,n[s]=!0});var t={};h._shapedStickers.forEach(function(o){var r=o.Geometry,i=r.y,a=r.Height,s=Math.round(i),l=Math.round(i+a/2),c=Math.round(i+a);e[s]&&(t[s]="Edge"),e[l]&&"Edge"!==t[l]&&(t[l]="Center"),e[c]&&(t[c]="Edge"),n[s]&&"Edge"!==t[s]&&(t[s]="Center"),n[l]&&"Edge"!==t[l]&&(t[l]="Center"),n[c]&&"Edge"!==t[c]&&(t[c]="Center")});var o=[];for(var r in t)null!=t[r]&&o.push(r);return S(x||(x=v(["",""])),o.map(function(e){return S(y||(y=v(['\n          <div class="SNS horizontalGuide ','" style="top:','px"/>\n        '])),t[e],e)}))}(),function(){if(null==h._shapedStickers)return"";var e={},n={};h._StickerList.filter(function(e){return!$(e)}).forEach(function(t){var o=t.Geometry,r=o.x,i=o.Width,a=Math.round(r),s=Math.round(r+i/2),l=Math.round(r+i);e[a]=e[l]=!0,n[s]=!0});var t={};h._shapedStickers.forEach(function(o){var r=o.Geometry,i=r.x,a=r.Width,s=Math.round(i),l=Math.round(i+a/2),c=Math.round(i+a);e[s]&&(t[s]="Edge"),e[l]&&"Edge"!==t[l]&&(t[l]="Center"),e[c]&&(t[c]="Edge"),n[s]&&"Edge"!==t[s]&&(t[s]="Center"),n[l]&&"Edge"!==t[l]&&(t[l]="Center"),n[c]&&"Edge"!==t[c]&&(t[c]="Center")});var o=[];for(var r in t)null!=t[r]&&o.push(r);return S(b||(b=v(["",""])),o.map(function(e){return S(w||(w=v(['\n          <div class="SNS verticalGuide ','" style="left:','px"/>\n        '])),t[e],e)}))}())},h}(p),T=/*#__PURE__*/function(e){function n(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this)._Sticker=void 0,n}k(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this._Sticker;e._View=this.base,null!=e._onMount&&e._onMount()},t.componentWillUnmount=function(){var e=this._Sticker;e._View=void 0,null!=e._onUnmount&&e._onUnmount()},t.render=function(e){var n=e.Sticker,t=e.selectable,r=e.selected,i=e.SelectionFrameStyle,a=e.Geometry,s=e.builtinSelection,c=e.builtinDragging;this._Sticker=n;var d=a.x,h=a.y,p=a.Width,f=a.Height;l("sticker x position",d),l("sticker y position",h),o("sticker width",p),o("sticker height",f);var g=null!=d&&null!=p&&null!=h&&null!=f?"left:"+d+"px; top:"+h+"px; width:"+p+"px; height:"+f+"px; right:auto; bottom:auto;":"";return S(D||(D=v(['<div class="\n        SNS Sticker '," ",'\n      " style="\n        ',";\n        ","\n        ",'\n      ">\n        ',"\n      </div>"])),t?"selectable":"",r?"selected":"",g,r&&null!=i?"outline:"+i+";":"",u(n)||"",t?n.Rendering({builtinSelection:s,builtinDragging:c}):n.Rendering())},n}(p),U=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}return k(n,e),n.prototype.render=function(e){var n=e.Sticker,t=e.onPointerEvent,o=_(e,W),r=n.Geometry,i=r.x,a=r.y,s=r.Width,l=r.Height,c=null!=i&&null!=s&&null!=a&&null!=l?"left:"+i+"px; top:"+a+"px; width:"+s+"px; height:"+l+"px; right:auto; bottom:auto;":"";return S(B||(B=v(['<div class="SNS Cover" style="','" ...',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      />"])),c,o,t,t,t,t)},n}(p),R=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}return k(n,e),n.prototype.render=function(e){var n,t,o=e.Mode,r=e.Geometry,i=e.onPointerEvent,a=_(e,V),s=r.x,l=r.y,c=r.Width,d=r.Height,u=s-8,h=Math.round(s+c/2)-4,p=s+c,f=l-8,g=Math.round(l+d/2)-4,k=l+d;switch(o){case"nw":n="left:"+u+"px; top:"+f+"px;",t="nwse";break;case"n":n="left:"+h+"px; top:"+f+"px;",t="ns";break;case"ne":n="left:"+p+"px; top:"+f+"px;",t="nesw";break;case"e":n="left:"+p+"px; top:"+g+"px;",t="ew";break;case"se":n="left:"+p+"px; top:"+k+"px;",t="nwse";break;case"s":n="left:"+h+"px; top:"+k+"px;",t="ns";break;case"sw":n="left:"+u+"px; top:"+k+"px;",t="nesw";break;case"w":n="left:"+u+"px; top:"+g+"px;",t="ew"}return t="cursor:"+t+"-resize",S(H||(H=v(['<div class="SNS ShapeHandle" style="'," ",'" ...',"\n        onPointerDown="," onPointerMove=","\n        onPointerUp="," onPointerCancel=","\n      />"])),n,t,a,i,i,i,i)},n}(p);window.SNS_BoardView=O,document.dispatchEvent(new CustomEvent("SNS_BoardView",{detail:window.SNS_BoardView}));export{O as SNS_BoardView};
//# sourceMappingURL=sns-boardview.js.map
