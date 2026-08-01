let ransom = function (ransomNote , magazine) {
let count = 0;
let logical = false;
for(let i=0;i<ransomNote.length;i++) {
    for(let j=i;j<magazine.length;j++) {
        debugger;
        if(ransomNote[i] === magazine[j]) {
             debugger;
            count++;
            break;
        }
    }
}
        if(count >=2) {
logical = true;
        }
return logical;
}

let ransomNote = "aa";
let magazine = "aab"

console.log(ransom(ransomNote,magazine));

/////////////output:- true////////////