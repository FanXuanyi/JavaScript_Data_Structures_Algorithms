/*循环链表*/
function CircularLinkedList() {

    var Node = function(element){
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function(element){

        var node = new Node(element),
            current;

        //向为空的列表添加一个元素
        if (head === null){
            head = node;
        }
        else {
            current = head;
            //循环列表，直到找到最后一项
            //列表的最后一个节点的下一个元素指向head而不是null
            while(current.next !== head){
                current = current.next;
            }
            //找到最后一项，将其next赋为node，建立链接
            current.next = node;
        }
        //将插入的节点的next赋为head，建立链接
        node.next = head;

        length++;//更新列表的长度
    };

    this.insert = function(position, element){

        //检查越界值
        if (position >= 0 && position <= length){

            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            //在列表的起点添加一个元素
            if (position === 0){
                //如果列表中没有节点
                if(!head){
                    head = node;
                    node.next = head;
                }
                else {
                    node.next = current;
                    //更新最后一个元素
                    while(current.next !== head){
                        current = current.next;
                    }
                    head = node;
                    current.next = head;
                }
            
            }
            //在列表中间或尾部添加一个元素
            else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++;//更新列表长度

            return true;
        }
        //越界就返回false，表示没有添加项到列表中
        else {
            return false;
        }
    };

    this.removeAt = function(position){

        //检查越界值
        if (position > -1 && position < length){
            var current = head,
                previous,
                index = 0;

            //移除第一项
            if (position === 0){
                while(current.next !== head){
                    current = current.next;
                }
                head = head.next;
                current.next = head;
            }
            else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }

            length--;

            return current.element;
        }
        else {
            return null;
        }
    };

    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function(element){

        var current = head,
            index = -1;

        //检查第一项
        if (element == current.element){
            return 0;
        }
        index++;
        //检查列表中的元素
        while(current.next !== head){

            if (element == current.element){
                return index;
            }

            current = current.next;
            index++;
        }
        //检查最后一项
        if (element == current.element){
            return index;
        }
        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function(){
        return head;
    };

    this.toString = function(){

        var current = head,
            s = current.element;

        while(current.next !== head){
            current = current.next;
            s += ', ' + current.element;
        }
        return s.toString();
    };

    this.print = function(){
        console.log(this.toString());
    };
}

