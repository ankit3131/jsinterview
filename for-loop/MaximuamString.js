    // // tricks:-1

    // function string(word) {
    //     let count = 1;
        
    //     for(let i=0;i<word.length;i++) {
    //         debugger;
    //         let spiltes = word[i].split(" ");
    //         // console.log(spiltes);
    //         debugger;
        
    // if(spiltes.length>count) {   
    //     debugger;
    //     count = spiltes.length;
    //     //  console.log(count.length);
    // }
    //     }
    //     return count;
    // }

    // let arr = string(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
    // console.log(arr);;


// otuput:-6 all most clear

//tricks:-2
function string(word) {
    let arr1 = [];
    let temp = ""
    for(let i=0;i<word.length;i++) {
        for(let j=0;j<=word[i].length;j++) {
            if(word[i][j] !== " "){
temp += word[i][j]
            }
            else{
                arr1.push(temp);
                temp="";
            }
        }
        // console.log(word[i])
    }
    return arr1;
}
  let arr = string(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
    console.log(arr);
