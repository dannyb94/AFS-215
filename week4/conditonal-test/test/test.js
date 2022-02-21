const expect = require('chai').expect

function greetings(num){
    if(typeof num === 'number'){
        if(num === 1){
            return 1
        }
        if(num === 2){
            return 2
        }
        if(num % 3 == 0){  //multiples of 3
            return "Good Morning"
        }
        if(num % 7 == 0){  //multiples of 7
            return "Good Afternoon"
        }
        if(num % 3 === 0 && num % 7 === 0){  //multiples of 3 & 7
            return "Good Evening"
        }
        else{   //neither a multiple of 3 or 7
            const str = num.toString()
            return str
        }
    }
    else {  //data type other than a number return an error message
        return "Not a valid response. Please enter a number."
    }
}

it('returns "1" when passed "1"', function (){
    expect(greetings(1).to.equal("1"))
})
it('returns "2" when passed "2"', function (){
    expect(greetings(2).to.equal("2"))
})
it('returns "Good Morning" when passed "3 or multiple thereof"', function (){
    expect(greetings(3).to.equal("3"))
})
it('returns "Good Afternoon" when passed "7 or multiple thereof"', function (){
    expect(greetings(7).to.equal("7"))
})
it('returns "Good Evening" when passed "a multiple of 3 and 7"', function (){
    expect(greetings(21).to.equal("Good Evening"))
})
it('returns "" when passed neither "a multiple of 3 and 7"', function (){
    expect(greetings(2).to.equal(""))
})
it('returns "Not a valid response. Please enter a number." when passed not "a number"', function (){
    expect(greetings(false).to.equal("Not a valid response. Please enter a number."))
})
