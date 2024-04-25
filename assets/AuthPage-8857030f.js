import{u as a,a as x,r as g,j as o,b as m,l as u,c as f,N as c}from"./index-1722f8c8.js";import{B as h}from"./Button-52d51b22.js";const j=a.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,b=a.div`
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
`,y=a.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,d=a.input`
  width: 100%;
  height: 49px;
  padding-left: 14px;
  display: flex;
  border-radius: 7px;
  outline: none;
  border: 1px solid;
  border-color: ${({theme:e})=>e.secondaryColor};
  background-color: ${({theme:e})=>e.background};
  color: ${({theme:e})=>e.textOne};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({theme:e})=>e.secondaryColorHover};
  }
`,w=()=>{const e=x(),[n,s]=g.useState({}),r=t=>{s({...n,[t.target.name]:t.target.value})},i=t=>{t.preventDefault();const l={email:n.email,password:n.password,name:n.name};e(m(l))};return o.jsx("div",{children:o.jsxs(y,{action:"",onSubmit:i,children:[o.jsx(d,{type:"name",name:"name",placeholder:"Enter your name",onChange:r}),o.jsx(d,{type:"email",name:"email",placeholder:"Enter your email",onChange:r}),o.jsx(d,{type:"password",name:"password",placeholder:"Create a password",onChange:r}),o.jsx(h,{title:"Register Now",icon:!1})]})})},v=a.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,p=a.input`
  width: 100%;
  height: 49px;
  padding-left: 14px;
  display: flex;
  border-radius: 7px;
  outline: none;
  border: 1px solid;
  border-color: ${({theme:e})=>e.secondaryColor};
  background-color: ${({theme:e})=>e.background};
  color: ${({theme:e})=>e.textOne};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({theme:e})=>e.secondaryColorHover};
  }
`,C=()=>{const e=x(),[n,s]=g.useState({}),r=t=>{s({...n,[t.target.name]:t.target.value})},i=t=>{t.preventDefault();const l={email:n.email,password:n.password};e(u(l))};return o.jsx("div",{children:o.jsxs(v,{action:"",onSubmit:i,children:[o.jsx(p,{type:"email",name:"email",placeholder:"Enter your email",onChange:r}),o.jsx(p,{type:"password",name:"password",placeholder:"Create a password",onChange:r}),o.jsx(h,{title:"Log In Now",icon:!1})]})})},$=()=>{const{id:e}=f();return o.jsx(j,{children:o.jsxs(b,{children:[o.jsx("nav",{children:o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(c,{to:"/auth/register",children:"Register"})}),o.jsx("li",{children:o.jsx(c,{to:"/auth/login",children:"Login"})})]})}),e==="register"&&o.jsx(w,{}),e==="login"&&o.jsx(C,{})]})})};export{$ as default};
