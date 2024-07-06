import{allowTextline as e,allowListSatisfying as t,allowOneOf as n,allowOrdinal as o,allowFunction as i,allowText as r,allowBoolean as s,allowCardinal as a,allowInteger as l}from"javascript-interface-library";import{allowBoard as d,ValueIsSticker as c,CSSStyleOfVisual as h}from"shareable-note-stickers";import u from"svelte-coordinate-conversion";import{Component as S,html as p}from"htm/preact";import{DragClickRecognizerFor as g,DragRecognizerFor as m}from"protoux";function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(null,arguments)}function k(e,t){if(null==e)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}const f=["Sticker","onPointerEvent"],$=["Mode","Geometry","onPointerEvent"];let x,b,v,y,w,M,D,C,P,G,E,N,L,z,H,W,B,R,F=e=>e;const{fromDocumentTo:V}=u,T=document.createElement("style");T.setAttribute("id","SNS Stylesheet"),T.innerHTML="/*******************************************************************************\n*                                                                              *\n*                        Shareable Note Stickers (SNS)                         *\n*                                                                              *\n*******************************************************************************/\n\n/**** all SNS elements are absolutely positioned ****/\n\n  .SNS {\n    display:block; position:absolute;\n    margin:0px; padding:0px;\n    background:none; border:none; border-radius:0px; outline:none;\n  }\n\n/**** elements of class \"SNS Content\" cover their whole container ****/\n\n  .SNS.Content {\n    display:block; position:absolute;\n    left:0px; top:0px; width:100%; height:100%;\n  }\n\n/**** \"brokenSticker\" and Error Indicator ****/\n\n  .SNS.brokenSticker {\n    overflow:hidden;\n    border:dotted 1px orange; background:rgba(255,0,0,0.1);\n  }\n\n  .SNS.ErrorIndicator {\n    overflow:hidden;\n    left:0px; top:0px; width:24px; height:24px;\n    background:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E\");\n    pointer-events:auto;\n  }\n\n\n/**** BoardView ****/\n\n  .SNS.BoardView {\n    left:0px; top:0px; right:0px; bottom:0px;\n  }\n\n/**** Sticker and Contents, Cover ****/\n\n  .SNS.Sticker {}\n  .SNS.Sticker > .SNS {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    display:block; position:absolute;\n    left:0px; top:0px; width:100%; height:100%; right:auto; bottom:auto;\n  }\n\n  .SNS.Cover {\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;\n    user-select:none;\n\n    z-index:1000000;\n  }\n\n/**** Selection Markers ****/\n\n  .SNS.Sticker.selected, .SNS.Cover[selected] {\n    outline:dotted 2px orangered;\n  }\n\n  .SNS.ShapeHandle {\n    width:8px; height:8px;\n    background:orangered; border:solid 1px darkgray;\n    z-index:1000001; /* above .SNS.Cover */\n  }\n\n/**** Selection Lasso ****/\n\n  .SNS.Lasso {\n    background:rgba(255,69,0, 0.1); /* border:dashed 2px orangered; */\n  }\n\n/**** Dragging Guides ****/\n\n  .SNS.horizontalGuide.Edge {\n    left:0px; right:0px; height:1px;\n    border-top:dashed 1px orangered;\n  }\n  .SNS.verticalGuide.Edge {\n    top:0px; bottom:0px; width:1px;\n    border-left:dashed 1px orangered;\n  }\n\n  .SNS.horizontalGuide.Center {\n    left:0px; right:0px; height:1px;\n    border-top:dotted 1px orangered;\n  }\n  .SNS.verticalGuide.Center {\n    top:0px; bottom:0px; width:1px;\n    border-left:dotted 1px orangered;\n  }\n\n/**** Placeholder ****/\n\n  .SNS.Placeholder {\n    display:block; position:relative;\n    width:100%; height:100%;\n  }\n\n  .SNS.Placeholder > * {\n    display:block; position:absolute;\n    left:50%; top:50%;\n    transform:translate(-55%,-50%);\n    white-space:nowrap;\n  }\n\n/**** custom Dialogs ****/\n\n  .PUX.Dialog > .ContentPane {\n    position:absolute; left:0px; top:30px; right:0px; bottom:0px;\n  }\n  .PUX.ResizableDialog > .ContentPane {\n    position:absolute; left:0px; top:30px; right:0px; bottom:10px;\n  }\n",document.head.appendChild(T);class O extends S{constructor(...e){super(...e),this._Board=void 0,this._Mode="enclose",this._StickerList=[],this._pointedSticker=void 0,this._selectedStickers=[],this._SelectionLimit=Infinity,this._LassoStart=void 0,this._LassoEnd=void 0,this._SelectionBeforeLasso=[],this._ShapeMode=void 0,this._shapedStickers=void 0,this._initialGeometries=void 0,this._SnapToGrid=!1,this._GridWidth=1,this._GridHeight=1,this._StickerRecognizerSlot={},this._ShapeHandleRecognizerSlot={},this._LassoRecognizerSlot={},this.state={Value:0}}_mountBoard(e){null!=e&&null!=this.base&&(e._View=this.base,null!=e._onMount&&e._onMount()),this._Board=e}_unmountBoard(){const e=this._Board;null!=e&&(e._View=void 0,null!=e._onUnmount&&e._onUnmount())}componentDidMount(){this._mountBoard(this._Board)}componentWillUnmount(){this._unmountBoard()}rerender(e){this.setState({Value:this.state.Value+1})}render(l){const u=this;let{PUX:S,Classes:_,Board:k,StickerList:f,Placeholder:$,Mode:L,SelectionLimit:z,selectedStickers:H,onSelectionChange:W,onStickerSelected:B,onStickerDeselected:R,SelectionFrameStyle:T,SelectionHandleStyle:O,LassoMode:j,onGeometryChange:K,SnapToGrid:Z,GridWidth:q,GridHeight:J}=l;function Q(){u._pointedSticker=void 0,u._shapedStickers=void 0,u._initialGeometries=void 0}function Y(){null!=u._shapedStickers&&se(u._shapedStickers,u._initialGeometries),Q()}this._Board!==k&&(this._unmountBoard(),this._mountBoard(k)),e("board CSS class names",_),d("board",k),t("sticker list",f,c),e("placeholder text",$),n("board mode",L,["edit","run"]),o("selection limit",z),t("list of selected stickers",H,c),i("selection change callback",W),i("selection callback",B),i("deselection callback",R),e("selection frame CSS style",T),r("selection handle CSS style",O),n("lasso selection mode",j,["touch","enclose"]),i("geometry change callback",K),s('"SnapToGrid" mode',Z),a("grid width",q),a("grid height",J),null==_&&(_=""),null==$&&($="(empty)"),null==L&&(L="run"),null==z&&(z=Infinity),null==H&&(H=[]),null==O&&(O="background:orangered; border:solid 1px darkgray"),null==j&&(j="enclose"),null==Z&&(Z=!1),null==q&&(q=10),null==J&&(J=10);const ee=new Set;function te(e,t=[]){const n=e.slice();t.forEach(e=>{n.indexOf(e)<0&&n.push(e)}),H.length>u._SelectionLimit&&(n.length=u._SelectionLimit);const o=[],i=[];n.forEach(e=>{u._selectedStickers.indexOf(e)<0&&o.push(e)}),u._selectedStickers.forEach(e=>{n.indexOf(e)<0&&i.push(e)}),H=u._selectedStickers=n,(o.length>0||i.length>0)&&(Y(),null!=W&&W(H)),i.length>0&&null!=R&&i.forEach(e=>{R(e)}),o.length>0&&null!=B&&o.forEach(e=>{B(e)})}function ne(e){return u._selectedStickers.indexOf(e)>=0}function oe(){const{x:e,y:t}=u._LassoStart,{x:n,y:o}=u._LassoEnd||u._LassoStart;return{x:e<=n?e:n,y:t<=o?t:o,Width:e<=n?n-e:e-n,Height:t<=o?o-t:t-o}}function ie(e,t){u._LassoEnd={x:e,y:t},te(u._SelectionBeforeLasso,function(){let{x:e,y:t,Width:n,Height:o}=oe(),i=e+n,r=t+o;return u._StickerList.filter("touch"===j?n=>{if(!n.isVisible||n.isLocked)return!1;if("run"===u._Mode&&!n.isSelectable)return!1;const{x:o,y:s,Width:a,Height:l}=n.Geometry;return e<=o+a&&o<=i&&t<=s+l&&s<=r}:n=>{if(!n.isVisible||n.isLocked)return!1;if("run"===u._Mode&&!n.isSelectable)return!1;const{x:o,y:s,Width:a,Height:l}=n.Geometry;return e<=o&&o+a<=i&&t<=s&&s+l<=r})}())}H=H.filter(e=>c(e)&&!ee.has(e)?(ee.add(e),!0):(Y(),!1)),H.length>z&&te(H.slice(0,z)),u._Mode=L,u._StickerList=f,u._selectedStickers=H,u._SelectionLimit=z,u._SnapToGrid=Z,u._GridWidth=q,u._GridHeight=J;const re=g(u._LassoRecognizerSlot,{onlyFrom:".SNS.BoardView,.SNS.Sticker,.SNS.Sticker *",neverFrom:".SNS.Sticker.selectable,.SNS.Sticker.selectable *",Threshold:4,onDragStarted:(e,t,n,o)=>{u._SelectionBeforeLasso=u._selectedStickers.slice(),({left:e,top:t}=V("local",{left:e,top:t},u.base)),u._LassoStart={x:e,y:t},ie(e,t),u.rerender()},onDragContinued:(e,t,n,o)=>{ie(u._LassoStart.x+n,u._LassoStart.y+o),u.rerender()},onDragFinished:(e,t,n,o)=>{ie(u._LassoStart.x+n,u._LassoStart.y+o),u._LassoStart=u._LassoEnd=void 0,u._SelectionBeforeLasso=[],u.rerender()},onDragCancelled:(e,t,n,o)=>{u._LassoStart=u._LassoEnd=void 0,te(u._SelectionBeforeLasso),u._SelectionBeforeLasso=[],u.rerender()},onClicked:function(){te([])}});function se(e,t){null!=K&&(K(e,t),u.rerender())}function ae(e,t,n,o,i){if(null==K)return;let r=0,s=0,a=0,l=0;switch(t){case"nw":r=n,a=-n,s=o,l=-o;break;case"n":s=o,l=-o;break;case"ne":a=n,s=o,l=-o;break;case"e":a=n;break;case"se":a=n,l=o;break;case"s":l=o;break;case"sw":r=n,a=-n,l=o;break;case"w":r=n,a=-n;break;case"c":r=n,s=o}null==i&&(i=u._initialGeometries),se(e,i.map(e=>{let n=Math.max(0,e.Width+a),o=Math.max(0,e.Height+l),i=e.x+r,d=i+n,c=e.y+s,h=c+o;if(u._SnapToGrid){let e=u._GridWidth*Math.round(i/u._GridWidth),r=u._GridWidth*Math.round(d/u._GridWidth),s=u._GridHeight*Math.round(c/u._GridHeight),a=u._GridHeight*Math.round(h/u._GridHeight);switch(t){case"nw":i=Math.min(e,d),c=Math.min(s,h);break;case"n":c=Math.min(s,h);break;case"ne":d=Math.max(i,r),c=Math.min(s,h);break;case"e":d=Math.max(i,r);break;case"se":d=Math.max(i,r),h=Math.max(c,a);break;case"s":h=Math.max(c,a);break;case"sw":i=Math.min(e,d),h=Math.max(c,a);break;case"w":i=Math.min(e,d);break;case"c":i=e,d=i+n,c=s,h=c+o}}return{x:i,y:c,Width:d-i,Height:h-c}}))}const le=g(u._StickerRecognizerSlot,{onlyFrom:".SNS.Cover",Threshold:4,onDragStarted:(e,t,n,o,i)=>{ne(u._pointedSticker)||(i.shiftKey||i.metaKey?te([u._pointedSticker],u._selectedStickers):te([u._pointedSticker])),u._shapedStickers=u._selectedStickers,u._initialGeometries=u._selectedStickers.map(e=>e.Geometry),ae(u._shapedStickers,"c",n,o)},onDragContinued:(e,t,n,o)=>{null!=u._shapedStickers&&ae(u._shapedStickers,"c",n,o)},onDragFinished:(e,t,n,o)=>{null!=u._shapedStickers&&(ae(u._shapedStickers,"c",n,o),Q())},onDragCancelled:(e,t,n,o)=>{Y()},onClicked:(e,t,n)=>{if(0===z)return;const o=u._pointedSticker;let i,r,s=!1;n.shiftKey||n.metaKey?(s=!0,ne(o)?(r=[o],H=H.filter(e=>e!==o)):(H.length===z&&(r=[H.shift()]),i=[o],H.push(o))):(r=H.filter(e=>e!==o),s=!ne(o),i=s?[o]:[],H=[o]),s&&null!=W&&W(H),null!=r&&null!=R&&r.forEach(e=>{R(e)}),null!=i&&null!=B&&i.forEach(e=>{B(e)}),s&&u.rerender()}}),de=m(u._ShapeHandleRecognizerSlot,{onlyFrom:".SNS.ShapeHandle",Threshold:0,onDragStarted:(e,t,n,o)=>{u._shapedStickers=u._selectedStickers,u._initialGeometries=u._selectedStickers.map(e=>e.Geometry),ae(u._shapedStickers,u._ShapeMode,n,o)},onDragContinued:(e,t,n,o)=>{null!=u._shapedStickers&&ae(u._shapedStickers,u._ShapeMode,n,o)},onDragFinished:(e,t,n,o)=>{null!=u._shapedStickers&&(ae(u._shapedStickers,u._ShapeMode,n,o),Q())},onDragCancelled:(e,t,n,o)=>{Y()}});function ce(e,t){u._ShapeMode=t,de(e)}const he=new WeakMap,ue=new WeakMap,Se=null==k?void 0:h(k);return p(w||(w=F`<div class="SNS BoardView ${0}" style=${0}
        onPointerDown=${0} onPointerMove=${0}
        onPointerUp=${0} onPointerCancel=${0}
      >
        ${0}

        ${0}

        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
      </div>`),_,Se,re,re,re,re,null==k?p(M||(M=F`<div class="SNS Placeholder"><div>(no Board to show)</div></div>`)):null==f?p(D||(D=F`<div class="SNS Placeholder"><div>(no Stickers to show)</div></div>`)):f.map(e=>{if(!e.isVisible)return"";const t=e.Geometry,n=e.isSelectable,o=ne(e);return p(C||(C=F`<${0} Sticker=${0} key=${0}
                  selected=${0}
                  SelectionFrameStyle=${0}
                  Geometry=${0}
                  selectable=${0}
                  builtinDragging=${0}
                  builtinSelection=${0}
                />`),U,e,e.Id,o&&"run"===L,T,t,n,n&&function(e){let t=he.get(e);return null==t&&he.set(e,t=g(e,{onlyFrom:".builtinDraggable",neverFrom:".notBuiltinDraggable",Threshold:4,onDragStarted:(t,n,o,i,r)=>{te([e]),u._shapedStickers=[e],ue.set(e,e.Geometry),ae([e],"c",o,i,[ue.get(e)])},onDragContinued:(t,n,o,i)=>{ue.has(e)&&ae([e],"c",o,i,[ue.get(e)])},onDragFinished:(t,n,o,i)=>{ue.has(e)&&(ae([e],"c",o,i,[ue.get(e)]),ue.delete(e),u._shapedStickers=void 0)},onDragCancelled:(t,n,o,i)=>{ue.has(e)&&se([e],[ue.get(e)]),ue.delete(e),u._shapedStickers=void 0},onClicked:(t,n,o)=>{u._shapedStickers=void 0,0===o.button&&te([e])}})),t}(e),n&&function(e){return function(t){0===t.button&&te([e])}}(e))}),null!=f&&"edit"===L?f.map(e=>{if(!e.isVisible)return"";const t=ne(e);return p(P||(P=F`
                <${0} Sticker=${0} key=${0}
                  selected=${0}
                  onPointerEvent=${0}
                />
              `),I,e,e.Id+"c",t,t=>function(e,t){u._ShapeMode="c",u._pointedSticker=t,le(e)}(t,e))}):"",H.length>0?H.filter(e=>e.isVisible).map(e=>{const t=e.Id,n=e.Geometry;return p(G||(G=F`
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
              `),A,t+"nw",n,e=>ce(e,"nw"),A,t+"n",n,e=>ce(e,"n"),A,t+"ne",n,e=>ce(e,"ne"),A,t+"e",n,e=>ce(e,"e"),A,t+"se",n,e=>ce(e,"se"),A,t+"s",n,e=>ce(e,"s"),A,t+"sw",n,e=>ce(e,"sw"),A,t+"w",n,e=>ce(e,"w"))}):"",null==this._LassoStart?"":p(E||(E=F`<div class="SNS Lasso" style=${0}></>`),function(){const{x:e,y:t,Width:n,Height:o}=oe();return`left:${e}px; top:${t}px; width:${n}px; height:${o}px`}()),function(){if(null==u._shapedStickers)return"";const e={},t={};u._StickerList.filter(e=>!ne(e)).forEach(n=>{const{y:o,Height:i}=n.Geometry,r=Math.round(o),s=Math.round(o+i/2),a=Math.round(o+i);e[r]=e[a]=!0,t[s]=!0});const n={};u._shapedStickers.forEach(o=>{const{y:i,Height:r}=o.Geometry,s=Math.round(i),a=Math.round(i+r/2),l=Math.round(i+r);e[s]&&(n[s]="Edge"),e[a]&&"Edge"!==n[a]&&(n[a]="Center"),e[l]&&(n[l]="Edge"),t[s]&&"Edge"!==n[s]&&(n[s]="Center"),t[a]&&"Edge"!==n[a]&&(n[a]="Center"),t[l]&&"Edge"!==n[l]&&(n[l]="Center")});const o=[];for(let e in n)null!=n[e]&&o.push(e);return p(x||(x=F`${0}`),o.map(e=>p(b||(b=F`
          <div class="SNS horizontalGuide ${0}" style="top:${0}px"/>
        `),n[e],e)))}(),function(){if(null==u._shapedStickers)return"";const e={},t={};u._StickerList.filter(e=>!ne(e)).forEach(n=>{const{x:o,Width:i}=n.Geometry,r=Math.round(o),s=Math.round(o+i/2),a=Math.round(o+i);e[r]=e[a]=!0,t[s]=!0});const n={};u._shapedStickers.forEach(o=>{const{x:i,Width:r}=o.Geometry,s=Math.round(i),a=Math.round(i+r/2),l=Math.round(i+r);e[s]&&(n[s]="Edge"),e[a]&&"Edge"!==n[a]&&(n[a]="Center"),e[l]&&(n[l]="Edge"),t[s]&&"Edge"!==n[s]&&(n[s]="Center"),t[a]&&"Edge"!==n[a]&&(n[a]="Center"),t[l]&&"Edge"!==n[l]&&(n[l]="Center")});const o=[];for(let e in n)null!=n[e]&&o.push(e);return p(v||(v=F`${0}`),o.map(e=>p(y||(y=F`
          <div class="SNS verticalGuide ${0}" style="left:${0}px"/>
        `),n[e],e)))}(),null==k?"":k.DialogList.map(e=>p(N||(N=F`<${0} key=${0} PUX=${0} Board=${0} Dialog=${0}/>`),X,e.Id,S,k,e)))}}class U extends S{constructor(...e){super(...e),this._Sticker=void 0}componentDidMount(){const e=this._Sticker;e._View=this.base,null!=e._onMount&&e._onMount()}componentWillUnmount(){const e=this._Sticker;e._View=void 0,null!=e._onUnmount&&e._onUnmount()}render(e){let{Sticker:t,selectable:n,selected:i,SelectionFrameStyle:r,Geometry:s,builtinSelection:a,builtinDragging:d}=e;this._Sticker=t;let{x:c,y:u,Width:S,Height:g}=s;l("sticker x position",c),l("sticker y position",u),o("sticker width",S),o("sticker height",g);const m=null!=c&&null!=S&&null!=u&&null!=g?`left:${c}px; top:${u}px; width:${S}px; height:${g}px; right:auto; bottom:auto;`:"";return p(L||(L=F`<div class="
        SNS Sticker ${0} ${0}
      " style="
        ${0};
        ${0}
        ${0}
      ">
        ${0}
      </div>`),n?"selectable":"",i?"selected":"",m,i&&null!=r?`outline:${r};`:"",h(t)||"",n?t.Rendering({builtinSelection:a,builtinDragging:d}):t.Rendering())}}class I extends S{render(e){let{Sticker:t,onPointerEvent:n}=e,o=k(e,f),{x:i,y:r,Width:s,Height:a}=t.Geometry;const l=null!=i&&null!=s&&null!=r&&null!=a?`left:${i}px; top:${r}px; width:${s}px; height:${a}px; right:auto; bottom:auto;`:"";return p(z||(z=F`<div class="SNS Cover" style="
        ${0} ${0}
      " ...${0}
        onPointerDown=${0} onPointerMove=${0}
        onPointerUp=${0} onPointerCancel=${0}
      />`),l,t.isLocked?"pointer-events:none":"",o,n,n,n,n)}}class X extends S{constructor(...e){super(...e),this._DragRecognizer=void 0,this._Dialog={},this._DragOffset={},this.state={Value:0}}rerender(){this.setState({Value:this.state.Value+1})}render(e){const{PUX:t,Board:n,Dialog:o}=e;let{Id:i,Name:r,Title:s,isResizable:a,x:l,y:d,Width:c,Height:h,minWidth:u,maxWidth:S,minHeight:g,maxHeight:k,Renderer:f,onClose:$}=o;c=Math.max(u,c),null!=S&&(c=Math.min(c,S)),h=Math.max(g,h),null!=k&&(h=Math.min(h,k)),l==-Number.MAX_SAFE_INTEGER&&(l=Math.max(0,(window.innerWidth-c)/2)),d==-Number.MAX_SAFE_INTEGER&&(d=Math.max(0,(window.innerHeight-h)/2)),l=Math.min(l,window.innerWidth-40),d=Math.max(0,Math.min(d,window.innerHeight-30));const x=this;x._Dialog={x:l,y:d,Width:c,Height:h};const b=(e,t,i,r)=>{"drag"===o._DragMode?v(i,r):y(i,r),n.bringDialogToFront(o.Name),n.rerender()},v=(e,t)=>{n.positionDialogAt(o.Name,x._DragOffset.x+e,x._DragOffset.y+t)},y=(e,t)=>{let i=x._Dialog.Width;switch(o._DragMode){case"resize-sw":i=Math.max(u,Math.min(x._DragOffset.Width-e,S||Infinity)),n.positionDialogAt(o.Name,x._DragOffset.x-(e=i-x._DragOffset.Width),x._DragOffset.y),i=x._DragOffset.Width+e;break;case"resize-se":i=Math.max(u,Math.min(x._DragOffset.Width+e,S||Infinity))}let r=Math.max(g,Math.min(x._DragOffset.Height+t,k||Infinity));n.sizeDialogTo(o.Name,i,r)};let w=x._DragRecognizer;null==w&&(w=x._DragRecognizer=m(this,{onlyFrom:".Titlebar,.leftResizer,.middleResizer,.rightResizer",neverFrom:".CloseButton",Threshold:4,onDragStarted:(e,t,n,i,r)=>{let s=r.target.classList;switch(o._DragMode=void 0,!0){case s.contains("leftResizer"):o._DragMode="resize-sw";break;case s.contains("middleResizer"):o._DragMode="resize-s";break;case s.contains("rightResizer"):o._DragMode="resize-se";break;default:o._DragMode="drag"}x._DragOffset=_({},x._Dialog),b(0,0,n,i)},onDragContinued:b,onDragFinished:b,onDragCancelled:b}));const M=`left:${l}px; top:${d}px; width:${c}px; height:${h}px; right:auto; bottom:auto;`;let D;try{D=f()}catch(e){console.error("Dialog rendering failed",e),D=p(H||(H=F`<div>(Dialog rendering failed)</div>`))}return p(W||(W=F`<div class="PUX ${0}Dialog" id=${0} style="
        position:fixed; ${0}
      " onPointerDown=${0}>
        <div class="ContentPane">${0}</div>

        <div class="Titlebar"
          onPointerDown=${0} onPointerUp=${0}
          onPointerMove=${0} onPointerCancel=${0}
        >
          <div class="Title">${0}</div>
          <img class="CloseButton" src="${0}/xmark.png"
            onClick=${0}/>
        </div>

        ${0}
      </>`),a?"Resizable":"",i,M,()=>n.bringDialogToFront(o.Name),D,w,w,w,w,s,t._ImageFolder,function(e){e.stopImmediatePropagation(),e.preventDefault(),n.closeDialog(o.Name),null!=$&&$(r)},a?p(B||(B=F`
          <div class="leftResizer"
            onPointerDown=${0} onPointerUp=${0}
            onPointerMove=${0} onPointerCancel=${0}
          />
          <div class="middleResizer"
            onPointerDown=${0} onPointerUp=${0}
            onPointerMove=${0} onPointerCancel=${0}
          />
          <div class="rightResizer"
            onPointerDown=${0} onPointerUp=${0}
            onPointerMove=${0} onPointerCancel=${0}
          />
        `),w,w,w,w,w,w,w,w,w,w,w,w):"")}}class A extends S{render(e){let{Mode:t,Geometry:n,onPointerEvent:o}=e,i=k(e,$),{x:r,y:s,Width:a,Height:l}=n;const d=r-8,c=Math.round(r+a/2)-4,h=r+a,u=s-8,S=Math.round(s+l/2)-4,g=s+l;let m,_;switch(t){case"nw":m=`left:${d}px; top:${u}px;`,_="nwse";break;case"n":m=`left:${c}px; top:${u}px;`,_="ns";break;case"ne":m=`left:${h}px; top:${u}px;`,_="nesw";break;case"e":m=`left:${h}px; top:${S}px;`,_="ew";break;case"se":m=`left:${h}px; top:${g}px;`,_="nwse";break;case"s":m=`left:${c}px; top:${g}px;`,_="ns";break;case"sw":m=`left:${d}px; top:${g}px;`,_="nesw";break;case"w":m=`left:${d}px; top:${S}px;`,_="ew"}return _="cursor:"+_+"-resize",p(R||(R=F`<div class="SNS ShapeHandle" style="${0} ${0}" ...${0}
        onPointerDown=${0} onPointerMove=${0}
        onPointerUp=${0} onPointerCancel=${0}
      />`),m,_,i,o,o,o,o)}}window.SNS_BoardView=O,document.dispatchEvent(new CustomEvent("SNS_BoardView",{detail:window.SNS_BoardView}));export{O as SNS_BoardView};
//# sourceMappingURL=sns-boardview.modern.js.map
