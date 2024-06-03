function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}
// Here below firseServer variable it is returning anonymous function 
const firstServer = kitchen();
// Below each time firstServer is calling anonymous function is running. since roast is out of anonymous function inside anonymous function it is working. So each time value of roast increasing by 1 
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log('*************************');
// But if we create new variable then it will be a new instance it will start with clean slate. 
const secondServer = kitchen();
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());

/*
closure is a function bundled together (enclosed) with references to its surrounding state and 
Access to an outer function’s scope from an inner function
*/