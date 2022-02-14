const User = require('./user')

const user1 = new User("Marie", 34, 11, 9)
const user2 = new User("Zach", 76, 23, 1)

console.log('Begin User1: ')
user1.num1 = user1.strDataType(user1.num1)
user1.num2 = user1.strDataType(user1.num2)
console.log(user1.userData())
console.log(user1.add())
console.log(user1.sub())
console.log(user1.mul())
console.log(user1.div())

// --------------------------------------

console.log('Begin User2: ')
user2.num1 = user2.strDataType(user2.num1)
user2.num2 = user2.strDataType(user2.num2)
console.log(user2.userData())
console.log(user2.add())
console.log(user2.sub())
console.log(user2.mul())
console.log(user2.div())