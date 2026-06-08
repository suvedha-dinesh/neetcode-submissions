class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
            intervals.sort((a, b) => a[0] - b[0]);
    let result= [intervals[0]];

    for(let i=1; i< intervals.length; i++){
        let prev = result[result.length-1];
        let current = intervals[i];

        if(prev[1] >=current[0]){
            prev[1] = Math.max(prev[1], current[1]);
        } else {
            result.push(current);
        }
    }
    return result;
    }
}
