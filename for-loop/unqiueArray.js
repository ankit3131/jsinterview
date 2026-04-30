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

let str = "8223455";
let arr2 = str.split("")
let temp = []
let arr = [];
for(let i=0;i<arr2.length;i++) {
    debugger
    // arr2.push(str)
    for(let j=i+1;j<arr2.length;j++) {
        debugger;
    if(arr2[i] > arr2[j+1]) {
      temp = arr2[i]
      arr2[i] = arr2[j+1]
      arr2[j+1] = temp
arr.push(arr2[j]);  
    }
    
    }
    
}
console.log(arr);