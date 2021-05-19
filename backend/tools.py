import twint
import uuid
import os
import shutil
from typing import *
from glob import glob
import pandas as pd
import csv
from threading import Thread
from cleanData import Clean
from  visualization import analyzeSentiment,cluster, topic

class Search:
    def __init__(self, keys:List[str], startTime:str, endTime :str, limitTweet:int , outFile:str) -> None:
        self.configue = twint.Config()
        self.configue.Search = keys                                                    #keys Search or tagets search in twitter
        self.configue.Since = startTime                                                # date start Search minum 2006
        self.configue.until = endTime                                                  # date end search maxum date new
        self.configue.Store_csv = True                                                 # type file storage csv
        self.configue.Hide_output = True                                               # hiding or ignore output stdout
        self.configue.Output = outFile                                                 # name file the stroge 
        if limitTweet > 0:                                                            # if limitTweet < 0 mean maxum tweet else number tweet == limitTweet
            self.configue.Limit = limitTweet 
        # self.configue.Limit = 200 
        print("limit===>tweets",limitTweet)                                         
    def search(self) -> None:                                                                  
        twint.run.Search(self.configue)   

"""
class store for sum all file  create 
"""

class Store:
    header= ["id", "conversation_id", "created_at", "date", "time", "timezone", "user_id", "username", "name", "place", "tweet", "language", "mentions", "urls", "photos",
                  "replies_count", "retweets_count", "likes_count", "hashtags",
                  "cashtags", "link", "retweet", "quote_url", "video", "thumbnail", "near", "geo", "source",
                  "user_rt_id", "user_rt", "retweet_id", "reply_to", "retweet_date", "translate", "trans_src", "trans_dest","cleanTweet"]

    def __init__(self, folder=".", file="tweet.csv")->None:
        self.file = file
        self.folder = folder

    def concatFiles(self, folder):
        absolutePath = os.path.join("./", folder) + "/*.csv"
        listFile = []
        for file in glob(absolutePath):
            df = pd.read_csv(file)
            if df.shape[0] > 1:
                listFile.append(df)
        if not listFile:
            print("df====<vide")
            df = pd.DataFrame({})
            df.to_csv(self.file, index=False)
            return
        df = pd.concat(listFile)
        df.to_csv(self.file, index=False)
        return
        ##
        print('=====================================>','sum data\n\n')
        # try:
        df = analyzeSentiment(df)
        print('=====================================>','sentiment\n\n')

        df, n = cluster(df)
            # n = 5
        print('=====================================>','clustring\n\n')

        df = topic(df ,n)
        print('=====================================>',n,'topic\n\n')
        df.to_csv(self.file, index=False)
        # except: 
        #     print("errroro  machine ===>")
        #     pass

    # def to_sql(self,folder):
    #     absolutePath = os.path.join("./", folder) + "/*.csv"
    #     listFile = []
    #     for file in glob(absolutePath):
    #         df = pd.read_csv(file)
    #         if df.shape[0] > 1:
    #             listFile.append(df)
    #     if not listFile:
    #         print("df====<vide")
    #         return pd.DataFrame({})
    #     # df = None
    #     df = pd.concat(listFile)
    #     print('=====================================>',"sqllll",'topic\n\n')
    #     # ##
    #     # df = analyzeSentiment(df)
    #     df, n = cluster(df)

    #     df = topic(df ,4)
        # return df
        # df.to_csv(self.file, index=False)

    def addDatatbase(self):
        pass

class openFolder:
    def __init__(self)->None:
        self.nameFolder = str(uuid.uuid4())
        print("uuu", self.nameFolder)
        os.makedirs(self.nameFolder,exist_ok=True)

    def __enter__(self)->str:
        return self.nameFolder

    def __exit__(self, exc_type, exc_value, exc_traceback)->None:
        shutil.rmtree(self.nameFolder)

class generatorDate:
    def __init__(self, startTime:str, endTime:str)->None:
        self.indexStart , self.startTime = startTime.split('-', 1)
        self.indexEnd ,self.endTime = endTime.split('-', 1)

    def generator(self):
        for year in range(int(self.indexStart), int(self.indexEnd)):
            yield (str(year) + "-" + self.startTime , str(year + 1) + "-" + self.endTime)

class Task:
    def __init__(self, args):
        print("config==>", args)
        self.date =generatorDate(args['startTime'].split('T')[0], args['endTime'].split('T')[0]).generator()
        self.store = Store(args['folder'], args['file'])
        self.keys = args['keys']
        self.settings = args
        if str(args['size']).isdigit():
            self.Tweet = int(args['size'])
        else:
            self.Tweet = -1
        self.listThread = []
    
    def myJobs(self, startTime, endTime, folder):
        file = folder + '/' + str(uuid.uuid4())+'.csv'
        Twint = Search(keys=self.keys, startTime=startTime, endTime=endTime,limitTweet=self.Tweet ,outFile=file)
        Twint.search()
        Clean(file,self.settings)
    ###
    def waiting(self):
        for Process in self.listThread:
            Process.join()

    def execute(self):
        with openFolder() as folder:
            for date in self.date:
                self.listThread.append(Thread(target=self.myJobs,args=[date[0], date[1], folder]))
            for Process in self.listThread:
                Process.start()
            self.waiting()
            print('folderuud',folder)
            self.store.concatFiles(folder)
    # def executeSql(self):
    #     df = None
    #     with openFolder() as folder:
    #         for date in self.date:
    #             self.listThread.append(Thread(target=self.myJobs,args=[date[0], date[1], folder]))
    #         for Process in self.listThread:
    #             Process.start()
    #         self.waiting()
    #         print('folderuud',folder)
    #         df = self.store.to_sql(folder)
    #     return df

def run(data):
    Task(data).execute()
    
def runSql(data):
    pass
#     df = Task(data).executeSql()
#     return df
        
# {
#     "startTime": "2020-09-24T10:30",
#     "endTime": "2019-05-24T10:30",
#     "language": "english",
#     "emoji": "replace",
#     "settings": {
#         "digit": false,
#         "punctuation": false,
#         "ulrs": false,
#         "lowercase": false,
#         "diacritics": false,
#         "whitespace": false,
#         "fillna": true,
#         "stemming": false,
#         "Name": false
#     }
# }