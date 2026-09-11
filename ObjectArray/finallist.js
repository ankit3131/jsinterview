const company = [

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
    },
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
    }
];

let main = company.map((user) => {
    return user;
})
// console.log(main);

let departments = main.filter((main) => {
    if(main.department === "IT") {
        return main;
    }
})

let employe = departments.map((departments) => {
let names = departments.employees.filter((tech) => {
  return tech.skills.includes('React')
})
// console.log(names);
return {
    name:names[0].name,
    skills:names[0].skills
}
})
console.log(employe);
// console.log(departments);
// // output:-
// [
//     {
//         name: "Ankit",
//         skills: ["JavaScript", "React"]
//     }
// ]