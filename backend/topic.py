import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation

df = pd.read_csv('./tweet.csv')
cv = CountVectorizer(max_df=0.95, min_df=2, stop_words='english')
LDA = LatentDirichletAllocation(n_components=7, random_state=42)
dtm = cv.fit_transform(df['tweet'])
LDA.fit(dtm)

single_topic = LDA.components_[0]
# print(single_topic.argsort())
# for index in single_topic.argsort()[-10:]:
#     print(cv.get_feature_names()[index])
# for index,topic in enumerate(LDA.components_):
#     print(f'THE TOP 15 WORDS FOR TOPIC #{index}')
#     print([cv.get_feature_names()[i] for i in topic.argsort()[-15:]])
#     print('\n')

topic_results = LDA.transform(dtm)
# print(topic_results.shape)
# print(topic_results[0].round(2))
# print(topic_results.argmax(axis=1))
# npr['Topic'] = topic_results.argmax(axis=1)
# npr.head(10)



