import pytest
import sys
import cv2 as cv
import numpy as np
# setting path
sys.path.append('../RaspberryPi')
from ImageProcessing import blur

def blur():
    im = cv.imread("ImageTests\parking-in-philadelphia.jpg")
    blurredbefore = cv.imread("ImageTests\blur.jpg")
    blurredNow = blur(im)
    assert(blurredNow.shape == blurredbefore.shape and not(np.bitwise_xor(blurredbefore,blurredNow).any()))
   
