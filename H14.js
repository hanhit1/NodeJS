function demoPromise(){ 
    return new Promise((resolve, reject) => {
    let x = Math.random()*10;
    console.log(x);
    if (x >= 5 ) {  
        resolve(true);
    } else {
        reject(false);
    }
});
}
Promise.all([demoPromise(),demoPromise()])
.then(
        (value) => {
        console.log('Promise resolved with value:', value);
    })
.catch(
        (value) => {
            console.log('Promise rejected with value:', value);
    }
);
