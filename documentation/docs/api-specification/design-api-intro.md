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
