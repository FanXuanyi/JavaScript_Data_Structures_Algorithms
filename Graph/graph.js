/*创建图*/
function Graph() {

	var vertices = [];//存储图中所有顶点的名字
	var adjList = new Dictionary();//存储邻接表，顶点的名字作为键，邻接顶点列表作为值

	/*
	addVertex()
	向图中添加一个新的顶点
	 */
	this.addVertex = function(v){
		vertices.push(v);//将顶点添加到顶点列表中
		adjList.set(v,[]);//在邻接表中，设置顶点v作为键对应的字典值为一个空数组
	};

	/*
	addEdge()
	添加顶点之间的边
	 */
	this.addEdge = function(v,w){
		adjList.get(v).push(w);//通过将w添加到v的邻接表中，添加了一条自顶点v到顶点w的边。
		adjList.get(w).push(v);//添加一条自w向v的边
		/*如果实现有向图，只需第一行代码；如果是无向图，两行代码都需要。*/
	};

	/*
	toString()
	 */
	this.toString = function(){
		var s = '';
		//迭代数组列表，将顶点的名字加入字符串中
		for (var i = 0; i < vertices.length; i++) {
			s += vertices[i] + ' -> ';
			var neighbors = adjList.get(vertices[i]);//取得该顶点的邻接表
			//迭代邻接表，将相邻顶点加入字符串中
			for (var j = 0; j < neighbors.length; j++) {
				s += neighbors[j] + ' ';
			}
			s += '\n';
		}
		return s;
	};

	/*为两个算法执行初始化操作*/
	var initializeColor = function(){
		var color = [];
		//算法开始执行时，所有顶点的颜色都是白色
		for (var i = 0; i < vertices.length; i++) {
			color[vertices[i]] = 'white';
		}
		return color;
	};

	/*
	广度优先搜索算法
	从指定的第一个顶点开始遍历图，先访问其所有相邻点，就像一次访问图的一层。
	先宽后深地访问顶点。
	 */
	this.bfs = function(v,callback){
		var color = initializeColor(),
			queue = new Queue();//存储待访问和待搜索的顶点
		queue.enqueue(v);//起始顶点入队列
		while (!queue.isEmpty()) {//如果队列非空
			var u = queue.dequeue(),//从队列中移除一个顶点
				neighbors = adjList.get(u);//取得一个包含其所有邻点的邻接表
			color[u] = 'grey';//标注为灰色，表明已经被发现但未被搜索
			for (var i = 0; i < neighbors.length; i++) {
				var w = neighbors[i];//取得u的邻点的值
				//如果还未被访问过，就标注为已被发现，并将这个顶点加入队列中
				if (color[w] === 'white') {
					color[w] = 'grey';
					queue.enqueue(w);
				}
			}
			color[u] = 'black';//标注为黑色，表明以探索过的
			if (callback) {
				callback(u);
			}
		}
	};

	/*
	改进过的广度优先方法
	寻找最短路径
	 */
	this.BFS = function(v){
		var color = initializeColor(),
			queue = new Queue(),
			d = [],//从源顶点v到每个顶点u距离
			pred = [];//前溯点，用来推导出从源顶点v到其他每个顶点u的最短路径
		queue.enqueue(v);
		for (var i = 0; i < vertices.length; i++) {
			d[vertices[i]] = 0;//初始化
			pred[vertices[i]] = null;//初始化
		}
		while (!queue.isEmpty()) {
			var u = queue.dequeue(),
				neighbors = adjList.get(u);
			color[u] = 'grey';
			for (var i = 0; i < neighbors.length; i++) {
				var w = neighbors[i];
				if (color[w] === 'white') {
					color[w] = 'grey';
					d[w] = d[u] + 1;//设置v和w之间的距离
					pred[w] = u;//当发现顶点u的邻点w时
					queue.enqueue(w);
				}
			}
			color[u] = 'black';
		}
		//返回一个包含d和pred的对象
		return {
			distances: d,
			predecessors: pred
		};
	};

	/*
	深度优先搜索
	从第一个指定的顶点开始遍历图，
	沿着路径直到这条路径最后一个顶点被访问了，
	接着原路回退并探索下一条路径。
	先深度后广度地访问顶点。
	 */
	this.dfs = function(callback) {
		var color = initializeColor();//创建颜色数组，并用值white为图中每个顶点对其做初始化
		//对于图实例中每一个未被访问过的顶点，调用私有的递归函数dfsVisit
		for (var i = 0; i < vertices.length; i++) {
			if (color[vertices[i]] === 'white') {
				dfsVisit(vertices[i], color, callback);
			}
		}
	};
	//递归函数dfsVisit，传入的参数是顶点、颜色数组以及回调函数
	var dfsVisit = function(u, color, callback){
		color[u] = 'grey';//表示被发现
		if (callback) {
			callback(u);
		}
		var neighbors = adjList.get(u);//取得包含顶点u所有邻点的列表
		//遍历顶点u的邻点w
		for (var i = 0; i < neighbors.length; i++) {
			var w = neighbors[i];
			if (color[w] === 'white') {
				dfsVisit(w, color, callback);
			}
		}
		color[u] = 'black';
	};

	/*
	改进了的深度优先搜索
	 */
	var time = 0;//追踪发现时间和完成探索时间
	var DFSVisit = function(u,color,d,f,p){
		console.log('discovered ' + u);
		color[u] = 'grey';
		d[u] = ++time;//当一个顶点第一次被发现时，追踪其发现时间
		var neighbors = adjList.get(u);
		for (var i = 0; i < neighbors.length; i++) {
			var w = neighbors[i];
			if (color[w] === 'white') {
				p[w] = u;//当一个顶点是由引自顶点u的边而被发现的，追踪它的前溯点
				DFSVisit(w,color,d,f,p);
			}
		}
		color[u] = 'black';
		f[u] = ++time;//当这个顶点被完全探索后，追踪其完成时间
		console.log('explored ' + u);
	};
	this.DFS = function(){
		var color = initializeColor(),
			d = [],//初始化
			f = [],//初始化
			p = [];//初始化
		//为图的每一个顶点来初始化数组
		for (var i = 0; i < vertices.length; i++) {
			f[vertices[i]] = 0;
			d[vertices[i]] = 0;
			p[vertices[i]] = null;
		}
		for (var i = 0; i < vertices.length; i++) {
			if (color[vertices[i]] === 'white') {
				DFSVisit(vertices[i], color, d, f, p);
			}
		}
		return {
			discovery: d,
			finished: f,
			predecessors: p
		}
	};

}