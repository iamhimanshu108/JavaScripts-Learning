// LEC_03 loops and String
// -------------- For Loop---------------
//Print 1 to 5
// for ( let i = 1; i <=5; i++){
//     console.log("Apna College"); // 5times executed
// }



// calculate sum of 1 to 5
// let sum = 0;
// for ( let i = 1; i <=15; i++){
//     sum = sum + i; 
// }
// console.log("sum =", sum);


// ---------- while-Loop ----------------

// let i = 1;
// while (i <=4) {
//     console.log("i=", i);
//     i++;
// }

// -----Do-while-Loop----
// let i = 20;
// do {
//     console.log("Himanshu");
//     i++;
// } while (i <=20);

// ------ For Of Loop ------------

// let str = "himanshu"

// for(let i of str){
//     console.log(i);
// }

// --------- For In Loop -----------used in objects

// let student = {
//     name: "Rahul",
//     age: 25,
//     cgpa: 9.5,
//     isPass: true
// }

// for (let i in student){
//     console.log(i, student[i]);
// }


// Q1 Print all numbers from 0 to 100

// for(let i=1; i <=100; i++){
//     console.log(i);
// }

// Q2 Print all even numbers from 0 to 100

// for(let num=1; num <=100; num++){
//     // if(num%2 ===0){ //even Num
//     if(num%2 !==0){ //odd Num
//         console.log(num);
//     }
// }

// Q3 Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let gameNum = 25;

// let  userNum = prompt("Guess the Game number");

// while (userNum != gameNum){
//     userNum = prompt("Guess the Game number wrong");
// }

// console.log("Congratulations u enter the right Number");


// -------- String -------------

// let str = "Hello";
// let str2 = "Himanshu"

// console.log(str.length);
// console.log(str2.length);
// console.log(str[2]);

//Template Literals

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} Rupee`

// console.log(output);

// let specialString = `This is a template literal`
// console.log(specialString);

// console.log("Himanshu\nYadav");

// Strings Methods In JS 

// let str = "   Himanshu Yadav";

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.toLowerCase());
// console.log(str.trim());


// let str = "0123456789"
// console.log(str.slice(1,6));

// Q4 

let fullname = prompt("Enter You Full NHimanshuame");

let username = "@" + fullname + fullname.length;
console.log(username);


