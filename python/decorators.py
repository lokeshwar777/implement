# TIMING FUNCTION EXECUTION
import time


# custom decorator
def timer(func):  # definition of wrapper is returned
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} ran in {end-start} time")
        return result
    return wrapper


@timer
def example_function(n):
    time.sleep(n)


example_function(2)  # it will execute only after timer is executed


# basic decorator
def debug(func):
    def wrapper():
        return func()
    return wrapper


@debug
# some advanced
def debug(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper


@debug
# DEBUGGING FUNCTION CALLS
def debug(func):
    def wrapper(*args, **kwargs):
        args_value = ', '.join(str(arg) for arg in args)
        kwargs_value = ', '.join(
            f"{key}={value}" for key, value in kwargs.items())
        print(
            f"calling: {func.__name__} with args:{args_value} and kwargs:{kwargs_value}")
        return func(*args, **kwargs)
    return wrapper


@debug
def greet(name, role="god"):
    print(f"{name} : {role}")


greet(thor, role="god of thunder")


# CACHE RETURN VALUES - similar to memoisation

def cache(func):
    cache_values = {}
    print("cache_values:", cache_values)

    def wrapper(*args):
        if args in cache_values:
            return cache_values[args]
        result = func(*args)
        cache_values[args] = result
        return result
    return wrapper


@cache
def time_taking_sum(a, b):
    time.sleep(4)
    return a + b


print("1+2 =", time_taking_sum(1, 2))
print(time_taking_sum(3, 4))
print(time_taking_sum(1, 2))
