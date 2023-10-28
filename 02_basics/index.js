// declaration of Array

//using square bracket

let numbersArray = [10,20,30,40,50,]

// console.log(numbersArray);
// console.log(typeof numbersArray);
// console.log(Array.isArray(numbersArray) );

// using Array Constructer

// let fruits = new Array("Apples", "oranges", "Bananas" );
let fruits = new Array(5)

// console.log(fruits);

// using Array literal

let mixArray = Array('Apples', true, 10, {name:"jhon"})

// console.log(mixArray);


//access the array

// let nums = [10,20,30,40,50]

// console.log(nums[4]);


// nums[2] = true

// console.log(nums);

// delete nums[1]
// console.log(nums);

// iteration of array


let nums = [10,20,30,40,50]

// for( let i = 0; i < nums.length; i++){
//     console.log(`at index ${i} value is ${nums[i]}`);
// }

let i = 0

while(i < nums.length){
    console.log(`at index ${i} value is ${nums[i]}`);
    i++
}

