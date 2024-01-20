from flask import Blueprint, jsonify, request
from classes import db, User

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/get_user/<user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user = User.query.filter_by(id=user_id).first()

        user_obj = {
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'password': user.password,
            'username': user.username
        }

        return jsonify({"code": 200, "data": user_obj}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@user_bp.route('/create_user', methods=['POST'])
def create_user():
    #create user
    try:
        data = request.get_json()

        if not data or 'id' not in data: 
            return jsonify({"code": 400, "message": "Invalid data"}), 400
        
        #check if username is empty
        if data['username'] == "":
            return jsonify({"code": 400, "message":"Username cannot be empty"}), 400

        #check if user has already existed
        existing_user = User.query.filter_by(id=data['id']).first()
        if existing_user:
            return jsonify({"code": 409, "message": "User already exist"}), 409
        
        new_user = User(
            id = data['id'],
            first_name = data['first_name'],
            last_name = data['last_name'],
            password = data['password'],
            username = data['username']
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({"code": 201, "username": data['id']}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@user_bp.route('/update_user', methods=['PUT'])
def update_user():
    #edit user
    try:
        data = request.get_json()
        user_id = data.get('id')

        if not data or not user_id:
            return jsonify({"code": 400, "message": "Invalid data"})
        
        #check if username is empty
        if data['username'] == "":
            return jsonify({"code": 400, "message":"Username cannot be empty"}), 400
        
        existing_user = User.query.filter_by(id=data['id']).first()
        if not existing_user:
            return jsonify({ "code": 404, "message": "User not found"}), 404

        setattr(existing_user, 'first_name', data['first_name'])
        setattr(existing_user, 'last_name', data['last_name'])
        setattr(existing_user, 'password', data['password'])
        setattr(existing_user, 'username', data['username'])

        db.session.commit()
        return jsonify({"code": 200, "message": f"User details updated successfully"}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@user_bp.route('/delete_user', methods=['DELETE'])
def delete_user():
    #delete user
    try:
        data = request.get_json()

        if not data or 'id' not in data: 
            return jsonify({"code": 400, "message": "Invalid data"}), 400
        
        user = User.query.filter_by(id=data['id']).first()

        db.session.delete(user.id)
        db.session.commit()

        return jsonify({"code": 200, "message": f"User ID: {user.id} was deleted successfully"}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

