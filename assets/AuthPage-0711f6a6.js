import{u as s,I as D,c as I,b as u,d as _,r as d,a as M,s as R,e as W,f as A,j as e,g as B,o as T,h as G,l as U,B as P,i as H,N as z}from"./index-8866ba8e.js";import{B as Y}from"./Button-03cc4e71.js";const J=s.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,K=s.div`
  width: 335px;
  padding: 24px;
  border-radius: 8px;
  background: rgb(21, 21, 21);

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

  @media only screen and (max-width: 374.99px) {
    width: 90%;
  }

  @media only screen and (min-width: 768px) {
    width: 424px;
    padding: 40px;
  }
`,O=s.form`
  width: 100%;
  margin-top: 40px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:not(:last-child) {
    margin-bottom: 14px;
  }

  & > div:last-of-type {
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 374.99px) {
    width: 90%;
  }
`,S=s.div`
  position: relative;
  width: 100%;
`,E=s.input`
  outline: none;
  border: 1px solid
    ${({theme:a,$hasError:r})=>r?"#f16b6b":a.secondaryColor};
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  opacity: 0.4;
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;

  &:hover,
  &:focus {
    opacity: 1;
  }
`,C=s.p`
  position: absolute;
  bottom: -8px;
  left: 9px;
  color: #f16b6b;
  background-color: #151515;
  text-align: left;
  font-size: 14px;
  padding: 0 8px;

  @media only screen and (max-width: 374.99px) {
    bottom: -6px;
    font-size: 9px;
    padding: 0 5px;
  }
`,Q=s.div`
  position: relative;
  width: 100%;
`,L=s(D)`
  &.icon {
    stroke: #6b6b6b;
    fill: none;
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translateY(-50%);

    @media only screen and (max-width: 374.99px) {
      right: 10px;
    }
  }
`,V=I({name:u().required("Name is required").max(30,"Max length must be less than 30 chars"),email:u().required("Email is required").email("Enter a valid email").max(30,"Max length must be less than 30 chars"),password:u().required("Password is required").min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),X=()=>{var x,i,g;const a=_(),[r,y]=d.useState({}),[f,c]=d.useState(),[m,b]=d.useState(!1),v=M(R),w=W(),{register:p,handleSubmit:n,formState:{errors:t,dirtyFields:l}}=A({mode:"onChange",resolver:T(V)}),h=o=>{y({...r,[o.target.name]:o.target.value})},j=o=>{c(""),a(G(o)).unwrap().then(()=>{a(U({email:o.email,password:o.password})),w("/home")}).catch($=>{c($),$==="Email in use"?P.error("User already exists. Please choose a different email."):P.error("Sorry, something went wrong. Please try again later.")})};return e.jsxs(e.Fragment,{children:[e.jsxs(O,{action:"",onSubmit:n(j),children:[e.jsxs(S,{children:[e.jsx(E,{type:"name",name:"name",placeholder:"Enter your name",onChange:h,...p("name"),$hasError:!!t.name}),((x=t.name)==null?void 0:x.message)&&l&&e.jsx(C,{children:t.name.message})]}),e.jsxs(S,{children:[e.jsx(E,{type:"text",name:"email",placeholder:"Enter your email",onChange:h,...p("email"),$hasError:!!t.email}),((i=t.email)==null?void 0:i.message)&&l&&e.jsxs(C,{children:[t.email.message," "]})]}),e.jsx(Q,{children:e.jsxs(S,{children:[e.jsx(E,{type:m?"text":"password",name:"password",placeholder:"Create a password",onChange:h,...p("password"),$hasError:!!t.password}),((g=t.password)==null?void 0:g.message)&&l&&e.jsx(C,{children:t.password.message}),e.jsx("button",{type:"button",onClick:()=>b(o=>!o),children:m?e.jsx(L,{id:"eye",className:"icon",size:"18"}):e.jsx(L,{id:"eye-off",className:"icon",size:"18"})})]})}),e.jsx(Y,{type:"submit",title:"Register Now",icon:!1})]}),v&&e.jsx(B,{}),f&&e.jsx("div",{children:f})]})},Z=I({email:u().required("Email is required").email("Enter a valid email").max(30,"Max length must be less than 30 chars"),password:u().required("Password is required").min(8,"Min length must be more than 8 chars").max(30,"Max length must be less than 30 chars")}),ee=s.form`
  width: 100%;
  margin-top: 40px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:not(:last-child) {
    margin-bottom: 14px;
  }

  & > div:last-of-type {
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 374.99px) {
    width: 90%;
  }
`,k=s.input`
  outline: none;
  border: 1px solid
    ${({theme:a,$hasError:r})=>r?"#f16b6b":a.secondaryColor};
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  opacity: 0.4;
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;

  &:hover,
  &:focus {
    opacity: 1;
  }
`,se=s.div`
  position: relative;
  width: 100%;
`,q=s.div`
  position: relative;
  width: 100%;
`,F=s.p`
  position: absolute;
  bottom: -8px;
  left: 9px;
  color: #f16b6b;
  background-color: #151515;
  text-align: left;
  font-size: 14px;
  padding: 0 8px;

  @media only screen and (max-width: 374.99px) {
    bottom: -6px;
    font-size: 9px;
    padding: 0 5px;
  }
`,N=s(D)`
  &.icon {
    stroke: #6b6b6b;
    fill: none;
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translateY(-50%);

    @media only screen and (max-width: 374.99px) {
      right: 10px;
    }
  }
`,te=()=>{var j,x;const a=M(R),r=_(),[y,f]=d.useState({}),[c,m]=d.useState(),[b,v]=d.useState(!1),{register:w,handleSubmit:p,formState:{errors:n,dirtyFields:t}}=A({mode:"onChange",resolver:T(Z)}),l=i=>{f({...y,[i.target.name]:i.target.value})},h=i=>{m(""),r(U(i)).unwrap().catch(g=>{m(g),P.error(g)})};return e.jsxs("div",{children:[e.jsxs(ee,{action:"",onSubmit:p(h),children:[e.jsxs(q,{children:[e.jsx(k,{type:"email",name:"email",placeholder:"Enter your email",onChange:l,...w("email"),$hasError:!!n.email}),((j=n.email)==null?void 0:j.message)&&t&&e.jsxs(F,{children:[n.email.message," "]})]}),e.jsx(se,{children:e.jsxs(q,{children:[e.jsx(k,{type:b?"text":"password",name:"password",placeholder:"Create a password",onChange:l,...w("password"),$hasError:!!n.password}),((x=n.password)==null?void 0:x.message)&&t&&e.jsx(F,{children:n.password.message}),e.jsx("button",{type:"button",onClick:()=>v(i=>!i),children:b?e.jsx(N,{id:"eye",className:"icon",size:"18"}):e.jsx(N,{id:"eye-off",className:"icon",size:"18"})})]})}),e.jsx(Y,{title:"Log In Now",icon:!1})]}),a&&e.jsx(B,{}),c&&e.jsx("div",{children:c})]})},ne=()=>{const{id:a}=H();return e.jsx(J,{children:e.jsxs(K,{children:[e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(z,{to:"/auth/register",children:"Register"})}),e.jsx("li",{children:e.jsx(z,{to:"/auth/login",children:"Login"})})]})}),a==="register"&&e.jsx(X,{}),a==="login"&&e.jsx(te,{})]})})};export{ne as default};
