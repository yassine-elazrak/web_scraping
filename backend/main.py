from flask import Flask, request, abort
from flask_cors import CORS #comment this on deployment
from tools import run
import route
# from  route import DB
import schedule
from apscheduler.schedulers.background import BackgroundScheduler



##https://stackoverflow.com/questions/11994325/how-to-divide-flask-app-into-multiple-py-files

def sensor():
    """ Function for test purposes. """
    print("\n\n\nScheduler is alive!\n\n\n")


app = Flask(__name__)
CORS(app)

app.add_url_rule('/test',methods=['POST'], view_func=route.test)
app.add_url_rule('/chart', methods=['GET'],view_func=route.chart)
app.add_url_rule('/search', methods=['POST'], view_func=route.search)
app.add_url_rule('/configue',methods=['POST'],view_func=route.configue)
app.add_url_rule('/tweet',methods=['GET'],view_func=route.tweet)
app.add_url_rule('/barlangsentiment',methods=['GET'],view_func=route.BarLangSentiment)
app.add_url_rule('/sentiment', methods=['GET'], view_func=route.sentiment)
app.add_url_rule('/language', methods=['GET'], view_func=route.language)
app.add_url_rule('/sentimenttopic', methods=['GET'], view_func=route.sentimenttopic)
app.add_url_rule('/kmeans', methods=['GET'], view_func=route.kmeans)
app.add_url_rule('/textsentiment',methods=['POst'], view_func=route.textsentiment)
app.add_url_rule('/monthsentiment', methods=['GET'], view_func=route.monthsentiment)
app.add_url_rule('/texttopic', methods=['GET'], view_func=route.texttopic)
app.add_url_rule('/monthsentiment', methods=['GET'],view_func=route.monthsentiment)
app.add_url_rule('/nbtweets',methods=['GET'], view_func=route.nbtweets)
app.add_url_rule('/meun', methods=['POST'], view_func=route.meun)



if __name__ == '__main__':
    # DB.test()
    # DB.addFile('rrr.csv')
    # sched = BackgroundScheduler(daemon=True)
    # sched.add_job(sensor,'interval',minutes=1)
    # sched.start()
    app.run(debug=True)