
function debounce(callback , delay) {
    debugger;
let timer;
return function(value) {
clearTimeout(timer);
timer = setTimeout( () => {
    callback(value)
},delay);
}
}

let search = debounce((value) => {
    console.log("value",value)
},500)

search("A");
search("An");
search("Ank");
search("Anki");
search("Ankit");

// output:-Ankit