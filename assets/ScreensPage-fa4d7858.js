import{r as l,j as e,C as n,D as c,E as d,F as h,G as p,H as u,J as x,K as g,O as j,P as m,Q as S,u as r,a as b,I as f,U as v,M}from"./index-6b7b1b62.js";const _=[{title:"without priority",color:"rgba(125, 125, 125, 1)"},{title:"low",color:"#8fa1d0"},{title:"medium",color:"#e09cb5"},{title:"high",color:"#bedbb0"}],k=()=>{const[s,o]=l.useState(!1);return[s,(t=!s)=>{o(t)}]},w=()=>{const[s,o]=l.useState(null),a=t=>{if(t===s){o(null);return}o(t)};return console.log(s),e.jsxs(n,{children:[e.jsx(c,{children:"Filters"}),e.jsxs(d,{children:[e.jsx(h,{children:"Label color"}),e.jsx(p,{children:"show all"})]}),e.jsx(u,{children:_.map((t,i)=>e.jsxs(x,{onClick:()=>a(t.title),className:`${s===t.title?"active":""}`,children:[e.jsx(g,{className:`${s===t.title?"active":""}`,$color:t.color}),t.title]},i))})]})},F=()=>e.jsx(j,{children:e.jsxs(m,{children:["Before starting your project, it is essential",e.jsx(S,{href:"#",children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),$=r.div`
  position: relative;
  background-color: ${({theme:s})=>s.mainDashbordBackground};
  height: calc(100vh - 68px);
  flex-basis: 100%;
`,y=r.div`
  position: absolute;
  top: 14px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  stroke: ${({theme:s})=>s.themeSwitcher};
  fill: ${({theme:s})=>s.mainDashbordBackground};
`,O=r.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({theme:s})=>s.themeSwitcher};
`,P=()=>{const[s,o]=k(),{boardName:a}=b(),t=()=>{o(!1)};return e.jsxs($,{children:[e.jsxs(y,{onClick:()=>o(),children:[e.jsx(f,{id:"filter",size:16}),e.jsx(O,{children:"Filters"})]}),!a&&e.jsx(F,{}),a&&e.jsx(v,{}),s&&e.jsx(M,{toggleModal:t,children:e.jsx(w,{})})]})},D=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{P as S,D as a,k as u};
