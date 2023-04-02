import cv2 as cv
import time
import signal
from detectCars import detectCars
from imageMethods import cropImage, avgImages
from apscheduler.schedulers.background import BackgroundScheduler

global images
images = []
NUMPICTURES = 30

def timeToNextMsg(timeBetweenMessages, inital_msg_time):
    timeToNextMessage = (timeBetweenMessages - (time.time() - inital_msg_time))
    if timeToNextMessage<0 :
        timeToNextMessage = 0
    print("--- %s seconds till next msg ---" % (timeToNextMessage))
    return timeToNextMessage

def task(*args):
    cam = args[0]
    roi = args[1]
    
    result, image = cam.read()

    if result:
        cropped = cropImage(image, roi)[0]
        images.append(cropped)
        if len(images)> NUMPICTURES:
            del images[0]



if __name__ == '__main__':
    timeBetweenMessages = 20
    print("TUTraffic: Press enter to exit image pop-up, all prompts are case sensitive")

    #set up camera and camera scheduler
    cam_port = 0
    cam = cv.VideoCapture(cam_port)
    camSched = BackgroundScheduler(daemon=True)

    def gracefulExit(signum, frame):
        print('Program halted early')
        if cam.isOpened():
            cam.release()
        if camSched.running:
            camSched.shutdown()
        exit(0)
    
    signal.signal(signal.SIGINT, gracefulExit)

    if not cam.isOpened():
        print("No Camera Found")
        exit()
    

    # reading the input using the camera, result true = succesful
    result, image = cam.read()
    imageCheck = "N"

    if result:

        cv.imshow("First try", image)
        cv.waitKey(0)
        imageCheck = input("Is this Image correct? Y/N ")
        cv.destroyWindow("First try")

    else:
        print("No image detected. Please! try again")

    
    while imageCheck == "N":
        result, image = cam.read()
        cv.imshow("next Image try", image)
        cv.waitKey(0)
        imageCheck = input("Is this Image correct? Y/N ")
        cv.destroyWindow("next Image try")

    # ask to crop image
    print("Image chosen crop image to include minimum extraneous data")
    image, roiDisplacement = cropImage(image)
    
    camSched.add_job(task, 'interval', seconds = 1, args=[cam, roiDisplacement])
    camSched.start()

    lotOrStreet = input(
        "Is this a parking lot or street parking? LOT/STREET: ")

    if lotOrStreet == "LOT":

        maxParkingSpaces = int(input("enter the total maximum number of parking spaces. i.e the maximum amount of cars that could fit: "))
        print("starting ")

        while True:
            while len(images)<NUMPICTURES:
                print(len(images)," images taken, please wait for ", NUMPICTURES, " images")
                time.sleep(1)

            inital_msg_time = time.time()
            averaged = avgImages(images)
            
            #averaged = cv.imread(r"C:\Users\12864\Documents\gitprojs\project-tutraffic\RaspberryPi\Cars-parked-in-parking-lot.jpeg")

            # run ml model and count number of cars
            start_model_time = time.time()
            numCarsFound = detectCars(averaged)
            print("--- %s seconds to detect ---" % (time.time() - start_model_time))

            sendToServer = maxParkingSpaces - numCarsFound
            print(sendToServer, " num spots avaliable")
            # send above number to server

            time.sleep(timeToNextMsg(timeBetweenMessages, inital_msg_time))

    elif lotOrStreet == "STREET":
        print("Street code setup goes here")

    print("program finished!")
    cam.release()
    camSched.shutdown()
    exit(0)