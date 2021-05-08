let counter = 0;
function getData(){
    console.log("fetching data...", counter++);
}

const debounce = function(fn, delay){
    let timer;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const betterFunction = debounce(getData, 300);