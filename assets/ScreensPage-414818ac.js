import{j as e,aL as y,aM as $,aN as I,aO as A,aP as B,aQ as _,aR as f,aS as M,aT as T,aU as D,aV as d,aW as W,aX as u,aY as p,b as F,r as m,aZ as L,a_ as N,a$ as P,b0 as z,b1 as E,b2 as O,b3 as R,b4 as V,b5 as q,b6 as Q,af as v,n as j,b7 as U,b8 as X,b9 as Y,ba as Z,bb as C,bc as G,bd as H,be as J,bf as K,bg as ee,bh as te,bi as se,bj as ne,I as w,bk as ie,bl as re,bm as oe,bn as ae,bo as le,bp as ce,bq as de,br as he,bs as xe,bt as ue,bu as pe,bv as je,u as b,e as me}from"./index-2b95615b.js";import{u as S}from"./useModal-111df98c.js";import{B as be}from"./Button-bf45e7f7.js";const Se=[{title:"without priority",color:"rgba(125, 125, 125, 1)"},{title:"low",color:"#8fa1d0"},{title:"medium",color:"#e09cb5"},{title:"high",color:"#bedbb0"}],ge=({title:t="The watch spot design",description:s="Create a visually stunning and eye-catching watch dial design that embodies our brand's...",deadline:i="12/05/2023",priority:r="Low"})=>{const n=()=>{},o=()=>{const h=Math.floor(Math.random()*256).toString(16).padStart(2,"0"),c=Math.floor(Math.random()*256).toString(16).padStart(2,"0"),a=Math.floor(Math.random()*256).toString(16).padStart(2,"0");return"#"+h+c+a},l=o();return e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",inset:0},children:e.jsxs(y,{$stickerColor:l,children:[e.jsx($,{children:t}),e.jsx(I,{children:s}),e.jsxs(A,{children:[e.jsxs(B,{children:[e.jsxs(_,{children:[e.jsx(f,{children:"Priority"}),e.jsx(M,{$priorityColor:l,children:r})]}),e.jsxs(_,{children:[e.jsx(f,{children:"Deadline"}),e.jsx(T,{children:i})]})]}),e.jsxs(D,{children:[e.jsx("svg",{width:16,height:16,stroke:o(),children:e.jsx("use",{href:`${d}#icon-bell`})}),e.jsxs(W,{children:[e.jsx(u,{children:e.jsx(p,{children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${d}#icon-normal`})})})}),e.jsx(u,{children:e.jsx(p,{children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${d}#icon-pencil`})})})}),e.jsx(u,{children:e.jsx(p,{onClick:()=>n(),children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${d}#icon-trash`})})})})]})]})]})]})})},_e=({titleModal:t,placeholder:s,actionType:i,id:r,toggleModal:n})=>{const o=F(),[l,h]=m.useState(""),c=a=>{a.preventDefault(),i==="add"&&(o(V({boardId:r,title:l})),n()),i==="edit"&&(o(q({id:r,newColumnBody:{title:l}})),n()),i==="delete"&&(o(Q(r)),n())};return e.jsx(L,{children:e.jsxs(N,{children:[e.jsxs(P,{children:[t.title," ",i==="delete"&&e.jsx("span",{style:{fontWeight:700},children:s})," ","?"]}),i!=="delete"&&e.jsx(z,{name:"title",type:"text",placeholder:s,value:l,onChange:a=>{h(a.target.value)}}),i!=="delete"?e.jsxs(E,{onClick:a=>c(a),children:[e.jsx(O,{children:e.jsx("img",{src:"/svgs/plus.svg",alt:"",width:14,height:14})}),t.buttonText]}):e.jsx(R,{onClick:a=>c(a),children:t.buttonText})]})})},fe=t=>{switch(t){case"add":return{title:"Add column",buttonText:"Add"};case"edit":return{title:"Edit column",buttonText:"Edit"};case"delete":return{title:"Delete column",buttonText:"Delete"};default:return{title:"Column",buttonText:"Add"}}},k=({toggleModal:t,title:s,id:i,actionType:r})=>e.jsx(v,{toggleModal:t,children:e.jsx(_e,{titleModal:fe(r),placeholder:s,actionType:r,id:i,toggleModal:t})}),Ce=(t=[],s=null)=>s===null?t:t.filter(i=>i.priority===s),ve=({title:t,columnId:s,filter:i})=>{const[r,n]=S(),[o,l]=m.useState(null),h=()=>{l("edit"),n()},c=()=>{l("delete"),n()},a=j(x=>U(x,s)),g=Ce(a,i);return e.jsxs(X,{children:[e.jsxs(Y,{children:[e.jsx("div",{children:t}),e.jsxs(Z,{children:[e.jsx("button",{onClick:h,children:e.jsx(C,{width:16,height:16,children:e.jsx("use",{href:d+"#icon-pencil"})})}),e.jsx("button",{onClick:c,children:e.jsx(C,{width:16,height:16,children:e.jsx("use",{href:d+"#icon-trash"})})})]})]}),e.jsx(G,{children:g.map(x=>e.jsx(ge,{...x},x._id))}),e.jsx(H,{children:e.jsx(be,{title:"Add another card",icon:!0,size:"large"})}),r&&e.jsx(k,{actionType:o,toggleModal:n,id:s,title:t})]})},we=({filter:t})=>{const s=j(J),i=j(K),[r,n]=S();return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:s==null?void 0:s.title}),e.jsxs(te,{children:[i.length>0&&i.map(o=>e.jsx(ve,{title:o.title,columnId:o._id,...o,filter:t},o._id)),e.jsxs(se,{onClick:n,children:[e.jsx(ne,{children:e.jsx(w,{id:"plus",size:14})}),"Add another column"]})]}),r&&e.jsx(k,{actionType:"add",toggleModal:n,id:s==null?void 0:s._id,title:"Column title"})]})},ke=({filter:t,setFilter:s})=>{const i=n=>{n!==t&&(n==="without priority"&&(n="without"),s(n))},r=()=>{s(null)};return e.jsxs(ie,{children:[e.jsx(re,{children:"Filters"}),e.jsxs(oe,{children:[e.jsx(ae,{children:"Label color"}),e.jsx(le,{onClick:r,children:"show all"})]}),e.jsx(ce,{children:Se.map((n,o)=>e.jsx(de,{children:e.jsxs(he,{onClick:()=>i(n.title),className:`${t===n.title?"active":""}`,children:[e.jsx(xe,{className:`${t===n.title?"active":""}`,$color:n.color}),n.title]})},o))})]})},ye=()=>e.jsx(ue,{children:e.jsxs(pe,{children:["Before starting your project, it is essential",e.jsx(je,{href:"#",children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),$e=b.div`
  position: relative;
  background-color: ${({theme:t})=>t.mainDashbordBackground};
  height: calc(100vh - 68px);
  padding: 14px 0px 0px 20px;

  @media only screen and (min-width: 768px) {
    padding: 26px 0px 0px 32px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 10px 0px 0px 24px;
  }
`,Ie=b.button`
  position: absolute;
  top: 14px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:t})=>t.themeSwitcher};

  stroke: ${({theme:t})=>t.themeSwitcher};
  fill: ${({theme:t})=>t.mainDashbordBackground};
  &:active {
    stroke: ${({theme:t})=>t.themeAccent};
    color: ${({theme:t})=>t.themeAccent};
  }
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 32px;
  }
  @media only screen and (min-width: 1440px) {
    top: 14px;
    right: 24px;

    &:hover,
    &:focus {
      stroke: ${({theme:t})=>t.themeAccent};
      color: ${({theme:t})=>t.themeAccent};
    }
  }
`,Ae=b.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`,De=()=>{const[t,s]=S(),{boardName:i}=me(),[r,n]=m.useState(null),o=()=>{s(!1)};return e.jsxs($e,{children:[e.jsxs(Ie,{onClick:()=>s(),children:[e.jsx(w,{id:"filter",size:16}),e.jsx(Ae,{children:"Filters"})]}),!i&&e.jsx(ye,{}),i&&e.jsx(we,{filter:r}),t&&e.jsx(v,{toggleModal:o,children:e.jsx(ke,{filter:r,setFilter:n})})]})};export{De as default};
