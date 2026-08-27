function result(a,b) {
console.log(a+b);
}

function total(callback){
callback(3,4);
}
total(result);