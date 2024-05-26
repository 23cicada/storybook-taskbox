import{r as N}from"./index-76fb7be0.js";var x={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=N,O=Symbol.for("react.element"),D=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,j=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,n={},p=null,d=null;r!==void 0&&(p=""+r),t.key!==void 0&&(p=""+t.key),t.ref!==void 0&&(d=t.ref);for(a in t)I.call(t,a)&&!R.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)n[a]===void 0&&(n[a]=t[a]);return{$$typeof:O,type:e,key:p,ref:d,props:n,_owner:j.current}}l.Fragment=D;l.jsx=S;l.jsxs=S;x.exports=l;var A=x.exports;const o=A.jsx,m=A.jsxs;function u({task:{id:e,title:t,state:r},onArchiveTask:a,onPinTask:n}){return m("div",{className:`list-item ${r}`,children:[m("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[o("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:r==="TASK_ARCHIVED"}),o("span",{className:"checkbox-custom",onClick:()=>a(e)})]}),o("label",{htmlFor:"title","aria-label":t,className:"title",children:o("input",{type:"text",value:t,readOnly:!0,name:"title",placeholder:"Input title"})}),r!=="TASK_ARCHIVED"&&o("button",{className:"pin-button",onClick:()=>n(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:o("span",{className:"icon-star"})},`pinTask-${e}`)]})}try{u.displayName="Task",u.__docgenInfo={description:"",displayName:"Task",props:{task:{defaultValue:null,description:"",name:"task",required:!0,type:{name:"{ id: string; title: string; state: string; }"}},onArchiveTask:{defaultValue:null,description:"",name:"onArchiveTask",required:!0,type:{name:"(id: string) => void"}},onPinTask:{defaultValue:null,description:"",name:"onPinTask",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const P={component:u,title:"Task",tags:["autodocs"],argTypes:{id:{name:"task.id",table:{type:{summary:"string"},category:"Task"}},title:{name:"task.title",table:{type:{summary:"string"},category:"Task"}},state:{name:"task.state",table:{type:{summary:"string"},category:"Task"}}}},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},i={args:{task:{...s.args.task,state:"TASK_PINNED"}}},c={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var k,_,T;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(T=(_=s.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var y,g,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,b,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const C=["Default","Pinned","Archived"],$=Object.freeze(Object.defineProperty({__proto__:null,Archived:c,Default:s,Pinned:i,__namedExportsOrder:C,default:P},Symbol.toStringTag,{value:"Module"}));export{s as D,u as T,m as a,$ as b,o as j};
