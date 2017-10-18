/*创建链表*/
function LinkedList () {

	/*
	Node辅助类，表示要加入列表的项。
	包含一个element属性，即要添加到列表的值，以及一个next属性，即指向列表中下一个节点项的指针。
	 */
	var Node = function(element){
		this.element = element;
		this.next -= null;
	};

	var length = 0;//存储列表项的数量的length属性
	var head = null;//存储第一个节点的引用

	/*
	append(element)
	向列表尾部添加一个新的项
	 */
	this.append = function(element){

		var node = new Node(element),
			current;

		//向为空的列表添加一个元素
		if (head == null) {
			head = node;
		}
		//向不为空的列表尾部添加元素
		else {
			current = head;
			//循环列表，直到找到最后一项
			//列表最后一个节点的下一个元素始终是null
			while (current.next) {
				current = current.next;
			}
			//找到最后一项，将其next赋为node，建立链接
			current.next = node;
		}

		length++;//更新列表的长度

	};

	/*
	insert(position, element)
	向列表的特定位置插入一个新的项
	 */
	this.insert = function(position, element){
		//检查越界值
		if (position >= 0 && position <= length) {
			var node = new Node(element),
				current = head,
				previous,
				index = 0;

			//在列表的起点添加一个元素
			if (position === 0) {
				node.next = current;
				head = node;
			}
			//在列表中间或尾部添加一个元素
			else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}

			length++;//更新列表长度

			return true;
		}
		//越界就返回false，表示没有添加项到列表中
		else {
			return false;
		}
	};

	/*
	removeAt(position)
	从列表的特定位置移除一项
	 */
	this.removeAt = function(position){
		//检查越界值，验证这个位置是否有效
		//从0（包括0）到列表的长度（size-1）都是有效的位置
		if (position > -1 && position < length) {
			var current = head,
				previous,
				index = 0;

			//移除第一项
			if (position === 0) {
				head = current.next;
			}
			else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				/*
				current是对要移除元素的引用
				previous是对要移除元素的前一个元素的引用
				要移除current，只需将previous与current的下一项链接起来
				 */
				previous.next = current.next;
			}
			length--;
			return current.element;
		}
		//不是有效位置，返回null
		else {
			return null;
		}
	};

	/*
	remove(element)
	从列表中移除一项
	 */
	this.remove = function(element){
		var index = this.indexOf(element);
		return this.removeAt(index);
	};

	/*
	indexOf(element)
	返回元素在列表中的索引
	如果列表中没有该元素则返回-1
	 */
	this.indexOf = function(element){
		var current = head,
			index = 0;

		while (current) {
			if (element === current.element) {
				return index;
			}
			index++;
			current = current.next;//检查列表中下一个节点
		}
		return -1;
	};

	/*
	isEmpty()
	如果链表中不包含任何元素，返回true
	如果链表长度大于0则返回false
	 */
	this.isEmpty = function(){
		return length === 0;
	};

	/*
	size()
	返回链表包含的元素个数
	与数组的length属性类似
	 */
	this.size = function(){
		return length;//列表的length是内部控制的，因为LinkedList是从头构建的
	};

	/*
	getHead()
	获取第一个元素
	 */
	this.getHead = function(){
		return head;//head为私有变量，不能在LinkedList实例外部被访问和更改，只有通过LinkedList实例才可以
	};

	/*
	toString()
	把LinkedList对象转换成一个字符串
	 */
	this.toString = function(){
		var current = head,
			string = '';

		while (current) {
			string += current.element + (current.next ? ', ' : '');;
			current = current.next;
		}
		return string;
	};
	
	this.print = function(){
		console.log(this.toString());
	};

}