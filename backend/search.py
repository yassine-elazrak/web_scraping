
import typing
import twint


class Search:
    def __init__(self, keys:List[], startTime:str, endTime :str, limitTweet:int , outFile:str) --> None:
        self.configue = twint.Config()
        self.configue.Search = keys                                                    #keys Search or tagets search in twitter
        self.configue.Since = startTime                                                # date start Search minum 2006
        self.configue.until = endTime                                                  # date end search maxum date new
        self.configue.Store_csv = True                                                 # type file storage csv
        self.configue.Hide_output = True                                               # hiding or ignore output stdout
        self.configue.Output = outFile                                                 # name file the stroge 
        if limitTweet >= 0:                                                            # if limitTweet < 0 mean maxum tweet else number tweet == limitTweet
            self.configue.Limit = limitTweet                                           
    def search(self)--> None:                                                                  
        twint.run.Search(self.configue)                                                #run configuration 
        





