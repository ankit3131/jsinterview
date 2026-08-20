let reactUsers = [];
let inactiveUsers =  [];
let cities = [];
const Dashboard = (users) =>{
    debugger;
    if(users.skills[0] === "React") {
reactUsers.push(users.name);
    }
    if(users.active === true) {
inactiveUsers.push(users.name);
    }
    if(!cities.includes(users.city)) {
        cities.push(users.city)
    }
    
}
const users = [
    {
        id: 1,
        name: "Ankit",
        age: 28,
        city: "Noida",
        active: true,
        skills: ["React", "JavaScript"]
    },
    {
        id: 2,
        name: "Rahul",
        age: 32,
        city: "Delhi",
        active: false,
        skills: ["JavaScript", "Node"]
    },
    {
        id: 3,
        name: "Amit",
        age: 25,
        city: "Noida",
        active: true,
        skills: ["React", "CSS"]
    },
    {
        id: 4,
        name: "Neha",
        age: 30,
        city: "Delhi",
        active: true,
        skills: ["React", "Node"]
    }
];

users.forEach(Dashboard);
console.log(reactUsers);
console.log(inactiveUsers);
console.log(cities);