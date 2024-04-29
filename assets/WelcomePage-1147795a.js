import{u as e,L as n,j as t,I as a}from"./index-c3469a3e.js";import{I as r}from"./Image-21b92c32.js";import"./index-0e05dea9.js";const s=e.div`
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
`,l=e(n)`
  width: 335px;
  color: white;
  text-align: center;
  padding: 14px 0;
  border-radius: 8px;

  background: rgb(22, 22, 22);

  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`,h=()=>{const i={width:162,height:162},o={width:124,height:124};return t.jsxs(s,{children:[t.jsx(r,{desktop:i,tablet:i,mobile:o,type:"image/png",pathKey:"hero",alt:"Boy working on laptop"}),t.jsxs("h1",{children:[t.jsx(a,{id:"logo",size:48})," Task Pro"]}),t.jsx("p",{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"}),t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx(l,{to:"/auth/register","aria-label":"Link to register",children:"Registration"})}),t.jsx("li",{children:t.jsx(n,{to:"/auth/login","aria-label":"Link to login",children:"Log in"})})]})]})};export{h as default};
