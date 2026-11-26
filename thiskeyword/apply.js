// bind method diffrence argument passed to array like this.

const user = {
    name: "Ankit"
};

function showDetails(city , role) {
        console.log(this.name , city , role)

}

showDetails.apply(user , ["Noida" , "Frontend developer"])