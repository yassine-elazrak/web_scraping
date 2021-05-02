from textblob import TextBlob
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
from collections import Counter
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
# import matplotlib.pyplot as plt
import numpy as np
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation
from collections import Counter
from math import sqrt
from kneed import KneeLocator




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
    # fig = plt.figure(figsize=(8,5))
    dictt = Counter(df['sentiment'])
    # Counter(df['language'])
    # 

    # df.to_csv('./tweet.csv')
    
    # print(**Counter(df['language']))
    # print(dictt)
    # print(df.columns)
    # print(df['place'].head(100))
    # plt.pie(dictt.values(),labels=dictt.keys())
    # plt.show()
    return df
# analyzeSentiment(df)


def topic(df, n):
    cv = CountVectorizer(max_df=0.95, min_df=2, stop_words='english')
    LDA = LatentDirichletAllocation(n_components=n)
    dtm = cv.fit_transform(df['tweet'])
    LDA.fit(dtm)
    res = {index: {'title': None, 'words': None} for index in range(n)}

    for index, topic in enumerate(LDA.components_):
        res[index]['title'] = f'THE TOP 100 WORDS FOR TOPIC #{index + 1}'
        res[index]['words'] = [cv.get_feature_names()[i]
                              for i in topic.argsort()[-100:]]
    with open('topics', 'wb') as fd:
        # print('------------tpics file------------\n\n\n\n\n')
        pickle.dump(res , fd)
    topic_results = LDA.transform(dtm)
    df['topic'] = topic_results.argmax(axis=1)
    return df

def cluster(df):
    # df = pd.read_csv('./tweet.csv')
    vectorizer = TfidfVectorizer(analyzer='word', 
                              token_pattern=r'\b[a-zA-Z]{3,}\b',
                              ngram_range=(1, 1) 
                              )  
    data = vectorizer.fit_transform(df['tweet']).toarray()
  
    pca = PCA(n_components=2)
    p = pca.fit_transform(data)
    df['pcax'] = list(map(lambda x:x[0],p))
    df['pcay'] = list(map(lambda x:x[1],p))

    # calculating the within clusters sum-of-squares for 19 cluster amounts
    # sum_of_squares = calculate_wcss(data)
    
    # calculating the optimal number of clusters
    # n = optimal_number_of_clusters(sum_of_squares)
    # print('keamns--------->',n,'\n\n\n')
    # kmeans = KMeans(n_clusters=n).fit(data)
    # df['kmeans'] = list(kmeans.labels_)
    # df.to_csv('./tweet.csv')
    df , n = testk(df , data)
    return df,n
def testk(df, data):
    kmeans_kwargs = {
      "init": "random",
       "n_init": 10,
       "max_iter": 500,
       "random_state": 42, }

    sse = []
    for k in range(1, 9):
        kmeans = KMeans(n_clusters=k, **kmeans_kwargs)
        kmeans.fit(data)
        sse.append(kmeans.inertia_)
    kl = KneeLocator(range(1, 9), sse, curve="convex", direction="decreasing")
    n  = kl.elbow
    kmeans = KMeans(n_clusters=n).fit(data)
    df['kmeans'] = list(kmeans.labels_)
    return df , n
    # print('-----\n\n\n', kmeans.labels_,p) 

def calculate_wcss(data):
        wcss = []
        for n in range(1, 8):
            kmeans = KMeans(n_clusters=n)
            kmeans.fit(X=data)
            wcss.append(kmeans.inertia_)
    
        return wcss

def optimal_number_of_clusters(wcss):####https://jtemporal.com/kmeans-and-elbow-method/
    x1, y1 = 2, wcss[0]
    x2, y2 = 7, wcss[len(wcss)-1]

    distances = []
    for i in range(len(wcss)):
        x0 = i+2
        y0 = wcss[i]
        numerator = abs((y2-y1)*x0 - (x2-x1)*y0 + x2*y1 - y2*x1)
        denominator = sqrt((y2 - y1)**2 + (x2 - x1)**2)
        distances.append(numerator/denominator)
    return distances.index(max(distances)) + 2






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

