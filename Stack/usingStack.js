/*使用Stack类*/

//初始化Stack类
var stack = new Stack();
//验证栈是否为空
console.log(stack.isEmpty());  //输出为true

//向栈里添加元素
stack.push(5);
stack.push(6);
console.log(stack.peek());  //输出6

stack.push(11);
console.log(stack.size());  //输出3
console.log(stack.isEmpty());  //输出为false

//从栈里移除两个元素
stack.pop();
stack.pop();
console.log(stack.size());  //输出1
stack.print();  //输出5