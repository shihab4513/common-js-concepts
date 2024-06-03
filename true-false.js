/*
Truthy:
1.true
2.any number (+ve,-ve) will be true except 0
3.Any string will be true except empty string
4. '0'
5.'false'
6.{} empty or not empty in any case object will be true
7. [] empty array will give true output,not empty will also give true
Falsy:
1.false
2.0
3.('') empty string
4.undefined
5.null
*/

// const x=-4;
let x = null;
if (x) {
    console.log('value of x is true');
}
else {
    console.log('value of x is false');
}
// optional
// check falsy
const y = '';
if (!y) {
    console.log('value is falsy');
}

// check truthy

const z = 'false';
if (!!z) {
    console.log('value is truthy');
}
