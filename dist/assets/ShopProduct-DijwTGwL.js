import{p as V,j as t,q as G,s as Q,t as H,v as X,w as q,_ as T,r as R,x as Y,y as ee,z as I,E as te,R as r,I as ne,a as ae,H as x,B as P,S as re,T as C,c as A,J as se,K as oe,L as M,b as D}from"./index-DVMs5Pnf.js";import{T as ie,a as le,e as ce,c as w,d as g,f as de,b as ue,g as he}from"./TableRow-BjZIP8ze.js";import{C as B}from"./Checkbox-Dvrhi7tj.js";import{S as pe}from"./Switch-CSQJX37Z.js";import{v as me}from"./visuallyHidden-BmTxvui-.js";import{T as ge}from"./Trash.esm-D2wNu5G3.js";import"./MenuItem-DcDG5GPE.js";import"./listItemTextClasses-D81dzGan.js";const be=V(t.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function xe(e){return Q("MuiTableSortLabel",e)}const fe=G("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),y=fe,je=["active","children","className","direction","hideSortIcon","IconComponent"],ve=e=>{const{classes:n,direction:a,active:o}=e,s={root:["root",o&&"active"],icon:["icon",`iconDirection${q(a)}`]};return te(s,xe,n)},Se=H(X,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,a.active&&n.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${y.icon}`]:{opacity:.5}},[`&.${y.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${y.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),ke=H("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.icon,n[`iconDirection${q(a.direction)}`]]}})(({theme:e,ownerState:n})=>T({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},n.direction==="desc"&&{transform:"rotate(0deg)"},n.direction==="asc"&&{transform:"rotate(180deg)"})),Le=R.forwardRef(function(n,a){const o=Y({props:n,name:"MuiTableSortLabel"}),{active:s=!1,children:h,className:m,direction:j="asc",hideSortIcon:i=!1,IconComponent:v=be}=o,b=ee(o,je),S=T({},o,{active:s,direction:j,hideSortIcon:i,IconComponent:v}),L=ve(S);return t.jsxs(Se,T({className:I(L.root,m),component:"span",disableRipple:!0,ownerState:S,ref:a},b,{children:[h,i&&!s?null:t.jsx(ke,{as:v,className:I(L.icon),ownerState:S})]}))}),ye=Le;var f=new Map;f.set("bold",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M42.1,48H213.9a8,8,0,0,1,5.9,13.4l-65.7,72.3a7.8,7.8,0,0,0-2.1,5.4v56.6a7.9,7.9,0,0,1-3.6,6.7l-32,21.3a8,8,0,0,1-12.4-6.6v-78a7.8,7.8,0,0,0-2.1-5.4L36.2,61.4A8,8,0,0,1,42.1,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});f.set("duotone",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M42.1,48H213.9a8,8,0,0,1,5.9,13.4l-65.7,72.3a7.8,7.8,0,0,0-2.1,5.4v56.6a7.9,7.9,0,0,1-3.6,6.7l-32,21.3a8,8,0,0,1-12.4-6.6v-78a7.8,7.8,0,0,0-2.1-5.4L36.2,61.4A8,8,0,0,1,42.1,48Z",opacity:"0.2"}),r.createElement("path",{d:"M42.1,48H213.9a8,8,0,0,1,5.9,13.4l-65.7,72.3a7.8,7.8,0,0,0-2.1,5.4v56.6a7.9,7.9,0,0,1-3.6,6.7l-32,21.3a8,8,0,0,1-12.4-6.6v-78a7.8,7.8,0,0,0-2.1-5.4L36.2,61.4A8,8,0,0,1,42.1,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});f.set("fill",function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M228.5,49.5A15.9,15.9,0,0,0,213.9,40H42.1A16.1,16.1,0,0,0,30.2,66.8L96,139.1v78a15.9,15.9,0,0,0,8.5,14.1,16.4,16.4,0,0,0,7.5,1.9,16,16,0,0,0,8.9-2.7l32-21.4a15.9,15.9,0,0,0,7.1-13.3V139.1l65.8-72.3A15.9,15.9,0,0,0,228.5,49.5Z"}))});f.set("light",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M42.1,48H213.9a8,8,0,0,1,5.9,13.4l-65.7,72.3a7.8,7.8,0,0,0-2.1,5.4v56.6a7.9,7.9,0,0,1-3.6,6.7l-32,21.3a8,8,0,0,1-12.4-6.6v-78a7.8,7.8,0,0,0-2.1-5.4L36.2,61.4A8,8,0,0,1,42.1,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});f.set("thin",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M42.1,48H213.9a8,8,0,0,1,5.9,13.4l-65.7,72.3a7.8,7.8,0,0,0-2.1,5.4v56.6a7.9,7.9,0,0,1-3.6,6.7l-32,21.3a8,8,0,0,1-12.4-6.6v-78a7.8,7.8,0,0,0-2.1-5.4L36.2,61.4A8,8,0,0,1,42.1,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});f.set("regular",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M42.1,48H213.9a8,8,0,0,1,5.9,13.4l-65.7,72.3a7.8,7.8,0,0,0-2.1,5.4v56.6a7.9,7.9,0,0,1-3.6,6.7l-32,21.3a8,8,0,0,1-12.4-6.6v-78a7.8,7.8,0,0,0-2.1-5.4L36.2,61.4A8,8,0,0,1,42.1,48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Te=function(n,a){return ae(n,a,f)},O=R.forwardRef(function(e,n){return r.createElement(ne,Object.assign({ref:n},e,{renderPath:Te}))});O.displayName="Funnel";const Pe=O;function d(e,n,a,o,s,h){return{id:e,name:n,calories:a,fat:o,carbs:s,protein:h}}const k=[d(1,"Cupcake",305,3.7,67,4.3),d(2,"Donut",452,25,51,4.9),d(3,"Eclair",262,16,24,6),d(4,"Frozen yoghurt",159,6,24,4),d(5,"Gingerbread",356,16,49,3.9),d(6,"Honeycomb",408,3.2,87,6.5),d(7,"Ice cream sandwich",237,9,37,4.3),d(8,"Jelly Bean",375,0,94,0),d(9,"KitKat",518,26,65,7),d(10,"Lollipop",392,.2,98,0),d(11,"Marshmallow",318,0,81,2),d(12,"Nougat",360,19,9,37),d(13,"Oreo",437,18,63,4)];function F(e,n,a){return n[a]<e[a]?-1:n[a]>e[a]?1:0}function Ce(e,n){return e==="desc"?(a,o)=>F(a,o,n):(a,o)=>-F(a,o,n)}const we=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}];function W(e){const{onSelectAllClick:n,order:a,orderBy:o,numSelected:s,rowCount:h,onRequestSort:m}=e,j=i=>v=>{m(v,i)};return t.jsx(ue,{children:t.jsxs(w,{children:[t.jsx(g,{padding:"checkbox",children:t.jsx(B,{color:"primary",indeterminate:s>0&&s<h,checked:h>0&&s===h,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),we.map(i=>t.jsx(g,{align:i.numeric?"right":"left",padding:i.disablePadding?"none":"normal",sortDirection:o===i.id?a:!1,children:t.jsxs(ye,{active:o===i.id,direction:o===i.id?a:"asc",onClick:j(i.id),children:[i.label,o===i.id?t.jsx(P,{component:"span",sx:me,children:a==="desc"?"sorted descending":"sorted ascending"}):null]})},i.id))]})})}W.propTypes={numSelected:x.number.isRequired,onRequestSort:x.func.isRequired,onSelectAllClick:x.func.isRequired,order:x.oneOf(["asc","desc"]).isRequired,orderBy:x.string.isRequired,rowCount:x.number.isRequired};function $(e){const{numSelected:n}=e;return t.jsxs(he,{sx:[{pl:{sm:2},pr:{xs:1,sm:1}},n>0&&{bgcolor:a=>oe(a.palette.primary.main,a.palette.action.activatedOpacity)}],children:[n>0?t.jsxs(C,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):t.jsx(C,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Nutrition"}),n>0?t.jsx(M,{title:"Delete",children:t.jsx(D,{children:t.jsx(ge,{})})}):t.jsx(M,{title:"Filter list",children:t.jsx(D,{children:t.jsx(Pe,{})})})]})}$.propTypes={numSelected:x.number.isRequired};const qe=()=>{const[e,n]=r.useState("asc"),[a,o]=r.useState("calories"),[s,h]=r.useState([]),[m,j]=r.useState(0),[i,v]=r.useState(!1),[b,S]=r.useState(5),L=(l,p)=>{n(a===p&&e==="asc"?"desc":"asc"),o(p)},N=l=>{if(l.target.checked){const p=k.map(c=>c.id);h(p);return}h([])},Z=(l,p)=>{const c=s.indexOf(p);let u=[];c===-1?u=u.concat(s,p):c===0?u=u.concat(s.slice(1)):c===s.length-1?u=u.concat(s.slice(0,-1)):c>0&&(u=u.concat(s.slice(0,c),s.slice(c+1))),h(u)},z=(l,p)=>{j(p)},U=l=>{S(parseInt(l.target.value,10)),j(0)},_=l=>{v(l.target.checked)},E=m>0?Math.max(0,(1+m)*b-k.length):0,K=R.useMemo(()=>[...k].sort(Ce(e,a)).slice(m*b,m*b+b),[e,a,m,b]);return t.jsx(t.Fragment,{children:t.jsxs(P,{sx:{width:"100%"},children:[t.jsx(re,{sx:{direction:"row",alignItems:"center",justifyContent:"center"},children:t.jsx(C,{variant:"h6",children:"Our Shop Product"})}),t.jsx(A,{sx:{height:400,width:"100%"},children:t.jsxs(P,{sx:{width:"100%"},children:[t.jsxs(A,{sx:{width:"100%",mb:2},children:[t.jsx($,{numSelected:s.length}),t.jsx(ie,{children:t.jsxs(le,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:i?"small":"medium",children:[t.jsx(W,{numSelected:s.length,order:e,orderBy:a,onSelectAllClick:N,onRequestSort:L,rowCount:k.length}),t.jsxs(ce,{children:[K.map((l,p)=>{const c=s.includes(l.id),u=`enhanced-table-checkbox-${p}`;return t.jsxs(w,{hover:!0,onClick:J=>Z(J,l.id),role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,sx:{cursor:"pointer"},children:[t.jsx(g,{padding:"checkbox",children:t.jsx(B,{color:"primary",checked:c,inputProps:{"aria-labelledby":u}})}),t.jsx(g,{component:"th",id:u,scope:"row",padding:"none",children:l.name}),t.jsx(g,{align:"right",children:l.calories}),t.jsx(g,{align:"right",children:l.fat}),t.jsx(g,{align:"right",children:l.carbs}),t.jsx(g,{align:"right",children:l.protein})]},l.id)}),E>0&&t.jsx(w,{style:{height:(i?33:53)*E},children:t.jsx(g,{colSpan:6})})]})]})}),t.jsx(de,{rowsPerPageOptions:[5,10,25],component:"div",count:k.length,rowsPerPage:b,page:m,onPageChange:z,onRowsPerPageChange:U})]}),t.jsx(se,{control:t.jsx(pe,{checked:i,onChange:_}),label:"Dense padding"})]})})]})})};export{qe as default};
