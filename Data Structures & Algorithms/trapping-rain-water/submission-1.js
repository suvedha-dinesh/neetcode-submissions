class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
// min(maxLeft, maxRight) - height[i]
        let maxLeft=new Array(height.length).fill(0);
        maxLeft[0] =0;
        let maxRight=new Array(height.length).fill(0);
        maxRight[height.length-1] = 0;
        let totalWaterTrapped = 0;
        for(let i=1; i<height.length;i++){
            maxLeft[i] = Math.max(maxLeft[i-1], height[i-1])
        }
        for(let i=height.length-2; i>=0;i--){
            maxRight[i] = Math.max(maxRight[i+1], height[i+1])
        }
        for(let i=0; i<height.length;i++){
           let min = Math.min(maxLeft[i], maxRight[i]);
            let waterLevel =  min - height[i];
            if(waterLevel > 0){
                totalWaterTrapped += waterLevel;
            }
        }
        return totalWaterTrapped;
    }
}
