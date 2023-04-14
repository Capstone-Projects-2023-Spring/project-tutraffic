import imageMethods
import numpy as np
import pytest
import cv2
from detectCars import detectCars

def test_detectCars():
    twoCars = cv2.imread('images/Testimg4donotremove.jpg')
    numCarsInImage = detectCars(twoCars)
    assert numCarsInImage == 2
    eightyThreeCars = cv2.imread('images/Testimg6donotremove.jpg')
    numCarsInImage = detectCars(eightyThreeCars)
    print(numCarsInImage)
    assert numCarsInImage > 48 
    assert numCarsInImage < 52

def test_detectNoCars():
    noCars = cv2.imread('images/Testimg2donotremove.jpg')
    numCarsInImage = detectCars(noCars)
    assert numCarsInImage == 0