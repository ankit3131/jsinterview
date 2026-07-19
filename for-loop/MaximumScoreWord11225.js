
function letter(string) {
    let result = {};
    for(let i=0;i<string.length;i++) {
        if(result[string[i]]) {
            result[string[i]]++
        }
        else {
            result[string[i]] = 1;
        }
    }
    return result;
}
let  arr = letter(["a","a","c","d","d","d","g","o","o"]);
console.log(arr);

//////////////{ a: 2, c: 1, d: 3, g: 1, o: 2 } ///////////////////

