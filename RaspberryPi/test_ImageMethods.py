import imageMethods
import numpy as np
import pytest
import cv2

def is_similar(image1, image2):
    return image1.shape == image2.shape

def is_equal(image1, image2):
    return image1.shape == image2.shape and not(np.bitwise_xor(image1,image2).any())

def test_takePics():
    print("passed")

def test_crop():
    origionalimg = cv2.imread('images/Testimg1donotremove.jpg')
    origionalimgcropped = cv2.imread('images/Testimg2donotremove.jpg')
    notcropped = origionalimg
    assert is_equal(origionalimg, notcropped)
    cropped = imageMethods.cropImage(origionalimg,(90, 111, 436, 327))[0]
    assert not is_equal(origionalimg, cropped)
    assert is_similar(origionalimgcropped, cropped)

def test_avgImgs():
    images = []
    origionalimg = cv2.imread('images/Testimg1donotremove.jpg')
    changedImage = cv2.imread('images/Testimg3donotremove.jpg')
    assert is_similar(origionalimg,changedImage)
    assert not is_equal(origionalimg, changedImage)
    images.append(origionalimg)
    avgOfOne=imageMethods.avgImages(images)
    assert len(images) == 1
    assert is_equal(origionalimg,avgOfOne)
    for i in range(29):
        images.append(origionalimg)
    avgOfThirty = imageMethods.avgImages(images)
    assert len(images) == 30
    assert is_equal(origionalimg, avgOfThirty)
    assert is_equal(avgOfOne, avgOfThirty)
    images.append(changedImage)
    assert len(images) == 31
    avgWithDifference = imageMethods.avgImages(images)
    assert not is_equal(avgWithDifference, origionalimg)


