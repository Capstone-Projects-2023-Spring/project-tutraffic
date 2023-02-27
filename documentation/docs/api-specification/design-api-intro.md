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

## Back-end

### Class: User

**Data Fields:**
- userName: string - The username of the user
- email: string - The email of the user
- password: string - The username of the user
- userId: int - Unique ID associated with the user's account

**Methods:**

`getUser(): void`
- Returns the username

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
