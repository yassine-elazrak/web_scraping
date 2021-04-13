from flask import Flask, abort, request
from flask_restful import Api, Resource, reqparse, marshal_with , fields
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///database.db'
api = Api(app)
db = SQLAlchemy(app)
parser = reqparse.RequestParser()

"""
{
    'keys':['key1', 'key2', 'key3'],
    'startTime':'2020-05-24T10:30',
    'endTime':'2019-05-24T10:30',
    'language':'english',
    'emoji':'replace',
    'settings':'defaultSettings',
}
"""




class Search(Resource):
    def get(self):
        return {'hello': 'get'}, 200

    def post(self):
        parser.add_argument('keys' , action='append')
        parser.add_argument('startTime')
        parser.add_argument('endTime')
        parser.add_argument('language')
        parser.add_argument('emoji')
        parser.add_argument('size')
        parser.add_argument('settings' , type=dict)
        data = parser.parse_args()
        print('=>', data,'\n\n\n\n----\n',type(data['settings']))
        return {'hello': 'post'}, 200


api.add_resource(Search, '/search')