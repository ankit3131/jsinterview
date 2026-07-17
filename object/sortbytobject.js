// function value(increase) {
//     let min = 0;
//     let max = [];
// for(let i=0;i<increase.length;i++) {
//     debugger;
//     for(let j=i+1;j<increase.length;j++) {
//         if(increase[i].x > increase[j].x) {
//             let temp = increase[i].x
//             increase[i].x = increase[j].x
// increase[j].x = temp;
//         }
//     }
// }
// return increase;
// }

// let arr = value([{"x": 0}, {"x": -1}, {"x": 1}]);
// console.log(arr);


//////////////// [{"x": -1}, {"x": 0}, {"x": 1}] ///////////////////////////


// function arr1(output){
// for(let i=0;i<output.length;i++) {
//     for(let j=i+1;j<output.length;j++) {
//         if(output[i] > output[j]) {
//             let temp = output[i]
//             output[i] = output[j]
//             output[j] = temp;
//         }
//     }
//     // console.log(output[i])
// }
// return output;
// }
// let arr = arr1([[3, 4], [5, 2], [10, 1]]);
// console.log(arr);

//////////////// [ [ 10, 1 ], [ 5, 2 ], [ 3, 4 ] ] ///////////////////////////

// function arr1(output){
// output.sort((a,b) => b[0] - a[0]);
// return output;
// }
// let arr = arr1([[3, 4], [5, 2], [10, 1]]);
// console.log(arr);

//////////////// [ [ 10, 1 ], [ 5, 2 ], [ 3, 4 ] ] ///////////////////////////

