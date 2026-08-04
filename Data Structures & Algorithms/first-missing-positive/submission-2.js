class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
          let len = nums.length;
    for(let i=0; i<len; i++){
        if(nums[i] <=0) nums[i] = len+1; 
    }
    // 1 2 4
    //-1 2 4
    //-1-2 4

    for(let i=0; i<len; i++){
       let currNum = Math.abs(nums[i]);
        if(currNum <= len){
            const idx = currNum -1;
            if(nums[idx] > 0) nums[idx] *= -1
        }
    }

    for(let i=0; i<len; i++){
        if(nums[i] > 0) return i+1;
    }
    return len +1;
    }
}
