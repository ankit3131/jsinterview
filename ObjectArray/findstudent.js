const students = [
{
    name:"Ankit",
    subject:[
        {
            name:"Javascript",
            marks:85
        },
        {
            name:"React",
            marks:75
        }
    ]
},
{
    name:"Rahul",
    subject:[
        {
            name:"Javascript",
            marks:65
        },
        {
            name:"React",
            marks:95
        }
    ]
}
]
let result = [];
let count = 0;
let user = students.map(users => {
    let average = users.subject.reduce((accum , value) => {
        if(value.marks >= accum.marks) {
            debugger;
            return value;
        }
        return accum;
    }, users.subject[0]);

    result.push(average);
});
let arr1 = [];
//  console.log(result);
let final = result.reduce((accum , user) => {
    debugger;
if(user.marks >= accum.marks) {
return user;
}
return accum;
},result[0])
arr1.push(final);
console.log(arr1);
// output:-
//  {
//             name:"Javascript",
//             marks:85
//         }, 