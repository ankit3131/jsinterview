function user(obj) {
    let keys = Object.values(obj)
    console.log('keys',keys);
    if(!obj || !keys) {
         console.log("not object")
        return [];
       
    }
    let value = [];
    for(let i=0;i<keys.length;i++) {
value.push(keys[i])
    }
    return keys;
}

let user1 = user({name:'ankit',age:25});
console.log(user1);


////////////output:- ['Ankit' , 25]