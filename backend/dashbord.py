from tools import run
from threading import Thread
from flask import request, abort
from textblob import TextBlob
import pandas as pd
from uuid import uuid4
from os import path
from collections import Counter
import pickle


