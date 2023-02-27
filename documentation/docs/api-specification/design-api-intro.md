---
sidebar_position: 1
---

Design Document - Part II API
=============================

## Front-end

**Data Fields:**
- variableName: dataType - description

### Class: Class Name

**Methods:**

`methodName(): void`
- description

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
