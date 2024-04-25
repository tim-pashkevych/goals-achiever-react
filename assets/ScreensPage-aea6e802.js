import{j as e,a4 as n,a5 as c,a6 as d,a7 as h,I as i,r as p,a8 as x,a9 as u,aa as j,ab as m,ac as b,ad as S,ae as f,af as g,ag as v,ah as _,ai as k,u as r,c as w,M}from"./index-9ddceb22.js";import{u as $}from"./useModal-b5a688ea.js";const F=[{title:"without priority",color:"rgba(125, 125, 125, 1)"},{title:"low",color:"#8fa1d0"},{title:"medium",color:"#e09cb5"},{title:"high",color:"#bedbb0"}],y=()=>e.jsxs(n,{children:[e.jsx(c,{children:"Project office"}),e.jsxs(d,{children:[e.jsx(h,{children:e.jsx(i,{id:"plus",size:14})}),"Add another column"]})]}),z=()=>{const[s,t]=p.useState(null),o=a=>{if(a===s){t(null);return}t(a)};return console.log(s),e.jsxs(x,{children:[e.jsx(u,{children:"Filters"}),e.jsxs(j,{children:[e.jsx(m,{children:"Label color"}),e.jsx(b,{children:"show all"})]}),e.jsx(S,{children:F.map((a,l)=>e.jsxs(f,{onClick:()=>o(a.title),className:`${s===a.title?"active":""}`,children:[e.jsx(g,{className:`${s===a.title?"active":""}`,$color:a.color}),a.title]},l))})]})},D=()=>e.jsx(v,{children:e.jsxs(_,{children:["Before starting your project, it is essential",e.jsx(k,{href:"#",children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),I=r.div`
  position: relative;
  background-color: ${({theme:s})=>s.mainDashbordBackground};
  height: calc(100vh - 68px);
  flex-basis: 100%;
`,N=r.div`
  position: absolute;
  top: 14px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  stroke: ${({theme:s})=>s.themeSwitcher};
  fill: ${({theme:s})=>s.mainDashbordBackground};
`,W=r.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({theme:s})=>s.themeSwitcher};
`,L=()=>{const[s,t]=$(),{boardName:o}=w(),a=()=>{t(!1)};return e.jsxs(I,{children:[e.jsxs(N,{onClick:()=>t(),children:[e.jsx(i,{id:"filter",size:16}),e.jsx(W,{children:"Filters"})]}),!o&&e.jsx(D,{}),o&&e.jsx(y,{}),s&&e.jsx(M,{toggleModal:a,children:e.jsx(z,{})})]})};export{L as default};
