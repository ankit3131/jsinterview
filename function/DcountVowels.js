function countVowels(vowel){
// let vowel = vowel.vowel("");
let count = 0;
for(let i=0;i<vowel.length;i++) {
    if(vowel[i] === "a" || vowel[i] === "e" || vowel[i] === "i" || vowel[i] === "o" || vowel[i] === "u") {
        // count = count;
        count++;
    }
}
return count;
// console.log(vowel);
}

let chart = countVowels("javascript");
console.log(chart);