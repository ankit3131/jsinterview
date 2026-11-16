console.log("A");

setTimeout(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("D");

    setTimeout(() => {
        console.log("E");
    }, 0);
});

console.log("F");

// sync:- A ,F , C , D , B , E

console.log("A");

setTimeout(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("D");

    setTimeout(() => {
        console.log("E");
    }, 0);
});

console.log("F");

// Output:- "A" , "F" , "D" , "B" , "C" , "E"

//1 This is a rule sync "A" , "B"
//2 Promise Micrtask queue "D" but First timer print "B" (schdule time E)
//3 First Promise will be "C" before time was excute
//4 last timer will be print "E"