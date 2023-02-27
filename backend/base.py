from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "project": "TuTraffic",
        "about" :"Hello! New way to find parking"
    }

    return response_body