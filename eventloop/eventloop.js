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

// output :- A ,F , C , D , B , E

console.log("A");

setTimeout(() => {
    debugger;
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
}, 0);

Promise.resolve().then(() => {
    debugger;
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

console.log("1");

setTimeout(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });

    console.log("4");
}, 0);

Promise.resolve().then(() => {
    console.log("5");

    setTimeout(() => {
        console.log("6");
    }, 0);
});

Promise.resolve().then(() => {
    console.log("7");
});

console.log("8");

// output :- "1" , "8" , "5" , "7" , "2" , "4" , "3" , "6"

// firstly sync "1" , "8"
// first promise "5" , "7" , micrstask and then wait time mico-queue "2" , same block "4" , and then microtask - queue"3" 
// last one will print last time print will be finishe"6"


console.log("Start");

process.nextTick(() => {
    console.log("NextTick");
});

Promise.resolve().then(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

// output:- "Start" , "End" , "Promise" , "NextTick" , "Timeout"

// firstly will be print:- "Start" and "End" is sync
// second Microtask queue "Promise" and "NextTick"
// third Micro queue "Timeout" 


// console.log("A");

// process.nextTick(() => {
//     console.log("B");

//     Promise.resolve().then(() => {
//         console.log("C");
//     });
// });

// Promise.resolve().then(() => {
//     console.log("D");

//     process.nextTick(() => {
//         console.log("E");
//     });
// });

// setTimeout(() => {
//     console.log("F");
// }, 0);

// console.log("G");

// output:- "A" , "G" , "B" , "C" ,  "D" , "E", "F"
// first "A" , "G" will be sync print
// Second:- 1st nectTick will be print "B" indside wait "C"
// Third:- "D" and then wait time "C"
// four:- Setimeout should be print "F"

// console.log("Start");

// setTimeout(() => {
//     console.log("A");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("B");

//     Promise.resolve().then(() => {
//         console.log("C");
//     });
// });

// queueMicrotask(() => {
//     console.log("D");
// });

// console.log("End");

// Output:- "First" , "End" , "B" , "C" , "D" , "A"


// console.log("1");

// async function test() {
//     console.log("2");

//     await Promise.resolve();

//     console.log("3");
// }

// test();

// Promise.resolve().then(() => {
//     console.log("4");
// });

// setTimeout(() => {
//     console.log("5");
// }, 0);

// console.log("6");

// Firstly 1 will be excute 
// asyn await test(); so inner will be print 2 but outside will be print 6
// now indise test() print 3
// Promise second will be print 4 
// last one timeout finised 5
//  1 , 2 , 6 , 3 , 4 , 5

// console.log("Start");

// async function first() {
//     console.log("A");

//     await Promise.resolve();

//     console.log("B");

//     await Promise.resolve();

//     console.log("C");
// }

// async function second() {
//     console.log("D");

//     await Promise.resolve();

//     console.log("E");
// }

// first();
// second();

// console.log("End");

// firsly "Start"  sync
// second first() inside use "A" sync , after wait second() inside "D" sync
// third wait first() "B" and then wait second() "E"
// fourth last "C"

// "Start" , "A" , "D" , "End"  , "B" , "E" , "C"


// console.log("Start");

// async function getData() {
//     console.log("A");

//     await Promise.resolve();

//     console.log("B");

//     Promise.resolve().then(() => {
//         console.log("C");
//     });

//     console.log("D");
// }

// getData();

// Promise.resolve().then(() => {
//     console.log("E");
// });

// setTimeout(() => {
//     console.log("F");
// }, 0);

// console.log("End");

// "START" , "A" , "END" , "B" , "D" , "E" , "C" , "F"

    // async function test() {
    //     console.log("A");

    //     await Promise.resolve();

    //     console.log("B");

    //     Promise.resolve().then(() => console.log("C"));

    //     console.log("D");
    // }

    // test();

    // Promise.resolve().then(() => console.log("E"));

// Output:-
// firstly test() sync "A"
// Second inside test() await "B" outside will be print "E"
// Thirwill be print output "B" , and then c will wait and Will be excute "D"
// Finally will be print "C"
// "A" , "B" , "D" , "E" , "C"


// console.log("Start");

// async function second() {
//     console.log("D");

//     await Promise.resolve();

//     console.log("E");
// }

// async function first() {
//     console.log("A");

//     await Promise.resolve();

//     console.log("B");

//     await Promise.resolve();

//     console.log("C");
// }




// second();
// first();

// console.log("End");

// firstly work "Start" sync first() call "A" , await "D" , "End" 
// sync outside work and then already wait "B" 
// again pause so await resume "E"  and last will be "C"

// "Start" , "A" , "D" , "End" , "B" , "E" , "C"


console.log("Start");

async function first() {
    console.log("A");

    await Promise.resolve();

    console.log("B");

    setTimeout(() => {
        console.log("C");
    }, 0);

    await Promise.resolve();

    console.log("D");
}

Promise.resolve().then(() => {
    console.log("E");
});

first();

setTimeout(() => {
    console.log("F");
}, 0);

console.log("End");

// "Start" , "A" , "End" , "E" , "B" , "D" , "F" , "C"