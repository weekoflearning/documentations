"use strict";(self.webpackChunkweekoflearning_docsite=self.webpackChunkweekoflearning_docsite||[]).push([[639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1601:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>u,assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,l={unversionedId:"sample",id:"sample",title:"sample",description:"Sample document for making contribution",source:"@site/docs/sample.md",sourceDirName:".",slug:"/sample",permalink:"/documentations/build/sample",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsidebar",previous:{title:"https",permalink:"/documentations/build/flows/https"}},p={},c=[{value:"TOPIC NAME",id:"topic-name",level:2},{value:"list of topic 1",id:"list-of-topic-1",level:3},{value:"list of topic 2",id:"list-of-topic-2",level:3},{value:"Annontations",id:"annontations",level:2},{value:"Image",id:"image",level:2}],u=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:c,Highlight:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Sample document for making contribution "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"%22https://gitbub.com/weekoflearning/documentations%22"},"GitHub Repo")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"topic-name"},"TOPIC NAME"),(0,o.kt)("p",null,"author : Author name"),(0,o.kt)("h3",{id:"list-of-topic-1"},"list of topic 1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sub topic 1"),(0,o.kt)("li",{parentName:"ul"},"sub topic 2"),(0,o.kt)("li",{parentName:"ul"},"sub topic 3")),(0,o.kt)("h3",{id:"list-of-topic-2"},"list of topic 2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sub topic 1"),(0,o.kt)("li",{parentName:"ul"},"sub topic 2")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mermaid flow charts can be included in markdown documents")),(0,o.kt)("h2",{id:"annontations"},"Annontations"),(0,o.kt)("p",null,"you can use following annotations to define something important "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"this will render a note")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"this wil render a tip")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"this will render info")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"this renders caution")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"this renders danger")),(0,o.kt)("h2",{id:"image"},"Image"),(0,o.kt)("p",null,"Images are also supported , you would need to add the image to the md file like this. "),(0,o.kt)("img",{src:"img/IMG_20210515_160400_603.jpg",alt:"Example banner"}))}m.isMDXComponent=!0}}]);