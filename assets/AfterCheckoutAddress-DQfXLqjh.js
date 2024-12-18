import{q as _,s as ne,r as l,t as k,av as Ie,aw as we,w as te,_ as a,c as ye,x as E,V as Se,y as F,W as Pe,j as e,z as v,E as z,ax as Re,T as i,a0 as se,N as ce,a1 as De,ay as Le,a2 as Te,Y as fe,v as We,R as h,I as $e,a as Ae,B as f,C as Fe,G as xe,S as r,b as J,az as he,aA as A,d as C,aB as Me,e as U,aC as je,D as ge}from"./index-0r1fW-t8.js";import{P as Ne}from"./coat-UuXTciuN.js";import{C as Be}from"./chi-K8EPwIr_.js";import{L as de}from"./Link-CJU-R7Ox.js";import{C as pe}from"./CaretUp.esm-ucmiupvG.js";import{C as ue}from"./Collapse-DXBxWSS3.js";import{C as Ee}from"./Checkbox-CrEozN97.js";import{g as ze,l as be,b as Ge}from"./listItemTextClasses-Di8uZldG.js";import{S as Oe}from"./ShieldCheck.esm-JCbCPQDi.js";function Ue(t){return ne("MuiDialog",t)}const Ye=_("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),me=Ye,Ve=l.createContext({}),Ce=Ve,_e=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],He=k(Ie,{name:"MuiDialog",slot:"Backdrop",overrides:(t,s)=>s.backdrop})({zIndex:-1}),Xe=t=>{const{classes:s,scroll:n,maxWidth:o,fullWidth:d,fullScreen:c}=t,p={root:["root"],container:["container",`scroll${te(n)}`],paper:["paper",`paperScroll${te(n)}`,`paperWidth${te(String(o))}`,d&&"paperFullWidth",c&&"paperFullScreen"]};return z(p,Ue,s)},qe=k(we,{name:"MuiDialog",slot:"Root",overridesResolver:(t,s)=>s.root})({"@media print":{position:"absolute !important"}}),Ke=k("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.container,s[`scroll${te(n.scroll)}`]]}})(({ownerState:t})=>a({height:"100%","@media print":{height:"auto"},outline:0},t.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},t.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Qe=k(ye,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.paper,s[`scrollPaper${te(n.scroll)}`],s[`paperWidth${te(String(n.maxWidth))}`],n.fullWidth&&s.paperFullWidth,n.fullScreen&&s.paperFullScreen]}})(({theme:t,ownerState:s})=>a({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},s.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},s.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!s.maxWidth&&{maxWidth:"calc(100% - 64px)"},s.maxWidth==="xs"&&{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${me.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},s.maxWidth&&s.maxWidth!=="xs"&&{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`,[`&.${me.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[s.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},s.fullWidth&&{width:"calc(100% - 64px)"},s.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${me.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Ze=l.forwardRef(function(s,n){const o=E({props:s,name:"MuiDialog"}),d=Se(),c={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":p,"aria-labelledby":u,BackdropComponent:g,BackdropProps:m,children:j,className:M,disableEscapeKeyDown:L=!1,fullScreen:S=!1,fullWidth:b=!1,maxWidth:y="sm",onBackdropClick:I,onClose:w,open:X,PaperComponent:N=ye,PaperProps:T={},scroll:q="paper",TransitionComponent:K=Re,transitionDuration:Q=c,TransitionProps:oe}=o,ie=F(o,_e),W=a({},o,{disableEscapeKeyDown:L,fullScreen:S,fullWidth:b,maxWidth:y,scroll:q}),P=Xe(W),$=l.useRef(),R=B=>{$.current=B.target===B.currentTarget},Z=B=>{$.current&&($.current=null,I&&I(B),w&&w(B,"backdropClick"))},x=Pe(u),ae=l.useMemo(()=>({titleId:x}),[x]);return e.jsx(qe,a({className:v(P.root,M),closeAfterTransition:!0,components:{Backdrop:He},componentsProps:{backdrop:a({transitionDuration:Q,as:g},m)},disableEscapeKeyDown:L,onClose:w,open:X,ref:n,onClick:Z,ownerState:W},ie,{children:e.jsx(K,a({appear:!0,in:X,timeout:Q,role:"presentation"},oe,{children:e.jsx(Ke,{className:v(P.container),onMouseDown:R,ownerState:W,children:e.jsx(Qe,a({as:N,elevation:24,role:"dialog","aria-describedby":p,"aria-labelledby":x},T,{className:v(P.paper,T.className),ownerState:W,children:e.jsx(Ce.Provider,{value:ae,children:j})}))})}))}))}),Je=Ze;function et(t){return ne("MuiDialogActions",t)}_("MuiDialogActions",["root","spacing"]);const tt=["className","disableSpacing"],st=t=>{const{classes:s,disableSpacing:n}=t;return z({root:["root",!n&&"spacing"]},et,s)},nt=k("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,!n.disableSpacing&&s.spacing]}})(({ownerState:t})=>a({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),ot=l.forwardRef(function(s,n){const o=E({props:s,name:"MuiDialogActions"}),{className:d,disableSpacing:c=!1}=o,p=F(o,tt),u=a({},o,{disableSpacing:c}),g=st(u);return e.jsx(nt,a({className:v(g.root,d),ownerState:u,ref:n},p))}),it=ot;function rt(t){return ne("MuiDialogContent",t)}_("MuiDialogContent",["root","dividers"]);function at(t){return ne("MuiDialogTitle",t)}const lt=_("MuiDialogTitle",["root"]),ct=lt,dt=["className","dividers"],pt=t=>{const{classes:s,dividers:n}=t;return z({root:["root",n&&"dividers"]},rt,s)},ut=k("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.dividers&&s.dividers]}})(({theme:t,ownerState:s})=>a({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${ct.root} + &`]:{paddingTop:0}})),xt=l.forwardRef(function(s,n){const o=E({props:s,name:"MuiDialogContent"}),{className:d,dividers:c=!1}=o,p=F(o,dt),u=a({},o,{dividers:c}),g=pt(u);return e.jsx(ut,a({className:v(g.root,d),ownerState:u,ref:n},p))}),ht=xt,gt=["className","id"],mt=t=>{const{classes:s}=t;return z({root:["root"]},at,s)},ft=k(i,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,s)=>s.root})({padding:"16px 24px",flex:"0 0 auto"}),jt=l.forwardRef(function(s,n){const o=E({props:s,name:"MuiDialogTitle"}),{className:d,id:c}=o,p=F(o,gt),u=o,g=mt(u),{titleId:m=c}=l.useContext(Ce);return e.jsx(ft,a({component:"h2",className:v(g.root,d),ownerState:u,ref:n,variant:"h6",id:c??m},p))}),bt=jt;function yt(t){return ne("MuiListItem",t)}const Ct=_("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),ee=Ct,vt=_("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),kt=vt;function It(t){return ne("MuiListItemSecondaryAction",t)}_("MuiListItemSecondaryAction",["root","disableGutters"]);const wt=["className"],St=t=>{const{disableGutters:s,classes:n}=t;return z({root:["root",s&&"disableGutters"]},It,n)},Pt=k("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.disableGutters&&s.disableGutters]}})(({ownerState:t})=>a({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),ve=l.forwardRef(function(s,n){const o=E({props:s,name:"MuiListItemSecondaryAction"}),{className:d}=o,c=F(o,wt),p=l.useContext(se),u=a({},o,{disableGutters:p.disableGutters}),g=St(u);return e.jsx(Pt,a({className:v(g.root,d),ownerState:u,ref:n},c))});ve.muiName="ListItemSecondaryAction";const Rt=ve,Dt=["className"],Lt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Tt=(t,s)=>{const{ownerState:n}=t;return[s.root,n.dense&&s.dense,n.alignItems==="flex-start"&&s.alignItemsFlexStart,n.divider&&s.divider,!n.disableGutters&&s.gutters,!n.disablePadding&&s.padding,n.button&&s.button,n.hasSecondaryAction&&s.secondaryAction]},Wt=t=>{const{alignItems:s,button:n,classes:o,dense:d,disabled:c,disableGutters:p,disablePadding:u,divider:g,hasSecondaryAction:m,selected:j}=t;return z({root:["root",d&&"dense",!p&&"gutters",!u&&"padding",g&&"divider",c&&"disabled",n&&"button",s==="flex-start"&&"alignItemsFlexStart",m&&"secondaryAction",j&&"selected"],container:["container"]},yt,o)},$t=k("div",{name:"MuiListItem",slot:"Root",overridesResolver:Tt})(({theme:t,ownerState:s})=>a({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!s.disablePadding&&a({paddingTop:8,paddingBottom:8},s.dense&&{paddingTop:4,paddingBottom:4},!s.disableGutters&&{paddingLeft:16,paddingRight:16},!!s.secondaryAction&&{paddingRight:48}),!!s.secondaryAction&&{[`& > .${kt.root}`]:{paddingRight:48}},{[`&.${ee.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${ee.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ce(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${ee.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:ce(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${ee.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},s.alignItems==="flex-start"&&{alignItems:"flex-start"},s.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},s.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ee.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:ce(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:ce(t.palette.primary.main,t.palette.action.selectedOpacity)}}},s.hasSecondaryAction&&{paddingRight:48})),At=k("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,s)=>s.container})({position:"relative"}),Ft=l.forwardRef(function(s,n){const o=E({props:s,name:"MuiListItem"}),{alignItems:d="center",autoFocus:c=!1,button:p=!1,children:u,className:g,component:m,components:j={},componentsProps:M={},ContainerComponent:L="li",ContainerProps:{className:S}={},dense:b=!1,disabled:y=!1,disableGutters:I=!1,disablePadding:w=!1,divider:X=!1,focusVisibleClassName:N,secondaryAction:T,selected:q=!1,slotProps:K={},slots:Q={}}=o,oe=F(o.ContainerProps,Dt),ie=F(o,Lt),W=l.useContext(se),P=l.useMemo(()=>({dense:b||W.dense||!1,alignItems:d,disableGutters:I}),[d,W.dense,b,I]),$=l.useRef(null);De(()=>{c&&$.current&&$.current.focus()},[c]);const R=l.Children.toArray(u),Z=R.length&&Le(R[R.length-1],["ListItemSecondaryAction"]),x=a({},o,{alignItems:d,autoFocus:c,button:p,dense:P.dense,disabled:y,disableGutters:I,disablePadding:w,divider:X,hasSecondaryAction:Z,selected:q}),ae=Wt(x),B=Te($,n),le=Q.root||j.Root||$t,re=K.root||M.root||{},G=a({className:v(ae.root,re.className,g),disabled:y},ie);let O=m||"li";return p&&(G.component=m||"div",G.focusVisibleClassName=v(ee.focusVisible,N),O=We),Z?(O=!G.component&&!m?"div":O,L==="li"&&(O==="li"?O="div":G.component==="li"&&(G.component="div")),e.jsx(se.Provider,{value:P,children:e.jsxs(At,a({as:L,className:v(ae.container,S),ref:B,ownerState:x},oe,{children:[e.jsx(le,a({},re,!fe(le)&&{as:O,ownerState:a({},x,re.ownerState)},G,{children:R})),R.pop()]}))})):e.jsx(se.Provider,{value:P,children:e.jsxs(le,a({},re,{as:O,ref:B},!fe(le)&&{ownerState:a({},x,re.ownerState)},G,{children:[R,T&&e.jsx(Rt,{children:T})]}))})}),Y=Ft,Mt=["className"],Nt=t=>{const{alignItems:s,classes:n}=t;return z({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},ze,n)},Bt=k("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({theme:t,ownerState:s})=>a({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},s.alignItems==="flex-start"&&{marginTop:8})),Et=l.forwardRef(function(s,n){const o=E({props:s,name:"MuiListItemIcon"}),{className:d}=o,c=F(o,Mt),p=l.useContext(se),u=a({},o,{alignItems:p.alignItems}),g=Nt(u);return e.jsx(Bt,a({className:v(g.root,d),ownerState:u,ref:n},c))}),V=Et,zt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Gt=t=>{const{classes:s,inset:n,primary:o,secondary:d,dense:c}=t;return z({root:["root",n&&"inset",c&&"dense",o&&d&&"multiline"],primary:["primary"],secondary:["secondary"]},Ge,s)},Ot=k("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[{[`& .${be.primary}`]:s.primary},{[`& .${be.secondary}`]:s.secondary},s.root,n.inset&&s.inset,n.primary&&n.secondary&&s.multiline,n.dense&&s.dense]}})(({ownerState:t})=>a({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Ut=l.forwardRef(function(s,n){const o=E({props:s,name:"MuiListItemText"}),{children:d,className:c,disableTypography:p=!1,inset:u=!1,primary:g,primaryTypographyProps:m,secondary:j,secondaryTypographyProps:M}=o,L=F(o,zt),{dense:S}=l.useContext(se);let b=g??d,y=j;const I=a({},o,{disableTypography:p,inset:u,primary:!!b,secondary:!!y,dense:S}),w=Gt(I);return b!=null&&b.type!==i&&!p&&(b=e.jsx(i,a({variant:S?"body2":"body1",className:w.primary,component:m!=null&&m.variant?void 0:"span",display:"block"},m,{children:b}))),y!=null&&y.type!==i&&!p&&(y=e.jsx(i,a({variant:"body2",className:w.secondary,color:"text.secondary",display:"block"},M,{children:y}))),e.jsxs(Ot,a({className:v(w.root,c),ownerState:I,ref:n},L,{children:[b,y]}))}),D=Ut;var H=new Map;H.set("bold",function(t){return h.createElement(h.Fragment,null,h.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});H.set("duotone",function(t){return h.createElement(h.Fragment,null,h.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});H.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"}))});H.set("light",function(t){return h.createElement(h.Fragment,null,h.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});H.set("thin",function(t){return h.createElement(h.Fragment,null,h.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});H.set("regular",function(t){return h.createElement(h.Fragment,null,h.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Yt=function(s,n){return Ae(s,n,H)},ke=l.forwardRef(function(t,s){return h.createElement($e,Object.assign({ref:s},t,{renderPath:Yt}))});ke.displayName="Plus";const Vt=ke,_t="/assets/iso-CQORSG2c.jpg",ss=()=>{const[t,s]=l.useState(null),[n,o]=l.useState(!1),[d,c]=l.useState(!1),[p,u]=l.useState(!1),[g,m]=l.useState(!1),[j,M]=l.useState("Wallet"),[L,S]=l.useState(!1),[b,y]=l.useState(""),[I,w]=l.useState(""),X=150,N=x=>{M(x)},T=x=>{s(x.currentTarget)},q=()=>{s(null)},K=!!t,Q=K?"address-popover":void 0,oe=()=>{o(x=>!x)},ie=()=>{c(x=>!x)},W=()=>{S(!0)},P=()=>{S(!1)},$=()=>{alert("Transaction details sent for verification."),S(!1)},R=()=>{u(x=>!x)},Z=()=>{m(x=>!x)};return e.jsxs(e.Fragment,{children:[e.jsx(f,{sx:{backgroundColor:"#F5F5F5",marginBottom:3,paddingBottom:3,marginTop:2},children:e.jsx(Fe,{maxWidth:"lg",children:e.jsxs(xe,{container:!0,spacing:2,children:[e.jsxs(xe,{item:!0,xs:12,md:8,children:[e.jsxs(f,{sx:{padding:2,backgroundColor:"#fff",borderRadius:.7},children:[e.jsx(i,{variant:"h6",children:"Shipping address"}),e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,component:de,sx:{marginTop:1.5,cursor:"pointer"},onClick:T,children:[e.jsx(Vt,{size:18}),e.jsx(i,{variant:"subtitle2",children:"Add new address"})]}),e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(i,{variant:"h6",sx:{paddingTop:2},children:"Saved Address"}),e.jsx(J,{onClick:oe,children:n?e.jsx(he,{size:20}):e.jsx(pe,{size:20})})]}),e.jsx(ue,{in:n,children:e.jsxs(r,{children:[e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,component:de,sx:{marginTop:1.5,cursor:"pointer"},onClick:T,children:[e.jsx(A,{defaultChecked:!0}),e.jsx(C,{placeholder:"81 bihar uijhfdsa 3498 fjdjc ",InputProps:{sx:{height:30,padding:0,fontSize:"14px",borderRadius:.4}}})]}),e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,component:de,sx:{marginTop:1.5,cursor:"pointer"},onClick:T,children:[e.jsx(A,{}),e.jsx(C,{placeholder:"81 bihar uijhfdsa 3498 fjdjc ",InputProps:{sx:{height:30,padding:0,fontSize:"14px",borderRadius:.4}}})]})]})}),e.jsx(Me,{id:Q,open:K,anchorEl:t,onClose:q,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:e.jsxs(f,{sx:{padding:2,maxWidth:800},children:[e.jsx(r,{sx:{alignItems:"center",justifyContent:"center"},children:e.jsx(i,{variant:"subtitle2",gutterBottom:!0,children:"Add New Address"})}),e.jsxs(f,{children:[e.jsx(i,{variant:"subtitle2",sx:{paddingY:1},children:"Country/region"}),e.jsx(C,{placeholder:"INDIA",sx:{width:250},InputProps:{sx:{height:40,padding:0,fontSize:"14px",borderRadius:.5}}})]}),e.jsxs(f,{sx:{paddingY:2},children:[e.jsx(i,{variant:"subtitle2",sx:{paddingY:1},children:"Contact information"}),e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(C,{placeholder:"Contact name*",sx:{width:250,flexGrow:1},InputProps:{sx:{height:40,padding:0,fontSize:"14px",borderRadius:.5}}})," ",e.jsx(C,{placeholder:"Mobile number*",sx:{width:250,flexGrow:1},InputProps:{sx:{height:40,padding:0,fontSize:"14px",borderRadius:.5}}})]})]}),e.jsxs(f,{sx:{paddingY:2},children:[e.jsx(i,{variant:"subtitle2",sx:{paddingY:1},children:"Address"}),e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(C,{placeholder:"Street, house/apartment/unit*",sx:{width:250,flexGrow:1},InputProps:{sx:{height:40,padding:0,fontSize:"14px",borderRadius:.5}}})," ",e.jsx(C,{placeholder:"Apt,suite,unit,etc*",sx:{width:250,flexGrow:1},InputProps:{sx:{height:40,padding:0,fontSize:"14px",borderRadius:.5}}})]}),e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,sx:{paddingTop:2},children:[e.jsx(C,{placeholder:"State*",sx:{width:250,flexGrow:1},InputProps:{sx:{height:40,padding:0,fontSize:"14px",borderRadius:.5}}})," ",e.jsx(C,{placeholder:"Near By*",sx:{width:250,flexGrow:1},InputProps:{sx:{height:40,padding:0,fontSize:"14px",borderRadius:.5}}}),e.jsx(C,{placeholder:"ZIP code*",sx:{width:250,flexGrow:1},InputProps:{sx:{height:40,padding:0,fontSize:"14px",borderRadius:.5}}})]})]}),e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Ee,{defaultChecked:!0}),e.jsx(i,{variant:"body2",children:"Set as default shipping address"})]}),e.jsxs(f,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:3,marginTop:3},children:[e.jsx(U,{sx:{color:"#fff",backgroundColor:"#FD384F",borderRadius:3,paddingX:6,paddingY:1,"&:hover":{backgroundColor:"#D3031C"}},children:"Confirm"}),e.jsx(U,{sx:{color:"#000",backgroundColor:"#fff",border:"1px solid black",borderRadius:3,paddingX:6,paddingY:1},onClick:q,children:"Cancel"})]})]})})]}),e.jsxs(f,{sx:{padding:2,backgroundColor:"#fff",borderRadius:.7,marginTop:1},children:[e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(i,{variant:"h6",children:"Payment Methods"}),e.jsx(J,{onClick:ie,children:e.jsx(pe,{size:20})})]}),e.jsx(ue,{in:d,children:e.jsx(f,{sx:{padding:2,backgroundColor:"#fff",borderRadius:.7},children:e.jsxs(je,{children:[e.jsxs(Y,{button:!0,onClick:()=>N("Wallet"),children:[e.jsx(V,{children:e.jsx(A,{checked:j==="Wallet"})}),e.jsxs(r,{direction:"row",spacing:2,alignItems:"center",justifyContent:"space-between",sx:{width:"100%"},children:[e.jsx(D,{primary:"Wallet"}),j==="Wallet"&&e.jsxs(e.Fragment,{children:[e.jsxs(i,{variant:"body2",color:"textSecondary",children:["Balance: ₹",X]}),e.jsx(U,{size:"small",variant:"outlined",onClick:W,children:"Recharge"})]})]})]}),e.jsx(Y,{button:!0,onClick:()=>N("Credit Card"),disabled:!0,children:e.jsxs(r,{direction:"row",spacing:2,alignItems:"center",justifyContent:"space-between",sx:{width:"100%"},children:[e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(V,{children:e.jsx(A,{checked:j==="Credit Card",disabled:!0})}),e.jsx(D,{primary:"Credit Card"})]}),e.jsx(i,{variant:"caption",children:"Below All Currently Disabled for Security Purpose"})]})}),e.jsxs(Y,{button:!0,onClick:()=>N("PayPal"),disabled:!0,children:[e.jsx(V,{children:e.jsx(A,{checked:j==="PayPal",disabled:!0})}),e.jsx(D,{primary:"PayPal"})]}),e.jsxs(Y,{button:!0,onClick:()=>N("American Express"),disabled:!0,children:[e.jsx(V,{children:e.jsx(A,{checked:j==="American Express",disabled:!0})}),e.jsx(D,{primary:"American Express"})]})]})})})]}),e.jsx(f,{sx:{padding:2,backgroundColor:"#fff",borderRadius:.7,marginTop:1},children:e.jsxs(f,{children:[e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,paddingBottom:2,children:[e.jsx("img",{src:Be,alt:"Image Choice",style:{height:15,objectFit:"contain"}}),e.jsx(ge,{flexItem:!0,orientation:"vertical"}),e.jsx(i,{variant:"caption",children:"YanFlower879543 Shop"})]}),e.jsxs(r,{direction:"row",spacing:1,sx:{width:"100%"},children:[e.jsxs(r,{children:[e.jsx("img",{src:Ne,alt:"First Image",style:{width:80,height:80,objectFit:"contain"}}),e.jsxs(r,{sx:{marginTop:2},children:[e.jsx(i,{variant:"caption",sx:{fontSize:10},children:"Shipping: Free/Paid Shipping"}),e.jsxs(i,{variant:"caption",sx:{fontSize:10},children:["Estimated Delivery: between ",e.jsx("strong",{children:"Dec 07-11"})]})]})]}),e.jsxs(r,{children:[e.jsx(i,{sx:{width:"100%",whiteSpace:"nowrap",textDecoration:"ellipsis",overflow:"hidden"},variant:"body2",children:"kdfqoiwerjvclksd dsijcfq wemc cdsijfcwdlkmcoiwe cm c weic"}),e.jsx(i,{variant:"caption",children:"White"}),e.jsx(i,{variant:"subtitle2",children:"INR 12.34"}),e.jsxs(r,{direction:"row",alignItems:"center",sx:{width:70},spacing:2,children:[e.jsx(J,{sx:{height:20,paddingBottom:1.3,fontSize:18,backgroundColor:"#F5F5F5",width:20,cursor:"none"},children:"-"}),e.jsx(i,{variant:"caption",children:"1"}),e.jsx(J,{sx:{height:20,fontSize:18,backgroundColor:"#F5F5F5",width:20,cursor:"none"},children:"+"})]})]})]}),e.jsx(r,{sx:{paddingY:3},children:e.jsx(ge,{})})]})})]}),e.jsxs(xe,{item:!0,xs:12,md:4,children:[e.jsxs(f,{sx:{padding:2,backgroundColor:"#fff",borderRadius:.7},children:[e.jsx(i,{variant:"h6",children:"Summary"}),e.jsxs(r,{spacing:1,sx:{marginTop:2},children:[e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(i,{variant:"body2",children:"Subtotal"}),e.jsx(i,{variant:"subtitle2",children:"INR 13.78"})]}),e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(i,{variant:"body2",children:"Promo Codes"}),e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(i,{variant:"caption",children:"Enter"}),e.jsx(J,{onClick:R,children:p?e.jsx(he,{size:15}):e.jsx(pe,{size:15})})]})]}),e.jsxs(ue,{in:p,children:[e.jsxs(i,{variant:"caption",children:[" ","Promo codes are a combination of case sensitive letters and numbers, without spaces. Please be aware that promo codes have limitation and expiration dates. You might find them no longer valid by the time you apply them due to these restrictions."," "]}),e.jsx(r,{children:e.jsx(C,{placeholder:"Enter Coupon Code",InputProps:{sx:{height:43,borderRadius:.3},endAdornment:e.jsx(U,{sx:{backgroundColor:"#D3031C",color:"#fff",borderRadius:.5,"&:hover":{backgroundColor:"#FE9BA7"}},children:"Apply"})}})})]}),e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(i,{variant:"body2",children:"Shipping fee"}),e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(i,{variant:"caption",children:"Free"}),e.jsx(J,{onClick:Z,children:g?e.jsx(he,{size:15}):e.jsx(pe,{size:15})})]})]}),e.jsx(ue,{in:g,children:e.jsx(r,{sx:{backgroundColor:"#F9F9F9",width:"100%"},children:e.jsxs(je,{children:[e.jsxs(Y,{button:!0,children:[e.jsx(V,{children:e.jsx(A,{defaultChecked:!0})}),e.jsx(D,{primary:"Free Delivery"}),e.jsx(D,{primary:"₹ 00.00"})]}),e.jsxs(Y,{button:!0,children:[e.jsx(V,{children:e.jsx(A,{})}),e.jsx(D,{primary:"Standard Delivery"}),e.jsx(D,{primary:"₹ 10.50"})]}),e.jsxs(Y,{button:!0,children:[e.jsx(V,{children:e.jsx(A,{})}),e.jsx(D,{primary:"Express Delivery"}),e.jsx(D,{primary:"₹ 20.59"})]})]})})}),e.jsx(ge,{}),e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(i,{variant:"h6",children:"Total"}),e.jsx(i,{variant:"subtitle2",children:"INR 13.78"})]}),e.jsx(r,{children:e.jsx(U,{sx:{backgroundColor:"#D3031C",borderRadius:4,paddingY:1,color:"#fff","&:hover":{backgroundColor:"#FD384F"}},children:"Pay Now"})}),e.jsxs(i,{variant:"caption",children:["Upon clicking 'Place Order', I confirm i have read and acknowledged ",e.jsx(de,{children:"all terms and policies."})," "]})]})]}),e.jsxs(f,{sx:{padding:2,backgroundColor:"#fff",borderRadius:.7,marginTop:1},children:[e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(Oe,{size:25}),e.jsx(i,{variant:"h6",sx:{paddingTop:1},children:"ShopEase"})]}),e.jsx(i,{variant:"caption",children:"Shopease keeps your information and payment safe."}),e.jsx(f,{sx:{paddingTop:2},children:e.jsx("img",{src:_t,alt:"ISO IMAGE",style:{height:20,objectFit:"contain"}})})]})]})]})})}),e.jsxs(Je,{open:L,onClose:P,maxWidth:"md",fullWidth:!0,children:[e.jsx(bt,{children:"Recharge Wallet"}),e.jsx(ht,{children:e.jsxs(r,{direction:"row",spacing:4,children:[e.jsxs(r,{spacing:2,sx:{width:"50%"},children:[e.jsx(C,{label:"Transaction ID",value:b,onChange:x=>y(x.target.value),fullWidth:!0}),e.jsx(C,{label:"Amount",value:I,onChange:x=>w(x.target.value),fullWidth:!0}),e.jsx(U,{variant:"contained",onClick:$,children:"Submit for Verification"})]}),e.jsxs(r,{sx:{width:"50%"},alignItems:"center",children:[e.jsx("img",{src:"https://your-recharge-qr-code-url.com",style:{width:200,height:200,objectFit:"contain"}}),e.jsx(i,{variant:"body2",color:"textSecondary",sx:{marginTop:2},children:"Scan this QR Code to complete the recharge."})]})]})}),e.jsx(it,{children:e.jsx(U,{onClick:P,color:"primary",children:"Close"})})]})]})};export{ss as default};