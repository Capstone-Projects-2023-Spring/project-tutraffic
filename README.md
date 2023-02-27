[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10118243)
<div align="center">

# TuTraffic
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/TT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/Capstone-Projects-2023-Spring/project-tutraffic/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2023-spring.github.io/project-tutraffic/)


</div>


## Keywords

Section 002, TuTraffic, Web application, Embedded Systems, Raspberry Pi, Parking Locator

## Project Abstract

TUTraffic an application that aims to ease traffic and parking troubles on Temple’s main campus. Using several cameras on campus, it would use computer vision and machine learning to detect available parking spaces on campus. All of this data would be sent to the application giving updates on parking availability and traffic conditions on campus.

## High Level Requirement

From a user's point of view, this project is an application that would allow them to assess traffic conditions on campus. The app would allow you to determine what parking availability is like, making finding a parking spot on campus more easily.

## Conceptual Design

The way our systems would be able to detect parking is through a device like a raspberry pi with a camera. The camera would be aimed at a parking lot or public street parking. The raspberry pi would do image capturing, sampling, and labeling. The information collected by the pi would be stored on servers like Google Cloud, which the app could access. The web application would be developed using React native.

## Background

The project consists of two main sections and a server that connects the two. The first segment of the project is the camera system that is used to detect traffic and parking spaces on campus. This system will be implemented on a raspberry pi with an external camera attached. The computer
vision would allow for the device to detect cars and open spaces, as there are countless resources for computer vision, like OpenCV. The pi will then send updated information about the traffic and parking continuously, which will then determine the traffic conditions and parking availability.

Computer vision for car detection is not a new concept, and numerous projects use it. One such example is from GitHub user olgarose, who created a similar system to the project we are developing. There is some helpful information within the repository, but this project won't rely on the code
used there. The GitHub project also does not relay the captured data to a server and connect that information to the app, which distinguishes my project from the open-source project.

The server portion of the project will take in the information gathered from the raspberry pi and translate it into the rate of traffic and available parking. The server will run code to handle the processing of information and sending that data to the app.

## Required Resources
Since the project is run in several different segments, there is a large breadth of information required. For background information, this project will require machine learning knowledge, server development, and app development knowledge. The hardware required for the project consists of a raspberry pi and an external camera. The project also requires server space to process the info from the pi and send the information to the app. The rest of the software requirements would be related
to computer vision and app development.

TuTraffic will take overhead pictures of parking areas with a camera connected to a raspberry pi, each image will be processed to remove unnecessary detail and will be fed into a computer vision model to detect where vehicles are present, how large they are, and how far apart they are. This data will be used to determine the number, location, and size of the available parking spots with either lot or street parking.

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/Ethan-Hopkins">
            <img src="https://avatars.githubusercontent.com/u/61639143?v=4" width="100;" alt="Ethan Hopkins"/>
            <br />
            <sub><b>Ethan Hopkins</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ka-puna">
            <img src="https://avatars.githubusercontent.com/u/40096469?v=4" width="100;" alt="Adam Wong"/>
            <br />
            <sub><b>Adam Wong</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/loganbee">
            <img src="https://avatars.githubusercontent.com/u/77982149?v=4" width="100;" alt="LoganBennett"/>
            <br />
            <sub><b>Logan Bennett</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/IsaacFerguson">
            <img src="https://avatars.githubusercontent.com/u/89540388?v=4" width="100;" alt="IsaacFerguson"/>
            <br />
            <sub><b>Isaac Ferguson</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Mo2artGit">
            <img src="https://avatars.githubusercontent.com/u/97559049?v=4" width="100;" alt="RaymondChen"/>
            <br />
            <sub><b>Raymond Chen</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/brian-rangel">
            <img src="https://avatars.githubusercontent.com/u/61568328?v=4" width="100;" alt="BrianRangel"/>
            <br />
            <sub><b>Brian Rangel</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Guire9">
            <img src="https://avatars.githubusercontent.com/u/60325869?v=4" width="100;" alt="MaguireQvale"/>
            <br />
            <sub><b>Maguire Qvale</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/JM-CS">
            <img src="https://avatars.githubusercontent.com/u/73761861?v=4" width="100;" alt="JasonMichel"/>
            <br />
            <sub><b>Jason Michel</b></sub>
        </a>
    </td></tr>
</table>

[//]: # ( readme: collaborators -end )
