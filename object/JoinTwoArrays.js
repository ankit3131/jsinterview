function merge(first1 , first2) {
    let join = [];
for(let i=0;i<first1.length;i++) {
join.push(first1[i]);
}
for(let j=0;j<first2.length;j++) {
join.push(first2[j]);
}
return join;
}
let arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
] 

let arr2 = [
    {"id": 3, "x": 5}
]

console.log(merge(arr1, arr2));