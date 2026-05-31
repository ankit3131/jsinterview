let arr = [-1,2,2,3,5]
let arr1 = new Set(arr);
let missing = [];
for(let i=0;i<6;i++) {
if(!arr1.has(i)) {
missing.push(i)
}
}
console.log(missing)