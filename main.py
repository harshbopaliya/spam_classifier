# main.py

from flask import Flask, request
from lib import model

app = Flask(__name__)

not_valid_res = { "status": False, "message":"Not valid json data" } , 400

@app.route("/")
def home():
    return { "status":True, "message":"Api running..." }, 200

@app.route("/check",methods=["POST"])
def spam_check():
    if request.method == "POST":
        data = request.get_json()
        if not data:
            return not_valid_res
        message = data.get("message")
        if not message:
            return not_valid_res
        result = model(message)
        if result == None:
            return not_valid_res
        if result == 1:
            return {"status":True, "is_spam":True}
        else:
            return {"status":True, "is_spam":False}


if __name__ == "__main__":
    app.run(debug=True)