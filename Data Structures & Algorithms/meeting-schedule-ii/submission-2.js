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
    // start [0, 5, 15] end [10, 20, 40];
    // 0                            40
    //     5     10    15    20
    minMeetingRooms(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        let start = intervals.map((interval)=> interval.start).sort((a, b) => a-b);
        let end = intervals.map((interval)=> interval.end).sort((a, b) => a-b);
        let count =0;
        let s=0
        let e =0;
        let result= 0;
        while(s < intervals.length){
            if(start[s] < end[e]){
                s++;
                count++;
            } else {
                count--;
                e++;
            }
            result = Math.max(count, result);
        }
        return result;
    }
}
