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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        let count= 0;
        let start = intervals.map((i) => i.start).sort((a, b) => a-b);
        let end = intervals.map((i) => i.end).sort((a, b) => a-b);
        let s =0;
        let e =0;
        let res =0;
        while(s < intervals.length){
            if(start[s] < end[e]){
                count++;
                s++;
            } else {
                count--;
                e++;
            }
            res = Math.max(count, res);
        }
        return res;
    }
}
