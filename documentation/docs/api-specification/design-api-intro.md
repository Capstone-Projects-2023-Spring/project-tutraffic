---
sidebar_position: 1
---

Design Document - Part II API
=============================

## Front-end

### Class: LoginScreen

**Purpose:** 

The LoginScreen class renders the login screen and accepts user input for authentication of user account. It includes a submit() method that submits user credentials for authentication when the login button is clicked, and a changeState() method that updates the component's state based on a change in user input.

**Data Fields:**
- username: string - Stores the user's username.
- password: string - Stores the user's password.
 
**Methods:**

`render(): void`
- Renders the login screen.

`submit(): void`
- Submit user credentials including username and password data fields for authentication.

`changeState(): void`
- Update the state of component when user input is changed.

### Class: HomeScreen

**Purpose:** 

The HomeScreen class display's a map of the user's current location which will get updated with pins appearing when search parameters are entered and the submit button is clicked. It includes a submit() method that submits user inputs that are changed in the settings class and are updated with the getSettings() method. It also accepts an address entry. displayMap() is used upon submital of data to update the map.

**Data Fields:**
- distance: float - Stores the inputted distance setting.
- carSize: string - Stores the car size.
- cost: float - Stores the cost input.
- address: string - Stores the inputted address.
 
**Methods:**

`render(): void`
- Renders the home screen.

`submit(): void`
- Submit the address along with selected settings to backend for manipulation.

`getSettings(): void`
- Retrieve settings from settings class to update distance, carsize, and cost variables.

`displayMap(distance, carSize, cost, address): void`
- Display new map based on updated settings and address.

### Class: Settings

**Methods:**

`render(): void`
- Renders the settings page

`changeInfo(): void`
- Allows user to change their information such as email and password.

## Back-end

### Class: User

**Data Fields:**
- userName: string - The username of the user
- email: string - The email of the user
- password: string - The username of the user
- userId: int - Unique ID associated with the user's account

**Methods:**

`getUser(): string`
- Gets the username

`setUser(): void`
- Sets the username

`getEmail(): string`
- Gets the email

`setEmail(): void`
- Sets the email

`setPassword(): void`
- Sets the password

`getUserId(): int`
- Gets the userId

### Class: ParkingSpot

**Data Fields:**
None

**Methods:**

`checkParking(): boolean`
- Returns true of false after checking whether there is any available parking.

`checkEmptySpots(): int`
- Returns the number of available parking by checking for empty spots.

`checkCars(): int`
- Returns the total number of cars currently detected.

# API

### POST /user/create
Description: Create a user account with a JSON request.

JSON request format:
```bash
"user": {
    "id": Integer,
    "username": String,
    "email": String
}
```
Failed call (username already taken):
```bash
{
    "message": "409: Username taken",
    "code" 409
}
```

### GET /user/{username}
Description: Return information about the user from their username, including their account details and parking settings.  
**{username}**: String

Successful call:
```bash 
"user": {
    "id": 1,
    "username": "joe123",
    "email": "joesmith@gmail.com"
},
"parking_preferences": {
    "max_range": 1,
    "max_hourly": 3,
    "size": "medium"
}
```
Failed call (user doesn't exist):  
```bash
{
    "message": "404: Username not found",
    "code": 404
}
```

### GET /user/login/{username}/{password}
Description: Checks user's entered username and password with information in database to authenticate user.

Parameters for login are queries:
- {username}: String
- {password}: String

Failed call (can't authenticate user):
```bash
{
    "message": "401: Invalid credentials",
    "code": 401
}
```

### PUT /user/update/{username}
Description: Update user's account information or parking preferences in the database.
**{username}**: String

JSON request form of parameters able to be updated:
```bash 
"user": {
    "username": String,
    "email": String
},
"parking_preferences": {
    "max_range": Integer,
    "max_hourly": Integer,
    "size": String
}
```
Failed call (username already taken):
```bash
{
    "message": "409: Username taken",
    "code" 409
}
```
Failed call (user doesn't exist): 
```bash
{
    "message": "404: Username not found",
    "code": 404
}
```

### DELETE /user/{username}
Description: Delete user from database.  
**{username}**: String

Failed call (user doesn't exist):
```bash
{
    "message": "404: Username not found",
    "code": 404
}
```

# RASPBERRY PI API
### POST /createNode/{location}
Description: Create node at specific location
**{location}**: String

Successful call:
{
    "success": "200: updated properly",
    "LocationID": Integer
}
```
Failed call:  
```bash
{
    "error": "401: invalid location"
}
```
```bash
{
    "error": "404: connection broken"
}
```


### PUT /update/{locationID, number of spots}
Description: Rasberry pi sends information about the number of spots at a specific location
**{locationID}**: int
**{number of spots}**: int

Successful call:
{
    "success": "200: updated properly"
}
```
Failed call:  
```bash
{
    "error": "401: invalid location"
}
```
```bash
{
    "error": "402: invalid invalid number of spots"
}
```
```bash
{
    "error": "404: connection broken"
}
```

### DELETE /Location/{locationID}
Description: Delete node with locationID
**{locationID}**: int

Successful call:
{
    "success", "200: deleted sucessfully"
}
```
Failed call:  
```bash
{
    "error": "401: invalid location"
}
```
```bash
{
    "error": "404: connection broken"
}
```
