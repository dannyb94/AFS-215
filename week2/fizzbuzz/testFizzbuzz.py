import pytest

# def single(num):
#     if (num % 3)== 0 and (num % 5)== 0:
#         return 'PepsiCoke'
#     else:
#         if num == 1:
#             return 1
#         elif num == 2:
#             return 2
#         elif (num % 3) == 0:
#             return 'Pepsi'
#         elif (num % 5) == 0:
#             return'Coke'


# num = int(input('Enter a number: '))
# print(single(num))

    
def single(x):
    if (x % 3) == 0 and (x % 5) == 0:
        return 'PepsiCoke'
    else:
        if x == 1:
            return 1
        elif x == 2:
            return 2
        elif (x % 3) == 0:
            return 'Pepsi'
        elif (x % 5) == 0:
            return 'Coke'

def test_run():
    assert single(1) == 1
    assert single(2) == 2
    assert single(3) == 'Pepsi'
    assert single(5) == 'Coke'
    assert single(15) == 'PepsiCoke'
    