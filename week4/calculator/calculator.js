module.exports = function calculator(arg, num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        if(arg === "add"){
            return num1 + num2
        }
        if(arg === "sub"){
            return num1 - num2
        }
        if(arg === "mul"){
            return num1 * num2
        }
        if(arg === "div"){
            return num1 / num2
        }
    } else {
        return "Welcome to error city!"
    }
}