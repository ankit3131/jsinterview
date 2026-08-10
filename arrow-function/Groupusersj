let user = (obj)  => {
    let obj1 = {};
for(let i=0;i<obj.length;i++) {
    if(!obj1[obj[i].city]) {
        obj1[obj[i].city] = [];
        // Noida: [{ name: "Ankit", city: "Noida" },]
        // obj1[city].push(obj[i]);
    }
    obj1[obj[i].city].push(obj[i]);
    // obj1[obj[i].city].push is not a function
    // 
    // else {
    //     obj1[obj[i].city] = obj[i];
    // }
}
return obj1;
}
const users = [
    { name: "Ankit", city: "Noida" },
    { name: "Arun", city: "Delhi" },
    { name: "Arun", city: "Noida" },
    { name: "Yash", city: "Delhi" }
];
console.log(user(users))