     let arr = "babad";
          let count = 0;
          let string = '';
let arr1 = [];
for (let i = 0; i < arr.length; i++) {

  for (let j = i; j < arr.length; j++) {
    debugger;
    if (!arr1.includes(arr[j]) && count < 1) {
      arr1.push(arr[j]);
    }
   else if(count < 1)  {
debugger;
      arr1.push(arr[j]);
      count++
      break;
    }
  }
}
 string = arr1.join("")
    console.log(string);
  
 
// output:-"bab"
