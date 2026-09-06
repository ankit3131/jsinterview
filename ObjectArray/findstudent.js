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
            marks:70
        }
    ]
}
]
let user = students.map(users => {
    let average = users.subject.reduce((accum , value) => {
        if(value.marks >= accum) {
            debugger;
accum = accum + value.marks;
console.log(value);
        }
    },0)
    // console.log(average);
})
// console.log(user);
// output:-
//  {
//             name:"Javascript",
//             marks:85
//         }, 