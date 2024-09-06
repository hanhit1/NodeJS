function demoPromise(DelaySecond){ 
    return new Promise((resolve, reject) => {
    let x = Math.random()*10;
    console.log(x);
    setTimeout(() => {
    if (x >= 5 ) {  
        resolve(true);
    } else {
        reject(false);
    }
    }, DelaySecond);
});
}
//Proise.all
Promise.all([demoPromise(1000),demoPromise(2000)])
.then(
        (value) => {
        console.log('Promise resolved with value:', value);
    })
.catch(
        (value) => {
            console.log('Promise rejected with value:', value);
    }
);
//Promise.allSettled
Promise.allSettled([demoPromise(1000),demoPromise(2000)])
.then(
        (value) => {
        console.log('Promise resolved with value:', value);
    })