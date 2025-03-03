'''
import math
math.floor(-3.5) # closest left int val
math.trunc(-2.7) # closest int val to 0

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

import random as rdm

print(dir(rdm))

for item in dir(rdm):
    print(item)

print(__name__)

if __name__ == "__main__":
    # do something
    pass
