/*二叉搜索树*/
function BinarySearchTree () {

	/*
	声明一个Node类，来表示树的每个节点（键）。
	 */
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var root = null;//根元素

	/*
	insert(key)
	像树中插入一个新的键。
	 */
	this.insert = function(key){
		var newNode = new Node(key);
		//如果插入的节点是第一个节点，就将根节点指向新节点。
		if (root === null) {
			root = newNode;
		}
		else {
			insertNode(root,newNode);
		}
	};
	//辅助函数，帮助我们找到新节点应该插入的正确位置。
	var insertNode = function(node, newNode){
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			}
			else {
				insertNode(node.left,newNode);
			}
		}
		else {
			if (node.right === null) {
				node.right = newNode;
			}
			else {
				insertNode(node.right,newNode);
			}
		}
	};

	/*
	inOrderTraverse()
	通过中序遍历方式遍历所有节点。
	以上行顺序访问BST所有节点的遍历方式，也就是以最小到最大的顺序访问所有节点。
	接收一个回调函数作为参数。
	回调函数用来定义我们对遍历到的每个节点进行的操作。
	 */
	this.inOrderTraverse = function(callback){
		inOrderTraverseNode(root,callback);
	};
	//用来接收一个节点和对应的回调函数作为参数
	var inOrderTraverseNode = function(node,callback){
		if (node !== null) {
			inOrderTraverseNode(node.left,callback);
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	};
	/*
	定义的inOrderTraverseNode是一个递归函数。
	第一次执行inOrderTraverseNode，传入两个参数，即root（11）和callback回调函数，记为（一）。
	11不为null，则再次执行inOrderTraverseNode，传入的参数是11的左侧子节点（7）和callback，记为（二）。
	7不为null，执行inOrderTraverseNode，传入的参数是7的左侧子节点（5）和callback，记为（三）。
	5不为null，执行inOrderTraverseNode，传入的参数是5的左侧子节点（3）和callback，记为（四）。
	3不为null，执行inOrderTraverseNode，传入的参数是3的左侧子节点和callback，记为（五）。
	但是，3的左侧子节点为null，所以（五）执行完，再执行callback函数，其中传入的参数是3。
	再执行inOrderTraverseNode，传入的参数是3的右侧子节点和callback，记为（六）。
	但是，3的右侧子节点为null，所以（六）执行完。
	回到（四），再执行callback函数，此时传入的参数是5。
	再执行inOrderTraverseNode，传入的参数是5的右侧子节点（6）和callback，记为（七）。
	但是，6的子节点为null，（七）执行完。
	然后回到（三），再执行callback，此时传入的参数是7。
	依此类推。
	 */

	/*
	preOrderTraverse()
	通过先序遍历方式遍历所有节点。
	以优先于后代节点的顺序访问每个节点。
	先访问节点本身，再访问它的左侧子节点，最后是右侧子节点。
	 */
	this.preOrderTraverse = function(callback){
		preOrderTraverseNode(root,callback);
	};
	var preOrderTraverseNode = function(node,callback){
		if (node !== null) {
			callback(node.key);
			preOrderTraverseNode(node.left,callback);
			preOrderTraverseNode(node.right,callback);
		}
	};

	/*
	postOrderTraverse()
	通过后序遍历方式遍历所有节点。
	先访问节点的后代节点，再访问节点本身。
	先访问左侧子节点，然后是右侧子节点，最后是父节点本身。
	 */
	this.postOrderTraverse = function(callback){
		postOrderTraverseNode(root,callback);
	};
	var postOrderTraverseNode = function(node,callback){
		if (node !== null) {
			postOrderTraverseNode(node.left,callback);
			postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	};

	/*
	min()
	返回树中最小的值/键。即树的最左端的节点。
	 */
	this.min = function(){
		return minNode(root);
	};
	var minNode = function(node){
		if (node) {
			while (node && node.left !== null) {
				node = node.left;
			}
			return node.key;
		}
		return null;
	};

	/*
	max()
	返回树中最大的值/键。即树的最右端的节点。
	 */
	this.max = function(){
		return maxNode(root);
	};
	var maxNode = function(node){
		if (node) {
			while (node && node.right !== null) {
				node = node.right;
			}
			return node.key;
		}
	};

	/*
	search(key)
	向树中查找一个键。
	如果节点存在，则返回true；如果不存在，则返回false。
	 */
	this.search = function(key){
		return searchNode(root,key);
	};
	var searchNode = function(node,key){
		//验证作为参数传入的node是否合法
		if (node === null) {
			return false;
		}
		//如果要找的键比当前的节点小，则在左侧的子树上搜索
		if (key < node.key) {
			return searchNode(node.left,key);
		}
		//如果要找的键比当前的节点大，则在右侧的子树上寻找
		else if (key > node.key) {
			return searchNode(node.right,key);
		}
		//要找的键和当前节点的键相等
		else {
			return true;
		}
	};

	/*
	remove(key)
	从树中移除某个键。
	 */
	this.remove = function(key){
		root = removeNode(root,key);
	};
	var removeNode = function(node,key){
		//检测的节点为null，则说明键不存在于树中
		if (node === null) {
			return null;
		}
		//如果要找的键比当前节点的值小，就沿着树的左边找到下一个节点
		if (key < node.key) {
			node.left = removeNode(node.left,key);
			return node;
		}
		//如果要找的键比当前节点的值大，就沿着树的右边找到下一个节点
		else if (key > node.key) {
			node.right = removeNode(node.right,key);
			return node;
		}
		//如果找到了要找的键
		else {
			//移除一个叶节点（没有左侧和右侧子节点的叶节点）
			if (node.left === null && node.right === null) {
				node = null;//给要移除的节点赋为null值
				return node;//将对应的父节点指针赋为null值
			}
			//移除一个只有一个子节点的节点
			/*跳过这个节点，直接将父节点指向它的指针指向子节点*/
			//没有左侧子节点，只有一个右侧子节点
			if (node.left === null) {
				node = node.right;
				return node;
			}
			//没有右侧子节点，只有一个左侧子节点
			else if (node.right === null) {
				node = node.left;
				return node;
			}
			//移除有两个子节点的节点（左侧子节点和右侧子节点）
			var findMinNode = function(node){
				if (node) {
					while (node && node.left !== null) {
						node = node.left;
					}
					return node;//返回节点
				}
				return null;
			};
			var aux = findMinNode(node.right);//找到右边子树最小的节点
			node.key = aux.key;//用右侧子树中最小节点的键区更新这个节点的值
			node.right = removeNode(node.right,aux.key);//把右侧子树中的最小节点移除
			return node;//向移动后的右侧树最小节点的父节点返回更新后节点的引用
		}
	};

}