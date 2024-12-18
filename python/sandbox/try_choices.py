import random

# @link: https://docs.python.org/3/library/random.html#random.choices
# some good function, just what i needed
[ch] = random.choices(["first", "second"], [0.3, 1])

print(ch)
