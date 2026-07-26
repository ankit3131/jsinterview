// let uniquevalue = function(arr) {
//     let unique = [];
// for(let i=0;i<arr.length;i++) {
//   if(arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) {
// unique.push(arr[i])
//   }
// }
// return unique;
// }
// console.log(uniquevalue([1,2,2,3,4,4,5]));

/////////[ 1, 2, 3, 4, 5 ]///////////////

///////////step:-2

let uniquevalue = function (arr) {
let unique = {};
let arr1 = [];
for(let i=0;i<arr.length;i++) {
  if(unique[arr[i]]) {
unique[arr[i]] += unique[arr[i]];
  }
  else {
    unique[arr[i]] = 1;
  }
}
for(let i=0;i<arr.length;i++) {
  if(unique[arr[i]] === 1) {
    arr1.push(arr[i])
  }
}
return arr1;
}
console.log(uniquevalue([1,2,2,3,4,4,5]));

 /////////// output:- [ 1, 2, 3, 4, 5 ]///////////////

////////////////step:3 ///////


