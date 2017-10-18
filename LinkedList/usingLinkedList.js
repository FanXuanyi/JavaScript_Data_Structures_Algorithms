var list = new LinkedList();

list.append(15);
list.print();  //输出15
console.log(list.indexOf(15));  //输出0

list.append(10);
list.print();  //输出15, 10
console.log(list.indexOf(10));  //输出1

list.append(13);
list.print();  //输出15, 10, 13
console.log(list.indexOf(13));  //输出2
console.log(list.indexOf(10));  //输出1

list.append(11);
list.append(12);
list.print();  //输出15, 10, 13, 11, 12

console.log(list.removeAt(1));  //输出10
list.print()  //输出15, 13, 11, 12

console.log(list.removeAt(3));  //输出12
list.print();  //输出15, 13, 11

list.insert(0,16);
list.print();  //输出16, 15, 13, 11

list.insert(1,17);
list.print();  //输出16, 17, 15, 13, 11

list.insert(list.size(),18);
list.print();  //输出16, 17, 15, 13, 11, 18

list.remove(16);
list.print();  //输出17, 15, 13, 11, 18

list.remove(11);
list.print();  //输出17, 15, 13, 18
