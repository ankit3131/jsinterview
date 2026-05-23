let string  = "programming"
let strings = [];
let name = string.split("")
for(let i=0;i<name.length;i++) {
if(!strings.includes(name[i])) {
strings.push(name[i])
}
}
console.log(strings)