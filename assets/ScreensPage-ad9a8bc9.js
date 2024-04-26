import{j as e,ad as C,ae as w,af as $,ag as y,ah as M,ai as j,aj as u,ak as k,al as I,am as A,an as r,ao as B,ap as l,aq as c,k as d,ar as W,as as F,at as L,au as D,av as m,aw as z,ax as P,ay as N,az as R,aA as T,aB as E,aC as O,aD as V,aE as q,I as S,r as G,aF as H,aG as J,aH as K,aI as Q,aJ as U,aK as X,aL as Y,aM as Z,aN as ee,u as h,c as se,M as te}from"./index-de336031.js";import{u as ae}from"./useModal-10e0fac4.js";import{B as ie}from"./Button-4e8592a0.js";const ne=[{title:"without priority",color:"rgba(125, 125, 125, 1)"},{title:"low",color:"#8fa1d0"},{title:"medium",color:"#e09cb5"},{title:"high",color:"#bedbb0"}],re=({title:s="The watch spot design",description:t="Create a visually stunning and eye-catching watch dial design that embodies our brand's...",deadline:a="12/05/2023",priority:n="Low",_id:i,columnId:o,boardId:g})=>{const _=()=>{console.log({_id:i,columnId:o,boardId:g})},x=()=>{const b=Math.floor(Math.random()*256).toString(16).padStart(2,"0"),f=Math.floor(Math.random()*256).toString(16).padStart(2,"0"),v=Math.floor(Math.random()*256).toString(16).padStart(2,"0");return"#"+b+f+v},p=x();return e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",inset:0},children:e.jsxs(C,{$stickerColor:p,children:[e.jsx(w,{children:s}),e.jsx($,{children:t}),e.jsxs(y,{children:[e.jsxs(M,{children:[e.jsxs(j,{children:[e.jsx(u,{children:"Priority"}),e.jsx(k,{$priorityColor:p,children:n})]}),e.jsxs(j,{children:[e.jsx(u,{children:"Deadline"}),e.jsx(I,{children:a})]})]}),e.jsxs(A,{children:[e.jsx("svg",{width:16,height:16,stroke:x(),children:e.jsx("use",{href:`${r}#icon-bell`})}),e.jsxs(B,{children:[e.jsx(l,{children:e.jsx(c,{children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${r}#icon-normal`})})})}),e.jsx(l,{children:e.jsx(c,{children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${r}#icon-pencil`})})})}),e.jsx(l,{children:e.jsx(c,{onClick:()=>_(),children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${r}#icon-trash`})})})})]})]})]})]})})},oe=({title:s,id:t})=>{const a=d(n=>W(n,t));return e.jsxs(F,{children:[e.jsxs(L,{children:[e.jsx("div",{children:s}),e.jsxs(D,{children:[e.jsx("button",{children:e.jsx(m,{width:16,height:16,children:e.jsx("use",{href:r+"#icon-pencil"})})}),e.jsx("button",{children:e.jsx(m,{width:16,height:16,children:e.jsx("use",{href:r+"#icon-trash"})})})]})]}),e.jsx(z,{children:e.jsx(P,{children:a.map(n=>e.jsx(re,{...n},n._id))})}),e.jsx(N,{children:e.jsx(ie,{title:"Add another card",icon:!0,size:"large",style:{width:3340}})})]})},le=()=>{const s=d(R),t=d(T);return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:s==null?void 0:s.title}),e.jsxs(O,{children:[t&&t.map(a=>e.jsx(oe,{title:a.title,id:a._id,...a},a._id)),e.jsxs(V,{children:[e.jsx(q,{children:e.jsx(S,{id:"plus",size:14})}),"Add another column"]})]})]})},ce=()=>{const[s,t]=G.useState(null),a=i=>{i!==s&&t(i)},n=()=>{t(null)};return console.log(s),e.jsxs(H,{children:[e.jsx(J,{children:"Filters"}),e.jsxs(K,{children:[e.jsx(Q,{children:"Label color"}),e.jsx(U,{onClick:n,children:"show all"})]}),e.jsx(X,{children:ne.map((i,o)=>e.jsx(Y,{children:e.jsxs(Z,{onClick:()=>a(i.title),className:`${s===i.title?"active":""}`,children:[e.jsx(ee,{className:`${s===i.title?"active":""}`,$color:i.color}),i.title]})},o))})]})},de=h.div`
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
`,he=h.button`
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
`,xe=h.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`,Se=()=>{const[s,t]=ae();se();const a=()=>{t(!1)};return e.jsxs(de,{children:[e.jsxs(he,{onClick:()=>t(),children:[e.jsx(S,{id:"filter",size:16}),e.jsx(xe,{children:"Filters"})]}),!1,e.jsx(le,{}),s&&e.jsx(te,{toggleModal:a,children:e.jsx(ce,{})})]})};export{Se as default};
