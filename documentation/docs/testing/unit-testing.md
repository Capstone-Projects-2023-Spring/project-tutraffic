---
sidebar_position: 1
---
# Unit Tests
Unit tests for the back-end are written in Python, using the [pytest](https://docs.pytest.org/en/stable/) and [FastAPI.TestClient](https://fastapi.tiangolo.com/tutorial/testing/?h=testclient#using-testclient) modules.

Automated unit tests for the front-end are written in JavaScript, using the [Jest](https://jestjs.io/) testing framework.

Some functions of the front-end will be verified manually:

1. The test assignee will run the program, either manually or using a test script.
2. The assignee will perform operations according to the testing criteria.
3. The assignee will check the output against the acceptance criteria.
4. The assignee will accept the changes or reject them and provide feedback.

Manual testing activities will be documented in Jira.

## Back-end Unit Tests

### Class ParkingSpot Tests
#### **test_checkParking()**
Tests the ability to report whether or not number of available parking spacesin a test image is zero or greater than zero.

	Case 1: There are one or more available parking spaces.
	Expected Result: Returns true.

	Case 2: There are no available parking spaces.
	Expected Result: Returns false.

#### **test_checkEmptySpots()**
Tests the ability to count the number of empty parking spaces in a test image.

	Case 1: There are no empty parking spaces.
	Expected Result: Returns 0.

	Case 2: There is 1 empty parking space.
	Expected Result: Returns 1.

	Case 3: There are 2 adjacent empty parking spaces.
	Expected Result: Returns 2.

	Case 4: There are 2 empty parking spaces separated by another object.
	Expected Result: Returns 2.

	Case 5: There are 3 adjacent empty parking spaces.
	Expected Result: Returns 3.

	Case 6: There are 3 empty parking spaces separated by other objects.
	Expected Result: Returns 3.

	Case 7: there are 3 empty parking spaces, 1 of which is separated from the others by another object.
	Expected Result: Returns 3.

#### **test_checkCars()**
Tests the system's capability to count the number of cars in a test image.

	Case 1: There are no cars.
	Expected Result: Returns 0.

	Case 2: There is 1 car.
	Expected Result: Returns 1.

	Case 3: There are 2 adjacent cars.
	Expected Result: Returns 2.

	Case 4: There are 2 cars separated by another object.
	Expected Result: Returns 2.

	Case 5: There are 3 adjacent cars.
	Expected Result: Returns 3.

	Case 6: There are 3 cars separated by other objects.
	Expected Result: Returns 3.

	Case 7: there are 3 cars, 1 of which is separated from the others by another object.
	Expected Result: Returns 3.

### User Accounts API

#### **test_create_user()**
Tests the addition of a user account to the server. First, a request is made to add a user to the test server, then the test server is queried to check for the existence of a user with the matching fields (including _username_, _email_, _id_).

	Case 1: The username does not match an existing account on the server.
	Expected Result: A new user exists on the server with matching fields.

	Case 2: The username matches an existing account on the server.
	Expected Result: The server responds with an error message indicating that the user already exists.

#### **test_get_user_info()**
Verifies the retrieval of account information and settings by username. A test user is read from a test accounts database.

	Case 1: An existing user.
	Expected Result: The user account information and settings match a deep copy of the existing user's information created prior to execution.

	Case 2: An incorrect username.
	Expected Result: The server reports that the username is invalid.

#### **test_login()**
Tests password-based authentication. Test username-password pairs are checked against a test account database.

	Case 1: The username and password both match an account.
	Expected Result: The user is authenticated.

	Case 2: The user and password match separate accounts.
	Expected Result: The server reports invalid credentials.

	Case 3: The username matches, and the password does not match.
	Expected Result: The server reports invalid credentials.

	Case 4: The username does not match, and the password matches.
	Expected Result: The server reports invalid credentials.

	Case 5: The username and password do not match.
	Expected Result: The server reports invalid credentials.

#### **test_update_user()**
Tests updates to user account information. The test users are checked against a test accounts database.

	Case 1: The username matches an account.
	Expected Result: The user's account details and settings reflect the changes.

	Case 2: The username does not match an account.
	Expected Result: The server rejects the changes and reports that the username is invalid.

#### **test_delete_user()**
Tests the deletion of a user from the server identified by their username. The test users are checked against a test accounts database.

	Case 1: The username matches an account.
	Expected Result: The user is removed from the server and can no longer be found.

	Case 2: The username does not match an account.
	Expected Result: The server reports that the username is invalid.

### Raspbery Pi API

#### **test_create_node()**
Tests the addition of a node to the server. First, a request is made to add a test node to the test server and associated it with a location ID, then the connection is verified.

	Case 1: The location ID does not exist, the location ID is valid, and the credentials are correct.
	Expected Result: The connection succeeds.

	Case 2: The location ID is invalid.
	Expected Result: The connection fails. The server reports that the location is invalid.

	Case 3: The credentials are invalid.
	Expected Result: The connection fails. The server reports that the credentials are invalid.

	Case 3: The location ID already exists on the server.
	Expected Result: The connection fails. The server reports that the location is invalid.

#### **test_update_location()**
Tests the sending of updates from node to server. After each request completes, the test server, containing test locations, is queried to determine whether the update has completed correctly.

	Case 1: Location 1 is updated from 1 spots to 2 spots.
	Expected Result: The number of spots at Location 1 is 2.

	Case 2: Location 2 is updated from 2 spots to 0 spots.
	Expected Result: The number of spots at Location 2 is 0.

	Case 3: Location 3 is updated from 3 spots to 3 spots.
	Expected Result: The number of spots at Location 3 remains 3.

	Case 4: Location 4 is updated from 4 spots to -1 spots.
	Expected Result: The number of spots at Location 4 remains 4. The server reports that the number is invalid.

	Case 5: A non-existing location is updated.
	Expected Result: The location does not exist on the server, and the server reports that the location is invalid.

#### **test_delete_node()**
Tests the removal of a node from the server. First, a request is made to remove the test node associated with a location from ID the server, then the broken connection and its cause are verified.

	Case 1: The node exists on the server and the credentials are valid.
	Expected Result: The connection fails.

	Case 2: The node does not exist on the server.
	Expected Result: The connection fails.

	Case 3: The node exists on the server, but the credentials are invalid.
	Expected Result: The connection succeeds.

## Front-end Unit Tests

### Class LoginScreen Tests
#### **test_render()**
Renders the login screen and loads a test User object.

The test assignee will accept or reject the appearance of the login screen according to the acceptance criteria, which may change as the project progresses.

	Case 1: A new user session.
	Expected Result: The login screen has blank dialogue boxes.

	Case 2: A returning user session.
	Expected Result: The login screen displays the correct username, and has an empty password dialogue.

#### **test_submit()**
Verifies the client-side sanitation of plaintext username and password entries, for the purpose of improving user experience. This method does not check the entries against an account database. This method does not accept arguments because it reads from the class fields _username_ and _password_.

	Case 1: The username and password are both valid.
	Expected Result: Returns the username and password.

	Case 2: The username is valid, and the password is invalid.
	Expected Result: Returns a sentinel value and signals that the password is invalid.

	Case 4: The username does not match, but the password matches.
	Expected Result: Returns false.

	Case 5: The username and password are invalid.
	Expected Result: Returns a sentinel value and signals that both the username and password are invalid.

#### **test_changeState()**
Renders the login screen component and loads a test User collection.

The test assignee will accept or reject the appearance of the login screen according to the acceptance criteria, which may change as the project progresses.

	Case 1: The username text changes.
	Expected Result: The login screen dialogue updates the displayed username text.

	Case 2: The password text changes.
	Expected Result: The login screen dialogue updates the displayed password text or substitute.

	Case 3: The user submits correct credentials.
	Expected Result: The login screen displays a specific message, e.g. "Logging in,", when the user enters correct credentials.

	Case 4: The user submits incorrect credentials.
	Expected Result: The login screen displays a specific message, e.g. "Incorrect username or password," when the user enters incorrect credentials.

### Class HomeScreen Tests
#### **test_render()**
Renders the home screen and loads a test ParkingSpot collection, map data, and Settings object.

The test assignee will accept or reject the appearance of the home screen according to the acceptance criteria, which may change as the project progresses.

	Case 1: A new user session.
	Expected Result: The home screen displays the default menu dialogues and elements, including the settings dialogue and map.

	Case 2: A returning user session.
	Expected Result: The home screen displays the default menu dialogues and elements, including the settings dialogue and map. Additionally, the home screen changes its appearance and behavior according to persistent data such as the user's favorite locations and settings.

#### **test_submit()**
Renders the home screen, loads a test Settings object, and verifies the client-side sanitation of settings for display purposes.

The test assignee will accept or reject the appearance of the home screen according to the acceptance criteria, which may change as the project progresses.

	Case 1: The user views the home screen.
	Expected Result: The home screen display is correct according to each settings field.

	Case 2...16: The user changes the distance, car size, cost, or address setting to a valid value (15 total combinations).
	Expected Result: The home screen correctly represents the latest settings.

	Case 17...31: The user changes the distance, car size, cost, or address to an invalid value (15 total combinations).
	Expected Result: A dialogue appears on the home screen that rejects the change and displays a message to the user that helps explain why.

#### **test_getSettings()**
Tests the correct retrieval of settings by matching the fields against a test Settings object.

	Case 1: The Settings object does not exist.
	Expected Result: The Settings fields match those of a test Settings object containing the default values.

	Case 2: The Settings object from a returning user session exists.
	Expected Result: The Settings fields match those of a case-specific test Settings object.

	Case 3: The Settings fields are manipulated.
	Expected Result: The Settings fields match the latest fields.

#### **test_displayMap(distance, carSize, cost, address)**
Renders the embedded map according to a test Settings object, ParkingSpot collection, and test map data.

The test assignee will accept or reject the appearance of the home screen according to the acceptance criteria, which may change as the project progresses.

	Case 1: A new user views the map.
	Expected Result: The map area and pinned ParkingSpots fit the Settings criteria.

	Case 2: The Settings fields are manipulated to correct values.
	Expected Result: The map area fits the latest fields. ParkingSpots are pinned or removed according to those fields.

	Case 3: The Settings fields are valid, but there are no valid ParkingSpots.
	Expected Result: The component notifies the user that there are no valid ParkingSpots.

### Class Settings Tests
#### **test_render()**
Renders the settings dialogue, and verifies that each setting can be manipulated by the user.

The test assignee will accept or reject the appearance of the home screen according to the acceptance criteria, which may change as the project progresses.

	Case 1: A new user session.
	Expected Result: The home screen displays the default menu dialogues and elements, including the settings dialogue and map.

	Case 2: A returning user session.
	Expected Result: The home screen displays the default menu dialogues and elements, including the settings dialogue and map. Additionally, the home screen changes its appearance and behavior according to persistent data such as the user's favorite locations and settings.

#### **test_changeInfo()**
Renders the settings dialogue and verifies the client-side sanitation of settings transactions.

The test assignee will accept or reject the appearance of the home screen according to the acceptance criteria, which may change as the project progresses.

	Case 1: The user opens the settings dialogue.
	Expected Result: The home screen display is correct according to each settings field.

	Case 2...16: The user changes the distance, car size, cost, or address setting to a valid value (15 total combinations).
	Expected Result: The home screen correctly represents the latest settings.

	Case 17...31: The user changes the distance, car size, cost, or address to an invalid value (15 total combinations).
	Expected Result: A dialogue appears on the home screen that rejects the change and displays a message to the user that helps explain why.