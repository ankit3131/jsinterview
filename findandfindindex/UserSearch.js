const users = [
    { id: 1, name: "Ankit Kumar", city: "Noida", role: "Developer" },
    { id: 2, name: "Rahul Sharma", city: "Delhi", role: "Designer" },
    { id: 3, name: "Amit Kumar", city: "Noida", role: "Manger" },
    { id: 4, name: "Raj Singh", city: "Mumbai", role: "Manger" },
    { id: 5, name: "Vikas Kumar", city: "Delhi", role: "Developer" }
];

let arr = users.filter((user) => user.name.toLowerCase().includes("kumar"));

let search = arr.map((user) => ({
    id:user.id,
    fullname:user.name,
       city:user.city 
}))

let find = arr.find((user) => {
return (
    user.city === "Delhi"
)})
console.log(arr);
console.log(search);
console.log(find);
// requirment:-
// Find all users whose name contains "Kumar".
// The search value is: "kumar"


// output:-
// [
//   { id: 1, name: 'Ankit Kumar', city: 'Noida', role: 'Developer' },
//   { id: 3, name: 'Amit Kumar', city: 'Noida', role: 'Manger' },
//   { id: 5, name: 'Vikas Kumar', city: 'Delhi', role: 'Developer' }
// ]
// [
//   { id: 1, fullname: 'Ankit Kumar', city: 'Noida' },
//   { id: 3, fullname: 'Amit Kumar', city: 'Noida' },
//   { id: 5, fullname: 'Vikas Kumar', city: 'Delhi' }
// ]
// { id: 5, name: 'Vikas Kumar', city: 'Delhi', role: 'Developer' }