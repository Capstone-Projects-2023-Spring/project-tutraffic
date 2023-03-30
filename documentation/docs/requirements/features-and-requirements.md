---
sidebar_position: 4
---

# Features and Requirements
Functional features will be in bold and their related non-functional requirements under them in bullet points.

**Parking spot detection**: TuTraffic will take overhead pictures of parking areas with a camera connected to a Raspberry Pi. Each image will be processed to remove unnecessary detail and will be fed into a computer vision model to detect parking spots.
* Images will detect where vehicles are present, how large they are, and how far apart they are from eachother with >=80% accuracy
* Data output will consist of the location, number, and size of available parking spaces with >=80% accuracy
* Photos should be taken and processed once a minute for accurate data to be presented to users

**Accounts**: TuTraffic will use a database to save user data so users can create accounts, log in to them, edit their details, and delete them.
* Users should be able to send a logon request to the system and get an acceptance/denial response in under 20 seconds
* User information will be securely stored

**Spot Reservation**: Users will be able to reserve open spots in the TuTraffic application, meaning the spot will no longer appear as available to other users. Before claiming a spot, users will need to be within .5 miles and after claiming the spot will be reserved for 20 minutes (users are not protected from non TuTraffic users taking the spot, but it will not appear in other users' searches).

**Settings**: Users will be able to edit search filters and car details.
* Seacrh filters include parking price per hour and range of distance they are willing to park from their destination
* Car details include the size of a users car so that parking spots will not be displayed if they are too small

**Directions**: The mobile/web application will interface with the Google Maps API to detect the user's location and can either display directions to the spot in-app or by forwarding the spot location to the google maps app.
* Map API will be easy to read and navigate
* Geolocation used with the map will accurately align with users current location

**Notifications**: Users will be able to set notification schedules so that when it approaches the time they typically park, they can receive an email, text, or push notification on the status of parking spots.
* Notifications will be effectively communicate a message to a user in a condensed format