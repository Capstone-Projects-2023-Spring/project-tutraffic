import detectCarsStreet
import sendToServer
import displayCarBoxesStreet
import cv2 as cv
import numpy as np
from operator import itemgetter
from scipy.stats import skew



def detectCarBoxes(image):
    cars = detectCarsStreet.detectCars(image)
    return cars

def convertCords(oriCords):
    newCords = []
    boost = 0
    for list in oriCords:
        temp = []
        temp.append([int(list[0]) + boost,
                     int(list[1]) + boost,
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
        frame = adjustBrightness(frame, .1)
    elif imgSkew > 7:
        frame = adjustBrightness(frame, .3)
    elif imgSkew > 5:
        frame = adjustBrightness(frame, .5)
    elif imgSkew > 1:
        frame = adjustBrightness(frame, .9)


    cv.imwrite('home/tutrafficpi/Desktop/image2.jpg', frame)
    
    #cv.imshow('image', frame)
    #cv.waitKey(0)
    
    return frame

def checkSpots(original, spaces, numSpaces):
    free = 0
    total = numSpaces
    print("total:   ", len(original))
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
            if IoU >= 0.8 and IoU <= 1.0:
                print('detect ',spot, orig)
                total -= 1
    return total

def joinLists(one, two):
    in_one = set(one)
    in_two = set(two)
    noDupeTwo = in_two - in_one
    full = one + list(noDupeTwo)
    return full

def makeSpacesRight(template, imDim, carAvgDim):
    temp = 0.0
    spots = []
    bar = [[0]]
    while bar[-1][0] <= imDim[0]:
        bar = ([[int(template[0] + (carAvgDim[0] * temp)),
                    int(template[1]),
                    int(template[2] + (carAvgDim[0] * temp)),
                    int(template[3] )]])
        spots.append(bar[0])
        temp += 0.5
    print("spots right:   ", spots)
    return spots

def makeSpacesLeft(template,imDim, carAvgDim):
    temp = 0.0    
    spots = []
    bar = [[imDim[0]]]
    while bar[-1][0] >= 0:
        bar = ([[int(template[0] - (carAvgDim[0] * temp)),
                    int(template[1]),
                    int(template[2] - (carAvgDim[0] * temp)),
                    int(template[3] )]])
        spots.append(bar[0])
        temp += 0.5
    print("spots left:   ", spots)
    return spots

def determineSpaces(left, right, imDim, carAvgDim):
    print("all: ",left, right, imDim, "\n")
    free = 0
    numSpaces = int(imDim[0] / carAvgDim[0])
    if len(left) != 0 or len(right) != 0:
        if len(left) != 0:
            #first car is not on the edge of screen
            if left[0][0] >= carAvgDim[0] and left[0][0] <= imDim[0] - carAvgDim[0]:
                spotsL = makeSpacesLeft(left[0], imDim, carAvgDim)
                spotsR = makeSpacesRight(left[0], imDim, carAvgDim)
                free += checkSpots(left, spotsL + spotsR, numSpaces)

            #fist car is on left or right edge
            else:
                #left edge
                if left[0][0] <= imDim[0] / 2:
                    spots = makeSpacesRight(left[0], imDim, carAvgDim)
                    free += checkSpots(left, spots, numSpaces)
                #right edge
                else:
                    spots = makeSpacesLeft(left[0], imDim, carAvgDim)
                    free += checkSpots(left, spots, numSpaces)
			
        if len(right) != 0:
            #first car is not on the edge of screen
            if right[0][0] >= carAvgDim[0] and right[0][0] <= imDim[0] - carAvgDim[0]:
                spotsL = makeSpacesLeft(right[0], imDim, carAvgDim)
                spotsR = makeSpacesRight(right[0], imDim, carAvgDim)
                free += checkSpots(right, spotsL + spotsR, numSpaces)
            else:
                if right[0][0] <= imDim[0] / 2:
                    spots = makeSpacesRight(right[0], imDim, carAvgDim)
                    free += checkSpots(right, spots, numSpaces)
                else:
                    spots = makeSpacesLeft(right[0], imDim, carAvgDim)
                    free += checkSpots(left, spots, numSpaces)
    else:	
        free += (2 * int(imDim[0] / 500))
        
	#if no cars are parked on one side add the spots for that side of the road
    if left and not right or right and not left:
            free += int(imDim[0] / 500)
            
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
        #image = captureImage()

        image = cv.imread('RaspberryPi/images/IMG_2006.jpeg')

        carLocations, imgDim = detectCarBoxes(image)
        if carLocations:
            fixedCarLoc = convertCords(carLocations)
            listLeft, listRight = sortList(fixedCarLoc, imgDim[1])
            avgCarLength = determineAvgLength(fixedCarLoc)
            print(avgCarLength, 'carssss')
        else:
            listLeft = []
            listRight = []
            avgCarLength = [0,0]
        totalSpaces, lGu, rGu = determineSpaces(listLeft, listRight, imgDim, avgCarLength)
        print(totalSpaces)
        displayCarBoxesStreet.detectCars(image)
        #sendToServer.upload("parking/", {'spaces': totalSpaces},"warno", {'last updated': datetime.datetime.now()})
        go = False
if __name__ == '__main__':
    main()
