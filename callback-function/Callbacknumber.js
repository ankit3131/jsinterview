const num = (total) => {
console.log(total);
}
const Numbers = (a , callback) => {
    debugger;
    let total = a * 2;
    callback(total);
}
Numbers(10 , num);
////output:-20