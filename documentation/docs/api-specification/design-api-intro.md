---
sidebar_position: 1
description: What should be in this section.
---

Design Document - Part II API
=============================

**Purpose**

This Design Document gives the complete design of the software implementation. This information should be in structured comments (e.g. Javadoc) in the source files. We encourage the use of a documentation generation tool to generate a draft of your API that you can augment to include the following details.

**Requirements**

In addition to the general documentation requirements the Design Document - Part II API will contain:

General review of the software architecture for each module specified in Design Document - Part I Architecture. Please include your class diagram as an important reference.

**For each class define the data fields, methods.**

The purpose of the class.

The purpose of each data field.

The purpose of each method

Pre-conditions if any.

Post-conditions if any.

Parameters and data types

Return value and output variables

Exceptions thrown\* (PLEASE see note below for details).

An example of an auto-generated and then augmented API specification is here ([Fiscal Design Document 2\_API.docx](https://templeu.instructure.com/courses/106563/files/16928898?wrap=1 "Fiscal Design Document 2_API.docx") )

This group developed their API documentation by hand ([Design Document Part 2 API-1\_MovieMatch.docx](https://templeu.instructure.com/courses/106563/files/16928899?wrap=1 "Design Document Part 2 API-1_MovieMatch.docx") )

\*At the top level, or where appropriate, all exceptions should be caught and an error message that is meaningful to the user generated. It is not OK to say ("xxxx has encountered a problem and will now close (OK?)". Error messages and recovery procedures should be documented in the User’s Manual.

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


