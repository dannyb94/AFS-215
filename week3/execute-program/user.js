module.exports = class User {
    constructor(userName = "Jacob", userAge = 25, num1, num2){
        this.userName = userName,
        this.userAge = userAge,
        this.num1 = num1,
        this.num2 = num2
    }

    add(){
        return this.num1 + this.num2
    }

    sub(){
        return this.num1 - this.num2
    }

    mul(){
        return this.num1 * this.num2
    }

    div(){
        return this.num1 / this.num2
    }

    userData = () => {
        return `Hi ${this.userName}. You are ${this.userAge} years old.`
    }

    // dataType = (arg) => {
    //     return `${arg} is a ${typeof(arg)}.`
    // }

    strDataType = (nums) => {
        let change = String(nums)
        return change
    }
}