import{R as c,j as a,S as p,T as P,c as j}from"./index-DVMs5Pnf.js";import{T as f,a as u,b as y,c as h,d as g,e as C,f as S}from"./TableRow-BjZIP8ze.js";import"./MenuItem-DcDG5GPE.js";import"./listItemTextClasses-D81dzGan.js";const m=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:t=>t.toLocaleString("en-US")},{id:"size",label:"Size (km²)",minWidth:170,align:"right",format:t=>t.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:t=>t.toFixed(2)}];function e(t,s,n,l){const d=n/l;return{name:t,code:s,population:n,size:l,density:d}}const x=[e("India","IN",1324171354,3287263),e("China","CN",1403500365,9596961),e("Italy","IT",60483973,301340),e("United States","US",327167434,9833520),e("Canada","CA",37602103,9984670),e("Australia","AU",25475400,7692024),e("Germany","DE",83019200,357578),e("Ireland","IE",4857e3,70273),e("Mexico","MX",126577691,1972550),e("Japan","JP",126317e3,377973),e("France","FR",67022e3,640679),e("United Kingdom","GB",67545757,242495),e("Russia","RU",146793744,17098246),e("Nigeria","NG",200962417,923768),e("Brazil","BR",210147125,8515767)],v=()=>{const[t,s]=c.useState(0),[n,l]=c.useState(10),d=(i,r)=>{s(r)},b=i=>{l(+i.target.value),s(0)};return a.jsxs(a.Fragment,{children:[a.jsx(p,{direction:"row",alignItems:"center",justifyContent:"center",sx:{paddingY:5},children:a.jsx(P,{variant:"h6",children:"All Created or Available Brand"})}),a.jsxs(j,{sx:{width:"100%",overflow:"hidden"},children:[a.jsx(f,{sx:{maxHeight:440},children:a.jsxs(u,{stickyHeader:!0,"aria-label":"sticky table",children:[a.jsx(y,{children:a.jsx(h,{children:m.map(i=>a.jsx(g,{align:i.align,style:{minWidth:i.minWidth},children:i.label},i.id))})}),a.jsx(C,{children:x.slice(t*n,t*n+n).map(i=>a.jsx(h,{hover:!0,role:"checkbox",tabIndex:-1,children:m.map(r=>{const o=i[r.id];return a.jsx(g,{align:r.align,children:r.format&&typeof o=="number"?r.format(o):o},r.id)})},i.code))})]})}),a.jsx(S,{rowsPerPageOptions:[10,25,100],component:"div",count:x.length,rowsPerPage:n,page:t,onPageChange:d,onRowsPerPageChange:b})]})]})};export{v as default};
