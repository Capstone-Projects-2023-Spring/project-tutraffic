"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(n),h=s,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const a={},i="Testing Development",o={unversionedId:"testing/testing-development",id:"testing/testing-development",title:"Testing Development",description:"Document Overview",source:"@site/docs/testing/testing-development.md",sourceDirName:"testing",slug:"/testing/testing-development",permalink:"/project-tutraffic/docs/testing/testing-development",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tutraffic/edit/main/documentation/docs/testing/testing-development.md",tags:[],version:"current",lastUpdatedBy:"Adam Wong",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Test Report",permalink:"/project-tutraffic/docs/testing/test-report"}},p={},l=[{value:"<strong>Document Overview</strong>",id:"document-overview",level:2},{value:"<strong>Setup</strong>",id:"setup",level:2},{value:"<strong>Software Requirements</strong>",id:"software-requirements",level:3},{value:"<strong>Raspberry Pi Back-end Requirements</strong>",id:"raspberry-pi-back-end-requirements",level:4},{value:"<strong>Front-end Requirements</strong>",id:"front-end-requirements",level:4},{value:"<strong>Integration Test Requirements</strong>",id:"integration-test-requirements",level:4},{value:"<strong>Writing Tests</strong>",id:"writing-tests",level:2},{value:"<strong>Writing Raspberry Pi Back-end Tests</strong>",id:"writing-raspberry-pi-back-end-tests",level:3},{value:"<strong>Writing Front-end Tests</strong>",id:"writing-front-end-tests",level:3},{value:"<strong>Writing Snapshot Tests</strong>",id:"writing-snapshot-tests",level:4},{value:"<strong>Writing Integration Tests</strong>",id:"writing-integration-tests",level:3},{value:"<strong>Running Tests</strong>",id:"running-tests",level:2},{value:"<strong>Running Raspberry Pi Back-end Tests</strong>",id:"running-raspberry-pi-back-end-tests",level:3},{value:"<strong>Running Front-end Tests</strong>",id:"running-front-end-tests",level:3},{value:"<strong>Running Integration Tests</strong>",id:"running-integration-tests",level:4},{value:"Resources",id:"resources",level:2}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing-development"},"Testing Development"),(0,s.kt)("h2",{id:"document-overview"},(0,s.kt)("strong",{parentName:"h2"},"Document Overview")),(0,s.kt)("p",null,"This document describes how to setup and run the testing environment for the TuTraffic system."),(0,s.kt)("h2",{id:"setup"},(0,s.kt)("strong",{parentName:"h2"},"Setup")),(0,s.kt)("h3",{id:"software-requirements"},(0,s.kt)("strong",{parentName:"h3"},"Software Requirements")),(0,s.kt)("h4",{id:"raspberry-pi-back-end-requirements"},(0,s.kt)("strong",{parentName:"h4"},"Raspberry Pi Back-end Requirements")),(0,s.kt)("p",null,"The raspberry pi back-end testing environment requires:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python3.10"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The package manager ",(0,s.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/installation/"},"pip")," is typically included with Python 3.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Additional requirements, including ",(0,s.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.2.x/getting-started.html#install-pytest"},"pytest"),", can be installed from the commandline using pip:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"$ pip install -r testing/python/requirements.txt")))),(0,s.kt)("h4",{id:"front-end-requirements"},(0,s.kt)("strong",{parentName:"h4"},"Front-end Requirements")),(0,s.kt)("p",null,"The frontend testing environment requires:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The package manager ",(0,s.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," is included with ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.dev/en/learn/how-to-install-nodejs/"},"Node.js"),", which is installed as part of the system environment.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The testing framework, including ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," and ",(0,s.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/test-renderer.html"},"react-test-renderer"),", is included in the frontend environment.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If the frontend is not yet installed on the system, install dependencies using the following commands from the project root:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"$ cd frontend # From the repository root directory, set the working directory to the front end.\n$ npm install --legacy-peer-deps\n")))),(0,s.kt)("h4",{id:"integration-test-requirements"},(0,s.kt)("strong",{parentName:"h4"},"Integration Test Requirements")),(0,s.kt)("p",null,"The integration testing environment requires:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The package manager ",(0,s.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," is included with ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.dev/en/learn/how-to-install-nodejs/"},"Node.js"),", which is installed as part of the system environment."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"For Linux: the Cypress testing framework requires ",(0,s.kt)("a",{parentName:"li",href:"https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites"},"additional dependencies"),". Only Ubuntu, Debian, and CentOS dependencies are documented.")),(0,s.kt)("p",{parentName:"li"},"Install the testing package using the following commands:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"$ cd testing # From the repository root directory, set the working directory to testing.\n$ npm install\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python3.10"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The package manager ",(0,s.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/installation/"},"pip")," is typically included with Python 3.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Additional software requirements, including ",(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/firebase-admin/"},"firebase-admin"),", can be installed from the commandline using pip:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"$ pip install -r testing/cypress/python/requirements.txt"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Two ",(0,s.kt)("strong",{parentName:"p"},"secret")," files are required to run the tests: ",(0,s.kt)("inlineCode",{parentName:"p"},"testing/tutraffic-firebase-key.json")," for Google Firebase configuration and ",(0,s.kt)("inlineCode",{parentName:"p"},"testing/.env")," for React configuration. Request these keys from your administrator(s)."))),(0,s.kt)("h2",{id:"writing-tests"},(0,s.kt)("strong",{parentName:"h2"},"Writing Tests")),(0,s.kt)("h3",{id:"writing-raspberry-pi-back-end-tests"},(0,s.kt)("strong",{parentName:"h3"},"Writing Raspberry Pi Back-end Tests")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.2.x/reference/reference.html#api-reference"},"pytest")," module provides functionality that the built-in assert statement does not provide, such as ",(0,s.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.1.x/explanation/fixtures.html#about-fixtures"},"fixtures"),"."),(0,s.kt)("p",null,"Follow these two conventions when naming Python test scripts and methods:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Use the file name of the tested Python script, prefixed with "test_", and store it in the same directory.',(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# Example directory structure.\n/example/src/script.py\n/example/src/test_script.py\n"))),(0,s.kt)("li",{parentName:"ol"},'Prefix test methods with "test_".',(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"# This is an example test method declaration.\ndef test_foo():\n")))),(0,s.kt)("p",null,"Use the following import statement in Python to access the pytest module:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"import pytest\n")),(0,s.kt)("h3",{id:"writing-front-end-tests"},(0,s.kt)("strong",{parentName:"h3"},"Writing Front-end Tests")),(0,s.kt)("p",null,"The testing framework, including ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/api"},"Jest")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-test-renderer"},"react-test-renderer"),", is included in the frontend environment."),(0,s.kt)("p",null,"Follow these two conventions when naming JavaScript test scripts and methods:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Use the file name of tested JavaScript scripts, suffixed with ".test", and store it in the same directory.',(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"// Example directory structure.\n/example/src/component.js\n/example/src/component.test.js\n"))),(0,s.kt)("li",{parentName:"ol"},"Describe the test using name of the class or method in the ",(0,s.kt)("inlineCode",{parentName:"li"},"name")," parameter of the Jest method call.",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"// This is an example test() method call in Jest.\ntest('test case 1', (parameters) => expression)\n")))),(0,s.kt)("h4",{id:"writing-snapshot-tests"},(0,s.kt)("strong",{parentName:"h4"},"Writing Snapshot Tests")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/snapshot-testing"},"Snapshots")," are files representing rendered React components. Tests can be created that compare a snapshot generated during testing with a reference snapshot."),(0,s.kt)("p",null,"Snapshot tests require an import from ",(0,s.kt)("inlineCode",{parentName:"p"},"reac-test-renderer"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// JavaScript import statement\nimport renderer from 'react-test-renderer';\n")),(0,s.kt)("p",null,"Here is an example snapshot test ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/snapshot-testing"},"(source)"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Test example: Link.test.js\n----------\nimport renderer from 'react-test-renderer';\nimport Link from '../Link'; // The component being tested.\n\nit('renders correctly', () => {\n  const tree = renderercomponent tree.\n    .create(<Link page=\"http://www.facebook.com\">Facebook</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n\n// 1. The tree constant stores the snapshot.\n// 2. The create() method returns a test renderer for the Link component.\n// 3. The toJson() method returns the snapshot.\n// 4. The expect() and matcher toMatchSnapshot() calls compare the tree to the reference snapshot. The test passes if the snapshots match.\n")),(0,s.kt)("h3",{id:"writing-integration-tests"},(0,s.kt)("strong",{parentName:"h3"},"Writing Integration Tests")),(0,s.kt)("p",null,"Integration tests use the ",(0,s.kt)("a",{parentName:"p",href:"https://cypress.io"},"Cypress")," testing framework.\nPut tests in the ",(0,s.kt)("inlineCode",{parentName:"p"},"testing/cypress/e2e")," directory, with the extension .spec.cys.js."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// Example test script location.\ntesting/cypress/e2e/example.spec.cy.js\n")),(0,s.kt)("p",null,"Python scripts can be called from a terminal using the ",(0,s.kt)("inlineCode",{parentName:"p"},"exec")," command provided by Cypress cy. The script should terminate with an exit-code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// Example cy.exec() call.\ncy.exec('python path/to/script/example.py commandline-arguments')\n")),(0,s.kt)("h2",{id:"running-tests"},(0,s.kt)("strong",{parentName:"h2"},"Running Tests")),(0,s.kt)("h3",{id:"running-raspberry-pi-back-end-tests"},(0,s.kt)("strong",{parentName:"h3"},"Running Raspberry Pi Back-end Tests")),(0,s.kt)("p",null,"Run raspberry pi back-end tests using pytest from the commandline."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ pytest\n")),(0,s.kt)("h3",{id:"running-front-end-tests"},(0,s.kt)("strong",{parentName:"h3"},"Running Front-end Tests")),(0,s.kt)("p",null,"Run front-end tests using Jest via npm from the commandline, within the frontend directory."),(0,s.kt)("p",null,"By default, Jest runs in the background, and automatically runs tests when relevant files are changed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# Run tests in watch mode.\n$ cd frontend   # From the repository root directory, set the working directory to the front end.\n$ npm test\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"watchAll=false")," Jest flag skips watch mode and the interactive prompt."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# Run tests without watch mode or interactive prompt.\n$ cd frontend # From the repository root directory, set the working directory to the front end.\n$ npm test -- --watchAll=false\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"updateSnapshot")," Jest flag updates the reference snapshots used for ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/snapshot-testing"},"snapshot testing")," instead of testing against them. A manual review should be performed before updating the reference snapshots."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# Run tests without watch mode or interactive prompt, and update snapshot files.\n$ cd frontend # From the repository root directory, set the working directory to the front end.\n$ npm test -- --watchAll=false --updateSnapshot\n")),(0,s.kt)("h4",{id:"running-integration-tests"},(0,s.kt)("strong",{parentName:"h4"},"Running Integration Tests")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the root directory, change working directory to the front end."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"$ cd testing"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Below are two commands that can be used to run Cypress tests."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The following command, by default, runs all tests headlessly."),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("inlineCode",{parentName:"p"},"$ npx cypress run"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The following command to opens a user interface with features including browsing the test directory, running tests, and recording the tests."),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("inlineCode",{parentName:"p"},"$ npx cypress open")))))),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Cypress. This framework runs integration testing for the web-app.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Installing Cypress. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.cypress.io/guides/getting-started/installing-cypress"},"https://docs.cypress.io/guides/getting-started/installing-cypress")),(0,s.kt)("li",{parentName:"ul"},"Additional Linux Prerequisites. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisite"},"https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisite")),(0,s.kt)("li",{parentName:"ul"},"Opening the App. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.cypress.io/guides/getting-started/opening-the-app"},"https://docs.cypress.io/guides/getting-started/opening-the-app")),(0,s.kt)("li",{parentName:"ul"},"Introduction: Writing a Test. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test"},"https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test")),(0,s.kt)("li",{parentName:"ul"},"API Documentation. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.cypress.io/api/table-of-contents/"},"https://docs.cypress.io/api/table-of-contents/")))),(0,s.kt)("li",{parentName:"ul"},"Jest 27.x. This framework runs front-end testing in JavaScript.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Getting Started. A feature overview. ",(0,s.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/27.x/getting-started"},"https://jestjs.io/docs/27.x/getting-started")),(0,s.kt)("li",{parentName:"ul"},"Globals. Describes methods for preparing and running tests. ",(0,s.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/27.x/api"},"https://jestjs.io/docs/27.x/api")),(0,s.kt)("li",{parentName:"ul"},"Jest CLI Options. ",(0,s.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/27.x/cli"},"https://jestjs.io/docs/27.x/cli")),(0,s.kt)("li",{parentName:"ul"},"Snapshot Testing Tutorial. ",(0,s.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/27.x/snapshot-testing"},"https://jestjs.io/docs/27.x/snapshot-testing")))),(0,s.kt)("li",{parentName:"ul"},"Nodejs.dev. How to install Node.js. ",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.dev/en/learn/how-to-install-nodejs/"},"https://nodejs.dev/en/learn/how-to-install-nodejs/")),(0,s.kt)("li",{parentName:"ul"},"Npm Docs. Downloading and installing Node.js and npm. This sub-system runs and manages the front-end environment. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm")),(0,s.kt)("li",{parentName:"ul"},"Pytest 7.2.x. This framework for node back-end testing in Python.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Install pytest. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.pytest.org/en/7.2.x/getting-started.html#install-pytest"},"https://docs.pytest.org/en/7.2.x/getting-started.html#install-pytest")),(0,s.kt)("li",{parentName:"ul"},"Commandline Flags. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.pytest.org/en/7.2.x/reference/reference.html#command-line-flags"},"https://docs.pytest.org/en/7.2.x/reference/reference.html#command-line-flags")),(0,s.kt)("li",{parentName:"ul"},"API reference. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.pytest.org/en/7.2.x/reference/reference.html#api-reference"},"https://docs.pytest.org/en/7.2.x/reference/reference.html#api-reference")),(0,s.kt)("li",{parentName:"ul"},"About Fixtures. Fixtures are used to prepare tests. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.pytest.org/en/7.2.x/explanation/fixtures.html#about-fixtures"},"https://docs.pytest.org/en/7.2.x/explanation/fixtures.html#about-fixtures")))),(0,s.kt)("li",{parentName:"ul"},"Pytest-mock 3.10.x. This framework integrates built-in Python mocking libraries with Pytest. ",(0,s.kt)("a",{parentName:"li",href:"https://pytest-mock.readthedocs.io/en/latest/"},"https://pytest-mock.readthedocs.io/en/latest/")),(0,s.kt)("li",{parentName:"ul"},"Python 3.10.x.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Download Python. ",(0,s.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"https://www.python.org/downloads/")),(0,s.kt)("li",{parentName:"ul"},"unittest.mock Documentation. Used for mocking objects. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/unittest.mock.html"},"https://docs.python.org/3/library/unittest.mock.html")))),(0,s.kt)("li",{parentName:"ul"},"Pip documentation v23.0.1. Installation. This tool manages Python modules. ",(0,s.kt)("a",{parentName:"li",href:"https://pip.pypa.io/en/stable/installation/"},"https://pip.pypa.io/en/stable/installation/")),(0,s.kt)("li",{parentName:"ul"},"React. Test Renderer. This module provides snapshot testing for the front end. ",(0,s.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/test-renderer.html"},"https://reactjs.org/docs/test-renderer.html"))))}m.isMDXComponent=!0}}]);