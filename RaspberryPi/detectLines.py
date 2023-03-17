import cv2
import numpy as np
import matplotlib
from matplotlib.pyplot import imshow
from matplotlib import pyplot as plt

pics = ['RaspberryPi/2012-09-12_13_30_12.jpg',
        'RaspberryPi/Cars-parked-in-parking-lot.jpeg',
        'RaspberryPi/2013-02-22_06_05_00.jpg',
        'RaspberryPi/plot.jpg',
        'RaspberryPi/2013-03-01_17_53_00.jpg',
        'RaspberryPi/parking.jpg']
img = cv2.imread(pics[2])

#blur and grey image
greyImg = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
blurImg = cv2.GaussianBlur(greyImg,(5, 5),0)

detectEdges = cv2.Canny(blurImg, 50, 150)

rho = 1  # distance resolution in pixels of the Hough grid
theta = np.pi / 240   # angular resolution in radians of the Hough grid
threshold = 20  # minimum number of votes (intersections in Hough grid cell)
min_line_length = 40  # minimum number of pixels making up a line
max_line_gap = 5  # maximum gap in pixels between connectable line segments
line_image = np.copy(img) * 0  # creating a blank to draw lines on

# Run Hough on edge detected image
# Output "lines" is an array containing endpoints of detected line segments
lines = cv2.HoughLinesP(detectEdges, rho, theta, threshold, np.array([]),
                    min_line_length, max_line_gap)

for line in lines:
    for x1,y1,x2,y2 in line:
    	cv2.line(line_image,(x1,y1),(x2,y2),(0,0,255),5)
    
lines_edges = cv2.addWeighted(img, 0.8, line_image, 1, 0)


cv2.imshow('final', lines_edges)
cv2.waitKey(0)