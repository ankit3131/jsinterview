// const numbers = [10,30,20,80];
// const add = numbers.reduce((prev , num) => {
// if(num > prev) {
//     return num;
// }
// else {
//     return prev;
// }
// }, numbers[0])
// console.log(add);
////////////// output:-80

function result(results) {
  debugger;
  let count = 0;
  if(count > results) {
count = results;
  }
  else {
count = results;
  }
  console.log(count)
}
function total(callback , arr) {
for(let i=0;i<=arr.length;i++) {
    debugger;
    callback(arr[i]);
    // if(count <= callback(result[i])) {
    //     count = result[i];
    // }
    // else {
    //     count = result[i];
    // }
}
}
const numbers = [10,30,20,80];
total(result , numbers)