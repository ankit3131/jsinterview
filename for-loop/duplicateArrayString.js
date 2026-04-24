// solve:-1

let str = "ankittt"
let string = [];

let split = str.split("");
for(let i=0;i<split.length;i++) {
    
    debugger;
        if(!string.includes(split[i])) {
            string.push(split[i]); 
        }
}
console.log(string.join(""));

// output:- ankit t was remove output



