import{r as f,e as C,a as h,k as $,d as v,bV as w,f as E,o as F,j as e,bW as z,bX as T,bY as D,bZ as M,b_ as A,b$ as L,c0 as x,c1 as m,c2 as g,c3 as j,c4 as S,I as R,c5 as N,c6 as O,c7 as P,c8 as V,c9 as W,ca as Y,cb as _,cc as b,g as K}from"./index-99fc1da3.js";import{a as X,I as Z}from"./Image-e53ca638.js";import{B as q}from"./Button-32740f5f.js";const Q=()=>{const[a,o]=f.useState(!1);return[a,(r=!a)=>{o(r)}]},y=["project","star","loading","puzzle-piece","container","lightning","colors","hexagon"],U=({boardId:a,handleCloseModal:o})=>{var p;const n=C(),r=h($),i=v(),t=h(s=>w(s,a)),u=X.filter(s=>s.themes.includes(r)),{register:c,handleSubmit:B,formState:{errors:l,dirtyFields:k}}=E({resolver:F(O),defaultValues:{title:t==null?void 0:t.title,icon:(t==null?void 0:t.icon)||y[0],backgroundImage:(t==null?void 0:t.backgroundImage)||u[0].key},mode:"onChange"}),d={width:28,height:28},I=s=>{a?i(P({newBoardBody:s,id:a})).unwrap().then(()=>{n(`/home/${s.title}`),o()}):i(V(s)).unwrap().then(()=>{n(`/home/${s.title}`),o()})};return e.jsx(z,{children:e.jsxs(T,{onSubmit:B(I),children:[e.jsx(D,{children:t?"Edit board":"New board"}),e.jsxs(M,{children:[e.jsx(A,{type:"text",autoFocus:!0,...c("title"),placeholder:"Title",$hasError:!!l.title}),((p=l.title)==null?void 0:p.message)&&k&&e.jsx(L,{children:l.title.message})]}),e.jsxs(x,{children:[e.jsx(m,{children:"Icons"}),e.jsx(g,{$gap:"11px",children:y.map(s=>e.jsxs(j,{children:[e.jsx(S,{type:"radio",...c("icon"),value:s}),e.jsx(R,{id:s,size:18})]},s))})]}),e.jsxs(x,{children:[e.jsx(m,{children:"Background"}),e.jsx(g,{$width:"252px",$gap:"4px",children:u.map(s=>e.jsxs(j,{children:[e.jsx(S,{type:"radio",...c("backgroundImage"),value:s.key}),e.jsx(Z,{desktop:d,tablet:d,mobile:d,type:"image/png",pathKey:s.key,alt:s.alt,imageCategory:"boardIcons"})]},s.key))})]}),e.jsx(N,{children:e.jsx(q,{title:t?"Edit":"Create",icon:!0,size:"large",style:{width:3340}})})]})})},ee=({closeModal:a,approveModal:o,isLoading:n,action:r,logout:i=!1})=>e.jsxs(W,{children:[e.jsxs(Y,{children:["Are you sure you want to ",r,"?"]}),e.jsxs(_,{children:[e.jsx(b,{type:"button",onClick:o,disabled:n,children:i?"Log out":"Yes"}),e.jsx(b,{type:"button",onClick:()=>a(),children:"Cancel"})]}),n&&e.jsx(K,{})]});export{U as B,ee as C,Q as u};
