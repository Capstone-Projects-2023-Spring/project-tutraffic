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

### Milestone Demo 1
**F**: Object detection and identification
- R: From gathered images
- R: Recognition of cars
- R: Detection accuracy >= 50%

**F**: Detection and identification of parking spaces
- R: From gathered images
- R: Recognition of parking spaces in parking lots
- R: Detection accuracy >= 50%

**F**: Account creation & profile management
- R: Create user account with email and password
- R: Modify user email and password 

### Milestone Demo 2
**F**: Improve object detection and identification of cars
- R: Improve detection accuracy to >= 70%

**F**: Improve object detection and identification of parking spaces in parking lots
- R: Improve detection to >= 70%

**F**: Integration of machine learning algorithms for detection and identification of parking spaces in street
- R: From gathered images
- R: Detection accuracy >= 30%

**F**: Raspberry Pi communication with database
- R: Raspberry Pi camera feed sent to database

**F**: Account modification
- R: Modify user parking preferences

### Milestone Demo 3: 
**F**: Improve object detection of parking spaces in street
- R: Detection accuracy >= 60%

**F**: Raspberry Pi feed processed with computer vision
- R: From images sent to database