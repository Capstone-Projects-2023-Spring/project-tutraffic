import detectCarsStreet
import sendToServer
import displayCarBoxesStreet
from picamera import PiCamera
from picamera.array import PiRGBArray
from libcamera import controls
import cv2 as cv
import numpy as np
import time
from operator import itemgetter
import os
import datetime
from scipy.stats import skew



def detectCarBoxes(image):
    cars = detectCarsStreet.detectCars(image)
    return cars

def convertCords(oriCords):
    newCords = []
    boost = 500
    for list in oriCords:
        temp = []
        temp.append([int(list[0]) - boost,
                     int(list[1]) - boost,
                     int(list[0] + int(list[2])),
                     int(list[1] + int(list[3])),
                     list[2], list[3]])
        newCords.append(temp[0])
    return newCords

def determineAvgLength(carList):
    w = 0
    h = 0
    for i in range(len(carList)):
        w += carList[i][4]
        h += carList[i][5] 
    return [w / len(carList), h / len(carList)]



def captureImage():

    cap = cv.VideoCapture(0)
    cap.set(cv.CAP_PROP_FRAME_WIDTH, 1280)
    cap.set(cv.CAP_PROP_FRAME_HEIGHT, 720)
    
    ay, frame = cap.read()
    grey = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
    hist = cv.calcHist([grey], [0], None, [256], [0, 256])
    imgSkew = skew(hist)

	#adjust over exposed image
    if imgSkew > 9:
        image = adjustBrightness(image, .1)
    elif imgSkew > 7:
        image = adjustBrightness(image, .3)
    elif imgSkew > 5:
        image = adjustBrightness(image, .5)
    elif imgSkew > 1:
        image = adjustBrightness(image, .9)
        

    cv.imwrite('home/tutrafficpi/Desktop/image2.jpg', frame)
    
    #cv.imshow('image', frame)
    #cv.waitKey(0)
    
    return frame

def checkSpots(original, spaces):
    free = 0
    total = len(spaces)
    for spot in spaces:
        for orig in original:

            xO = max(orig[0], spot[0])
            yO = max(orig[1], spot[1])
            xS = min(orig[2], spot[2])
            yS = min(orig[3], spot[3])

            #intersection
            intersectArea = abs(xS - xO) * abs(yS - yO)

            #area of boxes
            boxO = abs((orig[2] - orig[0] + 1)) * abs((orig[3]) - orig[1] + 1)
            boxS = abs(spot[2] - spot[0] + 1) * abs((spot[3]) - spot[1] + 1)

            IoU = intersectArea / float(boxO + boxS - intersectArea)
            #print(IoU)
            if IoU >= 0.5 and IoU <= 1.0:
                print(spot, orig)
                total -= 1
    return total
        

#need to check between cars
#have to deal with edge case of no cars on screen
#also how to check both sides of car without overlapping spaces
def determineSpaces(left, right, imDim, carAvgDim):
    print("all: ",left, right, imDim, "\n")
    free = 0
    spotsL = []
    spotsR = []
    print(len(left))
    if len(left) != 0 or len(right) != 0:
        if len(left) != 0:
            template = left[0]
            spots = []
            temp = 0
            if left[0][0] <= imDim[0] / 2:
                for i in range(int(imDim[0] / carAvgDim[0])):
                    spots.append([int(template[0] + (carAvgDim[0] * temp) + 10),
                                int(template[1]),
                                int(template[2] + (carAvgDim[0] * temp) + 10),
                                int(template[3] )])
                    temp += 1
                print("left list 1")
                print(spots)
                spotsL = spots
                free += checkSpots(left, spots)
            else:
                for i in range(int(imDim[0] / carAvgDim[0])):
                    spots.append([int(template[0] - (carAvgDim[0] * temp) - 10),
                                int(template[1]),
                                int(template[2] - (carAvgDim[0] * temp) - 10),
                                int(template[3] )])
                    temp += 1
                print("left list 2")
                print(spots)
                spotsL = spots
                free += checkSpots(left, spots)

        if len(right) != 0:
            template = right[0]
            spots = []
            temp = 1
            if right[0][0] <= imDim[0] / 2:
                for i in range(int(imDim[0] / carAvgDim[0])):
                    spots.append([int(template[0] + (carAvgDim[0] * temp) + 10),
                                int(template[1]),
                                int(template[2] + (carAvgDim[0] * temp) + 10),
                                int(template[3] )])
                    temp += 1
                print("right list 1")
                print(spots)
                spotsR = spots
                free += checkSpots(right, spots)
            else:
                for i in range(int(imDim[0] / carAvgDim[0])):
                    spots.append([int(template[0] - (carAvgDim[0] * temp) - 10),
                                int(template[1]),
                                int(template[2] - (carAvgDim[0] * temp) - 10),
                                int(template[3] )])
                    temp += 1
                print("right list 2")
                print(spots)
                spotsR = spots
                free += checkSpots(right, spots)
    else:	
        free += (2 * int(imDim[0] / carAvgDim[0]))
        
	#if no cars are parked on one side add the spots for that side of the road
    if left and not right or right and not left:
            free += int(imDim[0] / carAvgDim[0])
            
    return free, spotsL, spotsR


def sortList(carLoc, imgHeight):
    left = []
    right =[]
    if carLoc:
        for i in range(len(carLoc)):
            if carLoc[i][1] >= (imgHeight * .50) :
                right.append(carLoc[i])
            else:
                left.append(carLoc[i])
        left.sort(key = itemgetter(0))
        right.sort(key = itemgetter(0))
    return left, right

def adjustBrightness(img, gam):
	inverGam = 1.0 / gam
	table = np.array([((i / 255.0) ** inverGam) * 255
		for i in np.arange(0, 256)]).astype("uint8")
	return cv.LUT(img, table)

def main():
    go = True
    while go == True:
        image = captureImage()
        #image = cv.imread('RaspberryPi/Overexpose.jpeg')
        carLocations, imgDim = detectCarBoxes(image)
        print(carLocations)
        if carLocations:
            fixedCarLoc = convertCords(carLocations)
            listLeft, listRight = sortList(fixedCarLoc, imgDim[1])
            avgCarLength = determineAvgLength(fixedCarLoc)
        else:
            listLeft = []
            listRight = []
            avgCarLength = [0,0]
        totalSpaces, lGu, rGu = determineSpaces(listLeft, listRight, imgDim, avgCarLength)
        print(totalSpaces)
        
        #displayCarBoxesStreet.detectCars(image)
        sendToServer.upload("parking/", {'spaces': totalSpaces},"warno", {'last updated': datetime.datetime.now()})
    
if __name__ == '__main__':
    main()
