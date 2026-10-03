function debounce(callback , time) {
    debugger;
    let timer;
clearTimeout(timer);
function name(value){
timer = setTimeout(() => {
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