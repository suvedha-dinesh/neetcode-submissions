class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let max  =0;
        let start = 0;
        let area;
        let end = height.length -1;
        while(start < end){
            area = (end - start) * Math.min(height[start], height[end]);
            max = Math.max(area, max);
            if(height[start] < height[end]){
                start++
            } else end--;
        }
        return max;
    }
}
