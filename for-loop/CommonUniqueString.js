const str = "aabbcde";
const arr = [];
// const arr = str.split(" ")
for(let i=0;i<str.length;i++) {
    let count = 0;
   for(let j=0;j<str.length;j++) {
    if(str[i] === str[j]) {
        count++
    }
   }
   if(count === 1) {
    arr.push(str[i])
    break;
   }
}
console.log(arr)

//["c"] will be refercne output on chatgpt


let arr = "aabbcdef";
let unique = [];

for (let i = 0; i < arr.length; i++) {
    debugger;
  if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
    unique.push(arr[i]);
    break;
  }
}

// ["c"] will be refercne on chatgpt