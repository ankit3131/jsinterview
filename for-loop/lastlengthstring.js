let str = "Hello World";
let lastindex = [];
let lastarray = []; 
let arr = str.split(" ");
console.log(arr)
for(let i=0;i<arr.length;i++) {
    // if(str[i])
    lastindex.push(arr[i])
    lastindex = lastarray;
}
let string = lastindex.join();
    console.log(string.length)

    // output last index use 5 will be

// let str = "Hello World";
// let lastindex = [];
// let lastlength = 0;
// let word = "";
// for(let i=0;i<str.length;i++) {
//     if(str[i] !== " ") {
//         debugger;
//                 word += str[i];

//     }
//     else {
//       lastindex.push(word) 
//       word = "";
//     }
// } 
//       lastindex.push(word) 
// for(let i=0;i<lastindex.length;i++) {
//     lastlength = lastindex[i]
// }
// console.log(lastlength.length);

    // output last index use 5 will be

