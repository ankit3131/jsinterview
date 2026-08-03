let exceptself = function (string) {
let add = [];
let count = 0;
for(let i=0;i<string.length;i++) {
    for(let j=0;j<string.length;j++) {
           if(i !== j) {
       count += string[j];
           }
    }
    add.push(count);
    count = 0;
    // console.log(string[i])
}
return add;
}
let array = [1, 2, 3, 4];
console.log(exceptself(array));