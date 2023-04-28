"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=s,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const a={sidebar_position:5},i="Use-case descriptions",o={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case 1",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-tutraffic/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tutraffic/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Brian Rangel",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-tutraffic/docs/requirements/features-and-requirements"},next:{title:"Software Development Plan",permalink:"/project-tutraffic/docs/category/software-development-plan"}},p={},c=[{value:"Use Case #1",id:"use-case-1",level:2},{value:"Use Case #2",id:"use-case-2",level:2},{value:"Use Case #3",id:"use-case-3",level:2},{value:"Use Case #4",id:"use-case-4",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-case-descriptions"},"Use-case descriptions"),(0,s.kt)("h2",{id:"use-case-1"},"Use Case #1"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants to find a spot in a general vicinity.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens parking options."),(0,s.kt)("li",{parentName:"ol"},"In parking options, user adjusts the range of how far they are willing to park in the area surrounding from their destination. "),(0,s.kt)("li",{parentName:"ol"},"User clicks the search button to find spots in an area."),(0,s.kt)("li",{parentName:"ol"},"User enters the address of their destination."),(0,s.kt)("li",{parentName:"ol"},"The TuTraffic application displays the detected spots in that range to the user's device.")),(0,s.kt)("h2",{id:"use-case-2"},"Use Case #2"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants displayed parking spots to reflect price preferences.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens parking options."),(0,s.kt)("li",{parentName:"ol"},"In parking options, user removes parking garages and paid lots from their preferences."),(0,s.kt)("li",{parentName:"ol"},"User edits their accepted hourly price range for street parking in parking options, reflecting how much they are willing to pay per hour.")),(0,s.kt)("h2",{id:"use-case-3"},"Use Case #3"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants spots that can fit their car to be detected.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User opens parking options."),(0,s.kt)("li",{parentName:"ol"},"User selects the option that best reflects the size of their car from a dropdown menu."),(0,s.kt)("li",{parentName:"ol"},"The application sends a message to the server to communicate the unique size need."),(0,s.kt)("li",{parentName:"ol"},"The server transmits this information to the raspberry pi node."),(0,s.kt)("li",{parentName:"ol"},"The computer vision processing the video feed adjusts to make decisions on whether a spot exists in a space or not based on if the user's car size can fit there.")),(0,s.kt)("h2",{id:"use-case-4"},"Use Case #4"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User wants be directed to a parking spot.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User clicks the search button to find parking spots."),(0,s.kt)("li",{parentName:"ol"},"User enters their destination's address."),(0,s.kt)("li",{parentName:"ol"},"The TuTraffic application displays the detected spots to the user's device."),(0,s.kt)("li",{parentName:"ol"},'User selects on a parking spot and clicks the "Route" button.'),(0,s.kt)("li",{parentName:"ol"},"Google Maps API is loaded to direct the user to their destination.")))}u.isMDXComponent=!0}}]);