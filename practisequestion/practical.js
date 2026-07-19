//////////// reversestring

// let string = "edcba";
// let arr = string.split("");
// let arr1 = [];
// for(let i=arr.length-1;i>=0;i--) {
// arr1.push(arr[i])
// }
// let string1 = arr1.join("");
// console.log(string1);

///////////// reverse string abcde in loop//////////////////////////////////

/////////// duplicate(1)
// let arr = [1,1,1,1,2,2,2,2,3,3,3,3,4];
// let arr1 = [];
// for(let i=0;i<arr.length;i++) {
// if(arr[i] !== arr[i+1]) {
// arr1.push(arr[i])
// }
// }
// console.log(arr1);

//////////duplicate number[ 1, 2, 3,4]//////////////////////////////////


/////////// duplicate(2)
// let arr = [1,2,1,1,2,3,4];
// let arr1 = [];
// for(let i=0;i<arr.length;i++) {
//     for(let j=0;j<arr.length;j++) {
//         if(!arr1.includes(arr[j])) {
//             arr1.push(arr[j])
//         }
//     }
// }
// console.log(arr1);

//////////duplicate number[ 1, 2, 3 ,4]//////////////////////////////////


///////////Count duplicate elements

// let arr = [1,1,1,2,2,2,3,3,3,4];
// let arr1 = [];
// for(let i=0;i<arr.length;i++) {
//    for(let j=i+1;j<arr.length;j++){
//     if(arr[i]===arr[j] && !arr1.includes(arr[j])) {
//        arr1.push(arr[j])
//     }
//    } 
// }
// console.log(arr1);

/////////////////// second largest number ///////////////////////////////

// function arr(arr1) {
//     let max = 0;
//     for(let i=0;i<arr1.length-1;i++) {
// if(arr1[i] > max) {
//     max = arr1[i]
// }
//     }
//     return max;
// }
// console.log(arr([1,5,4,3,6]));

/////////////// 5 number //////////////////////////////////////////////

///// common string //////

// function string(arr) {
//     let char = arr.split("");
//     let arr1 = [];
//     // console.log(char);
// for(let i=0;i<char.length;i++) {
//     if(char[i] === char[i+1]) {
//         continue;
//     }
//     else {
//     arr1.push(char[i])
//     }
// }
// return arr1;
// }
// let common = string("ankiit");
// console.log(common)

//////////////// ankit ///////////////////////////////////////

//////// count number ///////

// function number(countnumber) {
//     let max = 1;
//     let min = 0;
// for(let i=0;i<countnumber.length;i++) {
//     if(countnumber[i] === countnumber[i+1]) {
// max++;
//     }
//     else if(max>min) {
// min = max;
// max = 0;
//     }
// }
// return min;
// }
// let count = number([1,1,1,3,3,1,1,3]);
// console.log(count);

///////////// output:- 3 //////////////////////////////////////


//////// firststring remove ///////
// function firstring(char) {
//     let firststring = char.split("")
//     // console.log(firststring);
// for(let i=0;i<firststring.length;i++) {
//     let arr1 = firststring.splice(i , 1)
//    let strings =  firststring.join("");
// // console.log(firststring);
//     // if(firststring.slice(1 , 2))
//         // reverse.push(firststring);
//     // console.log(firststring)
// return strings;
// }

// }
// let string = firstring("aankit");
// console.log(string);

///////// output:- "ankit"  ///////////////////////////////////

///////////missing number 

// function missing(arr) {
//       let missing = [];
//     for(let i=0;i<arr.length;i++) {
//         for(let j=0;j<arr.length;j++) {
//             if(arr[i] < arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
            
//         }
//     }
//     let count = 0;
  
//     for(let i=0;i<6;i++) {
// for(let i=0;i<arr.length;i++) {
//     if(count[i] !== i) {
// missing.push(i)
//     }
// }
//     }
//     return missing;
//     }
// let num = missing([0,7,4,5,6,4]);
// console.log(num)


///output:- 2
// function count(arr1) {
//     let min = 1;
//     let max = 0;
// for(let i=0;i<arr1.length;i++) {
//     if(arr1[i] === arr1[i+1]) {
//         min++;
//     }
//     else if(min>max) {
// max = min;
// min = 0;
//     }

   
//     // console.log(arr1[i])
// }

// max++;
//  return max;
// }
// let arr = count([0,0,1,1,1,1,1,1,2,4,1,1,1,1,1]);
// console.log(arr);

////outout:-3
// function output(count){
//      let value = [];
// for(let i=0;i<count.length;i++) {
   
//     if(count[i] >= 30) {
// value.push(count[i])
//     }
// }
// return value;
// }
//     let arr = output([10, 5, 20, 10, 30, 5, 40, 20, 50]);
//     console.log(arr);


//////////// output:-[30, 40, 50]; ////////////////////////////////////

//////output:-4
// function duplicatee(max) {
//     let value = [];
// for(let i=0;i<max.length;i++) {
//     for(let j=i+1;j<max.length;j++) {
//         if(max[i] === max[j] && !value.includes(max[i])){
// value.push(max[i]);
//         }
//     }
// }
// return value
// }
// const arr = duplicatee([4, 2, 7, 4, 2, 8, 7, 9, 4, 8]);
// console.log(arr);

////////////// output:- [ 4, 2, 7, 8 ]; ////////////////////////////////

// function greater(max) {
// let value = [];
// for(let i=0;i<max.length;i++) {
//     if(max[i] > max[i+1]){
//         value.push(max[i])
//     }
//     console.log(max[i])
// }
// return value;
// }
// const arr = greater([5, 2, 8, 1, 9, 3, 7, 4]);
// console.log(arr);

///////////////////// output:- [ 5, 8, 9, 7 ] ////////////////////////////////

// function less(min){
// let value = [];
// for(let i=0;i<min.length;i++) {
//     if(min[i] > min[i+1]) {
//         value.push(min[i])
//     }
// }
// return value;
// }
// const arr = less([3, 8, 2, 10, 5, 7, 12, 1]);
// console.log(arr);

///////////////////// output:- [ 8, 10, 12 ]     ////////////////////////////////

// function arr(unique) {
//     let uniques = [];
//     for(let i=0;i<unique.length;i++) {
//         if(!uniques.includes(unique[i])) {
// uniques.push(unique[i])
//         }
//     }
//     return uniques;
// }
// let str = arr(['a','n','k','k','k','i','i','t']);
// console.log(str)

////////////////output:- [antkit]

// function string(str) {
// let count = 0;
// let string = '';
//     for(let i=0;i<str.length;i++) 
//     {
//         let arr = str[i].split(' ');
//         // console.log(arr);
//         if(arr.length>count) {
//             count = arr.length;
//             string = str[i];
//         }
//     }
//     return string , count;
// }
//  let arr = string(["alice and bob love leetcode", "i think so too", "this is great thanks very much very much"]);
//  console.log(arr);
 ////// this is great thanks very much ///////////////ouptput

 function count(missing){
    let count = 0;
    let arr = [];
for(let i=0;i<missing.length;i++) {
    if(missing[i] === count) {
break;
    }
    else {
arr.push(missing[i]);
    }
}
return arr;
 }
let arr = count([1,1,1,0,0,0]);
console.log(arr)




