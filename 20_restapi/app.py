from urllib.request import urlopen
import json

from flask import Flask, render_template, request
from flask import session, redirect, url_for


app = Flask(__name__)    #create Flask object
#FUTURE PLANS MAKE SURE TO CHECK IF FORMS ARE VALID

myfile = open("key_nasa.txt", "rt") # open key_nasa.txt for reading text
key = myfile.read()         # read the entire file to string
myfile.close()                   # close the file

api = "https://api.nasa.gov/planetary/apod?api_key=" + key
@app.route("/")
@app.route("/index")
def index():
    call = urlopen(api)
    data_json = json.loads(call.read())
    url = data_json["url"]
    explanation = data_json["explanation"]
    print (url)
    print (data_json)
    return render_template("main.html", url=url, explanation = explanation)


if __name__ == "__main__":
    app.debug = True
    app.run()