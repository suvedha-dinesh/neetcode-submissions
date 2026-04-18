class RandomizedSet {
    constructor() {
        this.map =  new Map();
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if(this.map.has(val)){
            return false;
        } 
        this.arr.push(val);
            this.map.set(val, this.arr.length -1) // val -> index
            return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        // 1 -> 0, 2 -> 1, 3 ->2
        //[1,2,3] // remove(2) -> [1,3]
        if(!this.map.has(val)) return false;
        const index = this.map.get(val);
        const last = this.arr[this.arr.length -1];

        this.arr[index] = last; //[1,3,3]
        this.map.set(last, index)
        this.map.delete(val);
        this.arr.pop();
        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
