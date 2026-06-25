    function string(word) {
        let count = 1;
        
        for(let i=0;i<word.length;i++) {
            debugger;
            let spiltes = word[i].split(" ");
            // console.log(spiltes);
            debugger;
        
    if(spiltes.length>count) {   
        debugger;
        count = spiltes.length;
        //  console.log(count.length);
    }
        }
        return count;
    }

    let arr = string(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
    console.log(arr);;


<<<<<<< HEAD
// otuput:-6 all most clear

///////count
=======
// otuput:-6 all most clear
>>>>>>> develop
