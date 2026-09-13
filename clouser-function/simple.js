function outer() {
    debugger;
    let count = 0;
    function inner() {
        console.log(count)
    }
    inner();
}
outer();