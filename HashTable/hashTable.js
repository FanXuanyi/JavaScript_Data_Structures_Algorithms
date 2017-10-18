/*创建散列表*/
function HashTable () {

	var table = [];

	/*
	散列函数，是HashTable类中的一个私有方法。
	给定一个参数key，根据组成key的每个字符的ASCII码值得和得到一个数字。
	 */
	var loseloseHashCode = function(key){
		var hash = 0;//存储总和
		//遍历key并将ASCII表查到的每个字符对应的ASCII值加到hash变量中
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		//为了得到比较小的数值，会使用hash值和一个任意数做除数的余数
		return hash % 37;
	};

	/*
	put(key,value)
	向散列表增加一个新的项（也能更新散列表）。
	 */
	this.put = function(key, value){
		var position = loseloseHashCode(key);
		console.log(position + ' - ' + key);
		table[position] = value;
	};

	/*
	remove(key)
	根据键值从散列表中移除值。
	 */
	this.remove = function(key){
		table[loseloseHashCode(key)] = undefined;
	};

	/*
	get(key)
	返回根据键值检索到的特定的值。
	 */
	this.get = function(key){
		return table[loseloseHashCode(key)];
	};

	/*
	print()
	辅助方法，在控制台上输出HashTable中的值。
	 */
	this.print = function(){
		for (var i = 0; i < table.length; i++) {
			if (table[i] !== undefined) {
				console.log(i + ": " + table[i]);
			}
		}
	};

}