import{u as e,L as n,a as r,s,j as t,I as l}from"./index-8e54e5a6.js";import{I as d}from"./Image-fcb1469d.js";import"./index-0e05dea9.js";const p=e.div`
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 14px;

  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;

    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;

    @media only screen and (min-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    width: 334px;
    text-align: center;
    margin-bottom: 34px;

    @media only screen and (min-width: 768px) {
      width: 473px;
      margin-bottom: 18px;
    }
  }

  ul > li:first-child {
    padding: 14px;
  }

  a {
    display: block;
    font-weight: 500;
    text-align: center;
  }
`,c=e(n)`
  width: 335px;
  color: white;
  text-align: center;
  padding: 14px 0;
  border-radius: 8px;

  background: rgb(22, 22, 22);

  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`,m=()=>{const o=r(s),i={width:162,height:162},a={width:124,height:124};return!o&&t.jsxs(p,{children:[t.jsx(d,{desktop:i,tablet:i,mobile:a,type:"image/png",pathKey:"hero",alt:"Boy working on laptop"}),t.jsxs("h1",{children:[t.jsx(l,{id:"logo",size:48})," Task Pro"]}),t.jsx("p",{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"}),t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx(c,{to:"/auth/register","aria-label":"Link to register",children:"Registration"})}),t.jsx("li",{children:t.jsx(n,{to:"/auth/login","aria-label":"Link to login",children:"Log in"})})]})]})};export{m as default};
