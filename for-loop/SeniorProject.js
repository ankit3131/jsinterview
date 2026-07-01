function details(word) {
    debugger;
    let count = 0;
    for(let i=0;i<word.length;i++) {
        let age=  word[i].slice(11,13);
         if(age>=60){
                count++;
            }
    }
return count;
    // console.log(arr3);
                                    

}
let arr = details([
  "7868190130M7522",
  "5303914400F9211",
  "9273338290F4010"
]);
console.log(arr);
