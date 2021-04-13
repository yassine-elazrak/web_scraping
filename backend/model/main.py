from flask import Flask, request, abort

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
        'index': 'Test Pass hello dddo llo'
    })


if __name__ == '__main__':
    app.run(debug=True)