/* Function currying using bind method */
let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2); // sets x=2
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3); // sets x=3
multiplyByThree(5)
// Ends here


/* Function currying by using closures */
let multiply = function (x){
    return function (y){
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(2); // sets x=2
multiplyByTwo(5)

let multiplyByThree = multiply(3); // sets x=2
multiplyByThree(5)



