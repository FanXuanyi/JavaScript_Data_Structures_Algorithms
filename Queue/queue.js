/*创建队列*/
function Queue () {

	var items = [];

	/*
	enqueue(element(s))
	向队列尾部添加一个或多个新的项
	 */
	this.enqueue = function(element){
		items.push(element);
	};

	/*
	dequeue()
	移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
	 */
	this.dequeue = function(){
		return items.shift();
	};

	/*
	front()
	返回队列中第一个元素（最先被添加，也将是最先被移除的元素）
	队列不做任何变动，不移除元素，只返回元素信息
	 */
	this.front = function(){
		return items[0];
	};

	/*
	isEmpty()
	如果队列中不包含任何元素，返回true，否则返回false
	 */
	this.isEmpty = function(){
		return items.length == 0;
	};

	/*
	clear()
	移除队列中的所有元素
	 */
	this.clear = function(){
		items = [];
	};

	/*
	size()
	返回队列的元素个数
	和数组的length属性类似
	 */
	this.size = function(){
		return items.length;
	};

	/*
	print()
	辅助方法，将队列中的元素输出到控制台
	 */
	this.print = function(){
		console.log(items.toString());
	};

}