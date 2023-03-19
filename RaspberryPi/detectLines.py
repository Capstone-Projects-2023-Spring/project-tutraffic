import cv2
import numpy as np


def detectLines(args):
	pics = ['RaspberryPi/2012-09-12_13_30_12.jpg',
			'RaspberryPi/Cars-parked-in-parking-lot.jpeg',
			'RaspberryPi/2013-02-22_06_05_00.jpg',
			'RaspberryPi/plot.jpg',
			'RaspberryPi/2013-03-01_17_53_00.jpg',
			'RaspberryPi/parking.jpg']
	img = cv2.imread(pics[int(args)])


	greyImg = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
	blurImg = cv2.GaussianBlur(greyImg,(5, 5),0)

	detectEdges = cv2.Canny(blurImg, 50, 200, None, 3)

	rho = 1 
	theta = np.pi / 240  
	threshold = 15  # minimum number of votes (intersections in Hough grid cell)
	min_line_length = 30  # minimum number of pixels making up a line
	max_line_gap = 5  # maximum gap in pixels between connectable line segments
	line_image = np.copy(img) * 0  


	cdst = cv2.cvtColor(detectEdges, cv2.COLOR_GRAY2BGR)
	cdstP = np.copy(cdst)

	lines = cv2.HoughLinesP(detectEdges, rho, theta, threshold, np.array([]),
						min_line_length, max_line_gap)

	for line in lines:
		for x1,y1,x2,y2 in line:
			cv2.line(line_image,(x1,y1),(x2,y2),(0,0,255),5)
		
	lines_edges = cv2.addWeighted(img, 0.8, line_image, 1, 0)

	# for testing to see lines overlayed on original image
	#cv2.imshow('final', lines_edges)
	#cv2.waitKey(0)

	return lines

if __name__ == '__main__':
	detectLines()