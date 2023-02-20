---
sidebar_position: 1
---

**Purpose**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Requirements**

In addition to the general requirements the Design Document - Part I Architecture will contain:

A description the different components and their interfaces. For example: client, server, database.

For each component provide class diagrams showing the classes to be developed (or used) and their relationship.

Sequence diagrams showing the data flow for _all_ use cases. One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams.

Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc.

If there is a database:

Entity-relation diagram.

Table design.

A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance.


### Components

**Client**

**Server**

**Database**

### Sequence Diagrams

**Use Case #1**: User wants to find a spot in a general vicinity.

**Use Case #2**: User wants displayed parking spots to reflect price preferences.

**Use Case #3**: User wants spots that can fit their car to be detected.
<details>
<summary>
Use Case 3 Description
</summary>

1. User opens parking options.
2. User selects the option that best reflects the size of their car from a dropdown menu.
3. The application sends a message to the server to communicate the unique size need.
4. The server transmits this information to the raspberry pi node.
5. The computer vision processing the video feed adjusts to make decisions on whether a spot exists in a space or not based on if the user's car size can fit there.

</details>

![Figure ](/img/usecase_3.png)

**Use Case #4**: User wants be directed to a parking spot.
<details>
<summary>
Use Case 4 Description
</summary>

1. User clicks the search button to find parking spots.
2. User enters their destination's address.
3. The TuTraffic application displays the detected spots to the user's device.
4. User selects on a parking spot and clicks the "Route" button.
5. Google Maps API is loaded to direct the user to their destination.

</details>

![Figure ](/img/usecase_4.png)

### Algorithms

**Computer Vision**

### State Diagrams

### Database

**Entity-Relation Diagram**

**Table Design**
