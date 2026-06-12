//      let arr = "babad";
//           let count = 0;
//           let string = '';
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {

//   for (let j = i; j < arr.length; j++) {
//     debugger;
//     if (!arr1.includes(arr[j]) && count < 1) {
//       arr1.push(arr[j]);
//     }
//    else if(count < 1)  {
// debugger;
//       arr1.push(arr[j]);
//       count++
//       break;
//     }
//   }
// }
//  string = arr1.join("")
//     console.log(string);
  
 
// output:-"bab"


// function longestPalindrome(str) {
//   let longest = "";
// debugger;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       let sub = str.slice(i, j);
// debugger;

//       if (
//         sub === sub.split("").reverse().join("") &&
//         sub.length > longest.length
//       ) {
//         longest = sub;
//       }
//     }
//   }

//   return longest;
// }

// console.log(longestPalindrome("babad")); // "bab" or "aba"


let arr = "babad"
for(let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
        debugger;
       arr.slice(i,j);
       console.log(arr)
    }

}
