const myFunction = (a,b,callback) => {
callback(a+b);
}

myFunction(10,20,result => {
console.log(result)
})