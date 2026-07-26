let reverse = (arr) => {
    debugger;
    let arr1 = '';
    for(let i=arr.length-1;i>=0;i--) {
        arr1 = arr1 + arr[i];
//         debugger;
// arr1.push(arr[i]);
    }
    return arr1;
}
console.log(reverse("frontend"))