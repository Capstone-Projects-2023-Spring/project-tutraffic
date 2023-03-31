import detectCarsStreet
import sendToServer
import refactoredDetectCars
#from picamera import PiCamera
import cv2 as cv
import numpy as np
import time


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
    for spot in spaces:
        pass



#need to check between cars
#have to deal with edge case of no cars on screen
def determineSpaces(left, right, imDim):
    print(left, right)
    free = 0
    if left:
        template = left[0]
        spots = []
        temp = 1
        for i in range(imDim / template[2]):
            spots.append[[template[0] + (template[0] * temp),
                          template[1] + (template[1] * temp),
                           template[2], template[3]]]
            temp += 1

        free += checkSpots(left, spots)

    elif right:
        template = right[0]
        spots = []
        temp = 1
        for i in range(imDim / template[2]):
            spots.append[[template[0] + (template[0] * temp),
                          template[1] + (template[1] * temp),
                           template[2], template[3]]]
            temp += 1

        free += checkSpots(right, spots)
    else:	
        pass
        #come up with a way to find spaces without other cars present
        # maybe use avg car length and dimensions of pic
                 
    return free


#add sort by x or y pos
def sortList(carLoc, imgWidth):
    left = []
    right =[]
    for i in range(len(carLoc)):
        if carLoc[i][0] >= imgWidth / 2:
            right.append(carLoc[i])
        else:
            left.append(carLoc[i])

    return left, right

def main():
    
    #image = captureImage()
    carLocations, imgDim = detectCarBoxes('RaspberryPi/images/loganpic1.jpg')
    print(imgDim)
    listLeft, listRight = sortList(carLocations, imgDim[1])
    print(listLeft)
    print('fierbferwoaihbfweiufbweifb')
    print(listRight)
    avgCarLength = determineCarLength(carLocations)
    totalSpaces = determineSpaces(listLeft, listRight, imgDim)
    #spaces = determineDistance(carLocations, avgCarLength)
    
    #refactoredDetectCars.detectCars('RaspberryPi/images/loganpic1.jpg')
    #sendToServer.upload("parking/", totalSpaces,"bell")
    
if __name__ == '__main__':
    main()