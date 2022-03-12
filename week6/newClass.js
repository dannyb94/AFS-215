    // Add an item of any data type to the array.
// Call the array.
// Remove specific items from the array.
// Search the array for a specific item. If the item exists, return true(boolean). If not, provide an error message.
// Refactor your code to implement beforeEach to make your code DRY. Also implement at least one case of before, after and afterEach to show its functionality. This could be as simple as a console message, or something more complex if you prefer.

module.exports = class Schedule{
    // constructor(list){
    //     this.list = list || [/*'layouts', 'laundry', 'meal prep'*/]
    // }
    // push = (list) => {
    //     this.list.push(list)
    //     return this.list
    // } 

    // remove = (list) => {
    //     this.list = this.list.filter((find) => find != list) 
    //     return this.list
    // } 

    // search = (list) => {
    //     if(this.list.includes(list) === true){
    //         return true
    //     }
    //     else{
    //         return "Error. Try again."
    //     }
    // }


    constructor(){
        this.list = [/*'layouts', 'laundry', 'meal prep'*/]
    }

    push(list){
        this.list.push([])
        return this.list
    }

    remove(list){
        if(this.list.filter((find) => find != list)){
            return this.list
        }
    }

    search(list){
        if(this.list.includes(list) === true){
            return true
        }
        else {
            return "Error. Try again."
        }
    }
}