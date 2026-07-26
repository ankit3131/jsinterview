let getHalf = function(str) {
    let result = "";

    for (let i = 0; i < str.length / 2; i++) {
        debugger;
        result += str[i];
    }

    return result;
}

console.log(getHalf("babbab"));