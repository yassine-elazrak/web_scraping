from tools import run
from threading import Thread
from flask import request, abort
from textblob import TextBlob
import pandas as pd
from uuid import uuid4
from os import path
from collections import Counter
import pickle
from sql import db
import schedule
from apscheduler.schedulers.background import BackgroundScheduler



##https://stackoverflow.com/questions/11994325/how-to-divide-flask-app-into-multiple-py-files

def sensor():
    """ Function for test purposes. """
    print("\n\n\nScheduler is alive!\n\n\n")


data = {'startTime': '2019-09-05T10:30', 'endTime': '2020-07-24T10:30', 'language': 'en', 'emoji': 'replace', 'size': '', 'file': 'tweet.csv', 'folder': '.',
 'settings': {'digit': True, 'punctuation': True, 'ulrs': True, 'lowercase': True, 'diacritics': True, 'whitespace': True, 'fillna': True, 'stemming': True, 'Name': True}}

def my_job():
    print('\n\n\n_________minite_______\n\n\n')
# DB = db('database.db')


# schedule.every().minutes.do(my_job)

df = pd.read_csv('./tweet.csv')
# df = DB.to_df()
# df2.to_csv('lolo.csv')

# print("run     df file")

def test():
	return {'main': 'test'}


"""
[a , b, c , c,a,b]
[1,2,3,4,1,3]
[1 2 3]
[]
"""
def bot():
	sched = BackgroundScheduler(daemon=True)
	sched.add_job(sensor,'interval',minutes=1)
	sched.start()
# bot()

# keys = list(set(df['language']))
# for l, s in zip(df['language'], df['sentiment']):
def meun():
	file = request.get_json()
	print("request file==>", file)
	global df
	df = pd.read_csv(file['file'])

	return {},200

	# return df

def chart():
   #df = connect()
	# global data
	###df = pd.read_csv('./tweet.csv')
	# sentiment = Counter(df['sentiment'])
	sentiment = {'positive': 333, 'negative': 222, 'neutral': 111}
	language = dict(Counter(df['language']))  # most_common(10)
	# #print(sentiment, language)

	return {'sentiment': sentiment, 'language': language}


def BarLangSentiment():
	###df = pd.read_csv('./tweet.csv')
   #df = connect()
	keys = list(set(df['language']))
	# #print("test==>", df.columns)
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
	# #print('ll',res)
	return res, 200


def configue():
	global data
	# sched = BackgroundScheduler(daemon=True)
	# sched.add_job(sensor,'interval',minutes=1)
	# sched.start()
	# #print('befor=>', data, '\n---------\n\n')
	data = request.get_json()
	# #print('after=>', data)
	global df
	# df = pd.read_csv('./koko.csv')
	return {'message': 'succes configue'}, 200


def search():
	global data
	keys = request.get_json()
	data['keys'] = keys
	#print('searc==>', data, 'keys==>', keys)
	# Thread(target=run,args=[data]).start()
	run(data)
	return {'message': 'succes search'}, 200


def tweet():
	tweets = []
   #df = connect()

	# if path.exists('./tweet.csv'):
		###df = pd.read_csv('./tweet.csv')
		#  {uid, tweet, username,date, url }
	for tweet, username, date, url,sentiment,topic in zip(df['tweet'], df['username'], df['date'], df['link'],df['sentiment'],df['topic']):
		tweets.append({'uid': str(uuid4()), 'tweet': tweet,
						  'username': username, 'date': date, 'url': url,'sentiment':sentiment, 'topic':topic})
			# #print('kkk-->')
		# #print('tweet', tweets)
	return {'data': tweets}, 200


def sentiment():
   #df = connect()

	###df = pd.read_csv('./tweet.csv')
	res = Counter(df['sentiment'])
	# #print('sen==>',res, "---", [res['positve'], res['negative'],res['neutral']])
	return {'sentiment': [res['positve'], res['negative'], res['neutral']]}, 200


def language():
   #df = connect()
	###df = pd.read_csv('./tweet.csv')
	res = Counter(df['language']).most_common(6)
	# #print('languagr', list(map(lambda x: x[0] ,res)))
	return {'keys': list(map(lambda x: x[0], res)), 'values': list(map(lambda x: x[1], res))}, 200


def sentimenttopic():
   #df = connect()
	###df = pd.read_csv('./tweet.csv')
	labels = list(['Topic#1','Topic#2','Topic#3','Topic#4','Topic#5','Topic#6','Topic#6','Topic#7','Topic#8','Topic#9','Topic#10'])

	keys = ['positve', 'neutral', 'negative']
	res = {key: [] for key in keys}
	res['labels'] = []
	n = len(Counter(df['topic']).keys())
	#print("sentimetpoic nn==>", n, "\n\n")
	for index in range(n):
		s = dict(Counter(df[df['topic'] == index]['sentiment']))
		# {'positve': 18, 'neutral': 32, 'negative': 6}
		# #print('sentientopics==>', s,"\n\n\n")
		res['labels'].append(labels[index])
		for key in keys:
			# res[key] = list([s['positve'],s['negative'], s['neutral']])
			if not key in s.keys():
				res[key].append(0)
			else:
				res[key].append(s[key])
	# #print(res)

	return {'data': res}, 200


def kmeans():
   #df = connect()
	###df = pd.read_csv('./tweet.csv')
	n = len(Counter(df['kmeans']).keys())
	res = dict.fromkeys([i for i in range(n)], [])
	datasets = []
	colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b","#FF0000","#00FF00","#FFFF00","#0000FF"]
	clusters = ['cluster1', 'cluster2', 'cluster3',
		'cluster4', 'cluster5', 'cluster6','cluster7','cluster8','cluster9','cluster10' ]
	#print('kknbr classes==>',n)
	for index in range(n):
		datasets.append({
			'label': clusters[index],
			'data': [{'x': x*20*(3 + index), 'y': y*20*(3+index)} for x, y in zip(df['pcax'], df['pcay'])],
			'backgroundColor': colors[index]
		})
	return {'datasets': datasets}, 200

# def conn():
#    #df = connect()
#     req = request.get_json()
#     # global df
#     if req['type'] == 'file':
#         df = pd.read_csv('./tweet.csv')
#         # df = pd.read_csv(req['file'])
#         # #print('fille===>',req['file'])
#     else:
#         #print('type req', req)

def textsentiment():
	###df = pd.read_csv('./tweet.csv')
   #df = connect()
	#print("paramtwr==>", request.get_json())
	# req = request.get_json()
	# global df
	# if req['type'] == 'file':
	#     df = pd.read_csv('./tweet.csv')
	#     # df = pd.read_csv(req['file'])
	#     #print('fille===>',req['file'])
	# else:
	#     #print('type req', req)


	res=[i for i in range(3)]
	keys = ['positve', 'neutral', 'negative']
	for index, s in enumerate(keys):
		text = ''.join(list(map(str,df[df['sentiment']== s]['cleanTweet'])))
		data = list(map(lambda tuple : {'text':tuple[0] ,'value': tuple[1]} , Counter(text.split()).most_common(200)))
		res[index] = {'title':f'words {s}' , 'words':data}
	# #print('data==>', res)

	return {'text':res} ,200
def monthsentiment():#[1 23]
	###df = pd.read_csv('./tweet.csv')
   #df = connect()
	df['month'] = df['date'].apply(lambda x: int(str(x).split('-')[1]))
	keys = ['positve', 'neutral', 'negative']
	res = {key:[] for key in keys}
	for index in range(1,13):
		s = df[df['month']== index]['sentiment']
		s = dict(Counter(s))
		for key in keys:
			res[key].append(s[key] if key in s.keys() else 0)
	# #print('sentiment0000',res)
	
	"""
	{'positve': [0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0], 'neutral': [0, 0, 0, 314, 0, 0, 0, 0, 0, 0, 0, 0], 'negative': [0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0]}
	"""
	return {'data':res},200

#  {
#       text: 'told',
#       value: 64,
#     },
#     {
def texttopic():
	topic={}
	res=[]

	with open('topics','rb') as df:
		topic = pickle.load(df)
	for key, value in topic.items():
		# #print('=====>',key , value['data'],end='\n')
		res.append({'title': value['title'],'words':list(map(lambda text: {'text':text,'value':1},value['words'])) })
	# #print('topics==>',res)
	return {'text':res}, 200

def nbtweets():
   #df = connect()
	###df = pd.read_csv('./tweet.csv')
	# res=[5]*None
	# #print('uuuu==>', len(df[df['sentiment']=='positve']))
	# res[0] = {'title':'Tweets Positive','data':''}
	# keys=['Tweets Positive','Tweets Negative','Tweets Neutral', 'Number of Tweets', 'Number Topics']
	res = [{'title':'Tweets Positive','data':len(df[df['sentiment']=='positve'])}, \
		{'title':'Tweets Negative','data':len(df[df['sentiment']=='negative'])},\
			{'title':'Tweets Neutral','data':len(df[df['sentiment']=='neutral'])},\
		{'title':'Number of Tweets','data':len(df['sentiment'])},\
			{'title':'Number Topics','data':len(dict(Counter(df['topic'])))}
				 ]
	# #print('000000===>', res) 

	return {'text':res},200

# def monthsentiment():

#     return {'ss':'monthsentimwnt'},200




