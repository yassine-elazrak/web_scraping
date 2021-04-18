import pandas as pd
import re
import emoji
import string
import demoji
from deep_translator import GoogleTranslator
from nltk.stem import  PorterStemmer

class CleanSteing:
    def __init__(self, *args):
        self.kwargs = args
        self.translator = GoogleTranslator(source='auto', target=target)

    def translate(self,text):
        return self.translator.translate(text)

    def Emoji(self, target, text):
        if target == 'stay':
            return text
        elif target == 'remove':
            text_new = re.sub(emoji.get_emoji_regexp(),'', text)
        else:
            text_new =demoji.replace_with_desc(text).replace(':',' ')
        return text_new

    def punctuation(self, target, text):
        if target:
            return text.translate(str.maketrans("","",string.punctuation))
        return text

    def ulrs(self, target, text):
        if target:
            return re.sub(r'http\S+','',text)
        return text

    def whitespace(self , target, text):
        if target:
            return text.strip()
        return text

    def cleanString(self, text, **kwargs):
        strs = text.split()
        if kwargs['name']:
            strs = filter(lambda word: word and word[0] != '@')
        if kwargs['digit']:
            strs = filter(lambda text : text and text.isalpha()  ,strs)
        if kwargs['lowercase']:
            strs = map(lambda text : text.lowercase(), strs)
        if kwargs['stemming']:
            strs = map(lambda text : PorterStemmer().stem(text),strs)
    



