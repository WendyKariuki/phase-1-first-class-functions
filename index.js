function receivesAFunction(callback) {
    callback(); 
}

function callbackFunction() {
    console.log("This is the callback function being called.");
}

receivesAFunction(callbackFunction); 

function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function.");
    }
    return namedFunction;
}
const myfunction = returnsANamedFunction();
myFunction(); 

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}
const myFunction = returnsAnAnonymousFunction(); 
myFunction(); 

