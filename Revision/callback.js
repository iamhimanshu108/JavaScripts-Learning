function h(x, fn){
    fn();
    // h-> is a hof
    // fn -> callback
    
    console.log(x*x);
    fn();
}


h(10, function(){
    console.log("node with callback");
})