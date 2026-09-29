
function debounce(callback , delay) {
    debugger;
let timer;
function name(value) {
clearTimeout(timer);
timer = setTimeout( () => {
    callback(value)
},delay);
}
return name;
}

let search = debounce((value) => {
    debugger;
    console.log("value",value)
},500)

search("A");
search("An");
search("Ank");
search("Anki");
search("Ankit");

// output:-Ankit