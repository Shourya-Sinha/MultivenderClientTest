import{r as I,af as Ir,ag as be,ah as Pr,a2 as dr,a1 as Tr,ai as er,aj as _e,ak as rr,_ as d,Y as ze,q as Rr,s as $r,z as ce,j as e,t as ne,w as U,O as Yr,Q as _r,N as ur,al as mr,x as zr,V as Fr,y as Ar,am as X,E as Mr,B as y,C as Er,G as ve,T as l,S as u,f as Nr,b as tr,an as Vr,ao as Dr}from"./index-DMbVIpwd.js";import{F as Hr}from"./men--Uc2zJHN.js";import{_ as Or}from"./react-stars-T0vhBNGz.js";import{v as Br}from"./visuallyHidden-BmTxvui-.js";import{C as x}from"./Checkbox-BpZ1p9Aw.js";import{E as Wr}from"./Eye.esm-C1VXML8n.js";function Gr(r,t,s=(c,h)=>c===h){return r.length===t.length&&r.every((c,h)=>s(c,t[h]))}const Xr=2;function fr(r,t){return r-t}function pr(r,t){var s;const{index:c}=(s=r.reduce((h,P,R)=>{const j=Math.abs(t-P);return h===null||j<h.distance||j===h.distance?{distance:j,index:R}:h},null))!=null?s:{};return c}function Te(r,t){if(t.current!==void 0&&r.changedTouches){const s=r;for(let c=0;c<s.changedTouches.length;c+=1){const h=s.changedTouches[c];if(h.identifier===t.current)return{x:h.clientX,y:h.clientY}}return!1}return{x:r.clientX,y:r.clientY}}function Fe(r,t,s){return(r-t)*100/(s-t)}function Ur(r,t,s){return(s-t)*r+t}function Kr(r){if(Math.abs(r)<1){const s=r.toExponential().split("e-"),c=s[0].split(".")[1];return(c?c.length:0)+parseInt(s[1],10)}const t=r.toString().split(".")[1];return t?t.length:0}function qr(r,t,s){const c=Math.round((r-s)/t)*t+s;return Number(c.toFixed(Kr(t)))}function hr({values:r,newValue:t,index:s}){const c=r.slice();return c[s]=t,c.sort(fr)}function Re({sliderRef:r,activeIndex:t,setActive:s}){var c,h;const P=_e(r.current);if(!((c=r.current)!=null&&c.contains(P.activeElement))||Number(P==null||(h=P.activeElement)==null?void 0:h.getAttribute("data-index"))!==t){var R;(R=r.current)==null||R.querySelector(`[type="range"][data-index="${t}"]`).focus()}s&&s(t)}function $e(r,t){return typeof r=="number"&&typeof t=="number"?r===t:typeof r=="object"&&typeof t=="object"?Gr(r,t):!1}const Qr={horizontal:{offset:r=>({left:`${r}%`}),leap:r=>({width:`${r}%`})},"horizontal-reverse":{offset:r=>({right:`${r}%`}),leap:r=>({width:`${r}%`})},vertical:{offset:r=>({bottom:`${r}%`}),leap:r=>({height:`${r}%`})}},Jr=r=>r;let Ye;function xr(){return Ye===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Ye=CSS.supports("touch-action","none"):Ye=!0),Ye}function Zr(r){const{"aria-labelledby":t,defaultValue:s,disabled:c=!1,disableSwap:h=!1,isRtl:P=!1,marks:R=!1,max:j=100,min:f=0,name:K,onChange:de,onChangeCommitted:q,orientation:ae="horizontal",rootRef:je,scale:ue=Jr,step:A=1,shiftStep:pe=10,tabIndex:ke,value:ye}=r,D=I.useRef(),[Q,B]=I.useState(-1),[Se,W]=I.useState(-1),[he,xe]=I.useState(!1),J=I.useRef(0),[$,ge]=Ir({controlled:ye,default:s??f,name:"Slider"}),M=de&&((n,a,o)=>{const p=n.nativeEvent||n,m=new p.constructor(p.type,p);Object.defineProperty(m,"target",{writable:!0,value:{value:a,name:K}}),de(m,a,o)}),Z=Array.isArray($);let S=Z?$.slice().sort(fr):[$];S=S.map(n=>n==null?f:be(n,f,j));const me=R===!0&&A!==null?[...Array(Math.floor((j-f)/A)+1)].map((n,a)=>({value:f+A*a})):R||[],Y=me.map(n=>n.value),{isFocusVisibleRef:_,onBlur:E,onFocus:Ae,ref:Me}=Pr(),[we,oe]=I.useState(-1),T=I.useRef(),Ce=dr(Me,T),fe=dr(je,Ce),Ee=n=>a=>{var o;const p=Number(a.currentTarget.getAttribute("data-index"));Ae(a),_.current===!0&&oe(p),W(p),n==null||(o=n.onFocus)==null||o.call(n,a)},se=n=>a=>{var o;E(a),_.current===!1&&oe(-1),W(-1),n==null||(o=n.onBlur)==null||o.call(n,a)},ee=(n,a)=>{const o=Number(n.currentTarget.getAttribute("data-index")),p=S[o],m=Y.indexOf(p);let i=a;if(me&&A==null){const z=Y[Y.length-1];i>z?i=z:i<Y[0]?i=Y[0]:i=i<p?Y[m-1]:Y[m+1]}if(i=be(i,f,j),Z){h&&(i=be(i,S[o-1]||-1/0,S[o+1]||1/0));const z=i;i=hr({values:S,newValue:i,index:o});let V=o;h||(V=i.indexOf(z)),Re({sliderRef:T,activeIndex:V})}ge(i),oe(o),M&&!$e(i,$)&&M(n,i,o),q&&q(n,i)},Ne=n=>a=>{var o;if(A!==null){const p=Number(a.currentTarget.getAttribute("data-index")),m=S[p];let i=null;(a.key==="ArrowLeft"||a.key==="ArrowDown")&&a.shiftKey||a.key==="PageDown"?i=Math.max(m-pe,f):((a.key==="ArrowRight"||a.key==="ArrowUp")&&a.shiftKey||a.key==="PageUp")&&(i=Math.min(m+pe,j)),i!==null&&(ee(a,i),a.preventDefault())}n==null||(o=n.onKeyDown)==null||o.call(n,a)};Tr(()=>{if(c&&T.current.contains(document.activeElement)){var n;(n=document.activeElement)==null||n.blur()}},[c]),c&&Q!==-1&&B(-1),c&&we!==-1&&oe(-1);const Ve=n=>a=>{var o;(o=n.onChange)==null||o.call(n,a),ee(a,a.target.valueAsNumber)},Le=I.useRef();let ie=ae;P&&ae==="horizontal"&&(ie+="-reverse");const H=({finger:n,move:a=!1})=>{const{current:o}=T,{width:p,height:m,bottom:i,left:z}=o.getBoundingClientRect();let V;ie.indexOf("vertical")===0?V=(i-n.y)/m:V=(n.x-z)/p,ie.indexOf("-reverse")!==-1&&(V=1-V);let w;if(w=Ur(V,f,j),A)w=qr(w,A,f);else{const te=pr(Y,w);w=Y[te]}w=be(w,f,j);let v=0;if(Z){a?v=Le.current:v=pr(S,w),h&&(w=be(w,S[v-1]||-1/0,S[v+1]||1/0));const te=w;w=hr({values:S,newValue:w,index:v}),h&&a||(v=w.indexOf(te),Le.current=v)}return{newValue:w,activeIndex:v}},b=er(n=>{const a=Te(n,D);if(!a)return;if(J.current+=1,n.type==="mousemove"&&n.buttons===0){g(n);return}const{newValue:o,activeIndex:p}=H({finger:a,move:!0});Re({sliderRef:T,activeIndex:p,setActive:B}),ge(o),!he&&J.current>Xr&&xe(!0),M&&!$e(o,$)&&M(n,o,p)}),g=er(n=>{const a=Te(n,D);if(xe(!1),!a)return;const{newValue:o}=H({finger:a,move:!0});B(-1),n.type==="touchend"&&W(-1),q&&q(n,o),D.current=void 0,N()}),G=er(n=>{if(c)return;xr()||n.preventDefault();const a=n.changedTouches[0];a!=null&&(D.current=a.identifier);const o=Te(n,D);if(o!==!1){const{newValue:m,activeIndex:i}=H({finger:o});Re({sliderRef:T,activeIndex:i,setActive:B}),ge(m),M&&!$e(m,$)&&M(n,m,i)}J.current=0;const p=_e(T.current);p.addEventListener("touchmove",b,{passive:!0}),p.addEventListener("touchend",g,{passive:!0})}),N=I.useCallback(()=>{const n=_e(T.current);n.removeEventListener("mousemove",b),n.removeEventListener("mouseup",g),n.removeEventListener("touchmove",b),n.removeEventListener("touchend",g)},[g,b]);I.useEffect(()=>{const{current:n}=T;return n.addEventListener("touchstart",G,{passive:xr()}),()=>{n.removeEventListener("touchstart",G),N()}},[N,G]),I.useEffect(()=>{c&&N()},[c,N]);const re=n=>a=>{var o;if((o=n.onMouseDown)==null||o.call(n,a),c||a.defaultPrevented||a.button!==0)return;a.preventDefault();const p=Te(a,D);if(p!==!1){const{newValue:i,activeIndex:z}=H({finger:p});Re({sliderRef:T,activeIndex:z,setActive:B}),ge(i),M&&!$e(i,$)&&M(a,i,z)}J.current=0;const m=_e(T.current);m.addEventListener("mousemove",b,{passive:!0}),m.addEventListener("mouseup",g)},Ie=Fe(Z?S[0]:f,f,j),L=Fe(S[S.length-1],f,j)-Ie,le=(n={})=>{const a=rr(n),o={onMouseDown:re(a||{})},p=d({},a,o);return d({},n,{ref:fe},p)},De=n=>a=>{var o;(o=n.onMouseOver)==null||o.call(n,a);const p=Number(a.currentTarget.getAttribute("data-index"));W(p)},He=n=>a=>{var o;(o=n.onMouseLeave)==null||o.call(n,a),W(-1)};return{active:Q,axis:ie,axisProps:Qr,dragging:he,focusedThumbIndex:we,getHiddenInputProps:(n={})=>{var a;const o=rr(n),p={onChange:Ve(o||{}),onFocus:Ee(o||{}),onBlur:se(o||{}),onKeyDown:Ne(o||{})},m=d({},o,p);return d({tabIndex:ke,"aria-labelledby":t,"aria-orientation":ae,"aria-valuemax":ue(j),"aria-valuemin":ue(f),name:K,type:"range",min:r.min,max:r.max,step:r.step===null&&r.marks?"any":(a=r.step)!=null?a:void 0,disabled:c},n,m,{style:d({},Br,{direction:P?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:le,getThumbProps:(n={})=>{const a=rr(n),o={onMouseOver:De(a||{}),onMouseLeave:He(a||{})};return d({},n,a,o)},marks:me,open:Se,range:Z,rootRef:fe,trackLeap:L,trackOffset:Ie,values:S,getThumbStyle:n=>({pointerEvents:Q!==-1&&Q!==n?"none":void 0})}}const et=r=>!r||!ze(r);function rt(r){return $r("MuiSlider",r)}const tt=Rr("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),F=tt,nt=r=>{const{open:t}=r;return{offset:ce(t&&F.valueLabelOpen),circle:F.valueLabelCircle,label:F.valueLabelLabel}};function at(r){const{children:t,className:s,value:c}=r,h=nt(r);return t?I.cloneElement(t,{className:ce(t.props.className)},e.jsxs(I.Fragment,{children:[t.props.children,e.jsx("span",{className:ce(h.offset,s),"aria-hidden":!0,children:e.jsx("span",{className:h.circle,children:e.jsx("span",{className:h.label,children:c})})})]})):null}const ot=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function gr(r){return r}const st=ne("span",{name:"MuiSlider",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.root,t[`color${U(s.color)}`],s.size!=="medium"&&t[`size${U(s.size)}`],s.marked&&t.marked,s.orientation==="vertical"&&t.vertical,s.track==="inverted"&&t.trackInverted,s.track===!1&&t.trackFalse]}})(({theme:r,ownerState:t})=>d({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(r.vars||r).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&d({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&d({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${F.disabled}`]:{pointerEvents:"none",cursor:"default",color:(r.vars||r).palette.grey[400]},[`&.${F.dragging}`]:{[`& .${F.thumb}, & .${F.track}`]:{transition:"none"}}})),it=ne("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(r,t)=>t.rail})(({ownerState:r})=>d({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},r.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},r.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},r.track==="inverted"&&{opacity:1})),lt=ne("span",{name:"MuiSlider",slot:"Track",overridesResolver:(r,t)=>t.track})(({theme:r,ownerState:t})=>{const s=r.palette.mode==="light"?Yr(r.palette[t.color].main,.62):_r(r.palette[t.color].main,.5);return d({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:r.transitions.create(["left","width","bottom","height"],{duration:r.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:r.vars?r.vars.palette.Slider[`${t.color}Track`]:s,borderColor:r.vars?r.vars.palette.Slider[`${t.color}Track`]:s})}),ct=ne("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.thumb,t[`thumbColor${U(s.color)}`],s.size!=="medium"&&t[`thumbSize${U(s.size)}`]]}})(({theme:r,ownerState:t})=>d({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:r.transitions.create(["box-shadow","left","bottom"],{duration:r.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&::before":d({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(r.vars||r).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${F.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${r.vars?`rgba(${r.vars.palette[t.color].mainChannel} / 0.16)`:ur(r.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${F.active}`]:{boxShadow:`0px 0px 0px 14px ${r.vars?`rgba(${r.vars.palette[t.color].mainChannel} / 0.16)`:ur(r.palette[t.color].main,.16)}`},[`&.${F.disabled}`]:{"&:hover":{boxShadow:"none"}}})),dt=ne(at,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(r,t)=>t.valueLabel})(({theme:r,ownerState:t})=>d({[`&.${F.valueLabelOpen}`]:{transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},r.typography.body2,{fontWeight:500,transition:r.transitions.create(["transform"],{duration:r.transitions.duration.shortest}),transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(r.vars||r).palette.grey[600],borderRadius:2,color:(r.vars||r).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:t.size==="small"?"20px":"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},t.size==="small"&&{fontSize:r.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),ut=ne("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:r=>mr(r)&&r!=="markActive",overridesResolver:(r,t)=>{const{markActive:s}=r;return[t.mark,s&&t.markActive]}})(({theme:r,ownerState:t,markActive:s})=>d({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},s&&{backgroundColor:(r.vars||r).palette.background.paper,opacity:.8})),pt=ne("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:r=>mr(r)&&r!=="markLabelActive",overridesResolver:(r,t)=>t.markLabel})(({theme:r,ownerState:t,markLabelActive:s})=>d({},r.typography.body2,{color:(r.vars||r).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},s&&{color:(r.vars||r).palette.text.primary})),ht=r=>{const{disabled:t,dragging:s,marked:c,orientation:h,track:P,classes:R,color:j,size:f}=r,K={root:["root",t&&"disabled",s&&"dragging",c&&"marked",h==="vertical"&&"vertical",P==="inverted"&&"trackInverted",P===!1&&"trackFalse",j&&`color${U(j)}`,f&&`size${U(f)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",f&&`thumbSize${U(f)}`,j&&`thumbColor${U(j)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Mr(K,rt,R)},xt=({children:r})=>r,gt=I.forwardRef(function(t,s){var c,h,P,R,j,f,K,de,q,ae,je,ue,A,pe,ke,ye,D,Q,B,Se,W,he,xe,J;const $=zr({props:t,name:"MuiSlider"}),M=Fr().direction==="rtl",{"aria-label":Z,"aria-valuetext":S,"aria-labelledby":me,component:Y="span",components:_={},componentsProps:E={},color:Ae="primary",classes:Me,className:we,disableSwap:oe=!1,disabled:T=!1,getAriaLabel:Ce,getAriaValueText:fe,marks:Ee=!1,max:se=100,min:ee=0,orientation:Ne="horizontal",shiftStep:Ve=10,size:Le="medium",step:ie=1,scale:H=gr,slotProps:b,slots:g,track:G="normal",valueLabelDisplay:N="off",valueLabelFormat:re=gr}=$,Ie=Ar($,ot),L=d({},$,{isRtl:M,max:se,min:ee,classes:Me,disabled:T,disableSwap:oe,orientation:Ne,marks:Ee,color:Ae,size:Le,step:ie,shiftStep:Ve,scale:H,track:G,valueLabelDisplay:N,valueLabelFormat:re}),{axisProps:le,getRootProps:De,getHiddenInputProps:He,getThumbProps:nr,open:ar,active:Oe,axis:n,focusedThumbIndex:a,range:o,dragging:p,marks:m,values:i,trackOffset:z,trackLeap:V,getThumbStyle:w}=Zr(d({},L,{rootRef:s}));L.marked=m.length>0&&m.some(k=>k.label),L.dragging=p,L.focusedThumbIndex=a;const v=ht(L),te=(c=(h=g==null?void 0:g.root)!=null?h:_.Root)!=null?c:st,or=(P=(R=g==null?void 0:g.rail)!=null?R:_.Rail)!=null?P:it,sr=(j=(f=g==null?void 0:g.track)!=null?f:_.Track)!=null?j:lt,ir=(K=(de=g==null?void 0:g.thumb)!=null?de:_.Thumb)!=null?K:ct,lr=(q=(ae=g==null?void 0:g.valueLabel)!=null?ae:_.ValueLabel)!=null?q:dt,Be=(je=(ue=g==null?void 0:g.mark)!=null?ue:_.Mark)!=null?je:ut,We=(A=(pe=g==null?void 0:g.markLabel)!=null?pe:_.MarkLabel)!=null?A:pt,cr=(ke=(ye=g==null?void 0:g.input)!=null?ye:_.Input)!=null?ke:"input",Ge=(D=b==null?void 0:b.root)!=null?D:E.root,br=(Q=b==null?void 0:b.rail)!=null?Q:E.rail,Xe=(B=b==null?void 0:b.track)!=null?B:E.track,Ue=(Se=b==null?void 0:b.thumb)!=null?Se:E.thumb,Ke=(W=b==null?void 0:b.valueLabel)!=null?W:E.valueLabel,vr=(he=b==null?void 0:b.mark)!=null?he:E.mark,jr=(xe=b==null?void 0:b.markLabel)!=null?xe:E.markLabel,kr=(J=b==null?void 0:b.input)!=null?J:E.input,yr=X({elementType:te,getSlotProps:De,externalSlotProps:Ge,externalForwardedProps:Ie,additionalProps:d({},et(te)&&{as:Y}),ownerState:d({},L,Ge==null?void 0:Ge.ownerState),className:[v.root,we]}),Sr=X({elementType:or,externalSlotProps:br,ownerState:L,className:v.rail}),wr=X({elementType:sr,externalSlotProps:Xe,additionalProps:{style:d({},le[n].offset(z),le[n].leap(V))},ownerState:d({},L,Xe==null?void 0:Xe.ownerState),className:v.track}),qe=X({elementType:ir,getSlotProps:nr,externalSlotProps:Ue,ownerState:d({},L,Ue==null?void 0:Ue.ownerState),className:v.thumb}),Cr=X({elementType:lr,externalSlotProps:Ke,ownerState:d({},L,Ke==null?void 0:Ke.ownerState),className:v.valueLabel}),Qe=X({elementType:Be,externalSlotProps:vr,ownerState:L,className:v.mark}),Je=X({elementType:We,externalSlotProps:jr,ownerState:L,className:v.markLabel}),Lr=X({elementType:cr,getSlotProps:He,externalSlotProps:kr,ownerState:L});return e.jsxs(te,d({},yr,{children:[e.jsx(or,d({},Sr)),e.jsx(sr,d({},wr)),m.filter(k=>k.value>=ee&&k.value<=se).map((k,C)=>{const Ze=Fe(k.value,ee,se),Pe=le[n].offset(Ze);let O;return G===!1?O=i.indexOf(k.value)!==-1:O=G==="normal"&&(o?k.value>=i[0]&&k.value<=i[i.length-1]:k.value<=i[0])||G==="inverted"&&(o?k.value<=i[0]||k.value>=i[i.length-1]:k.value>=i[0]),e.jsxs(I.Fragment,{children:[e.jsx(Be,d({"data-index":C},Qe,!ze(Be)&&{markActive:O},{style:d({},Pe,Qe.style),className:ce(Qe.className,O&&v.markActive)})),k.label!=null?e.jsx(We,d({"aria-hidden":!0,"data-index":C},Je,!ze(We)&&{markLabelActive:O},{style:d({},Pe,Je.style),className:ce(v.markLabel,Je.className,O&&v.markLabelActive),children:k.label})):null]},C)}),i.map((k,C)=>{const Ze=Fe(k,ee,se),Pe=le[n].offset(Ze),O=N==="off"?xt:lr;return e.jsx(O,d({},!ze(O)&&{valueLabelFormat:re,valueLabelDisplay:N,value:typeof re=="function"?re(H(k),C):re,index:C,open:ar===C||Oe===C||N==="on",disabled:T},Cr,{children:e.jsx(ir,d({"data-index":C},qe,{className:ce(v.thumb,qe.className,Oe===C&&v.active,a===C&&v.focusVisible),style:d({},Pe,w(C),qe.style),children:e.jsx(cr,d({"data-index":C,"aria-label":Ce?Ce(C):Z,"aria-valuenow":H(k),"aria-labelledby":me,"aria-valuetext":fe?fe(H(k),C):S,value:i[C]},Lr))}))}),C)})]}))}),mt=gt;function ft(r){return`${r}°C`}const bt=Array.from({length:7}),vt={overflowY:"scroll","&::-webkit-scrollbar":{display:"none"},"-ms-overflow-style":"none","scrollbar-width":"none"},Lt=()=>e.jsx(e.Fragment,{children:e.jsx(y,{sx:{width:"100%",backgroundColor:"#F5F5F5",paddingY:3,mb:2},children:e.jsx(Er,{maxWidth:"lg",children:e.jsxs(ve,{container:!0,spacing:1,children:[e.jsx(ve,{item:!0,xs:12,md:2.5,children:e.jsxs(y,{sx:{backgroundColor:"#fff",padding:1},children:[e.jsx(l,{variant:"caption",children:"Popular Shopping Ideas"}),e.jsxs(u,{children:[e.jsx(l,{variant:"body2",children:"Sorting"}),e.jsx(l,{variant:"body2",sx:{color:"#000"},children:"Price Sorting"}),e.jsx(mt,{"aria-label":"Temperature",defaultValue:30,getAriaValueText:ft,valueLabelDisplay:"auto",shiftStep:30,step:10,marks:!0,min:10,max:110}),e.jsxs(y,{sx:{paddingY:1},children:[e.jsx(l,{variant:"body2",children:"Top Category"}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",sx:{paddingY:0},children:"Groceries"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",sx:{paddingY:0},children:"Men's Shirt"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Women's Clothing"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Boy's Clothing"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Girl's Clothing"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Babies Clothing"})]})]}),e.jsxs(y,{sx:{paddingY:1},children:[e.jsx(l,{variant:"body2",children:"ShopEsae Fashion"}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",sx:{paddingY:0},children:"Our Brands"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Premium Brands"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Top Brands"})]})]}),e.jsxs(y,{sx:{paddingY:1},children:[e.jsx(l,{variant:"body2",children:"Sort By Ratings"}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",sx:{paddingY:0},children:"5 Star"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"4 Star"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"3 Star"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"2 Star"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"1 Star"})]})]}),e.jsxs(y,{sx:{paddingY:1},children:[e.jsx(l,{variant:"body2",children:"Gender"}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",sx:{paddingY:0},children:"Men"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Women"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Boys"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Girls"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Babies"})]})]}),e.jsxs(y,{sx:{paddingY:1},children:[e.jsx(l,{variant:"body2",children:"Colors"}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,sx:{flexWrap:"wrap",gap:1},children:[e.jsx(y,{sx:{width:25,height:25,backgroundColor:"yellow",borderRadius:"50%"}}),e.jsx(y,{sx:{width:25,height:25,backgroundColor:"blue",borderRadius:"50%"}}),e.jsx(y,{sx:{width:25,height:25,backgroundColor:"red",borderRadius:"50%"}}),e.jsx(y,{sx:{width:25,height:25,backgroundColor:"orange",borderRadius:"50%"}}),e.jsx(y,{sx:{width:25,height:25,backgroundColor:"#9e9e9e",borderRadius:"50%"}}),e.jsx(y,{sx:{width:25,height:25,backgroundColor:"black",borderRadius:"50%"}}),e.jsx(y,{sx:{width:25,height:25,backgroundColor:"green",borderRadius:"50%"}})]})]})]}),e.jsxs(y,{sx:{paddingY:1},children:[e.jsx(l,{variant:"body2",children:"Gender"}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",sx:{paddingY:0},children:"Men"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Women"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Boys"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Girls"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(x,{sx:{paddingY:0}}),e.jsx(l,{variant:"caption",children:"Babies"})]})]})]})}),e.jsx(ve,{item:!0,xs:12,md:9.5,children:e.jsxs(y,{sx:{backgroundColor:"#fff",padding:2,maxHeight:"90vh",...vt},children:[e.jsxs(u,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(l,{variant:"h6",children:"Results"}),e.jsx(y,{children:e.jsx(Nr,{})})]}),e.jsx(l,{variant:"caption",children:"Price and other details may vary based on product size and color."}),e.jsx(ve,{container:!0,spacing:1,children:bt.map((r,t)=>e.jsx(ve,{item:!0,xs:12,sm:6,md:3,sx:{position:"relative",overflow:"hidden"},children:e.jsxs(u,{spacing:2,children:[e.jsxs(y,{children:[e.jsx(y,{sx:{width:"100%",height:"200px",borderRadius:2,backgroundColor:"#F5F5F5",paddingY:2},children:e.jsx("img",{src:Hr,alt:`Product ${t+1}`,style:{width:"100%",height:"170px",objectFit:"contain"}})}),e.jsxs(u,{sx:{paddingTop:.8},children:[e.jsxs(l,{variant:"caption",sx:{width:"100%",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:["Product Title - Example Product ",t+1]}),e.jsxs(u,{direction:"row",alignItems:"center",children:[e.jsx(Or,{count:5,size:18,color:"#ffd700"}),e.jsx(l,{variant:"caption",sx:{paddingRight:.4,fontSize:10},children:"10000+ sold"}),e.jsx(l,{variant:"caption",sx:{backgroundColor:"#e0e0e0",color:"#ff1744",paddingX:.5,borderRadius:.4,fontSize:10},children:"Top selling"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(l,{variant:"caption",sx:{color:"#000"},children:"INR 150.00"}),e.jsx(l,{variant:"caption",sx:{color:"#999999",textDecoration:"line-through"},children:"INR 200.00"})]}),e.jsxs(u,{direction:"row",alignItems:"center",children:[e.jsx(l,{variant:"caption",sx:{color:"#fff",backgroundColor:"#FD3850",paddingX:.6,borderRadius:.4},children:"Welcome deal"}),e.jsx(l,{variant:"caption",sx:{color:"#FD3850"},children:"Extra 1% off with"})]}),e.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(l,{variant:"caption",sx:{color:"#000",backgroundColor:"#dce775",paddingX:.6,borderRadius:.6},children:"Choice"}),e.jsx(l,{variant:"body2",children:"Free Shipping"})]})]})]}),e.jsx(y,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,opacity:0,transition:"opacity 0.3s ease","&:hover":{opacity:1},flexDirection:"column"},children:e.jsxs(u,{direction:"row",spacing:2,children:[e.jsx(tr,{sx:{backgroundColor:"#fff",color:"#000","&:hover":{backgroundColor:"#FD3850",color:"#fff"}},children:e.jsx(Vr,{size:25})}),e.jsx(tr,{sx:{backgroundColor:"#fff",color:"#000","&:hover":{backgroundColor:"#FD3850",color:"#fff"}},children:e.jsx(Wr,{size:25})}),e.jsx(tr,{sx:{backgroundColor:"#fff",color:"#000","&:hover":{backgroundColor:"#FD3850",color:"#fff"}},children:e.jsx(Dr,{size:25})})]})})]})},t))})]})})]})})})});export{Lt as default};