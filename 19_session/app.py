from flask import Flask, render_template, request
from flask import session, redirect, url_for
from markupsafe import escape


app = Flask(__name__)    #create Flask object


@app.route("/", methods = ['GET', 'POST'])
def disp_loginpage():
    print(session)
    if 'username' in session:
        return render_template('response.html', username1= session['username'])
    return redirect(url_for('authenticate'))


@app.route("/auth", methods = ['GET', 'POST'])
def authenticate():
    if 'username' in session:
        return redirect(url_for('disp_loginpage'))
    if request.method == 'POST':
        if (request.form['username'] == 'GIRLBOSS' and request.form['password'] == 'slay'):
            session['username'] = request.form['username']
            return redirect(url_for('disp_loginpage'))  #response to a form submission
        else:
            return render_template('login.html', result = "username or password is incorrect")
    return render_template('login.html')

app.secret_key = 'girlboss'

@app.route("/logout", methods = ['GET', 'POST'])
def logout():
    if 'username' in session:
        session.pop('username', None)
        return redirect(url_for('authenticate'))
    else: 
        return redirect(url_for('disp_loginpage'))


if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
