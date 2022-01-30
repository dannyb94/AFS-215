# Create a class with an empty list(datatype) in its __init__. Within that list add at least one of each of the following data types via python functions(definitions):

# number
# string
# dictionary
# tuple

# Do not hard code these values. They should instead be added by calling on the functions within your class, outside of your class. You will need a method that belongs to the list datatype to be able to append these items to the list.

# Finally, transform the list into a tuple. You will need a method that belongs to the tuple datatype to be able to achieve this.

# Objectives

# Create a class.
# Use __init__ to hold an empty list(datatype).
# Create a function or functions that will allow you to add one of each of the following datatypes to your list: number,string,dictionary,tuple.
# Use a method that belongs to the list datatype to append items to the list.

# list [], dict {}, tuple (immutable)

class data:
    def __init__(self):
        self.info = []
    
    def append(self, datatype):
        self.info.append(datatype)
    
    def tupleUp(self, list):
        return tuple(list)


input = data()

print(input.info)

input.append(7)
input.append('Bikini Bottom')
input.append({'Sandy':'Gary'})
input.append(('Weenie', 'Hut', 'Junior'))

print(input.info)
output = input.tupleUp(input.info)
print(output)