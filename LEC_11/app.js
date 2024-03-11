// const student = {
//     fullName : "Himanshu Kumar",
//     marks: 94.4,
//     printMarks: function(){
//         console.log("marks = ", this.marks);
//     },
// };


// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },

// };

// const karanArjun = {
//     salary: 50000,
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// }

// karanArjun.__proto__ = employee;


// ------------ Classes ----------------

class ToyotaCar {
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar();