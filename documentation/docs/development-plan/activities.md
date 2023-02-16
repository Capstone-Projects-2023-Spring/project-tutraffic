---
sidebar_position: 1
---

# Activities

## Requirements Gathering

There are a multitide of modules that go into the functionality of this application. One major area of research required to create a working product is the computer vision that the raspberry pi's video feed will be processed through to detect parking spots. Computer vision is an application of machine learning, so there is a need to understand how TuTraffic can take advatnage of machine learning's ability to process information and make meaningful decisions to detect appropriate parking spaces. There are a plethora of resources readily available regarding artifical intelligence.

A second area relevant to requirements gathering is selecting an appropriate database for TuTraffic's needs. TuTraffic requires a database to hold and update information regarding parking spots. A real-time list of parking spots will be stored on the database and regularly updated as the raspberry pi's video feed is processed - spots will be removed if they are detected to have been filled and added if they are detected to have opened up. Research is needed to find a database that can be continuously and quickly updated as users are constantly making requests to pull information from it.

Finally, user needs need to be evaluated for acceptance testing in later stages of development. In order to determine whether or not the TuTraffic application functions in a usable and productive way, the needs of users that will be utilizing it should be determined. 

## Top-Level Design
1.	Use computer vision on raspberry pi’s to detect parking spaces.
2.	Run image processing on captured images to determine space availability.  
3.	Establish connections between our pi nodes/React Application and the server.
4.	Create a database to store collected data from all Pi nodes.
5.	Design a React.js interface for users to access our application on Android, iOS, and Web.
6.	Develop a tool to search and filter parking locations.
7.	Design a system for reserving specific parking spots.
8.	Connect our parking locations to real-world coordinates for compatibility with Google Maps API.
9.	Connect users’ location to Google maps API for directions from their location.
10.	Send users to Google Maps for live directions to their parking spots. 
## Detailed Design
1.	Capture images with the raspberry pi.
    -	Raspberry Pi’s will have an external camera attached to take the images.
    -	The code running the camera will be OpenCV running in Python.
    -	After the photo is taken, preprocessing will be done to the picture before entering our image   detection model.
    -	When the image is run through our ML model, it will determine which spaces are available.
2.	Connect Raspberry pi to the server and send parking space data.
    -	The Raspberry Pi will create a JSON file containing the available spaces.
    -	Next, the Pi will send the JSON file to the server using a network connection and the server’s API.
3.	Setup the server to parse JSON files coming from several Pi’s
    -   Divide the different JSON files up for processing among several processes.
    -	Create a new dataset from the separate JSON files to be uploaded to the database.
4.	Use the server for all backend communications.
    -	Users will connect to our database to access our parking data.
    -	GET and UPDATE requests to our database will be handled on the server
    -	The server will also connect all of the Raspberry Pi’s to our system.
    -	Google Maps will also be routed through the server to combine parking data and the user location.
5.	Creating the front-end application
    -	The user interface will be written in React.js to allow users to access our application on Android, iOS, and on a website.
    -	Users can sign into their accounts or create a new ones.
    -	UI will allow users to view and filter parking data.
    -	When a user finds a parking spot, they can map directions to the spot.
    -	On select spots, users can reserve the spot for a period of time.
6.	Allowing the application to access parking data
    -	The application will make requests to the server based on the user-specified filters.
    -	Once the server has the correct data, it will relay it back to the application and display it for the user.
    -	Users will also have restricted access to parking based on their account restrictions.
7.	Mapping to spot using Google Maps API
    -	Users will have to allow our application to know their location or enter it manually.
    -	All spots will contain coordinates to allow the Google Maps API to map directly to the spot.
    -	The server will connect the two locations and create directions from the user to their chosen spot.
8.	Reserving a spot
    -	Users will be able to reserve specific spots in applicable parking locations.
    -	The user will only be able to hold a spot for a limited time, set by the spot’s owner.
    -	Reserving a spot does not work on unregulated spots such as street parking.
    -	Spot reservations are first come, first served, and will notify others who are trying to reserve the same spot.
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