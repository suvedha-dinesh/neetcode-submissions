class MyHashMap {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.arr[key] = [key, value];
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.arr[key]){
            return this.arr[key][1]
        } else return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.arr[key] = null;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
