// function formatMoney(s){
//     if (s.indexOf(".")!=-1){
//         s=s.slice(0,s.indexOf("."));
//     }
// let x="";
// let k=0;
// for(let i=s.length-1;i>=0;i--){
// x=s[i]+x;
// k++;
// if (k%3==0 && i!=0){
// x=","+x;
// }
// }
// return x + " VND";
// }
// console.log(formatMoney("10000000"));
// console.log(formatMoney("1234567.89"));

function formatMoney(s, numberToRound){
    if (s.indexOf(".")!=-1){
        s=s.slice(0,s.indexOf("."));
    }
    let m = s.slice(s.length-numberToRound);
   let round = Number(m);
   let divisor = Math.pow(10, numberToRound);
    round = Math.round(round / divisor) * divisor;
   s = (round > 0) ? s.slice(0, s.length-numberToRound-1) + (Number(s[s.length-numberToRound-1]) + 1): s.slice(0, s.length-numberToRound);
    s= s.padEnd(s.length+numberToRound, "0");
   let x="";
    let k=0;
    for(let i=s.length-1;i>=0;i--){
    x=s[i]+x;
    k++;
    if (k%3==0 && i!=0){
    x=","+x;
    }
    }
    return x + " VND";
}
console.log(formatMoney("200502",3));
console.log(formatMoney("211111111",3));