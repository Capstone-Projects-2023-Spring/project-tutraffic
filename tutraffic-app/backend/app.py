from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "TuTraffic",
        "message": "Hello! New way to find parking",
        "space": 1
    }

    return response_body

@app.route('/data', methods=['POST'])
def receive_data():
    received_data = request.get_json()
    print(received_data)
    response_body = {"message": "Data received successfully"}
    return jsonify(response_body)