let person={
    firstname:"Swapnil",
    lastname:"Dubey"
}

let printName = function(hometown, state, country){
    console.log(this.firstname + ' ' + this.lastname + ' , '+ hometown+ ", "+state+" , "+ country);
}

let printMyname = printName.bind(person, "Bareilly");
printMyname("UP", "India");


Function.prototype.myBind = function(...args){
    let obj = this; // this points to printName function
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]); // conatinates to a larger array
    }
}


let printMyname2 = printName.myBind(person, "Bareilly");
printMyname2("UP", "India");


