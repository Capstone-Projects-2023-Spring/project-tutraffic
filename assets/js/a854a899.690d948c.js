"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||n;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:1},o="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"TuTraffic is a mobile application that uses computer vision and cloud computing to offer realtime information on available parking spots in a designated area. TuTraffic is designed to provide information on where to find parking and to improve users\u2019 overall parking experience. TuTraffic provides an efficient management and monitoring system to help reduce traffic congestion and time spent searching for parking spaces.",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-tutraffic/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tutraffic/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Brian Rangel",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-tutraffic/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-tutraffic/docs/requirements/system-block-diagram"}},c={},p=[],l={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-overview"},"System Overview"),(0,i.kt)("p",null,"TuTraffic is a mobile application that uses computer vision and cloud computing to offer realtime information on available parking spots in a designated area. TuTraffic is designed to provide information on where to find parking and to improve users\u2019 overall parking experience. TuTraffic provides an efficient management and monitoring system to help reduce traffic congestion and time spent searching for parking spaces. "),(0,i.kt)("p",null,"Available parking spots are found using Raspberry Pi cameras. The Raspberry Pi camera, set up to view a parking lot or designated street area, captures images at a predetermined rate and then determines if there are open parking spaces. All parking information and user data are sent to the server to be managed. The Google Maps API is then utilized to provide location management and navigation. "),(0,i.kt)("p",null,"The system is comprised of of a client application built with a React.js front-end and a FastAPI back-end, a server deployed on Google Cloud, Raspberry Pi nodes paired with cameras, and the Google Maps API. Each Raspberry Pi node is associated with a parking location or section. There, it receives data from the paired camera and uses it to determine the available parking. Finally, the Pi sends the status updates regarding parking availability to the server in real-time. The server manages a database that stores parking information and user information. "),(0,i.kt)("p",null,"The client application provides a graphical interface for users to search for nearby parking spaces. After creating and account and logging in; Users automatically are informed of parking spaces nearby with user-set filters on the settings page. These consist of: cost, vehicle size, and distance. The user also has the ability to search an address with the same filters, the application will run the same way but with the center being the address inputted rather than the user's location. These responses are sent to the server. The server sends the user's location or inputted address to the Google Maps API service, updates the UI to display this location, and receives a list of parking locations in the proximity of the provided address according to real-time status updates from the Raspberry Pi nodes. The server returns a list of parking spaces to the client, which displays the information to the user as pins on the map. A profile page will also exist in the UI so users will be able to view their account information. "),(0,i.kt)("p",null,"A rough wireframe of the app can be viewed here:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wireframe of the UI",src:r(3549).Z,width:"828",height:"786"})),(0,i.kt)("p",null,"The camera systems will be set up so that they can effectively detect open parking spots from both parking lots street parking. The difference between the two being that parking lots usually consist of parking spaces made from distinguished white lines, while street parking is usually more ambiguous. Therefore, our detection systems could be broken down into the detection of parking spots via white lines and the detection of street parking via cars and their sizes."))}d.isMDXComponent=!0},3549:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/wireframe-05f5aa4ff2e47e89cae3ca7eca49b503.png"}}]);