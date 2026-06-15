function groupAnagrams(str) {
const groups = {};
for(let i=0;i<str.length;i++) {
    debugger;
    const sorted = str[i].split('').sort().join('');

    if(!groups[sorted]) {
        groups[sorted] = [];
    }

    groups[sorted].push(str[i]);
}
    return Object.values(groups);
}
const input = ["eat","tea","tan","ate","nat","bat"];
let result = groupAnagrams(input);
console.log(result);