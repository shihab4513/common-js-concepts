/*
There are two type of language . one is static like c++,java etc where i have to write down the type of variable
like int a=5,float b=12.5;
There is also dynamic language like javascript where i dont have to tell which type of variable it is. like a=5,b=3.15
*/

//JS is dynamic type language 


// primitive type of variable
const a = 5, b = "kopa samso", d = true;
// non-primitive type of variable. non-primitive means we can store multiple value 
const ages = [45, 65, 38], student = { id: 23, class: 7 };
console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);
let x = 5, y = x;
console.log(`${x} , ${y}`);

let p = {
    job: `web developer`
};
let q = p;
q.job = `front-end developer`;


console.log(p, q);