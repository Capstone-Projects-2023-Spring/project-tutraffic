import streetParkingTest
import pytest
import cv2 as cv

def test_detectCarBoxes():
    img = cv.imread('RaspberryPi/images/IMG_2006.jpeg')
    detectedCars = streetParkingTest.detectCarBoxes(img)
    assert len(detectedCars[0]) == 7
    assert len(detectedCars[0][0]) == 4
    
    img2 = streetParkingTest.captureImage()
    detectedCars = streetParkingTest.detectCarBoxes(img2)
    assert len(detectedCars) == 2
    assert len(detectedCars[0]) == 0

   
def test_convertCords():
    newCords = [[100, 100, 300, 300], [200, 450, 600, 800]]
    cvtCords = streetParkingTest.convertCords(newCords)
    assert len(cvtCords[0]) == 6
    assert len(cvtCords) == 2
    
def test_detAvgLen():
    carList = [[100, 100, 400, 400, 300, 300], [200, 450, 800, 1250, 600, 800], [200, 300, 400, 400, 200, 100], [0, 100, 800, 1250, 700, 1150]]
    avgDim = streetParkingTest.determineAvgLength(carList)
    assert len(avgDim) == 2
    assert avgDim[0] == 450 and round(avgDim[1]) == 588
    
    
def test_checkSpot():
    original = [[100,100,200,200]]
    spaces = [[100,100,200,200]]
    numSpaces = 10
    total, find = streetParkingTest.checkSpots(original, spaces, numSpaces)
    assert total == 9

def test_makeSpacesRight():
    template = [100,100,200,200,100,100]
    imDim = [4000, 2000]
    carAvgDim = [100, 50]
    newSpots = streetParkingTest.makeSpacesRight(template, imDim, carAvgDim)
    assert len(newSpots) == 74
    
def test_makeSpacesLeft():
    template = [1500,1000,2000,2000,500,1000]
    imDim = [4000, 2000]
    carAvgDim = [100, 50]
    newSpots = streetParkingTest.makeSpacesLeft(template, imDim, carAvgDim)
    assert len(newSpots) == 29
    
def test_determineSpaces():
    left = [[100,100,200,200,100,100]]
    right = [[2000,2000,2200,2200,200,200]]
    imDim = [4000, 2000]
    carAvgDim = [200, 200]
    total, arr = streetParkingTest.determineSpaces(left, right, imDim, carAvgDim)
    assert total == 8
    
def test_sortList():
    carLoc = [[100,100,200,200,100,100], [1500,1000,2000,2000,500,1000]]
    imHeight = 2000
    left, right = streetParkingTest.sortList(carLoc, imHeight)
    assert len(left) == 1
    assert len(right) == 1
    
def test_adjustBrightness():
    img = 'RaspberryPi/images/IMG_2006.jpeg'
    gam = 0.8
    adjImg = streetParkingTest.adjustBrightness(img, gam)
    assert not adjImg.all() == None
