const name = "himanshu"
const repoCount = 20

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Himanshu-Kumar-Yadav')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('Y'));

const newString = gameName.substring(0, 7)
console.log(newString);

const anotherString = gameName.slice(-20, 4)
console.log(anotherString);

const newStringOne = "   Himanshu    "
console.log(newStringOne);
console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));