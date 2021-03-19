from flask import Flask, request, jsonify, abort, url_for

app = Flask(__name__)


@app.route('/')
def index():
    return jsonify({
        'success': True,
        'index': 'Test Pass'
    })

@app.route('/hello')
def hello():
    return 'hello yassine ok'


if __name__ == '__main__':
    print('helokkk')
    app.run(host='127.0.0.1', port=5000)