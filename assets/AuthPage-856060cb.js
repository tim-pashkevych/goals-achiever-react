import{u as o,j as e,a as l,N as n,B as t}from"./index-37687818.js";const a=o.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,d=o.div`
  width: 335px;
  padding: 24px;
  border-radius: 8px;
  background: rgb(21, 21, 21);

  @media only screen and (min-width: 768px) {
    width: 424px;
    padding: 40px;
  }

  ul {
    display: flex;
    gap: 14px;
  }
  a {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: rgba(255, 255, 255, 0.3);
  }
  a.active {
    color: rgb(255, 255, 255);
  }
`,c=o.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,i=o.input`
  width: 100%;
  height: 49px;
  padding-left: 14px;
  display: flex;
  border-radius: 7px;
  outline: none;
  border: 1px solid;
  border-color: ${({theme:r})=>r.secondaryColor};
  background-color: ${({theme:r})=>r.background};
  color: ${({theme:r})=>r.textOne};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({theme:r})=>r.secondaryColorHover};
  }
`,p=()=>e.jsx("div",{children:e.jsxs(c,{action:"",children:[e.jsx(i,{type:"name",placeholder:"Enter your name"}),e.jsx(i,{type:"email",placeholder:"Enter your email"}),e.jsx(i,{type:"password",placeholder:"Create a password"})]})}),x=o.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,s=o.input`
  width: 100%;
  height: 49px;
  padding-left: 14px;
  display: flex;
  border-radius: 7px;
  outline: none;
  border: 1px solid;
  border-color: ${({theme:r})=>r.secondaryColor};
  background-color: ${({theme:r})=>r.background};
  color: ${({theme:r})=>r.textOne};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({theme:r})=>r.secondaryColorHover};
  }
`,g=()=>e.jsx("div",{children:e.jsxs(x,{action:"",children:[e.jsx(s,{type:"email",placeholder:"Enter your email"}),e.jsx(s,{type:"password",placeholder:"Create a password"})]})}),u=()=>{const{id:r}=l();return e.jsx(a,{children:e.jsxs(d,{children:[e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{to:"/auth/register",children:"Register"})}),e.jsx("li",{children:e.jsx(n,{to:"/auth/login",children:"Login"})})]})}),r==="register"&&e.jsx(p,{}),r==="login"&&e.jsx(g,{}),r==="register"&&e.jsx(t,{title:"Register Now",icon:!1}),r==="login"&&e.jsx(t,{title:"Log In Now",icon:!1})]})})};export{u as default};
