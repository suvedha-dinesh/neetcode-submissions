class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.k = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)){
           return -1;
        } else {
          const value = this.map.get(key)
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
             this.map.delete(key)
        } else if(this.map.size >= this.k){
          const first = this.map.keys().next().value;
            this.map.delete(first);
         } 
        this.map.set(key, value)
    }
}

class Node{
    constructor(val){
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

 class DDL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size =0;
    }



 }
