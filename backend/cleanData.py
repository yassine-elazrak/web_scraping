import pandas as pd
import re
import emoji
import string
import demoji
from deep_translator import GoogleTranslator
from nltk.stem import PorterStemmer
import pandas as pd
from deep_translator import exceptions as excp

defaultSettings = {
    'digit': True,
    'punctuation': True,
    'ulrs': True,
    'lowercase': True,
    'diacritics': True,
    'whitespace': True,
    'fillna': True,
    'stemming': True,
    'Name': True,
}
dataDefault = {
    'startTime': '2020-05-24T10:30',
    'endTime': '2019-05-24T10:30',
    'language': 'en',
    'emoji': 'replace',
    'settings': defaultSettings,
}
# ["en" , "fr" , "ar"]


class Clean:
    def __init__(self,file ,args):
        self.df = pd.read_csv(file)
        self.kwargs = args
        self.stemmer = PorterStemmer()
        self.translator = GoogleTranslator(
            source='auto', target=args['language'])
        self.df['cleanTweet'] = self.df['tweet'].apply(self.execute)
        self.df.to_csv(file)

    def translate(self, text):
        # return self.translator.translate(text if len(text) < 5000 else text[:4998])
        # try:
        #     v = text
        #     # if len(text) < 5000:
        #     v = self.translator.translate(text)
        #     #     v=  self.translator.translate(text[:4999]
        # except :
        #     v = text
        return text
        # return text

    def Emoji(self, text):
        if self.kwargs['emoji'] == 'stay':
            return text
        elif self.kwargs['emoji'] == 'remove':
            text_new = re.sub(emoji.get_emoji_regexp(), '', text)
        else:
            text_new = demoji.replace_with_desc(text).replace(':', ' ')
        return text_new

    def punctuation(self, text):
        if self.kwargs['settings']['punctuation']:
            return text.translate(str.maketrans("", "", string.punctuation))
        return text

    def ulrs(self, text):
        if self.kwargs['settings']['ulrs']:
            return re.sub(r'http\S+', '', text)
        return text

    def whitespace(self, text):
        if self.kwargs['settings']['whitespace']:
            return text.strip()
        return text

    def cleanString(self, text):
        if text is None or text == "":
            return ""
        strs = text.split()
        if self.kwargs['settings']['Name']:
            strs = filter(lambda word: word and word[0] != '@', strs)
        if self.kwargs['settings']['digit']:
            strs = filter(lambda text: text and text.isalpha(), strs)
        if self.kwargs['settings']['lowercase']:
            strs = map(lambda text: text.lower(), strs)
        strs = filter(lambda word: len(word) > 2, strs)
        return ' '.join(strs)

    def stemming(self, text):
        if self.kwargs['settings']['stemming']:
            strs = map(lambda word: self.stemmer.stem(word), text.split())
            return ' '.join(strs)
        return text

    def execute(self, text):
        text = self.ulrs(text)
        text = self.Emoji(text)
        text = self.punctuation(text)
        text = self.whitespace(text)
        text = self.cleanString(text)
        text = self.translate(text)
        text = self.stemming(text)
        return text


# def test():
#     clean = Clean(dataDefault)


# if __name__ == '__main__':
#     test()
