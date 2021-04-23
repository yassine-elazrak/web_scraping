from tools import run
from threading import Thread
from flask import request, abort
from textblob import TextBlob
import pandas as pd
from uuid import uuid4
from os import path
from collections import Counter

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
    positive, negative, neutral = {} , {} ,{}
    for key in keys:
        positive[key]=0
        negative[key]=0
        neutral[key]=0
    for l, s in zip(df['language'], df['sentiment']):
        if s == 'positve':
            positive[l] += 1
        elif s == 'negative':
            negative[l] +=1
        else:
            neutral[l]+=1
    res = {}
    res['keys'] = keys
    res['positive'] = list(positive.values())
    res['negative'] = list(negative.values())
    res['neutral'] = list(neutral.values())
    # print('ll',res)
    return res , 200

def configue():
    global data
    print('befor=>',data,'\n---------\n\n')
    data = request.get_json()
    print('after=>',data)
    return {'message':'succes configue'}, 200

def search():
    global data
    keys = request.get_json()
    data['keys'] = keys
    print('searc==>', data, 'keys==>', keys)
    # Thread(target=run,args=[data]).start()
    run(data)
    return {'message':'succes search'}, 200

def tweet():
    tweets = []
    if path.exists('./tweet.csv'):
        df = pd.read_csv('./tweet.csv')
        #  {uid, tweet, username,date, url }
        for tweet, username,date,url in zip(df['tweet'], df['username'], df['date'], df['urls']):
            tweets.append({'uid':str(uuid4()),'tweet':tweet,'username':username,'date':date,'url':url})
            print('kkk-->')
        # print('tweet', tweets)
    return {'data':tweets}, 200


def sentiment():
    df  = pd.read_csv('./tweet.csv')
    res = Counter(df['sentiment'])
    print('sen==>',res, "---", [res['positve'], res['negative'],res['neutral']])
    return {'sentiment':[res['positve'], res['negative'],res['neutral']]},200
    
        

