import{p as h,j as t,q as y,s as P,t as B,M,Z as g,w as l,_ as n,N as _,r as u,x as R,y as S,z as E,E as H}from"./index-DMbVIpwd.js";const N=h(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),O=h(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),U=h(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function V(o){return P("MuiCheckbox",o)}const L=y("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),x=L,F=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],q=o=>{const{classes:e,indeterminate:c,color:a,size:r}=o,s={root:["root",c&&"indeterminate",`color${l(a)}`,`size${l(r)}`]},d=H(s,V,e);return n({},e,d)},w=B(M,{shouldForwardProp:o=>g(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>n({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:_(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${x.checked}, &.${x.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${x.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),T=t.jsx(O,{}),W=t.jsx(N,{}),Z=t.jsx(U,{}),A=u.forwardRef(function(e,c){var a,r;const s=R({props:e,name:"MuiCheckbox"}),{checkedIcon:d=T,color:z="primary",icon:f=W,indeterminate:i=!1,indeterminateIcon:m=Z,inputProps:I,size:p="medium",className:$}=s,j=S(s,F),C=i?m:f,k=i?m:d,v=n({},s,{color:z,indeterminate:i,size:p}),b=q(v);return t.jsx(w,n({type:"checkbox",inputProps:n({"data-indeterminate":i},I),icon:u.cloneElement(C,{fontSize:(a=C.props.fontSize)!=null?a:p}),checkedIcon:u.cloneElement(k,{fontSize:(r=k.props.fontSize)!=null?r:p}),ownerState:v,ref:c,className:E(b.root,$)},j,{classes:b}))}),G=A;export{G as C};