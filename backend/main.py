
from flask import Flask, request, jsonify, make_response, request, render_template, session, flash
import jwt
from datetime import datetime, timedelta
from functools import wraps


app = Flask(__name__)


app.config['SECRET_KEY'] = 'YOU_SECRET_KEY'
# how to get a secret key
# In your command line >>> access Python >>> then type:


@app.route('/')
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return 'logged in currently'


@app.route('/public')
def public():
    return 'For Public'

# auth only if you copy your token and paste it after /auth?query=XXXXXYour TokenXXXXX
# Hit enter and you will get the message below.


@app.route('/login', methods=['POST'])
def login():
    return 'hello'


# Homework: You can try to create a logout page


@app.route('/logout', methods=['POST'])
def logout():
    pass
# your code goes here


if __name__ == "__main__":
    app.run(debug=True, use_reloader=True, port=5000)
