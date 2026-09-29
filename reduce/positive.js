const numbers = [-10, 20, -5, 30, -2, 40];
let count = 0;
let postive = numbers.reduce((accum , num) => {
if(num>0) {
    debugger;
    count = accum + count;
}
 return count;
},0)

console.log(postive);

// output:- 3