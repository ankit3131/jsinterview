let init = 5;
let orginale = 5;
let arr = []; 
function increament() {
   
init++;
    arr.push(init);
}
function reset() {
    init = orginale;
      arr.push(init);
    
}
function decrement() {
  
    init--;
        arr.push(init);
}
// console.log(init);
increment();
reset();
decrement();

console.log(arr);