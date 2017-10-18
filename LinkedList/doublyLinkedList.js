/*双向链表*/
function DoublyLinkedList () {

	var Node = function(element){
		this.element = element;
		this.next = null;
		this.prev = null;//一个新指针，指向前一个  //新增的
	};

	var length = 0;
	var head = null;
	var tail = null;//对列表最后一项的引用  //新增的

	this.append = function(element){
        var node = new Node(element),
            current;

        if (head === null){
            head = node;
            tail = node;  //新增的
        }
        else {
            //新增的
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
        length++;
    };

	/*
	向任意位置插入一个新元素
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
				if (!head) {//新增的
					head = node;
					tail = node;
				}
				else {
					node.next = current;
					current.prev = node;//新增的
					head = node;
				}
			}
			//在列表最后添加一个新元素
			else if (position === length) {//新增的
				current = tail;
				current.next = node;
				node.prev = current;
				tail = node;
			}
			//在列表中间或尾部添加一个元素
			else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;

				current.prev = node;//新增的
				node.prev = previous;//新增的
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
	从任意位置移除元素
	 */
	this.removeAt = function(position){
		//检查越界值
		if (position > -1 && position < length) {
			var current = head,
				previous,
				index = 0;

			//移除第一项
			if (position === 0) {
				head = current.next;

				//如果只有一项，更新tail  //新增的
				if (length === 1) {
					tail = null;
				}
				else {
					head.prev = null;
				}
			}
			//移除最后一项
			else if (position === length-1) {//新增的
				current = tail;
				tail = current.prev;
				tail.next = null;
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
				current.next.prev = previous;//新增的
			}
			length--;
			return current.element;
		}
		//不是有效位置，返回null
		else {
			return null;
		}
	};

	this.remove = function(element){

        var index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function(element){

        var current = head,
            index = -1;

        //检查第一项
        if (element == current.element){
            return 0;
        }
        index++;
        //检查列表中间的元素
        while(current.next){
            if (element == current.element){
                return index;
            }
            current = current.next;
            index++;
        }
        //检查最后一项
        if (element == current.element){
            return index;
        }
        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.toString = function(){

        var current = head,
            s = current ? current.element : '';

        while(current && current.next){
            current = current.next;
            s += ', ' + current.element;
        }
        return s;
    };

    this.inverseToString = function() {
        var current = tail,
            s = current ? current.element : '';

        while(current && current.prev){
            current = current.prev;
            s += ', ' + current.element;
        }
        return s;
    };

    this.print = function(){
        console.log(this.toString());
    };

    this.printInverse = function(){
        console.log(this.inverseToString());
    };

    this.getHead = function(){
        return head;
    };

    this.getTail = function(){
        return tail;
    };

}