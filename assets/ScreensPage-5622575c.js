import{j as e,ac as c,ad as d,ae as p,I as r,r as h,af as x,ag as m,ah as u,ai as j,aj as g,ak as b,al as S,am as f,an as v,ao as w,ap as k,aq as _,u as n,c as $,M as y}from"./index-e711b480.js";import{u as A}from"./useModal-1d4426a1.js";const F=[{title:"without priority",color:"rgba(125, 125, 125, 1)"},{title:"low",color:"#8fa1d0"},{title:"medium",color:"#e09cb5"},{title:"high",color:"#bedbb0"}],M=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Project office"}),e.jsxs(d,{children:[e.jsx(p,{children:e.jsx(r,{id:"plus",size:14})}),"Add another column"]})]}),z=()=>{const[t,a]=h.useState(null),o=s=>{s!==t&&a(s)},i=()=>{a(null)};return console.log(t),e.jsxs(x,{children:[e.jsx(m,{children:"Filters"}),e.jsxs(u,{children:[e.jsx(j,{children:"Label color"}),e.jsx(g,{onClick:i,children:"show all"})]}),e.jsx(b,{children:F.map((s,l)=>e.jsx(S,{children:e.jsxs(f,{onClick:()=>o(s.title),className:`${t===s.title?"active":""}`,children:[e.jsx(v,{className:`${t===s.title?"active":""}`,$color:s.color}),s.title]})},l))})]})},I=()=>e.jsx(w,{children:e.jsxs(k,{children:["Before starting your project, it is essential",e.jsx(_,{href:"#",children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),N=n.div`
  position: relative;
  background-color: ${({theme:t})=>t.mainDashbordBackground};
  height: 100vh;
  padding: 14px 8px 24px 20px;

  @media only screen and (min-width: 768px) {
    padding: 26px 18px 32px 32px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 10px 24px 8px 24px;
  }
`,W=n.button`
  position: absolute;
  top: 14px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:t})=>t.themeSwitcher};

  stroke: ${({theme:t})=>t.themeSwitcher};
  fill: ${({theme:t})=>t.mainDashbordBackground};
  &:active {
    stroke: ${({theme:t})=>t.themeAccent};
    color: ${({theme:t})=>t.themeAccent};
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
      stroke: ${({theme:t})=>t.themeAccent};
      color: ${({theme:t})=>t.themeAccent};
    }
  }
`,B=n.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`,L=()=>{const[t,a]=A(),{boardName:o}=$(),i=()=>{a(!1)};return e.jsxs(N,{children:[e.jsxs(W,{onClick:()=>a(),children:[e.jsx(r,{id:"filter",size:16}),e.jsx(B,{children:"Filters"})]}),!o&&e.jsx(I,{}),o&&e.jsx(M,{}),t&&e.jsx(y,{toggleModal:i,children:e.jsx(z,{})})]})};export{L as default};
