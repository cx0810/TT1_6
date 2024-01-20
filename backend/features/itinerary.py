from flask import Blueprint, jsonify, request
from classes import db, Itinerary

itinerary_bp = Blueprint('itinerary_bp', __name__)

@itinerary_bp.route('/get_all_itinerary', methods=['POST'])
def get_all_itinerary():
    try:
        itinerarys = Itinerary.query.all()
        itinerary_list = []

        for itinerary in itinerarys:
            itinerary_obj = {
                'id': itinerary.id,
                'country_id': "Singapore",
                'user_id': itinerary.user_id,
                'budget': itinerary.budget,
                'title': itinerary.title,
            }

            itinerary_list.append(itinerary_obj)

        return jsonify({"code": 200, "data": itinerary_list}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@itinerary_bp.route('/create_itinerary', methods=['POST'])
def create_itinerary():
    try:
        data = request.get_json()
        country_id = data.get('country_id')
        user_id = data.get('user_id')
        budget = data.get('budget')
        title = data.get('title')

        if not data or not country_id or not user_id or not title:
            return jsonify({"code": 400, "message": "Missing itinerary data"}), 400

        #check if country_id and user_id is empty
        if data['country_id'] == "":
            return jsonify({"code": 400, "message": "Country ID cannot be empty"}), 400
        elif data['user_id'] == "":
            return jsonify({"code": 400, "message": "User ID cannot be empty"}), 400

        #check if itinerary exists
        existing_itinerary = Itinerary.query.filter_by(country_id=country_id).filter_by(user_id=user_id).filter_by(budget=budget).filter_by(title=title).first()

        if existing_itinerary:
            return jsonify({"code": 409, "message": "Itinerary already exists"}), 409

        new_itinerary = Itinerary(title=title, user_id=user_id, country_id=country_id, budget=budget)
        db.session.add(new_itinerary)
        db.session.commit()

        return jsonify({"code": 201, "itinerary_title": title}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@itinerary_bp.route('/update_itinerary/<itinerary_id>', methods=['PUT'])
def update_itinerary(itinerary_id):
    try:
        data = request.get_json()
        country_id = data.get('country_id')
        user_id = data.get('user_id')
        budget = data.get('budget')
        title = data.get('title')

        if not data or not country_id or not user_id or not title:
            return jsonify({"code": 400, "message": "Missing itinerary data"}), 400

        #check if country_id and user_id is empty
        if data['country_id'] == "":
            return jsonify({"code": 400, "message": "Country ID cannot be empty"}), 400
        elif data['user_id'] == "":
            return jsonify({"code": 400, "message": "User ID cannot be empty"}), 400

        #check if itinerary exists
        existing_itinerary = Itinerary.query.filter_by(country_id=country_id).filter_by(user_id=user_id).filter_by(budget=budget).filter_by(title=title).first()

        if existing_itinerary:
            return jsonify({"code": 409, "message": "Itinerary already exists"}), 409

        selected_itinerary = Itinerary.query.filter_by(id=itinerary_id).first()

        setattr(selected_itinerary, 'country_id', country_id)
        setattr(selected_itinerary, 'user_id', user_id)
        setattr(selected_itinerary, 'budget', budget)
        setattr(selected_itinerary, 'title', title)

        db.session.commit()

        return jsonify({"code": 201, "message": f"Itinerary is updated successfully"}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@itinerary_bp.route('/delete_itinerary/<itinerary_id>', methods=['DELETE'])
def delete_itinerary(itinerary_id):
    try:
        # data = request.get_json()
        # country_id = data.get('country_id')
        # user_id = data.get('user_id')
        # budget = data.get('budget')
        # title = data.get('title')

        # #check if country_id and user_id is empty
        # if data['country_id'] == "":
        #     return jsonify({"code": 400, "message": "Country ID cannot be empty"}), 400
        # elif data['user_id'] == "":
        #     return jsonify({"code": 400, "message": "User ID cannot be empty"}), 400

        #check if itinerary exists
        existing_itinerary = Itinerary.query.filter_by(id=itinerary_id).first()

        if not existing_itinerary:
            return jsonify({"code": 409, "message": "Itinerary do not exists"}), 409

        db.session.delete(existing_itinerary)
        db.session.commit()

        return jsonify({"code": 200, "message": "Itinerary is deleted successfully"}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500