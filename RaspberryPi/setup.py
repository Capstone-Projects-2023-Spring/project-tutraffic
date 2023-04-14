import cv2 as cv
import time
import signal
import socket
import web.socket_api as socket_api
import threading
from ast import literal_eval
from detectCars import detectCars
from imageMethods import cropImage, avgImages
from apscheduler.schedulers.background import BackgroundScheduler
from sendToServer import upload
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

def listening():
    connection = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    connection.bind((socket_api.host, socket_api.PORT))
    is_listening = True
    while is_listening:
        connection.listen()
        client_socket, client_address = connection.accept()
        print("Received connection from: ", client_address)
        data = client_socket.recv(socket_api.BUF_SIZE)
        request_code = data.decode()
        print(request_code)
        is_listening = process_request(client_socket, request_code)
        client_socket.close()
    connection.shutdown(socket.SHUT_RDWR)
    connection.close()

def process_request(client_socket: socket, request_code: int):
    global num
    match request_code:
        case socket_api.Message.REFRESH_IMAGE.value:
            client_socket.send(str(socket_api.Message.TRUE.value).encode())
        case socket_api.Message.REFRESH_IMAGE.value:
            img = getImage()
            cv.imwrite(socket_api.IMAGE_PATH, img)
            client_socket.send(str(socket_api.Message.DONE.value).encode())
        case socket_api.Message.SET_ROI.value:
            data = client_socket.recv(socket_api.BUF_SIZE)
            string = data.decode()
            set_roi(literal_eval(string))
        case socket_api.Message.GET_ROI.value:
            client_socket.send(str(roi).encode())
        case socket_api.Message.SET_MAXPARKINGSPACES.value:
            data = client_socket.recv(socket_api.BUF_SIZE)
            num = data.decode()
            print(num)
        case socket_api.Message.GET_MAXPARKINGSPACES.value:
            client_socket.send(str(num).encode())
    return True

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

    # set up camera and camera scheduler
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

    # Initialize listening thread.
    stop_threads = False
    listening_thread = threading.Thread(target=listening, args=(lambda: stop_threads, ))

    if lotOrStreet == "LOT":
        lotname = input("enter the name of the parking lot: ")
        maxParkingSpaces = int(input("enter the total maximum number of parking spaces. i.e the maximum amount of cars that could fit: "))
        print("starting ")

        listening_thread.start()

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

            sendToServer = maxParkingSpaces - numCarsFound
            print(sendToServer, " num spots avaliable")
            upload('parking/',{'spots': sendToServer}, 'serc')
            # send above number to server

            time.sleep(timeToNextMsg( inital_msg_time))

    elif lotOrStreet == "STREET":
        print("Street code setup goes here")

    # Stop the listening thread.
    stop_threads = True
    listening_thread.join()

    print("program finished!")
    cam.release()
    camSched.shutdown()
    exit(0)