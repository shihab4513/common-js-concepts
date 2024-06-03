print5();
// See in top it doesnt work
print10();
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// WE can see the scope of i variable increased
console.log('outside   :  ', i);
// if you declare function like below the function will hoist on the top of everyone. So it has larger scope. you can run this function anywhere
function print5() {
    console.log('inside ', 5);
}
// Below type of function will only work below this function . If you call function top of this function it will not execute . It will give error message
const print10 = function () {
    console.log('inside print ', 10);
}
// see below it works
// print10();
