---
sidebar_position: 4
---

# Features and Requirements

*Parking spot detection*… TuTraffic will take overhead pictures of parking areas with a camera connected to a raspberry pi, each Image will be processed to remove unnecessary detail and will be fed into a computer vision model to detect where vehicles are present, how large they are, and how far apart they are. This data will be used to determine the number, location, and size of the available parking spots with either lot or street parking.

*Accounts*…  TuTraffic will use a database to save user data including locations and reservations.

*Spot Reservation*… TuTraffic will allow users to reserve open spots, which will no longer appear as available to other users. Before claiming a spot, users will need to be within .5 miles and after claiming the spot will be reserved for 20 minutes. Users are not protected from non TuTraffic users taking the spot, but it will not appear in other users' searches.

*Settings*… TuTraffic will allow users to edit search filters including price and distance, and will also allow users to input the size of their car to ensure they are only displayed spots they can fit in.

*Directions*… TuTraffic will interface with the Google Maps API to detect the user's location and can either display directions to the spot in-app or by forwarding the spot location to the google maps app.

*Notifications*… TuTraffic users will be able to set notification schedules so that when it approaches the time they typically park, they can receive an email, text, or push notification on the status of parking spots.