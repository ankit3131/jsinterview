    let schedule = function (interval) {

        let add = [];
        add.push(interval[0]);
        // console.log(add);
        for(let i=1;i<interval.length;i++) {
            let last = add[add.length - 1];
        let current = interval[i]
        //    console.log(current);
    
        if(current[0]<=last[1]) {
                // Merge by updating the end value
                last[1] = Math.max(last[1], current[1]);
        }
    
        else {

                // No overlap
                add.push(current);

            }
            }
        return add;
    }

    let course = [
        [1,3],
        [2,5],
        [8,10]
    ]
    console.log(schedule(course));

/////////////[ [ 1, 3 ], [ 2, 5 ], [ 8, 10 ] ]/////////////////

////step:2//////

// let schedule = function (string) {
// let sort = sort((a,b) => (a-b));
// console.log
// }
// let course = [
//     [2,3],
//     [1,4]
// ]
// console.log(schedule(course));