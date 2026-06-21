<<<<<<< HEAD
=======
function string(str) {
 let sorts = str.split('').sort();
 let count = 1;
 let maxcount = 1;
for(let i=0;i<sorts.length;i++) {
if(sorts[i] === sorts[i+1]) {
   count++
   if(count>maxcount) {
      maxcount = count;
   }
}
else{
   count = 1;
}
}

  return maxcount;
}
                                                                                                                                                             
console.log(string("ababaecefd"));

>>>>>>> 97170f1ba188675ca44dd51c3b39a983b5643656
