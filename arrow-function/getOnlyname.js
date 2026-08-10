let obj = (users) => {
    let obj1 = [];
    // console.log('keys', keys);
    for(let i=0;i<users.length;i++) {
      obj1.push(users[i].name)
    }
    return obj1;
    // console.log(users);
}
const users = [
    { name: "Ankit", age: 24 },
    { name: "Rahul", age: 30 },
    { name: "Amit", age: 28 }
];
console.log(obj(users))