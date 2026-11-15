const employees = [
  { name: "Rahul", salary: 50000 },
  { name: "Amit", salary: 40000 },
  { name: "Vijay", salary: 35000 }
];

let highsalary = employees.reduce((accum , current) => {
   if(accum.salary >= current.salary) {
    debugger;
      return accum;
   }
   else {
    debugger
   return current;
   }
})
console.log(highsalary)

// output:-
// {name: 'Rahul', salary: 50000}
