# Testing Development
## **Document Overview**
This document describes how to setup and run the testing environment for the TuTraffic system.

## **Setup**

### **Software Requirements**

#### **Node Back-end Requirements**
The back-end testing environment requires:
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

Use the following import statement in Python to access the pytest module:
```
import pytest
```

Follow these two conventions when naming Python test scripts and methods:
1. Use the file name of the tested Python script, suffixed with "_test", and store it in the same directory.
	```
	/example/src/script.py		# This script is being tested.
	/example/src/script_test.py	# This script tests the above script.
	```
2. Use the name of the tested Python method, prefixed with "test_".
	```
	def foo( bar ):	# This method is being tested.
	def test_foo():	# This method tests the above method.
	```

### **Writing Front-end Tests**

The testing framework, including [Jest](https://jestjs.io/api) and [react-test-renderer](https://www.npmjs.com/package/react-test-renderer), is included in the frontend environment.

Follow these two conventions when naming JavaScript test scripts and methods:
1. Use the file name of tested JavaScript scripts, suffixed with ".test", and store it in the same directory.
	```
	/example/src/component.js		// This component is being tested.
	/example/src/component.test.js	// This script tests the above component.
	```
2. Include the name of the class or method in the `name` parameter of the Jest method call, prefixed with "test".
	```
	function foo( bar )		// This method is being tested.
	test('test_foo', (parameters) => expression)	// This call to test tests the above method.
	```

#### **Writing Snapshot Tests**

[Snapshots](https://jestjs.io/docs/snapshot-testing) are files representing rendered React components. Tests can be created that compare a snapshot generated during testing with a reference snapshot.

Snapshot tests require an import from `reac-test-renderer`:
```
import renderer from 'react-test-renderer';
```
Here is an example snapshot test [(source)](https://jestjs.io/docs/snapshot-testing):
```
Link.test.js
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

### **Run Node Back-end Tests**

Run node back-end tests using pytest from the commandline.
```
$ pytest	# Runs Python scripts ending in "_test.py" in all directories.
```

### **Run Front-end Tests**

Run front-end tests using Jest via npm from the commandline, within the frontend directory.

By default, Jest runs in the background, and automatically runs tests when relevant files are changed.
```
$ cd frontend	# From the repository root directory, set the working directory to the front end.
$ npm test	# Runs tests automatically when relevant files are changed.
```

The `watchAll=false` Jest flag skips watch mode and the interactive prompt.
```
$ cd frontend # From the repository root directory, set the working directory to the front end.
$ npm test -- --watchAll=false
```

The `updateSnapshot` Jest flag updates the reference snapshots used for [snapshot testing](https://jestjs.io/docs/snapshot-testing) instead of testing against them. A manual review should be performed before updating the reference snapshots.
```
$ cd frontend # From the repository root directory, set the working directory to the front end.
$ npm test -- --watchAll=false --updateSnapshot
```

## Resources
* Jest.
	* Expect. Describes methods for assertions. https://jestjs.io/docs/expect
	* Globals. Describes methods for preparing and running tests. https://jestjs.io/docs/api
	* Jest CLI Options. https://jestjs.io/docs/cli
	* Snapshot Testing Tutorial. https://jestjs.io/docs/snapshot-testing
* Nodejs.dev. How to install Node.js. https://nodejs.dev/en/learn/how-to-install-nodejs/
* Npm Docs. Downloading and installing Node.js and npm. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* Pytest 7.2.x.
	* About Fixtures. Fixutres are used to prepare tests. https://docs.pytest.org/en/7.1.x/explanation/fixtures.html#about-fixtures
	* API reference. https://docs.pytest.org/en/7.2.x/reference/reference.html#api-reference
	* Commandline Flags. https://docs.pytest.org/en/7.2.x/reference/reference.html#command-line-flags
	* Install pytest. https://docs.pytest.org/en/7.2.x/getting-started.html#install-pytest
* Python. Download Python. https://www.python.org/downloads/
* Pip documentation v23.0.1. Installation. https://pip.pypa.io/en/stable/installation/
* React. Test Renderer. https://reactjs.org/docs/test-renderer.html
