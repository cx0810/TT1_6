from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
import platform

app = Flask(__name__)

db = SQLAlchemy(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost:3306/cpaos'


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


class Itinerary:
    def __init__(self, id, country_id, user_id, budget, title):
        self.id = id 
        self.country_id = country_id
        self.user_id = user_id
        self.budget = budget
        self.title = title

    id = db.Column(db.Integer, primary_key=True)
    Itinerary_id = db.relationship('ItineraryDestination', backref='Itinerary', lazy=True, passive_deletes=True)

    country_id = db.Column(db.Integer, db.ForeignKey('Country.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    budget = db.Column(db.Float)
    title = db.Column(db.String(100))

    # ClinicianSchoolAppointments = db.relationship('ClinicianSchoolAppointment', backref='faculty', lazy=True, passive_deletes=True)


class ItineraryDestination:
    def __init__(self, id, itinerary_id, destination_id):
        self.id = id 
        self.itinerary_id = itinerary_id
        self.destination_id = destination_id

    id = db.Column(db.Integer, primary_key=True)
    itenarary_id = db.Column(db.Integer, db.ForeignKey('Itenarary.id'), nullable=False)
    destination_id = db.Column(db.Integer, db.ForeignKey('Destination.id'), nullable=False)
    

class Country:
    def __init__(self, id, name):
        self.id = id 
        self.name = name

    id = db.Column(db.Integer, primary_key = True)
    country_id = db.relationship('Itinerary', backref='Country', lazy=True, passive_deletes=True)
    country_id = db.relationship('Itinerary', backref='Destination', lazy=True, passive_deletes=True)
    
    name = db.Column(db.String(50))

class Destination:
    def __init__(self, id, country_id, cost, name, notes):
        self.id = id 
        self.country_id = country_id
        self.cost = cost
        self.name = name
        self.notes = notes
    
    id = db.Column(db.Integer, primary_key = True)
    country_id = db.Column(db.Integer, db.ForeignKey('Country.id'), nullable=False)
    destination_id = db.relationship('ItineraryDestination', backref='Destination', lazy=True, passive_deletes=True)
    cost = db.Column(db.Float)
    name = db.Column(db.String(50))
    notes = db.Column(db.Text)

 
