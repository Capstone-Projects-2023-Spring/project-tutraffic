from picamera import PiCamera
from picamera.array import PiRGBArray
from libcamera import controls
import cv2 as cv
import numpy as np
from scipy.stats import skew
import time
import sys

def adjustBrightness(img, gam):
	inverGam = 1.0 / gam
	table = np.array([((i / 255.0) ** inverGam) * 255
		for i in np.arange(0, 256)]).astype("uint8")
	return cv.LUT(img, table)

def main(delay):
    
    while(True):
        cap = cv.VideoCapture(0)
        cap.set(cv.CAP_PROP_FRAME_WIDTH, 1280)
        cap.set(cv.CAP_PROP_FRAME_HEIGHT, 720)
        
        frame = cap.read()
        
        #check for overexposure
        grey = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
        hist = cv.calcHist([grey], [0], None, [256], [0, 256])
        imgSkew = skew(hist)
        
        if imgSkew >= 10:
            image = adjustBrightness(image, .3)


        cv.imshow("Setup Image", image)
        cv.waitKey(0)
        time.sleep(delay)


if __name__ == "__main__":
   main(sys.argv[1])