from flask_cors import CORS
from flask import Flask, request, jsonify, make_response, request, render_template, session, flash
from flask_sqlalchemy import SQLAlchemy
import jwt
from datetime import datetime, timedelta
from functools import wraps
# from classes import db, User, Itinerary, ItineraryDestination, Country, Destination
from classes import app
from country import country_bp

app.register_blueprint(country_bp)

# app = Flask(__name__)

# app.config['SECRET_KEY'] = 'YOU_SECRET_KEY'
# # how to get a secret key
# # In your command line >>> access Python >>> then type:
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector:''//root@localhost:3306/tt16'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(app)
# db.init_app(app)

CORS(app)

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

@app.route('/init_db')
def init_db():
    print("Initializing the database...")
    with app.app_context():
        db.create_all()
    print("Database initialized!")
    return 'Database initialized!'

if __name__ == "__main__":
    app.run(debug=True, use_reloader=True, port=5000)
