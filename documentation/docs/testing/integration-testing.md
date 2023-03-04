---
sidebar_position: 2
---
# Integration tests

Integration tests are written in JavaScript, using the [jest](https://jestjs.io/) testing framework. Back-end components written in Python will be executed using JavaScript wrappers.

## Use Case #1: User wants to find a spot in a general vicinity.

### **test_search_parking_by_address()**

Tests the system's ability to serve the user a list of parking spots near their destination. The user inputs their destination address in the client application.

Expected Result: The client application receives mock Google Maps API map data and a list of specific parking spots close to the user's destination.

Test Components:
* Front-end Classes: HomeScreen

	The client renders the user interface, including an address search service that accepts text input or GPS. The client receives inputs from the user, sends the destination address to the server, and receives map and parking-location data.

* Back-end Classes: ParkingSpot

	The server stores the location of each mock parking spot in the system, including parking spots outside of range.

* REST API

	The server handles the client parking-location search query.

## Use Case #2: User wants displayed parking spots to reflect price preferences.

### **test_filter_parking_by_cost()**

Tests the system's ability to filter the list of parking spots by price. The user sets their desired maximum price in the client application.

Expected Result: The client application receives mock Google Maps API map data and a list of specific parking spots within the user's price range.

Tested Components:
* Front-end Classes: HomeScreen

	The client renders the user interface, including a slider and field for maximum price. It receives input from the user, sends the maximum accepted pay rate to the server, and receives map and parking-location data.

* Back-end Classes: ParkingSpot

	The server stores the pay rate of mock parking spots in the system, including parking spots outside of the accepted pay rate.

* REST API

	The server handles the client's parking-location query.

## Use Case #3 User wants spots that can fit their car to be detected.

### **test_filter_parking_by_size()**

Tests the system's ability to filter the list of parking spots by available physical space. The user sets the size of their car in the client application.

Expected Result: The client application receives mock Google Maps API map data and a list of specific parking spots that can fit the user's mock vehicle.

Tested Components:
* Front-end Classes: HomeScreen

	The client renders the user interface, including an interface for selecting the vehicle size. It receives inputs from the user, sends the query to the server, and receives map and parking-location data.

* Back-end Classes: ComputerVision, ParkingSpot

	The Raspberry Pi node utilizes computer vision to detect available space at each parking spot in the system.

	The server stores the pay rate of mock parking spots in the system, including parking spots that do not fit the mock vehicle.

* REST API

	The server handles the client's parking-location query.

## Use Case #4 User wants to be directed to a parking spot.

### **test_navigation()**

Tests the system's ability to serve navigation data. The user has selected their parking destination in the client application.

Expected Result: The client application receives mock Google Maps API map data and mock driving directions that lead them to their destination.

Tested Components:
* Front-end Classes: HomeScreen

	The client renders the user interface. It stores the user's location and parking destination, shares that information with the server, and receives map and navigation data.

* Back-end Classes: ParkingSpot

	The server stores the location of the parking destination.

* REST API

	The server handles the client's parking-location query.


