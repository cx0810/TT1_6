from flask_cors import CORS
from classes import app
# from features.account import account_bp

CORS(app)

@app.route('/', methods=['GET'])
def health_check():
    return "ok"

if __name__ == '__main__':
    app.run(debug=True, port=5000)