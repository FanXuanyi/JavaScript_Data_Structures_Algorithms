var tree = new BinarySearchTree();

/*向树中插入键*/
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

/*中序遍历*/
function printNode(value){
	console.log(value);
}
tree.inOrderTraverse(printNode);

/*先序遍历*/
function printNode(value){
	console.log(value);
}
tree.preOrderTraverse(printNode);

/*后序遍历*/
function printNode(value){
	console.log(value);
}
tree.postOrderTraverse(printNode);

/*最小值*/
console.log(tree.min());

/*最大值*/
console.log(tree.max());

/*搜索一个特定的值*/
console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

/*移除一个节点*/
tree.remove(6);
console.log(tree.search(6) ? 'Key 6 found.' : 'Key 6 not found.');
tree.remove(5);
console.log(tree.search(5) ? 'Key 5 found.' : 'Key 5 not found.');
tree.remove(15);
console.log(tree.search(15) ? 'Key 15 found.' : 'Key 15 not found.');