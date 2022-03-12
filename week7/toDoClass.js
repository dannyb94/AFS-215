module.exports = class Todo{
    constructor(list){
        this.list = list || []
    }

    add = (item) => {
        this.list.push(item)
        return this.list
    }

    addMul = (item) => {
        this.list.push(...Object.values(item))
        return this.list
    }

    remove = (item) => {
        this.list = this.list.filter((find) => find != item)
        return this.list
    }

    removeFirst = (item) => {
        this.list.shift(item)
        return this.list
    }

    removeLast = (item) => {
        this.list.pop(item)
        return this.list
    }

    search = (item) => {
        if(this.list.includes(item) === true){
            return true
        }
        else {
            return "Error. Try again."
        }
    }
}