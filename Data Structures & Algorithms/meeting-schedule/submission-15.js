/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        
        if(intervals.length === 0) return true;
        intervals.sort((a, b) => a.start - b.start);
        let prev = intervals[0];
        for(let i=1; i<intervals.length; i++){
            if(prev.end > intervals[i].start){
                return false;
            } else prev.end = Math.max(prev.end, intervals[i].end)
        }
        return true;
    }
}
