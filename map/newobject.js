let create = [{
    firstname : 'Aankit',
    lastname: 'kumar'},
      {firstname : 'Aankit',
    lastname: 'kumar'
}]
let arr = create.map((user) => {
    debugger;
let obj = {};
let newObj = 'Fullname'
if(!obj[newObj]) {
obj[newObj] = user.firstname + '' + user.lastname;
}
})
console.log(arr);