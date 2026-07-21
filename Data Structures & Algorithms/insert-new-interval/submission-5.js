class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let i=0;
        let result= [];
        let n = intervals.length;
        // no overlap interval =[[1,2], [3,4]] newInterval = [5,6]
        while(i<n && intervals[i][1] < newInterval[0]){
            result.push(intervals[i]);
            i++;
        }
        // overlap so merge intervals=[[1,3],[4,6]] newInterval = [2,5] // [1,6]
        while(i < n && intervals[i][0] <= newInterval[1]){
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
            i++;
        }
        // will be keep on merging and at last if the condition fails 
        //and came out of while loop then we willpush into the result
        result.push(newInterval);

        //pending intervals
        while(i <n){
            result.push(intervals[i]);
            i++;
        }
        return result;

    }
}
