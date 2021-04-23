from flask import Flask, request, abort
from flask_cors import CORS #comment this on deployment
from tools import run
import route

##https://stackoverflow.com/questions/11994325/how-to-divide-flask-app-into-multiple-py-files

app = Flask(__name__)
CORS(app)

app.add_url_rule('/test',methods=['POST'], view_func=route.test)
app.add_url_rule('/chart', methods=['GET'],view_func=route.chart)
app.add_url_rule('/search', methods=['POST'], view_func=route.search)
app.add_url_rule('/configue',methods=['POST'],view_func=route.configue)
app.add_url_rule('/tweet',methods=['GET'],view_func=route.tweet)
app.add_url_rule('/barlangsentiment',methods=['GET'],view_func=route.BarLangSentiment)
app.add_url_rule('/sentiment', methods=['GET'], view_func=route.sentiment)
if __name__ == '__main__':
    app.run(debug=True)