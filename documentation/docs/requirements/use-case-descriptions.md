---
sidebar_position: 5
---

# Use-case descriptions

## Use Case #1
**User wants to find a spot in a general vicinity.**
1. User opens parking options.
2. In parking options, user adjusts the range of how far they are willing to park in the area surrounding from their destination. 
3. User clicks the search button to find spots in an area.
4. User enters the address of their destination.
5. The TuTraffic application displays the detected spots in that range to the user's device.

## Use Case #2
**User wants displayed parking spots to reflect price preferences.**
1. User opens parking options.
2. In parking options, user removes parking garages and paid lots from their preferences.
3. User edits their accepted hourly price range for street parking in parking options, reflecting how much they are willing to pay per hour.

## Use Case #3
**User wants spots that can fit their car to be detected.**
1. User opens parking options.
2. User selects the option that best reflects the size of their car from a dropdown menu.
3. The application sends a message to the server to communicate the unique size need.
4. The server transmits this information to the raspberry pi node.
5. The computer vision processing the video feed adjusts to make decisions on whether a spot exists in a space or not based on if the user's car size can fit there.

## Use Case #4
**User wants be directed to a parking spot.**
1. User clicks the search button to find parking spots.
2. User enters their destination's address.
3. The TuTraffic application displays the detected spots to the user's device.
4. User selects on a parking spot and clicks the "Route" button.
5. Google Maps API is loaded to direct the user to their destination.