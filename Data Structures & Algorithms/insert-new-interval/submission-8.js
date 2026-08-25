class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
         let i=0;
    let result=[];
    let n = intervals.length;
    while(i<n && newInterval[0] > intervals[i][1]){
        result.push(intervals[i]);
        i++;
    }
    while(i<n && newInterval[1] >= intervals[i][0]){
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    result.push(newInterval);
    while(i <n){
        result.push(intervals[i]);
        i++;
    }
    return result;
    }
}
