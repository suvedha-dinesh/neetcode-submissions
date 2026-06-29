class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.list = new DDL();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            const node = this.cache.get(key);
            this.list.remove(node);
            this.cache.set(key, this.list.insertAtLast(key, node.val));
            return node.val;
            
        } else return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
             const node = this.cache.get(key);
             this.list.remove(node);
        }
        this.cache.set(key, this.list.insertAtLast(key, value));

        if(this.cache.size > this.capacity){
            const node = this.list.removeAtFront();
           this.cache.delete(node.key)
        }
    }
}


class Node{
    constructor(key, val){
        this.prev = null;
        this.next = null;
        this.val = val;
          this.key = key;
    }
}

class DDL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size =0;
    }

    insertAtLast(key, val){
        const node = new Node(key, val);
        if(this.isEmpty()){
            this.head= node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
        return node;
    }
      isEmpty(){
        return this.size === 0;
    }
    removeAtFront(){
        const node = this.head;
        this.remove(node);
        return node;
    }

    remove(node){
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } else if(this.head ===  node){
            this.head = node.next;
            this.head.prev = null;
        }  else if(this.tail ===  node){
            this.tail = node.prev;
            this.tail.next = null;
        } else { // a b c
            if(node.prev) node.prev.next = node.next;
            if(node.next) node.next.prev = node.prev;
        }
        this.size--;
    }
}