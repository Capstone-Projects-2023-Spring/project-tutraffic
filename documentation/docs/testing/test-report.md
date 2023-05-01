# Test Report

## Overview
This document contains information parsed from the testing workflows for the latest merged pull requests to the main branch.

## Frontend Test Results
| Tool | Version |
|---|---
| Node | v18.16.0
| React | v18.2.0

| File | Tests | Passing | Failed | Duration (s)
|---|--:|--:|--:|---:
| App.test.js  | 1 | 1 | 0 | 23.048
| Total | 1 | 1 | 0 | 23.048

| File | Test | Passed | Duration (s)
|---|---|:-:|--:
| App.test.js | Renders tutraffic app. | ✓ | 0.090

## Raspberry Pi Test Results

| Tool | Version |
|---|---
| Python | 3.10.11
| Pytest | 7.2.2

| File | Tests | Passing | Failed | Duration (s)
|---|--:|--:|--:|---:
| test_ImageMethods.py | 3 | 3 | 0 |
| test_ImageMethods.py | 7 | 7 | 0 |
| test_streetParking.py
| Total | 10 | 10 | 0 | 2.35

| File | Test | Passed
|---|---|:-:|
| test_ImageMethods.py | test_takePics | ✓
|| test_crop | ✓
|| test_avgImgs | ✓
| test_streetParking.py | test_convertCords | ✓
|| test_detAvgLen | ✓
|| test_checkSpot | ✓
|| test_makeSpacesRight | ✓
|| test_makeSpacesLeft | ✓
|| test_determineSpaces | ✓
|| test_sortList | ✓

## Integration Test Result

| Tool | Version |
|---|---
| Cypress | 12.11.0
| Node | v18.16.0
| Browser | Chrome 112 (headless)
                                                                                                    
| File | Tests | Passing | Failed | Duration (s)
|---|--:|--:|--:|---:
| add_favorite_parking.spec.cy.js  | 1 | 1 | 0 | 15
| find_parking_nearest.spec.cy.js   | 1 | 1 | 0 | 8
| find_parking_nearest_with_filters.spec.cy.js | 5 | 4 | 1 | 46
| show_parking_notification.spec.cy.js  | 4 | 4 | 0 | 25
| total | 11 | 10 | 1 | 95

| File | Test | Passed | Duration (s)
|---|:--|:-:|--:
| add_favorite_parking.spec.cy.js | Logs in to the test user, adds a favorite parking spot, then views it.| ✓ | 10.873
|find_parking_nearest.spec.cy.js | Searches Google Maps for a parking lot. | ✓ | 3.934
|find_parking_nearest_with_filters.spec.cy.js | Logs in to the user, sets lot type to street, then finds only street parking | ✓ | 11.100
|| Logs in to the user, sets lot type to lot, then finds only parking lots.. | ✓ | 6.153
|| Logs in to the user, sets price to free, then finds free parking. | ✓ | 5.999
|| Logs in to the user, sets filters to free parking lots, then finds a free parking lot. | ✓ | 6.741
|| Logs in to the user, sets filters to free street parking, and finds free street parking. | ✖ | 6.375
|show_parking_notification.spec.cy.js| Is supported by the test browser. | ✓ | 1.241
|| Asks for permission. | ✓ | 2.742
|| Shows notifications when granted permission. | ✓ | 9.719
|| Does not show notifications when denied permission. | ✓ | 8.044

### Failing Tests

| File | Test | Duration (s) | Note
|---|---|---|---
| find_parking_nearest_with_filters.spec.cy.js | Logs in to the user, sets filters to free street parking, and finds free street parking. | 6.375 | The assertion for this test is flaky. One of 3 results occurs during repeated automated trials: 1. Free street parking does not appear. 2. Free street parking appears within the timeout period. 3. Free street parking appears after the timeout period.