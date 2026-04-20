// solve:-1
// let string = "ankit";

// let slice = string.slice(1);

// console.log(slice);

// output:-nkit Slice original array not change

//solve:-2

// let string = "ankit";

// let arr = string.split("")
// console.log(arr);

// let splice = arr.splice(1).join("");
// console.log(splice);

// output:- nkit but this splice will original change

// solve 3

// let string = "ankit"
// let arr = [];
// let arr1 = [];
// for (let i = 0; i < string.length; i++) {
//     debugger;
//         // string[i]
//     arr.push(string[i]);
//     if (string[i] !== arr[0]) {
//         debugger;
//         arr1.push(arr[i])
//     }
 
// }

// console.log(arr1)

// output:-[n,k,i,t] on array 

// solve4
let string = "ankit"
let removStr = '';

for(let i=0;i<string.length;i++) {
    debugger;
    if(string[i] !== string[0]) {
        removStr += string[i]
        // console.log(removStr);
        // removStr++
    
    }
}
console.log(removStr)

// output will be 'nkit' Good one chatgpt