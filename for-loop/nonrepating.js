// const str = "aabbcde";
// const arr = [];
// // const arr = str.split(" ")
// for(let i=0;i<str.length;i++) {
// arr.push(str[i])
// }

// for(let i=0;i<arr.length;i++) {
//     if(arr[i] === arr[i+1]){
// break;
//     }
//     else{

//     }
//     // for(let j=i+1;j<arr.length;j++){
//     //     if(arr[i] === arr[j]){
//     //         break;
//     //     }
//     //     if(arr[i] !== arr[j]) {
//     //         console.log(arr[i])
//     //         break;
//     //     }
//     // }
// }

let arr = [0,0,1,1,1,2,4]
let arr1 = [];
for(let i=0;i<arr.length;i++) 
{
    for(let j=0;j<arr.length;j++) {
        debugger;
        if(!arr1.includes(arr[i])) {
            arr1.push(arr[i])
        }
    }
}
console.log(arr1)