import cv2
import numpy as np
import time

def cropImage(Image, ROI = None):
    if ROI == None:
        ROI = cv2.selectROI(Image)
        cv2.destroyAllWindows()
    cropped = Image[int(ROI[1]):int(ROI[1]+ROI[3]), int(ROI[0]):int(ROI[0]+ROI[2])]
    return cropped, ROI

def avgImages(Images):
    image_data = []

    for img in Images:  
        image_data.append(img)

    avg_image = image_data[0]

    for i in range(len(image_data)):
        if i == 0:
            pass
        else:
            alpha = 1.0/(i + 1)
            beta = 1.0 - alpha
            avg_image = cv2.addWeighted(image_data[i], alpha, avg_image, beta, 0.0)
    #cv2.imshow("avg", avg_image)
    #cv2.waitKey(0)
    #cv2.destroyWindow("avg")
    return avg_image

def takePictures(cam, roi, numPictures, delayInSeconds):
    images = []
    for i in range(numPictures):
        result, image = cam.read()
        if result:
            cropped = cropImage(image, roi)[0]
            images.append(cropped)
            time.sleep(delayInSeconds)
    return images
