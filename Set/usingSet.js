/*使用Set类*/
var set = new Set();

set.add(1);
console.log(set.values());  //输出["1"]
console.log(set.has());  //输出false
console.log(set.size());  //输出1

set.add(2);
console.log(set.values());  //输出["1", "2"]
console.log(set.has());  //输出false
console.log(set.size());  //输出2

set.remove(1);
console.log(set.values());  //输出["2"]

set.remove(2);
console.log(set.values());  //输出[]