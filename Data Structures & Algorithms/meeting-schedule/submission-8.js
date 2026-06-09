/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */
// 0                        30
//     5   10   15   20
class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(intervals.length === 0) return true;
        intervals.sort((a, b) => a.start - b.start);
        
        let prevEnd = intervals[0].end; //30
        for(let i=1; i<intervals.length; i++){
            if(prevEnd > intervals[i].start){
                return false;
            } else prevEnd = intervals[i].end
        }
        return true;
    }
}
