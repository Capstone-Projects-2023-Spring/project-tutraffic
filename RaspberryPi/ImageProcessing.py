import cv2 as cv
import numpy as np
import os

def cropImage(Image):
    if(Image.size !=0):
        r = cv.selectROI(Image)
        #crop image
        cropped = Image[int(r[1]):int(r[1]+r[3]), int(r[0]):int(r[0]+r[2])]
        return cropped
    
def preprocess(Image):
    if(Image.size !=0):
        grey  = cv.cvtColor(Image, cv.COLOR_BGR2GRAY)
        blur = cv.GaussianBlur(grey,(5,5),0)
        dilated = cv.dilate(blur,np.ones((3,3)))
        kernel = cv.getStructuringElement(cv.MORPH_ELLIPSE, (2, 2))
        closing = cv.morphologyEx(dilated, cv.MORPH_CLOSE, kernel) 
        return closing

