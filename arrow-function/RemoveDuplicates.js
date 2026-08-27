let num = (unique) => {
let duplicate = [];
for(let i=0;i<unique.length;i++) {
    if(!duplicate.includes(unique[i])) {
          duplicate.push(unique[i]);  
    }
}
return duplicate;
}
let nums = [1, 1, 2, 2, 3];
console.log(num(nums));

////expected output:- [ 1, 2, 3 ];
