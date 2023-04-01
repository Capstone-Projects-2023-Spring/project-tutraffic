import detectCarsStreet
import sendToServer
import refactoredDetectCars
#from picamera import PiCamera
import cv2 as cv
import numpy as np
import time
from operator import itemgetter


def detectCarBoxes(image):
    cars = detectCarsStreet.detectCars(image)
    return cars

def determineDistance(carLocations):
    pass

def determineCarLength(carArray):
    pass
                       

def captureImage():
    camera = PiCamera()
    time.sleep(3)
    camera.capture('home/pi/Pictures/img.jpg')
    imagePath = 'home/pi/Pictures/img.jpg'
    
    return imagePath

def checkSpots(original, spaces):
    free = 0
    for spot in spaces:
        for orig in original:
            xO = max(orig[0], spot[0])
            yO = max(orig[1], spot[1])
            xS = min(orig[0] + orig[2], spot[0] + spot[2])
            yS = min(orig[1] + orig[3], spot[0] + spot[3])

            #intersection
            intersectArea = (xS - xO) * (yS - yO)

            #area of boxes
            boxO = ((orig[0] + orig[2] - orig[0] + 1)) * ((orig[1] + orig[3]) - orig[1] + 1)
            boxS = ((spot[0] + spot[2] - spot[0] + 1)) * ((spot[1] + spot[3]) - spot[1] + 1)

            IoU = intersectArea / float(boxO + boxS - intersectArea)
            #print(IoU)
            if abs(IoU) >= 0.5:
                free += 1
    return free
        



#need to check between cars
#have to deal with edge case of no cars on screen
def determineSpaces(left, right, imDim):
    print(left, right, imDim, "\n")
    free = 0
    if left:
        template = left[0]
        spots = []
        temp = 1
        for i in range(int(imDim[0] / 1000)):
            spots.append([template[0] + (template[2] * temp),
                          template[1], template[2], template[3]])
            temp += 1
        #print("left list")
        #print(spots)
        free += checkSpots(left, spots)

        if right:
            template = right[0]
            spots = []
            temp = 1
            for i in range(int(imDim[0] / 1000)):
                spots.append([template[0] + (template[2] * temp),
                            template[1], template[2], template[3]])
                temp += 1
            #print("right list ")
            #print(spots)
            free += checkSpots(right, spots)
    else:	
        pass
        #come up with a way to find spaces without other cars present
        # maybe use avg car length and dimensions of pic
                 
    return free


def sortList(carLoc, imgWidth):
    left = []
    right =[]
    for i in range(len(carLoc)):
        if carLoc[i][1] >= (imgWidth / 3) * 1.5:
            right.append(carLoc[i])
        else:
            left.append(carLoc[i])
    left.sort(key = itemgetter(0))
    right.sort(key = itemgetter(0))
    return left, right

def main():
    
    #image = captureImage()
    carLocations, imgDim = detectCarBoxes('RaspberryPi/images/IMG_1409.jpeg')
    listLeft, listRight = sortList(carLocations, imgDim[0])
    avgCarLength = determineCarLength(carLocations)
    totalSpaces = determineSpaces(listLeft, listRight, imgDim)
    print(totalSpaces)
    #spaces = determineDistance(carLocations, avgCarLength)
    
    #refactoredDetectCars.detectCars('RaspberryPi/images/loganpic1.jpg')
    #sendToServer.upload("parking/", totalSpaces,"bell")
    
if __name__ == '__main__':
    main()