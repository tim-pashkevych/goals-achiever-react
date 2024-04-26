import{j as e,aq as b,ar as f,as as v,at as C,au as w,av as p,aw as j,ax as $,ay as y,az as M,aA as n,aB as k,aC as l,aD as c,k as d,aE as I,aF as A,aG as B,aH as W,aI as u,aJ as F,aK as L,aL as D,aM as P,aN as z,aO as R,aP as T,aQ as N,aR as E,I as m,r as O,aS as V,aT as q,aU as G,aV as H,aW as J,aX as K,aY as Q,aZ as U,a_ as X,u as h,c as Y,M as Z}from"./index-d3f8a077.js";import{u as ee}from"./useModal-75ed4bc2.js";import{B as se}from"./Button-0a93f06e.js";const te=[{title:"without priority",color:"rgba(125, 125, 125, 1)"},{title:"low",color:"#8fa1d0"},{title:"medium",color:"#e09cb5"},{title:"high",color:"#bedbb0"}],ae=({title:s="The watch spot design",description:t="Create a visually stunning and eye-catching watch dial design that embodies our brand's...",deadline:a="12/05/2023",priority:r="Low"})=>{const i=()=>{},o=()=>{const S=Math.floor(Math.random()*256).toString(16).padStart(2,"0"),g=Math.floor(Math.random()*256).toString(16).padStart(2,"0"),_=Math.floor(Math.random()*256).toString(16).padStart(2,"0");return"#"+S+g+_},x=o();return e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",inset:0},children:e.jsxs(b,{$stickerColor:x,children:[e.jsx(f,{children:s}),e.jsx(v,{children:t}),e.jsxs(C,{children:[e.jsxs(w,{children:[e.jsxs(p,{children:[e.jsx(j,{children:"Priority"}),e.jsx($,{$priorityColor:x,children:r})]}),e.jsxs(p,{children:[e.jsx(j,{children:"Deadline"}),e.jsx(y,{children:a})]})]}),e.jsxs(M,{children:[e.jsx("svg",{width:16,height:16,stroke:o(),children:e.jsx("use",{href:`${n}#icon-bell`})}),e.jsxs(k,{children:[e.jsx(l,{children:e.jsx(c,{children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-normal`})})})}),e.jsx(l,{children:e.jsx(c,{children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-pencil`})})})}),e.jsx(l,{children:e.jsx(c,{onClick:()=>i(),children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-trash`})})})})]})]})]})]})})},ie=({title:s,id:t})=>{const a=d(r=>I(r,t));return e.jsxs(A,{children:[e.jsxs(B,{children:[e.jsx("div",{children:s}),e.jsxs(W,{children:[e.jsx("button",{children:e.jsx(u,{width:16,height:16,children:e.jsx("use",{href:n+"#icon-pencil"})})}),e.jsx("button",{children:e.jsx(u,{width:16,height:16,children:e.jsx("use",{href:n+"#icon-trash"})})})]})]}),e.jsx(F,{children:e.jsx(L,{children:a.map(r=>e.jsx(ae,{...r},r._id))})}),e.jsx(D,{children:e.jsx(se,{title:"Add another card",icon:!0,size:"large",style:{width:3340}})})]})},re=()=>{const s=d(P),t=d(z);return e.jsxs(e.Fragment,{children:[e.jsx(R,{children:s==null?void 0:s.title}),e.jsxs(T,{children:[t&&t.map(a=>e.jsx(ie,{title:a.title,id:a._id,...a},a._id)),e.jsxs(N,{children:[e.jsx(E,{children:e.jsx(m,{id:"plus",size:14})}),"Add another column"]})]})]})},ne=()=>{const[s,t]=O.useState(null),a=i=>{i!==s&&t(i)},r=()=>{t(null)};return e.jsxs(V,{children:[e.jsx(q,{children:"Filters"}),e.jsxs(G,{children:[e.jsx(H,{children:"Label color"}),e.jsx(J,{onClick:r,children:"show all"})]}),e.jsx(K,{children:te.map((i,o)=>e.jsx(Q,{children:e.jsxs(U,{onClick:()=>a(i.title),className:`${s===i.title?"active":""}`,children:[e.jsx(X,{className:`${s===i.title?"active":""}`,$color:i.color}),i.title]})},o))})]})},oe=h.div`
  position: relative;
  background-color: ${({theme:s})=>s.mainDashbordBackground};
  height: 100vh;
  padding: 14px 8px 24px 20px;

  @media only screen and (min-width: 768px) {
    padding: 26px 18px 32px 32px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 10px 24px 8px 24px;
  }
`,le=h.button`
  position: absolute;
  top: 14px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:s})=>s.themeSwitcher};

  stroke: ${({theme:s})=>s.themeSwitcher};
  fill: ${({theme:s})=>s.mainDashbordBackground};
  &:active {
    stroke: ${({theme:s})=>s.themeAccent};
    color: ${({theme:s})=>s.themeAccent};
  }
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 32px;
  }
  @media only screen and (min-width: 1440px) {
    top: 14px;
    right: 24px;

    &:hover,
    &:focus {
      stroke: ${({theme:s})=>s.themeAccent};
      color: ${({theme:s})=>s.themeAccent};
    }
  }
`,ce=h.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`,je=()=>{const[s,t]=ee();Y();const a=()=>{t(!1)};return e.jsxs(oe,{children:[e.jsxs(le,{onClick:()=>t(),children:[e.jsx(m,{id:"filter",size:16}),e.jsx(ce,{children:"Filters"})]}),!1,e.jsx(re,{}),s&&e.jsx(Z,{toggleModal:a,children:e.jsx(ne,{})})]})};export{je as default};
