---
sidebar_position: 2
---
# Integration tests

Integration tests are written in JavaScript, using the [Cypress](https://cypress.io/) testing framework.

The Raspberry Pi back-end system operations are mocked with Python scripts. Python scripts are executed using terminal commands wrapped in the Cypress exec command.

## Use Case #1: User wants to find a spot in a general vicinity.

### **find_parking_nearest.spec.cy.js**

Tests the system's ability to serve the user a list of parking spots near their destination. The user inputs their destination address in the client application.

Expected Result: The client application redirects the user to a Google Maps search for their parking space.

Test Components:
* Web-App

	The client renders the user interface, including an address search service that accepts text input or GPS. The client receives inputs from the user, sends the destination address to the server, and receives map and parking-location data. 

* Firebase

	The application server stores the location of each parking spot in the system.

## Use Case #2: User wants displayed parking spots to reflect their preferences.

### **find_parking_nearest_with_filters.spec.cy.js**

Tests the system's ability to filter for free parking spots and garage or street parking. A registered user sets their preferences in their user profile.

Expected Result: The client application displays parking locations that meet the user's criteria and excludes other locations.

Tested Components:
* Web-App

	The client application renders the user interface, including drop down menus containing options for each setting. It receives input from the user, updates their preferences, formulates their queries, and receives map and parking-location data.

* Firebase

	The application server stores information about parking spots in the system, including their type and pay rate. It also stores user account information and preferences.

## Use Case #3 User wants to receive parking notifications.

### **show_parking_notification.spec.cy.js**

Tests the system's ability to serve notifications to the user. The user receives a notification permission request after selecting their parking destination. When the user allow notifications, the application creates an alert when there are a low number of available parking spaces.

Expected Result: The client application displays a notification each time it receives an updated parking space count that is less than 5.

Tested Components:
* Web-App

	The client application renders the parking lot status and notification messages. It receives updates from the application server.

* Firebase

	The application server stores the number of parking spaces at each location, and sends relevant information to the client application in real-time.

* Raspberry Pi

	The Raspberry Pi regularly reports the number of remaining parking spots to the application server.

## Use Case #4 User wants to save a favorite parking spot.

### **add_favorite_parking.spec.cy.js**

Tests the system's ability to associate parking information with a user.

Expected Result: The client application shows the user their favorite parking spaces when they navigate to the favorites page.

Tested Components:
* Web-App

	The client application provides the menu that allows users to add a parking location to their favorites list. It sends the updated information to the application server.

* Firebase

	The application server stores the user's favorite parking location.
