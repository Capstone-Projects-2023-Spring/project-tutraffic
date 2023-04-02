# Testing Development
## **Document Overview**
This document describes how to setup and run the testing environment for the TuTraffic system.

## **Setup**

### **Software Requirements**

#### **Node Back-end Requirements**
The node back-end testing environment requires:
1. The [python3](https://www.python.org/downloads/) interpreter.
2. The package manager [pip](https://pip.pypa.io/en/stable/installation/) is included with the latest version of Python 3.
3. Additional requirements, including [pytest](https://docs.pytest.org/en/7.2.x/getting-started.html#install-pytest), can be installed from the commandline using pip:

	```$ pip install -r testing/python/requirements.txt```

#### **Front-end Requirements**
The frontend testing environment requires:
1. The package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) is included with [Node.js](https://nodejs.dev/en/learn/how-to-install-nodejs/), which is installed as part of the system environment.
2. The testing framework, including [Jest](https://jestjs.io/) and [react-test-renderer](https://reactjs.org/docs/test-renderer.html), is included in the frontend environment.


## **Writing Tests**

### **Writing Node Back-end Tests**

The [pytest](https://docs.pytest.org/en/7.2.x/reference/reference.html#api-reference) module provides functionality that the built-in assert statement does not provide, such as [fixtures](https://docs.pytest.org/en/7.1.x/explanation/fixtures.html#about-fixtures).

Follow these two conventions when naming Python test scripts and methods:
1. Use the file name of the tested Python script, prefixed with "test_", and store it in the same directory.
	```
	# Example directory structure.
	/example/src/script.py
	/example/src/test_script.py
	```
2. Prefix test methods with "test_".
	```
	# This is an example test method declaration.
	def test_foo():
	```

Use the following import statement in Python to access the pytest module:

	import pytest

### **Writing Front-end Tests**

The testing framework, including [Jest](https://jestjs.io/api) and [react-test-renderer](https://www.npmjs.com/package/react-test-renderer), is included in the frontend environment.

Follow these two conventions when naming JavaScript test scripts and methods:
1. Use the file name of tested JavaScript scripts, suffixed with ".test", and store it in the same directory.
	```
	// Example directory structure.
	/example/src/component.js
	/example/src/component.test.js
	```
2. Describe the test using name of the class or method in the `name` parameter of the Jest method call.
	```
	// This is an example test() method call in Jest.
	test('test case 1', (parameters) => expression)
	```

#### **Writing Snapshot Tests**

[Snapshots](https://jestjs.io/docs/snapshot-testing) are files representing rendered React components. Tests can be created that compare a snapshot generated during testing with a reference snapshot.

Snapshot tests require an import from `reac-test-renderer`:
```
// JavaScript import statement
import renderer from 'react-test-renderer';
```
Here is an example snapshot test [(source)](https://jestjs.io/docs/snapshot-testing):
```
Test example: Link.test.js
----------
import renderer from 'react-test-renderer';
import Link from '../Link';	// The component being tested.

it('renders correctly', () => {
  const tree = renderercomponent tree.
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// 1. The tree constant stores the snapshot.
// 2. The create() method returns a test renderer for the Link component.
// 3. The toJson() method returns the snapshot.
// 4. The expect() and matcher toMatchSnapshot() calls compare the tree to the reference snapshot. The test passes if the snapshots match.
```

## **Running Tests**

### **Running Node Back-end Tests**

Run node back-end tests using pytest from the commandline.
```
$ pytest
```

### **Running Front-end Tests**

Run front-end tests using Jest via npm from the commandline, within the frontend directory.

By default, Jest runs in the background, and automatically runs tests when relevant files are changed.
```
# Run tests in watch mode.
$ cd frontend	# From the repository root directory, set the working directory to the front end.
$ npm test
```

The `watchAll=false` Jest flag skips watch mode and the interactive prompt.
```
# Run tests without watch mode or interactive prompt.
$ cd frontend # From the repository root directory, set the working directory to the front end.
$ npm test -- --watchAll=false
```

The `updateSnapshot` Jest flag updates the reference snapshots used for [snapshot testing](https://jestjs.io/docs/snapshot-testing) instead of testing against them. A manual review should be performed before updating the reference snapshots.
```
# Run tests without watch mode or interactive prompt, and update snapshot files.
$ cd frontend # From the repository root directory, set the working directory to the front end.
$ npm test -- --watchAll=false --updateSnapshot
```

## Resources
* Jest 27.x. This framework runs front-end testing in JavaScript.
	* Globals. Describes methods for preparing and running tests. https://jestjs.io/docs/27.x/api
	* Expect. Describes methods for assertions. https://jestjs.io/docs/27.x/expect
	* Jest CLI Options. https://jestjs.io/docs/27.x/cli
	* Snapshot Testing Tutorial. https://jestjs.io/docs/27.x/snapshot-testing
* Nodejs.dev. How to install Node.js. https://nodejs.dev/en/learn/how-to-install-nodejs/
* Npm Docs. Downloading and installing Node.js and npm. This sub-system runs and manages the front-end environment. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* Pytest 7.2.x. This framework for node back-end testing in Python.
	* Install pytest. https://docs.pytest.org/en/7.2.x/getting-started.html#install-pytest
	* Commandline Flags. https://docs.pytest.org/en/7.2.x/reference/reference.html#command-line-flags
	* API reference. https://docs.pytest.org/en/7.2.x/reference/reference.html#api-reference
	* About Fixtures. Fixtures are used to prepare tests. https://docs.pytest.org/en/7.2.x/explanation/fixtures.html#about-fixtures
* Pytest-mock 3.10.x. This framework integrates built-in Python mocking libraries with Pytest. https://pytest-mock.readthedocs.io/en/latest/
* Python.
	* Download Python. https://www.python.org/downloads/
	* unittest.mock documentation. Used for mocking objects. https://docs.python.org/3/library/unittest.mock.html
* Pip documentation v23.0.1. Installation. This tool manages Python modules. https://pip.pypa.io/en/stable/installation/
* React. Test Renderer. This module provides snapshot testing for the front end. https://reactjs.org/docs/test-renderer.html
