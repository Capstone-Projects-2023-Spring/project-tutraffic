import cv2 as cv
import numpy as np
 
if __name__ == '__main__' :
 
    # Read image
    im = cv.imread("ImageTests\parking-in-philadelphia.jpg")
 
    # Select ROI
    r = cv.selectROI(im)
 
    # Crop image
    imCrop = im[int(r[1]):int(r[1]+r[3]), int(r[0]):int(r[0]+r[2])]
    # change colors to grey
    grey  = cv.cvtColor(imCrop, cv.COLOR_BGR2GRAY)
    # gaussian blur the image
    blur = cv.GaussianBlur(grey,(5,5),0)
    # Display cropped image
    cv.imshow("Image", blur)
    cv.waitKey(0)

def cropImage(Image):
    if(Image.size !=0):
        r = cv.selectROI(Image)
        #crop image
        cropped = im[int(r[1]):int(r[1]+r[3]), int(r[0]):int(r[0]+r[2])]
        return cropped
    
def preprocess(Image):
    if(Image.size !=0):
        grey  = cv.cvtColor(imCrop, cv.COLOR_BGR2GRAY)
        blur = cv.GaussianBlur(grey,(5,5),0)
        return blur
