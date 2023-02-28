from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "TuTraffic",
        "about": "Hello! New way to find parking"
    }

    return response_body