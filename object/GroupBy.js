function arr1(item) {
    let arr = {};
    let key = Object.keys(item)
    for(let i=0;i<item.length;i++) {
         let key = item[i].id;
        if(!arr[key]) {
arr[key] = [];
 arr[key].push(item[i]); 
        }
        else {
            arr[key].push(item[i])
        }
        
    }
    return arr;
}

let array = arr1([
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
])
console.log(array);
