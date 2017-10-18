/*实现一个电子邮件地址薄*/

var dictionary = new Dictionary();

dictionary.set('Jack', 'jack@email.com');
dictionary.set('John', 'john@email.com');
dictionary.set('Jim', 'jim@email.com');

console.log(dictionary.has('Jack'));  //输出true

console.log(dictionary.size());  //输出3

console.log(dictionary.keys());  //输出["Jack", "John", "Jim"]
console.log(dictionary.values());  //输出["jack@email.com", "john@email.com", "jim@email.com"]
console.log(dictionary.get('Jim'));  //输出jim@email.com

dictionary.remove('John');

console.log(dictionary.keys());  //输出["Jack", "Jim"]
console.log(dictionary.values());  //输出["jack@email.com", "jim@email.com"]
console.log(dictionary.getItems());  //输出Object {Jack: "jack@email.com", Jim: "jim@email.com"}
