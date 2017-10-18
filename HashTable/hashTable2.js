/*
更好的散列函数djb2
 */
function HashTable2 () {

	var table = [];

	var djb2HashCode = function(key){
		//初始化一个hash变量并赋为一个质数
		var hash = 5381;//大多实现使用5381
		//迭代参数key
		for (var i = 0; i < key.length; i++) {
			//将hash与33相乘（用来当作一个魔力数），并和当前迭代到的字符的ASCII码值相加
			hash = hash *33 + key.charCodeAt(i);
		}
		//使用相加的和与另一个随机质数相除的余数
		//随机质数比我们认为的散列表的大小要大
		//本例中，我们认为散列表大小为1000
		return hash % 1013;
	};

	this.put = function(key, value){
		var position = djb2HashCode(key);
		console.log(position + ' - ' + key);
		table[position] = value;
	};

	this.remove = function(key){
		table[djb2HashCode(key)] = undefined;
	};

	this.get = function(key){
		return table[djb2HashCode(key)];
	};

	this.print = function(){
		for (var i = 0; i < table.length; i++) {
			if (table[i] !== undefined) {
				console.log(i + ": " + table[i]);
			}
		}
	};

}