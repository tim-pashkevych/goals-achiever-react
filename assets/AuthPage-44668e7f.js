import{u as a,j as o,a as m,b as u,r as h,N as s,c as f,l as j}from"./index-6b7b1b62.js";import{B as l}from"./Button-c06b8033.js";const b=a.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,y=a.div`
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
`,w=a.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,i=a.input`
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
`,v=({handleChange:e})=>{const n=r=>{r.preventDefault()};return o.jsx("div",{children:o.jsxs(w,{action:"",onSubmit:n,children:[o.jsx(i,{type:"name",name:"name",placeholder:"Enter your name",onChange:e}),o.jsx(i,{type:"email",name:"email",placeholder:"Enter your email",onChange:e}),o.jsx(i,{type:"password",name:"password",placeholder:"Create a password",onChange:e})]})})},C=a.form`
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
`,k=({handleChange:e})=>{const n=r=>{r.preventDefault()};return o.jsx("div",{children:o.jsxs(C,{action:"",onSubmit:n,children:[o.jsx(d,{type:"email",name:"email",placeholder:"Enter your email",onChange:e}),o.jsx(d,{type:"password",name:"password",placeholder:"Create a password",onChange:e})]})})},L=()=>{const{id:e}=m(),n=u(),[r,c]=h.useState({}),p=t=>{c({...r,[t.target.name]:t.target.value})},x=()=>{const t={email:r.email,password:r.password,name:r.name,theme:"dark"};n(f(t))},g=()=>{const t={email:r.email,password:r.password};n(j(t))};return o.jsx(b,{children:o.jsxs(y,{children:[o.jsx("nav",{children:o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(s,{to:"/auth/register",children:"Register"})}),o.jsx("li",{children:o.jsx(s,{to:"/auth/login",children:"Login"})})]})}),e==="register"&&o.jsx(v,{handleChange:p}),e==="login"&&o.jsx(k,{}),e==="register"&&o.jsx(l,{title:"Register Now",icon:!1,onClick:x}),e==="login"&&o.jsx(l,{title:"Log In Now",icon:!1,onClick:g})]})})};export{L as default};
