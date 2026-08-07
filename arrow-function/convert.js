let upper = (word) => {
    let result = [];
    for(let i=0;i<word.length;i++) {
        result.push(word[i].toUpperCase())
    }
   return result;
}
let sum = ["html","css","js"];
console.log(upper(sum));