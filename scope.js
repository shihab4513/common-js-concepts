
function add(a, b) {
    // if we give var inback of any variable it will be initialize in top .Thats why its scope increases .It is called hoisting

    const total = a + b;
    if (a > b) {
        // const sum=a+b;
        // Interesting thing here is if i use const i cant access sum variable outside {} but if i use var i can access that
        var sum = a + b;
    }
    console.log(sum);
}
add(1, 5);
// console.log(sum);
// console.log(total);