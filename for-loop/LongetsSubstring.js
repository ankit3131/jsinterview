let str = "pwwkew";
for(let i=0;i<str.length;i++) {
    for(let j=i+1;j<str.length;j++) {
        if(str[i] !== str[j]) {
            debugger;
            console.log(str[i] , str[j])
            break;
        }
    }
}

//output:-3