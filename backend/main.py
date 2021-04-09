from flask import Flask, request, jsonify, abort, url_for
# from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment

app = Flask(__name__)
CORS(app) #comment this on deployment
# api = Api(app)

@app.route('/')
def index():
    return jsonify({
        'success': True,
        'index': 'Test Pass '
    })

@app.route('/hello')
def hello():
    return jsonify({
        'success': True,
        'index': 'Test Pass hello dddo'
    })


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)