class TimeMap {
    constructor() {
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.store.has(key)){
            this.store.set(key, [])
        }
        this.store.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let values = this.store.get(key);
        console.log("values", values)
        if(!values) return '';
        let start = 0;
        let end = values.length -1;
        let res = '';
        while(start <= end){
            let mid = Math.floor((start + end)/2);
            if(values[mid][1] <= timestamp){
                res = values[mid][0];
                start = mid + 1;
            }  else end = mid -1;
        }
        return res;
    }
    
}
