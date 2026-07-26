let uniquevalue = function(arr) {
    let unique = [];
for(let i=0;i<arr.length;i++) {
  if(arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) {
unique.push(arr[i])
  }
}
return unique;
}
console.log(uniquevalue([1,2,2,3,4,4,5]));

/////////[ 1, 2, 3, 4, 5 ]///////////////

///////////step:-2

// let uniquevalue = function (arr) {
//     let unique = [];
//     for(let i=0;i<arr.length;i++) {
//         if(!unique.includes(arr[i])) {
//             unique.push(arr[i])
//         }
//     }
//     return unique;
// }
// console.log(uniquevalue([1,2,2,3,4,4,5]));

 /////////// output:- [ 1, 2, 3, 4, 5 ]///////////////

////////////////step:3 ///////


