---
sidebar_position: 1
description: Back-End/Raspberri Pi API Documentation
---
API
=============================

## REST API

### ["/user" Endpoint]

### POST /user/create
**Description:**    
Create a user account with a JSON request.

**JSON request format:**
```bash
"user": {
    "id": Integer,
    "username": String,
    "email": String
}
```
**Failed call:**
```bash
{
    "message": "409: Username taken",
    "code" 409
}
```
```bash
{
    "message": "409: Email already in use",
    "code" 409
}
```

### GET /user/{username}
**Description:**    
Return information about the user from their username including their account details. 

**Parameters:**     
- {username} String

**Successful call:**
```bash 
"user": {
    "id": 1,
    "username": "joe123",
    "email": "joesmith@gmail.com"
}
```
**Failed call:**  
```bash
{
    "message": "404: Username not found",
    "code": 404
}
```

### GET /user/login/{username}/{password}
**Description:**    
Checks user's entered username and password with information in database to authenticate user.

**Parameters:** 
- {username}: String
- {password}: String

**Failed call:**
```bash
{
    "message": "401: Invalid credentials",
    "code": 401
}
```

### PUT /user/update/{username}
**Description:**    
Update user's account information in the database.  

**Parameters:**     
- {username} String

**JSON request format:**
```bash 
"user": {
    "email": String,
    "username": String,
    "password": String
}
```
**Failed call:**
```bash
{
    "message": "404: Username not found",
    "code": 404
}
```

### DELETE /user/{username}
**Description:**    
Delete user from database.  

**Parameters:**
- {username}: String

**Failed call:**
```bash
{
    "message": "404: Username not found",
    "code": 404
}
```

### ["/parking" Endpoint]

### GET /parking/available/{location}
**Description:**    
Checks whether there is any available parking.  

**Successful call:**
```bash 
"parking": {
    "available": true,
}
```
```bash 
"parking": {
    "available": false,
}
```

**Failed call:**
```bash
{
    "message": "404: Failed to gather data for parking location",
    "code": 404
}
```

### GET /parking/totalSpots/{location}
**Description:**    
Gets the number of available parking.  

**Successful call:**
```bash 
"parking": {
    "parkingSpots": 5,
}
```

**Failed call:**
```bash
{
    "message": "404: Failed to gather data for parking location",
    "code": 404
}
```

### GET /parking/totalCars/{location}
**Description:**    
Gets the total number of cars currently detected.  

**Successful call:**
```bash 
"parking": {
    "cars": 5,
}
```

**Failed call:**
```bash
{
    "message": "404: Failed to gather data for parking location",
    "code": 404
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
