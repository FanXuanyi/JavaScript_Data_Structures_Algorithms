var graph = new Graph();

var myVertices = ['A','B','C','D','E','F','G','H','I'];

for (var i = 0; i < myVertices.length; i++) {
	graph.addVertex(myVertices[i]);
}

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

console.log(graph.toString());

function printNode(value){
	console.log('Visited vertex: ' + value);
}

/*广度优先搜索*/
graph.bfs(myVertices[0],printNode);

/*使用BFS寻找最短路径*/
var shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);

//从顶点A到其他顶点的最短路径
var fromVertex = myVertices[0];//将顶点A作为源顶点
//对于除了顶点A的每个其他顶点，计算顶点A到它的路径
for (var i = 0; i < myVertices.length; i++) {
	var toVertex = myVertices[i],
		path = new Stack();//创建一个栈来存储路径值
	for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
		path.push(v);
	}
	path.push(fromVertex);
	var s = path.pop();
	while (!path.isEmpty()) {
		s += ' - ' + path.pop();
	}
	console.log(s)
}

/*深度优先搜索*/
graph.dfs(printNode);
