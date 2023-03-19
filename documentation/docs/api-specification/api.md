---
sidebar_position: 1
description: Back-End/Raspberri Pi API Documentation
---
API
=============================

## Backend REST API

### POST /users/create
**Description:**    
Create a new user and store it in the database.
  
**Valid Request Body:**     
```json
{
    "email": String,
    "password": String
}
```

**Successful call:**
```json
{
    "status": 201,
    "body": "A new user has been successfully created."
}
```

**Failed call:**
```json
{
    "status": 409,
    "body": "Email already in use."
}
```

```json
{
    "status": 400,
    "message": "Missing data in request body."
}
```

### PUT /users/update/{id}
**Description:**    
Update a user's data in the database. 

**Path Variable:**     
- {id}: String

**Valid Request Body:**     
```json
{
    "email": String,
    "password": String
}
```
or
```json
{
    "email": String
}
```
or
```json
{
    "password": String
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "User with ID: {id} has been updated."
}
```

**Failed call:**
```json
{
    "status": 409,
    "body": "No fields updated. Email already in use."
}
```

```json
{
    "status": 409,
    "body": "User with ID: {id} does not exist."
}
```

### DELETE /users/delete/{id}
**Description:**    
Delete an existing user from the database.  

**Path Variable:**
- {id}: String

**Valid Request Body:**     
No request body required.

**Successful call:**
```json
{
    "status": 200,
    "body": "User with ID: {id} has been deleted."
}
```

**Failed call:**
```json
{
    "status": 409,
    "body": "User with ID: {id} does not exist."
}
```

## Raspberri Pi API

### POST /createNode/{location}
**Description:**    
Create node at specific location.  

**Parameters:**
- {location}: String

**Successful call:**
```bash
{
    "success": "200: updated properly",
    "LocationID": Integer
}
```
**Failed call:**
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
**Description:**    
Rasberry pi sends information about the number of spots at a specific location. 

**Parameters:**
- {locationID}: int   
- {number of spots}: int

**Successful call:**
```bash
{
    "success": "200: updated properly"
}
```
**Failed call:**  
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

### DELETE /location/{locationID}
**Description:**    
Delete node with locationID.   

**Parameters:**
- {locationID}: int

**Successful call:**
```bash
{
    "success", "200: deleted sucessfully"
}
```
**Failed call:**  
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
