'''
import os
os.getcwd()

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

import math
math.floor(-3.5) # closest left int val
math.trunc(-2.7) # closest int val to 0

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


'''

input("Message")
type()
variableName = "some value"
isinstance(variableName, [str, int, ...])

# string methods
s = ""
len(s)
s.upper()
s.lower()
s.replace("existingStr", "newStr") or s.replace("unwanted", "wanted")
s.title()
s.strip()
s.rstrip()
s.lstrip()
s.center(777, "c")  # c - fill character
s.ljust(777, "c")
s.rjust(777, "c")
s.startswith("char")
s.endswith("char")
repr("loki") vs str("loki") vs print("loki")
s.split(", ")
s.format(var1, var2)  # stringName = " … {}  … {} … "
"-".join(list1)  # convert list to string
r"c:\user\pwd"  # raw string
"c:\\user\\pwd"  # unicode string
s.find("substring")
s.count("substring")


# float methods
score = 8.52
round(score, 1)

# complex
comp = 1+2j
comp.real
comp.imag

# list methods
l = []
list1.append(element)
l.extend([])
list1.insert(index, element) or l[777:777] = ["newval1", "newval2"]
l.remove(element)
l.pop()  # returns removed value
del l[777]
del l
l.clear()
l.sort(key=str.lower)  # lowercase comes after uppercase
sorted(l, reverse=True)  # returns a reverse sorted list
l.copy() or list(l) or l[:]  # copy of list


l = []
l += "loki" or list("someString")

# tuple methods
tup = tuple(l)  # packing
a, b, c = tup  # unpacking
tuple1.count(element)
tuple3 = tuple1 + tuple2

# set methods
s1 = {1, 2, 3}
s1 & s2
s1 | s2
s1 - s2

# dictionary methods
d1.keys()
d1.values()
d1.update({"key": "value"})

for key in dict1:
    print(d1[key])  # for printing values
for key, value in d1.items():
    print(key, value)  # for printing both keys and values
del d1[key]
d1.copy()
d1 = {x: x**2 for x in range(10)}
d1.clear()
d1 = dict.fromkeys(keysArray, valuesArray)

# file methods
f = open('fileName.py')
f.readLine()  # reads line until \n is found and returns '' if not found
f.readLines()
f.__next__()  # raw method

# readings contents of a file
# Using for loop
for line in open('fileName.py'):
    print(line, end='')
# Using while loop
f = open('fileName.py')
while True:
    line = f.readline()
    if not line:
        break
    print(line, end='')

file = open('youtube.txt', 'w')
try:
    file.write('some text')
finally:
    file.close()
# alternative for writing to a file
with open('youtube.txt', 'w') as file:
    file.write('some text')

# iterable methods
I = iter(list1)
I.__next__() or next(I)
f = open('fileName.py')
iter(f) is f  # True
iter(f) is f.__iter__()  # True
iter(list1) is list1  # False


# functions
def sum_all(*args):
    print(args)  # tuple
    for i in args:
        print(i * 2)
    return sum(args)

    print(sum_all(1, 2, 3))


def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")


print_kwargs(thor="god of thunder",
             loki="god of mischief", hela="god of death")


def even_generator(limit):
    for i in range(2, limit + 1, 2):
        yield (i)


for num in even_generator(10):
    print(num)


# scope - global variable updation
x = 77


def updateX():
    global x
    x = 7


updateX()
print(x)  # 7

# closure


def power(num):
    def actual(x):
        return x ** num
    return actual


square = power(2)
cube = power(3)

print(square(2))  # 4
print(cube(3))  # 8
