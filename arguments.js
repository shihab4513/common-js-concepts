
function sum(a, b, c) {
    // If we print arguments then it will show all the arguments passed into the function 
    // arguments is array like object. we cant push into arguments
    console.log(typeof arguments);
    // we can print arguments using for loop
    for (const i of arguments) {
        console.log(i);
    }
    console.log('*****************************');
    const args = [...arguments];
    console.log(args);
    console.log('******************************');
    const result = a + b + c;
    return result;
}

const total = sum(5, 5, 5, 15, 65);
console.log('function length ', sum.length);
console.log('Sum ', total);


















