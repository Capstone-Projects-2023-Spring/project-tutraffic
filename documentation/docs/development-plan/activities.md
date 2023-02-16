---
sidebar_position: 1
---

# Activities

## Requirements Gathering

There are a multitide of modules that go into the functionality of this application. One major area of research required to create a working product is the computer vision that the raspberry pi's video feed will be processed through to detect parking spots. Computer vision is an application of machine learning, so there is a need to understand how TuTraffic can take advatnage of machine learning's ability to process information and make meaningful decisions to detect appropriate parking spaces. There are a plethora of resources readily available regarding artifical intelligence.

A second area relevant to requirements gathering is selecting an appropriate database for TuTraffic's needs. TuTraffic requires a database to hold and update information regarding parking spots. A real-time list of parking spots will be stored on the database and regularly updated as the raspberry pi's video feed is processed - spots will be removed if they are detected to have been filled and added if they are detected to have opened up. Research is needed to find a database that can be continuously and quickly updated as users are constantly making requests to pull information from it.

Finally, user needs need to be evaluated for acceptance testing in later stages of development. In order to determine whether or not the TuTraffic application functions in a usable and productive way, the needs of users that will be utilizing it should be determined. 

## Top-Level Design

## Detailed Design

## Testing

We will utilize different types of testing to assess the functionality of our project in various aspects.

1. Unit Testing
    - Unit tests are useful in testing indivudual components of software, showing developers if methods/functions are working as intended and can be done throughout development starting early.
        - unittest, a Python unit testing framework, for the raspberry pi code
        - JUnit, a Java unit testing framework, for the Android mobile application 

2. Integration Testing
    - Integration testing focuses on verifying that multiple units of the overall product are working with eachother correctly. This will be essential in TuTraffic's development as we combine hardware and software.
        - "hello world" test in preliminary development to ensure all modules can communicate with one another in general
        - tests in later development to ensure data is flowing in correct form and order

3. Acceptance Testing
    - Acceptance tests are for simulating user stories in real-time to confirm the application can fulfill the basic needs of a user.
        - tests will be performed at the end of development with people not on the team to receive feedback regarding functionalty and usability


## Bug Fixing

Testing & bug fixing go hand-in-hand. When doing any type of testing in software development, bugs are bound to appear and make themselves apparent. When this happens, a task should be added to the TuTraffic team's Jira board that indicates a bug fix needs to be made and where the bug lies. Different priority will be granted depending on if the bug effects other modules of the overall product or is an isolated / minor issue.