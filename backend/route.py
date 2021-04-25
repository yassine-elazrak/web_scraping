from tools import run
from threading import Thread
from flask import request, abort
from textblob import TextBlob
import pandas as pd
from uuid import uuid4
from os import path
from collections import Counter
import pickle

data = {'startTime': '2018-09-05T10:30', 'endTime': '2020-07-24T10:30', 'language': 'english', 'emoji': 'replace', 'size': '', 'file': 'tweet.csv', 'folder': '.',
 'settings': {'digit': True, 'punctuation': True, 'ulrs': True, 'lowercase': True, 'diacritics': True, 'whitespace': True, 'fillna': True, 'stemming': True, 'Name': True}}


def test():
    return {'main': 'test'}


"""
[a , b, c , c,a,b]
[1,2,3,4,1,3]
[1 2 3]
[]
"""

# keys = list(set(df['language']))
# for l, s in zip(df['language'], df['sentiment']):


def chart():
    # global data
    df = pd.read_csv('./tweet.csv')
    # sentiment = Counter(df['sentiment'])
    sentiment = {'positive': 333, 'negative': 222, 'neutral': 111}
    language = dict(Counter(df['language']))  # most_common(10)
    # print(sentiment, language)

    return {'sentiment': sentiment, 'language': language}


def BarLangSentiment():
    df = pd.read_csv('./tweet.csv')
    keys = list(set(df['language']))
    # print("test==>", df.columns)
    positive, negative, neutral = {}, {}, {}
    for key in keys:
        positive[key] = 0
        negative[key] = 0
        neutral[key] = 0
    for l, s in zip(df['language'], df['sentiment']):
        if s == 'positve':
            positive[l] += 1
        elif s == 'negative':
            negative[l] += 1
        else:
            neutral[l] += 1
    res = {}
    res['keys'] = keys
    res['positive'] = list(positive.values())
    res['negative'] = list(negative.values())
    res['neutral'] = list(neutral.values())
    # print('ll',res)
    return res, 200


def configue():
    global data
    print('befor=>', data, '\n---------\n\n')
    data = request.get_json()
    print('after=>', data)
    return {'message': 'succes configue'}, 200


def search():
    global data
    keys = request.get_json()
    data['keys'] = keys
    print('searc==>', data, 'keys==>', keys)
    # Thread(target=run,args=[data]).start()
    run(data)
    return {'message': 'succes search'}, 200


def tweet():
    tweets = []
    if path.exists('./tweet.csv'):
        df = pd.read_csv('./tweet.csv')
        #  {uid, tweet, username,date, url }
        for tweet, username, date, url in zip(df['tweet'], df['username'], df['date'], df['urls']):
            tweets.append({'uid': str(uuid4()), 'tweet': tweet,
                          'username': username, 'date': date, 'url': url})
            print('kkk-->')
        # print('tweet', tweets)
    return {'data': tweets}, 200


def sentiment():
    df = pd.read_csv('./tweet.csv')
    res = Counter(df['sentiment'])
    # print('sen==>',res, "---", [res['positve'], res['negative'],res['neutral']])
    return {'sentiment': [res['positve'], res['negative'], res['neutral']]}, 200


def language():
    df = pd.read_csv('./tweet.csv')
    res = Counter(df['language']).most_common(6)
    # print('languagr', list(map(lambda x: x[0] ,res)))
    return {'keys': list(map(lambda x: x[0], res)), 'values': list(map(lambda x: x[1], res))}, 200


def sentimenttopic():
    df = pd.read_csv('./tweet.csv')
    keys = ['positve', 'neutral', 'negative']
    res = {key: [] for key in keys}
    for index in range(5):
        s = dict(Counter(df[df['topic'] == index]['sentiment']))
        # {'positve': 18, 'neutral': 32, 'negative': 6}
        for key in keys:
            # res[key] = list([s['positve'],s['negative'], s['neutral']])
            res[key].append(s[key])
    # print(res)

    return {'data': res}, 200


def kmeans():
    df = pd.read_csv('./tweet.csv')
    res = dict.fromkeys([i for i in range(5)], [])
    datasets = []
    colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"]
    clusters = ['cluster1', 'cluster2', 'cluster3',
        'cluster4', 'cluster5', 'cluster6']
    for index in range(5):
        datasets.append({
            'label': clusters[index],
            'data': [{'x': x, 'y': y} for x, y in zip(df['pcax'], df['pcay'])],
            'backgroundColor': colors[index]
        })
    return {'datasets': datasets}, 200


def textsentiment():
    df = pd.read_csv('./tweet.csv')
    res=[i for i in range(3)]
    keys = ['positve', 'neutral', 'negative']
    for index, s in enumerate(keys):
        text = ''.join(list(map(str,df[df['sentiment']== s]['cleanTweet'])))
        data = list(map(lambda tuple : {tuple[0] : tuple[1]} , Counter(text.split()).most_common(100)))
        res[index] = {'title':f'words {s}' , 'words':data}
    # print('data==>', res)

    return {'text':res} ,200
def monthsentiment():#[1 23]
    df = pd.read_csv('./tweet.csv')
    df['month'] = df['date'].apply(lambda x: int(x.split('-')[1]))
    keys = ['positve', 'neutral', 'negative']
    res = {key:[] for key in keys}
    for index in range(1,13):
        s = df[df['month']== index]['sentiment']
        s = dict(Counter(s))
        for key in keys:
            res[key].append(s[key] if key in s.keys() else 0)
    print(res)
    
    """
    {'positve': [0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0], 'neutral': [0, 0, 0, 314, 0, 0, 0, 0, 0, 0, 0, 0], 'negative': [0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0]}
    """
    return {}

def texttopic():
    topic={}
    with open('topics','rb') as df:
        topic = pickle.load(df)

    print(topic)
    return {}, 200




