# Notes

1. Installation and General
    - anaconda, mini conda
    - x < y < z is equivalent to x < y and y < z
    - type({}) → <class 'dict'>
    - empty set → set()
    - True is 1 , False == 0
    - escape sequences
    - range(x) → 0,1,2,...,x-1
    - == checks value, is → checks reference

2. Inner Working
    - byte code (platform independent and python specific) -> .pyc -> complied python (frozen binaries) - (__pychache__) - works only for imported files
    - __something__ -> for python internal usage
    - PVM - Python Virtual Machine - runtime engine
    - byte code != machine code
    - cpython - standard implementation
    - garbage collection for int and strings is performed a bit late
    - in python types are assigned to objects(values) instead of variables unlike any other language

3. python shell -
    - AttributeError -
    - variables are also called attributes
    - everything in python is an object
    - meant for testing and to get clarity for confusions

4. Immutable and mutable
    - Mutable - list, dictionary
   - Immutable - string(new reference is created), tuple
    - interpretation of variables and assignments
    - not var,let or const but it is all about reference to the memory

5. Object or Data Types
    - Number : 1234, 3.1415, 3+4j, 0b111, Decimal(), Fraction()
    - String : 'spam', "Bob's", b'a\x01c', u'sp\xc4m'
    - List : [1, [2, 'three'], 4.5], list(range(10))
    - Tuple : (1, 'spam', 4, 'U'), tuple('spam'), namedtuple
    - Dictionary : {'food': 'spam', 'taste': 'yum'}, dict(hours=10)
    - Set : set('abc'), {'a', 'b', 'c'}
    - File : open('eggs.txt'), open(r'C:\ham.bin', 'wb')
    - Boolean : True, False
    - None : None
    - Funtions, modules, classes
    - Advance: Decorators, Generators, Iterators, MetaProgramming

6. Numbers
    - 2 + 7j → complex or imaginary numbers
    - 0o20 → Octal, 0xFF → Hexal, 0b1000 → binary
    - oct(64), bin(64), hex(64), int('1000', 2)
    - precision is more important(parenthesis) than knowing operator precedence
    - python has infinite number handling capability
    - number precision is infinite

7. String
    - repr vs str vs print
    - {} is placeholder

8. Lists
    - l1=[1,2,3] # l1 is pointed to newly created object
    - l2=l1(reference) vs l2=l1[:](copy)
    - list1 = list2 → reference
      list1 = list2[:] → copy
    - list1[1:2] = “StringName” → adds 'S','t','r',…. at 1 index
      but this works list[1:2] = [”StringName”]
    - list1[1:1] # returns empty array []
    - list comprehension → [x**2 for x in range(10)]

9. Tuple
    - Comma separated values
    - packing
    - (var1, var2, var3) = tuple1 # tuple unwrapping or unpacking

10. Functions
    - when there is no return for a function → None is returned

11. Dictionary

12. Iteration tools
    - files
    - iterable objects
    - just for understanding -> iteration tool(for, comprehension,map) — iter() —> iterable objects (point to the starting point in lists, file) using __next__ , next()
    - iteratable → file, dictionary, range
    - file becomes an iterable object if it is stored in a variable and a reference is given to it

13. Functions
    - lambda / anonymous functions
    - similar to arrow function in js but cannot be reassigned
    - calculateCube = lambda x: x ** 3
    - multiple arguments → *args
    - keyword arguments → **kwargs
    - yield

14. scope
    - new scope is created for every indendation
    - checks for the variable from local scope to global scope
    - closure or factory functions - Bag thoery

15. OOP
    - classes, objects, methods and self
    - self is used for linking
    - self is not required for class attributes and methods
    - inheritance (single, multiple)
    - encapsulation - getter, setter
    - polymorphism
    - class variables
    - static methods can't be accessed using objects and do not require self as arguments
    - property decorator prevents overriding
    - if you are able to access attributes, you can also overwrite them
    - instance

16. decorators
    - similar to middlewares in js
    - starts with '@'

17. API
    - requests module
    - response -> string

18. virtual environment

19. anaconda and jupyter notebook
    - comes with its own python version
    - starts a venv with base
    - conda active, deactivate
    - use pip or conda, not both
    -

20. FastAPI
    - uvicorn+fastapi = express.js

21. Dependency Injection
    - Object (creation (dependency) + usage (injection))

## venv

"venv is just about scoped environments. No side effects, no lock-in. Create, use, delete. Clean and simple."

``` python3
python -m venv venv         # Create isolated env
source venv/bin/activate    # Use it
pip install ...             # Install only inside this env
deactivate                  # Exit
rm -rf venv                 # Delete it if needed
```
