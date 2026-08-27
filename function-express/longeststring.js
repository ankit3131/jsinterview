let input = function (str, k) {
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    let obj = {};
    for (let j = i; j < str.length; j++) {
        
      if (obj[str[i]]) {
        obj[str[i]]++;
      } else {
        obj[str[i]] = 1;
      }
    
    let maxFreq = 0;
    if (obj["A"] || 0 > maxFreq) {
        
      maxFreq = obj["A"];
    }
    if (obj["B"] || 0 > maxFreq) {
        
      maxFreq = obj["B"];
    }
    let windowLength = j - i + 1;
    let replace = windowLength - maxFreq;
    
    if (replace <= k) {
       
      if (windowLength > maxLength) {
        maxLength = windowLength;
      }
    }
    }
    return maxLength;
  }
};

let str = "AABABAB";
let k = 2;

console.log(input(str, k));
// Input: s = "ABABBABBABB", k = 2
// Output: 4
