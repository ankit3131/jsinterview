function salary(growth) {
    let payment = 0;
for(let i=0;i<growth.length;i++) {
    if(growth[i].salary > payment) {
 payment = growth[i].salary;
    }

}
return payment;
}

let obj = salary([
{name:"A",salary:20000},
{name:"B",salary:50000},
{name:"C",salary:30000}
])

console.log(obj);

//////output:-50000