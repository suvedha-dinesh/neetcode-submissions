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
        let start = intervals.map((s) =>s.start).sort((a, b) => a-b);
        let end = intervals.map((s) =>s.end).sort((a, b) => a-b);
        let count =0;
        let s=0;
        let e = 0;
        let result =0;
        while(s < intervals.length){
            if(start[s] < end[e]){
                s++;
                count++;
            } else {
                e++;
                count--;
            }
            result = Math.max(result, count);
        }
        return result;
    }
}
