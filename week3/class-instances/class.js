module.exports = class Instance{
    constructor(num = 'Hello World'){
        this.num = num
    }

    Func(){
        if(typeof this.num === "number") {
            if(this.num % 3 == 0 && this.num % 7 == 0){
                return "Good Evening"
            }
            else {
                if(this.num % 3 == 0){
                    return "Good Morning"
                }
                else if(this.num % 7 == 0){
                    return "Good Afternoon"
                }
                else{
                    return String(this.num) 
                }
            }
        }
        else{
            return 'Please enter a number.'
        }
    } 
}