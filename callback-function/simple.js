const greet = () => {
    console.log("Hello")
}
const result = (callback) => {
callback();
}

result(greet);

// Hello print

// step:-1 result(greet)
// step:-2 in result parameter callback and same callback() = greet(); 
// step:-3 greet excute in console.log("hello")
// step:4 Hello print