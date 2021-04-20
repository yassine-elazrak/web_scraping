from flask import Flask, abort, request
from flask_restful import Api, Resource, reqparse, marshal_with, fields
from flask_sqlalchemy import SQLAlchemy
from os import path
import datetime
import pandas as pd
# from tools import run
from threading import Thread
# from  sqlalchemy.sql import fun ,_and
from flask_cors import CORS #comment this on deployment


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)
db = SQLAlchemy(app)
parser = reqparse.RequestParser()
FLAG=True

"""
#https://sqliteonline.com/

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
    id = db.Column('tweet_id', db.Integer, primary_key=True)
    tweet = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, nullable=True)
    language = db.Column(db.String, nullable=True)
    tweetClean = db.Column(db.String, nullable=False)
    dateCreate = db.Column(db.DateTime, nullable=False,default=datetime.datetime.utcnow())
    uri = db.Column(db.String)
    time = db.Column(db.BigInteger)

    def __init__(self, tweet, user_id, tweetClean, dateCreate, language,uri):
        __tablename__ = 'tweet'
        self.tweet = tweet
        self.user_id = user_id
        self.tweetClean = tweetClean
        self.dateCreate = dateCreate
        self.language = language
        self.time = dateCreate.timestamp()
        self.uri = uri
    

def convertDate(date, time): 
    y,m,d =str(date).split('-')
    H,M,S = str(time).split(':')
    date_new = datetime.datetime(int(y),int(m),int(d),int(H),int(M),int(S))
    return date_new


def test():
    df = pd.read_csv('../tweets.csv')
    count = 0
    for tweet, user_id , language , date, time,uri in zip(df['tweet'], df['user_id'], df['language'], df['date'], df['time'], df['urls']):
        dateCreate=convertDate(date, time)
        user_new = Tweet(tweet=tweet, tweetClean="clean", user_id=str(count % 55) , language=language, dateCreate=dateCreate, uri=uri)
        db.session.add(user_new)
        count +=1
    db.session.commit()
    print(FLAG,"end__creation_donne\n\n")
# select count() from tweet where date(datecreate) == '2020-4-10';

# https://stackoverflow.com/questions/8895208/sqlalchemy-how-to-filter-date-field
def query():
    res =  db.session.query(Tweet).all()
    print("======resr=========",res)
#db.session.query(Tweet.user_id).filter(Tweet.user_id <= 5).all()
#res = db.session.query(Tweet.tweet, Tweet.user_id).filter(Tweet.user_id <= 5, Tweet.user_id >=4).all()
# select tweet , user_id from tweet where user_id >=4 and user_id <= 5;

class Search(Resource):
    # def get(self):
    #     # res = db.session.query(Tweet.tweet, Tweet.user_id).filter(Tweet.user_id <= 5, Tweet.user_id >=4).all()
    #     # print("==>", list(res))
    #     return {'hello': 'get', 'name':333 }, 200

    def post(self):
        # parser.add_argument('keys', action='append')
        # parser.add_argument('startTime')
        # parser.add_argument('endTime')
        # parser.add_argument('language')
        # parser.add_argument('emoji')
        # parser.add_argument('size')
        # parser.add_argument('folder')
        # parser.add_argument('file')
        # parser.add_argument('settings', type=dict)
        # data = parser.parse_args()
        # Thread(target=run, args=[data]).start()
        # parser.add_argument('startTime')
        # parser.add_argument('size')
        # if 'name' in request.data:
        print('data==>', request.get_json(),'\n\n')
        
 
        return {'hello': [1,3,4,5],'yass':[2,6,7,8]}, 200


api.add_resource(Search, '/search')

if __name__ == '__main__':
    # create_db()
    # if FLAG:
    #     FLAG=False
    #     # test()
    app.run(debug=True)

