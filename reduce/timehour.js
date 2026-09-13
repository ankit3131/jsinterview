    let keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"];

let keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"];
let name = keyName.reduce((obj , value , index) => {
if(!obj[value]) {
    obj[value] = [];
}
obj[value].push(keyTime[index])
return obj;
}, {})
console.log(name);
// output:-{
//     daniel: ["10:00", "10:40", "11:00"],
//     luis: ["09:00", "11:00", "13:00", "15:00"]
// }