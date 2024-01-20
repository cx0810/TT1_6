from flask import Blueprint, jsonify, request
from classes import db, Itinerary

status_bp = Blueprint('status_bp', __name__)

@status_bp.route('/create_itinerary', methods=['POST'])
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