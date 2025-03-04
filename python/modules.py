'''
import math
math.floor(-3.5) # closest left int val
math.trunc(-2.7) # closest int val to 0

import os
os.getcwd()
os.getenv(env_var_name)
os.path.exits(fileName)
os.remove(fileName)

import sys
sys.exit("Some Text")
sys.platform
sys.getrefcount('loki')

import random
randome.choice("choices")

from enum import Enum

import copy
l2 = copy.copy(l1)
l2 = copy.deepcopy(l1)


from importlib import reload
reload(filename)


import time
time.sleep(wait_time)
time.time()

import copy
list1 = copy.copy(list2)

import random
random.random()  # range is 0 to 1
random.randint(1, 100)
random.choice(list1)
random.shuffle(list1)

from decimal import Decimal
0.1 + 0.1 + 0.1 - 0.3 != Decimal('0.1') + \
                                 Decimal('0.1') + Decimal('0.1') - \
                                         Decimal('0.3')

from fractions import Fraction
Fraction(2, 7) # 2 upon 7 or 2/7


import requests
response = requests.get(url)
data = response.json()


from fastapi import FastAPI, UploadFile
app = FastAPI()
@app.get('/routePath')
def routeFunc():
    return {}

@app.post('/upload')
def handleImage(files: list[UploadFile]): # needs python-multipart
    print(files)
    return {}


import uvicorn
uvicorn.run(app)


from dotenv import load_dotenv
load_dotenv()


from pprint import pprint

from flask import Flask, render_template, request
app=Falsk(__name__)
@app.route('/')
@app.route('/routeName')
def index():
    return "Response Message"

@app.route('/somePath)
def handleSomething():
    # do something
    return render_template(
        "template.html",
        key1="value1",
        key2="value2",
    )

app.run(host="127.0.0.1",port=8080)
app.run(debug=True,host="127.0.0.1",port=8080) # for development

from waitress import serve
serve(app,host="127.0.0.1",port=8080)

from flask_sqlalchemy import SQLAlchemy
db=SQLAlchemy(app)
'''

import random as rdm

print(dir(rdm))

for item in dir(rdm):
    print(item)

print(__name__)

if __name__ == "__main__":
    # do something
    pass
