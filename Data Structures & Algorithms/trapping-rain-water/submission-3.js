class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = Array.from({length: height.length});
        let rightMax = Array.from({length: height.length});
        let totalTrappedWater =0;
        let min = 0;
        leftMax[0] = 0;
        rightMax[height.length-1] = 0;
        for(let i=1; i< height.length; i++){
            leftMax[i] = Math.max(leftMax[i-1], height[i-1])
        }
        for(let i=height.length-2; i>=0; i--){
            rightMax[i] = Math.max(rightMax[i+1], height[i+1]);
        }

        for(let i=0; i<height.length; i++){
            min = Math.min(leftMax[i], rightMax[i]);
            let waterLevel = min - height[i];
            if(waterLevel >0){
                totalTrappedWater += waterLevel;
            } 
        }
        return totalTrappedWater;

    }
}
