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
        intervals.sort((a, b) => a.start - b.start)
        let prevEnd = intervals[0].end;
        for(let i=1; i<intervals.length; i++){
            let current = intervals[i].start; // 5 < 30
            if(current < prevEnd ){
                return false
            } else prevEnd = intervals[i].end;
        }
        return true;
    }
}
