function value(increase) {
    let min = 0;
    let max = [];
for(let i=0;i<increase.length;i++) {
    debugger;
    for(let j=i+1;j<increase.length;j++) {
        if(increase[i].x > increase[j].x) {
            let temp = increase[i].x
            increase[i].x = increase[j].x
increase[j].x = temp;
        }
    }
}
return increase;
}

let arr = value([{"x": 0}, {"x": -1}, {"x": 1}]);
console.log(arr);


////[{"x": -1}, {"x": 0}, {"x": 1}]