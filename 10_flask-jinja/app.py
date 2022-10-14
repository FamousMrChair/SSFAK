# GGG Rendition #2: Vivian Graeber, Jeffrey Zou, Kevin Xiao + Squishy, Like, FamousMrTable
# SoftDev
# Oct 2022


from flask import Flask, render_template #Q0: What will happen if you remove render_template from this line? (log your prediction before you pull the trigger...)
# The code probably won't run and return some sort of syntax error, or the program runs but there won't be any material shown on the my_foist_template website
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "No hablo queso!"

coll = [0,1,1,2,3,5,8]

@app.route("/my_foist_template") #Q1: Can all of your teammates confidently predict the URL to use to load this page?
# 127.0.0:5000/my_foist_template (confidence level around 5/10)
def test_tmplt():
    return render_template( 'model_tmplt.html', foo="fooooo", collection=coll) #Q2: What is the significance of each argument? Simplest, most concise answer best.

# Each argument adds another element to the template and is "filling" in the template with unique data, which will be probably be translated into the website.

if __name__ == "__main__":
    app.debug = True
    app.run()
