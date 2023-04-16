import cv2 as cv
import time
import signal
from detectCars import detectCars
from imageMethods import cropImage, avgImages
from apscheduler.schedulers.background import BackgroundScheduler
from sendToServer import upload
import streetParking
import datetime
import displayCarBoxesStreet
global images
global roi
images = []
NUMPICTURES = 30
TIMEBETWEENMESSAGES = 20
CAMPORT = 0
roi = None
cam = None
camSched = None
result = False
maxParkingSpaces = None

def gracefulExit(signum, frame):
    print('Program halted early')
    if cam is not None and cam.isOpened():
        cam.release()
    if camSched is not None and camSched.running:
        camSched.shutdown()
    exit(0)

def getImage():
    length = len(images)
    if length > 0 and images[length] is not None:
        return True, images[length]
    else:
        return False, None
    
def get_roi():
    if roi is not None:
        return roi
    else:
        return (0,0,0,0)

def set_roi(rect):
    if rect is not None:
        roi = rect
        return True
    else:
        return False

def is_camera_connected():
    if cam is not None:
        return True
    else:
        return False

def set_maxparkingspaces(number_of_spaces):
    maxParkingSpaces = number_of_spaces

def get_maxparkingspaces():
    return maxParkingSpaces

def timeToNextMsg(inital_msg_time):
    timeToNextMessage = (TIMEBETWEENMESSAGES - (time.time() - inital_msg_time))
    if timeToNextMessage<0 :
        timeToNextMessage = 0
    print("--- %s seconds till next msg ---" % (timeToNextMessage))
    return timeToNextMessage

def imageTakingTask(*args):
    cam = args[0]
    roi = args[1]
    
    result, image = cam.read()

    if result:
        cropped = cropImage(image, roi)[0]
        images.append(cropped)
        if len(images)> NUMPICTURES:
            del images[0]



if __name__ == '__main__':
    signal.signal(signal.SIGINT, gracefulExit)
    print("TUTraffic: Press enter to exit image pop-up, all prompts are case sensitive")

    #set up camera and camera scheduler
    
    cam = cv.VideoCapture(CAMPORT)

    if not is_camera_connected():
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
    image, roi = cropImage(image)
    print('roi = ', roi)
    
    camSched = BackgroundScheduler(daemon=True)
    camSched.add_job(imageTakingTask, 'interval', seconds = 1, args=[cam, roi])
    camSched.start()

    lotOrStreet = input(
        "Is this a parking lot or street parking? LOT/STREET: ")

    if lotOrStreet == "LOT":
        lotname = input("enter the name of the parking lot: ")
        maxParkingSpaces = int(input("enter the total maximum number of parking spaces. i.e the maximum amount of cars that could fit: "))
        print("starting ")

        while True:
            while len(images)<NUMPICTURES:
                print(len(images)," images taken, please wait for ", NUMPICTURES, " images")
                time.sleep(1)

            inital_msg_time = time.time()
            averaged = avgImages(images)
            
            #averaged = cv.imread(r"C:\Users\12864\Documents\gitprojs\project-tutraffic\RaspberryPi\IMG_1994.jpg")

            # run ml model and count number of cars
            start_model_time = time.time()
            numCarsFound = detectCars(averaged)
            print("--- %s seconds to detect ---" % (time.time() - start_model_time))
            displayCarBoxesStreet.detectCars(averaged)
            sendToServer = maxParkingSpaces - numCarsFound
            print(sendToServer, " num spots avaliable")
            #upload('parking/',{'spots': sendToServer}, 'serc', {'checked': datetime.datetime.now()})
            # send above number to server

            time.sleep(timeToNextMsg( inital_msg_time))

    elif lotOrStreet == "STREET":
        streetName = input("enter the name of the parking lot: ")
        print("starting ")
        
        while True:
            while len(images)<NUMPICTURES:
                print(len(images)," images taken, please wait for ", NUMPICTURES, " images")
                time.sleep(1)

            inital_msg_time = time.time()
            averaged = avgImages(images)
            
            #averaged = cv.imread(r"C:\Users\12864\Documents\gitprojs\project-tutraffic\RaspberryPi\IMG_1994.jpg")
            #averaged = cv.imread('RaspberryPi/images/IMG_1411.jpeg')


            start_model_time = time.time()
            print("--- %s seconds to detect ---" % (time.time() - start_model_time))

            carLocations, imgDim = streetParking.detectCarBoxes(averaged)
            if carLocations:
                fixedCarLoc = streetParking.convertCords(carLocations)
                listLeft, listRight = streetParking.sortList(fixedCarLoc, imgDim[1])
                avgCarLength = streetParking.determineAvgLength(fixedCarLoc)
            else:
                listLeft = []
                listRight = []
                avgCarLength = [0,0]
            totalSpaces, lGu, rGu = streetParking.determineSpaces(listLeft, listRight, imgDim, avgCarLength)

            sendToServer = totalSpaces
            print(sendToServer, " num spots avaliable")
            displayCarBoxesStreet.detectCars(averaged)
            #upload('parking/',{'spots': sendToServer}, 'serc', {'checked': datetime.datetime.now()})
            # send above number to server

            time.sleep(timeToNextMsg( inital_msg_time))

    print("program finished!")
    cam.release()
    camSched.shutdown()
    exit(0)
