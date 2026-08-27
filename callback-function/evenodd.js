let odd = (a) => {
    if(a % 2 === 0) {
return "Odd is number"
    }
}

let numbers = (a , Callback) => {

    return Callback(a);
}

console.log(numbers(10,odd));