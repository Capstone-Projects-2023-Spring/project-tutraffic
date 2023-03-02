---
sidebar_position: 3
---

# Schedule

```mermaid
gantt
dateFormat  YYYY-MM-DD
title TuTraffic Gantt Chart
excludes 2023-03-07 2023-03-08 2023-03-09 2023-03-10 2023-03-11
section Elaboration Phase
	Sprint 1: , 2023-02-13, 1w
	Set up Google Cloud: , 2023-02-19, 1d
	Set up Google Firebase: , 2023-02-19, 1d
	Connect Cloud and Firebase: , 2023-02-19, 1d
	Sprint 2: , 2023-02-20, 1w
	Set up Raspberry Pi: , 2023-02-20, 1d
	Connect Cloud and Raspberry Pi: , 2023-02-21, 1d
	Set up client application: , 2023-02-21, 1d
	Connect server and client: , 2023-02-22, 1d
	Send and retrieve data from Server and Client: , 2023-02-23, 1d
	"Hello World" Demo: , 2023-02-26, 1d
	Sprint 3: , 2023-02-27, 1w
	Design client application: , 2023-03-03, 3d
	Design system installation process: , 2023-03-03, 3d
section Construction Phase 
	Sprint 4: , 2023-03-13, 1w
	Set up computer vision: , 2023-03-13, 2d
	Set up data structures: , 2023-03-15, 1d
	Detect available parking: , 2023-03-18, 3d
	Milestone Demo 1 - Parking Detection Feature:crit, milestone,  , 2023-03-20, 1d
	Sprint 5: , 2023-03-20, 1w
	Set up client interface: , 2023-03-24, 2d
	Sprint 6: , 2023-03-27, 1w
	Add parking selection: , 2023-03-27, 2d
	Add parking search: , 2023-04-02, 1d
	Milestone Demo 2 - Parking Search Feature:crit, milestone,  , 2023-04-03, 1d
	Sprint 7: , 2023-04-03, 1w
	Detect available public parking: , 2023-04-07, 3d
	Sprint 8: , 2023-04-10, 1w
	Add system installation tool: , 2023-04-05, 5d
	Add navigation: , 2023-04-14, 2d
	Milestone Demo 3 System Installation and Navigation Features:crit, milestone,  , 2023-04-17, 1d
	Sprint 9: , 2023-04-17, 1w
	Add user accounts: , 2023-04-16, 2d
	Add parking reservation: , 2023-04-20, 1d
	Add notifications: , 2023-04-23, 1d
	Sprint 10: , 2023-04-24, 1w
	Final Presentation & Demo :crit, milestone,  , 2023-04-25, 1d
```
*Figure 1. TuTraffic Gantt Chart*

# Milestones

## Milestone Demo 1
**F1**: Object detection and identification
- R1: The system can recognize cars
	- Test set images will be used for the demonstration.
- R2: The system will be able to detect the absence of a car.
- R3: Detection accuracy >= 30%

**F2**: The system will be able to detect parking spaces.
- R1: The system can detect parking spaces in a parking lot.
	- Test set images will be used for demonstration purposes.
- R2: Detection accuracy >= 30%

**F3**: Account creation & profile management
- R1: Create user account with email and password.
- R2: Modify user email and password. 
- R3: A user should be able to delete their account.

**F4**: Raspberry Pi communication with server
- R1: Raspberry Pi camera feed sent to datastore.
- R2: Raspberry Pi can communicate its existence to the server.

## Milestone Demo 2
**F5**: The system should be able to identify parking spaces and whether they're occupied by a car.
- R1: Integrates F1 and F2 together.
- R2: Machine learning algorithms should also be able to detect street parking.
- R3: Improved accuracy of detection to >= 50%
- R4: Images are sent from Raspberry Pi node and processed.

**F6**: Parking Preferences Consideration
- R1: User can save their preferred parking lot or street.
- R2: user can specify how far they are willing to walk from their parking spot to their destination.
- R3: user can set their vehicle model in their account, preferences, or manually enter their vehicle size, for prefential parking (compact car only spaces, or large vehicle spaces, handicap availabilty) 

**F7**: users should be able to to see parking spaces available.
- R1: the user will be able to see a list of parking spaces nearby.
- R2: the user will be presented with a map view of available parking spaces.

## Milestone Demo 3: 
**F8**: Improve object detection of parking spaces in street
- R1: Detection accuracy >= 70%

**F9**: Notifications of parking space availability
- R1: user should be notified when a parking space that is in their favorites list or a part of their commute routine is taken or available.
- R2: when the user is notified about a parking spot being taken mid commute, the system should suggest an appropriate nearby parking spot.

**F10**: Parking spot, availability radius (Parking Up Ahead)
- R1: the user should be able to see available parking at a specified destination. 
- R2: the radius of the parking available, should be reasonable