---
sidebar_position: 1
---

# System Overview
TuTraffic is a mobile application that uses computer vision and cloud computing to offer realtime information on available parking spots in a designated area. TuTraffic is designed to provide information on where to find parking and to improve users’ overall parking experience. TuTraffic provides an efficient management and monitoring system to help reduce traffic congestion and time spent searching for parking spaces. 

Available parking spots are found using Raspberry Pi cameras. The Raspberry Pi camera, set up to view a parking lot or designated street area, captures images at a predetermined rate and then determines if there are open parking spaces. All parking information and user data are sent to the server to be managed. The Google Maps API is then utilized to provide location management and navigation. 

The system is comprised of of a client application built with a React.js front-end and a FastAPI back-end, a server deployed on Google Cloud, Raspberry Pi nodes paired with cameras, and the Google Maps API. Each Raspberry Pi node is associated with a parking location or section. There, it receives data from the paired camera and uses it to determine the available parking. Finally, the Pi sends the status updates regarding parking availability to the server in real-time. The server manages a database that stores parking information and user information. 

The client application provides a graphical interface for users to search for nearby parking spaces. After creating and account and logging in; Users automatically are informed of parking spaces nearby with user-set filters on the settings page. These consist of: cost, vehicle size, and distance. The user also has the ability to search an address with the same filters, the application will run the same way but with the center being the address inputted rather than the user's location. These responses are sent to the server. The server sends the user's location or inputted address to the Google Maps API service, updates the UI to display this location, and receives a list of parking locations in the proximity of the provided address according to real-time status updates from the Raspberry Pi nodes. The server returns a list of parking spaces to the client, which displays the information to the user as pins on the map. A profile page will also exist in the UI so users will be able to view their account information. 

A rough wireframe of the app can be viewed here:

![Wireframe of the UI](/img/wireframe.png)

The camera systems will be set up so that they can effectively detect open parking spots from both parking lots street parking. The difference between the two being that parking lots usually consist of parking spaces made from distinguished white lines, while street parking is usually more ambiguous. Therefore, our detection systems could be broken down into the detection of parking spots via white lines and the detection of street parking via cars and their sizes. 
