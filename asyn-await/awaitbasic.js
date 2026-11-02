function getData() {
    return (
        new Promise ((result) => {
        setTimeout( () => {
            
            result('resolve two')
        } ,3000)
    }
        )
    )
}
let output = getData();
output.then((data) => console.log(data));

// output:- resolve two (without await)

