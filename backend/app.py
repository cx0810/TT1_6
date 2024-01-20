
from flask import Flask, request, jsonify, make_response, request, render_template, session, flash
from flask_sqlalchemy import SQLAlchemy
import jwt
from datetime import datetime, timedelta
from functools import wraps
from classes import db, User, Itinerary, ItineraryDestination, Country, Destination


app = Flask(__name__)


app.config['SECRET_KEY'] = 'YOU_SECRET_KEY'
# how to get a secret key
# In your command line >>> access Python >>> then type:
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector:''//root@localhost:3306/tt16'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
db.init_app(app)



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



class User(db.Model):
    def __init__(self, id, first_name, last_name, password, username):
        self.id = id 
        self.first_name = first_name
        self.last_name = last_name
        self.password = password
        self.username = username

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.relationship('Itinerary', backref='User', lazy=True, passive_deletes=True)

    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    password = db.Column(db.String(20))
    username = db.Column(db.String(20))


class Itinerary(db.Model):
    def __init__(self, id, country_id, user_id, budget, title):
        self.id = id 
        self.country_id = country_id
        self.user_id = user_id
        self.budget = budget
        self.title = title

    id = db.Column(db.Integer, primary_key=True)
    Itinerary_id = db.relationship('ItineraryDestination', backref='Itinerary', lazy=True, passive_deletes=True)

    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    budget = db.Column(db.Float)
    title = db.Column(db.String(100))

    # ClinicianSchoolAppointments = db.relationship('ClinicianSchoolAppointment', backref='faculty', lazy=True, passive_deletes=True)


class ItineraryDestination(db.Model):
    # def __init__(self, id, itinerary_id, destination_id):
    def __init__(self, id, destination_id, itinerary_id):

        self.id = id 
        self.itinerary_id = itinerary_id
        self.destination_id = destination_id

    id = db.Column(db.Integer, primary_key=True)
    itinerary_id = db.Column(db.Integer, db.ForeignKey('itinerary.id'), nullable=False)
    destination_id = db.Column(db.Integer, db.ForeignKey('destination.id'), nullable=False)
    

class Country(db.Model):
    def __init__(self, id, name):
        self.id = id 
        self.name = name
   

    id = db.Column(db.Integer, primary_key = True)
    country_id = db.relationship('itinerary', backref='country', lazy=True, passive_deletes=True)
    destination_id = db.relationship('destination', backref='country', lazy=True, passive_deletes=True)
    
    name = db.Column(db.String(50))

class Destination(db.Model):
    def __init__(self, id, country_id, cost, name, notes):
        self.id = id 
        self.country_id = country_id
        self.cost = cost
        self.name = name
        self.notes = notes
    
    id = db.Column(db.Integer, primary_key = True)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    destination_id = db.relationship('itineraryDestination', backref='destination', lazy=True, passive_deletes=True)
    cost = db.Column(db.Float)
    name = db.Column(db.String(50))
    notes = db.Column(db.Text)

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, use_reloader=True, port=5000)
