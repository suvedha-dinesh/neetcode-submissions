class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length === 1) return intervals;
        intervals.sort((a, b) => a[0] - b[0])
        let result= [intervals[0]];
        
        for(let i=1; i<intervals.length;i++){
            let prevLast = result[result.length-1];
            let current = intervals[i];
            if(intervals[i][0] <= prevLast[1]){
                prevLast[1] = Math.max(prevLast[1], current[1]);
            } else {
                result.push(current)
            }

        }
        return result;

    }
}
