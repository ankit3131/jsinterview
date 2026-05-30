// let num = [1,2,4,3,6]
// let num1 = []
// let arr1 = []
// let count = 0;
// let nums = 0;
// let counts = 0;
// // let arr = [];
// for(let i=0;i<num.length;i++) {
//     for(let j=i+1;j<num.length;j++) {

//         if(num[i] >  num[j]) {
// let temp = num[i]
// num[i] = num[j]
//  num[j] = temp
//         }
//     }
// }
// num1 = num
// for(let i=0;i<7;i++) {
//   arr1.push(count)  
//    count++
// }
// // console.log(arr1)
// for(let i=0;i<num1.length;i++) {
// for(let j=i;j<arr1.length;j++) {
// if(!num1.includes(arr1[j])) { 
//     debugger;
//     counts = arr1[j] 
// }
// }
// }
// console.log(counts)

///count num:-5


let num = [-1,1,2,4,3,6]
let count = [];
for(let i=1;i<=6;i++) {
            let found = false;
    for(let j=0;j<num.length;j++) {
        if(num[j] === i) {
            found = true;
            break;
        }
     
    }
       if(!found) {
            count.push(i)
        }
}
console.log(count)