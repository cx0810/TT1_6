from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
import platform

app = Flask(__name__) 

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost:3306/tt16'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/tt16'
db = SQLAlchemy(app)

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
    def __init__(self, country_id, user_id, budget, title):
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
    name = db.Column(db.String(50))
    country_id = db.relationship('Itinerary', backref='country', lazy=True, passive_deletes=True)
    destination_id = db.relationship('Destination', backref='country', lazy=True, passive_deletes=True)
    

class Destination(db.Model):
    def __init__(self, country_id, cost, name, notes):
        # self.id = id 

        self.country_id = country_id
        self.cost = cost
        self.name = name
        self.notes = notes
        
    id = db.Column(db.Integer, primary_key = True)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    destination_id = db.relationship('ItineraryDestination', backref='destination', lazy=True, passive_deletes=True)
    cost = db.Column(db.Float)
    name = db.Column(db.String(50))
    notes = db.Column(db.Text)



