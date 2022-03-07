const chai = require('chai')
const expect = chai.expect

// Add an item of any data type to the array.
// Call the array.
// Remove specific items from the array.
// Search the array for a specific item. If the item exists, return true(boolean). If not, provide an error message.
// Refactor your code to implement beforeEach to make your code DRY. Also implement at least one case of before, after and afterEach to show its functionality. This could be as simple as a console message, or something more complex if you prefer.

const Schedule = require('../newClass')
var newSchedule = new Schedule()

it('add item to list', () => {
	expect(newSchedule.push('clean cage')).to.deep.equal(['clean cage', 'clean cage']) 
})

it('add item to list', () => {
	expect(newSchedule.push('laundry')).to.deep.equal(['laundry', 'laundry']) 
})

it('call list', () => {
    expect(newSchedule.list).to.deep.equal(['clean cage', 'laundry']) 
})

it('remove item from list ', () => {
	expect(newSchedule.remove('clean cage')).to.deep.equal([])
})

it('search list return true ', () => {
    expect(newSchedule.search('laundry')).to.deep.equal(true)	
})

// beforeEach(() => {
// 	sched = new Schedule(['clean cage'])
// })

// before(() => {
// 	console.log('Start')
// })

// afterEach(() => {
// 	console.log('End')
// })

// after(() => {
// 	console.log('Completed')
// })