
function adult(){
        let user = [];
    for(let i=0;i<users.length;i++) {
        if(users[i].Age <= 18) {
            debugger;
        console.log(users[i])
    }
   
}
 console.log("ID card elegiabale");
}
function isLogical(users , callback){

callback();
}

const users = [
    {
        Name:"Ankit",Age:18

    },
    {
        Name:"Rahul" , Age:30
    },
    {
        Name:"Arun",Age:20
    }
]
isLogical(users , adult);