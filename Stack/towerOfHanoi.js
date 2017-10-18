/*汉诺塔*/
function towerOfHanoi(n, from, to, helper){

    if (n > 0){
        towerOfHanoi(n-1, from, helper, to);
        to.push(from.pop());
        console.log('-----');
        console.log('Disk: ' + n);
        console.log('Source: ');
        from.print();
        console.log('Destination: ');
        to.print();
        console.log('Helper: ');
        helper.print();
        // console.log('Source: ' + from.toString());
        // console.log('Dest: ' + to.toString());
        // console.log('Helper: ' + helper.toString());
        
        // console.log('移动盘子 ' + n + ' 从 ' + from + ' 到 ' + to);
        towerOfHanoi(n-1, helper, to, from);
    }
}

var source = new Stack();
source.push(3);
source.push(2);
source.push(1);

var dest = new Stack();
var helper = new Stack();

towerOfHanoi(source.size(), source, dest, helper);

// towerOfHanoi(3, 'A', 'B', 'C');

// source.print();
// helper.print();
// dest.print();