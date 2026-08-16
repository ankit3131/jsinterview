 const array = (users)=>{
    return users*2;
}

const myMap = (user ,callback) => {
    let result = [];
    for(let i=0;i<user.length;i++) {
        result.push(callback(user[i]))
    }
return result;
}

let user = [1,2,3,4];
console.log(myMap(user , array));

//output:- [2,4,6,8]