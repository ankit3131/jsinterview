function string(char) {
    let result = [];
    for(let i=0;i<char.length;i++) {
        if(char[i] >="0" && char[i] <="9") {
       result.pop();
        }
        else {
            result.push(char[i])
        }
    }

return result;
}
let digit = string("ackk4");
console.log(digit);

