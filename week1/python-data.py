# Your goal for this assignment is to be able to achieve the following using a single function.

# Get “1” to print when passed a 1
# Get “2” to print when passed a 2
# Get “Pepsi” to print when passed a 3
# Get “Coke” to print when passed a 5
# After completing this part of the assignment, look at the code you wrote during steps 3 & 4 and modify it so that your code is able to achieve the following:

# Get “Pepsi” when passed a 6 (a multiple of 3)
# Get “Coke” when passed a 10 (a multiple of 5)
# Get “PepsiCoke” when passed a 15 (a multiple of 3 and 5)

def single(num):
    if (num % 3)== 0 and (num % 5)== 0:
        return 'PepsiCoke'
    else:
        if num == 1:
            return 1
        elif num == 2:
            return 2
        elif (num % 3) == 0:
            return 'Pepsi'
        elif (num % 5) == 0:
            return'Coke'


num = int(input('Enter a number: '))
print(single(num))