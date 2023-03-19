from PIL import Image
import cv2 as cv
import numpy as np
from ImageProcessing import preprocess, cropImage

def detectCars(image):
    car_cascade_src = 'cars.xml'
    car_cascade = cv.CascadeClassifier(car_cascade_src)
    cars = car_cascade.detectMultiScale(image, 1.1, 1)
    return cars

if __name__ == '__main__' :
    im = cv .imread("ImageTests\parking-in-philadelphia.jpg")
    #cropped = cropImage(im)
    processed = preprocess(im)
    cars = detectCars(processed)
    cnt = 0
    imageArray = np.array(im)
    for (x,y,w,h) in cars:
        cv.rectangle(imageArray,(x,y),(x+w,y+h),(255,0,0),2)
        cnt += 1
    print(cnt, " cars found")
    Image.fromarray(imageArray).show()
    
