/*使用Queue类*/
var queue = new Queue();
console.log(queue.isEmpty());  //输出true

//添加一些元素
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Ben");

queue.print();  //输出John,Jack,Ben
console.log(queue.size());  //输出3
console.log(queue.isEmpty());  //输出false
queue.dequeue();
queue.print();  //输出Jack,Ben
queue.dequeue();
queue.print();  //输出Ben