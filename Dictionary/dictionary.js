/*创建字典*/
function Dictionary () {

	var items = {};

	/*
	has(key)
	如果某个键存在于这个字典中，则返回true，反之返回false。
	 */
	this.has = function(key){
		return key in items;
	};

	/*
	set(key,value)
	向字典添加新元素。
	 */
	this.set = function(key, value){
		items[key] = value;
	};

	/*
	remove(key)
	通过使用键值来从字典中移除键值对应的数据值。
	 */
	this.remove = function(key){
		if (this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};

	/*
	get(key)
	通过键值查找特定的数值并返回。
	 */
	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	};

	/*
	values()
	将字典所包含的所有数值以数组的形式返回。
	 */
	this.values = function(){
		var values = [];
		for (var k in items) {
			if (this.has(k)) {
				values.push(items[k]);
			}
		}
		return values;
	};

	/*
	clear()
	将这个字典中的所有元素全部删除。
	 */
	this.clear = function(){
        items = {};
    };

    /*
    size()
    返回字典所包含元素的数量。
     */
    this.size = function(){
        return Object.keys(items).length;
    };

    /*
    keys()
    将字典所包含的所有键名以数组形式返回。
     */
    this.keys = function(){
        return Object.keys(items);
    };

	/*
	getItems()
	返回items变量。
	 */
	this.getItems = function(){
		return items;
	}
	
}