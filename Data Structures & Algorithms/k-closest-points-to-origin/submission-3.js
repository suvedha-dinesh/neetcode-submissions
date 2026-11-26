class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minHeap = new MinPriorityQueue((x) => x[0]);
        let output=[];
        for(let [p1, p2] of points){
            let distance = p1**2 + p2**2;
            minHeap.enqueue([distance, p1, p2]);
        }
        for(let i=0; i<k; i++){
            let [distance, p1, p2] = minHeap.dequeue();
            output.push([p1, p2])
        }
        return output;
    }
}
