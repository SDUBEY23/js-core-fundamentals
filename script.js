/* console.log('start');

setTimeout(function cb(){
    console.log("callback");
},5000);

console.log("End"); */

/* let a=['one','two','three'];
a[100]='four';
console.log(a.length); */

function pingMe(msg, myPingFunction){
    myPingFunction();
}

pingMe('msg', function(){
    console.log('I pinged you');
});