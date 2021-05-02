import sqlite3
import pickle
import pandas as pd
from os import path
from tools import runSql,run

#insert into Tweets (tweet ,creat_date) VALUES('hello','2020-11-22')
#[ id   tweet date   sentiment cluster  topic   cleanTweet pcax , pcay url ]
#SELECT * FROM Tweets WHERE strftime('%m', creat_date) = '02'
# UPDATE Tweets set tweet = 'ff' WHERE id = 2
# sqlite3.register_adapter(list, pickle.dumps)
# sqlite3.register_adapter(set, pickle.dumps)
keys=["Royal Air Maroc", "RAM_Maroc",    "@RAM_Maroc",\
 "royalairmaroc", "الخطوط المغربيه"\
, "#الخطوط_الملكية_المغربية ", "الخطوط الملكية المغربية",\
 "Royal Air Maroc", "لارام",  \
" لارام", "الخطوط_الملكية_المغربية", "RAM"]

data = {'keys':["l"],'startTime': '2019-09-05T10:30', 'endTime': '2020-07-24T10:30', 'language': 'en', 'emoji': 'replace', 'size': '', 'file': 'tweet.csv', 'folder': '.',
 'settings': {'digit': True, 'punctuation': True, 'ulrs': True, 'lowercase': True, 'diacritics': True, 'whitespace': True, 'fillna': True, 'stemming': True, 'Name': True}}

class db:
    # data = [('hello11', '2020-01-22',0),('hello1', '2020-01-22',0),('hello2', '2020-02-22',0),('hello22', '2020-02-12',0),('helloee', '2020-03-25',0),]
    # _conn=None
    def __init__(self, name):
        sqlite3.register_converter('pickle', pickle.loads)
        self._conn = sqlite3.connect(name, detect_types=sqlite3.PARSE_DECLTYPES)
        self.create_schema()
        # self.insert()
    
  
    def create_schema(self):
        # if path.exists('database.db'):
        #     return
        cursor =self._conn.cursor()
        cursor.execute("CREATE TABLE IF NOT EXISTS Tweets (id INTEGER PRIMARY KEY AUTOINCREMENT, tweet TEXT,sentiment TEXT, date DATE, topic INTEGER, link TEXT, cleanTweet TEXT, pcax REAL ,\
            pcay REAL, language TEXT,kmeans REAL, username TEXT)")
        cursor.execute("CREATE TABLE IF NOT EXISTS Setting (id INTEGER PRIMARY KEY ,topic pickle, time DATE,keys pickle)")
####    
        
        df = runSql(data)
        # print("--------\n",df.head())
        self.addFile(df)
        self._conn.commit()
 
    def addFile(self, df):
        # fileName = df
        # df = pd.read_csv(fileName)
        cursor = self._conn.cursor()
        data = list(zip(df['tweet'],df['sentiment'],df['date'],df['topic'],df['link'],df['cleanTweet'],\
            df['pcax'],df['pcay'],df['language'], df['kmeans'],df['username']))
        cursor.executemany('INSERT INTO Tweets(tweet ,sentiment, date , topic , link , cleanTweet , pcax ,\
            pcay,language , kmeans,username) VALUES(?,?,?,?,?,?,?,?,?,?,?)', data)
        self._conn.commit()
        # df.to_sql(name='p', con=self._conn,if_exists='append')
        # print()
    def init(self):
        pass
        


        # print(data)
    def update_column(self):
        df = pd.read_csv('./tweet.csv')
        n = len(df['tweet'])
        # cursor.execute('UPDATE Tweets SET topic=? WhERE id=?', (i,i))
        cursor = self._conn.cursor()
        data = [(i**2, i) for i in range(1, n+1)]
        cursor.executemany('UPDATE Tweets SET topic=? WHERE id=?', data)
        self._conn.commit()

    def to_df(self):##https://stackoverflow.com/questions/36028759/how-to-open-and-convert-sqlite-database-to-pandas-dataframe
        # name_dict = {
        #     'Name': ['a','b','c','d'],
        #     'Score': [90,80,95,20]
        #   }

        # df = pd.DataFrame(name_dict)

        # print (df)
        corr = self._conn
        df = pd.read_sql_query("SELECT * FROM Tweets", corr)
        # print(df.head())
        # df.to_csv('ff.csv')
        return df

    def test(self):
        print("\n\n______test_____\n\n")


        # d = corr.execute('SELECT * FROM Tweets')
        # for data in d:
        #     print('data==>',data)

        # self._conn.commit()









    def insert(self,parameters=()):
        query = 'INSERT INTO Tweets(tweet, creat_date, topic) VALUES(?,?,?)'
    #    parameters = ('hello', '2020-12-22',4)
        # for p in db.data:
        #     self.executeQuery(query, p)
        Q = "INSERT INTO art(topic, keys) VALUES(?,?)"
        a=[1,2,3]
        b={'a',333}
        c = pickle.dumps(a)
        print('qq==>',c,"aaaa=>",pickle.loads(c), "\n\n")
        self.executeQuery(Q, (pickle.dumps(a),pickle.dumps(b)))


    def executeQuery(self,query, parameters=()):
        cursor = self._conn.cursor()
        data = cursor.execute(query, parameters)
        self._conn.commit()
        return data
        
    def get(self):
        pass
        q="SELECT id , line FROM art WHERE id=?"
        key=(1,)
        data = self.executeQuery(q,key)
        # data = self._conn.cursor.fetchone()
        for r in data:
            print('data==>',r)


# s = db('test2.db')
# s.addFile()
# s.to_df()
# s.update_column()







