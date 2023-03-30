import cv2 as cv
import time
from detectCars import detectCars
from imageMethods import cropImage, avgImages
if __name__ == '__main__':
    numPictures = 40
    timePicDelay = .1
    timeBetweenMessages = 20
    print("TUTraffic: Press enter to exit image pop-up, all prompts are case sensitive")
    # program to capture single image from webcam in python
    cam_port = 0
    cam = cv.VideoCapture(cam_port)

    # reading the input using the camera, result true = succesful
    result, image = cam.read()

    if result:

        cv.imshow("First try", image)

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

    # ask to crop image
    print("Image chosen crop image to include minimum extraneous data")
    image, roiDisplacement = cropImage(image)

    lotOrStreet = input(
        "Is this a parking lot or street parking? LOT/STREET: ")

    if lotOrStreet == "LOT":

        maxParkingSpaces = int(input(
            "enter the total maximum number of parking spaces. i.e the maximum amount of cars that could fit: "))
        print("starting ")

        while True:
            inital_msg_time = time.time()
            images = []
            for i in range(numPictures):
                result, image = cam.read()
                cropped = cropImage(image, roiDisplacement)[0]
                images.append(cropped)
                time.sleep(timePicDelay)

            averaged = avgImages(images)
            # averaged = cv.imread(r"C:\Users\12864\Documents\gitprojs\project-tutraffic\RaspberryPi\Cars-parked-in-parking-lot.jpeg")

            # run ml model and count number of cars
            start_model_time = time.time()
            numCarsFound = detectCars(averaged)
            print("--- %s seconds to detect ---" %
                  (time.time() - start_model_time))
            sendToServer = maxParkingSpaces - numCarsFound
            # send above number to server

            print(sendToServer, " num spots avaliable")
            print("--- %s seconds till next msg ---" %
                  (timeBetweenMessages - (time.time() - inital_msg_time)))
            time.sleep(timeBetweenMessages - (time.time() - inital_msg_time))

    if lotOrStreet == "STREET":
        print("Street code setup goes here")

    print("program finished!")
    cam.release()
