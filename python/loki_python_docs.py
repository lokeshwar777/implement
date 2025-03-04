from math import pi

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

# string formatting
user = "loki"
money = 777
s = "\n%s has %s money left" % (user, money)
s = "\n{} has {} money left".format(user, money)
s = "\n{1} has {0} money left".format(money, user)
person = {"user": "loki", "money": 777}
s = "\n{user} has {money} money left".format(money=money, user=user)
s = "\n{user} has {money} money left".format(**person)
s = f"\n{user.upper()} has {7*111} money left"
s = f"\n{person['user']} has {money} money left"
s = f"\nThe value of PI is {pi:.7f}"  # f stands for fixed
s = f"\nThe value of PI is {pi:.7%}"  # % is same as f

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
l.index(element)
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
s1.update(s2)
s1.union(s2)
s1.update(s2)
s1.intersection_update(s2)
s1.symmetric_difference_update(s2)
s1 & s2
s1 | s2
s1 - s2

# dictionary methods
dict(key1="value1", key2="value2")
d1.get()
d1.keys()
d1.values()
d1.items()
d1.update({"key": "value"}) or d1["key"] = "value"
d1.pop("key") or del d1[key]
d1.popitem()  # remove last added entry and returns a tuple
d1.copy()
d1.clear()
for key in dict1:
    print(d1[key])  # for printing values
d1 = {x: x**2 for x in range(10)}
d1 = dict.fromkeys(keysArray, valuesArray)

# file methods
f = open('fileName.py')
f.read()  # default all characters, error if file doesn't exist
f.read(characterCount)
f.readLine()  # reads line until \n is found and returns '' if not found
f.readLines()
f.__next__()  # raw method

# readings contents of a file
# Using for loop
for line in f:
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
    print(kwargs)  # dictionary
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

# higher order functions


def squareLambda(num): return num * num


squares = map(lambda num: num*num, list1)
odd_nums = filter(lambda num: num % 2 == 1, list1)

# from functools import reduce
total = reduce(lambda acc, curr: acc+curr, list1)
