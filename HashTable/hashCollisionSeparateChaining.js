/*
分离链接法
为散列表的每一个位置创建一个链表并将元素存储在里面。
 */
function HashTableSeparateChaining () {

	var table = [];

	var loseloseHashCode = function(key){
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};

	/*
	ValuePair
	辅助类，表示将要加入LinkedList实例的元素。
	只会将key和value存储在一个Object实例中。
	 */
	var ValuePair = function(key, value){
		this.key = key;
		this.value = value;
		this.toString = function(){
			return '[' + this.key + ' - ' + this.value + ']';
		}
	};

	/*重写put()、get()、remove()方法*/

	this.put = function(key, value){
		var position = loseloseHashCode(key);
		/*
		验证要加入新元素的位置是否已经被占据。
		如果这个位置是第一次被加入元素，则在这个位置初始化一个LinkedList实例。
		 */
		if (table[position] == undefined) {
			table[position] = new LinkedList();
		}
		table[position].append(new ValuePair(key,value));
	};

	this.get = function(key){
		var position = loseloseHashCode(key);
		//确定在特定的位置上是否有元素存在
		if (table[position] !== undefined) {
			var current = table[position].getHead();//遍历之前先获取链表表头的引用
			//遍历链表来寻找键/值（从头到尾）
			while (current.next) {
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.next;
			}
			//检查元素在链表第一个或最后一个节点的情况
			if (current.element.key === key) {
				return current.element.value;
			}
		}
		return undefined;
	};

	this.remove = function(key){
		var position = loseloseHashCode(key);
		if (table[position] !== undefined) {
			var current = table[position].getHead();
			while (current.next) {
				if (current.element.key === key) {
					table[position].remove(current.element);
					//如果链表为空了，就将散列表这个位置的值设为undefined。
					if (table[position].isEmpty()) {
						table[position] = undefined;
					}
					return true;
				}
				current = current.next;
			}
			//检查是否为第一个或最后一个元素
			if (current.element.key === key) {
				table[position].remove(current.element);
				if (table[position].isEmpty()) {
					table[position] = undefined;
				}
				return true;
			}
		}
		return false;
	};

	this.print = function() {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
               console.log(i + ": " + table[i].toString());
            }
        }
    };

}