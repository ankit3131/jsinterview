const obj = (string) => {
    let fillter = [];
for(let i=0;i<string.length;i++) {
    if((string[i].age) > 24) {
fillter.push(string[i])
    }
    // console.log(string[i])
}
return fillter;
}

let obj1 = [
 {name:"Ankit",age:24},
 {name:"Rahul",age:30},
 {name:"Amit",age:28}
];
console.log(obj(obj1))

