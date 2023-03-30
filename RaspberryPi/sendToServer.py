import os
from detectLines import *
import json
from json import JSONEncoder
import numpy as np
import sys
import random

import firebase_admin
from firebase_admin import db
from firebase_admin import credentials

cred = credentials.Certificate("RaspberryPi/tutraffic-firebase-key.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://tutrafficdatabase-default-rtdb.firebaseio.com'})




# send data # 
def upload(filepath, spots, child):
	try:
		ref = db.reference(filepath)
		spaceRef = ref.child(child)
		spaceRef.update(spots)
		return True
	except Exception as e:
		print(e)
		return False

# class to convert Numpy ndarray into a list for JSON addition
class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)

def convertToJson(array):
	convertData = {"name": 'serc',
		 "spots": array.size / 3,
		 "size": random.randint(3,10)}
	with open("RaspberryPi/serc.json", "w") as outfile:
		json.dump(convertData, outfile)
	return outfile

def main():
	# get num of parking spaces first

	# change second var to data collected from ml model
	upload('parking/',{'spots': 20}, 'bell')


if __name__ == "__main__":
		main()
		


