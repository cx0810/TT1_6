from flask import Blueprint, jsonify, request
from classes import db, Country

country_bp = Blueprint('country_bp', __name__)

@country_bp.route('/get_country', methods=['GET'])
def get_country():
    try:
        countrys = Country.query.all()
        country_list = []

        for country in countrys:
            country_obj = {
                'id': country.id,
                'name': country.name
            }

            country_list.append(country_obj)

        return jsonify({"code": 200, "data": country_list}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500