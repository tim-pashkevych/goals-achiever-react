import{u as i,c as w,a as h,b as y,r as g,j as e,d as E,l as F,e as L,N as b}from"./index-2b95615b.js";import{B as S}from"./Button-bf45e7f7.js";import{u as C,o as $}from"./yup-2af64c2d.js";const M=i.div`
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
`,f=i.input`
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
`,N=w({name:h().max(30,"Max length must be less than 30 chars"),email:h().email().max(30,"Max length must be less than 30 chars"),password:h().min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),_=()=>{var d,m,s;const a=y(),[p,x]=g.useState({}),[l,c]=g.useState(),{register:n,handleSubmit:u,formState:{errors:r}}=C({mode:"onChange",resolver:$(N)}),t=o=>{x({...p,[o.target.name]:o.target.value})},j=o=>{c(""),a(E(o)).unwrap().catch(k=>{c(k)})};return e.jsxs("div",{children:[e.jsxs(D,{action:"",onSubmit:u(j),children:[e.jsx(f,{type:"name",name:"name",placeholder:"Enter your name",onChange:t,...n("name")}),((d=r.name)==null?void 0:d.message)&&e.jsx("div",{children:r.name.message}),e.jsx(f,{type:"text",name:"email",placeholder:"Enter your email",onChange:t,...n("email")}),((m=r.email)==null?void 0:m.message)&&e.jsx("div",{children:r.email.message}),e.jsx(f,{type:"password",name:"password",placeholder:"Create a password",onChange:t,...n("password")}),((s=r.password)==null?void 0:s.message)&&e.jsx("div",{children:r.password.message}),e.jsx(S,{title:"Register Now",icon:!1})]}),l&&e.jsx("div",{children:l})]})},A=i.form`
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
`,B=w({email:h().email().max(30,"Max length must be less than 30 chars"),password:h().min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),H=()=>{var d,m;const a=y(),[p,x]=g.useState({}),[l,c]=g.useState(),{register:n,handleSubmit:u,formState:{errors:r}}=C({mode:"onChange",resolver:$(B)}),t=s=>{x({...p,[s.target.name]:s.target.value})},j=s=>{c(""),a(F(s)).unwrap().catch(o=>{c(o)})};return e.jsxs("div",{children:[e.jsxs(A,{action:"",onSubmit:u(j),children:[e.jsx(v,{type:"email",name:"email",placeholder:"Enter your email",onChange:t,...n("email")}),((d=r.name)==null?void 0:d.message)&&e.jsx("div",{children:r.name.message}),e.jsx(v,{type:"password",name:"password",placeholder:"Create a password",onChange:t,...n("password")}),((m=r.name)==null?void 0:m.message)&&e.jsx("div",{children:r.name.message}),e.jsx(S,{title:"Log In Now",icon:!1})]}),l&&e.jsx("div",{children:l})]})},T=()=>{const{id:a}=L();return e.jsx(M,{children:e.jsxs(R,{children:[e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(b,{to:"/auth/register",children:"Register"})}),e.jsx("li",{children:e.jsx(b,{to:"/auth/login",children:"Login"})})]})}),a==="register"&&e.jsx(_,{}),a==="login"&&e.jsx(H,{})]})})};export{T as default};
