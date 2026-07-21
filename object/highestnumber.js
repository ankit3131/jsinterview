function salaries(count){
   let counts = 0;
    for(let i=0;count.length;i++) {
if(count[i].salary > count) {
    counts = count[i].salary
}
    }
    return counts;
}
let obj = salaries([
{name:"A",salary:20000},
{name:"B",salary:50000},
{name:"C",salary:30000}
])

console.log(obj)