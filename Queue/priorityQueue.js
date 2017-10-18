/*优先队列*/
function PriorityQueue () {

	var items = [];

	/*
	创建一个特殊的元素
	这个元素包含了要添加到队列的元素（任意类型）及其在队列中的优先级
	 */
	function QueueElement(element, priority){
		this.element = element;
		this.priority = priority;
	}

	/*
	添加元素
	 */
	this.enqueue = function(element, priority){
		var queueElement = new QueueElement(element, priority);

		//如果队列为空，直接将元素入列
		if (this.isEmpty()) {
			items.push(queueElement);
		}
		//否则比较该元素与其他元素的优先级
		else {
			var added = false;
			for (var i = 0; i < items.length; i++) {
				/*
				当找到一个比要添加的元素的priority值更大（优先级更低）的项时，
				就把新元素插入到它之前
				（对于其他优先级相同，但是先添加到队列的元素，
				同样遵循先进先出的原则）
				 */
				if (queueElement.priority < items[i].priority) {
					items.splice(i, 0, queueElement);
					added = true;
					break;
				}
			}
			/*
			如果要添加元素的priority值大于任何已有的元素，
			把它添加到队列的末尾就行了
			 */
			if (!added) {
				items.push(queueElement);
			}
		}
	};

	/*其他方法与默认的Queue实现相同*/

	this.dequeue = function(){
		return items.shift();
	};

	
	this.front = function(){
		return items[0];
	};

	this.isEmpty = function(){
		return items.length == 0;
	};

	
	this.clear = function(){
		items = [];
	};

	this.size = function(){
		return items.length;
	};

	//与默认的稍有不同
	this.print = function () {
	    var temp = [];
	    for(var i = 0; i < items.length; i++){
	    	temp.push(items[i].element);
	    }
	    console.log(temp.toString());
	};
	
}