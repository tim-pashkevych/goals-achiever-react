import{t as V,b as S,r as c,j as e,S as K,f as q,g as G,h as J,i as Y,k as Q,m as X,I as j,n as x,s as Z,o as ee,p as se,q as ae,v as te,w as ne,x as T,y as $,z as M,A as F,C as N,D as re,E as oe,F as ie,G as le,H as ce,J as de,K as W,M as ue,O as he,P as pe,Q as D,R as xe,B as g,T as me,U as je,V as ge,W as P,X as Se,Y as R,Z as fe,_ as be,$ as ve,a0 as ke,a1 as ye,a2 as we,a3 as y,a4 as Ce,a5 as Be,a6 as Ie,a7 as Le,a8 as Ee,a9 as _e,aa as ze,ab as Te,ac as $e,ad as Me,ae as Fe,af as v,ag as I,ah as Ne,ai as De,aj as Pe,ak as Re,al as Oe,am as We,an as w,ao as C,ap as Ae,aq as He,ar as Ue,as as Ve,at as Ke,au as qe,av as Ge,aw as Je,ax as Ye,ay as Qe,az as Xe,aA as Ze,aB as A,e as es,aC as ss,aD as as,aE as ts,aF as B,aG as ns,aH as rs,aI as O,aJ as os,aK as is,u as L,aL as ls}from"./index-ed1eb0b4.js";import{u as k}from"./useModal-10b4a85b.js";import{u as E,o as _,B as z}from"./yup-35db3daf.js";import{b as cs,I as ds}from"./Image-dc4da31d.js";const us=Object.keys(V),hs=({setIsOpenPopUp:a,boxRef:t,setIsLoading:r})=>{const o=S();c.useEffect(()=>{const n=i=>{i.target.closest("button")!==t.current&&a(!1)};return document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}},[t,a]),c.useEffect(()=>{const n=i=>{i.code==="Escape"&&a(!1)};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[a]);const s=n=>{r(!0),o(J({theme:n})).unwrap().finally(()=>{a(!1),r(!1)})};return e.jsx(K,{children:us.map(n=>e.jsx(q,{children:e.jsxs(G,{onClick:()=>s(n),children:[" ",n]})},n))})},ps=({setIsLoading:a})=>{const[t,r]=c.useState(!1),o=c.useRef(),s=n=>{n.target.closest("ul")||r(!t)};return e.jsxs(Y,{children:[e.jsxs(Q,{onClick:s,ref:o,children:[e.jsx(X,{children:"Theme"}),!t&&e.jsx(j,{id:"chevron-down",size:16}),t&&e.jsx(j,{id:"chevron-up",size:16})]}),t&&e.jsx(hs,{boxRef:o,setIsOpenPopUp:r,setIsLoading:a})]})},xs=["project","star","loading","puzzle-piece","container","lightning","colors","hexagon"],H=({boardId:a,handleCloseModal:t})=>{const r=x(Z),o=S(),s=x(l=>ee(l,a)),{register:n,handleSubmit:i,formState:{errors:u}}=E({resolver:_(oe),defaultValues:{title:s==null?void 0:s.title,icon:s==null?void 0:s.icon,backgroundImage:s==null?void 0:s.backgroundImage},mode:"onChange"}),h=cs.filter(l=>l.themes.includes(r)),d={width:28,height:28},m=l=>{a?o(ie({newBoardBody:l,id:a})).unwrap().then(()=>{t()}):o(le(l)).unwrap().then(()=>{t()})};return e.jsx(se,{children:e.jsxs(ae,{onSubmit:i(m),children:[e.jsx(te,{children:s?"Edit board":"New board"}),e.jsx(ne,{type:"text",autoFocus:!0,...n("title")}),e.jsxs(T,{children:[e.jsx($,{children:"Icons"}),e.jsx(M,{$gap:"3px",children:xs.map(l=>e.jsxs(F,{children:[e.jsx(N,{type:"radio",...n("icon"),value:l}),e.jsx(j,{id:l,size:24,stroke:"rgba(255, 255, 255, 0.5)",fill:"rgba(0, 0, 0, 0)"})]},l))})]}),e.jsxs(T,{children:[e.jsx($,{children:"Background"}),e.jsx(M,{$width:"252px",$gap:"4px",children:h.map(l=>e.jsxs(F,{children:[e.jsx(N,{type:"radio",...n("backgroundImage"),value:l.key}),e.jsx(ds,{desktop:d,tablet:d,mobile:d,type:"image/png",pathKey:l.key,alt:l.alt,imageCategory:"boardIcons"})]},l.key))})]}),e.jsx(re,{children:e.jsx(z,{title:s?"Edit":"Create",icon:!0,size:"large",style:{width:3340}})})]})})},ms=()=>{const a=x(ce);return e.jsx(de,{children:a.map(t=>e.jsx(ws,{icon:t.icon,title:t.title,id:t._id},t._id))})},js=({toggleModal:a})=>{const t=S(),r=W(),[o,s]=c.useState(!1),n=()=>{s(!0),t(xe()).unwrap().then(()=>{r("/"),a(),g.warning("In order to use the application you must log in")}).catch(()=>{g.error("Oops... Something went wrong")}).finally(()=>{s(!1)})};return e.jsxs(ue,{children:[e.jsx(he,{children:"Are you sure you want to log out?"}),e.jsxs(pe,{children:[e.jsx(D,{type:"button",onClick:n,disabled:o,children:"Log out"}),e.jsx(D,{type:"button",onClick:()=>a(),children:"Cancel"})]})]})},gs=({toggleModal:a})=>{var u,h;const{register:t,handleSubmit:r,formState:{errors:o,dirtyFields:s}}=E({mode:"onChange",resolver:_(ve)}),n=S(),i=d=>{n(ke(d)).unwrap().then(()=>{a(),g.success("Your request has been successfully sent! Please, check your mail.")}).catch(()=>{g.error("An error occurred. Please try again later.")})};return e.jsx(me,{children:e.jsxs(je,{onSubmit:r(i),children:[e.jsx(ge,{children:"Need help"}),e.jsxs(P,{children:[e.jsx(Se,{type:"text",name:"email",placeholder:"Email address",...t("email"),$hasError:!!o.email}),((u=o.email)==null?void 0:u.message)&&s&&e.jsx(R,{children:o.email.message})]}),e.jsxs(P,{className:"wrapperText",children:[e.jsx(fe,{type:"text",name:"message",placeholder:"Comment",...t("message"),$hasError:!!o.message}),((h=o.message)==null?void 0:h.message)&&s&&e.jsx(R,{children:o.message.message})]}),e.jsx(be,{type:"submit",children:"Send"})]})})},U=({className:a})=>{const[t,r]=k(),[o,s]=k(),[n,i]=k();return e.jsxs(e.Fragment,{children:[e.jsxs(ye,{className:a,children:[e.jsxs(we,{to:"/",children:[e.jsx(y,{id:"logo",size:32,className:"logo"}),e.jsx(Ce,{children:"Task Pro"})]}),e.jsx(Be,{children:"My boards"}),e.jsxs(Ie,{children:[e.jsx(Le,{children:"Create a new board"}),e.jsx(Ee,{type:"button",onClick:r,children:e.jsx(y,{id:"plus",size:20,className:"plus"})})]}),e.jsx(_e,{children:e.jsx(ms,{})}),e.jsxs(ze,{children:[e.jsxs(Te,{children:["If you need help with ",e.jsx("span",{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs($e,{onClick:s,children:[e.jsx(y,{id:"help-circle",size:20,className:"help-circle"}),"Need help?"]})]}),e.jsx(Me,{children:e.jsxs(Fe,{type:"button",onClick:i,children:[e.jsx(y,{id:"login",size:32,className:"login"}),"Log out"]})})]}),t&&e.jsx(v,{toggleModal:r,children:e.jsx(H,{handleCloseModal:r})}),o&&e.jsx(v,{toggleModal:s,children:e.jsx(gs,{toggleModal:s})}),n&&e.jsx(v,{toggleModal:i,children:e.jsx(js,{toggleModal:i})})]})},Ss=a=>new Promise(t=>{Oe.imageFileResizer(a,150,150,"JPEG",100,0,r=>{t(r)},"file")}),fs=({setAvatar:a})=>{const{avatarURL:t}=x(I),[r,o]=c.useState(t),s=c.useRef(null),n=()=>{s.current.click()},i=async u=>{const h=new FileReader,d=u.target.files[0];if(a(d),!d)return;const m=await Ss(d);h.onload=l=>{const p=l.target.result;o(p)},h.readAsDataURL(m)};return e.jsxs(Ne,{children:[e.jsxs(De,{children:[r&&e.jsx("img",{src:r,alt:"avatar"}),!r&&e.jsx(j,{id:"user",size:48})]}),e.jsxs(Pe,{children:[e.jsx(z,{size:"editProfile",type:"button",onClick:n}),e.jsx(Re,{onChange:i,ref:s,type:"file",accept:"image/jpeg,image/png"})]})]})},bs=({register:a,current:t})=>{const[r,o]=c.useState(!1),s=()=>{o(!r)};return e.jsxs(We,{children:[e.jsx(w,{children:e.jsx(C,{...a("name"),defaultValue:t.name})}),e.jsx(w,{children:e.jsx(C,{...a("email"),defaultValue:t.email})}),e.jsxs(w,{children:[e.jsx(C,{...a("password"),placeholder:"password",type:r?"text":"password"}),e.jsx(Ae,{onClick:s,type:"button",className:r?"active":"",children:e.jsx(j,{id:"eye",size:18})})]})]})},vs=({handleCloseModal:a})=>{const[t,r]=c.useState(null),o=x(I),s=x(He),n=S(),{register:i,handleSubmit:u,formState:{errors:h}}=E({mode:"onChange",resolver:_(Ue)}),d=m=>{const{name:l,email:p,password:f}=m;if(!l&&!p&&!f&&!t)return;const b=new FormData;o.name!==l&&l&&b.append("name",l),o.email!==p&&p&&b.append("email",p),f&&b.append("password",f),t&&b.append("avatar",t),n(qe(b)).unwrap().then(()=>{a()})};return e.jsxs(Ve,{onSubmit:u(d),children:[e.jsx(Ke,{children:"Edit profile"}),e.jsx(fs,{setAvatar:r}),e.jsx(bs,{register:i,errors:h,current:o}),e.jsx(z,{title:"Send",icon:!1,isLoading:s})]})},ks=()=>{const{name:a,avatarURL:t}=x(I),[r,o]=k(),s=c.useRef(),n=u=>{u.target.closest("button")===s.current&&o()},i=()=>{o(!1)};return e.jsxs(Ge,{onClick:n,ref:s,children:[e.jsx(Je,{children:a}),e.jsxs(Ye,{children:[e.jsx("img",{src:t,alt:"avatar"}),!1]}),r&&e.jsx(v,{toggleModal:i,children:e.jsx(vs,{handleCloseModal:i})})]})},ys=()=>{const[a,t]=c.useState(!1),[r,o]=c.useState(!1),s=c.useCallback(()=>{t(!a)},[a]),n=i=>{i.currentTarget===i.target&&s()};return c.useEffect(()=>{const i=u=>{const{code:h}=u;h==="Escape"&&s()};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[s]),e.jsxs(Qe,{children:[a&&e.jsx(Xe,{onClick:n,children:e.jsx(U,{className:"sidebarHeader"})}),e.jsx(Ze,{onClick:s,children:e.jsx(j,{id:"menu"})}),e.jsx(ps,{setIsLoading:o}),e.jsx(ks,{}),r&&e.jsx(A,{})]})},ws=({id:a,title:t,icon:r})=>{const[o,s]=k(),n=S(),i=W(),{boardName:u}=es(),d=x(ss)._id===a,m=p=>{i(`/home/${p}`),n(os(a))},l=p=>{n(is(p)).unwrap().then(()=>{g.success(`The board "${u}" was deleted.`)}).catch(f=>{g.error(f.message)})};return e.jsxs(e.Fragment,{children:[e.jsxs(as,{onClick:()=>m(t),$isActive:d,children:[e.jsxs(ts,{children:[e.jsx(B,{id:r,size:18,className:"project"}),e.jsx(ns,{children:t})]}),d&&e.jsxs(rs,{children:[e.jsx(O,{type:"button",onClick:s,"aria-label":"edit",children:e.jsx(B,{id:"pencil",size:16,className:"pencil"})}),e.jsx(O,{type:"button",onClick:()=>l(a),"aria-label":"delete",children:e.jsx(B,{id:"trash",size:16,className:"trash"})})]})]}),o&&e.jsx(v,{toggleModal:s,children:e.jsx(H,{boardId:a,handleCloseModal:s})})]})},Cs=L.div`
  display: flex;
  flex-direction: row;
`,Bs=L.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;L.div`
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;const zs=()=>e.jsxs(Cs,{children:[e.jsx(U,{className:"sidebarHome"}),e.jsxs(Bs,{children:[e.jsx(ys,{}),e.jsx(c.Suspense,{fallback:e.jsx(A,{}),children:e.jsx(ls,{})})]})]});export{zs as default};
