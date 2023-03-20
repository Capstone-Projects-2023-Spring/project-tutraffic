import os
from google.cloud import storage
from detectLines import *
import json
from json import JSONEncoder
import numpy as np
import sys
import random
from detectLines import detectLines

# permission to access GCS bucket
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'RaspberryPi/tutraffic1-92e09f8e1af7.json'
storage_client = storage.Client()

# send data # 
def upload(blob_name, file_path, bucket_name):
	try:
		bucket = storage_client.get_bucket(bucket_name)
		blob = bucket.blob(blob_name)
		blob.upload_from_filename(file_path)
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
	linesArray = detectLines(sys.argv[1])
	toSend = convertToJson(linesArray)
	print(toSend)
	upload('serc.json',os.path.abspath(toSend.name),'parking-test-bucket')


if __name__ == "__main__":
		main()
