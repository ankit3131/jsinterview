let values = [];
let number = (arr) => {
if(arr % 2 === 0 ) {
    debugger;
    values.push(arr); 
}
}

const value = [10,15,20,25,30,35];
value.forEach(number)
console.log(values);
// console.log(number(value))


// output:- [10,20,30]