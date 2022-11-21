

from flask import Flask, render_template, request
from flask import session, redirect, url_for


app = Flask(__name__)    #create Flask object
#FUTURE PLANS MAKE SURE TO CHECK IF FORMS ARE VALID


@app.route("/")
@app.route("/index")
def index():
    return render_template("main.html")