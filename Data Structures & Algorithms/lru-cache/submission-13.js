class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.list = new DDL();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)){
            return -1;
        } else {
            const node = this.cache.get(key);
            this.list.remove(node);
            this.cache.set(key, this.list.insertAtLast(key, node.val));
            return node.val;
        }
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
        } else if(this.cache.size >= this.capacity){
            const first = this.list.removeAtFront();
            this.cache.delete(first.key);
        }
        this.cache.set(key, this.list.insertAtLast(key, value))
    }
}
class Node{
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DDL{
    constructor(){
        this.head= null;
        this.tail = null;
        this.size =0;
    }

    isEmpty(){
        return this.size === 0;
    }

    insertAtLast(key, val){
        const node = new Node(key, val);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
        return node;
    }

    removeAtFront(){
        const first = this.head;
        this.remove(first);
        return first;
    }

    remove(node){
        if(this.size===1){
            this.head = null;
            this.tail = null;
        } else if(this.head === node){
            this.head = node.next;
            this.head.prev = null;
        } else if(this.tail === node){
            this.tail = node.prev;
            this.tail.next= null;
        } else { // A  -> B -> C
            if(node.prev) node.prev.next = node.next;
            if(node.next) node.next.prev = node.prev;
        }
        this.size--;
        return node;
    }



}
