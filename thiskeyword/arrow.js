
let user = {
    name:"ankit",
    details: () => {
        console.log(this.user)
    }
}
user.details();

// undefined