import{allowTextline as e,allowListSatisfying as t,allowOneOf as n,allowOrdinal as o,allowFunction as i,allowText as r,allowBoolean as s,allowCardinal as a,allowInteger as l}from"javascript-interface-library";import{allowBoard as d,ValueIsSticker as c,CSSStyleOfVisual as h}from"shareable-note-stickers";import S from"svelte-coordinate-conversion";import{Component as u,html as p}from"htm/preact";import{DragClickRecognizerFor as k,DragRecognizerFor as g}from"protoux";function _(e,t){if(null==e)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}const m=["Sticker","onPointerEvent"],$=["Mode","Geometry","onPointerEvent"];let x,f,b,y,v,w,M,G,E,C,L,N,P,D,B=e=>e;const{fromDocumentTo:H}=S,W=document.createElement("style");W.setAttribute("id","SNS Stylesheet"),W.innerHTML="/*******************************************************************************\n*                                                                              *\n*                        Shareable Note Stickers (SNS)                         *\n*                                                                              *\n*******************************************************************************/\n\n/**** all SNS elements are absolutely positioned ****/\n\n  .SNS {\n    display:block; position:absolute;\n    margin:0px; padding:0px;\n    background:none; border:none; border-radius:0px; outline:none;\n  }\n\n/**** Error Indicator ****/\n\n  .SNS.ErrorIndicator {\n    overflow:hidden;\n    left:0px; top:0px; width:24px; height:24px;\n    background:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E\");\n    pointer-events:auto;\n  }\n\n\n/**** BoardView ****/\n\n  .SNS.BoardView {\n    left:0px; top:0px; right:0px; bottom:0px;\n  }\n\n/**** Sticker and Contents, Cover ****/\n\n  .SNS.Sticker {}\n  .SNS.Sticker > .SNS {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    display:block; position:absolute;\n    left:0px; top:0px; width:100%; height:100%; right:auto; bottom:auto;\n  }\n\n  .SNS.Cover {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    z-index:1000000;\n  }\n\n/**** Selection Markers ****/\n\n  .SNS.Sticker.selected, .SNS.Cover[selected] {\n    outline:dotted 2px orangered;\n  }\n\n  .SNS.ShapeHandle {\n    width:8px; height:8px;\n    background:orangered; border:solid 1px darkgray;\n    z-index:1000001; /* above .SNS.Cover */\n  }\n\n/**** Selection Lasso ****/\n\n  .SNS.Lasso {\n    background:rgba(255,69,0, 0.1); /* border:dashed 2px orangered; */\n  }\n\n/**** Dragging Guides ****/\n\n  .SNS.horizontalGuide.Edge {\n    left:0px; right:0px; height:1px;\n    border-top:dashed 1px orangered;\n  }\n  .SNS.verticalGuide.Edge {\n    top:0px; bottom:0px; width:1px;\n    border-left:dashed 1px orangered;\n  }\n\n  .SNS.horizontalGuide.Center {\n    left:0px; right:0px; height:1px;\n    border-top:dotted 1px orangered;\n  }\n  .SNS.verticalGuide.Center {\n    top:0px; bottom:0px; width:1px;\n    border-left:dotted 1px orangered;\n  }\n\n/**** Placeholder ****/\n\n  .SNS.Placeholder {\n    display:block; position:relative;\n    width:100%; height:100%;\n  }\n\n  .SNS.Placeholder > * {\n    display:block; position:absolute;\n    left:50%; top:50%;\n    transform:translate(-55%,-50%);\n    white-space:nowrap;\n  }\n\n",document.head.appendChild(W);class V extends u{constructor(...e){super(...e),this._Board=void 0,this._StickerList=[],this._pointedSticker=void 0,this._selectedStickers=[],this._SelectionLimit=Infinity,this._LassoStart=void 0,this._LassoEnd=void 0,this._SelectionBeforeLasso=[],this._ShapeMode=void 0,this._shapedStickers=void 0,this._initialGeometries=void 0,this._SnapToGrid=!1,this._GridWidth=1,this._GridHeight=1,this._StickerRecognizerSlot={},this._ShapeHandleRecognizerSlot={},this._LassoRecognizerSlot={},this.state={Value:0}}_mountBoard(e){null!=e&&null!=this.base&&(e._View=this.base,null!=e._onMount&&e._onMount()),this._Board=e}_unmountBoard(){const e=this._Board;null!=e&&(e._View=void 0,null!=e._onUnmount&&e._onUnmount())}componentDidMount(){this._mountBoard(this._Board)}componentWillUnmount(){this._unmountBoard()}rerender(){this.setState({Value:this.state.Value+1})}render(l){const S=this;let{Classes:u,Board:_,StickerList:m,Placeholder:$,Mode:N,SelectionLimit:P,selectedStickers:D,onSelectionChange:W,onStickerSelected:V,onStickerDeselected:U,SelectionFrameStyle:R,SelectionHandleStyle:I,LassoMode:O,onGeometryChange:K,SnapToGrid:j,GridWidth:A,GridHeight:Z}=l;function q(){S._pointedSticker=void 0,S._shapedStickers=void 0,S._initialGeometries=void 0}function J(){null!=S._shapedStickers&&oe(S._shapedStickers,S._initialGeometries),q()}this._Board!==_&&(this._unmountBoard(),this._mountBoard(_)),e("board CSS class names",u),d("board",_),t("sticker list",m,c),e("placeholder text",$),n("board mode",N,["edit","run"]),o("selection limit",P),t("list of selected stickers",D,c),i("selection change callback",W),i("selection callback",V),i("deselection callback",U),e("selection frame CSS style",R),r("selection handle CSS style",I),n("lasso selection mode",O,["touch","contain"]),i("geometry change callback",K),s('"SnapToGrid" mode',j),a("grid width",A),a("grid height",Z),null==u&&(u=""),null==$&&($="(empty)"),null==N&&(N="run"),null==P&&(P=Infinity),null==D&&(D=[]),null==I&&(I="background:orangered; border:solid 1px darkgray"),null==O&&(O="contain"),null==j&&(j=!1),null==A&&(A=10),null==Z&&(Z=10);const Q=new Set;function X(e,t=[]){const n=e.slice();t.forEach(e=>{n.indexOf(e)<0&&n.push(e)}),D.length>S._SelectionLimit&&(n.length=S._SelectionLimit);const o=[],i=[];n.forEach(e=>{S._selectedStickers.indexOf(e)<0&&o.push(e)}),S._selectedStickers.forEach(e=>{n.indexOf(e)<0&&i.push(e)}),D=S._selectedStickers=n,(o.length>0||i.length>0)&&(J(),null!=W&&W(D)),i.length>0&&null!=U&&i.forEach(e=>{U(e)}),o.length>0&&null!=V&&o.forEach(e=>{V(e)})}function Y(e){return D.indexOf(e)>=0}function ee(){const{x:e,y:t}=S._LassoStart,{x:n,y:o}=S._LassoEnd||S._LassoStart;return{x:e<=n?e:n,y:t<=o?t:o,Width:e<=n?n-e:e-n,Height:t<=o?o-t:t-o}}function te(e,t){S._LassoEnd={x:e,y:t},X(S._SelectionBeforeLasso,function(){let{x:e,y:t,Width:n,Height:o}=ee(),i=e+n,r=t+o;return S._StickerList.filter("touch"===O?n=>{if(!n.isVisible||n.isLocked)return!1;if("run"===N&&!n.isSelectable)return!1;const{x:o,y:s,Width:a,Height:l}=n.Geometry;return e<=o+a&&o<=i&&t<=s+l&&s<=r}:n=>{if(!n.isVisible||n.isLocked)return!1;if("run"===N&&!n.isSelectable)return!1;const{x:o,y:s,Width:a,Height:l}=n.Geometry;return e<=o&&o+a<=i&&t<=s&&s+l<=r})}())}D=D.filter(e=>c(e)&&!Q.has(e)?(Q.add(e),!0):(J(),!1)),D.length>P&&X(D.slice(0,P)),S._StickerList=m,S._selectedStickers=D,S._SelectionLimit=P,S._SnapToGrid=j,S._GridWidth=A,S._GridHeight=Z;const ne=k(S._LassoRecognizerSlot,{onlyFrom:".SNS.BoardView,.SNS.Sticker,.SNS.Sticker *",neverFrom:".SNS.Sticker.selectable,.SNS.Sticker.selectable *",Threshold:4,onDragStarted:(e,t,n,o)=>{S._SelectionBeforeLasso=D.slice(),({left:e,top:t}=H("local",{left:e,top:t},S.base)),S._LassoStart={x:e,y:t},te(e,t),S.rerender()},onDragContinued:(e,t,n,o)=>{te(S._LassoStart.x+n,S._LassoStart.y+o),S.rerender()},onDragFinished:(e,t,n,o)=>{te(S._LassoStart.x+n,S._LassoStart.y+o),S._LassoStart=S._LassoEnd=void 0,S._SelectionBeforeLasso=[],S.rerender()},onDragCancelled:(e,t,n,o)=>{S._LassoStart=S._LassoEnd=void 0,X(S._SelectionBeforeLasso),S._SelectionBeforeLasso=[],S.rerender()},onClicked:function(){X([])}});function oe(e,t){null!=K&&(K(e,t),S.rerender())}function ie(e,t,n,o,i){if(null==K)return;let r=0,s=0,a=0,l=0;switch(t){case"nw":r=n,a=-n,s=o,l=-o;break;case"n":s=o,l=-o;break;case"ne":a=n,s=o,l=-o;break;case"e":a=n;break;case"se":a=n,l=o;break;case"s":l=o;break;case"sw":r=n,a=-n,l=o;break;case"w":r=n,a=-n;break;case"c":r=n,s=o}null==i&&(i=S._initialGeometries),oe(e,i.map(e=>{let n=Math.max(0,e.Width+a),o=Math.max(0,e.Height+l),i=e.x+r,d=i+n,c=e.y+s,h=c+o;if(S._SnapToGrid){let e=S._GridWidth*Math.round(i/S._GridWidth),r=S._GridWidth*Math.round(d/S._GridWidth),s=S._GridHeight*Math.round(c/S._GridHeight),a=S._GridHeight*Math.round(h/S._GridHeight);switch(t){case"nw":i=Math.min(e,d),c=Math.min(s,h);break;case"n":c=Math.min(s,h);break;case"ne":d=Math.max(i,r),c=Math.min(s,h);break;case"e":d=Math.max(i,r);break;case"se":d=Math.max(i,r),h=Math.max(c,a);break;case"s":h=Math.max(c,a);break;case"sw":i=Math.min(e,d),h=Math.max(c,a);break;case"w":i=Math.min(e,d);break;case"c":i=e,d=i+n,c=s,h=c+o}}return{x:i,y:c,Width:d-i,Height:h-c}}))}const re=k(S._StickerRecognizerSlot,{onlyFrom:".SNS.Cover",Threshold:4,onDragStarted:(e,t,n,o,i)=>{Y(S._pointedSticker)||(i.shiftKey||i.metaKey?X([S._pointedSticker],S._selectedStickers):X([S._pointedSticker])),S._shapedStickers=S._selectedStickers,S._initialGeometries=S._selectedStickers.map(e=>e.Geometry),ie(S._shapedStickers,"c",n,o)},onDragContinued:(e,t,n,o)=>{null!=S._shapedStickers&&ie(S._shapedStickers,"c",n,o)},onDragFinished:(e,t,n,o)=>{null!=S._shapedStickers&&(ie(S._shapedStickers,"c",n,o),q())},onDragCancelled:(e,t,n,o)=>{J()},onClicked:(e,t,n)=>{if(0===P)return;const o=S._pointedSticker;let i,r,s=!1;n.shiftKey||n.metaKey?(s=!0,Y(o)?(r=[o],D=D.filter(e=>e!==o)):(D.length===P&&(r=[D.shift()]),i=[o],D.push(o))):(r=D.filter(e=>e!==o),s=!Y(o),i=s?[o]:[],D=[o]),s&&null!=W&&W(D),null!=r&&null!=U&&r.forEach(e=>{U(e)}),null!=i&&null!=V&&i.forEach(e=>{V(e)}),s&&S.rerender()}}),se=g(S._ShapeHandleRecognizerSlot,{onlyFrom:".SNS.ShapeHandle",Threshold:0,onDragStarted:(e,t,n,o)=>{S._shapedStickers=S._selectedStickers,S._initialGeometries=S._selectedStickers.map(e=>e.Geometry),ie(S._shapedStickers,S._ShapeMode,n,o)},onDragContinued:(e,t,n,o)=>{null!=S._shapedStickers&&ie(S._shapedStickers,S._ShapeMode,n,o)},onDragFinished:(e,t,n,o)=>{null!=S._shapedStickers&&(ie(S._shapedStickers,S._ShapeMode,n,o),q())},onDragCancelled:(e,t,n,o)=>{J()}}),ae=(e,t)=>{S._ShapeMode=t,se(e)},le=new WeakMap,de=new WeakMap,ce=null==_?void 0:h(_);return p(v||(v=B`<div class="SNS BoardView ${0}" style=${0}
        onPointerDown=${0} onPointerMove=${0}
        onPointerUp=${0} onPointerCancel=${0}
      >
        ${0}

        ${0}

        ${0}
        ${0}
        ${0}
        ${0}
      </div>`),u,ce,ne,ne,ne,ne,null==_?p(w||(w=B`<div class="SNS Placeholder"><div>(no Board to show)</div></div>`)):null==m?p(M||(M=B`<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>`)):m.map(e=>{if(!e.isVisible)return"";const t=e.Geometry,n=e.isSelectable,o=Y(e);return p(G||(G=B`<${0} Sticker=${0} key=${0}
                  selected=${0}
                  SelectionFrameStyle=${0}
                  Geometry=${0}
                  selectable=${0}
                  builtinDragging=${0}
                  builtinSelection=${0}
                />`),F,e,e.Id,o&&"run"===N,R,t,n,n&&function(e){let t=le.get(e);return null==t&&le.set(e,t=g(e,{onlyFrom:".builtinDraggable",neverFrom:".notBuiltinDraggable",Threshold:4,onDragStarted:(t,n,o,i,r)=>{S._shapedStickers=[e],de.set(e,e.Geometry),ie([e],"c",o,i,[de.get(e)])},onDragContinued:(t,n,o,i)=>{de.has(e)&&ie([e],"c",o,i,[de.get(e)])},onDragFinished:(t,n,o,i)=>{de.has(e)&&(ie([e],"c",o,i,[de.get(e)]),de.delete(e),S._shapedStickers=[])},onDragCancelled:(t,n,o,i)=>{de.has(e)&&oe([e],[de.get(e)]),de.delete(e),S._shapedStickers=[]}})),t}(e),n&&function(e){return function(t){0===t.button&&X([e])}}(e))}),null!=m&&"edit"===N?m.map(e=>{if(!e.isVisible)return"";const t=Y(e);return p(E||(E=B`
                <${0} Sticker=${0} key=${0}
                  selected=${0}
                  onPointerEvent=${0}
                />
              `),z,e,e.Id+"c",t,t=>((e,t)=>{S._ShapeMode="c",S._pointedSticker=t,re(e)})(t,e))}):"",D.length>0?D.filter(e=>e.isVisible).map(e=>{const t=e.Id,n=e.Geometry;return p(C||(C=B`
                <${0} key=${0} Mode="nw" Geometry=${0}
                  onPointerEvent=${0}/>
                <${0} key=${0}  Mode="n"  Geometry=${0}
                  onPointerEvent=${0}/>
                <${0} key=${0} Mode="ne" Geometry=${0}
                  onPointerEvent=${0}/>
                <${0} key=${0}  Mode="e"  Geometry=${0}
                  onPointerEvent=${0}/>
                <${0} key=${0} Mode="se" Geometry=${0}
                  onPointerEvent=${0}/>
                <${0} key=${0}  Mode="s"  Geometry=${0}
                  onPointerEvent=${0}/>
                <${0} key=${0} Mode="sw" Geometry=${0}
                  onPointerEvent=${0}/>
                <${0} key=${0}  Mode="w"  Geometry=${0}
                  onPointerEvent=${0}/>
              `),T,t+"nw",n,e=>ae(e,"nw"),T,t+"n",n,e=>ae(e,"n"),T,t+"ne",n,e=>ae(e,"ne"),T,t+"e",n,e=>ae(e,"e"),T,t+"se",n,e=>ae(e,"se"),T,t+"s",n,e=>ae(e,"s"),T,t+"sw",n,e=>ae(e,"sw"),T,t+"w",n,e=>ae(e,"w"))}):"",null==this._LassoStart?"":p(L||(L=B`<div class="SNS Lasso" style=${0}></>`),function(){const{x:e,y:t,Width:n,Height:o}=ee();return`left:${e}px; top:${t}px; width:${n}px; height:${o}px`}()),function(){if(null==S._shapedStickers)return"";const e={},t={};S._StickerList.filter(e=>!Y(e)).forEach(n=>{const{y:o,Height:i}=n.Geometry,r=Math.round(o),s=Math.round(o+i/2),a=Math.round(o+i);e[r]=e[a]=!0,t[s]=!0});const n={};S._shapedStickers.forEach(o=>{const{y:i,Height:r}=o.Geometry,s=Math.round(i),a=Math.round(i+r/2),l=Math.round(i+r);e[s]&&(n[s]="Edge"),e[a]&&"Edge"!==n[a]&&(n[a]="Center"),e[l]&&(n[l]="Edge"),t[s]&&"Edge"!==n[s]&&(n[s]="Center"),t[a]&&"Edge"!==n[a]&&(n[a]="Center"),t[l]&&"Edge"!==n[l]&&(n[l]="Center")});const o=[];for(let e in n)null!=n[e]&&o.push(e);return p(x||(x=B`${0}`),o.map(e=>p(f||(f=B`
          <div class="SNS horizontalGuide ${0}" style="top:${0}px"/>
        `),n[e],e)))}(),function(){if(null==S._shapedStickers)return"";const e={},t={};S._StickerList.filter(e=>!Y(e)).forEach(n=>{const{x:o,Width:i}=n.Geometry,r=Math.round(o),s=Math.round(o+i/2),a=Math.round(o+i);e[r]=e[a]=!0,t[s]=!0});const n={};S._shapedStickers.forEach(o=>{const{x:i,Width:r}=o.Geometry,s=Math.round(i),a=Math.round(i+r/2),l=Math.round(i+r);e[s]&&(n[s]="Edge"),e[a]&&"Edge"!==n[a]&&(n[a]="Center"),e[l]&&(n[l]="Edge"),t[s]&&"Edge"!==n[s]&&(n[s]="Center"),t[a]&&"Edge"!==n[a]&&(n[a]="Center"),t[l]&&"Edge"!==n[l]&&(n[l]="Center")});const o=[];for(let e in n)null!=n[e]&&o.push(e);return p(b||(b=B`${0}`),o.map(e=>p(y||(y=B`
          <div class="SNS verticalGuide ${0}" style="left:${0}px"/>
        `),n[e],e)))}())}}class F extends u{constructor(...e){super(...e),this._Sticker=void 0}componentDidMount(){const e=this._Sticker;e._View=this.base,null!=e._onMount&&e._onMount()}componentWillUnmount(){const e=this._Sticker;e._View=void 0,null!=e._onUnmount&&e._onUnmount()}render(e){let{Sticker:t,selectable:n,selected:i,SelectionFrameStyle:r,Geometry:s,builtinSelection:a,builtinDragging:d}=e;this._Sticker=t;let{x:c,y:S,Width:u,Height:k}=s;l("sticker x position",c),l("sticker y position",S),o("sticker width",u),o("sticker height",k);const g=null!=c&&null!=u&&null!=S&&null!=k?`left:${c}px; top:${S}px; width:${u}px; height:${k}px; right:auto; bottom:auto;`:"";return p(N||(N=B`<div class="
        SNS Sticker ${0} ${0}
      " style="
        ${0};
        ${0}
        ${0}
      ">
        ${0}
      </div>`),n?"selectable":"",i?"selected":"",g,i&&null!=r?`outline:${r};`:"",h(t)||"",n?t.Rendering({builtinSelection:a,builtinDragging:d}):t.Rendering())}}class z extends u{render(e){let{Sticker:t,onPointerEvent:n}=e,o=_(e,m),{x:i,y:r,Width:s,Height:a}=t.Geometry;const l=null!=i&&null!=s&&null!=r&&null!=a?`left:${i}px; top:${r}px; width:${s}px; height:${a}px; right:auto; bottom:auto;`:"";return p(P||(P=B`<div class="SNS Cover" style="
        ${0} ${0}
      " ...${0}
        onPointerDown=${0} onPointerMove=${0}
        onPointerUp=${0} onPointerCancel=${0}
      />`),l,t.isLocked?"pointer-events:none":"",o,n,n,n,n)}}class T extends u{render(e){let{Mode:t,Geometry:n,onPointerEvent:o}=e,i=_(e,$),{x:r,y:s,Width:a,Height:l}=n;const d=r-8,c=Math.round(r+a/2)-4,h=r+a,S=s-8,u=Math.round(s+l/2)-4,k=s+l;let g,m;switch(t){case"nw":g=`left:${d}px; top:${S}px;`,m="nwse";break;case"n":g=`left:${c}px; top:${S}px;`,m="ns";break;case"ne":g=`left:${h}px; top:${S}px;`,m="nesw";break;case"e":g=`left:${h}px; top:${u}px;`,m="ew";break;case"se":g=`left:${h}px; top:${k}px;`,m="nwse";break;case"s":g=`left:${c}px; top:${k}px;`,m="ns";break;case"sw":g=`left:${d}px; top:${k}px;`,m="nesw";break;case"w":g=`left:${d}px; top:${u}px;`,m="ew"}return m="cursor:"+m+"-resize",p(D||(D=B`<div class="SNS ShapeHandle" style="${0} ${0}" ...${0}
        onPointerDown=${0} onPointerMove=${0}
        onPointerUp=${0} onPointerCancel=${0}
      />`),g,m,i,o,o,o,o)}}window.SNS_BoardView=V,document.dispatchEvent(new CustomEvent("SNS_BoardView",{detail:window.SNS_BoardView}));export{V as SNS_BoardView};
//# sourceMappingURL=sns-boardview.modern.js.map
