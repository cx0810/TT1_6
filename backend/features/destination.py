from flask import Blueprint, jsonify, request
from classes import db, Itinerary, ItineraryDestination, Destination

destination_bp = Blueprint('destination_bp', __name__)

## retrieve all
## edit one
## delete one

@destination_bp.route('/get_destination_by_itinerary/<itinerary_id>', methods=['POST'])
def get_destination_by_itinerary(itinerary_id):
    try:
        output_list = []
        # results = db.itinerary_destination.filter(db.itinerary_destination.itinerary_id == itineraryID).distinct().all()
        results = db.session.query(ItineraryDestination.destination_id).filter(ItineraryDestination.itinerary_id == itinerary_id).distinct().all()

        destination_list = [result[0] for result in results]

        for oneDestination in destination_list:
            print("starting oneDestination for loop:", oneDestination)

            destination = Destination.query.filter_by(id=oneDestination).first()
            print("suspect error shudnt print here ")

            destination_obj = {
                "destination_id": destination.id,
                "country_id": destination.country_id,
                "cost": destination.cost,
                "name": destination.name,
                "notes": destination.notes
            }

            output_list.append(destination_obj)

        return jsonify({"code": 200, "data": output_list}), 200

    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@destination_bp.route('/get_destination/<destination_id>', methods=['GET'])
def get_destination(destination_id):
    try:
        destination = Destination.query.filter_by(id=destination_id).first()
        
        destination_obj = {
            'id': destination.id,
            'country_id': "Singapore",
            'cost': destination.cost,
            'name': destination.name,
            'notes': destination.notes
        }

        return jsonify({"code": 200, "data": destination_obj}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@destination_bp.route('/get_destinations', methods=['GET'])
def get_destinations():
    try:
        destinations = Destination.query.all()
        destinations_result = []

        for destination in destinations:
            destination_obj = {
                'id': destination.id,
                'country_id': "Singapore",
                'cost': destination.cost,
                'name': destination.name,
                'notes': destination.notes
            }
            destinations_result.append(destination_obj)

        return jsonify({"code": 200, "data": destinations_result}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500



@destination_bp.route('/create_destination', methods=['POST'])
def create_destination():
    #create destination
    try:
        data = request.get_json()

        if not data or 'country_id' not in data: 
            return jsonify({"code": 400, "message": "Invalid data"}), 400
        
        #check if name is empty
        if data['name'] == "":
            return jsonify({"code": 400, "message":"Name cannot be empty"}), 400

        # #check if user has already existed
        # existing_destination = Destination.query.filter_by(id=data['id']).first()
        # if existing_destination:
        #     return jsonify({"code": 409, "message": "Destination already exist"}), 409
        
        new_destination = Destination(
            country_id = data['country_id'],
            cost = data['cost'],
            name = data['name'],
            notes = data['notes']
        )

        db.session.add(new_destination)
        db.session.commit()

        return jsonify({"code": 201, "name": data['name']}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@destination_bp.route('/update_destination', methods=['PUT'])
def update_destination():
    #edit user
    try:
        data = request.get_json()
        destination_id = data.get('id')

        if not data or not destination_id:
            return jsonify({"code": 400, "message": "Invalid data"})
        
        #check if username is empty
        if data['name'] == "":
            return jsonify({"code": 400, "message":"name cannot be empty"}), 400
        
        existing_destination = Destination.query.filter_by(id=data['id']).first()
        if not existing_destination:
            return jsonify({ "code": 404, "message": "Destination not found"}), 404

        # setattr(existing_destination, 'country_id', data['country_id'])
        setattr(existing_destination, 'cost', data['cost'])
        setattr(existing_destination, 'name', data['name'])
        setattr(existing_destination, 'notes', data['notes'])

        db.session.commit()
        return jsonify({"code": 200, "message": f"Destination details updated successfully"}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@destination_bp.route('/delete_destination/<destination_id>', methods=['DELETE'])
def delete_destination(destination_id):
    #delete destination

    try:
 #check if itinerary exists
        existing_destination = Destination.query.filter_by(id=destination_id).first()

        if not existing_destination:
            return jsonify({"code": 409, "message": "Itinerary do not exists"}), 409

        db.session.delete(existing_destination)
        db.session.commit()


        # data = request.get_json()

        # if not data or 'id' not in data: 
        #     return jsonify({"code": 400, "message": "Invalid data"}), 400
        
        # destination = Destination.query.filter_by(id=data['id']).first()

        # db.session.delete(destination.id)
        # db.session.commit()

        return jsonify({"code": 200, "message": f"Destination ID: {existing_destination.id} was deleted successfully"}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

