//声明并创建了一个数组
var fibonacci = [];
//把斐波那契数列的前两个数字分别赋给了数组的第二和第三位
fibonacci[1] = 1;
fibonacci[2] = 1;
//用循环，把数组的前两位上的元素相加，结果赋给当前位置上的元素
for (var i = 3; i < 20; i++) {
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
//循环遍历数组的各个元素，并输出在控制台上
for (var i = 1; i < fibonacci.length; i++) {
	console.log(fibonacci[i]);
}
//也可以采用以下方式直接输出数组
//console.log(fibonacci);