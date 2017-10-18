/*
循环队列
模拟击鼓传花游戏
 */
function hotPotato(nameList, num) {

	//将得到的名单全都加入队列
	var queue = new Queue();
	for (var i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i]);
	}

	var eliminated = ''; //淘汰
	while (queue.size() > 1) {
		/*
		给定一个数字，迭代队列。
		从队列开头移除一项，再将其添加到队列末尾。
		如果你把花传给了旁边的人，你被淘汰的威胁立刻就解除了。
		 */
		for (var i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		//一旦传递次数达到给定的数字，拿着花的那个人就被淘汰了
		eliminated = queue.dequeue();
		console.log(eliminated + '在击鼓传花游戏中被淘汰。');
	}
	return queue.dequeue();
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('胜利者：' + winner);