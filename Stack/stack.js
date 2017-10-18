/*创建栈*/
function Stack () {

	//创建一个数组，保存栈里的元素
	var items = [];

	/*声明一些方法*/
	
	/*
	push(element(s))
	添加一个或几个新元素到栈顶
	 */
	this.push = function(element){
		items.push(element);
	};

	/*
	pop()
	移除栈顶的元素，同时返回被移除的元素
	 */
	this.pop = function(){
		return items.pop();
	};

	/*
	peek()
	返回栈顶的元素，不对栈做任何修改
	不会移除栈顶的元素，仅仅返回它
	 */
	this.peek = function(){
		return items[items.length-1];
	};

	/*
	isEmpty()
	如果栈里没有任何元素就返回true，否则返回false
	 */
	this.isEmpty = function(){
		return items.length == 0;
	};

	/*
	size()
	返回栈里的元素个数
	和数组的length属性类似
	 */
	this.size = function(){
		return items.length;
	};

	/*
	clear()
	移除栈里的所有元素
	 */
	this.clear = function(){
		items = [];
	};

	/*
	print()
	辅助方法，将栈里的元素输出到控制台
	 */
	this.print = function(){
		console.log(items.toString());
	};

}
