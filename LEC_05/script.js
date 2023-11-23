// Lec 05 Function
// let msg = "Ka hal ba"
// function myFunction(msg) {
//     console.log("Himanshu Yadav");
//     console.log(msg);
// }

// myFunction(msg)

// Functio -> 2 number, sum

// function sum(a, b) {
//     sums = a + b;
//     return sums;
// }
// let val = sum(3,4);
// console.log(val);

// sum Function

// function sum(a, b){
//     return a+b;
// }

// // Multiplication

// function mul(a,b){
//     return a*b;
// }

//Arrow FFunction

// const sum = (a, b) =>{
//     console.log(a+b);
// }

// sum(5,5)
// const mul = (a, b) =>{
//     console.log(a*b);
//     // return a*b;
// }

// mul(5,5)

// const printHello = () => { 
//     console.log("Hello");
// }


// Q1 Create a function using the "function " keyword that takes  s string as an argumnets & return the number of Vowels in the strings.

// function countVowels(str){
//     let count = 0;

//     for(const char of str){
//         if(char === "a" || char ==="e"|| char ==="i"|| char ==="o"|| char ==="u" ){
//             count++;
//         }
//     }
//     return count;
// }


//Q2 Create an Arrow function to perform same task

// const countVow =(str) => {
//     let count = 0;

//    for(const char of str){
//        if(char === "a" || char ==="e"|| char ==="i"|| char ==="o"|| char ==="u" ){
//             count++;
//         }
//     }
//     return count;
// }

// function abc(){
//     console.log("Hello");
// }

// function myfun(abc){
//     return abc;
// }

// let arr = [1,2,3,4,5,6,7,8,9]

// arr.forEach(function printVal(val){
//     console.log(val);
// })


//Q3 For  a given aaray of number , print the square of each value using the forEachloop.

//For Each

// let nums  = [1,2,4,5,85,65,97,32,54]

// nums.forEach((num) =>{
//     console.log(num *num);
// })

//MAp

// let nums  = [1,2,4,5,85,65,97,32,54]

// let newArr = nums.map((val) =>{
//     return val *2;
// })

// console.log(newArr);

// Filter

// let nums  = [1,2,4,5,85,65,97,32,54]

// let newArr = nums.filter((val) =>{
//     // return val%2 ===0;
//     // return val > 10;
//     return val < 10;
// })

// console.log(newArr);

// Reduce

// let arr  = [1,2,4,5,85]

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// })

// console.log(output);

// Q we are given array of marks of students. filter out the marks of students that scored 90+

// let marks = [97, 25, 96, 92, 86]

// let stu = marks.filter((val) => {
//     return val >90;
// })

// console.log(stu);



//Q 

// Ans:-

let n = prompt("Enter the Number: ");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((res ,curr) => {
    return res+curr;
})

console.log(sum);