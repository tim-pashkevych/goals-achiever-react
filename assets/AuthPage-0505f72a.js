import{u as i,c as S,a as h,b as C,r as g,j as e,d as F,B as p,l as L,e as M,N as y}from"./index-ed1eb0b4.js";import{u as $,B as E,o as k}from"./yup-35db3daf.js";const R=i.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,D=i.div`
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
`,P=i.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,b=i.input`
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
`,N=S({name:h().max(30,"Max length must be less than 30 chars"),email:h().email().max(30,"Max length must be less than 30 chars"),password:h().min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),_=()=>{var d,m,s;const r=C(),[x,u]=g.useState({}),[l,c]=g.useState(),{register:t,handleSubmit:f,formState:{errors:a}}=$({mode:"onChange",resolver:k(N)}),o=n=>{u({...x,[n.target.name]:n.target.value})},j=n=>{c(""),r(F(n)).unwrap().catch(w=>{c(w),w==="Email in use"?p.error("User already exists. Please choose a different email."):p.error("Sorry, something went wrong. Please try again later.")})};return e.jsxs("div",{children:[e.jsxs(P,{action:"",onSubmit:f(j),children:[e.jsx(b,{type:"name",name:"name",placeholder:"Enter your name",onChange:o,...t("name")}),((d=a.name)==null?void 0:d.message)&&e.jsx("div",{children:a.name.message}),e.jsx(b,{type:"text",name:"email",placeholder:"Enter your email",onChange:o,...t("email")}),((m=a.email)==null?void 0:m.message)&&e.jsx("div",{children:a.email.message}),e.jsx(b,{type:"password",name:"password",placeholder:"Create a password",onChange:o,...t("password")}),((s=a.password)==null?void 0:s.message)&&e.jsx("div",{children:a.password.message}),e.jsx(E,{title:"Register Now",icon:!1})]}),l&&e.jsx("div",{children:l})]})},B=i.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,v=i.input`
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
`,A=S({email:h().email().max(30,"Max length must be less than 30 chars"),password:h().min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),H=()=>{var d,m;const r=C(),[x,u]=g.useState({}),[l,c]=g.useState(),{register:t,handleSubmit:f,formState:{errors:a}}=$({mode:"onChange",resolver:k(A)}),o=s=>{u({...x,[s.target.name]:s.target.value})},j=s=>{c(""),r(L(s)).unwrap().catch(n=>{c(n),n.includes("401")?p.error("Email or password is wrong."):p.error("Sorry, something went wrong. Please try again later.")})};return e.jsxs("div",{children:[e.jsxs(B,{action:"",onSubmit:f(j),children:[e.jsx(v,{type:"email",name:"email",placeholder:"Enter your email",onChange:o,...t("email")}),((d=a.name)==null?void 0:d.message)&&e.jsx("div",{children:a.name.message}),e.jsx(v,{type:"password",name:"password",placeholder:"Create a password",onChange:o,...t("password")}),((m=a.name)==null?void 0:m.message)&&e.jsx("div",{children:a.name.message}),e.jsx(E,{title:"Log In Now",icon:!1})]}),l&&e.jsx("div",{children:l})]})},T=()=>{const{id:r}=M();return e.jsx(R,{children:e.jsxs(D,{children:[e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(y,{to:"/auth/register",children:"Register"})}),e.jsx("li",{children:e.jsx(y,{to:"/auth/login",children:"Login"})})]})}),r==="register"&&e.jsx(_,{}),r==="login"&&e.jsx(H,{})]})})};export{T as default};
