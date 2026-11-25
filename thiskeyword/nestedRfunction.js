const user = {
    name:"Ankit",
    show: function() {
        function display() {
            console.log(this.show)
        }
        display()
    }
}
user.show();

// output:- undefined
// Regulor function use this own keyword , display is independent function
// "this" window keyword so will be provide details to user
// ouput will be come undefined

