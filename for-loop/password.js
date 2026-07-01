function unique(passwd) {
    let count = 0;
    for(let i=0;i<passwd.length;i++) {
        // console.log(passwd[i])
        if(passwd[i]>="a" && passwd[i]<="z") {
            count = 2;
            count++;
        }
        if(passwd[i]>="A" && passwd[i]<="Z")
            {
count = 2;
count++;
        }
        if(passwd[i]>=1 && passwd[i]<=9){
            count = 3
            count++;
        }
        else {
            count = 5;
            count++;
        }
    }
    return count;
}
let password = unique("aA1!")
console.log(password);