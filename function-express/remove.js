//step1:-1
// let removeDuplicate = function (arr) {
//     debugger;
//     let duplicate = [];
// for(let i=0;i<arr.length;i++) {
// if(!duplicate.includes(arr[i])) {
//    duplicate.push(arr[i])
// }
// }
// return duplicate;
// }
// console.log(removeDuplicate([1,2,2,3,4,4,5]));

/////////////output:- [1,2,3,4,5]

/////////////////step2//////////////////////////////
let removeDuplicates = function (arr) {
let remove = [...new Set(arr)];
return remove;
}
console.log(removeDuplicates([1,2,2,3,4,4,5]));




