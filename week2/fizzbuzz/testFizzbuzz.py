import pytest


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
    