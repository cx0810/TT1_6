from flask import Blueprint, jsonify, request
from classes import db, Itinerary

itinerary_bp = Blueprint('itinerary_bp', __name__)

#create
@itinerary_bp.route('/create_itinerary', methods=['POST'])
def create_itinerary():
    try:
        data = request.get_json()
        itinerary_data = data.get('itinerary')

        if not data or not itinerary_data:
            return jsonify({"code": 400, "message": "Invalid data"}), 400

        title = itinerary_data.get('title')
        user_id = itinerary_data.get('user_id')
        country_id = itinerary_data.get('country_id')
        budget = itinerary_data.get('budget')

        if not title or not user_id or not country_id or not budget:
            return jsonify({"code": 400, "message": "Missing itinerary data"}), 400

        existing_itinerary = Itinerary.query.filter_by(title=title, user_id=user_id).first()

        if existing_itinerary:
            return jsonify({"code": 409, "message": "Itinerary already exists"}), 409

        new_itinerary = Itinerary(title=title, user_id=user_id, country_id=country_id, budget=budget)
        db.session.add(new_itinerary)
        db.session.commit()

        return jsonify({"code": 201, "itinerary_title": title}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
#read
@itinerary_bp.route('/itineraries', methods=['GET'])
@itinerary_bp.route('/itineraries/<int:itinerary_id>', methods=['GET'])
def get_itineraries(itinerary_id=None):
    if itinerary_id:
        itinerary = Itinerary.query.get(itinerary_id)
        if itinerary:
            return jsonify(itinerary.to_dict()), 200  # Assuming a method to_dict() that serializes the data
        else:
            return jsonify({"code": 404, "message": "Itinerary not found"}), 404
    else:
        itineraries = Itinerary.query.all()
        return jsonify([it.to_dict() for it in itineraries]), 200

#update
@itinerary_bp.route('/itineraries/<int:itinerary_id>', methods=['PUT'])
def update_itinerary(itinerary_id):
    data = request.get_json()
    itinerary_data = data.get('itinerary')
    
    if not itinerary_data:
        return jsonify({"code": 400, "message": "Invalid data"}), 400
    
    itinerary = Itinerary.query.get(itinerary_id)
    
    if not itinerary:
        return jsonify({"code": 404, "message": "Itinerary not found"}), 404
    
    itinerary.title = itinerary_data.get('title', itinerary.title)
    itinerary.user_id = itinerary_data.get('user_id', itinerary.user_id)
    itinerary.country_id = itinerary_data.get('country_id', itinerary.country_id)
    itinerary.budget = itinerary_data.get('budget', itinerary.budget)
    
    db.session.commit()
    
    return jsonify({"code": 200, "message": "Itinerary updated"}), 200

#delete
@itinerary_bp.route('/itineraries/<int:itinerary_id>', methods=['DELETE'])
def delete_itinerary(itinerary_id):
    itinerary = Itinerary.query.get(itinerary_id)
    
    if not itinerary:
        return jsonify({"code": 404, "message": "Itinerary not found"}), 404
    
    db.session.delete(itinerary)
    db.session.commit()
    
    return jsonify({"code": 200, "message": "Itinerary deleted"}), 200
