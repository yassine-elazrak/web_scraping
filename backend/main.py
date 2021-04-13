from flask import Flask, abort, request
from flask_restful import Api, Resource, reqparse, marshal_with , fields
from flask_sqlalchemy import SQLAlchemy
from os import path
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
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
def create_db():
    if not path.exists('database.db'):
        print("\n\n create db \n\n")
        db.create_all(app=app)

class Tweet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tweet=db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, nullable=True)
    language = db.Column(db.String, nullable=True)

def test(num):
    for i in range(0,num):
        # print(i)
        user_new = Tweet(tweet='name',user_id=i, language='lang')
        db.session.add(user_new)
    db.session.commit()
    print("end__creation\n\n")




create_db()
test(44)

class Search(Resource):
    def get(self):
        res = Tweet.query.all()
        print("==>", res)
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

if __name__ == '__main__':
    app.run(debug=True)
