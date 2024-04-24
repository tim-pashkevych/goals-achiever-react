import{r as i,j as e,q as c,s as d,v as h,w as p,I as l,x as u,y as x,z as j,A as S,B as g,C as b,D as m,E as f,F as v,G as _,H as M,J as w,K as k,u as r,a as $,M as y}from"./index-743917d7.js";const F=[{title:"without priority",color:"rgba(125, 125, 125, 1)"},{title:"low",color:"#8fa1d0"},{title:"medium",color:"#e09cb5"},{title:"high",color:"#bedbb0"}],z=()=>{const[s,o]=i.useState(!1);return[s,(t=!s)=>{o(t)}]},D=()=>e.jsxs(c,{children:[e.jsx(d,{children:"Project office"}),e.jsxs(h,{children:[e.jsx(p,{children:e.jsx(l,{id:"plus",size:14})}),"Add another column"]})]}),T=()=>{const[s,o]=i.useState(null),a=t=>{if(t===s){o(null);return}o(t)};return console.log(s),e.jsxs(u,{children:[e.jsx(x,{children:"Filters"}),e.jsxs(j,{children:[e.jsx(S,{children:"Label color"}),e.jsx(g,{children:"show all"})]}),e.jsx(b,{children:F.map((t,n)=>e.jsxs(m,{onClick:()=>a(t.title),className:`${s===t.title?"active":""}`,children:[e.jsx(f,{className:`${s===t.title?"active":""}`,$color:t.color}),t.title]},n))})]})},I=()=>e.jsx(v,{children:e.jsxs(_,{children:["Before starting your project, it is essential",e.jsx(M,{href:"#",children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})});w.withTypes();k.withTypes();const O=r.div`
  position: relative;
  background-color: ${({theme:s})=>s.mainDashbordBackground};
  height: calc(100vh - 68px);
  flex-basis: 100%;
`,P=r.div`
  position: absolute;
  top: 14px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  stroke: ${({theme:s})=>s.themeSwitcher};
  fill: ${({theme:s})=>s.mainDashbordBackground};
`,A=r.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({theme:s})=>s.themeSwitcher};
`,B=()=>{const[s,o]=z(),{boardName:a}=$(),t=()=>{o(!1)};return e.jsxs(O,{children:[e.jsxs(P,{onClick:()=>o(),children:[e.jsx(l,{id:"filter",size:16}),e.jsx(A,{children:"Filters"})]}),!a&&e.jsx(I,{}),a&&e.jsx(D,{}),s&&e.jsx(y,{toggleModal:t,children:e.jsx(T,{})})]})},W=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{B as S,W as a,z as u};
