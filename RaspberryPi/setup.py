import cv2 as cv
import time
from imageMethods import cropImage, avgImages
if __name__ == '__main__':
    numPictures = 10
    timePicDelay = .25
    print("TUTraffic")
    # program to capture single image from webcam in python
    cam_port = 0
    cam = cv.VideoCapture(cam_port)

    # reading the input using the camera
    result, image = cam.read()

    # If image will detected without any error,
    # show result
    if result:

        # showing result, it take frame name and image
        # output
        cv.imshow("First try", image)

        # saving image in local storage
        #cv.imwrite("FirstTry", image)

        # If keyboard interrupt occurs, destroy image
        # window
        cv.waitKey(0)
        cv.destroyWindow("First try")
        

    # If captured image is corrupted, moving to else part
    else:
        print("No image detected. Please! try again")

    imageCheck = input("Is this Image correct? Y/N ")
    while imageCheck == "N":
        result, image = cam.read()
        cv.imshow("next Image try", image)
        cv.waitKey(0)
        imageCheck = input("Is this Image correct? Y/N ")
        cv.destroyWindow("next Image try")
        
    #ask to crop image
    print("Image chosen crop image to include minimum extraneous data")
    image, roiDisplacement = cropImage(image)
    cv.imshow("cropped", image)
    cv.waitKey(0)
    cv.destroyWindow("cropped")

    #show cropped image to confirm correctness
    lotOrStreet =input("Is this a parking lot or street parking? LOT/STREET")
    if lotOrStreet == "LOT":
        maxParkingSpaces = int(input("enter the total maximum number of parking spaces. i.e the maximum amount of cars that could fit"))
        print("starting ")
        while True:
            images = []
            for i in range(numPictures):
                print(i, " image taken")
                result, image = cam.read()
                cropped = cropImage(image,roiDisplacement)[0]
                images.append(cropped)
                time.sleep(timePicDelay)
            averaged = avgImages(images)
            #cv.imshow("cropped", cropped)
            #cv.waitKey(0)
            #cv.destroyWindow("cropped")
            #run ml model and count number of cars
            numCarsFound = int(maxParkingSpaces/2)
            sendToServer = maxParkingSpaces - numCarsFound
            print(sendToServer)
    
    if lotOrStreet == "STREET":
        print("Street code setup goes here")
    #numspots left = max- current amount
    #send that data to server
    print("program finished!")
    cam.release()
    