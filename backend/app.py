from flask_cors import CORS
from flask import Flask, request, jsonify, make_response, request, render_template, session, flash
from flask_sqlalchemy import SQLAlchemy
import jwt
from datetime import datetime, timedelta
from functools import wraps
# from classes import db, User, Itinerary, ItineraryDestination, Country, Destination
from classes import app
from features.country import country_bp
from features.user import user_bp
from features.itinerary import itinerary_bp
from features.destination import destination_bp

app.register_blueprint(country_bp)
app.register_blueprint(user_bp)
app.register_blueprint(itinerary_bp)
app.register_blueprint(destination_bp)


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


CORS(app)

@app.route('/', methods=['GET'])
def health_check():
    return "ok"

if __name__ == '__main__':
    app.run(debug=True, port=5000)
