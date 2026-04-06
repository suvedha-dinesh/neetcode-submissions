class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result=[];
        for(let i=0; i< intervals.length; i++){
            //newInterval [1,5] current -> [4,6] //fails
            if(newInterval[1] < intervals[i][0] ){
                result.push(newInterval);
                return [...result, ...intervals.slice(i)]

            } else if( newInterval[0] > intervals[i][1]){  //newInterval [1,5] current -> [4,6] // fails
                result.push(intervals[i])
            } else { // first it creates [1,5] // second it creates [1,6]
                newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
            }
        }
        result.push(newInterval)
        return result;
    }
}
