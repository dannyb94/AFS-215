const Instance = require('./class')

const output1 = new Instance(12).Func()
console.log(output1)
const output2 = new Instance(14).Func()
console.log(output2)
const output3 = new Instance(21).Func()
console.log(output3)
const output4 = new Instance(2).Func()
console.log(output4)
const output5 = new Instance('sup').Func()
console.log(output5)