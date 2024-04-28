import{u as i,c as w,a as h,b as y,r as g,j as e,d as E,l as F,e as L,N as f}from"./index-b70f965d.js";import{u as S,B as C,o as $}from"./yup-31b5f1e0.js";const M=i.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,R=i.div`
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
`,D=i.form`
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
  border-color: ${({theme:a})=>a.secondaryColor};
  background-color: ${({theme:a})=>a.background};
  color: ${({theme:a})=>a.textOne};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({theme:a})=>a.secondaryColorHover};
  }
`,N=w({name:h().max(30,"Max length must be less than 30 chars"),email:h().email().max(30,"Max length must be less than 30 chars"),password:h().min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),_=()=>{var d,m,r;const a=y(),[p,x]=g.useState({}),[l,c]=g.useState(),{register:n,handleSubmit:u,formState:{errors:s}}=S({mode:"onChange",resolver:$(N)}),t=o=>{x({...p,[o.target.name]:o.target.value})},j=o=>{c(""),a(E(o)).unwrap().catch(k=>{c(k)})};return e.jsxs("div",{children:[e.jsxs(D,{action:"",onSubmit:u(j),children:[e.jsx(b,{type:"name",name:"name",placeholder:"Enter your name",onChange:t,...n("name")}),((d=s.name)==null?void 0:d.message)&&e.jsx("div",{children:s.name.message}),e.jsx(b,{type:"text",name:"email",placeholder:"Enter your email",onChange:t,...n("email")}),((m=s.email)==null?void 0:m.message)&&e.jsx("div",{children:s.email.message}),e.jsx(b,{type:"password",name:"password",placeholder:"Create a password",onChange:t,...n("password")}),((r=s.password)==null?void 0:r.message)&&e.jsx("div",{children:s.password.message}),e.jsx(C,{title:"Register Now",icon:!1})]}),l&&e.jsx("div",{children:l})]})},A=i.form`
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
  border-color: ${({theme:a})=>a.secondaryColor};
  background-color: ${({theme:a})=>a.background};
  color: ${({theme:a})=>a.textOne};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({theme:a})=>a.secondaryColorHover};
  }
`,B=w({email:h().email().max(30,"Max length must be less than 30 chars"),password:h().min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),H=()=>{var d,m;const a=y(),[p,x]=g.useState({}),[l,c]=g.useState(),{register:n,handleSubmit:u,formState:{errors:s}}=S({mode:"onChange",resolver:$(B)}),t=r=>{x({...p,[r.target.name]:r.target.value})},j=r=>{c(""),a(F(r)).unwrap().catch(o=>{c(o)})};return e.jsxs("div",{children:[e.jsxs(A,{action:"",onSubmit:u(j),children:[e.jsx(v,{type:"email",name:"email",placeholder:"Enter your email",onChange:t,...n("email")}),((d=s.name)==null?void 0:d.message)&&e.jsx("div",{children:s.name.message}),e.jsx(v,{type:"password",name:"password",placeholder:"Create a password",onChange:t,...n("password")}),((m=s.name)==null?void 0:m.message)&&e.jsx("div",{children:s.name.message}),e.jsx(C,{title:"Log In Now",icon:!1})]}),l&&e.jsx("div",{children:l})]})},P=()=>{const{id:a}=L();return e.jsx(M,{children:e.jsxs(R,{children:[e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(f,{to:"/auth/register",children:"Register"})}),e.jsx("li",{children:e.jsx(f,{to:"/auth/login",children:"Login"})})]})}),a==="register"&&e.jsx(_,{}),a==="login"&&e.jsx(H,{})]})})};export{P as default};
