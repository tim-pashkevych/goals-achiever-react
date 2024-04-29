import{u as i,c as S,a as h,b as C,r as g,j as e,d as L,l as $,B as b,e as M,N as v}from"./index-c3469a3e.js";import{u as k,B as E,o as F}from"./yup-ddfac3ee.js";const R=i.div`
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
`,N=i.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,j=i.input`
  width: 100%;
  height: 49px;
  padding-left: 14px;
  display: flex;
  border-radius: 7px;
  outline: none;
  border: 1px solid;
  border-color: ${({theme:s})=>s.secondaryColor};
  background-color: ${({theme:s})=>s.background};
  color: ${({theme:s})=>s.textOne};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({theme:s})=>s.secondaryColorHover};
  }
`,P=S({name:h().max(30,"Max length must be less than 30 chars"),email:h().email().max(30,"Max length must be less than 30 chars"),password:h().min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),_=()=>{var d,m,n;const s=C(),[p,x]=g.useState({}),[l,c]=g.useState(),{register:t,handleSubmit:u,formState:{errors:a}}=k({mode:"onChange",resolver:F(P)}),o=r=>{x({...p,[r.target.name]:r.target.value})},f=r=>{c(""),s(L(r)).unwrap().then(()=>{s($({email:r.email,password:r.password}))}).catch(w=>{c(w),w==="Email in use"?b.error("User already exists. Please choose a different email."):b.error("Sorry, something went wrong. Please try again later.")})};return e.jsxs("div",{children:[e.jsxs(N,{action:"",onSubmit:u(f),children:[e.jsx(j,{type:"name",name:"name",placeholder:"Enter your name",onChange:o,...t("name")}),((d=a.name)==null?void 0:d.message)&&e.jsx("div",{children:a.name.message}),e.jsx(j,{type:"text",name:"email",placeholder:"Enter your email",onChange:o,...t("email")}),((m=a.email)==null?void 0:m.message)&&e.jsx("div",{children:a.email.message}),e.jsx(j,{type:"password",name:"password",placeholder:"Create a password",onChange:o,...t("password")}),((n=a.password)==null?void 0:n.message)&&e.jsx("div",{children:a.password.message}),e.jsx(E,{title:"Register Now",icon:!1})]}),l&&e.jsx("div",{children:l})]})},B=i.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,y=i.input`
  width: 100%;
  height: 49px;
  padding-left: 14px;
  display: flex;
  border-radius: 7px;
  outline: none;
  border: 1px solid;
  border-color: ${({theme:s})=>s.secondaryColor};
  background-color: ${({theme:s})=>s.background};
  color: ${({theme:s})=>s.textOne};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({theme:s})=>s.secondaryColorHover};
  }
`,A=S({email:h().email().max(30,"Max length must be less than 30 chars"),password:h().min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),H=()=>{var d,m;const s=C(),[p,x]=g.useState({}),[l,c]=g.useState(),{register:t,handleSubmit:u,formState:{errors:a}}=k({mode:"onChange",resolver:F(A)}),o=n=>{x({...p,[n.target.name]:n.target.value})},f=n=>{c(""),s($(n)).unwrap().catch(r=>{c(r),b.error(r)})};return e.jsxs("div",{children:[e.jsxs(B,{action:"",onSubmit:u(f),children:[e.jsx(y,{type:"email",name:"email",placeholder:"Enter your email",onChange:o,...t("email")}),((d=a.name)==null?void 0:d.message)&&e.jsx("div",{children:a.name.message}),e.jsx(y,{type:"password",name:"password",placeholder:"Create a password",onChange:o,...t("password")}),((m=a.name)==null?void 0:m.message)&&e.jsx("div",{children:a.name.message}),e.jsx(E,{title:"Log In Now",icon:!1})]}),l&&e.jsx("div",{children:l})]})},T=()=>{const{id:s}=M();return e.jsx(R,{children:e.jsxs(D,{children:[e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(v,{to:"/auth/register",children:"Register"})}),e.jsx("li",{children:e.jsx(v,{to:"/auth/login",children:"Login"})})]})}),s==="register"&&e.jsx(_,{}),s==="login"&&e.jsx(H,{})]})})};export{T as default};
