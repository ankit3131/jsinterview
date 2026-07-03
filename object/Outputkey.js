// step:-1
// let user = {
//     name:"Ankit",
//     age:25
// }

// console.log(Object.keys(user));

/////////output:- key:- name , age

//step:-2 
// let user = {
//     name:"Ankit",
//     age:25,
// }
// let keys = Object.keys(user);

// for(let i=0;i<keys.length;i++) {
//     console.log(keys[i]);
// }

/////////output:- key:- name , age

//step:-3
// function user(obj) {
//     let keys = [];
//     let key = Object.keys(obj)
//     if(!obj || !key) {
//         return [];
//     }
//     for(let i=0;i<key.length;i++) {
// keys.push(key[i])
//     }
//     return key;
// }
// const user1 = user({name:"ankit" , age:25});
// console.log(user1);