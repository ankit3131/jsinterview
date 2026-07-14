function sum(add) {
    let sum = 0;
for(let i=0;i<add.length;i++) {
sum = add[i].salary + sum;
}
return sum;
}
let obj = sum([
{name:"A",salary:20000},
{name:"B",salary:30000},
{name:"C",salary:50000}
])
console.log(obj);