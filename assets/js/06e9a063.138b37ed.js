"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(n),k=r,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||s;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:1,description:"Classes with defined data fields, methods, and descriptions."},l="Classes",i={unversionedId:"api-specification/classes",id:"api-specification/classes",title:"Classes",description:"Classes with defined data fields, methods, and descriptions.",source:"@site/docs/api-specification/classes.md",sourceDirName:"api-specification",slug:"/api-specification/classes",permalink:"/project-tutraffic/docs/api-specification/classes",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tutraffic/edit/main/documentation/docs/api-specification/classes.md",tags:[],version:"current",lastUpdatedBy:"Guire9",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Classes with defined data fields, methods, and descriptions."},sidebar:"docsSidebar",previous:{title:"API",permalink:"/project-tutraffic/docs/api-specification/api"},next:{title:"Test Procedures",permalink:"/project-tutraffic/docs/category/test-procedures"}},p={},o=[{value:"Front-End Classes",id:"front-end-classes",level:2},{value:"Class: LoginScreen",id:"class-loginscreen",level:3},{value:"Class: HomeScreen",id:"class-homescreen",level:3},{value:"Class: Settings",id:"class-settings",level:3},{value:"Back-End Classes",id:"back-end-classes",level:2},{value:"Class: User",id:"class-user",level:3},{value:"Class: ParkingSpot",id:"class-parkingspot",level:3}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"classes"},"Classes"),(0,r.kt)("h2",{id:"front-end-classes"},"Front-End Classes"),(0,r.kt)("h3",{id:"class-loginscreen"},"Class: LoginScreen"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","The LoginScreen class renders the login screen and accepts user input for authentication of user account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"username: string - Stores the user's username."),(0,r.kt)("li",{parentName:"ul"},"password: string - Stores the user's password.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"render(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renders the login screen.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"submit(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Submit user credentials including username and password data fields for authentication.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"changeState(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update the state of component when user input is changed.")),(0,r.kt)("h3",{id:"class-homescreen"},"Class: HomeScreen"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n",'The HomeScreen class displays a map of the user\'s current location and their "favorited" parking locations.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:"),(0,r.kt)("br",{parentName:"p"}),"\n","None."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"render(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renders the home screen.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"submit(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Submit the address along with selected settings to backend for manipulation.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"displayMap(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Display the map.")),(0,r.kt)("h3",{id:"class-settings"},"Class: Settings"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","The Settings class allows the user to manage their information and change data such as email and password."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:"),(0,r.kt)("br",{parentName:"p"}),"\n","None."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"render(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renders the settings page")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"changeEmail(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows user to change their email.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"changePassword(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows user to change their password.")),(0,r.kt)("h2",{id:"back-end-classes"},"Back-End Classes"),(0,r.kt)("h3",{id:"class-user"},"Class: User"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","The User class is used to create user-defined data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"userId: int - Unique ID associated with the user's account"),(0,r.kt)("li",{parentName:"ul"},"userName: string - The username of the user"),(0,r.kt)("li",{parentName:"ul"},"email: string - The email of the user"),(0,r.kt)("li",{parentName:"ul"},"password: string - The username of the user")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getUser(): string")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gets the username")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setUser(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets the username")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getEmail(): string")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gets the email")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setEmail(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets the email")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setPassword(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets the password")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getUserId(): int")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gets the userId")),(0,r.kt)("h3",{id:"class-parkingspot"},"Class: ParkingSpot"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","The ParkingSpot class is used to gather data from the Raspberri Pi."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:"),(0,r.kt)("br",{parentName:"p"}),"\n","None."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"checkParking(): boolean")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns true of false after checking whether there is any available parking.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"checkEmptySpots(): int")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns the number of available parking by checking for empty spots.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"checkCars(): int")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns the total number of cars currently detected.")))}c.isMDXComponent=!0}}]);