let array = (user) => {
    return user>10;
}

let myFilter = (user , callback) => {
let result = [];
for(let i=0;i<user.length;i++) {
    if(callback(user[i])){
    result.push(user[i]);
    }
}
return result;
}
let user = [10,20,20];
console.log(myFilter(user , array));