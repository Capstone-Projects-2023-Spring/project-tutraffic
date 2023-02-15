---
sidebar_position: 2
---

# System Block Diagram
![Figure 1. System Block Diagram](/img/system_block_diagram.png)


The TuTraffic system implements a client-server model. Figure 1 illustrates the system at a high level; it comprises a client, server, node, camera, and the Google Maps API, a third-party geolocation service. Each node is associated with a parking location or section; it receives data from a camera and sends parking status updates to the server in real-time. The server manages a database, which stores parking information and user information including usernames and location data. The Google Maps API provides the system with location management, navigation, and street map functionality. The client application provides a graphical interface between the user and server, letting the user search for nearby parking spaces. 

## Description of Each Block
Camera: The first block is a Raspberry Pi camera, which will capture images and send them to the Raspberry Pi. 

Raspberry Pi: Using OpenCv and Python, the Raspberry Pi will determine open parking spaces in the captured images and send data to the server, which is created with Google Cloud. 

Server/Google Cloud: The server is responsible for connecting different parts of the system. It updates the database on user and parking information, sends and receives data from the client component and keeps the Google Maps API updated on the user’s location.  

Database: The database provides storage for user and parking information 

Client: The client application displays user information, available parking, and navigation. 
Google Maps API: The API uses user location data to provide navigation.  

## Interface between blocks 
For all the nodes to connect, they will require an internet connection. The internet connection will allow all nodes to interface with the server, which acts as the connection between all the nodes. 
  
In the backend, all our nodes interface with the server to send and receive information among each other. The raspberry pi initially holds the parking data to be sent to the server. To get the parking data to the server, the Raspberry Pi will send a JSON file to the server. Once the server has the data, it needs to connect with the database. The server uses the API of our database to make insert calls to transfer the data. The server will also use the API to call the server to send the map data to other nodes. 
  
In the front end, we have our application that will allow users to interface with the parking map. The user can put in specific parameters and get their desired parking map. Then, the app will use the server API to make requests to the server. From there, the API will parse the information and connect with the database to retrieve the data. The server then uses the API to connect the correct data to the user who requested it. 

## Data flow 
The TuTraffic system has three primary data flows; together, they serve three functions: seeding the database with parking locations, updating their status in real-time, and processing parking space queries. 

![Figure 2. Data Flow – Add, Modify, or Remove Parking Location](/img/data_flow_diagram_2.png)

The first data flow in the TuTraffic system, depicted in Figure 2, involves the addition, modification, or removal of a parking location. An administrative user inputs the latest parking location information or removal request into the client, which relays the information or request to the server. The server updates the database and Google Maps API with the information each component needs to service the new or modified location or discontinue service to the removed location.

![Figure 3. Data Flow – Parking Location Status Updates](/img/data_flow_diagram_3.png)

Figure 3 illustrates the high-level implementation of status updates for parking locations represented within the system. The data flow begins with a hardware camera, which regularly captures image data then transfers it to a node. The node utilizes a computer vision model, as implemented by OpenCV, to process the image into an output string, such as a human-readable 
label. The node processes the string into parking status information, then delivers this information to the server. The server stores the status information in the database.


![Figure 4. Data Flow – Search for Parking Space](/img/data_flow_diagram_4.png)

Figure 4 shows the data flow that occurs when the TuTraffic system helps a user find a parking space. First, the user inputs their location and desired filters, such as cost and distance, into the client application, which delivers the query to the server. The server sends the user’s location to the Google Maps API service and receives a list of nearby parking locations, which were seeded by administrative users (Figure 2). Then, the server searches the database for parking locations. It filters locations according to their real-time status, which is updated using camera equipped nodes (Figure 3). Finally, the server returns a list of parking spaces to the client, which displays the information to the user.