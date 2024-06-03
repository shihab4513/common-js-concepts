/*
There are 8 ways we can get undefined
1. Variable that is not initialized  will give undefined
2. Function with no return
3. parameter that is not passed will be undefined
4. If return has nothing in the right side will return undefined
5. If a property doesnt exist on object.and if you want to print that property it will give undefined output
6. Accessing array element outside of index range will give undefined .
7. Deleting an element inside array

*/

let first;

console.log(first);

function second(a, b) {
    console.log(a, b);
    const total = a + b;
}
console.log('**************');
const result = second();
console.log(result);

console.log('**************');

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = noNegative(2, -5);
console.log(total);

console.log('**************');

const fifth = {
    id: 2,
    name: 'Al Fatah',
    age: 40
}
console.log(fifth.age, fifth.salary);
console.log('**************');
const sixth = [1, 5, 8, 9, 7];

console.log(sixth[1], sixth[5], sixth[200]);


const eight = null;
console.log(eight);




