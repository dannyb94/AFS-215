// Create a Todo list that can accomplish the following:

// Call the list   DONE
// Add an item to the list   DONE
// Add multiple items to the list   DONE
// Remove the first item from the list   DONE
// Remove the last item from the list   DONE
// Remove a specific item from the list   DONE
// If attempting the JavaScript version of this project use beforeEach.   DONE
// You will want to use at least one of each of the following data types to your list: String, Number, Object / Dictionary, and Boolean

const chai = require('chai')
const expect = chai.expect

const Todo = require('../toDoClass')
// var newTodo = new Todo()

it('add to list', () => {
	expect(newTodo.add('finish capstone')).to.deep.equal(['finish capstone', false, 2064, {store: 'mushrooms'}, 'finish capstone']) 
})

it('add to list', () => {
	expect(newTodo.add(false)).to.deep.equal(['finish capstone', false, 2064, {store: 'mushrooms'}, false]) 
})

it('add to list', () => {
	expect(newTodo.add(2064)).to.deep.equal(['finish capstone', false, 2064, {store: 'mushrooms'}, 2064]) 
})

it('add to list', () => {
	expect(newTodo.add({store: 'mushrooms'})).to.deep.equal(['finish capstone', false, 2064, {store: 'mushrooms'}, {store: 'mushrooms'}]) 
})

it('call the list', () => {
	expect(newTodo.list).to.deep.equal(['finish capstone', false, 2064, {store: 'mushrooms'}]) 
})

it('search list and return true ', () => {
	expect(newTodo.search(false)).to.deep.equal(true)		
})

it('remove item from list ', () => {
	expect(newTodo.remove('finish capstone')).to.deep.equal([false, 2064, {store: 'mushrooms'}]) 
})

it('remove first item from list ', () => {
	expect(newTodo.removeFirst(false)).to.deep.equal([false, 2064, {store: 'mushrooms'}]) 
})

it('remove last item from list ', () => {
	expect(newTodo.removeLast({store: 'mushrooms'})).to.deep.equal(['finish capstone', false, 2064]) 
})

beforeEach(function(){
	newTodo = new Todo(['finish capstone', false, 2064, {store: 'mushrooms'}])
})

before(() => {
	console.log('Begin')
})

afterEach(() => {
	console.log('End')
})

after(() => {
	console.log('Completed')
})