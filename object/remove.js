function num(nums) {
    let obj = {};
    for(let i=0;i<nums.length;i++) {
        let key = Object.keys(nums[i])
                let value = Object.values(nums[i])
                let num = Number(nums[i])
if(value === num)
{
    debugger;
obj[i].id = value;
}
    }
    return obj;
}
let remove = num([

    {id:1},
     {id:2},
{id:1}
])
console.log(remove)