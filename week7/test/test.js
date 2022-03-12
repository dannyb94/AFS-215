// Create a Todo list that can accomplish the following:

// Call the list   DONE
// Add an item to the list   DONE
// Add multiple items to the list   ERROR
// Remove the first item from the list   DONE
// Remove the last item from the list   DONE
// Remove a specific item from the list   DONE
// If attempting the JavaScript version of this project use beforeEach.   ERROR
// You will want to use at least one of each of the following data types to your list: String, Number, Object / Dictionary, and Boolean

const chai = require('chai')
const expect = chai.expect

const Todo = require('../toDoClass')
var newTodo = new Todo()

it('add to list', () => {
	expect(newTodo.add('finish capstone')).to.deep.equal(['finish capstone']) 
})

it('add multiple to list', () => {
	expect(newTodo.addMul(false, 2064, {'store': 3})).to.deep.equal(['finish capstone', false, 2064, {'store': 3}]) 
})

// it('add to list', () => {
// 	expect(newTodo.add(false)).to.deep.equal(['finish capstone', false]) 
// })

// it('add to list', () => {
// 	expect(newTodo.add(2064)).to.deep.equal(['finish capstone', false, 2064]) 
// })

// it('add to list', () => {
// 	expect(newTodo.add({store: 3})).to.deep.equal(['finish capstone', false, 2064, {store: 3}]) 
// })

// it('call the list', () => {
// 	expect(newTodo.list).to.deep.equal(['finish capstone', false, 2064, {store: 3}]) 
// })

// it('search list and return true ', () => {
// 	expect(newTodo.search(false)).to.deep.equal(true)		
// })

// it('remove item from list ', () => {
// 	expect(newTodo.remove('finish capstone')).to.deep.equal([false, 2064, {store: 3}]) 
// })

// it('remove first item from list ', () => {
// 	expect(newTodo.removeFirst(false)).to.deep.equal([2064, {store: 3}]) 
// })

// it('remove last item from list ', () => {
// 	expect(newTodo.removeLast({store: 3})).to.deep.equal([2064]) 
// })

// beforeEach(function(){
// 	newTodo = new Todo(['finish capstone', 'buy mushrooms', 'cook tofu'])
// })

// before(() => {
// 	console.log('Begin')
// })

// afterEach(() => {
// 	console.log('End')
// })

// after(() => {
// 	console.log('Completed')
// })