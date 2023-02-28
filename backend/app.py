from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/profile')
def my_profile():
    response_body = {
        "project": "TuTraffic",
        "about": "Hello! New way to find parking"
    }
    response = jsonify(response_body)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response