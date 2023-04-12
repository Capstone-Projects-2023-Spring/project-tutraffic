"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8794],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=n,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},o="System Block Diagram",s={unversionedId:"requirements/system-block-diagram",id:"requirements/system-block-diagram",title:"System Block Diagram",description:"Figure 1. System Block Diagram",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-tutraffic/docs/requirements/system-block-diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tutraffic/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"Logan Bennett",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-tutraffic/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-tutraffic/docs/requirements/general-requirements"}},c={},l=[{value:"Description of Each Block",id:"description-of-each-block",level:2},{value:"Interface between blocks",id:"interface-between-blocks",level:2},{value:"Data flow",id:"data-flow",level:2}],d={toc:l};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system-block-diagram"},"System Block Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Figure 1. System Block Diagram",src:a(6014).Z,width:"1568",height:"1142"})),(0,n.kt)("p",null,"The TuTraffic system implements a client-server model. Figure 1 illustrates the system at a high level; it is comprised of a client, server, node, camera, and the Google Maps API (a third-party geolocation service). Each node is associated with a parking location or section; it receives data from a camera and sends parking status updates to the server in real-time. The server manages a database, which stores parking information and user information including usernames and location data. The Google Maps API provides the system with location management, navigation, and street map functionality. The client application provides a graphical interface between the user and server, letting the user search for nearby parking spaces. "),(0,n.kt)("h2",{id:"description-of-each-block"},"Description of Each Block"),(0,n.kt)("p",null,"Camera: The first block is a Raspberry Pi camera, which will capture images and then send them to the Raspberry Pi. "),(0,n.kt)("p",null,"Raspberry Pi: Using OpenCV and Python, the Raspberry Pi will determine open parking spaces in the captured images and send data to the server, which is created with Google Cloud. "),(0,n.kt)("p",null,"Server/Google Cloud: The server is responsible for connecting different parts of the system. It updates the database on user and parking information, sends and receives data from the client component and keeps the Google Maps API updated on the user\u2019s location.  "),(0,n.kt)("p",null,"Database: The database provides storage for user and parking information "),(0,n.kt)("p",null,"Client: The client application displays user information, available parking, and navigation.\nGoogle Maps API: The API uses user location data to provide navigation.  "),(0,n.kt)("h2",{id:"interface-between-blocks"},"Interface between blocks"),(0,n.kt)("p",null,"For all the nodes to connect, they will require an internet connection. The internet connection will allow all nodes to interface with the server, which acts as the connection between all the nodes. "),(0,n.kt)("p",null,"In the backend, all our nodes interface with the server to send and receive information among each other. The raspberry pi initially holds the parking data to be sent to the server. To get the parking data to the server, the Raspberry Pi will send a JSON file to the server. Once the server has the data, it needs to connect with the database. The server uses the API of our database to make insert calls to transfer the data. The server will also use the API to call the server to send the map data to other nodes. "),(0,n.kt)("p",null,"In the front end, we have our application that will allow users to interface with the parking map. The user can put in specific parameters and get their desired parking map. Then, the app will use the server API to make requests to the server. From there, the API will parse the information and connect with the database to retrieve the data. The server then uses the API to connect the correct data to the user who requested it. "),(0,n.kt)("h2",{id:"data-flow"},"Data flow"),(0,n.kt)("p",null,"The TuTraffic system has three primary data flows; together, they serve three functions: seeding the database with parking locations, updating their status in real-time, and processing parking space queries. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Figure 2. Data Flow \u2013 Add, Modify, or Remove Parking Location",src:a(4152).Z,width:"385",height:"170"})),(0,n.kt)("p",null,"The first data flow in the TuTraffic system, depicted in Figure 2, involves the addition, modification, or removal of a parking location. An administrative user inputs the latest parking location information or removal request into the client, which relays the information or request to the server. The server updates the database and Google Maps API with the information each component needs to service the new or modified location or discontinue service to the removed location."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Figure 3. Data Flow \u2013 Parking Location Status Updates",src:a(9871).Z,width:"1540",height:"406"})),(0,n.kt)("p",null,"Figure 3 illustrates the high-level implementation of status updates for parking locations represented within the system. The data flow begins with a hardware camera, which regularly captures image data then transfers it to a node. The node utilizes a computer vision model, as implemented by OpenCV, to process the image into an output string, such as a human-readable\nlabel. The node processes the string into parking status information, then delivers this information to the server. The server stores the status information in the database."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Figure 4. Data Flow \u2013 Search for Parking Space",src:a(3814).Z,width:"1352",height:"798"})),(0,n.kt)("p",null,"Figure 4 shows the data flow that occurs when the TuTraffic system helps a user find a parking space. First, the user inputs their location and desired filters, such as cost and distance, into the client application, which delivers the query to the server. The server sends the user\u2019s location to the Google Maps API service and receives a list of nearby parking locations, which were seeded by administrative users (Figure 2). Then, the server searches the database for parking locations. It filters locations according to their real-time status, which is updated using camera equipped nodes (Figure 3). Finally, the server returns a list of parking spaces to the client, which displays the information to the user."))}h.isMDXComponent=!0},4152:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data_flow_diagram_2-38b8214902ace078090d5b0f24fb252c.png"},9871:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data_flow_diagram_3-921ea8cc34ecfbdf340b2473bcfbd2e6.png"},3814:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data_flow_diagram_4-7bac153e637cb2dfaff6b1fce2d018a7.png"},6014:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutrafficblockdiagram-2f26d9ef81702f6e1600bc22032df15e.png"}}]);