const { promises } = require("readline");

function demoPromise(){ 
    return new Promise((resolve, reject) => {
    let x = Math.random()*10;
    if (x >= 5 ) {  
        resolve(true);
    } else {
        reject(false);
    }
});
}
const array = Array(20).fill().map(() => demoPromise());
 for ( const promise of array) {
    promise.then(
        (value) => {
        console.log('Promise resolved with value:', value);
    })
    .catch(
        (value) => {
            console.log('Promise rejected with value:', value);
    }
    );
}