class MedianFinder {
    constructor() {
        this.arr = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        let start = 0;
        let end = this.arr.length-1;
        while(start<=end){
            let mid = Math.floor((start+end)/2)
            if(this.arr[mid] < num){
                start = mid+1;
            } else end = mid-1;
        }
        this.arr.splice(start,0,num)
    }

    /**
     * @return {number}
     */
    findMedian() {
        let mid = Math.floor(this.arr.length/2);
        if(this.arr.length %2 === 0){
            return (this.arr[mid] + this.arr[mid-1])/2;
            
        } else {
            return this.arr[mid];
        }
    }
}
