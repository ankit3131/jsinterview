let find = "I love javascript programming";
let arr = "1";

let split = find.split(" ");
console.log(split)
for(let i=0;i<split.length;i++) {
   if(split[i].length > arr.length) {
    arr = split[i];
   }
}
console.log(arr)
