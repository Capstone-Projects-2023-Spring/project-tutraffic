"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},l="Schedule",o={unversionedId:"development-plan/schedule",id:"development-plan/schedule",title:"Schedule",description:"Figure 1. TuTraffic Gantt Chart",source:"@site/docs/development-plan/schedule.md",sourceDirName:"development-plan",slug:"/development-plan/schedule",permalink:"/project-tutraffic/docs/development-plan/schedule",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tutraffic/edit/main/documentation/docs/development-plan/schedule.md",tags:[],version:"current",lastUpdatedBy:"Raymond Chen",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Tasks",permalink:"/project-tutraffic/docs/development-plan/tasks"},next:{title:"Development Environment",permalink:"/project-tutraffic/docs/development-plan/development-environment"}},s={},p=[{value:"Milestone Demo 1",id:"milestone-demo-1",level:2},{value:"Milestone Demo 2",id:"milestone-demo-2",level:2},{value:"Milestone Demo 3:",id:"milestone-demo-3",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schedule"},"Schedule"),(0,r.kt)("mermaid",{value:'gantt\ndateFormat  YYYY-MM-DD\ntitle TuTraffic Gantt Chart\nexcludes 2023-03-07 2023-03-08 2023-03-09 2023-03-10 2023-03-11\nsection Elaboration Phase\n\tSprint 1: , 2023-02-13, 1w\n\tSet up Google Cloud: , 2023-02-19, 1d\n\tSet up Google Firebase: , 2023-02-19, 1d\n\tConnect Cloud and Firebase: , 2023-02-19, 1d\n\tSprint 2: , 2023-02-20, 1w\n\tSet up Raspberry Pi: , 2023-02-20, 1d\n\tConnect Cloud and Raspberry Pi: , 2023-02-21, 1d\n\tSet up client application: , 2023-02-21, 1d\n\tConnect server and client: , 2023-02-22, 1d\n\tSend and retrieve data from Server and Client: , 2023-02-23, 1d\n\t"Hello World" Demo: , 2023-02-26, 1d\n\tSprint 3: , 2023-02-27, 1w\n\tDesign client application: , 2023-03-03, 3d\n\tDesign system installation process: , 2023-03-03, 3d\nsection Construction Phase \n\tSprint 4: , 2023-03-13, 1w\n\tSet up computer vision: , 2023-03-13, 2d\n\tSet up data structures: , 2023-03-15, 1d\n\tDetect available parking: , 2023-03-18, 3d\n\tMilestone Demo 1 - Parking Detection Feature:crit, milestone,  , 2023-03-20, 1d\n\tSprint 5: , 2023-03-20, 1w\n\tSet up client interface: , 2023-03-24, 2d\n\tSprint 6: , 2023-03-27, 1w\n\tAdd parking selection: , 2023-03-27, 2d\n\tAdd parking search: , 2023-04-02, 1d\n\tMilestone Demo 2 - Parking Search Feature:crit, milestone,  , 2023-04-03, 1d\n\tSprint 7: , 2023-04-03, 1w\n\tDetect available public parking: , 2023-04-07, 3d\n\tSprint 8: , 2023-04-10, 1w\n\tAdd system installation tool: , 2023-04-05, 5d\n\tAdd navigation: , 2023-04-14, 2d\n\tMilestone Demo 3 System Installation and Navigation Features:crit, milestone,  , 2023-04-17, 1d\n\tSprint 9: , 2023-04-17, 1w\n\tAdd user accounts: , 2023-04-16, 2d\n\tAdd parking reservation: , 2023-04-20, 1d\n\tAdd notifications: , 2023-04-23, 1d\n\tSprint 10: , 2023-04-24, 1w\n\tFinal Presentation & Demo :crit, milestone,  , 2023-04-25, 1d'}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 1. TuTraffic Gantt Chart")),(0,r.kt)("h1",{id:"milestones"},"Milestones"),(0,r.kt)("h2",{id:"milestone-demo-1"},"Milestone Demo 1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F1"),": Object detection and identification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: The system can recognize cars",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Test set images will be used for the demonstration."))),(0,r.kt)("li",{parentName:"ul"},"R2: The system will be able to detect the absence of a car."),(0,r.kt)("li",{parentName:"ul"},"R3: Detection accuracy >= 30%")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F2"),": The system will be able to detect parking spaces."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: The system can detect parking spaces in a parking lot.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Test set images will be used for demonstration purposes."))),(0,r.kt)("li",{parentName:"ul"},"R2: Detection accuracy >= 30%")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F3"),": Account creation & profile management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: Create user account with email and password."),(0,r.kt)("li",{parentName:"ul"},"R2: Modify user email and password. "),(0,r.kt)("li",{parentName:"ul"},"R3: A user should be able to delete their account.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F4"),": Raspberry Pi communication with server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: Raspberry Pi measured parking spot data sent to the datastore."),(0,r.kt)("li",{parentName:"ul"},"R2: Raspberry Pi can communicate its existence to the server.")),(0,r.kt)("h2",{id:"milestone-demo-2"},"Milestone Demo 2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F5"),": The system should be able to identify parking spaces and whether they're occupied by a car."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: Integrates F1 and F2 together."),(0,r.kt)("li",{parentName:"ul"},"R2: Machine learning algorithms should also be able to detect street parking."),(0,r.kt)("li",{parentName:"ul"},"R3: Improved accuracy of detection to >= 50%")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F6"),": Parking Preferences Consideration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: User can save their preferred parking lot or street."),(0,r.kt)("li",{parentName:"ul"},"R2: user can specify how far they are willing to walk from their parking spot to their destination."),(0,r.kt)("li",{parentName:"ul"},"R3: user can set their vehicle model in their account, preferences, or manually enter their vehicle size, for prefential parking (compact car only spaces, or large vehicle spaces, handicap availabilty) ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F7"),": users should be able to to see parking spaces available."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: the user will be able to see a list of parking spaces nearby."),(0,r.kt)("li",{parentName:"ul"},"R2: the user will be presented with a map view of available parking spaces.")),(0,r.kt)("h2",{id:"milestone-demo-3"},"Milestone Demo 3:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F8"),": Improve object detection of parking spaces in street"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: Detection accuracy >= 70%")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F9"),": Notifications of parking space availability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: user should be notified when a parking space that is in their favorites list or a part of their commute routine is taken or available."),(0,r.kt)("li",{parentName:"ul"},"R2: when the user is notified about a parking spot being taken mid commute, the system should suggest an appropriate nearby parking spot.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"F10"),": Parking spot, availability radius (Parking Up Ahead)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R1: the user should be able to see available parking at a specified destination. "),(0,r.kt)("li",{parentName:"ul"},"R2: the radius of the parking available, should be reasonable")))}u.isMDXComponent=!0}}]);