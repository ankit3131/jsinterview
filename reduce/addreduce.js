// step:-1
    const numbers = [10, 15, 20, 25, 30, 35];
    let reduce = numbers.reduce((accum , num) => {
        debugger;
        if(num % 2 === 0) {
   accum = num + accum;
        }
        return accum;
    } , 0) 
    console.log(reduce);
// output:-60

// setp-2
// let arr = function (add) {
// return add;
// }
// let array = function (callback , num)  {
//     debugger;
//     let sum = 0;
//     for(let i=0;i<num.length;i++) {
// if(num % 2 === 0) {
//     sum = sum + callback[num[i]];
// }
//     }
// return sum;
// }
// const numbers = [10, 15, 20, 25, 30, 35];
// console.log(array(arr , numbers));
// output:- 60

