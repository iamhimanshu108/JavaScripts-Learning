function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("timer done");
            resolve("done")
        },3000)
    })
}

async function consume(){
    console.log("inside function");
    const response = await createPromise();
    console.log("response: ", response);

}
console.log("start");
consume();
console.log("end");

// console.log(consume());


