import{u as e,L as a,a as s,s as l,j as t,I as c}from"./index-8c1076a1.js";import{I as d}from"./Image-c2084c96.js";const p=e.div`
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

  a {
    display: block;
    font-weight: 500;
    text-align: center;
  }
`,h=e.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 0;

  & > li:first-child > a {
    border: 1px solid white;
  }

  & > li:first-child > a:hover {
    border-color: transparent;
  }
`,o=e(a)`
  width: 335px;
  text-align: center;
  padding: 14px 0;
  border-radius: 8px;

  color: black;
  background-color: transparent;

  transition:
    background-color 500ms ease-in-out,
    color 500ms ease-in-out,
    border-color 250ms ease-in-out;

  &:hover {
    background-color: rgb(22, 22, 22);
    color: white;
  }

  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`,m=()=>{const n=s(l),i={width:162,height:162},r={width:124,height:124};return!n&&t.jsxs(p,{children:[t.jsx(d,{desktop:i,tablet:i,mobile:r,type:"image/png",pathKey:"hero",alt:"Boy working on laptop"}),t.jsxs("h1",{children:[t.jsx(c,{id:"logo",size:48})," Task Pro"]}),t.jsx("p",{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"}),t.jsxs(h,{children:[t.jsx("li",{children:t.jsx(o,{to:"/auth/register","aria-label":"Link to register",children:"Registration"})}),t.jsx("li",{children:t.jsx(o,{to:"/auth/login","aria-label":"Link to login",children:"Log in"})})]})]})};export{m as default};
