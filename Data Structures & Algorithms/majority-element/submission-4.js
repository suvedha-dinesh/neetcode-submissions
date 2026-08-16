class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let len = nums.length;
        let candidate;
        let count =0;
        // 5
        // cadidaye = num
        //candidate === num 
        //count++;
        for(let num of nums){
            if(count === 0){
                candidate = num;
                count++;
            } else if(candidate === num){
                count++;
            } else{
                count--;
            }
        }
        return candidate;
    }
}
