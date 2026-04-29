// let str = "122345662";
// let arr = str.split("");
// let arr2 = [];
// let sort = arr.sort();

// for(let i=0;i<sort.length;i++) {
//     if(sort[i] !== sort[i+1] && sort[i] !== sort[i-1]){
// arr2.push(sort[i])
//     }
// }
// console.log(arr2);

// solve:-[ '1', '3', '4', '5' ]

let str = "822345664";
let arr2 = [];
for(let i=0;i<str.length;i++) {
    arr2.push(str[i])
    for(let j=i+1;j<str.length;j++) {
        debugger;
    if(str[i] > str[j+1]) {
console.log(arr2);
    }
    }
}
// console.log(arr2);
