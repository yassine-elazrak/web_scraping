
import typing
import uuid
import os
import shutil

class openFolder:
    def __init__(self)->None:
        self.nameFolder = uuid.uuid1()
        self.makedirs(self.nameFolder,exit_ok=True)

    def __enter__(self)->str:
        return self.nameFolder

    def __exit__(self, exc_type, exc_value, exc_traceback)-->None:
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
    def __init__(self, startTime:str, endTime:str)-->None:
        self.startTime = int(startTime.split('-',1))
        self.endTime = int(endTime.split('-',1))

    def generator(self)-->List[]:
        for year in range(self.startTime, self.endTime):
            yield [year, year + 1, uuid.uuid1()]
        



    