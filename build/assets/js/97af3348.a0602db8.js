"use strict";(self.webpackChunkweekoflearning_docsite=self.webpackChunkweekoflearning_docsite||[]).push([[771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(r),u=n,y=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return r?a.createElement(y,i(i({ref:t},d),{},{components:r})):a.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_label:"Caching and Caches",displayed_sidebar:"docsidebar",sidebar_position:2},i=void 0,s={unversionedId:"caches",id:"caches",title:"caches",description:"When desiging a system , memeory is a very big consideration, becasue this is where everything is stored and processed.",source:"@site/docs/caches.md",sourceDirName:".",slug:"/caches",permalink:"/build/caches",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Caching and Caches",displayed_sidebar:"docsidebar",sidebar_position:2},sidebar:"docsidebar",previous:{title:"aml-templates",permalink:"/build/aml-templates/"},next:{title:"documentations",permalink:"/build/"}},l={},m=[],d={toc:m};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When desiging a system , memeory is a very big consideration, becasue this is where everything is stored and processed. "),(0,n.kt)("p",null,"At the top level of the memory hierarchy are the CPU\u2019s general-purpose registers.\nCPU registers in this portion of the memory hierarchy, it does not change the fact that CPUs have a very limited number of registers, and the cost per byte of register memory is quite high."),(0,n.kt)("p",null,"The memory hierarchy enables us to take advantage of the principles of spatial locality of reference and temporality of reference to move frequently referenced data into fast memory and leave rarely referenced data in slower memory."),(0,n.kt)("p",null,"Virtual memory, file storage, and network storage are examples of online memory subsystems. Memory access within these memory subsystems is slower than accessing main memory. However, when a program requests data from one of these three online memory subsystems, the memory device will respond to the request as quickly as its hardware allows. This is not true for the remaining levels in the memory hierarchy."),(0,n.kt)("p",null,"Most modern computer systems implement a virtual memory scheme that simulates main memory using a mass storage disk drive. A virtual memory subsystem is responsible for transparently copying data between the disk and main memory as programs need it. While disks are significantly slower than main memory, the cost per bit is also three orders of magnitude lower for disks. Therefore, it\u2019s far less expensive to keep data on magnetic storage or on a solid-state drive (SSD) than in main memory."),(0,n.kt)("p",null,"L1 , L2, L2 are caches come next to CPU registers "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Memory Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Virtual Memory"),(0,n.kt)("td",{parentName:"tr",align:null},"Simulates main memory using a mass storage disk drive, responsible for copying data between disk and main memory as programs need it, slower than main memory but less expensive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Storage Memory"),(0,n.kt)("td",{parentName:"tr",align:null},"Uses disk media to store program data, slower than virtual memory, program's responsibility to store and retrieve data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Network Storage"),(0,n.kt)("td",{parentName:"tr",align:null},"Keeps data on a different memory system that connects to the computer system via a network, can be virtual memory, file storage memory, or distributed shared memory")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Near-line Storage"),(0,n.kt)("td",{parentName:"tr",align:null},"Uses the same types of media as offline storage, holds the media in a special robotic jukebox device that can automatically mount the desired media when a program requests it")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Offline Storage"),(0,n.kt)("td",{parentName:"tr",align:null},"Keeps its data in electronic form on storage media that are not necessarily connected to the computer system that needs the data, examples include magnetic tapes, unattached external disk drives, disk cartridges, optical disks, USB memory sticks, SD cards, and floppy diskettes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hardcopy Storage"),(0,n.kt)("td",{parentName:"tr",align:null},"Printout or manual entry of data, least expensive form of memory for certain data types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cache Write Policies"),(0,n.kt)("td",{parentName:"tr",align:null},"Write-through and write-")))))}c.isMDXComponent=!0}}]);