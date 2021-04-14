import requests
import json
import inspect
import pandas as pd

data ={
    'keys': [22, 33, 55],
    'startTime': '2020-05-24T10:30',
    'endTime': '2019-05-24T10:30',
    'language': 'english',
    'emoji': 'replace',
    'size':'inf',
    'settings': {'defaultSettings': 'null' ,'22':'ee'}
}

r = requests.get("http://localhost:5000/search/432522", json=data)
print(r.json())

# print(inspect.getsource(json.loads))

#   id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(150), unique=True)
#     password = db.Column(db.String(150))
#     first_name = db.Column(db.String(150))

# df = pd.read_csv('../tweets.csv')
# print(list(zip(df['tweet'],df['user_id']))[2])