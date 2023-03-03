---
sidebar_position: 1
description: Classes with defined data fields, methods, and descriptions.
---
Classes
=============================

## Front-End Classes

### Class: LoginScreen

**Description:**    
The LoginScreen class renders the login screen and accepts user input for authentication of user account.

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

**Description:**    
The HomeScreen class displays a map of the user's current location and their "favorited" parking locations.

**Data Fields:**    
None.
 
**Methods:**    
`render(): void`
- Renders the home screen.

`submit(): void`
- Submit the address along with selected settings to backend for manipulation.

`displayMap(): void`
- Display the map.

### Class: Settings

**Description:**    
The Settings class allows the user to manage their information and change data such as email and password.

**Data Fields:**    
None.

**Methods:**    
`render(): void`
- Renders the settings page

`changeEmail(): void`
- Allows user to change their email.

`changePassword(): void`
- Allows user to change their password.

## Back-End Classes

### Class: User

**Description:**    
The User class is used to create user-defined data.

**Data Fields:**
- userId: int - Unique ID associated with the user's account
- userName: string - The username of the user
- email: string - The email of the user
- password: string - The username of the user

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

**Description:**    
The ParkingSpot class is used to gather data from the Raspberri Pi.

**Data Fields:**    
None.

**Methods:**

`checkParking(): boolean`
- Returns true of false after checking whether there is any available parking.

`checkEmptySpots(): int`
- Returns the number of available parking by checking for empty spots.

`checkCars(): int`
- Returns the total number of cars currently detected.
