import os
from google.cloud import storage
import json
import random

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'RaspberryPi/tutraffic1-92e09f8e1af7.json'
storage_client = storage.Client()

# Create new bucket #
#bucket = storage_client.bucket("test_bucket_bdiaw7ad")
#bucket.location = "US"
#buk = storage_client.create_bucket(bucket)

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
	

def genDataFile():
	dict = {}
	
	for i in range(20):
		dict["street_" + str(i)] = random.randint(0,30)
	
	with open("RaspberryPi/spacesFree.json", "w") as outfile:
		json.dump(dict, outfile)
	
	return outfile


def main():
	sampJson = genDataFile()
	upload('testConnection',os.path.abspath(sampJson.name),'parking-test-bucket')


if __name__ == "__main__":
		main()
