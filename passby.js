let num1 = 5, num2 = 7;

function multiply(a, b) {
    a = 7;
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
console.log(output);
console.log(num1);

let student1 = { name: 'Shihab Uddin', partner: 'Simone Zimmerman' };
let student2 = { name: 'Aylan', partner: 'Hind' };

function makeMovie(couple1, couple2) {
    couple1.partner = 'Sorna akand';
}
console.log(student1.partner);
makeMovie(student1, student2);
// Although num1 didnt change after running the function but in case of object if you change something inside function the change will show outside of the function as well .
console.log(student1.partner);
/*
basically if variable is primitive data-type if change the value inside function outside of the function there will be no effect whatsoever but if variable has non-primitive data-type then
if you change something inside function change will happen outside of the function as well.
So object and array are pass-by reference
*/