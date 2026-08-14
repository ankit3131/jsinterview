const result = (total) =>{
console.log(total)
}
const myResult = (a,b,callback) => {
let total = a+b;
callback(total)
}
myResult(10,30,result)

// result 40 will be output