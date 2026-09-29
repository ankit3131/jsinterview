const company = [
    {
        department: "IT",
        employees: [
            {
                name: "Ankit",
                skills: ["JavaScript", "React"],
                projects: [
                    { name: "Dashboard", completed: true },
                    { name: "CRM", completed: false }
                ]
            },
            {
                name: "Rahul",
                skills: ["Java", "Spring"],
                projects: [
                    { name: "API", completed: true }
                ]
            }
        ]
    },
    {
        department: "HR",
        employees: [
            {
                name: "Amit",
                skills: ["Excel", "Communication"],
                projects: [
                    { name: "Recruitment", completed: true }
                ]
            }
        ]
    }
];
let main = company.map(main => {
let filter = company.filter(user => {
    if(user.department === "IT") {
       let innerfilter = user.employees.filter((user1) => {
        debugger;
        return user1.name;
// let react = user1.skills.filter((user3) => {
//    if(user3 === "React") {
//     return {
//         name:user.name
//     }
//    }
// })
//  return user1;
// console.log(react);
       })
     console.log(innerfilter);
    // console.log(innerfilter);
    }
})
// return {
//     name:filter
// }
})
// console.log(main);
// console.log(filter);
// output:- [
//     {
//         name: "Ankit",
//         skills: ["JavaScript", "React"]
//     }
// ]