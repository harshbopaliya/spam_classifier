import pickle
import string
from nltk.corpus import stopwords
import nltk
from nltk.stem.porter import PorterStemmer


ps = PorterStemmer()


def transform_text(text):
    text = text.lower()
    text = nltk.word_tokenize(text)

    y = []
    for i in text:
        if i.isalnum():
            y.append(i)

    text = y[:]
    y.clear()

    for i in text:
        if i not in stopwords.words('english') and i not in string.punctuation:
            y.append(i)

    text = y[:]
    y.clear()

    for i in text:
        y.append(ps.stem(i))

    return " ".join(y)

def hello():
    return "Hello world"

def model(input:str):
    try:
        tfidf = pickle.load(open('./models/vectorizer.pkl','rb'))
        model = pickle.load(open('./models/model.pkl','rb'))
        transformed_sms = transform_text(input)
        vector_input = tfidf.transform([transformed_sms])
        result = model.predict(vector_input)[0]
        return result
    except Exception as e:
        print('error:', e)
        return None
        