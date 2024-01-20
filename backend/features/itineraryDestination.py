from flask import Blueprint, jsonify, request
from classes import db, Itinerary, ItineraryDestination, Country, Destination

itinerary_bp = Blueprint('status_bp', __name__)

@itinerary_bp.route('/itinerary-destinations', methods=['GET'])
def get_itinerary_destinations():
    results = db.session.query(
        Itinerary.title, 
        Destination.name
    ).join(
        ItineraryDestination, Itinerary.id == ItineraryDestination.itinerary_id
    ).join(
        Destination, Destination.id == ItineraryDestination.destination_id
    ).all()
    
    itinerary_destinations = [{'itinerary_title': title, 'destination_name': name} for title, name in results]
    
    return jsonify(itinerary_destinations)
