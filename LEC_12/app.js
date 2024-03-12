// console.log("one");
// console.log("Two");
// console.log("Three");

/* Method 1

function hello() {
    console.log("Hello");
}

setTimeout(hello, 5000);
*/


// method 2

setTimeout(()=>{
    console.log("Hello");
}, 5000);
