// solve1
// let str = "ankit"
// let laststr = [];
// // let split = str.split("")
// for(let i=0;i<str.length;i++) {
//     debugger;
//     // laststr.push(str[i]);
//     if(str[i] !== str[4]) {
//    laststr.push(str[i]);
//     }
// }
// console.log(laststr);

// output:-anki but not good approach

//solve2
// let str = "ankit"
// let laststr = ""
// for(let i=0;i<str.length-1;i++) {
//    laststr = laststr + str[i];
// }
//  console.log(laststr)


//outpu:- anki forloop conditon use 

//solve3
// let str = "ankit"
// let laststr = []

// let split = str.split("");
// split.pop();
//  console.log(split.join(""));

 //output:- anki split use , join() can do use


//  solve4
// let str = "ankit"
// let slice = str.slice(0, -1)
// console.log(slice)

//output:- anki split use , slice() can do use

// let str = "ankit"
// let slice = [];

// for(let i=0;i<str.length;i++) {
//     slice.push(str[i])
// }
// slice.pop();
// console.log(slice.join(""))

//output:- anki for-loop,push,pop can do use

//solve 4
// let str = "ankit"
// for(let i=0;i<str.length-1;i++) {
//     console.log(str[i])
// }

