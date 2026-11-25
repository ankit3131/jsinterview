const user = {
    name: "Ankit",
    show: function() {
     const display = () => {
        console.log(this.name)
     }
         display();   
    }
};
user.show();

// output:- "Ankit"

// Nested arrow function use this keyword not own keyword 
// Nested arrow function inhertiance keyword use