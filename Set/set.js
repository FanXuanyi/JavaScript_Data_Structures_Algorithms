/*创建集合*/
function Set () {

	//使用对象而不是数组来表示集合
	//JavaScript的对象不允许一个键指向两个不同的属性，保证了集合里的元素都是唯一的
	var items = {};

	/*
	has(value)
	如果值在集合中，返回true，否则返回false
	 */
	this.has = function(value){
		//return value in items;
		//更好的实现方式
		return items.hasOwnProperty(value);//hasOwnProperty()方法返回一个表明对象是否具有特定属性的布尔值
	};

	/*
	add(value)
	向集合添加一个新的项
	 */
	this.add = function(value){
		if (!this.has(value)) {
			items[value] = value;
			return true;
		}
		return false;
	};

	/*
	remove(value)
	从集合移除一个值
	 */
	this.remove = function(value){
		if (this.has(value)) {
			delete items[value];
			return true;
		}
		return false;
	};

	/*
	clear()
	移除集合中的所有项
	 */
	this.clear = function(){
		items = {};
	};

	/*
	size()
	返回集合所包含元素的数量
	 */
	this.size = function(){
		return Object.keys(items).length;
	};
	//以上代码只能在现代浏览器中运行，而下面的代码在任何浏览器中都能执行
	this.sizeLegacy = function(){
		var count = 0;
		for (var prop in items) {
			if (items.hasOwnProperty(prop)) {
				++count;
			}
			return count;
		}
	};

	/*
	values()
	返回一个包含集合中所有值的数组
	 */
	this.values = function(){
		return Object.keys(items);
	};
	//以上代码只能在现代浏览器中运行，而下面的代码在任何浏览器中都能执行
	this.valuesLegacy = function(){
		var keys = [];
		for (var key in items) {
			keys.push(key);
		}
		return keys;
	};

	/*集合操作*/

	/*
	并集union()
	对于给定的两个集合，返回一个包含两个集合中所有集合的新集合。
	 */
	this.union = function(otherSet){
		var unionSet = new Set();

		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}

		values = otherSet.values();
		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}
		return unionSet;
	};

	/*
	交集intersection()
	对于给定的两个集合，返回一个包含两个集合中共有的新集合。
	 */
	this.intersection = function(otherSet){
		var intersectionSet = new Set();

		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			if (otherSet.has(values[i])) {
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	};

	/*
	差集difference()
	对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。
	 */
	this.difference = function(otherSet){
		var differenceSet = new Set();

		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			if (!otherSet.has(values[i])) {
				differenceSet.add(values[i]);
			}
		}
		return differenceSet;
	};

	/*
	子集subset()
	验证一个给定集合是否是另一集合的子集。
	 */
	this.subset = function(otherSet){
		if (this.size() > otherSet.size()) {
			return false;
		}
		else {
			var values = this.values();
			for (var i = 0; i < values.length; i++) {
				if (!otherSet.has(values[i])) {
					return false;
				}
			}
			return true;
		}
	};

}