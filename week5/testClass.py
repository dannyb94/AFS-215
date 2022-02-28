# Create a class and create functions that can accomplish the following:

# Place a string into a list
# Search the list for a single instance of a string
# Evaluate all items in the list
# Hint: creating a state within your class using def __init__ can make your list easier to manage.

# You will need to use pytest.fixure at some point in your development. Be sure comment out the original code and write the new code beneath it. Show how you refactored from the original code you wrote.Ω
import pytest

class shopping:
    def __init__(self):
        self.groceryList = []
        self.count = 0

    def newItem(self, item):
        self.groceryList.append(item)
        self.count += 1
        return self.groceryList

    def search(self, item):
        i = 0
        while(i < self.count):
            if(self.groceryList[i] == item):
                return (item, "Check!")
            else:
                i += 1
        return (item, "Not on the list.")

    def printStore(self):
        return self.groceryList
        
# a = shopping()
# print(a.groceryList)

# a.newItem('eggs')
# a.newItem('flour')
# a.newItem('chicken')
# a.newItem('peppers')
# print(a.groceryList)

# print(a.search('peppers'))
# print(a.search('bread'))

@pytest.fixture
def store():
    test = shopping()
    return test

@pytest.fixture
def startList(store):
    store.newItem('eggs')
    store.newItem('flour')
    store.newItem('chicken')
    store.newItem('peppers')
    return store

def testAdded(store):
    assert store.newItem('eggs') == ['eggs']
    assert store.newItem('flour') == ['eggs', 'flour']
    assert store.newItem('chicken') == ['eggs', 'flour', 'chicken']
    assert store.newItem('peppers') == ['eggs', 'flour', 'chicken', 'peppers']

def testPrintList(store):
    store.printStore()

def testSearch(startList):
    assert startList.search('chicken') == ('chicken', "Check!")
    assert startList.search('lemons') == ('lemons', "Not on the list.")