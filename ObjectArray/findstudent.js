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
accum = value.marks;
// console.log(value);
        }
        return accum;
    },0)
    return {
        name:users.name,
        marks:average
    }

    // console.log(average);
})
// let final = user.map((users) => {
    let last = user.reduce((accum , users) => {
if(users.smarks > accum) {
        accum = users.marks;
         return users;
}
return accum;
    },0)
   
console.log(last);
// output:-
//  {
//             name:"Javascript",
//             marks:85
//         }, 