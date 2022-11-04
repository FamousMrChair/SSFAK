from flask import Flask, render_template, request
from flask import session, redirect
from markupsafe import escape


app = Flask(__name__)    #create Flask object


@app.route("/", methods = ['GET', 'POST'])
def disp_loginpage():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    #print("***DIAG: request.args['username']  ***")
    #print(request.args['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)
    return render_template( 'login.html', result = '' )


@app.route("/auth", methods = ['GET', 'POST'])
def authenticate():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    #print("***DIAG: request.args['username']  ***")
    #print(request.args['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)
    if (request.form['username'] == 'GIRLBOSS' and request.form['password'] == 'slay'):
        return render_template('response.html', username= request.form["username"])  #response to a form submission
    else:
        return render_template('login.html', result = "username or password is incorrect")

app.secret_key = b'wadsdadwawdswa'

@app.route("/", methods = ['GET', 'POST'])
def logout():
    if 'username' in session:
        return 'Logged in as %s' %  escape(session['username'])
    return 'You are not logged in'


if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
