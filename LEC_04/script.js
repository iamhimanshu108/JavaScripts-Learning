// Lec 04 Arrays

// let marks = [94,45,12,78,36,96,45];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["Himanshu", "Yadav", "Thor","Doga", "ChotaBheem"]

// console.log(typeof marks);
// console.log(typeof heroes);

// let marks = [94,45,12,78,36,96,45];

// console.log(marks[2]=20);

// Looping over An Array

// let heroes = ["Himanshu", "Yadav", "Thor","Doga", "ChotaBheem"]
// // For Loop
// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// // // For of 
// for (let i  of heroes) {
//     console.log(i.toUpperCase());
// }




// Q1 For a given array with marks of students [ 85,97,44,37,76,60] Find the average marks of the entries class.

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//     sum += val;
// }
// let avg = sum/marks.length
// console.log(`avg marks of the class = ${avg}`);


// Q2 For a given array with price of 5 items -> [250. 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to stoe final price after applying offer

let items = [250, 645, 300, 900, 50]
let i =0;

// for(let val of items){
//     let offer = val /10;
//     items[i] = items[i] - offer;
//     console.log(`val after offer = ${items[i]}`);
//     i++; 
// }

// for (let i = 0; i< items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
    
// }
// console.log(items);


// ============Array Methods==============

let foodItems = ["potato", "apple", "litchi", "tomato"]

// foodItems.push("chips", "Orange")
// foodItems.pop("chips")

// console.log(foodItems);