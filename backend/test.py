import requests
import json
import inspect
import pandas as pd

data ={
    'keys': ["morocco"],
    'startTime': '2017-05-24',
    'endTime': '2020-05-24',
    'language': 'english',
    'emoji': 'replace',
    'folder':'.',
    'file':'tweetyassine',
    'size':'100',
    'settings': {'defaultSettings': 'null' ,'22':'ee'}
}

# r = requests.post("http://localhost:5000/search/", json=data)
# print(r.json())
res = requests.get('http://localhost:5000/tweet',)
print('res==>', res.json())

# f = requests.get('http://localhost:5000/chart/3')
# print(f.json())
# print(inspect.getsource(json.loads))

#   id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(150), unique=True)
#     password = db.Column(db.String(150))
#     first_name = db.Column(db.String(150))

# df = pd.read_csv('../tweets.csv')
# print(list(zip(df['tweet'],df['user_id']))[2])