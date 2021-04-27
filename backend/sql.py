import sqlite3
import pickle
import pandas as pd

#insert into Tweets (tweet ,creat_date) VALUES('hello','2020-11-22')
#[ id   tweet date   sentiment cluster  topic   cleanTweet pcax , pcay url ]
#SELECT * FROM Tweets WHERE strftime('%m', creat_date) = '02'
# UPDATE Tweets set tweet = 'ff' WHERE id = 2
# sqlite3.register_adapter(list, pickle.dumps)
# sqlite3.register_adapter(set, pickle.dumps)

class db:
    data = [('hello11', '2020-01-22',0),('hello1', '2020-01-22',0),('hello2', '2020-02-22',0),('hello22', '2020-02-12',0),('helloee', '2020-03-25',0),]
    # _conn=None
    def __init__(self, name):
        sqlite3.register_converter('pickle', pickle.loads)
        self._conn = sqlite3.connect(name, detect_types=sqlite3.PARSE_DECLTYPES)
        self.create_schema()
        # self.insert()
    
  
    def create_schema(self):
        cursor =self._conn.cursor()
        cursor.execute("CREATE TABLE IF NOT EXISTS Tweets (id INTEGER PRIMARY KEY AUTOINCREMENT, tweet TEXT,sentiment TEXT, creat_date DATE, topic INTEGER, url TEXT, cleanTweet TEXT, pcax REAL ,\
            pcay REAL)")
        cursor.execute("CREATE TABLE IF NOT EXISTS art (id INTEGER PRIMARY KEY ,line pickle, parent pickle)")
        self._conn.commit()
 
    def addFile(self):
        df = pd.read_csv('./tweet.csv')
        cursor = self._conn.cursor()
        data = list(zip(df['tweet'],df['sentiment'],df['date'],df['topic'],df['link'],df['cleanTweet'],df['pcax'],df['pcay']))
        cursor.executemany('INSERT INTO Tweets(tweet ,sentiment, creat_date , topic , url , cleanTweet , pcax  ,\
            pcay) VALUES(?,?,?,?,?,?,?,?)', data)
        self._conn.commit()

        # print(data)
    def update_column(self):
        df = pd.read_csv('./tweet.csv')
        n = len(df['tweet'])
        # cursor.execute('UPDATE Tweets SET topic=? WhERE id=?', (i,i))
        cursor = self._conn.cursor()
        data = [(i**2, i) for i in range(1, n+1)]
        cursor.executemany('UPDATE Tweets SET topic=? WHERE id=?', data)
        self._conn.commit()









    def insert(self,parameters=()):
        query = 'INSERT INTO Tweets(tweet, creat_date, topic) VALUES(?,?,?)'
    #    parameters = ('hello', '2020-12-22',4)
        # for p in db.data:
        #     self.executeQuery(query, p)
        Q = "INSERT INTO art(line, parent) VALUES(?,?)"
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
# # s.addFile()
# s.update_column()







