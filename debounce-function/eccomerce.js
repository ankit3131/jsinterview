let time;
function debounce(callback , time) {
    debugger; 
function name(value){
    clearTimeout(time);
time = setTimeout(() => {
callback(value);
}, time)
}

return name;
}

let searchUser = debounce((value) => {
    debugger;
console.log(value)
}, 1000)

searchUser("A");
searchUser("An");
searchUser("Ank");