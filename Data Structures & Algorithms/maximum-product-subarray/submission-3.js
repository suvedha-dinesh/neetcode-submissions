class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = nums[0];
    let maxProd = nums[0];
    let minProd= nums[0];
        for(let i=1; i< nums.length; i++){
           let tempMax = Math.max(nums[i] , minProd * nums[i], maxProd * nums[i]);
            minProd = Math.min(nums[i] , minProd * nums[i], maxProd * nums[i]);
            maxProd = tempMax;
            max = Math.max(max, maxProd);
        }

return max;









        //     let max = -Infinity;
        // for(let i=0; i<nums.length;i++){
        //    let currMul = nums[i];
        //     max = Math.max(currMul, max)
        //     for(let j=i+1; j<nums.length;j++){
        //          currMul *= nums[j];
        //         max = Math.max(currMul, max)
        //     }
        // }
        // return max;
    }
}
