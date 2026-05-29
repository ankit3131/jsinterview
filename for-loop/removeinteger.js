let num = [-1,4,1,3]
// let arr = [];
for(let i=0;i<num.length;i++) {
    for(let j=i+1;j<num.length;j++) {
                    debugger; 

        if(num[i] < num[j]) {
let temp = num[i]
num[j] = num[i]
temp = num[j]
        }
    }
}
console.log(num)
output:-2