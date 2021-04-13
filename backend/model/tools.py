
import uuid
import os
import shutil
from typing import *

class Store:
    def __init__(self):
        pass


class openFolder:
    def __init__(self)->None:
        self.nameFolder = uuid.uuid1()
        self.makedirs(self.nameFolder,exit_ok=True)

    def __enter__(self)->str:
        return self.nameFolder

    def __exit__(self, exc_type, exc_value, exc_traceback)->None:
            pass
        # shutil.rmtree(self.nameFolder)
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
class generatorData:
    def __init__(self, startTime:str, endTime:str)->None:
        self.startTime = int(startTime.split('-')[0])
        self.endTime = int(endTime.split('-')[0])

    def generator(self)->List[str]:
        for year in range(self.startTime, self.endTime + 1):
            yield year
            yield year+1
            # [str(year), str(year + 1), str(uuid.uuid1() + ".csv")]
        



for data in generatorData("2010-09-24T10:30" , "2020-09-24T10:30").generator():
    print(data,"==>")