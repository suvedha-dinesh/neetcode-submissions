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
        intervals.sort((a, b) => a.start - b.start);
        if (intervals.length === 0) return true;
         let prevEnd = intervals[0].end    
        for(let i=1; i<intervals.length; i++){
            let current = intervals[i].start
            if(prevEnd > current){
                return false;
            }
            prevEnd = intervals[i].end;
        }
        return true;
    }
}
