const expect = require('chai').expect
const calculator = require('../calculator') // Call calculator

// Return an error if passed anything other than a number
// failing test
// passing test
// refactor

it('add fail', function (){
    expect(calculator('add', 2, 3).to.equal(3))
})
it('add pass', function (){
    expect(calculator('add', 2, 3).to.equal(5))
})

it('sub fail', function (){
    expect(calculator('sub', 12, 7).to.equal(7))
})
it('sub pass', function (){
    expect(calculator('sub', 12, 7).to.equal(5))
})

it('mul fail', function (){
    expect(calculator('mul', 5, 5).to.equal(10))
})
it('mul pass', function (){
    expect(calculator('mul', 5, 5).to.equal(25))
})

it('div fail', function (){
    expect(calculator('div', 5, 5).to.equal(10))
})
it('div pass', function (){
    expect(calculator('div', 5, 5).to.equal(1))
})


it('div fail', function (){
    expect(calculator('div', "cheese", 5).to.equal("Welcome to error city!"))
})
it('div pass', function (){
    expect(calculator('sub', 5, "golf").to.equal("Welcome to error city!"))
})