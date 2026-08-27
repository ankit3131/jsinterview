let user = (str) => {
    let count = 0;
    let obj = {};
for(let i=0;i<str.length;i++) {
    if(str[i].age >= count) {
        count = str[i].age;
        obj = str[i];
    }
    // console.log(str[i]);
}
return obj;
}

const users = [
    { name: "Ankit", age: 24 },
    { name: "Rahul", age: 30 },
    { name: "Amit", age: 28 }
];
console.log(user(users));