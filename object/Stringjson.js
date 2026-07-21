function data(arr) {
   return JSON.stringify(arr);
}

const employee = data({
    id:101,
    department:"IT"
})
console.log(employee);