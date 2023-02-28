from flask import Flask

app = Flask(__name__)

@app.route('/profile')
def my_profile():
    response_body = {
        "project": "TuTraffic",
        "about" :"Hello! New way to find parking"
    }

    return response_body