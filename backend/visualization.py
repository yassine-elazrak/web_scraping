from textblob import TextBlob
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
from collections import Counter
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('./tweet.csv')

def sentiment(text):
    result = TextBlob(text)
    if result.polarity > 0.0:
        return 'positve'
    elif  result.polarity == 0.0:
        return 'neutral'
    else:
        return 'negative'

def analyzeSentiment(df):
    df['sentiment'] = df['tweet'].apply(sentiment)
    fig = plt.figure(figsize=(8,5))
    dictt = Counter(df['sentiment'])
    # Counter(df['language'])
    # 

    df.to_csv('./tweet.csv')
    # print(**Counter(df['language']))
    print(dictt)
    # plt.pie(dictt.values(),labels=dictt.keys())
    # plt.show()
analyzeSentiment(df)

def cluster(df):
    vectorizer = TfidfVectorizer(analyzer='word', 
                              token_pattern=r'\b[a-zA-Z]{3,}\b',
                              ngram_range=(1, 1) 
                              )  
    data = vectorizer.fit_transform(df['tweet']).toarray()
    print(data)
    pca = PCA(n_components=2)
    p = pca.fit_transform(data)
    print('---------------------\n\n\n')
    print(p)
    kmeans = KMeans(n_clusters=3).fit(data)
    print('-----\n\n\n', kmeans.labels_)  

# cluster(df) 




def test(df):
    keys = list(set(df['language']))
    positive, negative, neutral = {} , {} ,{}
    for key in keys:
        positive[key]=0
        negative[key]=0
        neutral[key]=0
    for l, s in zip(df['language'], df['sentiment']):
        if s == 'positve':
            positive[l] += 1
        elif s == 'negative':
            negative[l] +=1
        else:
            neutral[l]+=1
    res = {}
    res['keys'] = keys
    res['positive'] = list(positive.values())
    res['negative'] = list(negative.values())
    res['neutral'] = list(neutral.values())
    print(res )
    

    print(positive, negative , neutral, sep='\n----\n')


# test(df)

