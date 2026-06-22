function string(word){
    let arr = [];
    for(let i=0;i<word.length;i++) {
        for(let j=0;j<word.length;j++) {
            if(i !==j && word[i].includes(word[j])){
                arr.push(word[j])
            }
        }
    }
    return arr;
}
console.log(string(["mass","as","hero","superhero"]))

// output ['as','hero']