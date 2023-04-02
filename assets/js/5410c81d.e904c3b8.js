"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?i.createElement(f,o(o({ref:t},c),{},{components:a})):i.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:1},o="Activities",l={unversionedId:"development-plan/activities",id:"development-plan/activities",title:"Activities",description:"Requirements Gathering",source:"@site/docs/development-plan/activities.md",sourceDirName:"development-plan",slug:"/development-plan/activities",permalink:"/project-tutraffic/docs/development-plan/activities",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tutraffic/edit/main/documentation/docs/development-plan/activities.md",tags:[],version:"current",lastUpdatedBy:"Ethan-Hopkins",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software Development Plan",permalink:"/project-tutraffic/docs/category/software-development-plan"},next:{title:"Tasks",permalink:"/project-tutraffic/docs/development-plan/tasks"}},s={},p=[{value:"Requirements Gathering",id:"requirements-gathering",level:2},{value:"Top-Level Design",id:"top-level-design",level:2},{value:"Detailed Design",id:"detailed-design",level:2},{value:"Testing",id:"testing",level:2},{value:"Bug Fixing",id:"bug-fixing",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"activities"},"Activities"),(0,n.kt)("h2",{id:"requirements-gathering"},"Requirements Gathering"),(0,n.kt)("p",null,"There are a multitide of modules that go into the functionality of this application. One major area of research required to create a working product is the computer vision that the raspberry pi's video feed will be processed through to detect parking spots. Computer vision is an application of machine learning, so there is a need to understand how TuTraffic can take advatnage of machine learning's ability to process information and make meaningful decisions to detect appropriate parking spaces. There are a plethora of resources readily available regarding artifical intelligence."),(0,n.kt)("p",null,"A second area relevant to requirements gathering is selecting an appropriate database for TuTraffic's needs. TuTraffic requires a database to hold and update information regarding parking spots. A real-time list of parking spots will be stored on the database and regularly updated as the raspberry pi's video feed is processed - spots will be removed if they are detected to have been filled and added if they are detected to have opened up. Research is needed to find a database that can be continuously and quickly updated as users are constantly making requests to pull information from it."),(0,n.kt)("p",null,"Finally, user needs need to be evaluated for acceptance testing in later stages of development. In order to determine whether or not the TuTraffic application functions in a usable and productive way, the needs of users that will be utilizing it should be determined. "),(0,n.kt)("h2",{id:"top-level-design"},"Top-Level Design"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Use computer vision on raspberry pi\u2019s to detect parking spaces."),(0,n.kt)("li",{parentName:"ol"},"Run image processing on captured images to determine space availability.  "),(0,n.kt)("li",{parentName:"ol"},"Establish connections between our pi nodes/React Application and the server."),(0,n.kt)("li",{parentName:"ol"},"Create a database to store collected data from all Pi nodes."),(0,n.kt)("li",{parentName:"ol"},"Design a React.js interface for users to access our application on Android, iOS, and Web."),(0,n.kt)("li",{parentName:"ol"},"Develop a tool to search and filter parking locations."),(0,n.kt)("li",{parentName:"ol"},"Design a system for reserving specific parking spots."),(0,n.kt)("li",{parentName:"ol"},"Connect our parking locations to real-world coordinates for compatibility with Google Maps API."),(0,n.kt)("li",{parentName:"ol"},"Connect users\u2019 location to Google maps API for directions from their location."),(0,n.kt)("li",{parentName:"ol"},"Send users to Google Maps for live directions to their parking spots. ")),(0,n.kt)("h2",{id:"detailed-design"},"Detailed Design"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Capture images with the raspberry pi.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi\u2019s will have an external camera attached to take the images."),(0,n.kt)("li",{parentName:"ul"},"The code running the camera will be OpenCV running in Python."),(0,n.kt)("li",{parentName:"ul"},"After the photo is taken, preprocessing will be done to the picture before entering our image   detection model."),(0,n.kt)("li",{parentName:"ul"},"When the image is run through our ML model, it will determine which spaces are available."))),(0,n.kt)("li",{parentName:"ol"},"Connect Raspberry pi to the server and send parking space data.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The Raspberry Pi will create a JSON file containing the available spaces."),(0,n.kt)("li",{parentName:"ul"},"Next, the Pi will send the JSON file to the server using a network connection and the server\u2019s API."))),(0,n.kt)("li",{parentName:"ol"},"Setup the server to parse JSON files coming from several Pi\u2019s",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Divide the different JSON files up for processing among several processes."),(0,n.kt)("li",{parentName:"ul"},"Create a new dataset from the separate JSON files to be uploaded to the database."))),(0,n.kt)("li",{parentName:"ol"},"Use the server for all backend communications.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users will connect to our database to access our parking data."),(0,n.kt)("li",{parentName:"ul"},"GET and UPDATE requests to our database will be handled on the server"),(0,n.kt)("li",{parentName:"ul"},"The server will also connect all of the Raspberry Pi\u2019s to our system."),(0,n.kt)("li",{parentName:"ul"},"Google Maps will also be routed through the server to combine parking data and the user location."))),(0,n.kt)("li",{parentName:"ol"},"Creating the front-end application",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The user interface will be written in React.js to allow users to access our application on Android, iOS, and on a website."),(0,n.kt)("li",{parentName:"ul"},"Users can sign into their accounts or create a new ones."),(0,n.kt)("li",{parentName:"ul"},"UI will allow users to view and filter parking data."),(0,n.kt)("li",{parentName:"ul"},"When a user finds a parking spot, they can map directions to the spot."),(0,n.kt)("li",{parentName:"ul"},"On select spots, users can reserve the spot for a period of time."))),(0,n.kt)("li",{parentName:"ol"},"Allowing the application to access parking data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The application will make requests to the server based on the user-specified filters."),(0,n.kt)("li",{parentName:"ul"},"Once the server has the correct data, it will relay it back to the application and display it for the user."),(0,n.kt)("li",{parentName:"ul"},"Users will also have restricted access to parking based on their account restrictions."))),(0,n.kt)("li",{parentName:"ol"},"Mapping to spot using Google Maps API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users will have to allow our application to know their location or enter it manually."),(0,n.kt)("li",{parentName:"ul"},"All spots will contain coordinates to allow the Google Maps API to map directly to the spot."),(0,n.kt)("li",{parentName:"ul"},"The server will connect the two locations and create directions from the user to their chosen spot."))),(0,n.kt)("li",{parentName:"ol"},"Reserving a spot",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users will be able to reserve specific spots in applicable parking locations."),(0,n.kt)("li",{parentName:"ul"},"The user will only be able to hold a spot for a limited time, set by the spot\u2019s owner."),(0,n.kt)("li",{parentName:"ul"},"Reserving a spot does not work on unregulated spots such as street parking."),(0,n.kt)("li",{parentName:"ul"},"Spot reservations are first come, first served, and will notify others who are trying to reserve the same spot.")))),(0,n.kt)("h2",{id:"testing"},"Testing"),(0,n.kt)("p",null,"We will utilize different types of testing to assess the functionality of our project in various aspects."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Unit Testing"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Unit tests are useful in testing indivudual components of software, showing developers if methods/functions are working as intended and can be done throughout development starting early.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"unittest, a Python unit testing framework, for the raspberry pi code"),(0,n.kt)("li",{parentName:"ul"},"JUnit, a Java unit testing framework, for the Android mobile application "))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Integration Testing"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Integration testing focuses on verifying that multiple units of the overall product are working with eachother correctly. This will be essential in TuTraffic's development as we combine hardware and software.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'"hello world" test in preliminary development to ensure all modules can communicate with one another in general'),(0,n.kt)("li",{parentName:"ul"},"tests in later development to ensure data is flowing in correct form and order"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Acceptance Testing"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Acceptance tests are for simulating user stories in real-time to confirm the application can fulfill the basic needs of a user.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tests will be performed at the end of development with people not on the team to receive feedback regarding functionalty and usability")))))),(0,n.kt)("h2",{id:"bug-fixing"},"Bug Fixing"),(0,n.kt)("p",null,"Testing & bug fixing go hand-in-hand. When doing any type of testing in software development, bugs are bound to appear and make themselves apparent. When this happens, a task should be added to the TuTraffic team's Jira board that indicates a bug fix needs to be made and where the bug lies. Different priority will be granted depending on if the bug effects other modules of the overall product or is an isolated / minor issue."))}d.isMDXComponent=!0}}]);