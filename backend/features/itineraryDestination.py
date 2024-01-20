from flask import Blueprint, jsonify, request
from classes import db, Itinerary, ItineraryDestination, Country, Destination

itinerary_destinations_bp = Blueprint('itinerary_destinations_bp', __name__)

#create
@itinerary_destinations_bp.route('/itinerary-destinations', methods=['POST'])
def add_itinerary_destination():
    data = request.get_json()
    new_itinerary_destination = ItineraryDestination(
        itinerary_id=data['itinerary_id'],
        destination_id=data['destination_id']
    )
    db.session.add(new_itinerary_destination)
    db.session.commit()
    
    return jsonify({'message': 'Itinerary destination added successfully'}), 201

#read
@itinerary_destinations_bp.route('/itineraryDestinations', methods=['GET'])
def get_itinerary_destinations():
    results = db.session.query(
        Itinerary.title, 
        Destination.name
    ).join(
        ItineraryDestination, Itinerary.id == ItineraryDestination.itineray_id
    ).join(
        Destination, Destination.id == ItineraryDestination.destination_id
    ).all()
    
    itinerary_destinations = [{'itinerary_title': title, 'destination_name': name} for title, name in results]
    
    return jsonify(itinerary_destinations)

#update
@itinerary_destinations_bp.route('/itinerary-destinations/<int:id>', methods=['PUT'])
def update_itinerary_destination(id):
    data = request.get_json()
    itinerary_destination = ItineraryDestination.query.get_or_404(id)
    itinerary_destination.itinerary_id = data['itinerary_id']
    itinerary_destination.destination_id = data['destination_id']
    db.session.commit()
    
    return jsonify({'message': 'Itinerary destination updated successfully'}), 200

#delete
@itinerary_destinations_bp.route('/itinerary-destinations/<int:id>', methods=['DELETE'])
def delete_itinerary_destination(id):
    itinerary_destination = ItineraryDestination.query.get_or_404(id)
    db.session.delete(itinerary_destination)
    db.session.commit()
    
    return jsonify({'message': 'Itinerary destination deleted successfully'}), 200
