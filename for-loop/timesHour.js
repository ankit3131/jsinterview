 function string(name,time){
    let emplpoye = {};
    for(let i=0;i<name.length;i++){
       if(!emplpoye[name[i]]){
emplpoye[name[i]] = [];
       }
           
    emplpoye[name[i]].push(time[i])
    }
   return emplpoye;
 }
 let keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"];
  let keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"];
 let alerts = string(keyName , keyTime)
 console.log(alerts);

//  output:- {
//   daniel: [ '10:00', '10:40', '11:00' ],
//   luis: [ '09:00', '11:00', '13:00', '15:00' ]
// }