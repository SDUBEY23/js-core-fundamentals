let person={
    firstname:'Swapnil',
    lastname:'Dubey',
}

let printFullName = function(hometown, state){
    console.log(this.firstname + ' ' + this.lastname + ' from ' + hometown + ',' + state);
}

printFullName.call(person, 'Bareilly', 'UP');

let name2={
    firstname:"Akash",
    lastname:'Tiwari'
}
// call Method- first argument points to the function
printFullName.call(name2,'Lucknow','UP');

// apply method- only difference is arguments are passed as a list
printFullName.apply(name2, ['Lucknow','UP']);

/* bind method- it returns a function(copy of the function which can be invoked later)
 which can be called later */
let printMyName = printFullName.bind(name2,'Lucknow','UP')
console.log(printMyName);
printMyName();